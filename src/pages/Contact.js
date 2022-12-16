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
                <div className="contacts_column">
                    <div className='contacts_localization'>
                        <h2 className='contacts_localization_title'>Kontakt</h2>
                        <div className="contacts_localization_details">
                            <a href="mailto:info@travelwithus.com" className="contacts_localization_details_item">
                                <img src={process.env.PUBLIC_URL + '/assets/mail.svg'} alt="mail" className="contacts_localization_details_item_mail"/>
                                info@travelwithus.com
                            </a>
                            <a href="tel:123456789" className="contacts_localization_details_item">
                                <img src={process.env.PUBLIC_URL + '/assets/phone.svg'} alt="phone" className="contacts_localization_details_item_phone"/>
                                (12) 123 456 789
                            </a>
                            <div className="contacts_localization_details_item">
                                <img src={process.env.PUBLIC_URL + '/assets/place.svg'} alt="place" className="contacts_localization_details_item_place"/>
                                ul.Krakowska 2, 30-000 Kraków
                            </div>
                            <div className="contacts_localization_details_item_map">
                            <iframe title="iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.8531045387253!2d19.94007041495425!3d50.051583023906616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6bb7af3f6b%3A0xc1adf6af3a6a7338!2sKrakowska%202%2C%2033-332%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1671122309300!5m2!1sen!2spl"
                                width="400" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts_column">
                    <div className='contacts_box'>
                        <h2 className='contacts_box_title'>Zostaw wiadomość</h2>
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
            </div>
        </section>
    );
};

export default Contact;



