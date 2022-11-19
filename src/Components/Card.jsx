import React from 'react';

const Card = ({cardInfo}) => {
    return(
        <div >
            {cardInfo.firstName}
            {cardInfo.middleName}
            {cardInfo.lastName}
        </div>
    )
}

export default Card;