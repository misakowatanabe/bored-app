(this["webpackJsonpbored-app"]=this["webpackJsonpbored-app"]||[]).push([[0],{100:function(e,c,a){},101:function(e,c,a){},127:function(e,c,a){"use strict";a.r(c);var t=a(0),n=a(10),i=a.n(n),s=(a(100),a(101),a(21)),l=a(75),r=a.n(l),o=a(76),d=a.n(o),u=a(2);function j(e){return Object(u.jsx)("div",{className:"buttonPosition",children:Object(u.jsx)("button",{onClick:e.onClick,style:{cursor:"pointer"},children:Object(u.jsx)(d.a,{style:{color:"rgb(226, 226, 226)",fontSize:"30px"}})})})}function b(){return Object(u.jsx)("div",{className:"text-container",children:Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("div",{className:"mainText",children:"Sorry, no match..."}),Object(u.jsx)("div",{className:"subTextForNoMatch",children:"Try again with other criteria :)"})]})})}function h(e){return Object(u.jsx)("div",{className:"link-container",children:Object(u.jsxs)("div",{className:"link",children:[Object(u.jsx)("div",{children:"Start with this!"}),Object(u.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.children})]})})}var x=a(166),p=a(167);function O(e){var c=e.responseData,a=e.checked,t=function(){return c.link?Object(u.jsx)(h,{href:c.link,children:c.link}):null},n=function(){return c.activity?Object(u.jsx)(x.a,{in:a,children:Object(u.jsx)("div",{className:"text-container",children:Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("div",{className:"subText",children:"Feeling bored?"}),Object(u.jsx)("div",{className:"mainText",children:c.activity}),Object(u.jsx)(t,{})]},c.key)})}):Object(u.jsx)(x.a,{in:a,children:Object(u.jsx)(b,{})})};return a?Object(u.jsx)(n,{}):Object(u.jsx)("div",{style:{width:"100%",height:"100%",textAlign:"center",margin:"88.5px auto"},children:Object(u.jsx)(p.a,{})})}var y=a(54),m=a(62),k=a(178),g=a(171),v=a(172),C=a(129),f=a(29),N=a.n(f),q=a(168),w=a(179),R=a(169),S=a(176),P=Object(q.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function V(e){var c=P();return Object(u.jsx)(R.a,{className:c.formControl,children:Object(u.jsxs)(S.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e.value,onChange:e.onChange,style:{textAlign:"center"},children:[Object(u.jsx)(w.a,{value:1,children:"1"}),Object(u.jsx)(w.a,{value:2,children:"2"}),Object(u.jsx)(w.a,{value:3,children:"3"}),Object(u.jsx)(w.a,{value:4,children:"4"}),Object(u.jsx)(w.a,{value:5,children:"5"})]})})}function A(e){return Object(u.jsxs)(k.a,{expanded:e.expanded,onChange:e.onChange,children:[Object(u.jsx)(g.a,{expandIcon:Object(u.jsx)(N.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(u.jsxs)(C.a,{component:"span",children:[Object(u.jsx)("div",{className:"accordionHeader",children:"Participants"}),Object(u.jsx)("div",{className:"accordionSecondHeader",children:e.children})]})}),Object(u.jsxs)(v.a,{style:{display:"grid"},children:[Object(u.jsx)("p",{className:"participantsQuestion",children:"How many people are you?"}),Object(u.jsx)(V,{value:e.value,onChange:e.handleParticipantsChange})]})]})}var I=a(173),M=a(175),T=a(177),H=a(174);function D(e){var c=e.educationChecked,a=e.recreationalChecked,t=e.socialChecked,n=e.diyChecked,i=e.charityChecked,s=e.cookingChecked,l=e.relaxationChecked,r=e.musicChecked,o=e.busyworkChecked,d=e.onChange,j=[{checked:c,name:"education",label:"Education"},{checked:a,name:"recreational",label:"Recreational"},{checked:t,name:"social",label:"Social"},{checked:n,name:"diy",label:"DIY"},{checked:i,name:"charity",label:"Charity"},{checked:s,name:"cooking",label:"Cooking"},{checked:l,name:"relaxation",label:"Relaxation"},{checked:r,name:"music",label:"Music"},{checked:o,name:"busywork",label:"Busy Work"}];return Object(u.jsx)(I.a,{children:Object(u.jsx)(H.a,{container:!0,style:{marginLeft:"3%"},children:j.map((function(e){var c=e.checked,a=e.name,t=e.label;return Object(u.jsx)(H.a,{item:!0,xs:6,children:Object(u.jsx)(M.a,{control:Object(u.jsx)(T.a,{checked:c,onChange:d,name:"".concat(a),color:"primary"}),label:"".concat(t)})},a)}))})})}function E(e){return Object(u.jsxs)(k.a,{expanded:e.expanded,onChange:e.onChange,children:[Object(u.jsx)(g.a,{expandIcon:Object(u.jsx)(N.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(u.jsxs)(C.a,{component:"span",children:[Object(u.jsx)("div",{className:"accordionHeader",children:"Type"}),Object(u.jsx)("div",{className:"selectedTypes",children:e.children})]})}),Object(u.jsxs)(v.a,{style:{display:"grid"},children:[Object(u.jsx)("p",{className:"typeQuestion",children:"What types of activities are you intersted in?"}),Object(u.jsx)(D,{educationChecked:e.educationChecked,recreationalChecked:e.recreationalChecked,socialChecked:e.socialChecked,diyChecked:e.diyChecked,charityChecked:e.charityChecked,cookingChecked:e.cookingChecked,relaxationChecked:e.relaxationChecked,musicChecked:e.musicChecked,busyworkChecked:e.busyworkChecked,onChange:e.handleTypeChange})]})]})}var L=a(180),F=Object(q.a)((function(e){return{root:{marginRight:"10%",marginLeft:"10%"},margin:{height:e.spacing(3)}}})),Q=[{value:0,label:"Easy"},{value:20,label:""},{value:40,label:""},{value:60,label:""},{value:80,label:""},{value:100,label:"Hard"}];function B(e){return Q.findIndex((function(c){return c.value===e}))}function W(e){var c=F();return Object(u.jsx)("div",{className:c.root,children:Object(u.jsx)(L.a,{value:e.AccessibilityValue,onChange:e.onAccessibilityChange,valueLabelFormat:B,"aria-labelledby":"discrete-slider-custom",step:null,valueLabelDisplay:"on",marks:Q})})}function J(e){return Object(u.jsxs)(k.a,{expanded:e.expanded,onChange:e.onChange,children:[Object(u.jsx)(g.a,{expandIcon:Object(u.jsx)(N.a,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:Object(u.jsxs)(C.a,{component:"span",children:[Object(u.jsx)("div",{className:"accordionHeader",children:"Accessibility"}),Object(u.jsx)("div",{className:"accordionSecondHeader",children:e.children})]})}),Object(u.jsxs)(v.a,{style:{display:"grid"},children:[Object(u.jsx)("p",{className:"accessibilityQuestion",children:"To what extent should the activity be accessible?"}),Object(u.jsx)(W,{AccessibilityValue:e.AccessibilityValue,onAccessibilityChange:e.onAccessibilityChange})]})]})}var Y=Object(q.a)((function(e){return{root:{textAlign:"center",marginRight:"10%",marginLeft:"10%"},margin:{height:e.spacing(3)}}})),z=[{value:0,label:"Affordable"},{value:20,label:""},{value:40,label:""},{value:60,label:""},{value:80,label:""},{value:100,label:"Expensive"}];function _(e){return z.findIndex((function(c){return c.value===e}))}function G(e){var c=Y();return Object(u.jsx)("div",{className:c.root,children:Object(u.jsx)(L.a,{value:e.PriceValue,onChange:e.onPriceChange,valueLabelFormat:_,"aria-labelledby":"discrete-slider-custom",step:null,valueLabelDisplay:"on",marks:z})})}function K(e){return Object(u.jsxs)(k.a,{expanded:e.expanded,onChange:e.onChange,children:[Object(u.jsx)(g.a,{expandIcon:Object(u.jsx)(N.a,{}),"aria-controls":"panel4a-content",id:"panel4a-header",children:Object(u.jsxs)(C.a,{component:"span",children:[Object(u.jsx)("div",{className:"accordionHeader",children:"Price"}),Object(u.jsx)("div",{className:"accordionSecondHeader",children:e.children})]})}),Object(u.jsxs)(v.a,{style:{display:"grid"},children:[Object(u.jsx)("p",{className:"costQuestion",children:"How much should the activity cost?"}),Object(u.jsx)(G,{PriceValue:e.PriceValue,onPriceChange:e.onPriceChange})]})]})}var U=a(78),X=a.n(U),Z=a(79),$=a.n(Z),ee=a(81),ce=a.n(ee),ae=a(86),te=a.n(ae),ne=a(80),ie=a.n(ne),se=a(83),le=a.n(se),re=a(84),oe=a.n(re),de=a(85),ue=a.n(de),je=a(82),be=a.n(je);function he(e){var c=e.participants,a=e.setParticipants,n=e.state,i=e.setState,l=e.educationRequested,r=e.recreationalRequested,o=e.socialRequested,d=e.diyRequested,j=e.charityRequested,b=e.cookingRequested,h=e.relaxationRequested,x=e.musicRequested,p=e.busyworkRequested,O=e.accessibilityValue,k=e.accessibilityMin,g=e.accessibilityMax,v=e.setAccessibilityValue,C=e.priceMin,f=e.priceMax,N=e.priceValue,q=e.setPriceValue,w=Object(t.useState)(!1),R=Object(s.a)(w,2),S=R[0],P=R[1],V=function(e){return function(c,a){P(!!a&&e)}},I=[{request:l,icon:Object(u.jsx)(X.a,{})},{request:r,icon:Object(u.jsx)($.a,{})},{request:o,icon:Object(u.jsx)(ie.a,{})},{request:d,icon:Object(u.jsx)(ce.a,{})},{request:j,icon:Object(u.jsx)(be.a,{})},{request:b,icon:Object(u.jsx)(le.a,{})},{request:h,icon:Object(u.jsx)(oe.a,{})},{request:x,icon:Object(u.jsx)(ue.a,{})},{request:p,icon:Object(u.jsx)(te.a,{})}];return Object(u.jsx)("div",{className:"accordion-container",children:Object(u.jsxs)("div",{children:[Object(u.jsx)(A,{expanded:"panel1"===S,onChange:V("panel1"),value:c,handleParticipantsChange:function(e){a(e.target.value)},children:c}),Object(u.jsx)(E,{expanded:"panel2"===S,onChange:V("panel2"),handleTypeChange:function(e){i(Object(m.a)(Object(m.a)({},n),{},Object(y.a)({},e.target.name,e.target.checked)))},educationChecked:n.education,recreationalChecked:n.recreational,socialChecked:n.social,diyChecked:n.diy,charityChecked:n.charity,cookingChecked:n.cooking,relaxationChecked:n.relaxation,musicChecked:n.music,busyworkChecked:n.busywork,children:I.map((function(e){var c=e.request,a=e.icon;return Object(u.jsx)("div",{children:c?Object(u.jsxs)("span",{className:"selectionChip",children:[Object(u.jsx)("div",{className:"typeSelectionIcons",children:a}),c]}):null},c)}))}),Object(u.jsxs)(J,{expanded:"panel3"===S,onChange:V("panel3"),AccessibilityValue:O,onAccessibilityChange:function(e,c){v(c)},children:[5*k," - ",5*g]}),Object(u.jsxs)(K,{expanded:"panel4"===S,onChange:V("panel4"),PriceValue:N,onPriceChange:function(e,c){q(c)},children:[5*C," - ",5*f]})]})})}var xe=a.p+"static/media/error.ca8e0403.jpg";function pe(e){var c=e.backgroundPic,a=e.checked,t=e.responseData;return""!==c?Object(u.jsx)("div",{children:Object(u.jsx)(x.a,{in:a,children:Object(u.jsx)("div",{className:"backgroundImage",style:t.activity?{backgroundImage:"url(".concat(c,")")}:{backgroundImage:"url(".concat(xe,")")}},t.key)})}):null}var Oe=a.p+"static/media/education.6651d81d.jpg",ye=a.p+"static/media/recreational.d39d6285.jpg",me=a.p+"static/media/social.0be1224f.jpg",ke=a.p+"static/media/diy.d20778c6.jpg",ge=a.p+"static/media/charity.30bcd2a2.jpg",ve=a.p+"static/media/cooking.8ef12891.jpg",Ce=a.p+"static/media/relaxation.5ad9c1ac.jpg",fe=a.p+"static/media/music.79a9ab39.jpg",Ne=a.p+"static/media/busywork.125f8561.jpg";var qe=function(){var e=Object(t.useState)("1"),c=Object(s.a)(e,2),a=c[0],n=c[1],i="participants=".concat(a),l=Object(t.useState)({education:!0,recreational:!0,social:!0,diy:!0,charity:!0,cooking:!0,relaxation:!0,music:!0,busywork:!0}),o=Object(s.a)(l,2),d=o[0],b=o[1],h=null,x=null,p=null,y=null,m=null,k=null,g=null,v=null,C=null,f=null,N=null,q=null,w=null,R=null,S=null,P=null,V=null,A=null;!0===d.education?(h="&type=education",f="Education"):h="",!0===d.recreational?(x="&type=recreational",N="Recreational"):x="",!0===d.social?(p="&type=social",q="Social"):p="",!0===d.diy?(y="&type=diy",w="DIY"):y="",!0===d.charity?(m="&type=charity",R="Charity"):m="",!0===d.cooking?(k="&type=cooking",S="Cooking"):k="",!0===d.relaxation?(g="&type=relaxation",P="Relaxation"):g="",!0===d.music?(v="&type=music",V="Music"):v="",!0===d.busywork?(C="&type=busywork",A="Busy work"):C="";var I="".concat(h).concat(x).concat(p).concat(y).concat(m).concat(k).concat(g).concat(v).concat(C),M=Object(t.useState)([0,100]),T=Object(s.a)(M,2),H=T[0],D=T[1],E=H[0]/100,L=H[1]/100,F="&minaccessibility=".concat(E,"&maxaccessibility=").concat(L),Q=Object(t.useState)([0,100]),B=Object(s.a)(Q,2),W=B[0],J=B[1],Y=W[0]/100,z=W[1]/100,_="&minprice=".concat(Y,"&maxprice=").concat(z),G="https://www.boredapi.com/api/activity?".concat(i).concat(I).concat(F).concat(_),K=Object(t.useState)(0),U=Object(s.a)(K,2),X=U[0],Z=U[1],$=Object(t.useState)(null),ee=Object(s.a)($,2),ce=ee[0],ae=ee[1],te=Object(t.useState)(""),ne=Object(s.a)(te,2),ie=ne[0],se=ne[1],le=Object(t.useState)(!1),re=Object(s.a)(le,2),oe=re[0],de=re[1];return Object(t.useEffect)((function(){de(!1),r.a.get(G).then((function(e){ae(e.data);var c=e.data.type;"education"===c?se(Oe):"recreational"===c?se(ye):"social"===c?se(me):"diy"===c?se(ke):"charity"===c?se(ge):"cooking"===c?se(ve):"relaxation"===c?se(Ce):"music"===c?se(fe):"busywork"===c&&se(Ne)})).then((function(){de(!0)})).catch((function(e){console.log(e)}))}),[a,d,H,W,G,X]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"contents-container",children:[Object(u.jsx)(O,{responseData:ce,checked:oe}),Object(u.jsx)(j,{onClick:function(){Z(X+1)}}),Object(u.jsx)(he,{participants:a,setParticipants:n,state:d,setState:b,educationRequested:f,recreationalRequested:N,socialRequested:q,diyRequested:w,charityRequested:R,cookingRequested:S,relaxationRequested:P,musicRequested:V,busyworkRequested:A,accessibilityValue:H,accessibilityMin:E,accessibilityMax:L,setAccessibilityValue:D,priceMin:Y,priceMax:z,priceValue:W,setPriceValue:J})]}),Object(u.jsx)(pe,{backgroundPic:ie,checked:oe,responseData:ce})]})};var we=function(){return Object(u.jsx)(qe,{})};i.a.render(Object(u.jsx)(we,{}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.06ae88ae.chunk.js.map