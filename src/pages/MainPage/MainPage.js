import React from 'react'
import { PercentageOutlined, UsergroupAddOutlined, FormOutlined } from '@ant-design/icons'
import { Button, notification } from 'antd'
import { Сonsultation } from '../../components/consultationSection/Сonsultation'
import { ServiceSection } from '../../components/serviceSection/ServiceSection'
import { PriceSection } from '../../components/priceSection/PriceSection'
import { FotoSlider } from '../../components/fotoSlider/FotoSlider'
import VoprosOtvet from '../../components/voprosOtvet/VoprosOtvet'



export const MainPage = () => {


  const [api, contextHolder] = notification.useNotification()
  const openNotificationWithIcon = (type) => {
    api[type](
      {
        message: 'Выгодные предложения',
        description: (
          <>
            <div>
              <UsergroupAddOutlined />
              {' '}Порекомендуй другу и друг получит 10% скидку;
            </div>
            <div className='mt-2'>
              <FormOutlined />
              {' '}По предварительной записи 15% скидка;
            </div>
          </>
        )

      },

    )
  }

  return (
    <>
      <section className='w-full min-h-screen'>
        {contextHolder}
        <div className='w-full h-screen bg-cover fon bg-center'></div>

        <div className='container z-10 relative min-h-screen flex flex-col justify-between items-center'>
          <div className='text-center pt-12'>
            <h1 className='text-6xl font-semibold text-[#f8862e]'>
              <span className='text-white'>
                Эвакуатор
              </span><br />
              в Могилёве
            </h1>

            <p className='text-white text-sm'>от 40 руб. | приедим быстро | перевозка по РБ и РФ</p>


            <div className='mt-16 text-center'>
              <p className='text-[#f8862e] text-base uppercase'>Погрузка любой сложности </p>
              <p className='text-[#f8862e] text-base uppercase'>опыт 10 лет</p>
            </div>
          </div>




          <div className='flex justify-center items-center text-[#f8862e] text-lg mb-12'>
            <Button
              icon={<PercentageOutlined />}
              type='primary'
              shape="circle"
            />
            <span
              className='font-light uppercase ml-2'
              onClick={() => openNotificationWithIcon('info')}
            >
              Выгодные предложения
            </span>
          </div>
        </div>

      </section>


      <Сonsultation />

      <ServiceSection />

      <PriceSection />

      <FotoSlider />

      <VoprosOtvet />
    </>
  )
}
