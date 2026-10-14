import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import ProjectArtwork from './ProjectArtwork';

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section section-paper">
      <div className="content-width">
        <div className="projects-heading">
          <div>
            <p className="section-kicker">03 / SELECTED WORK</p>
            <h2>Things I&apos;ve <span>built.</span></h2>
            <p className="projects-lede">Products shaped around real operational needs, from clearer energy decisions to safer traffic and dependable releases.</p>
          </div>
          <a className="text-link project-all-link" href="https://github.com/nehedev" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${project.kind}`} key={project.name}>
              <ProjectArtwork kind={project.kind} />
              <div className="project-content">
                <div className="project-meta"><span>{project.category}</span><span>0{index + 1} / 04</span></div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={project.href} className="project-link" target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;