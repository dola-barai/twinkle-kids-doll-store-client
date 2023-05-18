import { Link } from 'react-router-dom';
import p1 from '../../../../assets/1.jpeg'
import p2 from '../../../../assets/2.jpg'
import p3 from '../../../../assets/3.jpeg'

const BabyDolls = () => {
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td><img className='h-20 w-20' src={p1} alt="" /></td>
                            <td>Baby Doll</td>
                            <td>$530</td>
                            <td>4.5/5</td>
                            <td><Link to='/view'><button className="btn btn-sm">View Details</button></Link></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td><img className='h-20 w-20' src={p2} alt="" /></td>
                            <td>Baby Doll</td>
                            <td>$580</td>
                            <td>4.9/5</td>
                            <td><button className="btn btn-sm">View Details</button></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td><img className='h-20 w-20' src={p3} alt="" /></td>
                            <td>Baby Doll</td>
                            <td>$500</td>
                            <td>4.7/5</td>
                            <td><button className="btn btn-sm">View Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BabyDolls;