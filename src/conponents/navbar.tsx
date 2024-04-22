import { NavLink } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink style={{fontSize: "30px"}} className={(navData) => navData.isActive ? "navbar-brand text-primary" : "navbar-brand"} to="/">
                    Home
                </NavLink>
                <ul className="navbar-nav me-auto flex-row">
                    <li className="nav-item m-2">
                        <NavLink className={(navData) => navData.isActive ? "nav-link text-decoration-none text-primary" : "nav-link text-decoration-none text-white"} to="/reminders">
                            Reminders
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink className={(navData) => navData.isActive ? "nav-link text-decoration-none text-primary" : "nav-link text-decoration-none text-white"} to="/todos">
                            Todos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;