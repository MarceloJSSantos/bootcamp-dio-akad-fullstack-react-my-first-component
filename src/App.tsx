import './App.css'
import {Profile, Job} from './components/Profile'
import JobFC from './components/Profile'
import { Skills } from './components/Skills'

function App() {
  return (
    <div>
      <h1>Meu Perfil</h1>
      <Profile />
      <Job />
      <JobFC />
      <Skills />
    </div>
  )
}

export default App