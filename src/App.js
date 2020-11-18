import React from "react";
import { useRequest } from "./useRequest";
import "./styles.css";
import { RepoList } from "./components/RepoList";

function App() {
  const { data: result, error } = useRequest("/repositories");

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  // const data = { results: result };

  return (
    <main className="App">
      <h1>List of Repositories</h1>
      <div>
        {console.log(result)}
        {result.map((repo) => (
          <RepoList key={repo.id} repo={repo} />
        ))}
      </div>
    </main>
  );
}
export default App;
