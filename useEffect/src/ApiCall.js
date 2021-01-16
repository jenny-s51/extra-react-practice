import React, { useEffect, useState } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // inside a func. component we dont have mounting/unmounting or any lifecycle hooks at all


  useEffect(() => {
  // everything inside here will execute every single time app renders

  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))

    // but if it has a dependency array then we only run when this changes
    // so we don't print new values unless the resource type changes
  }, [resourceType])



  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}


