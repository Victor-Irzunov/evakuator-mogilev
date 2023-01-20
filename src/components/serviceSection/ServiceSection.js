import React, { useState } from 'react'
import img1 from '../../images/service/14.webp'
import img2 from '../../images/portfolio/7.webp'
import img3 from '../../images/portfolio/5.webp'
import img4 from '../../images/portfolio/10.webp'
import img5 from '../../images/service/13.webp'
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
		<section className='py-12 w-full z-10' id='service'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='text-white text-4xl text-center uppercase'>
						Услуги
					</h2>
					<LineOutlined style={{ color: '#f8862e', fontSize: '3rem' }} />
				</div>


				<div className='mt-12 sd:flex sd:justify-evenly sd:items-center sd:flex-wrap'>


					<div className='w-full sd:w-5/12 relative mb-6 img-black hover:border' >
						<Image src={img1} className='' />
						<p className='absolute top-0
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0
						 text-white
						uppercase font-bold text-lg'
						>
							Эвакуатор с места ДТП
						</p>
						<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20'>
							<ul className='text-xs text-white/90 text-center'>
								<li>
									приедим оперативно
								</li>
								<li>
									погрузим в любом состоянии
								</li>
								<li>

								</li>
							</ul>
						</div>
						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Эвакуатор на место ДТП')}
						>
							Заказать
						</Button>
					</div>

					<div className='w-full sd:w-5/12 relative mb-6 img-black hover:border'>
						<Image src={img2} />
						<p className='absolute top-0 
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0 text-white
						uppercase font-bold text-lg'
						>Достанем машину из кювета</p>

						<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20'>
							<ul className='text-xs text-white/90 text-center'>
								<li>
									машина лежит на днище
								</li>
								<li>
									машина на боку
								</li>
								<li>
									машина в грязи
								</li>
								<li>
									машина в яме/канаве
								</li>
							</ul>
						</div>


						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Достать машину с кювета')}
						>
							Заказать
						</Button>
					</div>

					<div className='w-full sd:w-5/12 relative mb-6 img-black hover:border'>
						<Image src={img3} className='' />
						<p className='absolute top-0
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0 text-white
						uppercase font-bold text-lg'
						>Перевезём машину на СТО</p>

						<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20'>
							<ul className='text-xs text-white/90 text-center'>
								<li>
									поломка двигателя
								</li>
								<li>
									поломка коробки передач
								</li>
								<li>
									машина полностью заблокирована
								</li>
								<li>
									поломка подвески
								</li>
								<li>
									проблемы с электроникой
								</li>
								<li>
									проблемы с сигнализацией
								</li>
							</ul>
						</div>

						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Перевести машину на СТО')}
						>
							Заказать
						</Button>
					</div>

					<div className='w-full sd:w-5/12 relative mb-6 img-black hover:border'>
						<Image src={img4} className='' />
						<p className='absolute top-0
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0 text-white
						uppercase font-bold text-lg'
						>Перевозка машины по РБ и РФ</p>

						<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20'>
							<ul className='text-xs text-white/90 text-center'>
								<li>
									поломка машины в Беларуси
								</li>
								<li>
									поломка машины в России
								</li>
								<li>
									покупка машины в Беларуси
								</li>
								<li>
									покупка машины в России
								</li>
							</ul>
						</div>



						<Button
							type='primary'
							size='large'
							className='absolute bottom-3 right-0 left-0 uppercase font-bold mx-12 z-10'
							onClick={() => showModal('Перевозка машины по РБ или(и) РФ')}
						>
							Заказать
						</Button>
					</div>

					<div className='w-full sd:w-5/12 relative img-black hover:border'>
						<Image src={img5} className='' />
						<p className='absolute top-0 
						left-0 right-0 
						py-3 pl-2 z-10
						text-center
						bg-gradient-to-b
						from-black/80 to-black/0 text-white
						uppercase font-bold text-lg'
						>Тех. помощь на дороге</p>

						<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20'>
							<ul className='text-xs text-white/90 text-center'>
								<li>
									требуется прикурить автомобиль
								</li>
								<li>
									сломался замок в машине
								</li>
								<li>
									нужно подвезти топливо
								</li>
								<li>
									спустило колесо, нет запаски
								</li>
								<li>
									машина полностью заблокирована
								</li>
								<li>
									вышла из строя сигнализация
								</li>
							</ul>
						</div>

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
