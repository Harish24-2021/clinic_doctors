import React, { useState } from 'react'
import '../App.css';
import Doctor from './Doctor.js'
import Doct1 from '../images/Doct1.jpeg';
import Doct2 from '../images/Doct2.jpg';
import Doct3 from '../images/Doctr2.jpg';
import Doct4 from '../images/Doct4.jpg';
import Slots from './Slots';

let docotrsData = [
    { id: 1, name: "Dr Rakesh",speciality: "Cardiology", costOfAppointment: 300, selectedSlot: [], image: Doct3, appointmentsBooked: 0 },
   
    { id: 2, name: "Dr Satish",speciality: "Diabetician",costOfAppointment: 500, selectedSlot: [], image: Doct2, appointmentsBooked: 0 },
    { id: 3, name: "Dr Latha", speciality: " ENT", costOfAppointment: 800, selectedSlot: [], image: Doct1, appointmentsBooked: 0 },
   
    { id: 4, name: "Dr Suresh",speciality: "opthamlogy",costOfAppointment: 400, selectedSlot: [], image: Doct4, appointmentsBooked: 0 },
]

const Doctors = () => {
   
    const [docotrsInfo,setdocotrsInfo]=useState(docotrsData)
    const [activeDoct,setactiveDoct]=useState(null)

    let bookAppoinment=(id)=>{
        let doctInfo=docotrsInfo.filter(e=>e.id==id)
        setactiveDoct(doctInfo)
    }
   
   let handleSlotSelect=(slot,doctDetails)=>{
        let dcots=[...docotrsInfo]
        for(let i in dcots){
            if(dcots[i]['id']==doctDetails.id){
                if(!dcots[i]['selectedSlot'].includes(slot)){
                    dcots[i]['selectedSlot'].push(slot)
                    setdocotrsInfo(dcots)
                    alert('Your appointment is booked successfully')
                }
                
            }
        }
    }
    let handleBack=()=>{
        setactiveDoct(null)
    }
    return (
        <div className='docorsInfo'  >
            {activeDoct?<Slots
            activeDoct={activeDoct[0]}
            handleSlotSelect={handleSlotSelect}
            handleBack={handleBack}
            />:
            docotrsInfo.map((doc) => (
                <>
                <Doctor
                bookAppoinment={bookAppoinment}
                doctorDetails={doc}
                />
                </>

           
        ))
            
            }
            </div>
    )
}

export default Doctors