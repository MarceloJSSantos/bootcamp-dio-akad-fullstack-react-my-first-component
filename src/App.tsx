import './App.css'
import {Profile, Job} from './components/Profile'
import JobFC from './components/Profile'

function App() {
  return (
    <div>
      <h1>Meu Perfil</h1>
      <Profile />
      <Job />
      <JobFC />
    </div>
  )
}

export default App