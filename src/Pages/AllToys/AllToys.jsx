import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-5xl">All toys:  </h2>
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
                            <AllToysRow></AllToysRow>
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