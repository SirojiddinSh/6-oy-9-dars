import "./DeletedUsers.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const DeletedUsers = () => {
    let id = useContext(UserContext);
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default DeletedUsers;
