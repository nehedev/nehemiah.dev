import {
  siBruno,
  siDocker,
  siFastapi,
  siFigma,
  siGit,
  siGo,
  siGrafana,
  siLinux,
  siNginx,
  siOpencode,
  siPosthog,
  siPostgresql,
  siPrometheus,
  siPython,
  siReact,
  siRedis,
  siSentry,
  siTerraform,
  siTypescript,
  siVite,
  type SimpleIcon,
} from 'simple-icons';

export interface ToolboxTool {
  name: string;
  icon?: SimpleIcon;
  fallback?: 'aws' | 'play';
}

export const tools: ToolboxTool[] = [
  { name: 'Go', icon: siGo },
  { name: 'Python', icon: siPython },
  { name: 'FastAPI', icon: siFastapi },
  { name: 'React', icon: siReact },
  { name: 'Vite', icon: siVite },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Git', icon: siGit },
  { name: 'Figma', icon: siFigma },
  { name: 'Playwright', fallback: 'play' },
  { name: 'OpenCode', icon: siOpencode },
  { name: 'PostHog', icon: siPosthog },
  { name: 'Bruno', icon: siBruno },
  { name: 'Terraform', icon: siTerraform },
  { name: 'Docker', icon: siDocker },
  { name: 'AWS', fallback: 'aws' },
  { name: 'Linux', icon: siLinux },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'Prometheus', icon: siPrometheus },
  { name: 'Grafana', icon: siGrafana },
  { name: 'Redis', icon: siRedis },
  { name: 'NGINX', icon: siNginx },
  { name: 'Sentry', icon: siSentry },
];

export const toolLines = [tools.slice(0, 12), tools.slice(12)];