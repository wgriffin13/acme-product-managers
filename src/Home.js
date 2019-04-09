import React from 'react';

const Home = ({ openings }) => {
    return (
        <div>
            We {openings ? 'HAVE' : 'DONT HAVE'} openings for Product Managers!
        </div>
    )
}

export default Home
