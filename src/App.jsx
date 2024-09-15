import { useState, useEffect } from 'react'
import { LaunchItem } from './components/LaunchItem'
import logo from './assets/logo-spacex.png'
import * as API from './services/launches'
import './styles/styles.css'

function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
      <img src={logo} width="200" className="logo" />
      <h1 className="title">SpaceX Launches</h1>
      <section>
        <ul className='missions'>
          {
            launches.map(launch =>
              <LaunchItem key={launch.mission_name} {...launch}/>
            )
          }
          
        </ul>
        
      </section>
    </>
  )
}

export default App
