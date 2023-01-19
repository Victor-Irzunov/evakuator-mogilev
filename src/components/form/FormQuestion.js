import React, { useState } from 'react'
import { Form, Button, Input } from 'antd'
import InputMask from 'react-input-mask'

const { TextArea } = Input

export const FormQuestion = () => {
	const [tel, setTel] = useState('')
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}
	return (
		<>
			<Form
				name="basic"
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>

				<Form.Item
					label="Имя"
					name="name"
					tooltip=""
				>
					<Input />
				</Form.Item>


				<Form.Item
					label="Телефон"
					name="tel"
					tooltip="Мы Вам перезвоним с ответом"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputMask
						placeholder="29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className='border py-1 px-3 rounded-md'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>
				</Form.Item>



				<Form.Item
					label="Ваш вопрос"
					name="message"
					tooltip=""
					rules={[
						{
							required: true,
							message: 'Пожалуйста напишите вопрос!',
						},
					]}
				>
					<TextArea
						placeholder="Сообщение"
						autoSize={{
							minRows: 3,
						}}
					/>
				</Form.Item>


				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Отправить
					</Button>
				</Form.Item>
			</Form>

			<p>В ближайшее время мы Вам перезвоним с ответом.</p>

		</>
	)
}
