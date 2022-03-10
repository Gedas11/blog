import Post from "../post/Post"

const Posts = (props)=> {
    return(
        <section className="pt-4">
        <div className="container px-lg-5">
            <div className="row gx-lg-5">
               {props.posts.map((post)=>
               <Post
               key={post.id}
               title ={post.title}
               content= {post.content}
               category= {post.category}
               />
               )}
             </div>
          </div>
        </section>
    )
}

export default Posts