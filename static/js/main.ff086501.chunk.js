(this.webpackJsonplabirints=this.webpackJsonplabirints||[]).push([[0],{195:function(t,e,c){},196:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c(75),i=c.n(n),l=c(13),a=c(4),r=function(t){var e=t.ToolbarStatus,c=(t.setToolbarStatus,Object(o.useRef)(null)),n=Object(o.useRef)(null),i=Object(o.useRef)(null),r=Object(o.useRef)(null),s=Object(o.useState)(!1),b=Object(l.a)(s,2),j=b[0],O=b[1],u=Object(o.useState)({XAxis:0,YAxis:0}),x=Object(l.a)(u,2),f=x[0],d=x[1],h=Object(o.useState)(!1),R=Object(l.a)(h,2),p=R[0],m=R[1],k=Object(o.useState)(""),W=Object(l.a)(k,2),X=W[0],Y=W[1];return Object(o.useEffect)((function(){var t=c.current;t.width=800,t.height=800,t.style.width="".concat(800,"px"),t.style.height="".concat(800,"px");var o=t.getContext("2d");o.lineCap="round",o.strokeStyle=e.color,o.lineWidth=e.lineWidth,n.current=o}),[]),Object(o.useEffect)((function(){var t=i.current;t.width=800,t.height=800,t.style.width="".concat(800,"px"),t.style.height="".concat(800,"px");var c=t.getContext("2d");c.lineCap="round",c.strokeStyle=e.color,c.lineWidth=e.lineWidth,r.current=c}),[]),Object(o.useEffect)((function(){e.tool.set(n.current,e.lineWidth,e.color)}),[e]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("canvas",{style:{border:"1px solid #000"},ref:c,id:"image"}),Object(a.jsx)("canvas",{className:"canvasRefVisual",style:{border:"1px solid #000",cursor:"crosshair",top:8,left:108},ref:i,onMouseDown:function(){O(!0),e.tool.start(f.XAxis,f.YAxis),"text"===e.tool.Name&&(e.tool.textMenu=!0,e.tool.textMenuY=f.YAxis,e.tool.textMenuX=f.XAxis)},onMouseMove:function(t){m(!0),d({XAxis:t.clientX-c.current.offsetLeft,YAxis:t.clientY-c.current.offsetTop}),j&&(e.tool.cursorFunction(r.current,f.XAxis,f.YAxis),e.tool.action(f.XAxis,f.YAxis))},onMouseUp:function(){e.tool.stop(f.XAxis,f.YAxis),O(!1)},onMouseLeave:function(){m(!1)}}),Object(a.jsx)("div",{className:"textTool",style:{display:!0===e.tool.textMenu?"block":"none",top:e.tool.textMenuY,left:e.tool.textMenuX},children:Object(a.jsx)("input",{type:"textarea",onChange:function(t){Y(t.target.value)},value:X,className:"textTool__input",style:{display:!0===e.tool.textMenu?"block":"none",top:e.tool.textMenuY,left:e.tool.textMenuX,color:e.color,fontSize:"".concat(e.lineWidth,"px")},onKeyDown:function(t){"Enter"==t.key&&(e.tool.lineWidth=e.tool.lineWidth,e.tool.place(X,e.color))}})}),Object(a.jsxs)("p",{style:{display:p?"block":"none",top:f.YAxis-10,left:f.XAxis+130},className:"cursorCandidates",children:["X:".concat(f.XAxis),Object(a.jsx)("br",{}),"Y:".concat(f.YAxis)]})]})},s=c(7),b=c(81),j=c(48),O=c(80),u=c(47),x={borderColor:"#1d7e8f",borderWidth:"2px"},f={Name:"pen",ctxRef:"",lineWidth:"",color:"",start:function(t,e){Object.ctxRef.moveTo(t,e),Object.ctxRef.lineWidth=Object.lineWidth,Object.ctxRef.strokeStyle=Object.color,Object.ctxRef.lineCap="round",Object.ctxRef.beginPath()},action:function(t,e){Object.ctxRef.lineTo(t,e),Object.ctxRef.stroke()},stop:function(t,e){Object.ctxRef.closePath()},cursorFunction:function(t,e,c){},set:function(t,e,c){Object.ctxRef=t,Object.lineWidth=e,Object.color=c}},d={name:"dragLine",ctxRef:"",lineWidth:"",color:"",initialLocX:null,initialLocY:null,start:function(t,e){Object.ctxRef.lineWidth=Object.lineWidth,Object.ctxRef.strokeStyle=Object.color,Object.ctxRef.lineCap="round",Object.initialLocX=t,Object.initialLocY=e,Object.ctxRef.beginPath(),Object.ctxRef.moveTo(t,e)},action:function(t,e){},stop:function(t,e){Object.ctxRef.lineTo(t,e),Object.ctxRef.stroke(),Object.ctxRef.closePath()},cursorFunction:function(t,e,c){t.clearRect(0,0,800,800),t.lineWidth=Object.lineWidth,t.strokeStyle=Object.color,t.lineCap="round",t.beginPath(),t.moveTo(Object.initialLocX,Object.initialLocY),t.lineTo(e,c),t.stroke(),t.closePath()},set:function(t,e,c){Object.ctxRef=t,Object.lineWidth=e,Object.color=c}},h={name:"arc",ctxRef:"",lineWidth:"",color:"",arcX:0,arcY:0,arcSize:0,test:function(){console.log("works")},start:function(t,e){Object.ctxRef.lineWidth=Object.lineWidth,Object.ctxRef.strokeStyle=Object.color,Object.ctxRef.beginPath(),Object.arcX=t,Object.arcY=e},action:function(t,e){var c=Math.abs(Object.arcX-t),o=Math.abs(Object.arcY-e);Object.arcSize=c>o?c:o},stop:function(t,e){Object.ctxRef.arc(Object.arcX,Object.arcY,Object.arcSize,0,7),Object.ctxRef.stroke(),Object.ctxRef.closePath()},cursorFunction:function(t,e,c){t.clearRect(0,0,800,800),t.lineWidth=Object.lineWidth,t.strokeStyle=Object.color,t.beginPath(),t.arc(Object.arcX,Object.arcY,Object.arcSize,0,7),t.stroke(),t.closePath()},set:function(t,e,c){Object.ctxRef=t,Object.lineWidth=e,Object.color=c}},R={name:"squareFill",ctxRef:"",lineWidth:"",color:"",arcX:0,arcY:0,arcSize:0,start:function(t,e){Object.ctxRef.lineWidth=Object.lineWidth,Object.ctxRef.fillStyle=Object.color,Object.ctxRef.beginPath(),Object.arcX=t,Object.arcY=e},action:function(t,e){},stop:function(t,e){var c=Math.abs(Object.arcX-t),o=Math.abs(Object.arcY-e);Object.ctxRef.fillRect(Object.arcX<t?Object.arcX:Object.arcX-c,Object.arcY<e?Object.arcY:Object.arcY-o,c,o),Object.ctxRef.stroke(),Object.ctxRef.closePath()},cursorFunction:function(t,e,c){var o=Math.abs(Object.arcX-e),n=Math.abs(Object.arcY-c);t.clearRect(0,0,800,800),t.lineWidth=Object.lineWidth,t.fillStyle=Object.color,t.beginPath(),t.fillRect(Object.arcX<e?Object.arcX:Object.arcX-o,Object.arcY<c?Object.arcY:Object.arcY-n,o,n),t.stroke(),t.closePath()},set:function(t,e,c){Object.ctxRef=t,Object.lineWidth=e,Object.color=c}},p={name:"square",ctxRef:"",lineWidth:"",color:"",click1X:null,click1Y:null,start:function(t,e){Object.ctxRef.lineWidth=Object.lineWidth,Object.ctxRef.strokeStyle=Object.color,Object.ctxRef.lineCap="square",Object.ctxRef.beginPath(),Object.ctxRef.moveTo(t,e),Object.click1X=t,Object.click1Y=e},action:function(t,e){},stop:function(t,e){Object.ctxRef.lineTo(t,Object.click1Y),Object.ctxRef.lineTo(t,e),Object.ctxRef.lineTo(Object.click1X,e),Object.ctxRef.lineTo(Object.click1X,Object.click1Y),Object.ctxRef.stroke(),Object.ctxRef.closePath()},cursorFunction:function(t,e,c){t.clearRect(0,0,800,800),t.lineWidth=Object.lineWidth,t.strokeStyle=Object.color,t.lineCap="square",t.beginPath(),t.moveTo(Object.click1X,Object.click1Y),t.lineTo(e,Object.click1Y),t.lineTo(e,c),t.lineTo(Object.click1X,c),t.lineTo(Object.click1X,Object.click1Y),t.stroke(),t.closePath()},set:function(t,e,c){Object.ctxRef=t,Object.lineWidth=e,Object.color=c}},m={Name:"text",ctxRef:"",lineWidth:"",color:"",textMenu:!1,textMenuX:null,textMenuY:null,textValue:"",start:function(t,e){Object.textMenuX=t,Object.textMenuY=e,Object.textMenu=!0},action:function(t,e){},stop:function(t,e){},cursorFunction:function(t,e,c){},place:function(t,e){Object.ctxRef.font="".concat(Object.lineWidth,"px Arial"),Object.ctxRef.fillStyle=e,console.log(e),Object.ctxRef.fillText(t,Object.textMenuX,Object.textMenuY)},set:function(t,e,c,o){Object.ctxRef=t,Object.lineWidth=e,Object.color=c,Object.textMenu=o}},k=function(t){var e=t.setToolbarStatus,c=t.ToolbarStatus,o=function(t){var o=t.name,n=t.ClassName,i=t.ToolFunctions;return Object(a.jsx)("div",{className:n,style:c.tool.name===n?x:{borderColor:"#000"},onClick:function(){e((function(t){return Object(s.a)(Object(s.a)({},t),{},{tool:i})}))},children:Object(a.jsxs)("p",{children:[" ",o]})})};return Object(a.jsxs)("div",{className:"Toolbar",children:[Object(a.jsx)("div",{onClick:function(){!function(){var t=document.getElementById("image"),e=document.createElement("a");e.download="filename.png",e.href=t.toDataURL(),e.click()}()},children:Object(a.jsx)(u.a,{})}),Object(a.jsx)("div",{className:"colorPicker",style:{background:c.color},children:Object(a.jsx)("div",{className:"colorPickerHover",children:Object(a.jsx)(b.a,{onChange:function(t){e((function(e){return Object(s.a)(Object(s.a)({},e),{},{color:t.hex})}))}})})}),Object(a.jsxs)("div",{className:"lineWidth",children:[Object(a.jsx)("input",{type:"range",className:"rangerBar",min:"1",max:"50",value:c.lineWidth,onChange:function(t){e((function(e){return Object(s.a)(Object(s.a)({},e),{},{lineWidth:t.target.value})}))}}),Object(a.jsx)("p",{children:c.lineWidth})]}),Object(a.jsx)("div",{className:"tool",style:"pen"===c.tool.Name?x:{borderColor:"#000"},children:Object(a.jsx)(j.a,{onClick:function(){e((function(t){return Object(s.a)(Object(s.a)({},t),{},{tool:f})}))}})}),Object(a.jsx)(o,{ClassName:"dragLine",name:Object(a.jsx)(a.Fragment,{children:"\u268a"}),ToolFunctions:d}),Object(a.jsx)(o,{ClassName:"arc",name:Object(a.jsx)(a.Fragment,{children:"\u26aa"}),ToolFunctions:h}),Object(a.jsx)(o,{ClassName:"squareFill",name:Object(a.jsx)(u.b,{}),ToolFunctions:R}),Object(a.jsx)(o,{ClassName:"square",name:Object(a.jsx)(j.b,{}),ToolFunctions:p}),Object(a.jsx)("div",{className:"text",style:"text"===c.tool.Name?x:{borderColor:"#000"},onClick:function(){e((function(t){return Object(s.a)(Object(s.a)({},t),{},{tool:m})}))},children:Object(a.jsx)(O.a,{style:{width:"25px",height:"25px"}})})]})},W={color:"#000000",lineWidth:5,tool:f};var X=function(){var t=Object(o.useState)(W),e=Object(l.a)(t,2),c=e[0],n=e[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(k,{setToolbarStatus:n,ToolbarStatus:c}),Object(a.jsx)(r,{ToolbarStatus:c,setToolbarStatus:n})]})};c(195);i.a.render(Object(a.jsx)(X,{}),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.ff086501.chunk.js.map