import '@styles/tailwind.css'
import MainLayout from '@components/layouts/MainLayout'
import { Provider } from 'react-redux'
import { ProviderAuth } from '@hooks/useAuth'
import store from '@context/index'
import Head from 'next/head'

import 'react-perfect-scrollbar/dist/css/styles.css'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)

  return (
    <Provider store={store}>
      <Head>
        <title>Administrador de productos</title>
        <meta
          name="description"
          content="Descripcion de esta pagina de productos"
        />
      </Head>
      <ProviderAuth>{getLayout(<Component {...pageProps} />)}</ProviderAuth>
    </Provider>
  )
}
