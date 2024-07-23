import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
