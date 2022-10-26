import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Category = () => {
    const [categories, setCategories] = useState([]);

    
    useEffect( () =>{
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
            {
                categories.map(topics =><Cart
                key={topics._id}
                topics={topics}
                >

                </Cart>)
            }
        </div>
    );
};

export default Category;