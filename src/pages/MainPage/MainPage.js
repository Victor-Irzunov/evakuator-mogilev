import React, {useState} from 'react'
import { PercentageOutlined, UsergroupAddOutlined, FormOutlined, DollarCircleOutlined } from '@ant-design/icons'
import { Button, notification } from 'antd'
import { Сonsultation } from '../../components/consultationSection/Сonsultation'
import { ServiceSection } from '../../components/serviceSection/ServiceSection'
import { PriceSection } from '../../components/priceSection/PriceSection'
import { FotoSlider } from '../../components/fotoSliderSection/FotoSlider'
import VoprosOtvet from '../../components/voprosOtvet/VoprosOtvet'
import { OtzyvySection2 } from '../../components/otzyvySection/OtzyvySection2'
import { FooterSection } from '../../components/footerSection/FooterSection'
import { ModalComp } from '../../components/modal/ModalComp'



export const MainPage = () => {

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')

  const showModal = (title) => {
    setIsModalOpen(true)
    setTitle(title)
  };

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const [api, contextHolder] = notification.useNotification()
  const openNotificationWithIcon = (type, key) => {
    if (key === 1) {
      api[type](
        {
          message: 'Выгодное предложение',
          description: (
            <div>
              <UsergroupAddOutlined />
              {' '}Порекомендуйте другу и друг получит скидку 10%
            </div>
          )
        },
      )
    } else {
      api[type](
        {
          message: 'Акция',
          description: (

            <div className='mt-2'>
              <FormOutlined />
              {' '}Запишитесь заранее и получите скидку 20%
            </div>
          )
        },
      )
    }

  }

  return (
    <>
      <section className='w-full min-h-screen' id='main'>
        {contextHolder}
        <div className='w-full h-screen bg-cover fon bg-center'></div>

        <div className='container z-10 relative min-h-screen flex flex-col justify-between items-center'>
          <div className='text-center pt-12'>
            <h1 className='text-6xl sd:text-7xl font-semibold text-orange-500'>
              <span className='text-white'>
                Эвакуатор
              </span><br className='sd:hidden' />{' '}
              в Могилёве
            </h1>

            <p className='text-white text-xl md:text-4xl'>от 40 руб</p>
            <p className='text-sm uppercase text-[#f8862e] md:text-xl'>эвакуатор приедет в течении 15 мин</p>

            <div className='mt-2 text-center'>
              <p className='text-white text-base uppercase mb-1'>Погрузка любой сложности </p>
              <p className='text-white text-base uppercase'>опыт 12 лет</p>
            </div>
          </div>

          <div className='text-center'>
            <p
              className='uppercase text-2xl text-white cursor-pointer'
              onClick={() => showModal('Задать вопрос')}
            >
              Задать вопрос
            </p>
          </div>

          <div className='text-center sd:flex '>
            <div className='flex justify-start items-center text-white text-lg mb-2 sd:mb-4 sd:mr-10'>
              <Button
                icon={<PercentageOutlined />}
                type='primary'
                shape="circle"
              />
              <span
                className='font-light ml-4'
                onClick={() => openNotificationWithIcon('success', 2)}
              >
                Получите скидку 20%
              </span>
            </div>
            <div className='flex justify-center items-center text-white text-lg mb-12 sd:mb-4'>
              <Button
                icon={<DollarCircleOutlined />}
                type='primary'
                shape="circle"
              />
              <span
                className='font-light ml-4'
                onClick={() => openNotificationWithIcon('success', 1)}
              >
                Выгодное предложение
              </span>
            </div>
          </div>
        </div>

      </section>


      <Сonsultation />

      <ServiceSection />

      <PriceSection />

      <FotoSlider />

      <VoprosOtvet />

      <OtzyvySection2 />

      <FooterSection />

      <ModalComp isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} question={true} />
    </>
  )
}
