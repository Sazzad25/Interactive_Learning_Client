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
import SingleCard from './components/SingleCard/SingleCard';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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

            {
                path: '/category',
                element: <Category></Category>
                
            },

            {
                path: '/category/:id',
                element: <SingleCard></SingleCard>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
            },

            {
                path: '/topics/:id',
                element: <Topic></Topic>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),

            },

            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },

            {
                path:'*',
                element: <div>This route not found</div>
              }
               
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
