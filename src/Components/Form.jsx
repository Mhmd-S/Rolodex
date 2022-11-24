import React from 'react';
import { useForm } from "react-hook-form"

const Form = ({hoistDataForm, closeForm, editCardInfo}) => {

    const {register, handleSubmit} = useForm();

    const cardInfoEdit =  editCardInfo !== '' ? editCardInfo : '';

    return(
        <form className="Form-Container" onSubmit={handleSubmit((data)=>{hoistDataForm(data)})}>
            <div className="Form-CloseForm-container">
                <img onClick={closeForm} src="2F2FD.svg" alt='Close Form'/>
            </div>
            <div className='Form-Name-Inputs-Container'>
                <label>Honorifics</label>
                <input  defaultValue={cardInfoEdit.honorifics } {...register("honorifics")} type="text"/>
                <label>First Name</label>
                <input  defaultValue={cardInfoEdit.firstName } {...register("firstName")} type="text"/>
                <label>Field/Occupation</label>
                <input  defaultValue={cardInfoEdit.occupation } {...register("occupation")} type="textarea"/>
                <label>Middle Name</label>
                <input  defaultValue={cardInfoEdit.middleName } {...register("middleName")} type="text"/>
                <label>Date of Birth</label>
                <input  defaultValue={cardInfoEdit.dob } {...register("dob")} type="date"/>
                <label>Last Name</label>
                <input  defaultValue={cardInfoEdit.lastName } {...register("lastName")} type="text"/>
            </div>
            <label>Contact Information</label>
            <textarea defaultValue={cardInfoEdit.contactInfo } {...register("contactInfo")} type="text"/>
            <label>Address</label>
            <textarea defaultValue={cardInfoEdit.address } {...register("address")} type="text"/>
            <label>Notes</label>
            <textarea className="Form-Notes-Input" defaultValue={cardInfoEdit.notes } {...register("notes")} />
            <button type='submit'><img src="./2714.svg" alt="Create"/></button>
        </form>
    )
}

export default Form;