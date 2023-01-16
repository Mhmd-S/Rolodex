import React from 'react';
import "../Styles/Card.css"

const Card = ({cardInfo, editCard}) => {
    return(
        <div className='Card-Container'>
            <div className='Card-Edit-Button-Container'>
                <h1>{cardInfo.honorifics}. {cardInfo.lastName}</h1>
                <img onClick={editCard} src="E25D.svg" alt="edit"/>
            </div>
            <div className='Card-Details-Short-Container'>
                <div>
                    <span className="Card-Short-Details-Labels" >Honorifics</span><div className="Card-Short-Details-Info" >{cardInfo.honorifics}</div>
                </div>
                <div>
                    <span className="Card-Short-Details-Labels" >First Name</span><div className="Card-Short-Details-Info" >{cardInfo.firstName}</div>
                </div>
                <div>
                    <span className="Card-Short-Details-Labels" >Field/Occupation</span><div className="Card-Short-Details-Info" >{cardInfo.occupation}</div>
                </div>
                <div>
                    <span className="Card-Short-Details-Labels" >Middle Name</span><div className="Card-Short-Details-Info" >{cardInfo.middleName}</div>
                </div>
                <div>
                    <span className="Card-Short-Details-Labels" >Date of Birth</span><div className="Card-Short-Details-Info" >{cardInfo.dob}</div>
                </div>
                <div>
                    <span className="Card-Short-Details-Labels" >Last Name</span><div className="Card-Short-Details-Info" >{cardInfo.lastName}</div>
                </div>
            </div>
            <div className="Card-Long-Details-Semi">
                <div>
                    <div className="Card-Long-Details-Labels" >Contact Information</div><div className="Card-Long-Details-Info">{cardInfo.contactInfo}</div>
                </div>
                <div>
                    <div className="Card-Long-Details-Labels" >Address</div><div className="Card-Long-Details-Info">{cardInfo.address}</div>
                </div>
            </div>
            <div className='Notes-Container'>
                <div className="Card-Long-Details-Labels" >Notes</div><div className="Card-Long-Details-Info Notes">{cardInfo.notes}</div>
            </div>
        </div>
    )
}

export default Card;