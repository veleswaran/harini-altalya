export default function List({User}) {
    return (
<div className="container mt-3">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                {User.map((user,index)=>(
                <tr key={index} >
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Phone}</td>
                        <td>{user.Age}</td>
                    </tr>
                ))}
                    
                   
                    
                </tbody>
            </table>
        </div>

    )
}