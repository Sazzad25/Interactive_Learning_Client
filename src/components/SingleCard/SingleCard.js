import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const SingleCard = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Courses has topic: {categoryNews.length}</h2>
            {
                categoryNews.map(topics =><Cart
                key={topics._id}
                topics={topics}
                >

                </Cart>)
            }
        </div>
    );
};

export default SingleCard;