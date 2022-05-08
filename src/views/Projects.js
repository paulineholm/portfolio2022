import styled from "styled-components";
import PageHead from "../components/common/PageHead";
import SectionHead from "../components/home/SectionHead";
import ProjectsMasonry from "../components/projects/ProjectsMasonry";
const ProjectsStyles = styled.main``;
const Projects = () => {
  return (
    <ProjectsStyles>
      <PageHead headline="all projects" />
      <ProjectsMasonry />
    </ProjectsStyles>
  );
};

export default Projects;
