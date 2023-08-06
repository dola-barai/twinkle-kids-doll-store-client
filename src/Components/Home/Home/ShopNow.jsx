const ShopNow = () => {
    return (
        <div className="grid grid-cols-2 gap-3 my-20 mx-5">
            <div>
                <div className="h-96 transition hover:scale-90 ease-in duration-200 delay-0 " style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=740&t=st=1691334719~exp=1691335319~hmac=72e47e0d1e7ae69171f0b4728b5e53acd01a81f15d25bcd0644119b274cbd738)' }}>
                    <div className=""></div>
                    <div className="text-neutral-content">
                        <div className="max-w-sm m-10">
                            <h1 className="text-xl p-2 font-serif pt-20">New Dolls Collection with 35% discount</h1>
                            <button className="btn btn-warning my-5">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-96 transition hover:scale-90 ease-in duration-200 delay-0 " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/stuffed-toy-doll_206881-496.jpg?w=740)' }}>
                    <div className=""></div>
                    <div className="text-neutral-content">
                        <div className="max-w-sm m-10">
                            <h1 className="text-xl p-2 font-serif pt-20">New Dolls Collection with 35% discount</h1>
                            <button className="btn btn-warning my-5">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopNow;