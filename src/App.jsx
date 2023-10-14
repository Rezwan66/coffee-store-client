import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-center py-6">
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-purple-300' : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCoffee"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-purple-300' : ''
              }
            >
              Add Coffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-purple-300' : ''
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-purple-300' : ''
              }
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-purple-300' : ''
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
