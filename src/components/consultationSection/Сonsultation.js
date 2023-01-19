import React from 'react'
import { Image } from 'antd'
import img from '../../images/consultation/1.webp'

export const Сonsultation = () => {
	return (
		<section className='py-6 z-20 bg-white'>
			<div className='container text-center'>
				<p className='text-3xl text-[#f8862e] font-bold'>Звоните за любой консультацией</p>
				<div className='flex items-end pl-6 justify-center text-gray-600'>
					<a href='tel:80299441276' className='text-3xl '>+375 29 944-12-76 </a>
					<span className='ml-1 text-[14px] font-extralight mb-1.5'>велком</span>
				</div>
				<div className='flex items-end justify-center text-gray-600'>
					<a href='tel:80292780878' className='text-3xl'>+375 29 278-08-78</a>
					<span className='ml-1 font-extralight text-[14px] mb-1.5'>мтс</span>
				</div>
				<div className='mt-4'>
					<Image src={img} width='80%' />
				</div>
			</div>
		</section>
	)
}
