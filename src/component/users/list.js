import {useEffect, useState} from "react";
import axios from "axios";
export default function ListUser() {
    let [users,setUsers] = useState([])
    async function getUsers(){
        let res = await axios.get("http://localhost:8000/users/")
        if(res){
            console.log(res)
            setUsers(res.data)
        }
    }
    useEffect(()=>{
        getUsers();
    },[])
    return (
        <div className="container mt-3">
            <h2>Black/Dark Table</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((val,index)=>
                     <tr key={index}>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                    </tr>
                    )}
                   
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}