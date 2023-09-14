import { data } from "autoprefixer";
import { useEffect, useState } from "react"
import Blog from "./Blog";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [click, setClick] = useState(0);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBlogClick = () => {
        const newClick = click+1;
        setClick(newClick);
    }

    return (
        <>
            <div>
                <h1>Blog Count: {blogs.length}</h1>
                <h2>click: {click}</h2>
                <button onClick={handleBlogClick}>Blogs Click</button>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleBlogClick={handleBlogClick} ></Blog>)
                }
                {/* <Blog Blog={blogs[0].id}></Blog> */}
            </div>
        </>
    )
}
