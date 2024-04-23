import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import PopBrowse from './components/popUps/popBrowse/popBrowse'
import PopNewCard from './components/popUps/popNewCards/popNewCards'
import PopUser from './components/popUps/popUser/popUser'
import Main from './components/main/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
		
			<PopUser></PopUser>

			<PopNewCard></PopNewCard>

			<PopBrowse></PopBrowse>

		<Header></Header>
		<Main></Main>
		
    </div>
    </>
  )
}

export default App
