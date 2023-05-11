import Header from '@components/commons/Header'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function MainLayout({ children }) {
  const themeConfig = useSelector((state) => state.themeConfig)
  const [animation] = useState(themeConfig.animation)
  return (
    <section
      className={`main-section relative font-nunito text-sm font-normal antialiase`}
    >
      <Header />
      <main className="main-content">
        <div className={`${animation} animate__animated p-6`}>{children}</div>
      </main>
    </section>
  )
}
