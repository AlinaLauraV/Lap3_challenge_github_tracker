import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RepoCard, Form } from "../../components";
import { fetchRepos } from "../../actions";


function Repos() {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.result);
  const loading = useSelector((state) => state.loading);
 
  const query = username =>  dispatch(fetchRepos(username));
  let renderResult;



  console.log(result)
  

  return(
    <>
      
      <Form startSearch={query}/> 
      {result[0].user ? <h2>Owner:  {result[0].user}</h2> : <h2>Repos</h2>}
      <div>
        
        {result[0].repo &&
            result.map((element, i) => (
            <RepoCard key={i} repo={element} />
          ))
        
        } 
      </div>
      
    </>
  )   
}

export default Repos;
