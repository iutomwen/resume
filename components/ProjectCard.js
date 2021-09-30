import React from "react";

function ProjectCard({ name, url, description, status }) {
  return (
    <div className="card bordered mb-3 mx-3">
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p className="text-black">{description}</p>
        <div className="justify-between card-actions">
          <div className="text-black flex items-center justify-center">
            <div
              class={`mr-1 badge badge-xs ${
                status == "online"
                  ? "badge-accent"
                  : status == "ongoing"
                  ? "badge-primary"
                  : "badge-secondary"
              }`}
            ></div>
            {status}
          </div>
          <a href={url}>
            <button className="btn btn-secondary bg-gray-600 border-gray-500">
              More info
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
