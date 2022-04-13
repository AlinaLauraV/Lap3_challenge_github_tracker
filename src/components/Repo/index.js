import React from "react";
import { useDispatch } from "react-redux";

const RepoCard = ({ repo }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h3>Repo: {repo.repo} </h3>
      <p>Issue Count: {repo.open_issues} </p>
      <p>Forks: {repo.forks}</p>
    </div>
  );
};

export default RepoCard;
