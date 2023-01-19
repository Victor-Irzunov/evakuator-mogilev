import React, {useState} from 'react'
import { Form, Button, Input } from 'antd'
import InputMask from 'react-input-mask'

export const FormTel = ({btn='Жду звонка'}) => {
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
		<Form
			name="basic"
			labelCol={{
				span: 4,
			}}
			wrapperCol={{
				span: 20,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Телефон"
				name="tel"
				tooltip="Вам перезвонит первый освободившийся оператор"
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

				<Input type='hidden'/>
			</Form.Item>


			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button type="primary" htmlType="submit">
					{btn}
				</Button>
			</Form.Item>
		</Form>
	)
}
