import '@styles/tailwind.css'
import MainLayout from '@components/layouts/MainLayout'
import { Provider } from 'react-redux'
import { ProviderAuth } from '@hooks/useAuth'
import store from '@context/index'

import 'react-perfect-scrollbar/dist/css/styles.css'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)

  return (
    <Provider store={store}>
      <ProviderAuth>{getLayout(<Component {...pageProps} />)}</ProviderAuth>
    </Provider>
  )
}
