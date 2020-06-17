import React from "react";
import UserItem from "./components/users/UserItem";
import Navbar from "./components/layout/Navbar";
import "./App.css";
class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Navbar />
                <UserItem />
            </div>
        );
    }
}

export default App;
