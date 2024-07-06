import "./Home.css";
import { useState, useEffect, useReducer, useContext } from "react";

export let reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ISHDAN_CHOPILDI":
            return action.payload;
        default:
            return state;
    }
};

const Users = () => {
    let [users, setUsers] = useState([]);
    HandlePushUsers = () => {
        setTimeout(() => {
            let noneUsers = document.querySelector(".noneUsers");
            let btn = document.querySelector(".btn");
            btn.style.display = "none";
            noneUsers.style.display = "block";
        }, 300);
    };

    useEffect(() => {
        try {
            fetch("https://reqres.in/api/users?page=1").then((res) =>
                res.json().then((data) => setUsers(data.data))
            );
        } catch (error) {
            console.log(error);
        }
    }, []);

    function IshdanChopish(id) {
        console.log(id);
    }

    function HandlePushUsers() {}
    return (
        <>
            <div>
                <button onClick={HandlePushUsers} className="btn">
                    Userlarni qo'shish
                </button>
            </div>
            <div className="noneUsers">
                <div className="containerUsers">
                    {users.map((user) => (
                        <div className="user" key={user.id}>
                            <div className="bgDiv"></div>
                            <img src={user.avatar} alt="" />
                            <div className="textDiv">
                                <h2>{user.first_name}</h2>
                                <h3>Full Stack Developer</h3>
                                <h3>Bay Area, San Francisco, CA</h3>
                            </div>
                            <button
                                onClick={() => IshdanChopish(user.id)}
                                className="btnDelete"
                            >
                                Ishdan bo'shatish
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Users;
