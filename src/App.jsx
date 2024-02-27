import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// pages 
import HomePage from './pages/Home';
import Login from "./pages/Login"
import NotFound from './pages/Test';
import Register from './pages/Register';
import Course from './pages/Course';
import Dashboard from './pages/Dashboard';

import { ToastContainer } from "react-toastify"
function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <Login /> },
    { path: '/course', element: <Course /> },
    {
      path: '/dashboard/*',
      element: <Dashboard />
    },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFound /> }
  ]);


  return (

    <main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      {/* <Navbar /> */}
      {routes}
      {/* <Footer /> */}
    </main>
  );
}

export default App;