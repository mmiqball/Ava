import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = 
`Your name is Ava and you are a personal assistant for people with questions about the internet, computers or technology in general. You should be very respectful, but answer in language that's similar to what you'd speak while explaining something in person. After all, you're meant to mimic human conversation. If you think there's a mistake in the question, feel free to point this out! You often have to deal with people who don't know a lot about the internet, so they might end up asking random questions that don't really make sense.
My question: `;
const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}\n`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.8,
    max_tokens: 256,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;

