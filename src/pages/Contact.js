import React, {useState} from 'react';
import "../scss/elements/_contact.scss"


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]) ;

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePhone= (e) => {
        setPhone(e.target.value);
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = [];

        if (!/^[A-Za-z0-9]{3,16}$/i.test(name) === true) {
            validationErrors.push('Imię powinno mieć pomiędzy 3 a 16 liter i nie powinno zawierać żadnych specjalnych znaków')
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === true) {
            validationErrors.push('Emial powinien mieć poprawny format')
        }
        if (!/^\d{9}$/i.test(phone) === true) {
            validationErrors.push('Telefon powinien zawierać same cyfry, bez spacji, 9 cyfr')
        }

        setErrors(validationErrors);
    }

    return (
        <section className='contacts'>
            <div className='contacts container'>
                <div className='contacts_box'>
                    <h2 className='contacts_box_title'>Formularz kontaktowy</h2>
                    <div className='contacts_box_form'>
                        <form className='contacts_box_form_container' onSubmit={handleSubmit}>
                            <label className='contacts_box_form_container_label'>Imię</label>
                            <input className='contacts_box_form_container_input'
                                   type="text"
                                   value={name}
                                   name="name"
                                   placeholder="Imię"
                                   required
                                   onChange={handleChangeName} />
                            <label className='contacts_box_form_container_label'>Email</label>
                            <input className='contacts_box_form_container_input'
                                   type="text"
                                   value={email}
                                   name="email"
                                   placeholder="Email"
                                   required
                                   onChange={handleChangeEmail}/>
                            <label className='contacts_box_form_container_label'>Telefon</label>
                            <input className='contacts_box_form_container_input'
                                   type="text"
                                   value={phone}
                                   name="phone"
                                   placeholder="Telefon"
                                   required
                                   onChange={handleChangePhone}/>
                            <label className='contacts_box_form_container_label'>Wiadomość</label>
                            <textarea className='contacts_box_form_container_input'
                                      value={message}
                                      placeholder="Wiadomość"
                                      required
                                      onChange={handleChangeMessage}/>
                            {
                                errors.map((error, i) => <p className='contacts_box_form_container_error_message' key={i}>{error}</p>)
                            }
                            <button className='contacts_box_form_container_button' type="submit" >Wyślij</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;



