import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function PostUpdate(){
    let[edituser,setedituser]=useState([])
    const router = useNavigate()

    function getUsers(id) {
    fetch(`https://dummyapi-wine.vercel.app/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setedituser(data)   
        })
}
    useEffect(()=>{
        let id = localStorage.getItem("id")
        getUsers(id)
        console.log(id)
    },[])

       function handleChange(e) {
        setedituser({ ...edituser, [e.target.id]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        let id = localStorage.getItem("id")
        const post= {
            content : edituser.content,
            image : edituser.image,
            username : edituser.username
        }
        fetch(`https://dummyapi-wine.vercel.app/posts/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then   (res => res.json())
            .then(data => {
                console.log(data)
                router("/posts")
            })

    }
    return(
        <>
        <div className="container mt-5">
            <h3>Update users</h3>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="content" className="form-label">content</label>
                    <input type="text" id="content"className="form-control" value={edituser.content} onChange={handleChange}/>
                </div>
                <div className="mt-3">
                    <label htmlFor="image" className="form-label">image</label>
                    <input type="url" id="image"className="form-control"  value={edituser.image} onChange={handleChange}/>
                </div>
                <div className="mt-3">
                    <label htmlFor="username" className="form-label">username</label>
                    <input type="text" id="username"className="form-control"  value={edituser.username} onChange={handleChange}/>
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
        </>
    )
}