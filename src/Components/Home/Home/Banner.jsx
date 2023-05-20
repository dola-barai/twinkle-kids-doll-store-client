const Banner = () => {
    return (
        <div className='carousel'>
            <div id="slide1" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/background-template-design-with-happy-girl-pink-pajamas_1308-42324.jpg?w=740&t=st=1684387648~exp=1684388248~hmac=fe8443e442bfc6d0caaf6cae0a5114bdfed29e2a27559deb0beeacdc15d44542")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 sm:text-4xl md:text-7xl font-semibold font-mono">Welcome to <br /> Twinkle - Kid's Doll Store</h1>
                <p className="mb-5 sm:text-2xl md:text-3xl font-semibold ">In our Doll Store, you can find all the available models of dolls for your Baby.</p>
               
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
                <h1 className="mb-5 sm:text-4xl md:text-7xl font-semibold font-mono">Welcome to <br /> Twinkle - Kid's Doll Store</h1>
                <p className="mb-5 sm:text-2xl md:text-3xl font-semibold ">In our Doll Store, you can find all the available models of dolls for your Baby.</p>
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
                <h1 className="mb-5 sm:text-4xl md:text-7xl font-semibold font-mono">Welcome to <br /> Twinkle - Kid's Doll Store</h1>
                <p className="mb-5 sm:text-2xl md:text-3xl font-semibold ">In our Doll Store, you can find all the available models of dolls for your Baby.</p>
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