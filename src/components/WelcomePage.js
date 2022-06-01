
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Doctors.css'

 
const WelcomePage = (props) => {
  const navigate = useNavigate()
  
  return (
    <div> <h1>Welcome to HealthNet Hospital</h1>
      <h2>Here you can book Doctors Appointment</h2>


      <button  className='addToChartButton'   onClick={()=>navigate('/doctors')}>Click to book Appointment here  </button>


    </div>

  )
}

export default WelcomePage
