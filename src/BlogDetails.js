import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './usefetch';

const BlogDetails = () => {
    const{id}= useParams();
    const{data:blog, isPending, error}= useFetch(' http://localhost:8000/blogs/'+id);
    const navigate= useNavigate();

    const handleClick= ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=> {
            navigate('/');
        })
    }
    return ( 
    <div className="blog-details">
        <h2>Blog Details</h2>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.Author}</p>
                <div>{blog.body}</div>
                <button>delete</button>
            </article>
        )}
    </div>
     );
}
 
export default BlogDetails;