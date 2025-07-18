import { useState } from "react";

export default function Students() {
    let [data, setData] = useState({});
    let [student, setStudent] = useState([]);
    let [isEdit, setEdit] = useState(true);

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    function handleDelete(Name) {
        setStudent(student.filter((del) => del.Name !== Name))

    }

    function handleupdate(Name) {
        setData((student.filter((val) => val.Name === Name)[0]))
        setEdit(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (isEdit) {
            setStudent([...student, data])
        } else {
            setEdit(true)
            setStudent(student.map((del) => del.Name === data.Name ? data : del))

        }
        setData({   
            Name: "",
            Degree: "",
            Mobile: "",
            Email: "",
            Password: ""
        })
        console.log(data)

    }

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <h3>Students Details</h3>
                    <div className="mt-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="Name" onChange={handleChange} value={data.Name} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Degree" className="form-label">Degree</label>
                        <input type="text" className="form-control" id="Degree" onChange={handleChange} value={data.Degree} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Mobile" className="form-label">Mobile</label>
                        <input type="phone" className="form-control" id="Mobile" onChange={handleChange} value={data.Mobile} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="Email" onChange={handleChange} value={data.Email} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="Password" className="form-control" id="Password" onChange={handleChange} value={data.Password} />
                    </div>
                    <button className="mt-3 mb-3 btn btn-primary">Submit</button>
                </form>
            </div>
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Degree</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((data) =>
                            <tr>
                                <td>{data["Name"]}</td>
                                <td>{data["Degree"]}</td>
                                <td>{data["Mobile"]}</td>
                                <td>{data["Email"]}</td>
                                <td>{data["Password"]}</td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(data["Name"])}>Delete</button></td>
                                <td><button className="btn btn-primary" onClick={() => handleupdate(data["Name"])}>Update</button></td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </>
    )
}