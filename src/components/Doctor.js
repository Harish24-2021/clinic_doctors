import '../Doctors.css'
import React, { useState, useEffect } from 'react';

function Doctor(props) {

    let bookAppoinment = (doctrID) => {
        props.bookAppoinment(doctrID)
    }

    return (
        <span className='product-details'>
            <div class="card">
                <img className='product-img' src={props.doctorDetails.image} alt="Image Not Available" />
                <div class="container">
                    <h4><b>{props.doctorDetails.name}</b></h4> ({props.doctorDetails.speciality})
                    <p>Cost of appointment: Rs: {props.doctorDetails.costOfAppointment}</p>

                    <p><button className='addToChartButton' onClick={() => bookAppoinment(props.doctorDetails.id)}>Book Appointment</button></p>
                    <h4>{props.doctorDetails.selectedSlot.length > 3 ?
                        'Appointments not available' : ''
                    }</h4>
                </div>
            </div>
        </span>
    );
}

export default Doctor;
