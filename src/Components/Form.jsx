import React from 'react';
import { useForm } from "react-hook-form"

const Form = ({hoistDataForm, closeForm, editCardInfo}) => {

    const {register, handleSubmit} = useForm();

    return(
        <form className="Form-Container" onSubmit={handleSubmit((data)=>{hoistDataForm(data)})}>
            <div className="Form-CloseForm-container">
                <img onClick={closeForm} src="2F2FD.svg" alt='Close Form'/>
            </div>
            <div className='Form-Name-Inputs-Container'>
                <label>Honorifics</label>
                <input  value={editCardInfo !== '' ? editCardInfo.honorifics : ''} {...register("honorifics")} type="text"/>
                <label>First Name</label>
                <input  value={editCardInfo !== '' ? editCardInfo.firstName : ''} {...register("firstName")} type="text"/>
                <label>Field/Occupation</label>
                <input  value={editCardInfo !== '' ? editCardInfo.occupation : ''} {...register("occupation")} type="textarea"/>
                <label>Middle Name</label>
                <input  value={editCardInfo !== '' ? editCardInfo.middleName : ''} {...register("middleName")} type="text"/>
                <label>Date of Birth</label>
                <input  value={editCardInfo !== '' ? editCardInfo.dob : ''} {...register("dob")} type="date"/>
                <label>Last Name</label>
                <input  value={editCardInfo !== '' ? editCardInfo.lastName : ''} {...register("lastName")} type="text"/>
            </div>
            <label>Contact Information</label>
            <textarea value={editCardInfo !== '' ? editCardInfo.contactInfo : ''} {...register("contactInfo")} type="text"/>
            <label>Address</label>
            <textarea value={editCardInfo !== '' ? editCardInfo.address : ''} {...register("address")} type="text"/>
            <label>Notes</label>
            <textarea className="Form-Notes-Input" value={editCardInfo !== '' ? editCardInfo.notes : ''} {...register("notes")} />
            <button type='submit'><img src="./2714.svg" alt="Create"/></button>
        </form>
    )
}

export default Form;