import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function PostCreate() {
    let [lap, setlap] = useState({})
    const router = useNavigate()

    function handleChange(e) {
        setlap({ ...lap, [e.target.id]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://dummyapi-wine.vercel.app/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(lap)
        })
            .then   (res => res.json())
            .then(data => {
                console.log(data)
                router("/Contenttable")
            })

    }
    return (
        <>
            <div className="container mt-5">
                <h3>Datas</h3>
                <form onSubmit={handleSubmit}>
                    <div ClassName="mt-3">
                        <label htmlFor="content" className="form-label">content</label>
                        <input type="text" className="form-control" id="content" onChange={handleChange}  value={lap.content}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="image" className="form-label">image</label>
                        <input type="url" className="form-control" id="image" onChange={handleChange} value={lap.image}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="username" className="form-label">username</label>
                        <input type="text" className="form-control" id="username" onChange={handleChange} content value={lap.username}/>
                    </div>
                    <button className="mt-3 btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}