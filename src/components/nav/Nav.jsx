import { UserContext } from "../../context/UserContext";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/deletedUsers">Deleted Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
