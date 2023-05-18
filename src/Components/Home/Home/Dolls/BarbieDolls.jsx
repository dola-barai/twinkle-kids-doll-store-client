import p1 from '../../../../assets/11.jpg'
import p2 from '../../../../assets/12.jpg'
import p3 from '../../../../assets/13.jpg'
import p4 from '../../../../assets/10.jpg'
import { Link } from 'react-router-dom';

const BarbieDolls = () => {
    return (
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
                            <td>Barbie Doll</td>
                            <td>$5030</td>
                            <td>4.8/5</td>
                            <td><Link to='/view'><button className="btn btn-sm">View Details</button></Link></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td><img className='h-20 w-20' src={p2} alt="" /></td>
                            <td>Barbie Doll</td>
                            <td>$5900</td>
                            <td>4.8/5</td>
                            <td><Link to='/view'><button className="btn btn-sm">View Details</button></Link></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td><img className='h-20 w-20' src={p3} alt="" /></td>
                            <td>Barbie Doll</td>
                            <td>$5010</td>
                            <td>4.8/5</td>
                            <td><Link to='/view'><button className="btn btn-sm">View Details</button></Link></td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>4</th>
                            <td><img className='h-20 w-20' src={p4} alt="" /></td>
                            <td>Barbie Doll</td>
                            <td>$5020</td>
                            <td>4.8/5</td>
                            <td><Link to='/view'><button className="btn btn-sm">View Details</button></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
};

export default BarbieDolls;