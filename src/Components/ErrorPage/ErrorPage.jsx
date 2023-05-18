import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-21325.jpg?w=740&t=st=1684383051~exp=1684383651~hmac=4c0ce9178b96baa65077242c20aae77be94c604114d0e94095c11bfdc1d12f4f")` }}>
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <Link to='/'><button className="btn btn-primary">Back to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;