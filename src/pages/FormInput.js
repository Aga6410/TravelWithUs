import React from 'react';
import "../scss/elements/_contact.scss"
import "../scss/elements/_formInput.scss"

const FormInput = (props) => {
    const {label, onChange, id, ...inputProps} = props;
    return (
        <div className="contact_form">
            <div className="contact_form container">
                <div className="contact_form_formInput">
                    <label>{label}</label>
                    <input {...inputProps}
                           className="contact_form_formInput_input"
                           onChange={onChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormInput;



