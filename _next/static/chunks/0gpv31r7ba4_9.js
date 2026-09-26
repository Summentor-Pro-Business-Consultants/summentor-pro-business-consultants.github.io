(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,96086,(e,t,a)=>{t.exports=e.r(9187)},94289,e=>{"use strict";var t=e.i(48277),a=e.i(30668),i=e.i(16506),n=e.i(96086),s=e.i(84705),r=e.i(93917),o=e.i(93448);let l="#EC5C29",m=[{label:"Home",href:"/msme",ls:1.92},{label:"About",href:"/msme/about",ls:1.67},{label:"Agenda",href:"/msme/agenda",ls:1.52},{label:"#Time2Leap Awards",href:"/msme/awards",ls:2.67},{label:"Past Editions",href:"/msme/past-editions",ls:2.25},{label:"Contact",href:"/msme/contact",ls:2.92}];e.s(["default",0,function({overlay:e=!1}){let d=(0,n.usePathname)(),[p,c]=(0,a.useState)(!1),u=e=>"/msme"===e?"/msme"===d:d.startsWith(e);return(0,t.jsxs)(o.Reveal,{tag:"header",mode:"mount",y:-10,duration:.5,style:{background:e?"rgba(33,33,33,0.8)":s.INK.bar,position:e?"absolute":"relative",top:0,left:0,right:0,zIndex:40},children:[(0,t.jsx)("a",{href:"#msme-main",className:"msme-skip",children:"Skip to content"}),(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:(0,s.us)(24,12),minHeight:(0,s.u)(...s.HEADER_HEIGHT),paddingLeft:(0,s.u)(60,20),paddingRight:(0,s.u)(48,20)},children:[(0,t.jsx)(i.default,{href:"/msme","aria-label":"MSME & Startup Innovation Summit, home",style:{flexShrink:0},children:(0,t.jsx)(r.Logo,{src:r.ASSET.logo.summit,alt:"",width:(0,s.u)(180,74),ratio:"782 / 420",priority:!0})}),(0,t.jsxs)("nav",{className:"msme-nav msme-nav-desktop",style:{display:"flex",alignItems:"center",gap:(0,s.us)(55,14),marginLeft:"auto",position:"relative",top:(0,s.u)(5.5)},children:[m.map(e=>(0,t.jsx)(i.default,{href:e.href,"data-active":u(e.href)||void 0,style:{fontSize:(0,s.u)(24,12),fontWeight:600,letterSpacing:(0,s.u)(e.ls,.5),textTransform:"uppercase",textDecoration:"none",whiteSpace:"nowrap",color:u(e.href)?"#FFFFFF":"rgba(255,255,255,0.92)",borderBottom:u(e.href)?`${(0,s.u)(3,1)} solid ${l}`:`${(0,s.u)(3,1)} solid transparent`,paddingBottom:(0,s.us)(15,3),position:"relative",top:(0,s.u)(9)},children:e.label},e.href)),(0,t.jsx)(i.default,{className:"msme-btn msme-header-register",href:"/msme/contact",style:{background:"transparent",color:l,border:`${(0,s.u)(2,1)} solid ${l}`,boxSizing:"border-box",minWidth:(0,s.u)(223,96),minHeight:(0,s.u)(97,40),display:"inline-flex",alignItems:"center",justifyContent:"center",padding:`0 ${(0,s.u)(36,18)}`,borderRadius:999,fontSize:(0,s.u)(23,12),fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",textDecoration:"none",whiteSpace:"nowrap",marginLeft:(0,s.u)(20),transition:"background-color .2s ease, color .2s ease, transform .2s ease, box-shadow .2s ease"},children:"Enquire"})]}),(0,t.jsx)("button",{type:"button",className:"msme-burger","aria-expanded":p,"aria-label":"Toggle navigation",onClick:()=>c(e=>!e),style:{marginLeft:"auto",background:"none",border:"none",color:"#fff",fontSize:22,cursor:"pointer",padding:8,lineHeight:1},children:p?"✕":"☰"})]}),p&&(0,t.jsx)("div",{style:{background:s.INK.bar,borderTop:"1px solid rgba(255,255,255,0.12)"},children:(0,t.jsxs)("nav",{className:"msme-nav",style:{display:"grid",gap:2,padding:"8px clamp(20px, 5vw, 40px) 20px"},children:[m.map(e=>(0,t.jsx)(i.default,{href:e.href,onClick:()=>c(!1),style:{padding:"13px 0",fontSize:(0,s.pxf)(14),fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase",textDecoration:"none",color:u(e.href)?s.ORANGE:"rgba(255,255,255,0.82)",borderBottom:"1px solid rgba(255,255,255,0.1)"},children:e.label},e.href)),(0,t.jsx)(i.default,{className:"msme-btn msme-header-register",href:"/msme/contact",style:{marginTop:14,background:"transparent",color:l,border:`1px solid ${l}`,boxSizing:"border-box",padding:"13px 24px",borderRadius:999,fontSize:(0,s.pxf)(13),fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",textDecoration:"none",textAlign:"center"},children:"Enquire"})]})})]})}])},31103,e=>{"use strict";var t=e.i(48277),a=e.i(30668),i=e.i(35691),n=e.i(84705),s=e.i(93448);let r=()=>(0,t.jsx)("br",{className:"msme-br"});e.s(["default",0,function({points:e,layout:o}){let[l,m]=(0,a.useState)(!1),d=l?e.length:Math.min(2,e.length);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("ul",{style:{listStyle:"none",margin:`0 0 ${(0,n.u)(56)}`,padding:0,maxWidth:(0,n.u)(2074)},children:e.slice(0,d).map((e,a)=>(0,t.jsxs)(s.Reveal,{tag:"li",amount:0,delay:.07*Math.min(a,5),y:14,className:"msme-nowrap-lg",style:{position:"relative",paddingLeft:(0,n.u)(62,22),marginTop:(0,n.u)(o[a].gap,10),fontFamily:"Arial, Helvetica, sans-serif",fontSize:(0,n.uf)(53,14),lineHeight:`${(e.lh/53).toFixed(4)}`,letterSpacing:"0.01em",color:"#E6E7E7"},children:[(0,t.jsx)("span",{"aria-hidden":"true",style:{position:"absolute",left:(0,n.u)(1),top:(0,n.u)(o[a].tri-4),width:(0,n.u)(18,6),height:(0,n.u)(20,7),background:"#fff",clipPath:"polygon(11% 5%, 83% 47.5%, 11% 90%)"}}),(0,t.jsxs)("span",{children:[e.lines[0],e.lines[1]&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{})," ",e.lines[1]]})]})]},e.lines[0]))}),(0,t.jsx)("style",{children:`
        .msme-bengaluru-more { transition: color .2s ease, opacity .2s ease; }
        @media (hover: hover) and (pointer: fine) {
          .msme-bengaluru-more:hover { color: #FF7E3D; }
        }
      `}),(0,t.jsxs)("button",{type:"button",onClick:()=>m(e=>!e),"aria-expanded":l,className:"msme-bengaluru-more",style:{display:"inline-flex",alignItems:"center",gap:(0,n.u)(14,7),margin:`0 0 ${(0,n.u)(70)}`,padding:0,background:"none",border:"none",cursor:"pointer",fontFamily:"Arial, Helvetica, sans-serif",fontSize:(0,n.uf)(40,15),fontWeight:700,color:"#FF5D15",textDecoration:"underline",textUnderlineOffset:"4px"},children:[l?"Show Less":"Read More",(0,t.jsx)(i.motion.span,{"aria-hidden":"true",animate:{rotate:180*!!l},transition:{duration:.25},style:{display:"inline-block",fontSize:"0.85em"},children:"▾"})]})]})}])}]);