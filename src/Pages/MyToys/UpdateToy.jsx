import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const UpdateToy = () => {
    const toy = useLoaderData();
    const {  photoURL, dollName, seller, email, subCategory,  ratings } = toy;
    
    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const doll = form.doll.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updateToy = {
            photoURL: image,
            dollName: doll,
            seller: seller,
            email: email,
            subCategory: subCategory,
            ratings: ratings,
            price: price,
            quantity: quantity,
            details: details
        }
        console.log(updateToy);
      
        
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="m-10">
            <h2 className="text-4xl font-bold text-center mb-5">Update Toy: {dollName}</h2>
            <form onSubmit={handleUpdateToy}>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="url"  placeholder="Photo URL" name="image" defaultValue={photoURL} className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Doll Name</span>
                </label>
                <input type="text" name="doll" defaultValue={dollName} placeholder="Doll Name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Name</span>
                </label>
                <input type="text" defaultValue={seller} name="seller" placeholder="Seller Name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Email</span>
                </label>
                <input type="text" defaultValue={email} placeholder="example@gmail.com" name="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub Category</span>
                </label>
                <select defaultValue={subCategory} name="subCategory">
                   <option value="Baby Dolls">Baby Dolls</option>
                   <option value="Barbie Dolls">Barbie Dolls</option>
                   <option value="American Dolls">American Dolls</option>
                </select>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <select name="ratings" defaultValue={ratings}>
                   <option value="4.5">4.5</option>
                   <option value="4.6">4.6</option>
                   <option value="4.7">4.7</option>
                   <option value="4.8">4.8</option>
                   <option value="4.9">4.9</option>
                   <option value="5">5</option>
                   
                </select>            
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number" name="price" placeholder="$" className="input input-bordered" />
            </div>
           
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" />
            </div>
            
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Detail description</span>
                </label>
                <input type="text" name="details" placeholder="Details" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Update Toy</button>
            </div>
            </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateToy;