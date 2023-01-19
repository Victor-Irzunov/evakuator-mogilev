import React from 'react'
import { LineOutlined } from '@ant-design/icons'

export const PriceSection = () => {
	return (
		<section className='py-12 w-full z-10 bg-white'>
			<div className='container'>
				<div className='text-center text-4xl text-orange-500'>
					<h2 className='uppercase'>Лучшая <span className='text-black'>цена</span></h2>
					<LineOutlined style={{ color:'#f8862e', fontSize: '3rem' }} />
				</div>

				<div className=''>
					<div className='flex justify-between items-center'>
						<div className='w-1/4 invisible m-0.5'></div>
						<div className='w-1/4 h-20 shadow-lg bg-[#f8862e] flex justify-center items-center m-0.5'>
							<p className='uppercase text-white text-[10px] mb-0'>наша цена</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-gray-700 flex justify-center items-center m-0.5'>
							<p className='uppercase text-white text-[10px] mb-0'>частники</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-gray-700 flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='uppercase text-white text-[9px] mb-0'>диспетчерские</p>
								<p className='uppercase text-white text-[9px] mb-0'>службы</p>
							</div>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='uppercase text-black text-[12px] mb-0 font-semibold'>эвакуация</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-[#f8862e] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>от 40 руб</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>от 50 руб</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='text-black text-[13px] mb-0 font-semibold'>от 60 руб</p>
							</div>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='uppercase text-black text-[12px] mb-0 font-semibold'>стоимость</p>
								<p className='uppercase text-black text-[12px] mb-0 font-semibold'>подачи</p>
							</div>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-[#f8862e] flex justify-center items-center m-0.5'>
							<p className='text-white text-[11px] mb-0 font-semibold uppercase'>бесплатно</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>4 руб</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='text-black text-[13px] mb-0 font-semibold'>7 руб</p>
							</div>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='uppercase text-black text-[12px] mb-0 font-semibold'>время</p>
								<p className='uppercase text-black text-[12px] mb-0 font-semibold'>прибытия</p>
							</div>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-[#f8862e] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>10-20 мин</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>1-2 часа</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='text-black text-[13px] mb-0 font-semibold'>30-60 мин</p>
							</div>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='uppercase text-black text-[12px] mb-0 font-semibold'>сложная</p>
								<p className='uppercase text-black text-[12px] mb-0 font-semibold'>погрузка</p>
							</div>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-[#f8862e] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>от 15 руб</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>от 30 руб</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='text-black text-[13px] mb-0 font-semibold'>от 25 руб</p>
							</div>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='uppercase text-black text-[12px] mb-0 font-semibold'>цена за</p>
								<p className='uppercase text-black text-[12px] mb-0 font-semibold'>городом 1км</p>
							</div>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-[#f8862e] flex justify-center items-center m-0.5'>
							<p className='text-white text-[13px] mb-0 font-semibold'>1 руб</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<p className='text-black text-[13px] mb-0 font-semibold'>3 руб</p>
						</div>
						<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='text-black text-[13px] mb-0 font-semibold'>2 руб</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
