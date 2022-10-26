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
            <h2>Category Details: {categories.length}</h2>
            {/* {
                categoryTopics.map(topics =><Cart
                key={topics._id}
                topics={topics}
                >

                </Cart>)
            } */}
        </div>
    );
};

export default Category;