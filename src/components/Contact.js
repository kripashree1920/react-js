
const Contact = ()=>{
    return (
        <div>
        <h1 className="font-bold text-2xl p-4 m-4 text-center">Contact Us</h1>
      <form action="" className="flex  justify-center">
        <input type="text" placeholder="Name"  className="border border-black m-4 p-2"/>
        <input type="text" placeholder="Message" className="border border-black m-4 p-2" />
        <div >
        <button className="border border-black bg-gray-400 p-4 m-4 ">Submit</button>
        </div>
      </form>
      </div>
    )
}

export default Contact;