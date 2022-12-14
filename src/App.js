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
import SingleCard from './components/SingleCard/SingleCard';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/registration',
                element: <Registration></Registration>
            },

            {
                path: '/category',
                element: <Category></Category>
                
            },

            {
                path: '/category/:id',
                element: <SingleCard></SingleCard>,
                loader: ({params}) => fetch(`https://learning-server-amber.vercel.app/category/${params.id}`),
            },

            {
                path: '/topics/:id',
                element: <Topic></Topic>,
                loader: ({params}) => fetch(`https://learning-server-amber.vercel.app/news/${params.id}`),

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
