import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AllToysRow from "./AllToysRow";

const AllToys = () => {

    const allToys = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2>AllToys: {allToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(allToy => <AllToysRow
                            key={allToy._id}
                            allToy={allToy}
                            ></AllToysRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default AllToys;