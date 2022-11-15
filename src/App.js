import React, { Suspense } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
// import AllPosts from "./pages/AllPosts";
import PostDetail from "./pages/PostDetail";

const LazyAllPosts = React.lazy( ()=>import("./pages/AllPosts") )

function App() {
  const ProtectedRoute = ({ children, redirectTo }) => {
    let token = localStorage.getItem("token");
    if (token) {
      return children;
    } else {
      return <Navigate to={redirectTo} />;
    }
  };
  return (
    <div>
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute redirectTo="/contact">
                <Products />
              </ProtectedRoute>
            }
          />
          <Route path="/allposts" element={<LazyAllPosts />} />
          <Route path="/post-detail" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
