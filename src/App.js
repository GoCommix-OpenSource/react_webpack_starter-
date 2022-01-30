import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog/Blog";
import BlogId from "./pages/Blog/BlogId";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="blog" element={<Blog />}>
                        <Route path=":blogid" element={<BlogId/>}/>
                    </Route>
                    <Route path="*" element={<NoPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}