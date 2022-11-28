import React, {useState} from 'react';
import { useForm } from "react-hook-form"

const Form = ({hoistDataForm, closeForm, editCardInfo}) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

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
                <input  placeholder={errors.firstName?.type === 'required' ? "First name is required." : undefined} className={errors.firstName?.type === 'required' ?  "Form-Error" : undefined} defaultValue={cardInfoEdit.firstName } {...register("firstName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} type="text"/>

                <label>Field/Occupation</label>
                <input  defaultValue={cardInfoEdit.occupation } {...register("occupation")} type="textarea"/>

                <label>Middle Name</label>
                <input  defaultValue={cardInfoEdit.middleName } {...register("middleName")} type="text"/>

                <label>Date of Birth</label>
                <input className={errors.dob?.type === 'required' ?  "Form-Error" : undefined} defaultValue={cardInfoEdit.dob } {...register("dob", {required:true})} type="date"/>

                <label>Last Name</label>
                <input  placeholder={errors.lastName?.type === 'required' ? "Last name is required." : undefined} className={errors.lastName?.type === 'required' ?  "Form-Error" : undefined} defaultValue={cardInfoEdit.lastName } {...register("lastName", { required: true })} aria-invalid={errors.lastName? "true" : "false"} type="text"/>
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

// Todo add form validation

export default Form;