"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #080b10;
          color: #f0ede8;
          font-family: 'Syne', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 40px 24px;
          text-align: center;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201,163,84,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,163,84,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .bg-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,163,84,0.07) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .wordmark {
          position: fixed;
          top: 28px;
          left: 32px;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #c9a354;
          z-index: 10;
        }

        .nav-badge {
          position: fixed;
          top: 24px;
          right: 32px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(201,163,84,0.5);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: 1px solid rgba(201,163,84,0.15);
          padding: 4px 10px;
          border-radius: 20px;
          z-index: 10;
        }

        .content {
          position: relative;
          z-index: 1;
          max-width: 600px;
          animation: fadeUp 0.6s ease forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #c9a354;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .eyebrow::before, .eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #c9a354;
        }

        h1 {
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -2.5px;
          margin-bottom: 24px;
        }

        h1 span { color: #c9a354; }

        .subhead {
          font-size: 17px;
          color: rgba(240,237,232,0.45);
          line-height: 1.65;
          margin-bottom: 48px;
          font-weight: 400;
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #c9a354;
          color: #080b10;
          border: none;
          border-radius: 14px;
          padding: 20px 40px;
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.3px;
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
          margin-bottom: 20px;
          width: 100%;
          max-width: 360px;
        }

        .cta-btn:hover { opacity: 0.9; transform: translateY(-2px); }
        .cta-btn:active { transform: translateY(0); }

        .trust-row {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .trust-item {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(240,237,232,0.25);
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .trust-item::before {
          content: '·';
          color: #c9a354;
          font-size: 14px;
        }

        /* Stats row */
        .stats-row {
          display: flex;
          gap: 1px;
          margin-top: 72px;
          border: 1px solid rgba(201,163,84,0.1);
          border-radius: 14px;
          overflow: hidden;
          width: 100%;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .stat {
          flex: 1;
          padding: 20px 16px;
          background: rgba(201,163,84,0.04);
          text-align: center;
          border-right: 1px solid rgba(201,163,84,0.08);
        }

        .stat:last-child { border-right: none; }

        .stat-value {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.8px;
          color: #c9a354;
          margin-bottom: 4px;
        }

        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: rgba(240,237,232,0.3);
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      `}</style>

      <div className="hero">
        <div className="bg-grid" />
        <div className="bg-glow" />

        <div className="wordmark">unlo</div>
        <div className="nav-badge">Private Beta</div>

        <div className="content">
          <p className="eyebrow">Asset liquidity · UK</p>

          <h1>
            Your car is worth<br />
            more than you <span>think</span>
          </h1>

          <p className="subhead">
            Enter your reg plate and see your accessible equity in seconds.
            No credit check. No commitment. No catch.
          </p>

          <button className="cta-btn" onClick={() => router.push("/cars")}>
            See what your car unlocks →
          </button>

          <div className="trust-row">
            {["Instant valuation", "60% LTV estimate", "No commitment"].map(t => (
              <span key={t} className="trust-item">{t}</span>
            ))}
          </div>

          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">£8.4k</div>
              <div className="stat-label">Avg. equity</div>
            </div>
            <div className="stat">
              <div className="stat-value">&lt; 10s</div>
              <div className="stat-label">To your number</div>
            </div>
            <div className="stat">
              <div className="stat-value">0</div>
              <div className="stat-label">Credit checks</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
