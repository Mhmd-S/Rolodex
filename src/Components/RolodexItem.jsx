import React from 'react';

const RolodexItem = ({itemInfo, cardID, selectCard}) => {
    return (
        <div className="Rolodex-Item-Container" onClick={()=>{selectCard(cardID)}}>
            <p>{itemInfo.lastName.toUpperCase()}, {itemInfo.firstName} {itemInfo.middleName} </p>
        </div>
    )
}

export default RolodexItem;