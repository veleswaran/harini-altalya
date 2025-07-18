import { useState } from "react"
export default function Product() {
    let [data, setData] = useState({})
    let [product, setproduct] = useState([])
    let [isEdit,setEdit]=useState(true)




    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })

    }

    function handleDelete(Image) {
        setproduct(product.filter((del) => del.Image !== Image))
    }

    function handleupdate(Image){
        setData((product.filter((val)=>val.Image===Image)[0]))
        setEdit(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(isEdit){
             setproduct([...product, data])
        }
        else{
            setEdit(true)
            setproduct(product.map((val)=>val.Image===data.Image?data:val))
        }

       
        setData({
            Image: "",
            Title: "",
            Description: "",
            Price: ""
        })
        console.log(data)
    }
    return (
        <>
            <h2 className="mt-3 mx-5">Products</h2>
            <div className="container mt-4 bg-">
                <form onSubmit={handleSubmit}>

                    <div className="mt-3">
                        <label htmlFor="Image" className="form-label">Image</label>
                        <input type="url" className="form-control" id="Image" onChange={handleChange} value={data.Image} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="Title" onChange={handleChange} value={data.Title} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Description</label>
                        <input type="text" className="form-control" id="Description" onChange={handleChange} value={data.Description} />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Price</label>
                        <input type="NUMBER" className="form-control" id="Price" onChange={handleChange} value={data.Price} />

                    </div>
                    <button className=" btn btn-primary mt-3 mb-5">Submit</button>
                </form>
            </div>

            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>

                    </thead>
                    <tbody>
                        {product.map((data) =>
                            <tr>
                                <td>
                                    <img src={data['Image']} alt={data.title} width="100" /></td>
                                <td>{data["Title"]}</td>
                                <td>{data["Description"]}</td>
                                <td>{data["Price"]}</td>
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