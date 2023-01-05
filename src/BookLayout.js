import {Link, Outlet} from 'react-router-dom';
export function BookLayout(){
    return(
        <div>
        <Link to='/books/1'>Book1</Link>
        <Link to='/books/2'>Book2</Link>
        <Link to='/books/new'>NewBook</Link>
        <Outlet context={{val:"Somebody"}}/>
    </div>
    )
}