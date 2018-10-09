import React from 'react';

const DisplayEmployee = ({ employee }) => {
    return (
        <div className="DisplayEmployee">
            <img src={employee.image} alt="picture"  />
            <ul>
                <li>character : {employee.character}</li>
                <li>characterDirection: {employee.characterDirection}</li>
                <li>quote : {employee.quote}</li>
            </ul>
        </div>
    );
};

export default DisplayEmployee;
