import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: 'org-ialr7176xUE4myKTzcivbiBn',
    apiKey: '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',
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
        max_tokens: 25,
        temperature: 0.5,
      });
      
    return response
}
