import React from 'react';
import RolodexItem from './RolodexItem.jsx';

const Rolodex = ({ rolodexData, selectCard }) => {

    const rolodexEles = rolodexData.map((item, i) => <RolodexItem selectCard={selectCard} key={i} cardID={i} itemInfo={item}/>);

    return(
        <div className="RolodexCards-Container">
            {rolodexEles}
        </div>
    )
}

export default Rolodex;