const Shipping = () => {
    return (
        <div>
            <div className="my-10 mx-24">
        
                <div className="grid sm:grid-cols-1 md:grid-cols-3 divide-x-2 ">
                    <div className="card card-side rounded-none ">
                        <figure><img className=" h-24 w-24" src="https://cdn-icons-png.flaticon.com/512/2554/2554978.png" alt="Author" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Free Shipping Worldwide</h2>
                            <p>On order over $150</p>
                        </div>
                    </div>
                    <div className="card card-side rounded-none ps-3">
                        <figure><img className=" h-24 w-24" src="https://img.freepik.com/premium-vector/sack-money-big-pile-cash-money-icon-illustration-money-bag-flat-icon_385450-362.jpg" alt="Author" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Cash On Delivery</h2>
                            <p>100% money back guarantee</p>
                        </div>
                    </div>
                    <div className="card card-side rounded-none ps-3">
                        <figure><img className=" h-24 w-24" src="https://cdn-icons-png.flaticon.com/512/4090/4090462.png" alt="Author" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">24/7 Customer Service</h2>
                            <p>Call us 24/7 at 123-456-789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;