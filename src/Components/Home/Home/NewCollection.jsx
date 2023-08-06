const NewCollection = () => {
    return (
        <div className="grid grid-cols-2 gap-3 my-20 mx-5">
            <div>
                <div className="h-96 transition hover:scale-90 ease-in duration-200 delay-0 " style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cute-plush-toys-arrangement_23-2150312316.jpg?w=740&t=st=1691321262~exp=1691321862~hmac=c42c6dc1914ba2f88f2a3093c00c3787f7a952b39317f43543bf5031bc2cdc53)' }}>
                    <div className=""></div>
                    <div className="text-neutral-content">
                        <div className="max-w-sm">
                            <h1 className="text-xl p-2 font-serif bg-amber-600">New Dolls Collection with 25% discount</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="h-96 transition hover:scale-90 ease-in duration-200 delay-0 " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/childhood-cancer-awareness-month-background-concept_23-2149499381.jpg?w=740)' }}>
                    <div className=""></div>
                    <div className="text-neutral-content">
                        <div className="max-w-sm">
                            <h1 className="text-xl p-2 font-serif bg-amber-600">New Dolls Collection with 25% discount</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;