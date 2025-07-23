import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Details() {
    let [main,setmain]=useState({})
    const router= useNavigate()

function handleChange(e){
    setmain({...main,[e.target.id]:e.target.value})
}

function handleSubmit(e){
    e.preventDefault()
    fetch("https://dummyapi-wine.vercel.app/users",{
        method:"POST",
        headers:
        {"content-type":"application/json"

        } ,
        body:JSON.stringify(main)

    })

    .then(res=>res.json())
    .then(data=>{
         console.log(data)  
         router("/Usertable")
    })
    

}

    return (
        <>
            <div className="container mt-5">
                <h3>Information</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <label htmlFor="Name" className="form-label" >Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your Name" onChange={handleChange}
                            value={main.name} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Phone" className="form-label" >Phone</label>
                        <input type="phone" className="form-control" id="phone" placeholder="Enter your phone number" onChange={handleChange}
                            value={main.phone} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Email" className="form-label" >Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your Email" onChange={handleChange}
                            value={main.email} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Age" className="form-label" >Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Enter your Age" onChange={handleChange}
                            value={main.age} />
                    </div>
                    <button className="mt-3 btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}