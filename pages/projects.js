import React, { useState, useEffect } from "react";
import { supabase } from "../libs/supabaseClient";
import AppLayout from "../components/AppLayout";
import ProjectCard from "../components/ProjectCard";
import LoadingPage from "../components/Loading";

function Projects() {
  const [loading, setLoading] = useState(false);
  const [projectsDone, setProjectsDone] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      let { data: projects, error } = await supabase
        .from("projects")
        .select("*");
      if (error) {
        throw error;
      }

      if (projects) {
        setProjectsDone(projects);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <AppLayout>
      <div className="grid grid-rows-2 md:grid-rows-6">
        {loading && <LoadingPage />}
        {projectsDone?.map(({ name, url, status, id, description }) => {
          return (
            <ProjectCard
              key={id}
              name={name}
              status={status}
              url={url}
              description={description}
            />
          );
        })}
      </div>
    </AppLayout>
  );
}

export default Projects;
