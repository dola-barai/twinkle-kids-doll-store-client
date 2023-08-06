import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo1.png'
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
        <div className="navbar z-10 w-full bg-[#120E43] text-orange-600">
            <div className="navbar-start">
                <img className='h-12 rounded-full' src={logo} alt="" />
                <p className='text-center text-orange-700 font-serif uppercase text-2xl font-semibold ms-2'>Twinkle</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className=''>
                    <Link to='/' className=' font-serif  hover:text-red-900 '>Home</Link>
                    <Link to='/allToys' className='ml-3  font-serif hover:text-red-900 '>Products</Link>
                    <Link to='/allToys' className='ml-3  font-serif hover:text-red-900 '>Shop</Link>
                    {user ? 
                    <><Link to='/addToy' className='ml-3  font-serif hover:text-red-900'>Add Product</Link>
                    <Link to='/myToy' className='ml-3  font-serif hover:text-red-900'>My Items</Link>
                    </> : <></>
                    }  
                
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