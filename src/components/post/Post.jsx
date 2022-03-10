import React, {useState} from "react";
const Post = (props)=>{
 const [readStatus , setReadStatus] = useState ( 'New');
  const changeStatusHandler = ()=>{
      setReadStatus( 'Read done');
  }
    return(
        <div className="col-lg-6 col-xxl-4 mb-5">
        <div className="card bg-light border-0 h-100">
            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-collection"></i></div>
                <h2 className="fs-4 fw-bold">{props.title}</h2>
                <p className="mb-0">{ props.content}</p>
                <p className="mb-0">{ props.category}</p>
                

               { readStatus === 'Read done' ?
               
               <p>Naujiena perskaityta</p>:
               <p>Naujiena neperskaityta</p>
               }
              <button onClick={changeStatusHandler}>{readStatus} </button>
            </div>
        </div>
        </div>
    )
}

export default Post;