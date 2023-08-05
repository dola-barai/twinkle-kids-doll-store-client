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
        <div className="navbar z-10 w-full bg-[#03203C] text-orange-600">
            <div className="navbar-start">
                <img className='h-12 rounded-full' src={logo} alt="" />
                <p className='text-center text-orange-700 font-serif uppercase text-2xl font-semibold ms-2'>Twinkle</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className=''>
                    <Link to='/' className='font-semibold  hover:text-red-900 '>Home</Link>
                    <Link to='/allToys' className='ml-3 font-semibold hover:text-red-900 '>All Toys</Link>
                    {user ? 
                    <><Link to='/addToy' className='ml-3 font-semibold hover:text-red-900'>Add a Toy</Link>
                    <Link to='/myToy' className='ml-3 font-semibold hover:text-red-900'>My Toys</Link>
                    </> : <></>
                    }  
                    <Link to='/blogs' className='ml-3 font-semibold hover:text-red-900'>Blogs</Link>
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