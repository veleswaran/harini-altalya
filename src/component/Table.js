import { useEffect, useState } from "react"
export default function Table() {
    let [users, setUsers] = useState([])

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
                        {users.map((user)=>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                        )}
                      
                    </tbody>
                </table>
            </div>
        </>
    )
}