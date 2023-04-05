import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listModels();
const data = response.data.data;

console.log(data.map((model) => model.id).join(', '));

openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say This is a test",
}).then((response) => {
	const resData = response.data;
	console.log(JSON.stringify(resData, null, 2));
}).catch(e => {
    console.log("Error occurred");
    console.log(e.response.data);
});

export const exporta = 'exporta';
