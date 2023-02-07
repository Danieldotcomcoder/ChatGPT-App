const { Configuration, OpenAIApi } = require('openai');
const express = require('express')

const configuration = new Configuration({
  organization: 'org-ialr7176xUE4myKTzcivbiBn',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);


const app = express()
const port = 3000

app.get('/', async(req,res) => {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'Say this is a test',
        max_tokens: 7,
        temperature: 0,
      });
    
      console.log(response.data.choices[0].text);

      res.json({
        data: response.data
      })
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})