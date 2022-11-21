import React from 'react';
import { useForm } from "react-hook-form"

const Form = ({hoistDataForm}) => {

    const {register, handleSubmit} = useForm();

    return(
        <form onSubmit={handleSubmit((data)=>{hoistDataForm(data)})}>
            <label>First Name</label>
            <input {...register("firstName")} type="text"/>
            <label>Middle Name</label>
            <input {...register("middleName")} type="text"/>
            <label>Last Name</label>
            <input {...register("lastName")} type="text"/>
            <label>Date of Birth</label>
            <input {...register("dob")} type="date"/>
            <label>Field/Occupation</label>
            <input {...register("occupation")} type="textarea"/>
            <label>Contact Information</label>
            <input {...register("contactInfo")} type="text"/>
            <label>Notes</label>
            <input {...register("notes")} type="text"/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;