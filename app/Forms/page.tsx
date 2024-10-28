export default function Forms (){
    return(
       
        <div  className= " w-full bg-gray-100 ">
        <div className="p-6 text-4xl text-center font-extrabold text-black"> <h1>Enter your Details</h1>
                <div>
                    <form className="flex flex-col mt-16 justify-center items-center">
                        <input type="name" className="w-96 rounded-xl p-3 m-3 text-xl font-light" placeholder="Enter Your Name"/>
                        <input type="email" className="w-96 rounded-xl p-3 m-3 text-xl font-light" placeholder="Enter Your Email"/>
                        <input type="text" className="w-96 rounded-xl p-3 m-3 text-xl font-light" placeholder="Debit card Number"/>
                        <input type="address" className="w-96 rounded-xl p-3 m-3 text-xl font-light" placeholder="Address"/>
                        <button className=" border border-blue-600 text-white bg-blue-700 rounded-md text-sm  mt-6 p-3 m-2 flex justify-center items-center"><a href="./thanks">Place your order</a></button>
                    
                    </form>
        </div> </div>
        </div>
    
    )}