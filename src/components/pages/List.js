import React from 'react';

const List = ({trips}) => {
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

export default List;
