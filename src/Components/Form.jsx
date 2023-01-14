import React, {useState, useEffect, useRef} from 'react';
import { useForm } from "react-hook-form"
import "../Styles/From.css"

const Form = ({hoistDataForm, closeForm, editCardInfo}) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const cardInfoEdit =  editCardInfo !== '' ? editCardInfo : '';

    return(
        <form className="Form-Container" onSubmit={handleSubmit((data)=>{hoistDataForm(data)})}>

            <div className="Form-Header-Container">
                <h1 className="Form-Header">Create Card</h1>
                <img onClick={closeForm} src="2F2FD.svg" alt='Close Form'/>                
            </div>

            <div className='Form-Name-Inputs-Container'>
                
                <div  className="Form-Set">
                    <label>First Name</label>
                    <input 
                    placeholder={errors.firstName?.type === 'required' ? "First name is required." : "First Name"} 
                    className={errors.firstName?.type === 'required' ?  "Form-Error" : undefined} 
                    defaultValue={cardInfoEdit.firstName } {...register("firstName", { required: true })} 
                    aria-invalid={errors.firstName ? "true" : "false"} 
                    type="text" />
                </div>

                <div  className="Form-Set">
                    <label>Middle Name</label>
                    <input
                     
                    placeholder="Middle Name" 
                    defaultValue={cardInfoEdit.middleName } {...register("middleName")} 
                    type="text"/>
                </div>
            
                <div  className="Form-Set">
                    <label>Last Name</label>
                    <input 
                     
                    placeholder={errors.lastName?.type === 'required' ? "Last name is required." : "Last Name"} 
                    className={errors.lastName?.type === 'required' ?  "Form-Error" : undefined} 
                    defaultValue={cardInfoEdit.lastName } {...register("lastName", { required: true })} 
                    aria-invalid={errors.lastName? "true" : "false"} 
                    type="text"/>
                </div>

                <div  className="Form-Set">
                    <label>Honorifics</label>
                    <input 
                     
                    placeholder="Honorifics" 
                    defaultValue={cardInfoEdit.honorifics } {...register("honorifics")} 
                    type="text"/>
                </div>

                <div className="Form-Set">
                    <label>Field/Occupation</label>
                    <input 
                     
                    placeholder="Field/Occupation" 
                    defaultValue={cardInfoEdit.occupation } {...register("occupation")} 
                    type="textarea"/>
                </div>
                
                <div  className="Form-Set ">
                    <label>Date of Birth</label>
                    <input  
                    className={errors.dob?.type === 'required' ?  "Form-Error" : undefined} 
                    defaultValue={cardInfoEdit.dob} {...register("dob", {required:true})} 
                    type="date"/>
                </div>

            </div>

            <div className="Large-Form">
                <div  className="Form-Set Set-Large">
                    <label>Contact Information</label>
                    <textarea  defaultValue={cardInfoEdit.contactInfo } {...register("contactInfo")} type="text"/>
                </div>

                <div  className="Form-Set Set-Large">
                    <label>Address</label>
                <   textarea  defaultValue={cardInfoEdit.address } {...register("address")} type="text"/>
                </div>
            </div>
            
            <div  className="Form-Set Set-Large Notes">
                <label>Notes</label>
                <textarea  className="Form-Notes-Input" defaultValue={cardInfoEdit.notes } {...register("notes")} />
            </div>

            <button tabIndex="10" type='submit'>Create</button>
        
        </form>
    )
}

// Todo add form validation

export default Form;