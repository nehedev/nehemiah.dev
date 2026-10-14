export type ProjectArtworkKind = 'energy' | 'security' | 'deploy' | 'observability';

export interface PortfolioProject {
  name: string;
  category: string;
  summary: string;
  stack: string[];
  href: string;
  linkLabel: string;
  kind: ProjectArtworkKind;
}

export const contactEmail = 'nehemiahadoba@gmail.com';

export const projects: PortfolioProject[] = [
  {
    name: 'Intell',
    category: 'Energy',
    summary:
      'Energy monitoring for African SMEs and solar installers. Intell turns solar and inverter data into clearer decisions about system performance and energy costs.',
    stack: ['TypeScript', 'NestJS', 'Next.js', 'PostgreSQL', 'Redis'],
    href: 'https://www.intell.ng',
    linkLabel: 'Visit Intell',
    kind: 'energy',
  },
  {
    name: 'Norma',
    category: 'Security',
    summary:
      'A real-time traffic anomaly engine that learns application patterns, detects behavioral drift, and supports adaptive response with progressive IP blocking.',
    stack: ['Python', 'FastAPI', 'Docker', 'Nginx', 'Iptables'],
    href: 'https://github.com/nehedev/norma',
    linkLabel: 'View on GitHub',
    kind: 'security',
  },
  {
    name: 'SwiftDeploy',
    category: 'Automation',
    summary:
      'A declarative deployment CLI that uses one YAML manifest to configure container releases and validate rollouts with OPA policies and Prometheus metrics.',
    stack: ['Python', 'Docker', 'OPA', 'Prometheus', 'Rego'],
    href: 'https://github.com/nehedev/swiftdeploy',
    linkLabel: 'View on GitHub',
    kind: 'deploy',
  },
  {
    name: 'ObserveX',
    category: 'Reliability',
    summary:
      'An observability platform unifying metrics, logs, and traces with SLO management, DORA analytics, and automated error-budget alerting.',
    stack: ['Terraform', 'Grafana', 'Prometheus', 'Loki', 'Tempo'],
    href: 'https://github.com/nehedev/observeX',
    linkLabel: 'View on GitHub',
    kind: 'observability',
  },
];