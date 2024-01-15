import './App.css'
import { Provider } from "react-redux"
import store from './redux/slices/store'
import Counter from './components/Counter'
function App() {


  return (
    <div className='flex align-middle justify-center'>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  )
}

export default App
