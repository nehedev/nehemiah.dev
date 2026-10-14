import { faAws } from '@fortawesome/free-brands-svg-icons';
import { Play } from 'lucide-react';
import type { ToolboxTool } from '../../data/tools';

function ToolIcon({ tool }: { tool: ToolboxTool }) {
  if (tool.icon) {
    return (
      <svg className="tool-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d={tool.icon.path} fill={`#${tool.icon.hex}`} />
      </svg>
    );
  }

  if (tool.fallback === 'aws') {
    const [width, height, , , pathData] = faAws.icon;
    const paths = Array.isArray(pathData) ? pathData : [pathData];

    return (
      <svg className="tool-icon tool-icon-aws" viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        {paths.map((path, index) => <path d={path} fill="#FF9900" key={index} />)}
      </svg>
    );
  }

  return <Play className="tool-icon tool-icon-fallback" aria-hidden="true" />;
}

export default ToolIcon;