import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home(){
    const id = 5;
    const navigate = useNavigate()
    function goToAbout(){
        navigate("/about", { state : { myId: id }})
    }
    return (
        <>
            <h1>Home</h1>
            {/* <Link to={'/About'}>About</Link> */}
            <button onClick={goToAbout}>About</button>
            <br />
            <Link to={'/Contact'}>Contact</Link>
        </>
    )
}

export default Home;