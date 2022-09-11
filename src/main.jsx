import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createStore ,compose} from 'redux'
import { Provider } from 'react-redux'
import usersReducer from '../src/stor/reducer/users_reducer'
const enhancers = compose(
  window._REDUX_DEVTOOLS_EXTENSION_ &&
 window._REDUX_DEVTOOLS_EXTENSION_(),
 )

const userStor = createStore(usersReducer,{users:[{fName:"yehuda",lName:"sanay"}]},enhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={userStor}>
    <App />
  </Provider>
)
