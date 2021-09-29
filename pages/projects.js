import React from "react";
import AppLayout from "../components/AppLayout";

function Projects() {
  return (
    <AppLayout>
      <div class="container mx-auto ">
        <div class="card bordered my-3">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Top image
              <div class="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>{" "}
        <div class="card bordered my-8">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Top image
              <div class="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>{" "}
      </div>
    </AppLayout>
  );
}

export default Projects;
