import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './root'
import CounterContext from './context/counter'


createRoot(document.getElementById('root')).render(
  <CounterContext>
  <Root/>
  </CounterContext>,
)
