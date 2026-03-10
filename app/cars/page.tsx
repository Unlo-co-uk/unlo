"use client";

import { useState, useEffect, useRef } from "react";
import { Vehicle } from "@/types/vehicle";

function formatCurrency(n: number) {
  return "£" + n.toLocaleString("en-GB");
}

function AnimatedNumber({
  target,
  duration = 1200,
  prefix = "£",
}: {
  target: number;
  duration?: number;
  prefix?: string;
}) {
  const [current, setCurrent] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    startTime.current = null;
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {current.toLocaleString("en-GB")}
    </span>
  );
}

export default function CarsFlow() {
  const [screen, setScreen] = useState(1);
  const [reg, setReg] = useState("");
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRegSubmit = async () => {
    if (!reg.trim()) return;
    setLoading(true);
    try {
      const clean = reg.replace(/\s/g, "").toUpperCase();
      const response = await fetch("/api/vrm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registrationNumber: clean }),
      });

      if (!response.ok) {
        const fallback = {
          make: "Volkswagen",
          model: "Golf GTI",
          year: 2021,
          value: 19400,
          fuelType: "Petrol",
        };
        setVehicle(fallback);
        setLoading(false);
        setScreen(2);
        return;
      }

      const result = await response.json();
      const data = result.data || {
        make: "Volkswagen",
        model: "Golf GTI",
        year: 2021,
        value: 19400,
        fuelType: "Petrol",
      };
      setVehicle(data);
      setLoading(false);
      setScreen(2);
    } catch (error) {
      console.error("Vehicle lookup failed:", error);
      const fallback = {
        make: "Volkswagen",
        model: "Golf GTI",
        year: 2021,
        value: 19400,
        fuelType: "Petrol",
      };
      setVehicle(fallback);
      setLoading(false);
      setScreen(2);
    }
  };

  const handleEmailSubmit = () => {
    if (!email.trim()) return;
    setTimeout(() => setScreen(4), 600);
  };

  const ltv = vehicle ? Math.round(vehicle.value * 0.6) : 0;
  const remaining = vehicle ? vehicle.value - ltv : 0;
  const monthlyDep = vehicle ? Math.round(vehicle.value * 0.0096) : 0;

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    .unlo-root {
      min-height: 100vh;
      background: #080b10;
      font-family: 'Syne', sans-serif;
      color: #f0ede8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
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
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(201,163,84,0.06) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .wordmark {
      position: absolute;
      top: 28px;
      left: 32px;
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #c9a354;
      z-index: 10;
    }

    .badge {
      position: absolute;
      top: 28px;
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

    .screen {
      width: 100%;
      max-width: 440px;
      padding: 40px 32px;
      position: relative;
      z-index: 1;
      animation: fadeUp 0.5s ease forwards;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .eyebrow {
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #c9a354;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .eyebrow::before {
      content: '';
      display: block;
      width: 24px;
      height: 1px;
      background: #c9a354;
    }

    h1 {
      font-size: 42px;
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -1.5px;
      margin-bottom: 12px;
    }

    h1 span { color: #c9a354; }

    .subhead {
      font-size: 15px;
      color: rgba(240,237,232,0.45);
      line-height: 1.6;
      margin-bottom: 40px;
      font-weight: 400;
    }

    .reg-input-wrap {
      background: rgba(201,163,84,0.05);
      border: 1.5px solid ${inputFocused ? "rgba(201,163,84,0.5)" : "rgba(201,163,84,0.15)"};
      border-radius: 12px;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 14px;
      transition: border-color 0.2s;
    }

    .reg-flag {
      font-size: 22px;
      flex-shrink: 0;
    }

    .reg-input {
      background: transparent;
      border: none;
      outline: none;
      font-family: 'DM Mono', monospace;
      font-size: 22px;
      font-weight: 500;
      color: #f0ede8;
      letter-spacing: 4px;
      width: 100%;
      text-transform: uppercase;
    }

    .reg-input::placeholder {
      color: rgba(240,237,232,0.2);
      letter-spacing: 3px;
    }

    .cta-btn {
      width: 100%;
      background: #c9a354;
      color: #080b10;
      border: none;
      border-radius: 12px;
      padding: 18px;
      font-family: 'Syne', sans-serif;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: -0.3px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: opacity 0.15s, transform 0.15s;
    }

    .cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }
    .cta-btn:active { transform: translateY(0); }
    .cta-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

    .trust-row {
      display: flex;
      gap: 18px;
      margin-top: 20px;
    }

    .trust-item {
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      color: rgba(240,237,232,0.3);
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

    /* Screen 2 */
    .vehicle-label {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: rgba(240,237,232,0.35);
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .vehicle-name {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 36px;
    }

    .metric-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }

    .metric-card {
      background: rgba(201,163,84,0.04);
      border: 1px solid rgba(201,163,84,0.1);
      border-radius: 12px;
      padding: 18px;
    }

    .metric-card.featured {
      grid-column: 1 / -1;
      background: rgba(201,163,84,0.08);
      border-color: rgba(201,163,84,0.25);
    }

    .metric-label {
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      color: rgba(240,237,232,0.4);
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .metric-value {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -1px;
      color: #f0ede8;
    }

    .metric-value.gold { color: #c9a354; }

    .metric-sub {
      font-size: 12px;
      color: rgba(240,237,232,0.3);
      margin-top: 3px;
    }

    .bar-wrap {
      background: rgba(201,163,84,0.06);
      border: 1px solid rgba(201,163,84,0.1);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .bar-label-row {
      display: flex;
      justify-content: space-between;
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      color: rgba(240,237,232,0.35);
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }

    .bar-track {
      height: 10px;
      background: rgba(201,163,84,0.1);
      border-radius: 99px;
      overflow: hidden;
      margin-bottom: 8px;
    }

    .bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #c9a354, #e8c876);
      border-radius: 99px;
      animation: barGrow 1s ease forwards;
    }

    @keyframes barGrow {
      from { width: 0%; }
      to { width: 60%; }
    }

    .bar-segments {
      display: flex;
      justify-content: space-between;
      font-family: 'DM Mono', monospace;
      font-size: 10px;
    }

    .seg-accessible { color: #c9a354; }
    .seg-remaining { color: rgba(240,237,232,0.3); }

    .email-input-wrap {
      background: rgba(201,163,84,0.05);
      border: 1.5px solid rgba(201,163,84,0.15);
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 12px;
      transition: border-color 0.2s;
    }

    .email-input-wrap:focus-within {
      border-color: rgba(201,163,84,0.5);
    }

    .email-input {
      background: transparent;
      border: none;
      outline: none;
      font-family: 'Syne', sans-serif;
      font-size: 16px;
      color: #f0ede8;
      width: 100%;
    }

    .email-input::placeholder { color: rgba(240,237,232,0.25); }

    .features-list {
      margin-bottom: 28px;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(201,163,84,0.07);
      font-size: 14px;
      color: rgba(240,237,232,0.65);
    }

    .feature-dot {
      width: 6px;
      height: 6px;
      background: #c9a354;
      border-radius: 50%;
      flex-shrink: 0;
    }

    /* Loader */
    .loader-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 60px 0;
    }

    .spinner {
      width: 44px;
      height: 44px;
      border: 2px solid rgba(201,163,84,0.1);
      border-top-color: #c9a354;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .loader-text {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      color: rgba(201,163,84,0.5);
      text-transform: uppercase;
    }

    /* Success screen */
    .success-icon {
      width: 64px;
      height: 64px;
      background: rgba(201,163,84,0.1);
      border: 2px solid #c9a354;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      margin: 0 auto 24px;
    }

    .step-dots {
      display: flex;
      gap: 6px;
      margin-bottom: 48px;
    }

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(201,163,84,0.2);
      transition: all 0.3s;
    }

    .dot.active {
      width: 20px;
      border-radius: 3px;
      background: #c9a354;
    }

    .back-btn {
      background: transparent;
      border: none;
      color: rgba(240,237,232,0.3);
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      letter-spacing: 1px;
      cursor: pointer;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 6px;
      text-transform: uppercase;
      transition: color 0.2s;
    }

    .back-btn:hover { color: rgba(240,237,232,0.6); }

    .disclaimer {
      margin-top: 16px;
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      color: rgba(240,237,232,0.2);
      text-align: center;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="unlo-root">
        <div className="bg-grid" />
        <div className="bg-glow" />
        <div className="wordmark">unlo</div>
        <div className="badge">Private Beta</div>

        {loading && (
          <div className="screen">
            <div className="loader-wrap">
              <div className="spinner" />
              <div className="loader-text">Reading DVLA data...</div>
            </div>
          </div>
        )}

        {!loading && screen === 1 && (
          <div className="screen" key="s1">
            <div className="step-dots">
              <div className="dot active" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="eyebrow">Asset intelligence</div>
            <h1>
              What could your car <span>unlock?</span>
            </h1>
            <p className="subhead">
              Enter your registration plate for an instant equity estimate —
              no commitment, no credit check.
            </p>

            <div className="reg-input-wrap">
              <span className="reg-flag">🇬🇧</span>
              <input
                ref={inputRef}
                className="reg-input"
                placeholder="AB12 CDE"
                value={reg}
                onChange={(e) => setReg(e.target.value)}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                onKeyDown={(e) => e.key === "Enter" && handleRegSubmit()}
                maxLength={8}
              />
            </div>

            <button
              className="cta-btn"
              onClick={handleRegSubmit}
              disabled={!reg.trim()}
            >
              Check value →
            </button>

            <div className="trust-row">
              {["Instant valuation", "Equity estimate", "No commitment"].map(
                (t) => (
                  <div key={t} className="trust-item">
                    {t}
                  </div>
                )
              )}
            </div>

            <p
              style={{
                marginTop: 32,
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "rgba(240,237,232,0.15)",
                lineHeight: 1.7,
              }}
            >
              Try: AB12CDE · LK21ABC · GF18XYZ · or any plate for a demo
            </p>
          </div>
        )}

        {!loading && screen === 2 && vehicle && (
          <div className="screen" key="s2">
            <div className="step-dots">
              <div className="dot" />
              <div className="dot active" />
              <div className="dot" />
            </div>
            <button className="back-btn" onClick={() => setScreen(1)}>
              ← back
            </button>
            <div className="eyebrow">Your asset</div>
            <div className="vehicle-label">{vehicle.year}</div>
            <div className="vehicle-name">
              {vehicle.make} {vehicle.model}
            </div>

            <div className="metric-grid">
              <div className="metric-card featured">
                <div className="metric-label">
                  Accessible equity (60% LTV)
                </div>
                <div className="metric-value gold">
                  <AnimatedNumber target={ltv} />
                </div>
                <div className="metric-sub">
                  Based on estimated market value
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Est. market value</div>
                <div className="metric-value" style={{ fontSize: 22 }}>
                  <AnimatedNumber target={vehicle.value} duration={900} />
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Monthly depreciation</div>
                <div className="metric-value" style={{ fontSize: 22 }}>
                  <AnimatedNumber target={monthlyDep} duration={1000} />
                </div>
              </div>
            </div>

            <div className="bar-wrap">
              <div className="bar-label-row">
                <span>Loan potential</span>
                <span>Full value</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" />
              </div>
              <div className="bar-segments">
                <span className="seg-accessible">
                  {formatCurrency(ltv)} accessible
                </span>
                <span className="seg-remaining">
                  {formatCurrency(remaining)} remaining equity
                </span>
              </div>
            </div>

            <button className="cta-btn" onClick={() => setScreen(3)}>
              Unlock my asset dashboard →
            </button>
          </div>
        )}

        {!loading && screen === 3 && (
          <div className="screen" key="s3">
            <div className="step-dots">
              <div className="dot" />
              <div className="dot" />
              <div className="dot active" />
            </div>
            <button className="back-btn" onClick={() => setScreen(2)}>
              ← back
            </button>
            <div className="eyebrow">One last step</div>
            <h1 style={{ fontSize: 34 }}>
              Unlock your full <span>dashboard</span>
            </h1>
            <p className="subhead">
              See lending options, rental income potential, and live value
              tracking for your {vehicle?.make} {vehicle?.model}.
            </p>

            <div className="features-list">
              {[
                "Live market value tracking",
                "Matched lending options",
                "Rental & peer income estimate",
                "Depreciation curve forecast",
              ].map((f) => (
                <div className="feature-item" key={f}>
                  <div className="feature-dot" />
                  {f}
                </div>
              ))}
            </div>

            <div className="email-input-wrap">
              <input
                className="email-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
              />
            </div>

            <button
              className="cta-btn"
              onClick={handleEmailSubmit}
              disabled={!email.trim()}
            >
              Create dashboard →
            </button>

            <p className="disclaimer">
              No spam. No credit check. Unsubscribe anytime.
            </p>
          </div>
        )}

        {!loading && screen === 4 && (
          <div className="screen" key="s4" style={{ textAlign: "center" }}>
            <div className="success-icon">✓</div>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              You're in
            </div>
            <h1 style={{ fontSize: 32, marginBottom: 16 }}>
              Dashboard <span>incoming</span>
            </h1>
            <p className="subhead" style={{ marginBottom: 32 }}>
              We're building your asset profile now. You'll hear from us within
              24 hours with your full {vehicle?.make} {vehicle?.model} dashboard.
            </p>
            <div
              style={{
                background: "rgba(201,163,84,0.06)",
                border: "1px solid rgba(201,163,84,0.15)",
                borderRadius: 12,
                padding: "16px 20px",
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                color: "#c9a354",
                letterSpacing: 0.5,
                marginBottom: 28,
              }}
            >
              Equity registered: {formatCurrency(ltv)}
            </div>
            <button
              className="cta-btn"
              style={{
                background: "transparent",
                border: "1px solid rgba(201,163,84,0.2)",
                color: "#c9a354",
              }}
              onClick={() => {
                setScreen(1);
                setReg("");
                setEmail("");
                setVehicle(null);
              }}
            >
              Check another vehicle
            </button>
          </div>
        )}
      </div>
    </>
  );
}
