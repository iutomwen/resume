import React from "react";
import AppLayout from "../components/AppLayout";

function Projects() {
  return (
    <AppLayout>
      <div className="flex flex-wrap mx-3">
        <div className="card bordered flex md:flex-1 mb-3 mx-3">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Top image
              <div className="badge mx-2 badge-secondary">Old</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>
        <div className="card bordered flex md:flex-1 mb-3 mx-3">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Top image
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>
        <div className="card bordered flex md:flex-1 mb-3 mx-3">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Top image
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Projects;
