import React, { useContext } from 'react'
import { LineOutlined } from '@ant-design/icons'
import CollapseComp from '../collapse/CollapseComp'
import { useScreens } from '../../Constants/constants'


function VoprosOtvet() {
	const screens = useScreens()
	const color = '#f8862e'
	return (
		<section id='vopros' className='py-12 w-full z-10 bg-white'>
			<div className=''>
				<div className='h-12'></div>
				<div className='container'>
					<div className='flex flex-col justify-between'>
						<div className='text-center'>
							<h2 className='text-[#f8862e] text-4xl'>
								Часто задаваемые<span className='text-black'> вопросы</span> 
							</h2>
							<LineOutlined style={{ color, fontSize: '3rem' }} />
						</div>
						<div className={screens.xs ? 'pl-1' : 'pl-10'}>
							<CollapseComp />
						</div>
						
					</div>
				</div>
			</div>
		</section>
	)
}
export default VoprosOtvet