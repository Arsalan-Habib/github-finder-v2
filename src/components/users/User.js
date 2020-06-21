import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company,
    } = user;

    if (loading) return <Spinner />;

    return (
        <Fragment>
            <Link
                to='/'
                className='btn btn-secondary'
                style={{
                    marginRight: "20px",
                }}
            >
                Back To Search
            </Link>
            <strong>Hireable:</strong>{" "}
            {hireable ? (
                <i className='fas fa-check text-success' />
            ) : (
                <i className='fas fa-times-circle text-danger' />
            )}
            <div className='card grid-2'>
                <div className='all-center'>
                    <img
                        src={avatar_url}
                        alt='profile'
                        className='round-img'
                        style={{ width: "150px" }}
                    />

                    <h1>{name}</h1>

                    {location && <p>Location: {location} </p>}
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio:</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-success my-1'>
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong>
                                    {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong>
                                    {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website/Blog: </strong>
                                    {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-secondary'>
                    Followers: {followers}{" "}
                </div>
                <div className='badge badge-success'>
                    Following: {following}{" "}
                </div>
                <div className='badge badge-primary'>
                    Public Repos: {public_repos}{" "}
                </div>
                <div
                    className='badge'
                    style={{ backgroundColor: "#ff7300", color: "white" }}
                >
                    Public Gists: {public_gists}{" "}
                </div>
            </div>
            <div>
                {repos.length > 0 && (
                    <Fragment>
                        <h2>Latest Repos: </h2>
                        <Repos repos={repos} />
                    </Fragment>
                )}
            </div>
        </Fragment>
    );
};

export default User;
