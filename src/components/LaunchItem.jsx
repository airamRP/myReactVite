import { CiCalendarDate } from "react-icons/ci";
import { es } from 'date-fns/locale'
import { setDefaultOptions, format } from 'date-fns';

export function LaunchItem(launch) {
  return (
    <li className="mission">

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
    <button className="details">More details</button>

  </li>

  )
}