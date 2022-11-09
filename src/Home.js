import {useState} from 'react';
import Bloglist from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    /*NAMES*/
const [name, setName]= useState('Ania');
const [age, setAge] = useState('25');

const handleClick = () => {
    setName('Paweł');
    setAge('40');
 }

 const handleClickAgain =(name, e) => {
     console.log('hello' + name, e.target);
 }


   /*BLOGS*/

// [
//     {title: 'My new website', body: 'lorem ipsum', author: 'A. McKenzee', id: 1},
//     {title: 'A long tme ago', body: 'lorem ipsum', author: 'K. Stevenson', id: 2},
//     {title: 'However it goes', body: 'lorem ipsum', author: 'M. Williams', id: 3}
// ]

const [nameBlog, setNameBlog] = useState('Ita');
const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');


    
    return ( 
        <div>
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} year old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain(' Pati', e)}>Click me again</button>
        </div>
        <div className='blogs'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All blogs:"/>}
            <button onClick={()=> setNameBlog('Klara')}>Change name</button>
            <p>{nameBlog}</p>
        </div>
        </div>
     );
}
 
export default Home;