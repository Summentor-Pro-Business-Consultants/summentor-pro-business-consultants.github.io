(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,96086,(e,t,a)=>{t.exports=e.r(9187)},94289,e=>{"use strict";var t=e.i(48277),a=e.i(30668),o=e.i(16506),r=e.i(96086),s=e.i(84705),i=e.i(93917),n=e.i(93448);let l="#EC5C29",m=[{label:"Home",href:"/msme",ls:1.92},{label:"About",href:"/msme/about",ls:1.67},{label:"Agenda",href:"/msme/agenda",ls:1.52},{label:"#Time2Leap Awards",href:"/msme/awards",ls:2.67},{label:"Past Editions",href:"/msme/past-editions",ls:2.25},{label:"Contact",href:"/msme/contact",ls:2.92}];e.s(["default",0,function({overlay:e=!1}){let d=(0,r.usePathname)(),[p,c]=(0,a.useState)(!1),u=e=>"/msme"===e?"/msme"===d:d.startsWith(e);return(0,t.jsxs)(n.Reveal,{tag:"header",mode:"mount",y:-10,duration:.5,style:{background:e?"rgba(33,33,33,0.8)":s.INK.bar,position:e?"absolute":"relative",top:0,left:0,right:0,zIndex:40},children:[(0,t.jsx)("a",{href:"#msme-main",className:"msme-skip",children:"Skip to content"}),(0,t.jsx)("style",{children:`
        .msme-skip {
          position: absolute;
          left: 16px;
          top: 12px;
          z-index: 60;
          padding: 10px 18px;
          background: #FFFFFF;
          color: ${s.INK.body};
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 4px;
          transform: translateY(-160%);
          transition: transform .15s ease;
        }
        .msme-skip:focus-visible { transform: translateY(0); }

        .msme-nav a:focus-visible,
        .msme-burger:focus-visible,
        .msme-btn:focus-visible,
        .msme-skip:focus-visible {
          outline: 2px solid ${s.ORANGE};
          outline-offset: 3px;
          border-radius: 4px;
        }
        .msme-nav a {
          transition: color .2s ease, border-color .2s ease;
        }
        .msme-nav a:hover { color: #fff; }
        /* The active item's own underline is an inline colour (below), which always
           outranks this - so this only ever shows on an inactive link's hover. */
        @media (hover: hover) and (pointer: fine) {
          .msme-nav a:not([data-active]):hover {
            border-bottom-color: rgba(255,255,255,0.45) !important;
          }
        }
        @media (max-width: 1040px) { .msme-nav-desktop { display: none !important; } }
        @media (min-width: 1041px) { .msme-burger { display: none !important; } }
      `}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:(0,s.us)(24,12),minHeight:(0,s.u)(...s.HEADER_HEIGHT),paddingLeft:(0,s.u)(60,20),paddingRight:(0,s.u)(48,20)},children:[(0,t.jsx)(o.default,{href:"/msme","aria-label":"MSME & Startup Innovation Summit, home",style:{flexShrink:0},children:(0,t.jsx)(i.Logo,{src:i.ASSET.logo.summit,alt:"",width:(0,s.u)(180,74),ratio:"782 / 420",priority:!0})}),(0,t.jsxs)("nav",{className:"msme-nav msme-nav-desktop",style:{display:"flex",alignItems:"center",gap:(0,s.us)(55,14),marginLeft:"auto",position:"relative",top:(0,s.u)(5.5)},children:[m.map(e=>(0,t.jsx)(o.default,{href:e.href,"data-active":u(e.href)||void 0,style:{fontSize:(0,s.u)(24,12),fontWeight:600,letterSpacing:(0,s.u)(e.ls,.5),textTransform:"uppercase",textDecoration:"none",whiteSpace:"nowrap",color:u(e.href)?"#FFFFFF":"rgba(255,255,255,0.92)",borderBottom:u(e.href)?`${(0,s.u)(3,1)} solid ${l}`:`${(0,s.u)(3,1)} solid transparent`,paddingBottom:(0,s.us)(15,3),position:"relative",top:(0,s.u)(9)},children:e.label},e.href)),(0,t.jsx)(o.default,{className:"msme-btn msme-header-register",href:"/msme/contact",style:{background:"transparent",color:l,border:`${(0,s.u)(2,1)} solid ${l}`,boxSizing:"border-box",minWidth:(0,s.u)(223,96),minHeight:(0,s.u)(97,40),display:"inline-flex",alignItems:"center",justifyContent:"center",padding:`0 ${(0,s.u)(36,18)}`,borderRadius:999,fontSize:(0,s.u)(23,12),fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",textDecoration:"none",whiteSpace:"nowrap",marginLeft:(0,s.u)(20),transition:"background-color .2s ease, color .2s ease, transform .2s ease, box-shadow .2s ease"},children:"Enquire"})]}),(0,t.jsx)("button",{type:"button",className:"msme-burger","aria-expanded":p,"aria-label":"Toggle navigation",onClick:()=>c(e=>!e),style:{marginLeft:"auto",background:"none",border:"none",color:"#fff",fontSize:22,cursor:"pointer",padding:8,lineHeight:1},children:p?"✕":"☰"})]}),p&&(0,t.jsx)("div",{style:{background:s.INK.bar,borderTop:"1px solid rgba(255,255,255,0.12)"},children:(0,t.jsxs)("nav",{className:"msme-nav",style:{display:"grid",gap:2,padding:"8px clamp(20px, 5vw, 40px) 20px"},children:[m.map(e=>(0,t.jsx)(o.default,{href:e.href,onClick:()=>c(!1),style:{padding:"13px 0",fontSize:(0,s.pxf)(14),fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase",textDecoration:"none",color:u(e.href)?s.ORANGE:"rgba(255,255,255,0.82)",borderBottom:"1px solid rgba(255,255,255,0.1)"},children:e.label},e.href)),(0,t.jsx)(o.default,{className:"msme-btn msme-header-register",href:"/msme/contact",style:{marginTop:14,background:"transparent",color:l,border:`1px solid ${l}`,boxSizing:"border-box",padding:"13px 24px",borderRadius:999,fontSize:(0,s.pxf)(13),fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",textDecoration:"none",textAlign:"center"},children:"Enquire"})]})})]})}])}]);