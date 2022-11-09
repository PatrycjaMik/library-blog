import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {

    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    const[author, setAuthor] = useState("");
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            setIsPending(false);
            console.log('new blog added');
            // history.go(-1);
            history.push('/');
        })

        
    }

    return ( 
        <div className='create'>
            <h2>Adding new page</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input
                type='text'
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                >
                </input>
                <label>Blog body </label>
                <textarea
                onChange={(e)=> setBody(e.target.value)}
                required
                ></textarea>
                <label>Blog author: </label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value='pacia'>pacia</option>
                    <option value='wariacia'>wariacia</option>
                </select>
                {!isPending && <button>Add it</button>}
                {isPending && <button disabled>Adding it...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;