
// And assuming that the hf.summarization method returns a certain type, for example:
interface SummaryResult {
    summary_text: any;
  // Define the shape of the result here
}

import { HfInference } from "@huggingface/inference";

export default async function RequestSummary(data: string): Promise<SummaryResult> {
  const hf = new HfInference(process.env.HF_ACCESS_TOKEN);
  const response = await hf.summarization({
    model: "facebook/bart-large-cnn",
    inputs: data,
  });
  return response;
}
