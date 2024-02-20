import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextResponse } from "next/server";
import Summarize from "../../../lib/summarize";
import Scrape from "../../../lib/scrape";

const API_KEY = process.env.GOOGLE_API;
const ENGINE_ID = process.env.ENGINE_ID;

export async function POST(req: Request) {
  const { input } = await req.json();
  let results = [];
  let linksArray = [];

  if( input == undefined){
    return NextResponse.json({ message: "Input Undefined" },{ status: 500 });
  }

  try {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${input}&num=6&fields=items(title,link,displayLink,pagemap/metatags)`
    );

    if (response.status === 200) {
      results = response.data.items;
      for (let i = 0; i < results.length; i++) {
        const obj = results[i];
        if (obj.link) {
          linksArray.push(obj.link);
        }
      }
    }
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
        const scrapedData = await Scrape(url);
        const response = await Summarize(scrapedData);
        const individualSummary = response.summary_text;
        individualSummaries.push(individualSummary);
      } catch (error) {
        console.error(`Error in processing ${url}: ${error}`);
      }
    })
  );
  const concatenatedText = individualSummaries.join(" ");
  try {
    const summary = await Summarize(concatenatedText);
    return NextResponse.json({ summary, results }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error in generating summary : " +error },
      { status: 500 }
    );
  }
}
