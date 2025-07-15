import { useState } from "react";

export default function Users() {
    let [data, setdata] = useState({})
    let [users,setUsers]=useState([])


    function handleChange(e){
        setdata({...data,[e.target.id]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        setUsers([...users,data])
        setdata({
            Jobrole:"",
            place:"",
            salary:"",
            experience:""
            
        })
        console.log(data)
    }
    return (
        <>
        <h2>Staff Details</h2>
          <form onSubmit={handleSubmit}>
            <div className=" mb-3">
                <label htmlFor="Jobrole" className="form-label">Jobrole</label>
                <input type="text" className="form-control" id="Jobrole" placeholder=" Enter your Jobrole" onChange={handleChange} value={data.Jobrole}
                    
                />
            </div>


            <div className="mb-3">
                <label htmlFor="place" className="form-label">Place</label>
                <input type="text" className="form-control" id="place" placeholder="Enter your place" onChange={handleChange} value={data.place}
                    
                />
            </div>

            <div className="mb-3">
                <label htmlFor="salary" className="form-label">Salary</label>
                <input type="number" className="form-control" id="salary" placeholder="Enter your salary" 
                onChange={handleChange} value={data.salary}/>
            </div>



            <div className="mb-3">
                <label htmlFor="age" className="form-label">experience</label>
                <input type="text" className="form-control" id="experience" placeholder="Enter your experience"  onChange={handleChange} value={data.experience}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form >
          <div class="container mt-3">
            <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Jobrole</th>
                            <th>place</th>
                            <th>salary</th>
                            <th>experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((data)=>
                        <tr>
                            <td>{data["Jobrole"]}</td>
                            <td>{data["place"]}</td>
                            <td>{data["salary"]}</td>
                            <td>{data["experience"]}</td>
                        </tr>
                        )}
        

                    </tbody>
                    </table>
          </div>
                        
        </>
    )
}
