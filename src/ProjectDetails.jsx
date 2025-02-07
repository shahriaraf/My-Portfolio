import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectName } = useParams();

  // Example project data
  const project = {
    name: "Project 1",
    techStack: "React, Node.js, MongoDB",
    description: "A web application for managing tasks and schedules.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project1",
    challenges: "Integrating authentication and dealing with real-time data.",
    improvements: "Adding more features like notifications and user roles.",
  };

  return (
    <div className="bg-[#E0E4CC] text-[#052E25] py-16">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-6">{project.name}</h2>

        <div className="space-y-6">
          <p className="text-lg">{project.description}</p>
          <p className="text-lg font-semibold">Tech Stack: {project.techStack}</p>
          <p className="text-lg font-semibold">Challenges: {project.challenges}</p>
          <p className="text-lg font-semibold">Improvements & Future Plans: {project.improvements}</p>
          <div className="space-x-4">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-lg text-[#F7DF1E] hover:underline">
              Live Project
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-lg text-[#F7DF1E] hover:underline">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
