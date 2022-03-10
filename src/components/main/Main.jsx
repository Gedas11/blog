
import React, {useState} from "react";
import Search from "../search/Search";
import SearchCat from "../searchCat/SearchCat";
import postsData from "../data/PostsData";
import Posts from "../posts/Posts";


const Main = ()=> {
    const [searchTerm, setSearchTerm] = useState('');
    const handlerInputChange = (e)=> {
        setSearchTerm(e.target.value)
    }
    const filteredPosts = postsData.filter((post )=>{
        return post.title, post.category.includes(searchTerm)
    })
    return(
        <div className="main">
          <Search onSearch={handlerInputChange} val={searchTerm}/>
          <Posts posts={filteredPosts} />
          <SearchCat onSearch={handlerInputChange} val={searchTerm}/>
          <Posts posts={filteredPosts} />
         </div>
    )
    
}








export default Main;