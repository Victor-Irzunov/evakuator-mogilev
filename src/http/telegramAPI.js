import axios from 'axios'
const token = '5798033469:AAFpC4IHrP8dHYqZqyuPaAbn252Qj-f80bE'
const chat_id = '-1001893564088'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`
// const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
// const chat_id = '-1001794221917'
// const uri_api = `https://api.telegram.org/bot${token}/sendMessage`


export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}




