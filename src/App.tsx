
import { Fragment } from 'react/jsx-runtime'
import './App.css'
import {Profile, Job} from './components/Profile'
import JobFC from './components/Profile'
import { Skills } from './components/Skills'

function App() {
  return (
    <Fragment> {/*Utilizado no lugar da <div> quando não houver necessidade de estilização*/}
      <h1>Meu Perfil</h1>
      <Profile />
      <Job />
      <JobFC />
      <Skills />
    </Fragment>
  )
}

export default App