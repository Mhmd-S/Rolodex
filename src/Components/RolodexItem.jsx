import React from 'react';
import "../Styles/RolodexItem.css"

const RolodexItem = ({itemInfo, selectCard, highLighted}) => {

    return (
        <div className={highLighted ?  "Rolodex-Item-Container Rolodex-Item-Highlighted" : "Rolodex-Item-Container"} onClick={()=>{selectCard(itemInfo)}}>
            <p><span>{itemInfo.lastName.toUpperCase()}</span>, {itemInfo.firstName} {itemInfo.middleName} </p>
        </div>
    )
}

export default RolodexItem;