import p1 from '../../../assets/1.jpeg'
import p2 from '../../../assets/2.jpg'
import p3 from '../../../assets/3.jpeg'
import p4 from '../../../assets/8.jpeg'
import p5 from '../../../assets/5.jpeg'
import p6 from '../../../assets/6.jpeg'
import p7 from '../../../assets/7.jpeg'
import p8 from '../../../assets/8.jpeg'
import p9 from '../../../assets/9.jpg'
import p10 from '../../../assets/10.jpg'
import p11 from '../../../assets/11.jpg'
import p12 from '../../../assets/12.jpg'
import p13 from '../../../assets/13.jpg'
import p14 from '../../../assets/14.jpg'
import p15 from '../../../assets/15.jpeg'

const Gallery = () => {
    return (
        <div className="my-10">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold italic">Shop Our Product</h2>
                <p>All varieties dolls available in different shapes and types by special Doll maker.</p>
            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-5 gap-4'>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p1} /></figure>
                    <p className="text-center font-bold">Baby Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p2} /></figure>
                    <p className="text-center font-bold">Baby Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p3} /></figure>
                    <p className="text-center font-bold">Baby Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p4} /></figure>
                    <p className="text-center font-bold">American Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p5} /></figure>
                    <p className="text-center font-bold">American Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p6} /></figure>
                    <p className="text-center font-bold">American Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p7} /></figure>
                    <p className="text-center font-bold">American Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p8} /></figure>
                    <p className="text-center font-bold">American Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p9} /></figure>
                    <p className="text-center font-bold">Barbie Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p10} /></figure>
                    <p className="text-center font-bold">Barbie Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p11} /></figure>
                    <p className="text-center font-bold">Barbie Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p12} /></figure>
                    <p className="text-center font-bold">Barbie Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p13} /></figure>
                    <p className="text-center font-bold">Barbie Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p14} /></figure>
                    <p className="text-center font-bold">Barbie Dolls</p>
                </div>
                <div className="card w-48 h-52 bg-base-100 shadow-xl">
                    <figure className='px-5 pt-5'><img src={p15} /></figure>
                    <p className="text-center font-bold">Barbie Dolls</p>
                </div>

            </div>
        </div>

    );
};

export default Gallery;