import React, {useEffect, useState} from 'react';

const List = ({trips, setTrips}) => {
    const[price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans=0;
        trips.map((el)=>(
            ans+= el.amount * el.price
        ))
        setPrice(ans);
    }

    const handleRemove = (e, id) =>{
        e.preventDefault();
        console.log(id);
        const arr = trips.filter((el) => el.id !== id);
        console.log(arr);
        setTrips(arr);
    }

    useEffect(()=>{
        handlePrice();
    })
    const handleChange = (el,d) => {
        let ind = -1;
        trips.forEach((data, index)=> {
            if(data.id === el.id)
                ind = index;
        });
        const tempArr = trips;
        tempArr[ind].amount +=d;

        if(tempArr[ind].amount ===0)
            tempArr[ind].amount =1;
        setTrips([...tempArr])
    }
    return (
        <>
            <section className="listOfTrips">
                <div className="listOfTrips_container container">
                    <h2 className="listOfTrips_title">Lista zarezerwowanych wycieczek</h2>
                    <ul className="cart">
                        {
                            trips.map((el, i) => {
                                console.log(el);
                                return (
                                    <li className="cart_box" key={i}>
                                        <div className="cart_img">
                                            <img src={el.image} alt=""/>
                                            <p>{el.country} </p>
                                        </div>
                                        <div className="cart_buttons">
                                            <button className="button_plus" onClick={() =>handleChange(el, +1)}> + </button>
                                            <button className="button_amount">{el.amount}</button>
                                            <button className="button_minus" onClick={() =>handleChange(el, -1)}> - </button>
                                        </div>
                                        <div className="cart_price">
                                            <span> {el.price}zł </span>
                                            <button onClick={(e)=>handleRemove(e, el.id)}>Usuń</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    <div className="total">
                        <span>Suma:</span>
                        <span> {price} zł</span>
                    </div>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default List;
