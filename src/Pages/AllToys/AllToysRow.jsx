import { Link } from "react-router-dom";

const AllToysRow = ({ allToy }) => {
    const { _id, img, seller, toy_name,  sub_category, price, available_quantity} = allToy;
    return (
        <tr>
        <th>
            <img className="h-16 w-16" src={img} alt="" />
        </th>
        <th>
            {seller}
        </th>
        <td>  
            {toy_name}
        </td>
        <td>
            {sub_category}
        </td>
        <td>
            ${price}
        </td>
        <td>
            {available_quantity}
        </td>
        <td>
          <Link to={`/allToys/${_id}`}><button className="btn btn-sm">View Details</button></Link>
        </td>
    </tr>
    );
};

export default AllToysRow;