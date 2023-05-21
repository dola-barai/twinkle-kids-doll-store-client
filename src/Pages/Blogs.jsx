import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import useTitle from "../hook/useTitle";


const Blogs = () => {
    useTitle('Twinkle Kids Doll Store | Blogs')
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:w-2/3 sm:w-full mx-auto my-2'>
                <div className='bg-white mb-2 p-3 rounded-lg'>
                    <h3 className='font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p>An access token is a credential that grants permission to access a specific system or resource, often used in web applications and APIs for authentication and authorization. <br /> 
                       A refresh token is a credential used to obtain a new access token without requiring the user to reauthenticate, commonly used in token-based authentication systems. <br /> Access tokens are used for authentication and are sent with each request to access protected resources. Refresh tokens are used to obtain new access tokens without reauthentication. They should be securely stored on the client-side, typically in an HTTP-only secure cookie or a client-side storage mechanism with strong security measures.</p>
                </div>
                <div className='bg-white mb-2 p-3 rounded-lg'>
                    <h3 className='font-bold'>2. Compare SQL and NoSQL databases?</h3>
                    <p>SQL databases are relational databases that use structured query language (SQL) to manage and manipulate data. They have a predefined schema and provide a structured way to organize and access data. SQL databases are well-suited for complex data relationships and transactions, ensuring data integrity and consistency. <br /> NoSQL databases, on the other hand, are non-relational databases that provide flexible data models and scalability. They can handle unstructured and semi-structured data, making them suitable for handling large volumes of data and accommodating changing data requirements.</p>
                </div>
                <div className='bg-white mb-2 p-3 rounded-lg'>
                    <h3 className='font-bold'>3. What is express JS? What is Nest JS?</h3>
                    <p>Express JS: Express JS is a lightweight and flexible web application framework for Node.js, simplifying the process of building web applications and APIs with features like routing and middleware management. <br /> Nest JS: NestJS is a progressive and opinionated framework for building efficient server-side applications in TypeScript, leveraging the power of Express.js and offering additional features inspired by Angular, such as dependency injection and modular architecture.</p>
                </div>
                <div className='bg-white mb-2 p-3 rounded-lg'>
                    <h3 className='font-bold'>4. What is MongoDB aggregate and how does it work?</h3>
                    <p>A strong framework for conducting data aggregation operations on collections is provided by MongoDB's aggregate. It enables you to process and change database data as well as carry out intricate computations. It operates by manipulating the input documents through a pipeline of steps in sequential order. Filtering, grouping, sorting, projecting, or merging documents are just a few of the operations that each stage of the pipeline conducts, allowing you to collect and analyze data in a flexible and effective way.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;