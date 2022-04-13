import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [repos, setRepos] = useState([]);
  const mainUrl =
    //"https://api.github.com/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc";
    "https://api.github.com/repositories";

  useEffect(() => {
    axios
      .get(mainUrl)
      .then((res) => {
        console.log(res);
        setRepos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {repos.map((r) => (
        <div className='repo' key={r.id}>
          <div className='img'>
            <img src={`${r.owner.avatar_url}/100px180`} alt='' />
          </div>
          <div className='text'>
            <h1>{r.full_name}</h1>
            <p>{r.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataFetching;
