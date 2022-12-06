/*
import React from 'react';

const Contact = () => {
    return (
        <div>
            To przykładowa strona kontktu
        </div>
    );
};

export default Contact;*/
import React from 'react';

const Contact = ({trips}) => {
    return (
        <>
            <div>
                Tu bedzie lista wycieczek
            </div>
            <ul>
                {
                    trips.map((el, i) => <li key={i}>{el.title} {el.country} {el.price}</li>)
                }
            </ul>
        </>
    );
};

export default Contact;
