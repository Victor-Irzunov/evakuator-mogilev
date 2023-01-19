import React, {useState} from 'react'
import { PercentageOutlined, UsergroupAddOutlined, FormOutlined, DollarCircleOutlined } from '@ant-design/icons'
import { Button, notification } from 'antd'
import { Сonsultation } from '../../components/consultationSection/Сonsultation'
import { ServiceSection } from '../../components/serviceSection/ServiceSection'
import { PriceSection } from '../../components/priceSection/PriceSection'
import { FotoSlider } from '../../components/fotoSlider/FotoSlider'
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
      <section className='w-full min-h-screen'>
        {contextHolder}
        <div className='w-full h-screen bg-cover fon bg-center'></div>

        <div className='container z-10 relative min-h-screen flex flex-col justify-between items-center'>
          <div className='text-center pt-12'>
            <h1 className='text-6xl font-semibold text-orange-500'>
              <span className='text-white'>
                Эвакуатор
              </span><br />
              в Могилёве
            </h1>

            <p className='text-white text-sm uppercase'>от 40 руб | приедем в течении 15 мин</p>

            <div className='mt-16 text-center'>
              <p className='text-[#f8862e] text-base uppercase'>Погрузка любой сложности </p>
              <p className='text-[#f8862e] text-base uppercase'>опыт 12 лет</p>
            </div>
          </div>

          <div className='text-center'>
            <p
              className='uppercase text-2xl text-white'
              onClick={() => showModal('Задать вопрос')}
            >
              Задать вопрос
            </p>
          </div>

          <div className='text-center'>
            <div className='flex justify-start items-center text-white text-lg mb-2'>
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
            <div className='flex justify-center items-center text-white text-lg mb-12'>
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
