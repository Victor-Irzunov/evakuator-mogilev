import React from 'react'
import { Collapse } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import { useScreens } from '../../Constants/constants'
const { Panel } = Collapse


const data = [
	{
		title: 'Как заказать эвакуатор в Могилёве?',
		text: (<div><p>Есть три способа для вызова эвакуатора в Минске:</p>
			<p>– с помощью формы обратной связи</p>
			<p>– по номеру телефона +375 (29) 944-12-76</p>
			<p>– написать в мессенджеры</p>
		</div>),
		id: 1,
	},
	{
		title: 'Сколько ждать эвакуатор в Могилёве?',
		text: (<p>Вызов эвакуатора в Могилёве в нашей службе максимально удобен для клиента. Быстрая подача эвакуатора и демократические цены – основные критерии по которым клиенты выбирают именно нас.</p>),
		id: 2,
	},
	{
		title: 'Что входит в стоимость перевозки эвакуатором в Могилёве?',
		text: (<div><p class="paragraph-174 text _53">Стоимость включает в себя:</p><p>– подачу эвакуатора</p><p>– погрузку авто -20 минут ожидания (при необходимости)</p><p>– доставку автомобиля-разгрузку автомобиля</p></div>),
		id: 3,
	},
	{
		title: 'Что необходимо сообщить при заказе эвакуатора в Могилёве?',
		text: (<p>Адреса откуда и куда необходимо перевезти автомобиль. Марку и модель автомобиля, сложности при их наличии (заблокированные колеса, руль, отсутствие ключей и т.д.)</p>),
		id: 4,
	},
	{
		title: 'Могу ли я быть уверен за сохранность моего автомобиля, когда с ним работает эвакуатор в Могилёве?',
		text: (<p>Да, вы доверяете свой автомобиль нашим опытным сотрудникам.</p>),
		id: 5,
	},
]




const CollapseComp = () => {
	const screens = useScreens()
	return (
		<Collapse ghost>
			{data.map(el => {
				return (
					<Panel header={<span className=''>{el.title}</span>} key={el.id} >
						<div className={`${screens.xs ? 'pl-2' : 'pl-6'}`}>
							<span className=''>{el.text}</span>
						</div>
					</Panel>
				)
			})}
		</Collapse>
	)
}
export default CollapseComp