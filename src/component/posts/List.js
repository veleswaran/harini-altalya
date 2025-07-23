import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
export default function PostList() {
    let [users, setusers] = useState([]);
    const route = useNavigate()

    function handleDelete(id) {
        console.log(id)
        fetch(`https://dummyapi-wine.vercel.app/posts/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                getUsers(data)
            })

    }


    function getUsers() {
        fetch('https://dummyapi-wine.vercel.app/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setusers(data)
            })
    }

    useEffect(() => {
        getUsers();
    }, [])

    function handleUpdate(id) {
        localStorage.setItem("id", id);
        route("/posts/update")
    }


    return (
        <>
            <div className="container mt-5">
                <table className="table table-striped">
                    <thead>
                        <th>content</th>
                        <th>image</th>
                        <th>username</th>
                    </thead>
                    <tbody>
                        {users.map((user) =>
                            <tr>
                                <td>{user.content}</td>
                                <td><img src={user.image} alt={user.image} width={100} /></td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                                    <button className="btn btn-warning ms-3" onClick={() => handleUpdate(user._id)}>Update</button>
                                </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}