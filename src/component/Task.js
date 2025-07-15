import { useState } from "react";

export default function Task() {
    let [data, setData] = useState({})
    let [users,setUsers] = useState([])

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        setUsers([...users,data])
        setData({
            name:"",
            phone:"",
            email:"",
            age:""
        })
        console.log(data)
    }

    return (
        <>
            <div className="container mt-4">
                <h2>Bootstrap Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name"
                            onChange={handleChange} value={data.name}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email"
                            onChange={handleChange} value={data.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number"
                            onChange={handleChange} value={data.phone}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Enter your age" onChange={handleChange} value={data.age}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="container mt-3">
                <h2>Basic Table</h2>
                <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((data)=>
                         <tr>
                            <td>{data["name"]}</td>
                            <td>{data["phone"]}</td>
                            <td>{data["email"]}</td>
                            <td>{data["age"]}</td>
                        </tr>
                        )}
                       
                      
                    </tbody>
                </table>
            </div>

        </>
    )
}