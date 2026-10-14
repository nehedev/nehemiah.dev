import { Activity, ArrowUpRight, ShieldCheck } from 'lucide-react';
import type { ProjectArtworkKind } from '../../data/portfolio';

function ProjectArtwork({ kind }: { kind: ProjectArtworkKind }) {
  if (kind === 'energy') {
    return (
      <div className="artwork artwork-energy" aria-hidden="true">
        <div className="energy-topline"><span>INTELL / ENERGY OVERVIEW</span><span>LIVE SYSTEM</span></div>
        <div className="energy-reading"><span>Power flow</span><strong>Solar <i>-&gt;</i> Storage <i>-&gt;</i> Load</strong></div>
        <div className="energy-chart">
          {[34, 50, 42, 72, 56, 84, 64, 96, 70, 58, 78, 46].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="energy-axis"><span>06:00</span><span>12:00</span><span>18:00</span></div>
      </div>
    );
  }

  if (kind === 'security') {
    return (
      <div className="artwork artwork-security" aria-hidden="true">
        <div className="artwork-label"><span>NORMA / TRAFFIC SIGNAL</span><span className="signal-dot" /></div>
        <div className="traffic-line"><span>REQUEST PATTERN</span><div>{[20, 26, 24, 35, 31, 38, 32, 72, 82, 76, 90, 95].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
        <div className="signal-row"><span>Behavioral drift</span><strong>Review signal</strong><ArrowUpRight size={15} /></div>
        <div className="signal-row"><span>Response policy</span><strong>Progressive block</strong><ShieldCheck size={15} /></div>
      </div>
    );
  }

  if (kind === 'deploy') {
    return (
      <div className="artwork artwork-deploy" aria-hidden="true">
        <div className="code-title"><span className="code-dots"><i /><i /><i /></span><span>swiftdeploy.yaml</span><ArrowUpRight size={15} /></div>
        <div className="code-lines">
          <p><b>service:</b> <em>api</em></p>
          <p><b>runtime:</b> <em>docker</em></p>
          <p><b>strategy:</b> <em>progressive</em></p>
          <p><b>policy:</b> <em>opa / rollout-safe</em></p>
          <p><b>metrics:</b> <em>prometheus</em></p>
        </div>
        <div className="deploy-status"><span /><span>POLICY CHECKS READY</span><span>DEPLOY GATE</span></div>
      </div>
    );
  }

  return (
    <div className="artwork artwork-observability" aria-hidden="true">
      <div className="observe-heading"><span>OBSERVEX / SERVICE HEALTH</span><Activity size={16} /></div>
      <div className="observe-signal"><div className="observe-line"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div></div>
      <div className="observe-legend"><span><i className="legend-metric" />METRICS</span><span><i className="legend-logs" />LOGS</span><span><i className="legend-traces" />TRACES</span></div>
      <div className="observe-footer"><span>SLO WORKFLOW</span><span>HEALTHY <b /></span></div>
    </div>
  );
}

export default ProjectArtwork;