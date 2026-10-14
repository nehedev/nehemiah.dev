import { describe, expect, it } from 'vitest';
import { projects } from './portfolio';
import { tools, toolLines } from './tools';

describe('toolbox content', () => {
  it('includes each featured tool once and gives it an icon', () => {
    const names = tools.map((tool) => tool.name);

    expect(names).toEqual([
      'Go', 'Python', 'FastAPI', 'React', 'Vite', 'TypeScript', 'Git', 'Figma',
      'Playwright', 'OpenCode', 'PostHog', 'Bruno', 'Terraform', 'Docker', 'AWS',
      'Linux', 'PostgreSQL', 'Prometheus', 'Grafana', 'Redis', 'NGINX', 'Sentry',
    ]);
    expect(new Set(names).size).toBe(names.length);
    expect(tools.every((tool) => tool.icon || tool.fallback)).toBe(true);
  });

  it('splits the marquee into two complete rows', () => {
    expect(toolLines.map((line) => line.length)).toEqual([12, 10]);
    expect(toolLines.flat()).toEqual(tools);
  });
});

describe('featured projects', () => {
  it('provides a valid https link and stack for every project', () => {
    expect(projects.map((project) => project.name)).toEqual([
      'Intell', 'Norma', 'SwiftDeploy', 'ObserveX',
    ]);

    for (const project of projects) {
      expect(new URL(project.href).protocol).toBe('https:');
      expect(project.summary.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
    }
  });
});