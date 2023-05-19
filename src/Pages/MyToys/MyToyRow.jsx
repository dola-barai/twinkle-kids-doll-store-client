import React from 'react';

const MyToyRow = ({myToy}) => {
    const { photoURL, dollName, seller, email, subCategory,  ratings, price, quantity } = myToy;
    return (
        <tr>
        <th>
            <img className="h-16 w-16" src={photoURL} alt="" />
        </th>
        <th>
            {dollName}
        </th>
        <td>  
            {seller}
        </td>
        <td>
            {email}
        </td>
        <td>
            ${subCategory}
        </td>
        <td>
            {ratings}
        </td>
        <td>
           {price}
        </td>
        <td>
           {quantity}
        </td>
        <td>
             <button className="btn btn-sm btn-info">Update</button>
        </td>
        <td>
            <button className="btn btn-sm btn-error">Delete</button>
        </td>
    </tr>
    );
};

export default MyToyRow;