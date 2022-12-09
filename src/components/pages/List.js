import React, {useEffect, useState} from 'react';
import "./../../scss/list.scss";

const List = ({trips, setTrips, handleChange}) => {
    const[price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans=0;
        trips.map((el)=>(
            ans+= el.amount * el.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr= trips.filter((el)=> el.id!==id);
        setTrips(arr);
        /*handlePrice()*/
    }

    useEffect(()=>{
        handlePrice();
    })
    return (
        <>
            <section className="listOfTrips">
                <div className="listOfTrips__container container">
                    <h2 className="listOfTrips_title">Lista zarezerwowanych wycieczek</h2>
                    <ul className="cart">
                        {
                            trips.map((el, i) =>
                                <li className="cart_box" key={i}>
                                    <div className="cart_img">
                                        <img src={el.image} alt=""/>
                                        <p>{el.country} </p>
                                    </div>
                                    <div className="cart_buttons">
                                        <button className="button-plus" onClick={() =>handleChange(el, "+")}> + </button>
                                        <button>{el.amount}</button>
                                        <button className="button-minus" onClick={() =>handleChange(el, "-")}> - </button>
                                    </div>
                                    <div className="cart_price">
                                        <span> {el.price}zł </span>
                                        <button onClick={()=>handleRemove(el.id)}>Usuń</button>
                                    </div>
                            </li>)
                        }

                    <div className="total">
                        <span>Suma:</span>
                        <span>{price} zł</span>
                    </div>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default List;
