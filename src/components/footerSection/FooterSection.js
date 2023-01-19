import { Button } from 'antd'
import React from 'react'

export const FooterSection = () => {
	return (
		<section className='pt-12 pb-1 w-full z-10 bg-black/30 relative'>
			<div className='container text-center'>
				<div className=''>
					<h3 className='text-xl text-white uppercase tracking-wider'>
						Круглосуточный<span className='text-orange-500'> эвакуатор</span>  в Могилёве
					</h3>
				</div>
				<div className=''>
					<p className='text-white font-light text-sm'>Наши водители имеют огромный опыт работы, а это бережная погрузка любой сложности и бережная транспортировка Вашего авто.</p>
				</div>

				<div className='text-orange-500 text-2xl'>
					<p className='mb-1'>
						+375 29 944-12-76
					</p>
					<p className=''>
						+375 29 278-08-78
					</p>
				</div>

				<div className='text-white'>
					<p className='text-xs uppercase'>
						запишитесь заранее на определёное время и получите скидку<span className='text-orange-500 text-sm'> 20%</span> на эвакуцию Вашего автомобиля.
					</p>
					<Button type='primary'>
						Записаться
					</Button>
				</div>

				<div className="
    w-full 
    flex
    justify-center
    items-center 
    md:flex-row
    flex-col 
    sm:pt-4 
    xx:pt-1 
    border-t-[1px]
    border-t-[#3F3E45]
	 mt-10
    ">
					<p className="
      font-poppins
      font-normal
      text-center
      sm:text-[14px]
      xy:text-[10px]
      leading-[27px]
      text-white
    text-gray-400/50
		mb-0
      ">
						Copyright Ⓒ 2018-2023. Created & Designed By
						<a href="https://vi-tech.by" className="text-cyan-500" target="_blank"> VI:TECH</a>
						. &nbsp; Все права защищены. Информация на сайте не является публичной офертой.
					</p>
				</div>
			</div>
		</section>
	)
}
