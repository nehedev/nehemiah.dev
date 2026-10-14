import { toolLines } from '../../data/tools';
import ToolIcon from './ToolIcon';

function ToolboxSection() {
  return (
    <section id="skills" className="skills-section section-dark">
      <div className="content-width">
        <div className="section-heading section-heading-centered">
          <p className="section-kicker section-kicker-yellow">02 / THE TOOLBOX</p>
          <h2>Tools for <span>the whole product.</span></h2>
          <p>From application code to infrastructure, tools I use to get products shipped and keep them working.</p>
        </div>
      </div>
      <div className="tool-lines">
        {toolLines.map((line, index) => (
          <div
            className={`tool-rail ${index === 0 ? 'tool-rail-top' : 'tool-rail-bottom'}`}
            role="region"
            aria-label={index === 0 ? 'Development and product tools' : 'Infrastructure and operations tools'}
            key={index}
          >
            <div className="tool-track">
              {[0, 1].map((copy) => (
                <ul className="tool-group" aria-hidden={copy === 1} key={copy}>
                  {line.map((tool) => (
                    <li className="tool-item" key={tool.name}>
                      <ToolIcon tool={tool} />
                      <span>{tool.name}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToolboxSection;