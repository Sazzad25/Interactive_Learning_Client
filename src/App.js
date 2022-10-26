import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Category from './components/Category/Category';
import Topic from './components/Topic/Topic';
import Registration from './components/Registration/Registration';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main user={user} setUser={setUser}></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
            },
           
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            
            {
                path: '/login',
                element: <Login user={user} setUser={setUser}></Login>
            },

            {
                path: '/registration',
                element: <Registration user={user} setUser={setUser}></Registration>
            },

            // {
            //     path: '/category/:id',
            //     element: <Category></Category>,
            //     loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
            // },

            {
                path: '/category',
                element: <Category></Category>
                
            },

            // {
            //     path: '/category/:id',
            //     element: <Topic></Topic>
            // },
               
        ]
    }
])
  return (
    <div>
       <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
