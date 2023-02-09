import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: 'org-ialr7176xUE4myKTzcivbiBn',
    apiKey: 'sk-3VABvCuWRzIp2yrAl7uoT3BlbkFJxXBultJCVORcwxL1PAq',
  });
const openai = new OpenAIApi(configuration);

const fetchmodels = async () => {
    const response = await openai.listModels()
    return response.data;
    
}

export default fetchmodels;