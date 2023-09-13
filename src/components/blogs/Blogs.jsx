import { data } from "autoprefixer";
import { useEffect, useState } from "react"

export default function Blogs() {
    const [blog, setBlog] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <>
            <div>
                
            </div>
        </>
    )
}
