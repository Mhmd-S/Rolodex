import React from 'react';

const Card = ({cardInfo}) => {
    return(
        <div className='Card-Container'>
            <div className='Card-Edit-Button-Container'>
                <img src="E25D.svg" alt="edit"/>
            </div>
            <div className='Card-Details-Short-Container'>
                <div className="Card-Short-Details-Labels" >Honorifics</div><div className="Card-Short-Details-Info" >{cardInfo.honorifics}</div>
                <div className="Card-Short-Details-Labels" >First Name</div><div className="Card-Short-Details-Info" >{cardInfo.firstName}</div>
                <div className="Card-Short-Details-Labels" >Field/Occupation</div><div className="Card-Short-Details-Info" >{cardInfo.occupation}</div>
                <div className="Card-Short-Details-Labels" >Middle Name</div><div className="Card-Short-Details-Info" >{cardInfo.middleName}</div>
                <div className="Card-Short-Details-Labels" >Date of Birth</div><div className="Card-Short-Details-Info" >{cardInfo.dob}</div>
                <div className="Card-Short-Details-Labels" >Last Name</div><div className="Card-Short-Details-Info" >{cardInfo.lastName}</div>
            </div>
            <div className="Card-Long-Details-Labels" >Contact Information</div><div className="Card-Long-Details-Info">{cardInfo.contactInfo}</div>
            <div className="Card-Long-Details-Labels" >Address</div><div className="Card-Long-Details-Info">{cardInfo.address}</div>
            <div className="Card-Long-Details-Labels" >Notes</div><div className="Card-Long-Details-Info Notes">{cardInfo.notes}</div>
        </div>
    )
}

export default Card;