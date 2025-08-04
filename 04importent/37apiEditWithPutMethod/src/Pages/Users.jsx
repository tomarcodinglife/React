import AddUser from "./users/AddUser";
import ListUsers from "./users/ListUsers";


export default function Users () {
    return(
        <>
            <div style={{textAlign:'center'}}>
                <h1>USER SECTION</h1>
                <AddUser/>
                <ListUsers/>
            </div>
        </>
    )
}
