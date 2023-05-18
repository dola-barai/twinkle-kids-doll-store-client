const ClientSays = () => {
    return (
        <div className="my-10">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold italic">What Client Says</h2>
                <p>Check out what Barbie, American and Baby Doll client are saying!</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className="rounded-full h-24 w-24 p-2" src="https://img.freepik.com/free-photo/blonde-young-writing-notebook-with-pencil_23-2147862877.jpg?w=740&t=st=1684404737~exp=1684405337~hmac=bfa13a89ca9d19f828dcbc518ecae8a0b6969147bf38b520ab7da6ebfa7c70e5" alt="Author" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Daizy Cuze</h2>
                        <p>Good service, delivery, price and product! </p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className="rounded-full h-24 w-24 p-2" src="https://img.freepik.com/free-photo/blonde-young-writing-notebook-with-pencil_23-2147862877.jpg?w=740&t=st=1684404737~exp=1684405337~hmac=bfa13a89ca9d19f828dcbc518ecae8a0b6969147bf38b520ab7da6ebfa7c70e5" alt="Author" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mickel Riva</h2>
                        <p>Talent and love ❤️ was given to this doll project.</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className="rounded-full h-24 w-24 p-2" src="https://img.freepik.com/free-photo/blonde-young-writing-notebook-with-pencil_23-2147862877.jpg?w=740&t=st=1684404737~exp=1684405337~hmac=bfa13a89ca9d19f828dcbc518ecae8a0b6969147bf38b520ab7da6ebfa7c70e5" alt="Author" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Farin Watson</h2>
                        <p>A very special thanks! I love it.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSays;