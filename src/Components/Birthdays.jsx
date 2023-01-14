import React from 'react';
import "../Styles/Birthdays.css"

const Birthdays = ({rolodexData, selectCard}) => {
    
    const birthdayGrouped = groupArray(rolodexData); // Group the rolodex cards into an object which contains attribute named as a date and inside of it are the people whoes birthday is that date as an array // Looks like the result taken from Array.prototype.group method.
    
    let birthdays = Object.keys(birthdayGrouped); // Take the dates present.
    console.log(birthdays);

    birthdays = sortDates(birthdays); // Sort the dates using the helper function
    console.log(birthdays);

    // Map through each date and create a corresponding JSX.
    let birthdaysJSX = birthdays.map((key) => <div className="Birthdays-Birthday-Container" key={key} ><h4 className="Birthdays-Birthday-Header">{key}</h4><ul className="Birthdays-Birthday-List">{birthdayGrouped[key].map(birthday => <li onClick={()=>{selectCard(birthday)}} key={birthday.cardID}>{birthday.firstName} {birthday.lastName}</li>)}</ul></div>)
    
    return(
        <div className="Birthdays-Container">
            {birthdaysJSX[0] ? birthdaysJSX : <div>No upcoming birthdays.</div>}
        </div>
    )
}

function groupArray(dataList) { // Groups the array and filters out any birthday that passed.

    let groups = {};

    for (let i = 0; i < dataList.length; i++) {
        
        let birthdayDate = new Date(dataList[i].dob);

        const date = new Date();

        birthdayDate.setFullYear(date.getFullYear());

        console.log(birthdayDate);

        // This section will be used to filter out any passed date.
        const [todayMonth, todayDay] = [date.getDate(), date.getMonth()+1]; //Get the date of today.
        if (todayMonth > birthdayDate.getMonth() && todayDay > birthdayDate.getDate()){ // Compare if the date is before today, if true then add 1 year to this date.
            birthdayDate.setFullYear(date.getFullYear() + 1);
        }

        birthdayDate = `${birthdayDate.getDate()}  ${birthdayDate.toLocaleString('default', { month: 'short' })} ${birthdayDate.getFullYear()}`; // Get the day and the month in word form from the date object.

        if(!groups.hasOwnProperty(birthdayDate)) { // If date date doesnt exist in the group then create one and add the current date accessed by the loop to it, otherwise just add the date to the group.
            groups[`${birthdayDate}`] = [dataList[i]];
        } else {
            groups[`${birthdayDate}`] = [...groups[`${birthdayDate}`],dataList[i]];
        }
    }
    return groups;
}

function sortDates(dates) { // This function uses the sort method to sort the dates.
    dates.sort(function(a,b) {
    let x = Date.parse(a);
    let y = Date.parse(b);
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
    })
    return dates;
}

export default Birthdays;

// Fix date fromat to be UTC from the from until the object until here