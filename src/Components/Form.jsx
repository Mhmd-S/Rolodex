import React from 'react';
import { useForm } from "react-hook-form"

const Form = ({hoistDataForm, closeForm}) => {

    const {register, handleSubmit} = useForm();

    return(
        <form className="Form-Container" onSubmit={handleSubmit((data)=>{hoistDataForm(data)})}>
            <div className="Form-CloseForm-container">
                <img onClick={closeForm} src="2F2FD.svg" alt='Close Form'/>
            </div>
            <div className='Form-Name-Inputs-Container'>
                <label>Honorifics</label>
                <input  {...register("honorifics")} type="text"/>
                <label>First Name</label>
                <input  {...register("firstName")} type="text"/>
                <label>Field/Occupation</label>
                <input  {...register("occupation")} type="textarea"/>
                <label>Middle Name</label>
                <input  {...register("middleName")} type="text"/>
                <label>Date of Birth</label>
                <input  {...register("dob")} type="date"/>
                <label>Last Name</label>
                <input  {...register("lastName")} type="text"/>
            </div>
            <label>Contact Information</label>
            <textarea {...register("contactInfo")} type="text"/>
            <label>Address</label>
            <textarea {...register("address")} type="text"/>
            <label>Notes</label>
            <textarea className="Form-Notes-Input" {...register("notes")} />
            <button type='submit'><img src="./2714.svg" alt="Create"/></button>
        </form>
    )
}

export default Form;