import React from "react";
import { useRequest } from "../useRequest";
import "../styles.css";

export const RepoList = ({ repo }) => {
  const { owner, id } = repo;
  const { data, error } = useRequest("/repositories", id);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="Card">
      <span className="Card--id">#{data.id}</span>
      <img className="Card--image" src={owner.avatar_url} alt={data.name} />
      <h1 className="Card--name">{data.name}</h1>
      <span className="Card--details">{data.description}</span>
      <br />
      <a href={data.contributors_url}>{data.contributors_url}</a>
    </div>
  );
};
