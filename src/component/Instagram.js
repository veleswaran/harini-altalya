import { useState } from "react"
export default function Instagram() {

    let [data, setdata] = useState({});
    let [user, setuser] = useState([]);
    let [isEdit,setEdit]=useState(true);

    function handleChange(e) {
        setdata({ ...data, [e.target.id]: e.target.value })
    }

function handleDelete(Image){
    setuser(user.filter((del)=>del.Image!==Image))
}
function handleupdate(Image){
    setdata((user.filter((val)=>val.Image===Image)[0]))
    setEdit(false)
}

    function handleSubmit(e) {
        e.preventDefault()
        if(isEdit){
        setuser([...user, data])
        }
        else{
            setEdit(true)
            setuser(user.map((val)=>val.Image===data.Image?data:val))
        }
       
        setdata({
            Image: "",
            Song: "",
            Title: ""
        })

        console.log(data)
    }

    return (
        <>

            <div className="container mt-5">
                <h3>Post</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="url" className="form-control" id="Image" onChange={handleChange} value={data.Image} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="song" className="form-label">Song</label>
                        <input type="url" className="form-control" id="Song" onChange={handleChange} value={data.Song} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="Title" placeholder="Write a caption and add hastags " onChange={handleChange} value={data.Title} />
                    </div>
                    <button className=" btn btn-primary mt-3 mb-5">Send</button>
                </form>

            </div>
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Song</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((data) =>
                            <tr>
                                <td>
                                <img src={data["Image"]} alt={data.title} width="100" />
                                </td>
                                <td>{data["Song"]}</td>
                                <td>{data["Title"]}</td>
                                <td><button className="btn btn-danger" onClick={()=>handleDelete(data["Image"])}>delete</button></td>
                                 <td><button className="btn btn-primary" onClick={()=>handleupdate(data["Image"])}>Update</button></td>
                                
                                
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}