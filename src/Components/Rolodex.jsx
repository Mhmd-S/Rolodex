import React, {useRef} from 'react';
import '../Styles/Rolodex.css'
import RolodexItem from './RolodexItem.jsx';

const Rolodex = ({ rolodexData, selectCard, showForm, handleSearch, selectedCard }) => {

    const searchInput = useRef(null);

    const cancelSearch = () => {
        searchInput.current.blur();
        searchInput.current.value = '';
    }

    rolodexData = rolodexData.sort(function(a, b){
        let x = a.lastName.toLowerCase();
        let y = b.lastName.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });

    const rolodexEles = rolodexData.map((item) => item.cardID == selectedCard.cardID ? <RolodexItem selectCard={selectCard} key={item.cardID} itemInfo={item} highLighted={true} /> : <RolodexItem selectCard={selectCard} key={item.cardID} itemInfo={item} highLighted={false} /> );

    return(
        <div className="Rolodex-List-Container">
            <div className="Rolodex-List-Header">
                <p className="Rolodex-List-Header-Title">Cards</p>
                <button className='Rolodex-List-Header-AddButton' onClick={()=>showForm(true)}><img alt="add" src="/E267.svg"/></button>
            </div>
            <div className='Rolodex-List-Search-Container'>
                <label>Search</label>
                <input ref={searchInput} onChange={(e)=>handleSearch(e)} placeholder='Search' type="text" />
                <button className="Search-Cancel" onClick={cancelSearch}><img alt="cancel" src="/1F1FD.svg"/></button>
            </div>
            <div className="RolodexCards-Container">
                {rolodexEles}
            </div>
        </div>
    )
}

export default Rolodex;