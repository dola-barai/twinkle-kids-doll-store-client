import './Contact.css'

const Contact = () => {
  
  return (
     <div className='bgImageC py-16'>
        <div className="text-center mb-6">
                <h2 className="text-4xl font-bold italic">Feedback</h2>
                <p className='text-black'>Feel free to give your honest Feedback.</p>
         </div>
          
        <div className='grid md:grid-cols-2 gap-6'>
          <div className=" ms-56 -mt-5">
            <img className="h-80" src="https://media2.giphy.com/media/gIfb10foLDtsWg1W3d/200w.webp?cid=ecf05e47y4ohhptw3uoqvvofgp4uz5a9epwgm7mk8d9s1tg0&ep=v1_stickers_search&rid=200w.webp&ct=s" alt="" />
          </div>
          <div className="md:mx-10 mt-8 mb-6">
            <form>
              <div className="grid grid-cols-1 ms-4 w-96  gap-2 mb-2">
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered rounded-3xl text-white" />
                
              </div>
              <textarea name="message" placeholder="Type Feedback here..." className="input input-bordered ms-4 w-80 md:w-96 rounded-3xl text-white h-24" rows={4} cols={53} />
              <div>
                <input className="btn normal-case border-b-4 border-amber-700 ms-4 text-amber-300 mt-2 rounded-3xl" type="submit"  value="Submit Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;