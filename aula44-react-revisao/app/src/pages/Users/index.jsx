import { Link, Outlet } from "react-router";

function Users(){

    return (
        <>
            <h1>Users Page</h1>
            <Link to="add">cadastro</Link>
            <Outlet />
        </>
    )
}

export default Users;