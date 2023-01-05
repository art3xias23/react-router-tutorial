import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", {});
      //navigate(-1) Moves to the previous page
      //navigate(-1) Moved back 2 pages 
    }, 2000);
  });
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
}
