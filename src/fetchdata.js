import { Configuration, OpenAIApi } from 'openai';
import { ApiKey } from './api';

const configuration = new Configuration({
  organization: 'org-ialr7176xUE4myKTzcivbiBn',
  apiKey: ApiKey,
});
const openai = new OpenAIApi(configuration);

export const fetchmodels = async () => {
  const response = await openai.listModels();
  return response.data;
};

export const fetchmessages = async (message) => {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo-0301',
    max_tokens: 250,
    messages: [{ role: 'user', content: message }],
  });

  return completion.data.choices[0].message.content;
};
