import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className="navbar bg-rose-200">
            <div className="navbar-start">
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className='hover:text-blue-700'>
                    <Link to='/' className='font-semibold text-gray-500 hover:text-blue-700 '>Home</Link>
                    <Link to='/' className='ml-3 font-semibold text-gray-500 hover:text-blue-700 '>All Toys</Link>
                    <Link to='/' className='ml-3 font-semibold text-gray-500 hover:text-blue-700'>My Toys</Link>
                    <Link to='/' className='ml-3 font-semibold text-gray-500 hover:text-blue-700'>Add a Toy</Link>
                    <Link to='/' className='ml-3 font-semibold text-gray-500 hover:text-blue-700'>Blogs</Link>
                </div>
            </div>
            <div className="navbar-end">
                 <Link to='/login'><button className="btn btn-error">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;