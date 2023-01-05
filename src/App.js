import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { New } from "./pages/New";
import { NotFound } from "./pages/NotFound";
import { BookLayout } from "./BookLayout";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout/>}>
          <Route index element={<BookList/>}/>
          <Route path=":id" element={<Book />}/>
          <Route path="new" element={<New />} /> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
