import { Route, Routes, Outlet } from "react-router-dom";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { New } from "./pages/New";
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </>
  );
}
