
import './App.css'
import { MainPage } from './pages/MainPage/MainPage'
import 'antd/dist/reset.css'
import { Header } from './components/header/Header'
import { ConfigProvider, FloatButton } from 'antd'
import locale from 'antd/es/locale/ru_RU'
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#f97315',
        },
      }}
    >

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className='app'>
        <Header />
        <MainPage />
      </div>


      <FloatButton.BackTop />
    </ConfigProvider>
  )
}

export default App
