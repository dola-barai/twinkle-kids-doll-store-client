import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
          
        }).catch(error => {
           console.error(error)
        });
    }

    return (
        <div className="navbar bg-rose-200">
            <div className="navbar-start">
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className='hover:text-blue-700'>
                    <Link to='/' className='font-semibold text-gray-500 hover:text-blue-700 '>Home</Link>
                    <Link to='/allToys' className='ml-3 font-semibold text-gray-500 hover:text-blue-700 '>All Toys</Link>
                    <Link to='/' className='ml-3 font-semibold text-gray-500 hover:text-blue-700'>My Toys</Link>
                    <Link to='/addToy' className='ml-3 font-semibold text-gray-500 hover:text-blue-700'>Add a Toy</Link>
                    <Link to='/blogs' className='ml-3 font-semibold text-gray-500 hover:text-blue-700'>Blogs</Link>
                </div>
            </div>
            <div className="navbar-end">
            {user ?
              <><UserCircleIcon className="mr-3 h-8 w-8 text-rose-700" ></UserCircleIcon>
              <button className="btn btn-error" onClick={handleSignOut}>Sign out</button>
              </> : <Link to='/login'><button className="btn btn-error">Login</button></Link>
              }
                 
            </div>
        </div>
    );
};

export default Navbar;