import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../../Redux/Store';
const ReduxProvider = (props) => {
  const { children } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider >
  )
}
export default ReduxProvider;
