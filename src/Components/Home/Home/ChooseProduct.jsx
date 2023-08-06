import Tilt from 'react-parallax-tilt';

const ChooseProduct = () => {
    return (
        <div className="my-10 mx-3">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold italic">Why Choose Our Products</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="grid grid-cols-1">
                    <div className="card lg:card-side bg-white rounded-none">
                        <figure><img className="rounded-full p-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzddbQT3tYLo9ZflnJ9NY047HhAdonDtdPvQ&usqp=CAU" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Quality</h2>
                            <p>Customers value high-quality products that are well-made and durable.</p>
                        </div>
                    </div>

                    <div className="card lg:card-side bg-white rounded-none">
                        <figure><img className="rounded-full p-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzddbQT3tYLo9ZflnJ9NY047HhAdonDtdPvQ&usqp=CAU" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Variety</h2>
                            <p> A diverse range of dolls can attract customers with different preferences.</p>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-white rounded-none">
                        <figure><img className="rounded-full p-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzddbQT3tYLo9ZflnJ9NY047HhAdonDtdPvQ&usqp=CAU" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Customization Options</h2>
                            <p>Providing customization options to customers who want to personalize their dolls.</p>
                        </div>
                    </div>
                </div>


                <div>
                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={900}
                        scale={1}
                        transitionSpeed={200}
                        gyroscope={true}
                    >
                        <div className="relative max-w-full overflow-hidden rounded-lg">
                            <div className=" w-48 md:w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 ] rounded-lg">
                                <img
                                    src="https://img.freepik.com/free-vector/beautiful-princess-cartoon-character-sticker_1308-60026.jpg?w=360&t=st=1691330799~exp=1691331399~hmac=004abd1d38a8e5ef5fc46a4d660256dee9ef887574127ff5982b1c05c7c7495e"
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>

                    </Tilt>
                </div>
                <div className="grid grid-cols-1">
                    <div className="card lg:card-side bg-white rounded-none">
                        <figure><img className="rounded-full p-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzddbQT3tYLo9ZflnJ9NY047HhAdonDtdPvQ&usqp=CAU" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Reputation and Trust</h2>
                            <p> If your doll shop has built a strong reputation for quality products and excellent customer service over time.</p>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-white rounded-none">
                        <figure><img className="rounded-full p-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzddbQT3tYLo9ZflnJ9NY047HhAdonDtdPvQ&usqp=CAU" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Competitive Pricing</h2>
                            <p> Offering competitive prices for your dolls compare into the market can attract price-conscious customers.</p>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-white rounded-none">
                        <figure><img className="rounded-full p-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzddbQT3tYLo9ZflnJ9NY047HhAdonDtdPvQ&usqp=CAU" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Online Presence</h2>
                            <p>Maintaining a online presence through a blog or can engage customers sense of community around your doll shop.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseProduct;