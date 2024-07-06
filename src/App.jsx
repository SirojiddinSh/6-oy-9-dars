import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./routes/home/Home";
import DeletedUsers from "./routes/deletedUsers/DeletedUsers";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
    let [users, setUsers] = useState([]);

    return (
        <>
            <Nav />
            <UserContext.Provider value={1}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/deletedUsers" element={<DeletedUsers />} />
                </Routes>
            </UserContext.Provider>
        </>
    );
}
export default App;
