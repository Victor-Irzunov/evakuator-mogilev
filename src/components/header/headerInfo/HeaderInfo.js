import React, { useState } from 'react'
import { Image, Button, Affix } from 'antd'
import logo from '../../../images/logo/logo1.png'
import telegram from '../../../images/social-icon/telegram.svg'
import viber from '../../../images/social-icon/viber.svg'
import whatsapp from '../../../images/social-icon/WhatsApp.svg'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined } from '@ant-design/icons'
import { useScreens } from '../../../Constants/constants'
import { DrawerComp } from '../../drawer/DrawerComp'

export const HeaderInfo = ({ setIsVisible }) => {
	const screens = useScreens()
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}

	return (
		<>
			{
				screens.lg ?
					<div className='flex justify-between items-center container'>
						<div className='flex justify-start items-center'>
							<Image src={logo} preview={false} width='80px' />
							<div className='flex flex-col items-start text-[#f8862e]'>
								<span className='uppercase'>
									круглосуточный
								</span>
								<span className='uppercase text-2xl font-semibold leading-none'>
									эвакуатор
								</span>
								<span className='text-xs pl-1.5'>
									грузоподъёмность до <span className='font-semibold text-sm leading-none'>4</span>т
								</span>
							</div>
						</div>

						<div className='flex text-xl items-center text-[#f8862e]'>
							<ClockCircleOutlined />
							<span className='uppercase ml-2 font-semibold mr-0.5'>работаем 24</span>
							<span>/</span>
							<span className='uppercase ml-0.5 font-semibold'>7</span>
						</div>


						<div className=''>
							<div className='flex text-lg'>
								<PhoneOutlined className='rotate-90 mr-3 text-2xl text-[#fb923c]' />
								<div className='flex items-end'>
									<a href='tel:80299441276' className='text-2xl text-gray-600'>+375 29 944-12-76 </a>
									<span className='ml-1.5 font-extralight text-[#fb923c]'>велком</span>
								</div>
							</div>
							<div className='flex text-lg text-[#f8862e]'>
								<PhoneOutlined className='rotate-90 mr-3 text-2xl text-[#fb923c]' />
								<div className='flex items-end'>
									<a href='tel:80292780878' className='text-2xl'>+375 29 278-08-78</a>
									<span className='ml-1.5 font-extralight text-[#fb923c]'>мтс</span>
								</div>
							</div>
						</div>

						<div className='flex flex-col items-center'>
							<p className='text-sm text-[#f8862e] mb-1'>Напишите нам</p>
							<div>
								<Image src={telegram} style={{ width: '30px' }} />
								<Image src={whatsapp} style={{ width: '30px', marginLeft: '8px' }} />
								<Image src={viber} style={{ width: '30px', marginLeft: '8px' }} />
							</div>
						</div>
					</div>

					:

					<div className='flex flex-col justify-between items-center pt-20 pb-4 relative z-10 bg-white'>
						<div className='flex text-lg items-center text-[#f8862e]'>
							<ClockCircleOutlined />
							<span className='uppercase ml-2 font-semibold mr-0.5'>работаем 24</span>
							<span>/</span>
							<span className='uppercase ml-0.5 font-semibold'>7</span>
						</div>
						<div className='mt-2 mb-2'>
							<div className='text-lg text-orange-500'>
								<div className='flex items-end pl-7'>
									<a href='tel:80299441276' className='text-2xl'>+375 29 944-12-76 </a>
									<span className='ml-1 text-[14px] font-extralight text-[#fb923c] uppercase'>a1</span>
								</div>
							</div>
							<div className='text-lg text-orange-500'>
								<div className='flex items-end pl-7'>
									<a href='tel:80292780878' className='text-2xl'>+375 29 278-08-78</a>
									<span className='ml-1 font-extralight text-[15px] text-[#fb923c]'>мтс</span>
								</div>
							</div>
						</div>

						<div className='flex flex-col items-center mb-2'>
							<p className='text-sm text-[#f8862e] mb-2 uppercase' onClick={() => showDrawer('top', 'Заказать звонок')}><ShakeOutlined /> Заказать звонок</p>
							<div>
								<Image src={telegram} style={{ width: '30px' }} />
								<Image src={whatsapp} style={{ width: '30px', marginLeft: '1.5em' }} />
								<Image src={viber} style={{ width: '30px', marginLeft: '1.5em' }} />
							</div>
						</div>
						<Button type='primary'>
							<a href='tel:80299441276'>
								<PhoneOutlined className='rotate-90 animate-pulse' /><span className='uppercase'> Срочная эвакуация</span>
							</a>
						</Button>
						{/* <Button type='primary' className='mt-2 shadow-xl' onClick={() => showDrawer('top', 'Заказать звонок')}>
							<ShakeOutlined /> Заказать звонок
						</Button> */}
						<Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix>
					</div>
			}
			<DrawerComp open={open} placement={'top'} title={'Заказать звонок'} setOpen={setOpen} isActiveForm={{ tel: true }} />
		</>
	)
}
