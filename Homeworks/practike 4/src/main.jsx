import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './root'
import StudentListContext from './context/Students'
import ModalContext from './context/Modal'



createRoot(document.getElementById('root')).render(
  <StudentListContext>
    <ModalContext>
      <Root />
    </ModalContext>
  </StudentListContext>


)
