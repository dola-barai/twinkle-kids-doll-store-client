import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import MyToyRow from "./MyToyRow";
import { useState } from "react";

const MyToys = () => {

    const toys = useLoaderData();
    const [ toy, setToy] = useState([])

    const handleDelete = id => {
        const proceed = confirm('Are you sure want to delete')
        if(proceed){
            fetch(`http://localhost:5000/addToy/${id}`, {
                method: 'DELETE'
            }
            )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successful')
                    const remaining = toy.filter(toy => toy._id !== id)
                    setToy(remaining)
                }
            })
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2>My Toys: {toys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Doll Image</th>
                            <th>Doll Name</th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Sub-category</th>
                            <th>Ratings</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToyRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                            ></MyToyRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default MyToys;