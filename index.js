const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function asyncCall() {
    const response = await openai.createChatCompletion({
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": "What can you do?" }]
    });
    console.log(response.data.choices[0].message);
}

asyncCall();





module.exports = { openai };