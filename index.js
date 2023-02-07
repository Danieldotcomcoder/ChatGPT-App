const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  organization: 'org-ialr7176xUE4myKTzcivbiBn',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function callApi() {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 7,
    temperature: 0,
  });

  console.log(response.data.choices[0].text);
}
callApi()

