import React, {useState} from 'react';
import { useForm } from "react-hook-form"

const Form = ({hoistDataForm, closeForm, editCardInfo}) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const cardInfoEdit =  editCardInfo !== '' ? editCardInfo : '';

    const [focusedInput, setFocusedInput] = useState(-1);

    const focusInput = (inputNum, e) => {
        if(inputNum == focusedInput) {
            return;
        }
        console.log(1)
        setFocusedInput(inputNum);
        e.target.children[1].focus();
    }

    // Todo: Fix when clicking Form Set to focus on input directly

    return(
        <form className="Form-Container" onSubmit={handleSubmit((data)=>{hoistDataForm(data)})}>

            <div className="Form-Header-Container">
                <h1 className="Form-Header">Create Card</h1>
                <img onClick={closeForm} src="2F2FD.svg" alt='Close Form'/>                
            </div>

            <div className='Form-Name-Inputs-Container'>
                
                <div tabIndex="1" className={focusedInput === 0 ? "Form-Set Focused-Input" : "Form-Set"} onClick={(e)=>{focusInput(0,e)}}>
                    <label>First Name</label>
                    <input tabIndex="-1" onFocus={()=>{}} placeholder={errors.firstName?.type === 'required' ? "First name is required." : undefined} className={errors.firstName?.type === 'required' ?  "Form-Error" : "First Name"} defaultValue={cardInfoEdit.firstName } {...register("firstName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} type="text" />
                </div>

                <div tabIndex="2" className={focusedInput === 1 ? "Form-Set Focused-Input" : "Form-Set"}  onFocus={(e)=>{focusInput(1,e)}} onClick={(e)=>{focusInput("1",e)}}>
                    <label>Middle Name</label>
                    <input tabIndex="-1" placeholder="Middle Name" defaultValue={cardInfoEdit.middleName } {...register("middleName")} type="text"/>
                </div>
            
                <div tabIndex="3" className={focusedInput === 2 ? "Form-Set Focused-Input" : "Form-Set"}  onClick={(e)=>{focusInput(2,e)}}>
                    <label>Last Name</label>
                    <input  tabIndex="-1" placeholder={errors.lastName?.type === 'required' ? "Last name is required." : undefined} className={errors.lastName?.type === 'required' ?  "Form-Error" : "Last Name"} defaultValue={cardInfoEdit.lastName } {...register("lastName", { required: true })} aria-invalid={errors.lastName? "true" : "false"} type="text"/>
                </div>

                <div tabIndex="4" className={focusedInput === 3 ? "Form-Set Focused-Input" : "Form-Set"}  onClick={(e)=>{focusInput(3,e)}}>
                    <label>Honorifics</label>
                    <input tabIndex="-1" placeholder="Honorifics" defaultValue={cardInfoEdit.honorifics } {...register("honorifics")} type="text"/>
                </div>

                <div tabIndex="5" className={focusedInput === 4 ? "Form-Set Focused-Input" : "Form-Set"} onClick={(e)=>{focusInput(4,e)}}>
                    <label>Field/Occupation</label>
                    <input tabIndex="-1" placeholder="Field/Occupation" defaultValue={cardInfoEdit.occupation } {...register("occupation")} type="textarea"/>
                </div>
                
                <div tabIndex="6" className="Form-Set">
                    <label>Date of Birth</label>
                    <input tabIndex="-1" className={errors.dob?.type === 'required' ?  "Form-Error" : undefined} defaultValue={cardInfoEdit.dob } {...register("dob", {required:true})} type="date"/>
                </div>

            </div>

            <div tabIndex="7" className="Form-Set Set-Large">
                <label>Contact Information</label>
                <textarea tabIndex="-1" defaultValue={cardInfoEdit.contactInfo } {...register("contactInfo")} type="text"/>
            </div>

            <div tabIndex="8" className="Form-Set Set-Large">
                <label>Address</label>
                <textarea tabIndex="-1" defaultValue={cardInfoEdit.address } {...register("address")} type="text"/>
            </div>
            
            <div tabIndex="9" className="Form-Set Set-Large Notes">
                <label>Notes</label>
                <textarea tabIndex="-1" className="Form-Notes-Input" defaultValue={cardInfoEdit.notes } {...register("notes")} />
            </div>

            <button tabIndex="10" type='submit'>Create</button>
        
        </form>
    )
}

// Todo add form validation

export default Form;