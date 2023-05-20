import { Link } from "react-router-dom";

const MyToyRow = ({ toy, handleDelete }) => {
    const { _id, photoURL, dollName, seller, email, subCategory,  ratings, price, quantity, details } = toy;
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
            {subCategory}
        </td>
        <td>
            {ratings}
        </td>
        <td>
           ${price}
        </td>
        <td>
           {quantity}
        </td>
        <td>
           {details}
        </td>
        <td>
             <Link to={`/updateToy/${_id}`}><button className="btn btn-sm btn-info">Update</button></Link>
        </td>
        <td>
            <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error">Delete</button>
        </td>
    </tr>
    );
};

export default MyToyRow;