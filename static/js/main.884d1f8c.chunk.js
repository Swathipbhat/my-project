(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){e.exports=a.p+"static/media/bg.c00ac42c.png"},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),m=a(5),s=a(3);a(12),a(33);function o(){return r.a.createElement("header",{style:u},r.a.createElement("h1",{className:"main-title text-center"},"login / register page"),r.a.createElement("p",{className:"main-para text-center"},"Check out Contacts List Available"),r.a.createElement("div",{className:"buttons text-center"},r.a.createElement(m.b,{to:"/login"},r.a.createElement("button",{className:"primary-button"},"log in")),r.a.createElement(m.b,{to:"/register"},r.a.createElement("button",{className:"primary-button",id:"reg_btn"},r.a.createElement("span",null,"register ")))))}var u={width:"100%",height:"60vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"};a(38);function i(){return r.a.createElement("div",{className:"text-center m-5-auto"},r.a.createElement("div",{className:"overlay"},r.a.createElement("form",{action:"https://Swathipbhat.github.io/my-project/home"},r.a.createElement("div",{className:"con"},r.a.createElement("header",{className:"head-form"},r.a.createElement("h2",null,"Log In"),r.a.createElement("p",null,"login here using your username and password")),r.a.createElement("br",null),r.a.createElement("div",{className:"field-set"},r.a.createElement("input",{className:"form-input",id:"txt-input",type:"text",placeholder:"UserName",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-input",type:"password",placeholder:"Password",id:"pwd",name:"password",required:!0}),r.a.createElement("button",{className:"log-in"}," Log In ")),r.a.createElement("div",{className:"other"},r.a.createElement("button",{className:"btn submits frgt-pass"},"Forgot Password"),r.a.createElement("button",{className:"btn submits sign-up"},"Sign Up"))))))}function p(){return r.a.createElement("div",{className:"text-center m-5-auto"},r.a.createElement("h2",null,"Join us"),r.a.createElement("h5",null,"Create your personal account"),r.a.createElement("form",{action:"/home"},r.a.createElement("p",null,r.a.createElement("label",null,"Username"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"first_name",required:!0})),r.a.createElement("p",null,r.a.createElement("label",null,"Email address"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",required:!0})),r.a.createElement("p",null,r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",requiredc:!0})),r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",name:"checkbox",id:"checkbox",required:!0})," ",r.a.createElement("span",null,"I agree all statements in ",r.a.createElement("a",{href:"https://google.com",target:"_blank",rel:"noopener noreferrer"},"terms of service")),"."),r.a.createElement("p",null,r.a.createElement("button",{id:"sub_btn",type:"submit"},"Register"))),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement(m.b,{to:"/"},"Back to Homepage"),".")))}function E(){return r.a.createElement("div",{className:"text-center m-5-auto"},r.a.createElement("h2",null,"Reset your password"),r.a.createElement("h5",null,"Enter your email address and we will send you a new password"),r.a.createElement("form",{action:"/login"},r.a.createElement("p",null,r.a.createElement("label",{id:"reset_pass_lbl"},"Email address"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",required:!0})),r.a.createElement("p",null,r.a.createElement("button",{id:"sub_btn",type:"submit"},"Send password reset email"))),r.a.createElement("footer",null,r.a.createElement("p",null,"First time? ",r.a.createElement(m.b,{to:"/register"},"Create an account"),"."),r.a.createElement("p",null,r.a.createElement(m.b,{to:"/"},"Back to Homepage"),".")))}var d=a(19),b=a.n(d),g=a(15),f=a(25),h=a(10),v=a(46),N=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(h.a)(c,2),o=s[0],u=s[1],i=Object(n.useState)(1),p=Object(h.a)(i,2),E=p[0],d=p[1],N=Object(n.useState)(null),w=Object(h.a)(N,2),y=w[0],x=w[1],j=Object(n.useRef)(new IntersectionObserver(function(e){e[0].isIntersecting&&d(function(e){return e+1})})),k=function(){var e=Object(f.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,v.a.get("https://randomuser.me/api/?page=".concat(E,"&results=25&seed=abc"));case 3:t=e.sent,a=new Set([].concat(Object(g.a)(o),Object(g.a)(t.data.results))),u(Object(g.a)(a)),l(!1);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){E<=5&&k()},[E]),Object(n.useEffect)(function(){var e=y,t=j.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}},[y]);var O=function(e){var t=e.data;return r.a.createElement("div",{className:"p-4 border border-gray-500 rounded bg-white"},r.a.createElement("ul",{className:"outside"},r.a.createElement("div",null,r.a.createElement("div",{className:"pictureposition"},r.a.createElement("img",{src:t.picture.medium,className:"w-20 h-20 rounded-full border-4 border-green-600",alt:"user"})),r.a.createElement("li",null,r.a.createElement("div",{className:"ml-3"},r.a.createElement("p",{className:"text-base font-bold"},t.name.first," ",t.name.last),r.a.createElement("p",{className:"text-sm text-gray-500 break-all"},t.phone))))))};return r.a.createElement("div",{className:"fullbg"},r.a.createElement("div",{className:"mx-44 p-6"},r.a.createElement("div",{className:"d-table"},r.a.createElement("h1",{className:"d-table-cell"},"CONTACT LIST"),r.a.createElement("div",{class:"d-table-cell tar"},r.a.createElement(m.b,{to:"/"},r.a.createElement("button",{className:"primary-button"},"Log out")))),r.a.createElement("div",{className:"grid grid-cols-3 gap-4"},o.length>0&&o.map(function(e,t){return t===o.length-1&&!a&&E<=5?r.a.createElement("div",{key:"".concat(e.name.first,"-").concat(t),ref:x},r.a.createElement(O,{data:e})):r.a.createElement(O,{data:e,key:"".concat(e.name.first,"-").concat(t)})})),a&&r.a.createElement("h2",{className:"text-center"},"Loading..."),E-1===5&&r.a.createElement("h3",{className:"text-center my-10"},"Thank You \u2665")))};c.a.render(r.a.createElement(function(){return r.a.createElement(m.a,{basename:"/my-project"},r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:o}),r.a.createElement(s.a,{path:"/login",component:i}),r.a.createElement(s.a,{path:"/register",component:p}),r.a.createElement(s.a,{path:"/forget-password",component:E}),r.a.createElement(s.a,{path:"/home",component:N}))))},null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.884d1f8c.chunk.js.map