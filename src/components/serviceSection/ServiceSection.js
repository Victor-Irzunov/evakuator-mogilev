import React, { useState } from 'react'
import img1 from '../../images/service/1.webp'
import img2 from '../../images/portfolio/7.jpg'
import img3 from '../../images/portfolio/5.jpg'
import img4 from '../../images/portfolio/10.jpg'
import img5 from '../../images/service/13.jpg'
import { Button, Image, Modal } from 'antd'
import { LineOutlined } from '@ant-design/icons'
import { ModalComp } from '../modal/ModalComp'

export const ServiceSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')


	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	};

	const handleCancel = () => {
		setIsModalOpen(false)
	};

	return (
		<section className='py-12 w-full z-10'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='text-white text-4xl text-center uppercase'>
						Услуги
					</h2>
					<LineOutlined style={{ color: '#f8862e', fontSize: '3rem' }} />
				</div>


				<div className='mt-12'>
					<div className='w-full relative mb-6 img-black border' >
						<Image src={img1} className='' />
						<p className='absolute top-0
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0
						 text-white
						uppercase font-bold text-lg'
						>Эвакуатор с места ДТП</p>
						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Эвакуатор на место ДТП')}
						>
							Заказать
						</Button>
					</div>

					<div className='w-full relative mb-6 img-black border'>
						<Image src={img2} className='' />
						<p className='absolute top-0 
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0 text-white
						uppercase font-bold text-lg'
						>Достанем машину из кювета</p>
						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Достать машину с кювета')}
						>
							Заказать
						</Button>
					</div>

					<div className='w-full relative mb-6 img-black border'>
						<Image src={img3} className='' />
						<p className='absolute top-0
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0 text-white
						uppercase font-bold text-lg'
						>Перевезём машину на СТО</p>
						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Перевести машину на СТО')}
						>
							Заказать
						</Button>
					</div>

					<div className='w-full relative mb-6 img-black border'>
						<Image src={img4} className='' />
						<p className='absolute top-0
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0 text-white
						uppercase font-bold text-lg'
						>Перевозка машины по РБ и РФ</p>
						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Перевозка машины по РБ или(и) РФ')}
						>
							Заказать
						</Button>
					</div>

					<div className='w-full relative  img-black border'>
						<Image src={img5} className='' />
						<p className='absolute top-0 
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0 text-white
						uppercase font-bold text-lg'
						>Тех. помощь на дороге</p>
						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Помощь на дороге')}
						>
							Заказать
						</Button>
					</div>
				</div>
			</div>

			<ModalComp isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} />
		</section>
	)
}
