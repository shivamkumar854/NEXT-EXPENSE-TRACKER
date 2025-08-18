import 'dotenv/config';
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

async function test() {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324:free",
    messages: [{ role: "user", content: "Say hello from OpenRouter" }],
  });

  console.log(completion.choices[0].message);
}

test();
