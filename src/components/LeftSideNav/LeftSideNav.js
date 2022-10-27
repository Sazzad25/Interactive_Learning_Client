import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    // courses link
    useEffect( () =>{
        fetch('https://learning-server-amber.vercel.app/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h2>All Courses: {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name} </Link> </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;