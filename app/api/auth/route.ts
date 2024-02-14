import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextResponse } from "next/server";
import ScrapePage from "./scrapePage";
import RequestSummary from "./requestFile";

const API_KEY = process.env.GOOGLE_API;
const ENGINE_ID = process.env.ENGINE_ID;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req: Request) {
    // console.log(req.json());
  const { input } = await req.json();
  console.log(`input at Post req : ${input}`)
  let results = [];
  let linksArray = [];

  if( input == undefined){
    return NextResponse.json({ message: "Input Undefined" },{ status: 500 });
  }

  try {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${input}`
    );

    if (response.status === 200) {
      results = response.data.items;
      for (let i = 0; i < Math.min(5, results.length); i++) {
        const obj = results[i];
        if (obj.link) {
          linksArray.push(obj.link);
        }
      }
    }
    console.log("Got links");
  } catch (err) {
    return NextResponse.json(
      { message: "Error in fetching data" },
      { status: 500 }
    );
  }

  let individualSummaries: any[] = [];

  await Promise.all(
    linksArray.map(async (url) => {
      try {
        const scrapedData = await ScrapePage(url);
        const response = await RequestSummary(scrapedData);
        const individualSummary = response.summary_text;
        console.log(individualSummary);
        individualSummaries.push(individualSummary);
        console.log(`Got individual summary for ${url}`);
      } catch (error) {
        console.error(`Error in processing ${url}: ${error}`);
      }
    })
  );
  console.log("Got scraped data");
  const concatenatedText = individualSummaries.join(" ");
  console.log("Got individual summaries");
  console.log("Got scraped data");
  try {
    const summary = await RequestSummary(concatenatedText);
    console.log("Got summary");
    console.log(summary);
    //   res.status(200).json({ summary, results });
    return NextResponse.json({ summary, results }, { status: 200 });
  } catch (error) {
    console.log(error);
    //   res.status(500).json({ message: 'Error in generating summary' });
    return NextResponse.json(
      { message: "Error in generating summary" },
      { status: 500 }
    );
  }
}
