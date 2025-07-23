import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Userupdate() {
    let [edit, setedit] = useState();
    const route = useNavigate()

    function getUsers(id) {
        fetch(`https://dummyapi-wine.vercel.app/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setedit(data)
            })
    }
    useEffect(() => {
        let id = localStorage.getItem("id")
        getUsers(id);
        console.log(id);

    }, [])


    function handlechange(e) {
        setedit({ ...edit, [e.target.id]: e.target.value })
    }

    function handlesubmit(e) {
        e.preventDefault()
        let id = localStorage.getItem("id")
        const post = {
            name: edit.name,
            phone: edit.phone,
            email: edit.email,
            age: edit.age
        }
        fetch(`https://dummyapi-wine.vercel.app/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                route("/usertable")
            })

    }
    return (
        <>
            <div className="container mt-5">
                <h3>edit users</h3>
                <form onSubmit={handlesubmit}>
                    <div className="mt-3">
                        <label htmlFor="name" className="form-label" >name</label>
                        <input type="text" className="form-control" id="name" value={edit&&edit.name} onChange={handlechange}></input>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="phone" className="form-label" >phone</label>
                        <input type="phone" className="form-control" id="phone" value={edit&&edit.phone} onChange={handlechange}></input>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email" className="form-label">name</label>
                        <input type="text" className="form-control" id="email" value={edit&&edit.email} onChange={handlechange}></input>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="age" className="form-label">age</label>
                        <input type="number" className="form-control" id="age" value={edit&&edit.age} onChange={handlechange}></input>
                    </div>
                    <button className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </>
    )
}