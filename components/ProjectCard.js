import React from "react";

function ProjectCard({ name, url, description }) {
  return (
    <div className="card bordered mb-3 mx-3">
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p className="text-black">{description}</p>
        <div className="justify-end card-actions">
          <a href={url}>
            <button className="btn btn-secondary">More info</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
