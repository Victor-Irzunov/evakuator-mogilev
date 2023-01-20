import React, { useState } from 'react'
import { Button, Image } from 'antd'
import { motion } from "framer-motion"
import { Link as LinkScroll } from 'react-scroll'
import { PhoneOutlined, ShakeOutlined, CalendarOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import image from '../../../images/menu/img.webp'

export const MenuMobil = ({ onClose }) => {
	const [open, setOpen] = useState(false)

	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})

	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
		}
	}


	return (
		<div className=''>
			<nav className='text-center'>
				<ul className='h-[50vh] flex flex-col justify-between items-center text-lg text-[#f8862e] cursor-pointer'>
					<li>
						<LinkScroll to='main'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Главная
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='service'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Услуги
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='price'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Цены
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='galereya'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Галерея
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='vopros'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Вопросы
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='otzyvy'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Отзывы
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='contact'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Контакты
						</LinkScroll>
					</li>
					<li className=''>
						<Button type='primary'>
							<a href='tel:80299441276'>
								<PhoneOutlined className='rotate-90 animate-pulse' /><span className='uppercase'> Срочная эвакуация</span>
							</a>
						</Button>
					</li>
					<li>
						<Button type='primary' onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}>
							<ShakeOutlined /> Заказать звонок
						</Button>
					</li>
					<li>
						<Button type='primary' onClick={() => showDrawer('right', 'Заказать на дату', 'date')}>
							<CalendarOutlined /> Заказать на дату
						</Button>
					</li>

				</ul>
				<div className='absolute bottom-1'>
					<Image src={image} width='80%' />
				</div>
			</nav>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}
