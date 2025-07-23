import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Forms() {
    let [data, setdata] = useState({})
    const router = useNavigate();

    function handleChange(e) {
        setdata({ ...data, [e.target.id]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://dummyapi-wine.vercel.app/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                router("/Usertable")
            })

    }

    return (
        <>   <div className="container mt-5">
                <h3>Information</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <label htmlFor="Name" className="form-label" >Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your Name" onChange={handleChange}
                            value={data.name} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Phone" className="form-label" >Phone</label>
                        <input type="phone" className="form-control" id="phone" placeholder="Enter your phone number" onChange={handleChange}
                            value={data.phone} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Email" className="form-label" >Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your Email" onChange={handleChange}
                            value={data.email} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Age" className="form-label" >Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Enter your Age" onChange={handleChange}
                            value={data.age} />
                    </div>
                    <button className="mt-3 btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}