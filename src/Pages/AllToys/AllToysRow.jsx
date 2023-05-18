const AllToysRow = ({ allToy }) => {
    const { _id, seller, toy_name,  sub_category, price, available_quantity} = allToy;
    return (
        <tr>
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
          <button className="btn btn-sm">View Details</button>
        </td>
    </tr>
    );
};

export default AllToysRow;