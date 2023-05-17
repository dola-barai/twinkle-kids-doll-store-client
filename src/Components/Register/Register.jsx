import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero m bg-base-200 py-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <h1 className="text-3xl font-bold text-center mb-3">Please Register</h1>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="example@gmail.com" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <br />
                    <p className="text-center">Already have an account? <Link to='/login' className="text-blue-500">Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;