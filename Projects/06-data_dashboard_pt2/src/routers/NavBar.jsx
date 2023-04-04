import {Link, Outlet} from "react-router-dom"

function NavBar() {
    return (
        <div className="NavBar">
            <nav>
                <Link to="/">Home </Link>
                |
                <Link to="/analysis"> Analysis</Link>
            </nav>

            <Outlet />

        </div>
    )
}

export default NavBar