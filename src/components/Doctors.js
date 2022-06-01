import React, { useState } from 'react'
import '../App.css';


const Doctors = () => {
    let docotrsInfo = [

        {
            id: 1,
            name: "Dr Rakesh",
            speciality: "Cardiology",
            fee: "400 Rs",
            time: "9 to 10",
            numberOfSlots: 3
        },
        {
            id: 2,
            name: "Dr Satish",
            speciality: "Diabetician",
            fee: "400 Rs",
            time: "10 to 11",
            numberOfSlots: 3
        },
        {
            id: 3,
            name: "Dr Latha",
            speciality: " ENT",
            fee: "400 Rs",
            time: "11 to 12",
            numberOfSlots: 3
        },
        {
            id: 4,
            name: "Dr Suresh",
            speciality: "opthamlogy",
            fee: "400 Rs",
            time: "8 to 9",
            numberOfSlots: 3
        },



    ]

    let [slotCount, setSlotCount] = useState({id:1,count:1})

    

    let slotsHandler = (id) => {

        console.log(slotCount.id,slotCount.count)
        if (slotCount.id===id &&slotCount.count > 3) {
            alert("No slotsAvailable ")
        }else if(slotCount.id!==id ){

            setSlotCount({id:id,count:2})
        } 
                
        else {

            setSlotCount({id:id,count:slotCount.count+1 })
        }
       

    }




    return (
        <div className='docorsInfo'  >
            {docotrsInfo.map((doc) => (
            <div key={doc.id} className='doctorCard'>
                <h3>Name: {doc.name}</h3>
                <h3>Speciality:{doc.speciality}</h3>
                <h3>Fee:{doc.fee}</h3>
                <h4>Timings: {doc.time}</h4>
                <button onClick={()=>slotsHandler(doc.id)}  >Book Appointment</button>
            </div>
        ))}</div>
    )
}

export default Doctors