import { useState } from 'react';

export default function Store1() {
    let [data, setData] = useState({});
    let [customers, setcustomers] = useState([]);
    let [isEdit, setEdit] = useState(true)
    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    function handledelete(Items) {
        setcustomers(customers.filter((del) => del.Items !== Items))
    }

    function handleupdate(Items) {
        setData((customers.filter((val) => val.Items === Items)[0]))
        setEdit(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (isEdit) {
            setcustomers([...customers, data])
        }
        else {
            setEdit(true)
            setcustomers(customers.map((val) => val.Items === data.Items ? data : val))

        }

        setData({
            Items: "",
            kilograms: "",
            price: ""
        })
        console.log(data)
    }
    return (
        <>
            <div className='container mt-3'>
                <h2>Departmental Stores</h2>
                <form onSubmit={handleSubmit}>
                    <div className=" mb-3">
                        <label htmlFor="Items" className="form-label">Items</label>
                        <input type="text" className="form-control" id="Items" placeholder="ex:rice,salt" onChange={handleChange} value={data.Items} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="kilograms" className="form-label">kilograms</label>
                        <input type="text" className="form-control" id="kilograms" placeholder="ex:1kg" onChange={handleChange} value={data.kilograms} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">price</label>
                        <input type="number" className="form-control" id="price" placeholder="ex:1kg" onChange={handleChange} value={data.price} />
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </form>
            </div>
            <div class="container mt-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>kilograms</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((data) =>
                            <tr>
                                <td>{data["Items"]}</td>
                                <td>{data["kilograms"]}</td>
                                <td>{data["price"]}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handledelete(data["Items"])}>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => handleupdate(data["Items"])}>Update</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </>
    )

}