import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const { login } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero m bg-base-200 py-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                <h1 className="text-3xl font-bold text-center mb-3">Login now!</h1>
                    <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="example@gmail.com" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    </form>
                    <div className="divider">Or sign in with</div>
                    <div className="text-center">
                        <button className="btn btn-circle btn-outline">
                            <p className="font-bold text-2xl">G</p>
                        </button>
                    </div>
                    <p className="text-center">Have not an account? <Link to='/register' className="text-blue-500">Please Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;