import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({n:3});
  const number = searchParams.get("n");
  console.log(searchParams.get("n"));
  return (
    <div>
      <Link to="/books/1">Book1</Link>
      <br />
      <Link to="/books/2">Book2</Link>
      <br />
      <Link to={`/books/${number}`}>Book{number}</Link>
      <br />
      <Link to={"/books/new"}>NewBook</Link>
      <Outlet context={{ val: "Hello" }} />
      <input
        type="number"
        value={number}
        onChange={e => setSearchParams({n: e.target.value})}
      />
    </div>
  );
}
