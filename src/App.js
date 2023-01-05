import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import {BookRoutes} from './BookRoutes'
import './App.css'

function App() {
  const location = useLocation();
  console.log(location);
  //Using JS to define routes instead of JSX

  // let element = useRoutes([
  //   {
  //     path:"/",
  //     element:<NavLayout/>,
  //     children:[
  //       {
  //         index:true,
  //         element:<Home/>
  //       },
  //       {
  //         path:"about",
  //         element:<About/>
  //       },
  //       {
  //         path:"contact",
  //         element:<Contact/>
  //       }
  //     ]
  //   }
  // ]);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink 
            // style={({isActive}) =>  {return isActive ? {color:"red"} : {}}} 
            to="/" 
            //replace - replaces the last page with the second to last page, so when we go Book1 -> Book2 -> Home and press
            // the back button we will go to Book1 instead of Book2
            //reloadDocument - will reload the entire page
            >Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">BookList</NavLink>
          </li>
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
