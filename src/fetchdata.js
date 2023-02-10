import { Configuration, OpenAIApi } from "openai";

var ApiKey;
const configuration = new Configuration({
    organization: 'org-ialr7176xUE4myKTzcivbiBn',
    apiKey: ApiKey,
  });
const openai = new OpenAIApi(configuration);

export const fetchmodels = async () => {
    const response = await openai.listModels()
    return response.data;
}


export const fetchmessages = async (message, currentModel) => {
    const response = await openai.createCompletion({
        model: `${currentModel}`,
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
    return response.data.choices[0].text
}
