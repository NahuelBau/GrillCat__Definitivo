import {AppRouter} from './routes/AppRoute'
import {Provider} from 'react-redux'

import { store } from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
