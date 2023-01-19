import React from 'react'
import { Modal } from 'antd'
import {FormTel} from '../form/FormTel'

export const ModalComp = ({ isModalOpen, title, handleCancel }) => {
	
	// const handleOk = () => {
	// 	setIsModalOpen(false);
	// };
	
	
	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			// onOk={onFinish}
			footer={null}
		>
			<FormTel
				btn={'Заказать эвакуатор'}
			/>
		</Modal>
	)
}
