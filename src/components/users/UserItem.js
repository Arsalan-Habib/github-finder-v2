import React, { Component } from "react";

class UserItem extends Component {
    state = {
        id: "id",
        login: "Arsalan Habib",
        avatar_url: "https://avatars2.githubusercontent.com/u/54036702?v=4",
        html_url: "https://github.com/Arsalan-Habib",
    };

    render() {
        const { login, html_url, avatar_url } = this.state;

        return (
            <div className='card text-center'>
                <img
                    src={avatar_url}
                    alt='profile'
                    className='round-img'
                    style={{ width: "60px" }}
                />

                <h3>{login}</h3>

                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'>
                        More Info
                    </a>
                </div>
            </div>
        );
    }
}

export default UserItem;
