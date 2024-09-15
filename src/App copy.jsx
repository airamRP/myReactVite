import { useState, useEffect } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { es } from 'date-fns/locale'
import { setDefaultOptions, format } from 'date-fns';
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

              <li key={launch.mission_name} className="mission">

                <div className='row1-mission'>
                  <div>
                    <strong>{launch.mission_name}</strong>
                    <small> ({launch.launch_year})</small>
                  </div>
                  <div className={launch.launch_success ? 'success' : 'failure'}>
                    {launch.launch_success ? 'Success' : 'Failure'}
                  </div>
                </div>
                <div className='row2-mission'>
                  <CiCalendarDate />
                  {setDefaultOptions({ locale: es })}
                  {format(launch.launch_date_local, 'PPP')}
                </div>

              </li>
            )
          }
        </ul>
      </section>
    </>
  )
}

export default App
