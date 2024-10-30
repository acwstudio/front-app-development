import React from 'react';
import Profile from "./Profile.jsx";

function Gallery(props) {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default Gallery;