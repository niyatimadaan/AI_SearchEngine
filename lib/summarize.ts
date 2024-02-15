interface SummaryResult {
    summary_text: any;
}

import { HfInference } from "@huggingface/inference";

export default async function Summarize(data: string): Promise<SummaryResult> {
  const hf = new HfInference(process.env.HF_ACCESS_TOKEN);
  const response = await hf.summarization({
    model: "facebook/bart-large-cnn",
    inputs: data,
  });
  return response;
}
