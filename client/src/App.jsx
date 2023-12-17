import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import nodejsLogo from './assets/Nodejs.svg'
import ExerciseList from './components/ExercisesList'
import AddExerciseForm from './components/AddExerciseForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddExerciseForm />
    </>
  )
}

export default App
