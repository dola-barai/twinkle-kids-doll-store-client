import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const singleToy = useLoaderData();
    const { _id, seller, toy_name, sub_category, price, available_quantity } = singleToy;
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold italic">Toy Details</h2>
                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/beautiful-baby-bed-room-scene_25030-39913.jpg?w=740&t=st=1684434452~exp=1684435052~hmac=cfc6727197c08c5dde6f929d6112601553d24353b6e0575fc2044ffd72e87f5d")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center rounded-xl p-10 text-black bg-slate-200">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">Toy Name: {toy_name}</h1>
                                <h2 className='mb-2 text-2xl'>Seller Name: {seller}</h2>
                                <h2 className='mb-2 text-2xl'>Sub-Category: {sub_category}</h2>
                                <h2 className='mb-2 text-2xl'>Price: {price}</h2>
                                <h2 className='mb-16 text-2xl'>Available Quantity: {available_quantity}</h2>
                                <h2 className='text-2xl mb-3 font-semibold underline'>Warranty and Support</h2>
                                <p className="mb-5">If you'd like a copy of the manufacturer's warranty for a product found on twinkle.com, you can contact the manufacturer directly or visit their website for more information. Manufacturer's warranties may not apply in all cases, depending on factors like the use of the product, where the product was purchased, or who you purchased the product from. Please review the warranty carefully, and contact the manufacturer if you have any questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ToyDetails;