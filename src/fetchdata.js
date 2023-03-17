import { Configuration, OpenAIApi } from 'openai';
import { ApiKey } from './api';

const configuration = new Configuration({
  organization: 'org-ialr7176xUE4myKTzcivbiBn',
  apiKey: ApiKey,
});
const openai = new OpenAIApi(configuration);

export const fetchmodels = async () => {
  const response = await openai.listModels();
  return response.data
};

export const fetchmessages = async (message, currentModel) => {
  if (
    currentModel === 'gpt-3.5-turbo' ||
    currentModel === 'gpt-3.5-turbo-0301' ||
    currentModel === 'gpt-4' ||
    currentModel === 'gpt-4-0314'
  ) {
    const completion = await openai.createChatCompletion({
      model: currentModel,
      max_tokens: 250,
      messages: [{ role: 'user', content: message }],
    });

    return completion.data.choices[0].message.content;
  } else {
    const response = await openai.createCompletion({
      model: currentModel,
      prompt: message,
      max_tokens: 250,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return response.data.choices[0].text;
  }
};
