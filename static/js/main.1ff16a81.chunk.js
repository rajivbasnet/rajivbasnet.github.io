(this["webpackJsonpmy-personal-website"]=this["webpackJsonpmy-personal-website"]||[]).push([[0],{102:function(e,t,a){e.exports=a(164)},121:function(e,t,a){var n={"./about":49,"./about.jsx":49,"./bottomdetails":52,"./bottomdetails.jsx":52,"./contact":88,"./contact.jsx":88,"./contactNF":53,"./contactNF.jsx":53,"./extra_projects":51,"./extra_projects.jsx":51,"./footer":54,"./footer.jsx":54,"./homepage":46,"./homepage.jsx":46,"./images/bgimage1.jpg":64,"./images/bgimage3.jpg":140,"./images/profilepic.jpg":65,"./images/projects/handtracking.png":141,"./images/projects/librarysearch.png":142,"./images/projects/other.png":143,"./images/projects/others.png":144,"./images/projects/predicting.png":145,"./images/projects/quantmod.png":146,"./images/projects/videorenting.png":147,"./navbarbottom":86,"./navbarbottom.jsx":86,"./navbartop":47,"./navbartop.jsx":47,"./projects":50,"./projects.jsx":50,"./slider":48,"./slider.jsx":48};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=121},140:function(e,t,a){e.exports=a.p+"static/media/bgimage3.82ca3dc0.jpg"},141:function(e,t,a){e.exports=a.p+"static/media/handtracking.da21feda.png"},142:function(e,t,a){e.exports=a.p+"static/media/librarysearch.c006a644.png"},143:function(e,t,a){e.exports=a.p+"static/media/other.1482599c.png"},144:function(e,t,a){e.exports=a.p+"static/media/others.8ad153ff.png"},145:function(e,t,a){e.exports=a.p+"static/media/predicting.8252fb4f.png"},146:function(e,t,a){e.exports=a.p+"static/media/quantmod.3b8b8c02.png"},147:function(e,t,a){e.exports=a.p+"static/media/videorenting.16c2dc44.png"},155:function(e,t,a){},162:function(e,t,a){e.exports=a.p+"static/media/Arizonia-Regular.8bfbc526.ttf"},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=a.n(o),c=a(97),i=a(27),s=a(29),m=a(46);a(154),a(155);var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.ToastContainer,null),r.a.createElement("main",null,r.a.createElement(c.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",component:m.default}),r.a.createElement(i.a,{exact:!0,from:"/",to:"/"}),r.a.createElement(i.a,{to:"/not-found"})))))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(158),a(159),a(160),a(161),a(162),a(163);l.a.render(r.a.createElement("div",null,r.a.createElement(u,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},46:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(47),m=a(48),u=a(49),d=a(50),f=a(54),p=a(53),h=a(38),g=a(12),b=a(59),E=a(96),v=a.n(E),y=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={links:Object(b.a)(),backgroundColor:"#ffffff",color:"#0f1115"},e.listenScrollEvent=function(t){window.scrollY>400?e.setState({backgroundColor:"#22252a",color:"#ffffff"}):e.setState({backgroundColor:"#ffffff",color:"#0f1115"})},e.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e.scToC=function(e){v()(e,{offset:0,align:"top",duration:100})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.default,null),i.a.createElement(m.default,{btnScTo:this.aboutme}),i.a.createElement(h.a,{collapseOnSelect:!0,expand:"md",sticky:"top",id:"navbar-bottom",className:"navbar-bottom",style:{backgroundColor:this.state.backgroundColor}},i.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(g.a,{className:"mr-auto"},i.a.createElement(g.a.Link,{onClick:function(){return e.scToC(e.aboutme)},style:{color:this.state.color}}," ABOUT ME "),i.a.createElement(g.a.Link,{onClick:function(){return e.scToC(e.projects)},style:{color:this.state.color}}," PROJECTS "),i.a.createElement(g.a.Link,{href:this.state.links.resume,target:"_blank",style:{color:this.state.color}}," RESUME "),i.a.createElement(g.a.Link,{onClick:function(){return e.scToC(e.contact)},style:{color:this.state.color}}," CONTACT ")),i.a.createElement(g.a,{className:"justify-content-end"},i.a.createElement(g.a.Link,{onClick:this.scrollToTop},i.a.createElement("i",{className:"fa fa-home","aria-hidden":"true",style:{color:this.state.color,fontSize:"20px"}}))),i.a.createElement(g.a,null,i.a.createElement(g.a.Link,{href:"#deets"})))),"",i.a.createElement(u.default,{ref:function(t){e.aboutme=t}}),i.a.createElement(d.default,{ref:function(t){e.projects=t}}),"",i.a.createElement(p.default,{ref:function(t){e.contact=t}}),i.a.createElement(f.default,null))}}]),a}(c.Component);t.default=y},47:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(43),m=a(12),u=a(55),d=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={socials:Object(u.a)()},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.socials;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{backgroundColor:"#212529"}},i.a.createElement(s.a,null,i.a.createElement(m.a,{className:"navbartop mr-auto justify-content-end"},e.map((function(e){return i.a.createElement(m.a.Link,{key:e._id,to:"route",rel:"noopener noreferrer",href:e.link,target:"_blank"},i.a.createElement("span",{className:"header-socials-icon-top",style:{marginRight:"0px"}},i.a.createElement("i",{className:e.icon_class})))}))))))}}]),a}(c.Component);t.default=d},48:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(64),m=a.n(s),u=a(71),d=(a(119),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).scrollTo=function(){window.scrollTo({top:document.querySelector(".slider").scrollHeight+document.querySelector(".navbartop").scrollHeight,behavior:"smooth"})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:"slider"},i.a.createElement(u.a.Item,null,i.a.createElement("img",{className:"bgimage d-block w-100",src:m.a,alt:"First slide"}),i.a.createElement(u.a.Caption,null,i.a.createElement("div",null,i.a.createElement("h3",{className:"myName"}," \u2013 Rajiv Basnet \u2013 "),i.a.createElement("p",null),i.a.createElement("p",null,i.a.createElement("div",{className:"header-socials-icon ml-4 mr-4",rel:"noopener noreferrer",onClick:function(){return e.scrollTo()},id:"arrowdown",style:{border:"0px"}},i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-arrow-down",style:{marginTop:"5%"}})))))))))}}]),a}(c.Component));t.default=d},49:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(65),m=a.n(s),u=a(43),d=a(37),f=a(35),p=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{id:"aboutme","data-spy":"scroll","data-target":"#navbar-bottom",style:{color:"#000000"}},i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("p",{className:"h5 font-weight-bold text-center",style:{color:"#000000"}}," ","ABOUT ME"," "),i.a.createElement("hr",{className:"my-4"}),i.a.createElement("div",{align:"justify",style:{color:"#000000"}}," ",i.a.createElement("p",{className:"text-center"},i.a.createElement("img",{src:m.a,alt:"Rajiv Basnet",className:"rounded-circle img-thumbnail",style:{height:"200px"}})),i.a.createElement("p",{className:"justify"}," ","The ingenuity of computers and the magic of mathematics have amazed me since I was in my eighth grade. I rejoice the use of artistic math involved in computational problem-solving. Comprehending the how and the why involved in the process sparkles my mind to acquire an in-depth knowledge."),i.a.createElement("p",null," ","I am now a senior at St. Joseph\u2019s College NY where I am studying, it stands to reason, Computer Science and Mathematics. Rather than choosing a specific discipline to excel in, I am, here and now, determined in obtaining analytical, usable-in-the-future skills in more generic areas of study. I like to keep myself on the cutting edge and I believe that\u2019s what is and will be needed. I do have exciting thoughts for my future."),i.a.createElement("p",null,"I am currently working as a Software + Data Engineer Intern at Tarifica and have experiences working on a full-stack with Python and JavaScript. I was also selected as a Data Science Student in Microsoft's DS3 Program where I learned research strategies, programming with R, data wrangling, analysis, and visualization."),i.a.createElement("p",null,"I spend a great deal of my leisure watching movies and tv-series. I am also a great admirer of music whatever the genre. My guitar is my wife and my flutes are my girlfriends. I spend quite a lot of my sweet time with them."))))))}}]),a}(c.Component);t.default=p},50:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(100),m=a(43),u=a(37),d=a(35),f=a(101),p=a(25),h=a(58),g=a(51),b=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={projects:Object(h.a)()},e.cardStyles={minWidth:"280px",marginBottom:"20px"},e.checkWebsite=function(e){if(e.website)return i.a.createElement(s.a,{variant:"secondary",className:"btnLink",block:!0,to:"route",target:"_blank",href:e.website},"Visit Website")},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.projects.length,n=this.state.projects;return 0===t?i.a.createElement("p",null,"There are no projects in the Database!"):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"bg-white",id:"projects"},i.a.createElement(m.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement("p",{className:"h5 font-weight-bold text-center",style:{color:"#000000"}}," ","PROJECTS"," "))),i.a.createElement("hr",{className:"my-4"}),i.a.createElement("br",null),i.a.createElement(f.a,null,n.map((function(t){return i.a.createElement(p.a,{key:t._id,style:e.cardStyles},i.a.createElement(p.a.Body,null,t.imgsrc&&i.a.createElement(p.a.Img,{className:"projectImages",variant:"top",src:a(121)("".concat(t.imgsrc)),style:{marginBottom:"20px",boxShadow:"5px 5px 5px rgba(0,0,0,0.4)"}}),i.a.createElement(p.a.Title,null,i.a.createElement("b",null,t.title," ")),t.tools&&i.a.createElement(p.a.Text,null," ",i.a.createElement("b",null,"Tools Used : ")," ",i.a.createElement("small",{className:"text-muted"}," ",t.tools.join(" | "))),i.a.createElement(p.a.Text,null,"0"!==t._id&&t.description,"0"===t._id&&i.a.createElement(g.default,null))),t.github&&i.a.createElement(p.a.Footer,{className:"text-center"},e.checkWebsite(t),i.a.createElement(s.a,{variant:"secondary",className:"btnLink",block:!0,to:"route",target:"_blank",href:t.github},"See GitHub Repo")))})),i.a.createElement("br",null)))))}}]),c}(c.Component);t.default=b},51:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(37),m=a(58),u=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={projects:Object(m.a)()},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.projects[this.state.projects.length-1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{backgroundColor:"#ffffff"}},e.projects.map((function(e){return i.a.createElement(s.a,null,i.a.createElement("div",{className:"flex text-secondary ml-3"},i.a.createElement("a",{href:e.website||e.github,target:"blank",className:"text-secondary"},i.a.createElement("b",null,e.title," ")),i.a.createElement("br",null),e.tools.split(",").join(" | "),i.a.createElement("br",null),i.a.createElement("br",null)))}))))}}]),a}(c.Component);t.default=u},52:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(25),m=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{style:{backgroundColor:"#f8f9fa",border:"0px"},id:"bottomdetails"},i.a.createElement("div",{className:"text-center"},i.a.createElement("p",{className:"text-justify"},"I find the use of software development and engineering practices in analytics fascinating and have parallel interests in mathematics and data science. Currently a senior at St. Joseph's College, I am also open to internships/projects in these fields."," ",i.a.createElement("br",null)," ",i.a.createElement("br",null),"If you would like to add me to your network, please feel free to send me a quick message or shoot me an email. I will try getting back to you as soon as possible."),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("a",{href:"mailto:net.rajivbas@gmail.com"},i.a.createElement("i",{className:"fa fa-google text-dark mr-2"}," "),i.a.createElement("span",null,"net.rajivbas@gmail.com")," "),i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-home text-dark mr-2"}," "),i.a.createElement("span",null,"Jackson Heights, NY 11372")," "))))}}]),a}(c.Component);t.default=m},53:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(43),m=a(37),u=a(35),d=a(101),f=a(25),p=a(55),h=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={socials:Object(p.a)()},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.socials;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{id:"contact"},i.a.createElement(m.a,null,i.a.createElement(u.a,null,i.a.createElement("p",{className:"h5 lead font-weight-bold text-center",style:{color:"#000000"}}," ","CONTACT ME"," ")," ")),i.a.createElement("hr",{className:"my-4"}),i.a.createElement(m.a,{className:"justify-content-center"}," ",i.a.createElement(d.a,null,i.a.createElement(f.a,{style:{backgroundColor:"#f8f9fa",border:"0px",maxWidth:"800px",marginTop:"5%",marginBottom:"10%"},id:"bottomdetails"},i.a.createElement("div",{className:"text-center"},i.a.createElement("p",{className:"text-center mr-8 ml-8"},"I find the use of software engineering practices in analytics and data science fascinating. Currently a senior at St. Joseph's College, I am seeking full-time opportunities in these fields for 2021."," ",i.a.createElement("br",null)," ",i.a.createElement("br",null),"If you would like to add me to your network, please feel free to shoot me a message. I will try getting back to you as soon as possible."),i.a.createElement("br",null),e.map((function(e){return i.a.createElement("a",{key:e._id,className:"header-socials-icon ml-3 mr-3",to:"route",rel:"noopener noreferrer",target:"_blank",href:e.link},i.a.createElement("span",null,i.a.createElement("i",{className:e.icon_class,href:""})))})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("a",{href:"mailto:net.rajivbas@gmail.com"},i.a.createElement("i",{className:"fa fa-google text-dark mr-2"}," "),i.a.createElement("span",null,"net.rajivbas@gmail.com")," "),i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-home text-dark mr-2"}," "),i.a.createElement("span",null,"Jackson Heights, NY 11372")," ")))))))}}]),a}(c.Component);t.default=h},54:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(43),m=a(37),u=a(35),d=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{backgroundColor:"#ffffff"}},i.a.createElement(s.a,null,i.a.createElement("footer",null," ",i.a.createElement(m.a,null," ",i.a.createElement(u.a,null,i.a.createElement("div",{className:"d-flex justify-content-center text-secondary"},i.a.createElement("p",null," \xa9 2020 Rajiv Basnet. All Rights Reserved"))))))))}}]),a}(c.Component);t.default=d},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=[{_id:"1",title:"Instagram",link:"https://www.instagram.com/razeevbasnet/",icon_class:"fa fa-instagram"},{_id:"2",title:"Linkedin",link:"https://www.linkedin.com/in/razeevbasnet/",icon_class:"fa fa-linkedin"},{_id:"3",title:"Github",link:"https://github.com/rajivbasnet/",icon_class:"fa fa-github"}];function r(){return n}},58:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=[{_id:"5",title:"Replication and Extension of 'Predicting the Present with Google Trends' by Choi and Varian",tools:["R (dplyer, tidyverse, plotly)"],github:"https://github.com/msr-ds3/predicting-the-present-2020-group-3",description:"Reproduced the first part of the research paper; performed time-series analysis and K-fold cross validation to extend the investigation by examining alternative models and forecasting on longer horizons",imgsrc:"./images/projects/predicting.png"},{_id:"4",title:"Hand Tracking and Finger Detection",tools:["Python","Scikit-Learn","OpenCV"],github:"https://github.com/rajivbasnet/gesture-mapped-functions",description:"Explored available CNN technologies and SVMs in order to detect human hand on a live camera and to track its motion/gesture; implemented a simple application of writing on screen",imgsrc:"./images/projects/handtracking.png"},{_id:"3",title:"Video Renting App Prototype",tools:["React.js","MongoDB"],github:"https://github.com/rajivbasnet/vidly-frontend",description:"Built a software prototype to allow users to view movies to rent; implemented sorting techniques, JWT authorizations, and Sentry API for monitoring",imgsrc:"./images/projects/videorenting.png"},{_id:"2",title:"Stock Analysis with Quantmod",tools:["R (Quantmod)"],github:"https://github.com/rajivbasnet/quantmod-stock-analysis",description:"Used Quantmod and Quandl packages to analyze common indicators such as MACD, RSI, DMI to predict profitable investment in three companies",imgsrc:"./images/projects/quantmod.png"},{_id:"1",title:"Library Search System",tools:["Java","MySQL"],github:"https://github.com/rajivbasnet/SWEngineeringProjectMorganMuseum",description:"Designed database structure, MVC pattern and DFDs to develop a software prototype that was able to give details directions to the items in a library; Followed SDLC to implement the design with JAVA",imgsrc:"./images/projects/librarysearch.png"},{_id:"0",title:"Others",projects:[{title:"Let\u2019s Make a Deal",tools:"PHP, Heroku",website:"http://letsmakeadeal.herokuapp.com/"},{title:"Casino Craps",tools:"PHP, Heroku",website:"http://casinocraps.herokuapp.com/"},{title:"Database Replication Tool",tools:"Python, SQLAlchemy",github:"https://github.com/rajivbasnet/db-rep-tool"}],imgsrc:"./images/projects/others.png"}];function r(){return n}},59:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n={resume:"https://drive.google.com/file/d/1zW01IMAZdXdyqZO28rNv3AR6cHvecOL6/view?usp=sharing"};function r(){return n}},64:function(e,t,a){e.exports=a.p+"static/media/bgimage1.b39ffa38.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/profilepic.41ad06aa.jpg"},86:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),l=a(9),c=a(0),i=a.n(c),s=a(12),m=a(38),u=a(59),d=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={links:Object(u.a)(),backgroundColor:"#ffffff",color:"#0f1115"},e.navItems=[{_id:"1",itemName:"ABOUT ME",href:"#aboutme",to:"/aboutme"},{_id:"2",itemName:"PROJECTS",href:"#projects",to:"/projects"},{_id:"3",itemName:"RESUME",href:e.state.links.resume,to:"resume"},{_id:"4",itemName:"CONTACT",href:"#contact",to:"/contact"}],e.checkLink=function(e){var t="";return"RESUME"===e.itemName&&(t="_blank"),t},e.listenScrollEvent=function(t){window.scrollY>400?e.setState({backgroundColor:"#22252a",color:"#ffffff"}):e.setState({backgroundColor:"#ffffff",color:"#0f1115"})},e.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e.getNavItems=function(t){return i.a.createElement(s.a.Link,{key:t._id,href:t.href,to:t.to,target:e.checkLink(t),style:{color:e.state.color}},t.itemName)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){var e=this,t=this.navItems;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{collapseOnSelect:!0,expand:"md",sticky:"top",id:"navbar-bottom",className:"navbar-bottom",style:{backgroundColor:this.state.backgroundColor}},i.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(s.a,{className:"mr-auto"},t.map((function(t){return e.getNavItems(t)}))),i.a.createElement(s.a,{className:"justify-content-end"},i.a.createElement(s.a.Link,{onClick:this.scrollToTop},i.a.createElement("i",{className:"fa fa-home","aria-hidden":"true",style:{color:this.state.color,fontSize:"20px"}}))),i.a.createElement(s.a,null,i.a.createElement(s.a.Link,{href:"#deets"})))))}}]),a}(c.Component);t.default=d},88:function(e,t,a){"use strict";a.r(t);var n=a(66),r=a.n(n),o=a(93),l=a(94),c=a(7),i=a(8),s=a(40),m=a(10),u=a(9),d=a(0),f=a.n(d),p=a(43),h=a(37),g=a(35),b=a(101),E=a(25),v=a(166),y=a(100),j=a(167),k=a(29),w=a(52),C=a(36),x=a.n(C);x.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||k.toast.error("Unexpected error occurred!"),Promise.reject(e)}));var N={get:x.a.get,post:x.a.post,put:x.a.put,delete:x.a.delete},O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).showModal=function(){n.setState({showmodal:!0})},n.hideModal=function(){n.setState({showmodal:!1})},n.handleReset=function(e){n.setState({name:"",email:"",subject:"",message:""})},n.handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,o,l,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state,o=a.name,l=a.email,c=a.subject,i=a.message,t.preventDefault(),!(n.isNullOrEmpty(o)||n.isNullOrEmpty(l)||n.isNullOrEmpty(c)||n.isNullOrEmpty(i))){e.next=6;break}k.toast.error("Please make sure that all the fields are correctly filled in!"),e.next=8;break;case 6:return e.next=8,N.post("/api/contactform",{name:o,email:l,subject:c,message:i}).then((function(e){n.setState({showmodal:!0}),n.handleReset()})).catch((function(e){k.toast.error("Sorry, something went wrong. Please try again or send me a direct email!")}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={name:"",email:"",subject:"",message:"",showmodal:!1},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"isNullOrEmpty",value:function(e){return!e||!e.trim()}},{key:"render",value:function(){var e=this;return f.a.createElement(f.a.Fragment,null,f.a.createElement(p.a,{id:"contact"},f.a.createElement(h.a,null,f.a.createElement(g.a,null,f.a.createElement("p",{className:"h5 lead font-weight-bold text-center",style:{color:"#000000"}}," ","CONTACT ME"," ")," ")),f.a.createElement("hr",{className:"my-4"}),f.a.createElement(h.a,{className:"justify-content-center"}," ",f.a.createElement(b.a,null,f.a.createElement(E.a,{style:{backgroundColor:"#f8f9fa",marginBottom:"20px"}},f.a.createElement(E.a.Body,null,f.a.createElement(v.a,{show:this.state.showmodal,handleClose:this.hideModal},f.a.createElement(v.a.Header,null,f.a.createElement(v.a.Title,null,"Message Sent!")),f.a.createElement(v.a.Body,null,"Thank you for your message. I will try getting back to you ASAP."),f.a.createElement(y.a,{variant:"secondary mt-4",onClick:function(){return e.setState({showmodal:!1})}},"Close")),f.a.createElement(j.a,{onSubmit:this.handleSubmit,name:"form"},f.a.createElement(j.a.Group,{controlId:"exampleForm.ControlInput1"},f.a.createElement(j.a.Label,null,"Your Name"),f.a.createElement(j.a.Control,{type:"text",name:"name",value:this.state.name,placeholder:"Name",onChange:this.handleChange})),f.a.createElement(j.a.Group,{controlId:"exampleForm.ControlInput1"},f.a.createElement(j.a.Label,null,"Your Email"),f.a.createElement(j.a.Control,{type:"email",name:"email",value:this.state.email,placeholder:"name@example.com",onChange:this.handleChange})),f.a.createElement(j.a.Group,{controlId:"exampleForm.ControlInput1"},f.a.createElement(j.a.Label,null,"Subject"),f.a.createElement(j.a.Control,{type:"text",name:"subject",value:this.state.subject,placeholder:"Subject",onChange:this.handleChange})),f.a.createElement(j.a.Group,{controlId:"exampleForm.ControlTextarea1"},f.a.createElement(j.a.Label,null,"Your Message"),f.a.createElement(j.a.Control,{type:"textarea",as:"textarea",name:"message",value:this.state.message,rows:"3",onChange:this.handleChange})),f.a.createElement(j.a.Group,{controlId:"exampleForm.ControlTextarea1"},f.a.createElement(y.a,{variant:"secondary mr-2",type:"submit",name:"submit"},"Submit"),f.a.createElement(y.a,{variant:"secondary",type:"reset",name:"reset",onClick:this.handleReset},"Clear"))))),f.a.createElement(w.default,null)))))}}]),a}(d.Component);t.default=O}},[[102,1,2]]]);
//# sourceMappingURL=main.1ff16a81.chunk.js.map