import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import MyToyRow from "./MyToyRow";
import { useState } from "react";
import Swal from "sweetalert2";

const MyToys = () => {

    const toys = useLoaderData();
    const [userToys, setUserToys] = useState([]);


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.isConfirmed){
            fetch(`https://twinkle-kids-doll-store-server.vercel.app/addToy/${id}`, {
                method: 'DELETE'
            }
            )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Toy has been deleted.',
                        'success'
                      )
                    const remaining = userToys.filter(toy => toy._id !== id)
                    setUserToys(remaining)
                }
            })
        }
    })
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