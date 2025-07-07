import Data from './Data.js';

function Users(){
    return(
        <div>
            <h1>User List</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((User)=>{
                        return(
                            <tr key={User.id}>
                                <td>{User.id}</td>
                                <td>{User.name}</td>
                                <td>{User.email}</td>
                                <td>{User.password}</td>
                                <td>{User.type}</td>
                                <td>{User.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Users;