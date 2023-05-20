import Header from '@components/commons/Header'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useAuth } from '@hooks/useAuth'
import { useRouter } from 'next/router'
import Loading from '@components/commons/Loading'

export default function MainLayout({ children }) {
  const themeConfig = useSelector((state) => state.themeConfig)
  const [animation] = useState(themeConfig.animation)
  const [show, setShow] = useState(false)
  const auth = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    auth.loginValidation().then((res) => {
      if (router.pathname !== '/') {
        res == 'unauthorized'
          ? router.push('/login')
          : (setShow(true), setIsLoading(false))
      }
    })
  }, [auth, router])

  return (
    <section
      className={`main-section relative font-nunito text-sm font-normal antialiase`}
    >
      <Header />
      <main className="main-content">
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {show && (
                <div className={`${animation} animate__animated p-6`}>
                  {children}
                </div>
              )}
            </>
          )}
        </>
      </main>
    </section>
  )
}
