import { useContext } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProviders";

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const handleAddToy = event => {
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
        const addToy = {
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
        console.log(addToy);

        fetch('https://twinkle-kids-doll-store-server.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Add a Toy Data successfully')
            }
        })
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="m-10">
            <h2 className="text-4xl font-bold text-center mb-5">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="url"  placeholder="Photo URL" name="image" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Doll Name</span>
                </label>
                <input type="text" name="doll" placeholder="Doll Name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Name</span>
                </label>
                <input type="text" defaultValue={user?.displayName} name="seller" placeholder="Seller Name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Email</span>
                </label>
                <input type="text" defaultValue={user?.email} placeholder="example@gmail.com" name="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub Category</span>
                </label>
                <select name="subCategory">
                   <option value="Baby Dolls">Baby Dolls</option>
                   <option value="Barbie Dolls">Barbie Dolls</option>
                   <option value="American Dolls">American Dolls</option>
                </select>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <select name="ratings">
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
                <input type="number" defaultValue='' name="price" placeholder="$" className="input input-bordered" />
            </div>
           
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input type="number" defaultValue='' name="quantity" placeholder="quantity" className="input input-bordered" />
            </div>
            
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Detail description</span>
                </label>
                <input type="text" name="details" placeholder="Details" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Add A Toy</button>
            </div>
            </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddToy;