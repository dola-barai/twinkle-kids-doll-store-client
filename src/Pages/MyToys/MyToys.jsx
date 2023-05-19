import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import MyToyRow from "./MyToyRow";
import { useState } from "react";

const MyToys = () => {

    const myToys = useLoaderData();
    const [ toys, setToys] = useState([])

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
                    const remaining = toys.filter(toy => toy._id !== id)
                    setToys(remaining)
                }
            })
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2>My Toys: {myToys.length}</h2>
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToyRow
                            key={myToy._id}
                            myToy={myToy}
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