import React, { useState } from 'react'
import '../Slots.css';

const Slots = (props) => {

  const feedList = ['8 to 8:20', '8:20 to 8:40', '8:40 to 9', '9 to 9:20']

  return (
    <>

      <span className='product-details'>
        <div class="card">
          <img className='product-img' src={props.activeDoct.image} alt="Image Not Available" />
          <div class="container">
            <h4><b>{props.activeDoct.name}</b></h4>{props.activeDoct.speciality}
            <p>Cost of appointment: Rs: {props.activeDoct.costOfAppointment}</p>
            <p><b>Description: </b>Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being.</p>


          </div>
        </div>
      </span>
      <div className='slots'>
        <button
          style={{ backgroundColor: '#808080', color: '#ffffff', fontSize: '20px', borderRadius: "50px" }}

          onClick={props.handleBack}
        >Back</button>
        <h3 className='slots-head'>Select a slot to book appointment</h3>
        {
          feedList.map((feed, index) => {

            if (props.activeDoct.selectedSlot.includes(feed)) {

              return <button key={index}
                style={{ backgroundColor: '#808080', color: '#ffffff', fontSize: '20px', borderRadius: "50px", marginRight: "5px" }}
                className='display-feed'
                onClick={() => alert("Slot not available")}
              >{feed}  </button>

            } else {
              return <button key={index} style={{ color: '#04AA6D', fontSize: '20px', borderRadius: "50px", marginRight: "5px" }}
                className='display-feed'
                onClick={() => props.handleSlotSelect(feed, props.activeDoct)}
              ><span >{feed}</span> </button>

            }

          })
        }
      </div>


    </>
  )
}

export default Slots