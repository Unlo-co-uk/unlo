(()=>{var e={};e.id=520,e.ids=[520],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},132:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(5701),r(1506),r(5866);var t=r(3191),s=r(8716),i=r(7922),n=r.n(i),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(a,l);let c=["",{children:["cars",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5701)),"/Users/williamtyler-street/unlo/app/cars/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"/Users/williamtyler-street/unlo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/williamtyler-street/unlo/app/cars/page.tsx"],p="/cars/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/cars/page",pathname:"/cars",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5240:(e,a,r)=>{Promise.resolve().then(r.bind(r,5286))},5414:()=>{},8111:(e,a,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5286:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>o});var t=r(326),s=r(7577);function i(e){return"\xa3"+e.toLocaleString("en-GB")}function n({target:e,duration:a=1200,prefix:r="\xa3"}){let[i,n]=(0,s.useState)(0);return(0,s.useRef)(null),(0,t.jsxs)("span",{children:[r,i.toLocaleString("en-GB")]})}function o(){let[e,a]=(0,s.useState)(1),[r,o]=(0,s.useState)(""),[l,c]=(0,s.useState)(null),[d,p]=(0,s.useState)(""),[m,x]=(0,s.useState)(!1),[g,u]=(0,s.useState)(!1),b=(0,s.useRef)(null),h=async()=>{if(r.trim()){x(!0);try{let e=r.replace(/\s/g,"").toUpperCase(),t=await fetch("/api/vrm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({registration:e})});if(!t.ok){c({make:"Volkswagen",model:"Golf GTI",year:2021,value:19400,fuelType:"Petrol"}),x(!1),a(2);return}let s=(await t.json()).data||{make:"Volkswagen",model:"Golf GTI",year:2021,value:19400,fuelType:"Petrol"};c(s),x(!1),a(2)}catch(e){console.error("Vehicle lookup failed:",e),c({make:"Volkswagen",model:"Golf GTI",year:2021,value:19400,fuelType:"Petrol"}),x(!1),a(2)}}},f=()=>{d.trim()&&setTimeout(()=>a(4),600)},v=l?Math.round(.6*l.value):0,y=l?l.value-v:0,j=l?Math.round(.0096*l.value):0,w=`
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
      border: 1.5px solid ${g?"rgba(201,163,84,0.5)":"rgba(201,163,84,0.15)"};
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
      content: '\xb7';
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
  `;return(0,t.jsxs)(t.Fragment,{children:[t.jsx("style",{children:w}),(0,t.jsxs)("div",{className:"unlo-root",children:[t.jsx("div",{className:"bg-grid"}),t.jsx("div",{className:"bg-glow"}),t.jsx("div",{className:"wordmark",children:"unlo"}),t.jsx("div",{className:"badge",children:"Private Beta"}),m&&t.jsx("div",{className:"screen",children:(0,t.jsxs)("div",{className:"loader-wrap",children:[t.jsx("div",{className:"spinner"}),t.jsx("div",{className:"loader-text",children:"Reading DVLA data..."})]})}),!m&&1===e&&(0,t.jsxs)("div",{className:"screen",children:[(0,t.jsxs)("div",{className:"step-dots",children:[t.jsx("div",{className:"dot active"}),t.jsx("div",{className:"dot"}),t.jsx("div",{className:"dot"})]}),t.jsx("div",{className:"eyebrow",children:"Asset intelligence"}),(0,t.jsxs)("h1",{children:["What could your car ",t.jsx("span",{children:"unlock?"})]}),t.jsx("p",{className:"subhead",children:"Enter your registration plate for an instant equity estimate — no commitment, no credit check."}),(0,t.jsxs)("div",{className:"reg-input-wrap",children:[t.jsx("span",{className:"reg-flag",children:"\uD83C\uDDEC\uD83C\uDDE7"}),t.jsx("input",{ref:b,className:"reg-input",placeholder:"AB12 CDE",value:r,onChange:e=>o(e.target.value),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>"Enter"===e.key&&h(),maxLength:8})]}),t.jsx("button",{className:"cta-btn",onClick:h,disabled:!r.trim(),children:"Check value →"}),t.jsx("div",{className:"trust-row",children:["Instant valuation","Equity estimate","No commitment"].map(e=>t.jsx("div",{className:"trust-item",children:e},e))}),t.jsx("p",{style:{marginTop:32,fontFamily:"'DM Mono', monospace",fontSize:10,color:"rgba(240,237,232,0.15)",lineHeight:1.7},children:"Try: AB12CDE \xb7 LK21ABC \xb7 GF18XYZ \xb7 or any plate for a demo"})]},"s1"),!m&&2===e&&l&&(0,t.jsxs)("div",{className:"screen",children:[(0,t.jsxs)("div",{className:"step-dots",children:[t.jsx("div",{className:"dot"}),t.jsx("div",{className:"dot active"}),t.jsx("div",{className:"dot"})]}),t.jsx("button",{className:"back-btn",onClick:()=>a(1),children:"← back"}),t.jsx("div",{className:"eyebrow",children:"Your asset"}),t.jsx("div",{className:"vehicle-label",children:l.year}),(0,t.jsxs)("div",{className:"vehicle-name",children:[l.make," ",l.model]}),(0,t.jsxs)("div",{className:"metric-grid",children:[(0,t.jsxs)("div",{className:"metric-card featured",children:[t.jsx("div",{className:"metric-label",children:"Accessible equity (60% LTV)"}),t.jsx("div",{className:"metric-value gold",children:t.jsx(n,{target:v})}),t.jsx("div",{className:"metric-sub",children:"Based on estimated market value"})]}),(0,t.jsxs)("div",{className:"metric-card",children:[t.jsx("div",{className:"metric-label",children:"Est. market value"}),t.jsx("div",{className:"metric-value",style:{fontSize:22},children:t.jsx(n,{target:l.value,duration:900})})]}),(0,t.jsxs)("div",{className:"metric-card",children:[t.jsx("div",{className:"metric-label",children:"Monthly depreciation"}),t.jsx("div",{className:"metric-value",style:{fontSize:22},children:t.jsx(n,{target:j,duration:1e3})})]})]}),(0,t.jsxs)("div",{className:"bar-wrap",children:[(0,t.jsxs)("div",{className:"bar-label-row",children:[t.jsx("span",{children:"Loan potential"}),t.jsx("span",{children:"Full value"})]}),t.jsx("div",{className:"bar-track",children:t.jsx("div",{className:"bar-fill"})}),(0,t.jsxs)("div",{className:"bar-segments",children:[(0,t.jsxs)("span",{className:"seg-accessible",children:[i(v)," accessible"]}),(0,t.jsxs)("span",{className:"seg-remaining",children:[i(y)," remaining equity"]})]})]}),t.jsx("button",{className:"cta-btn",onClick:()=>a(3),children:"Unlock my asset dashboard →"})]},"s2"),!m&&3===e&&(0,t.jsxs)("div",{className:"screen",children:[(0,t.jsxs)("div",{className:"step-dots",children:[t.jsx("div",{className:"dot"}),t.jsx("div",{className:"dot"}),t.jsx("div",{className:"dot active"})]}),t.jsx("button",{className:"back-btn",onClick:()=>a(2),children:"← back"}),t.jsx("div",{className:"eyebrow",children:"One last step"}),(0,t.jsxs)("h1",{style:{fontSize:34},children:["Unlock your full ",t.jsx("span",{children:"dashboard"})]}),(0,t.jsxs)("p",{className:"subhead",children:["See lending options, rental income potential, and live value tracking for your ",l?.make," ",l?.model,"."]}),t.jsx("div",{className:"features-list",children:["Live market value tracking","Matched lending options","Rental & peer income estimate","Depreciation curve forecast"].map(e=>(0,t.jsxs)("div",{className:"feature-item",children:[t.jsx("div",{className:"feature-dot"}),e]},e))}),t.jsx("div",{className:"email-input-wrap",children:t.jsx("input",{className:"email-input",type:"email",placeholder:"your@email.com",value:d,onChange:e=>p(e.target.value),onKeyDown:e=>"Enter"===e.key&&f()})}),t.jsx("button",{className:"cta-btn",onClick:f,disabled:!d.trim(),children:"Create dashboard →"}),t.jsx("p",{className:"disclaimer",children:"No spam. No credit check. Unsubscribe anytime."})]},"s3"),!m&&4===e&&(0,t.jsxs)("div",{className:"screen",style:{textAlign:"center"},children:[t.jsx("div",{className:"success-icon",children:"✓"}),t.jsx("div",{className:"eyebrow",style:{justifyContent:"center"},children:"You're in"}),(0,t.jsxs)("h1",{style:{fontSize:32,marginBottom:16},children:["Dashboard ",t.jsx("span",{children:"incoming"})]}),(0,t.jsxs)("p",{className:"subhead",style:{marginBottom:32},children:["We're building your asset profile now. You'll hear from us within 24 hours with your full ",l?.make," ",l?.model," dashboard."]}),(0,t.jsxs)("div",{style:{background:"rgba(201,163,84,0.06)",border:"1px solid rgba(201,163,84,0.15)",borderRadius:12,padding:"16px 20px",fontFamily:"'DM Mono', monospace",fontSize:13,color:"#c9a354",letterSpacing:.5,marginBottom:28},children:["Equity registered: ",i(v)]}),t.jsx("button",{className:"cta-btn",style:{background:"transparent",border:"1px solid rgba(201,163,84,0.2)",color:"#c9a354"},onClick:()=>{a(1),o(""),p(""),c(null)},children:"Check another vehicle"})]},"s4")]})]})}},5701:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});let t=(0,r(8570).createProxy)(String.raw`/Users/williamtyler-street/unlo/app/cars/page.tsx#default`)},1506:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>i,metadata:()=>s});var t=r(9510);r(7272);let s={title:"Unlo — Unlock what you own",description:"See your car's value and accessible equity instantly."};function i({children:e}){return t.jsx("html",{lang:"en",children:t.jsx("body",{children:e})})}},7272:()=>{}};var a=require("../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),t=a.X(0,[276,471],()=>r(132));module.exports=t})();