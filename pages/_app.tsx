import { Provider } from 'react-redux';
import { wrapper } from '../redux/store/store'
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
