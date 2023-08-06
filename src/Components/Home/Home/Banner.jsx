const Banner = () => {
    return (
        <div className='carousel'>
            <div id="slide1" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-psd/maternity-baby-shower-background_23-2150237221.jpg?w=740&t=st=1691331644~exp=1691332244~hmac=83ab7ebb713ad2ee9c1a549b187c1697e21e2e9d7f8fbc7c439fdad61c0363b6")` }}>
            <div className="hero-overlay bg-opacity-25"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 sm:text-4xl md:text-7xl m-5 font-serif text-orange-600"><span className="text-4xl  uppercase text-orange-800">Welcome to</span> <br /> Twinkle - Kid's Doll Store</h1>
                <p className="mb-5 sm:text-2xl md:text-3xl text-gray-600">In our Doll Store, you can find all the available models of dolls for your Baby.</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-outline">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
          </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/flat-lay-composition-toys-frame-template_23-2148144823.jpg?w=740&t=st=1684387688~exp=1684388288~hmac=83609b3daf8f5e1e91a750c2e64e11315f90dcc34832aa7242a8e126a2148d95')`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="">
                <h1 className="mb-5 sm:text-4xl md:text-7xl font-serif text-orange-300"><span className="text-4xl uppercase text-orange-800">Welcome to</span> <br /> Twinkle - Kid's Doll Store</h1>
                <p className="mb-5 sm:text-2xl md:text-3xl text-gray-600">In our Doll Store, you can find all the available models of dolls for your Baby.</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-outline">❮</a> 
            <a href="#slide3" className="btn btn-circle btn-outline">❯</a>
          </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/flat-lay-composition-toys-with-copyspace_23-2148144822.jpg?w=740&t=st=1684387718~exp=1684388318~hmac=6525edcf6cdc6153f42d17b3cf5b413f48f5461c356464e736c93595eb602b11")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="">
                <h1 className="mb-5 sm:text-4xl md:text-7xl font-serif text-orange-300"><span className="text-4xl uppercase text-orange-800">Welcome to</span> <br /> Twinkle - Kid's Doll Store</h1>
                <p className="mb-5 sm:text-2xl md:text-3xl text-gray-600">In our Doll Store, you can find all the available models of dolls for your Baby.</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-outline">❮</a> 
            <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
          </div>
          </div>
        </div>
    );
};

export default Banner;