import React, {useState} from 'react';
import FormInput from "./FormInput";
import "../scss/elements/_contact.scss"


const Contact = () => {
    const[values, setValues] = useState({
        userName: "",
        email: "",
        phone: "",
        message: "",

    });
    const inputs = [
        {
            id: 1,
            name:"userName",
            type: "text",
            placeholder: "Imię",
            label: "Imię",
        },
        {
            id: 2,
            name:"email",
            type: "text",
            placeholder: "Email",
            label: "Email",
        },
        {
            id: 3,
            name:"phone",
            type: "text",
            placeholder: "Telefon",
            label: "Telefon",
        },
        {
            id: 4,
            name:"message",
            type: "text",
            placeholder: "Wiadomość",
            label: "Wiadomość",
        }
    ];


    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }
    console.log(values)
    return (
        <div className="form_app container">
            <form onSubmit={handleSubmit}>
                <h2>Formularz kontaktowy</h2>
                {inputs.map(input => (
                <FormInput
                    key={input.id}
                    {... input}
                    value={values[input.name]}
                    onChange={onChange}
                />
                ))}
                <button className="form_app_button">Wyślij</button>
            </form>
        </div>
    );
};

export default Contact;






/*
<div className="contact_form">
    <form className="contact_form container">
        <div className="formInput">
            <label>Imię</label>
            <input placeholder="Imię"/>
        </div>
        <div className="formInput">
            <label>Email</label>
            <input placeholder="Email" />
        </div>
        <div className="formInput">
            <label>Telefon</label>
            <input placeholder="Telefon"/>
        </div>
        <div className="formInput">
            <label>Wiadomość</label>
            <input placeholder="Wiadomość"/>
        </div>
    </form>
</div>
*/
