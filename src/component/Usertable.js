import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
export default function Usertable() {
    let [users, setUsers] = useState([])
     const  Route = useNavigate();

    function handleDelete(id) {
        console.log(id)
        fetch(`https://dummyapi-wine.vercel.app/users/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                getUsers()
            })
    }

    function getUsers() {
        fetch("https://dummyapi-wine.vercel.app/users")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }
    useEffect(() => {
        getUsers();

    }, [])

    function handleupdate(id) {
        localStorage.setItem("id", id);
        Route("/userupdate")
    }

    return (
        <>
            <div className="container mt-5">
                <table className=" table table-striped ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                                    <button onClick={() => handleupdate(user._id)}>Update</button>
                                </td>
                            </tr>



                        )}



                    </tbody>
                </table>

            </div>
        </>
    )
}