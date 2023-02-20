(function(){"use strict";var e={637:function(e,t,n){var i=n(9242),a=n(2483),o=n(3396);n(8052);const r={class:"navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm",id:"mainNav"},s={class:"container px-5"},l=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Uk)(" Menu "),(0,o._)("i",{class:"bi-list"})],-1),c={class:"collapse navbar-collapse",id:"navbarResponsive"},d={class:"navbar-nav ms-auto me-4 my-3 my-lg-0"},u={class:"nav-item"},m={class:"nav-item"};function f(e,t){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",r,[(0,o._)("div",s,[(0,o.Wm)(n,{class:"navbar-brand fw-bold",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("NEMO")])),_:1}),l,(0,o._)("div",c,[(0,o._)("ul",d,[(0,o._)("li",u,[(0,o.Wm)(n,{class:"nav-link me-lg-3",to:"/aboutus"},{default:(0,o.w5)((()=>[(0,o.Uk)("About Us")])),_:1})]),(0,o._)("li",m,[(0,o.Wm)(n,{class:"nav-link me-lg-3",to:"/contribute"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contribute")])),_:1})])])])])])}var p=n(89);const g={},v=(0,p.Z)(g,[["render",f]]);var h=v;const b={class:"container"},_=(0,o.uE)('<footer class="py-3 my-4" data-v-201206f8><ul class="nav justify-content-center border-bottom pb-3 mb-3" data-v-201206f8><li class="nav-item" data-v-201206f8><a href="https://github.com/SayBender/Nemo" target="_blank" data-v-201206f8><img src="/github.svg" class="icon_custom" alt="" data-v-201206f8></a></li><li class="nav-item" data-v-201206f8><a href="https://www.mdpi.com/2072-4292/14/16/3979" target="_blank" data-v-201206f8><img src="/publication.png" class="icon_custom" alt="" data-v-201206f8></a></li></ul><p class="text-center text-muted" data-v-201206f8>© 2022 UNR - Senior Project - Team 15</p></footer>',1),w=[_];function y(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("div",b,w)}var k={name:"nemo_footer"};const D=(0,p.Z)(k,[["render",y],["__scopeId","data-v-201206f8"]]);var j=D,C={__name:"App",setup(e){return(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(h),(0,o.Wm)(n),(0,o.Wm)(j)])}}};const U=C;var F=U;const x={class:"Home"};function A(e,t,n,i,a,r){const s=(0,o.up)("About");return(0,o.wg)(),(0,o.iD)("div",x,[(0,o.Wm)(s)])}const N=e=>((0,o.dD)("data-v-763f3e84"),e=e(),(0,o.Cn)(),e),O={class:"bg-white"},S={class:"container px-5 mt-custom"},T={class:"row gx-5 align-items-center justify-content-center justify-content-lg-between"},W={class:"col-12 col-lg-5"},P=N((()=>(0,o._)("h2",{class:"display-6 lh-1 mb-5"},"Wildfire Smoke Detection",-1))),R=N((()=>(0,o._)("p",{class:"lead fw-normal text-muted mb-5 mb-lg-0"}," The Nemo wildfire smoke detection benchmark is a set of evolving preprocessed datasets in standard COCO format and pretrained wildfire smoke detectors based on Facebook AI's DETR that aims to detect wildfire in incipient stage (especially the first few minutes from start of wildfire). This model is created for object detection. It has a CNN backbone along with encoder-decoder transformers. It also uses bipartite matching loss function. ",-1))),E=(0,o.uE)('<div class="col-sm-8 col-md-6" data-v-763f3e84><figure data-v-763f3e84><img alt="..." class="img-thumbnail mt-5" src="/CaughlinRanch_PineHaven_fire_Nov2020.png" data-v-763f3e84><figcaption class="figure-caption mt-3" data-v-763f3e84><b data-v-763f3e84>Figure 1:</b> Annotated frame with confirmed flame detection. </figcaption></figure><figure data-v-763f3e84><img alt="..." class="img-thumbnail mt-5" src="/TumbleWeed_fire_CA_2021Jul.png" data-v-763f3e84><figcaption class="figure-caption mt-3" data-v-763f3e84><b data-v-763f3e84>Figure 2:</b> Annotated frame with confirmed fire detection. </figcaption></figure></div>',1);function I(e,t,n,i,a,r){const s=(0,o.up)("UploadFiles");return(0,o.wg)(),(0,o.iD)("section",O,[(0,o._)("div",S,[(0,o._)("div",T,[(0,o._)("div",W,[P,R,(0,o.Wm)(s)]),E])])])}var M=n(7139);const Z=e=>((0,o.dD)("data-v-5a845aee"),e=e(),(0,o.Cn)(),e),H={class:"card mt-5",style:{width:"auto"}},Y={class:"card-body"},z=Z((()=>(0,o._)("h5",{class:"card-title"},"Upload Files",-1))),L=Z((()=>(0,o._)("div",null,[(0,o._)("img",{alt:"",class:"upload-icon",src:"/upload-icon.png"})],-1))),B=Z((()=>(0,o._)("label",{class:"",for:"fileInput"},[(0,o._)("span",null,[(0,o.Uk)("Drag and Drop or "),(0,o._)("u",{class:"choose-file-button"},"choose files")])],-1))),q={key:0},K={class:"container border-1 shadow-sm mt-3"},J={width:"100%"},$={rowspan:"2"},G=["src"],Q={rowspan:"2",align:"right"},V=["onClick"],X=Z((()=>(0,o._)("img",{alt:"",class:"custom_thumbnail",src:"/red_x.png"},null,-1))),ee=Z((()=>(0,o._)("tr",null,[(0,o._)("td",null," Success!!!! ")],-1))),te={class:"container bg-light"};function ne(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("div",Y,[z,(0,o._)("div",{class:"dropzone-container",onDragleave:t[1]||(t[1]=(...e)=>r.dragleave&&r.dragleave(...e)),onDragover:t[2]||(t[2]=(...e)=>r.dragover&&r.dragover(...e)),onDrop:t[3]||(t[3]=(...e)=>r.drop&&r.drop(...e))},[(0,o._)("input",{id:"fileInput",ref:"file",accept:".gif, .jpeg, .jpg, .mkv, .mov, .mp4, .mpeg, .png",class:"hidden-input",multiple:"",name:"file",type:"file",onChange:t[0]||(t[0]=(...e)=>r.handleFileUpload&&r.handleFileUpload(...e))},null,544),L,B],32),a.files.length?((0,o.wg)(),(0,o.iD)("div",q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.files,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.name},[(0,o._)("div",K,[(0,o._)("table",J,[(0,o._)("tr",null,[(0,o._)("td",$,[(0,o._)("img",{alt:"",class:"custom_thumbnail",src:a.icons[e.name.split(".").pop()]},null,8,G),(0,o.Uk)("  ")]),(0,o._)("td",null,(0,M.zw)(e.name)+" ",1),(0,o._)("td",null,(0,M.zw)(Math.round(e.size/1e3)+"Kb")+" ",1),(0,o._)("td",Q,[(0,o._)("button",{class:"remove-file-button",type:"button",onClick:t=>r.removeFile(a.files.indexOf(e))},[X,(0,o.Uk)("  ")],8,V)])]),ee])])])))),128)),(0,o._)("div",te,[(0,o._)("button",{class:"run-button",type:"button",onClick:t[4]||(t[4]=(...e)=>r.submitFiles&&r.submitFiles(...e))}," Run ")])])):(0,o.kq)("",!0)])])}var ie=n(5939),ae={data(){return{isDragging:!1,files:[],icons:{gif:"/gif-icon.png",jpg:"/jpeg-icon.png",jpeg:"/jpeg-icon.png",mkv:"/mkv-icon.png",mov:"/mov-icon.png",mp4:"/mp4-icon.png",mpeg:"/mpeg-icon.png",png:"/png-icon.png"}}},methods:{dragover(e){e.preventDefault(),this.isDragging=!0},dragleave(){this.isDragging=!1},drop(e){e.preventDefault(),this.$refs.file.files=e.dataTransfer.files,this.handleFileUpload(),this.isDragging=!1},handleFileUpload(){this.files=[...this.$refs.file.files]},removeFile(e){this.files.splice(e,1)},submitFiles(){console.log("The Run Button Was pressed."),ie.Z.post("https://nemo-backend.herokuapp.com/",{firstName:"Ben",lastName:"Kenobi"}).then((e=>console.log(e))).catch((e=>console.log(e)))}}};const oe=(0,p.Z)(ae,[["render",ne],["__scopeId","data-v-5a845aee"]]);var re=oe,se={name:"About",components:{UploadFiles:re}};const le=(0,p.Z)(se,[["render",I],["__scopeId","data-v-763f3e84"]]);var ce=le,de={name:"Home",components:{About:ce}};const ue=(0,p.Z)(de,[["render",A]]);var me=ue;const fe=(0,o.uE)("<h1>Nemo Interface: Wildfire Smoke Detection</h1><h3>CS 426 Senior Project, Spring 2023, Computer Science and Engineering at University of Nevada Reno</h3><h3>Team #15---Curtis Burchfield---Ian Ayers---Michael Moosmuller</h3><h4>Instructors---David Feil-Seifer---Devrin Lee</h4><h4>Advisors---Dr.Lei Yang---Amirhesam Yazdi</h4><p>Dr. Lei Yang: Associate Professor at UNR in Computer Science and Engineering</p><p>Amirhesam Yazdi: PhD graduate in Computer Science and Engineering, under advisement from Dr. Fnen Yan and Dr. Lei Yang </p><h2>Abstract</h2><p>Deep-learning (DL) based object detection algorithms are beneficial to areas of climate science involving wildfire prevention, observation, and intelligence. As wildfires become more prevalent, the need for advanced techniques in processing video feeds has become crucial for smoke detection. Existing DL-based techniques have been developed based on convolution networks and are proven to be effective in wildfire detection. However, these datasets are primarily commercial and/or closed-sourced. One of the few open-source models is Nemo, a benchmark for fine-grained wildfire smoke detection in the incipient stage of a wildfire. Using this model as a basis, our team intends to collaborate with its authors to build a convenient user interface and refined data preprocessing for accurately detecting wildfire smoke in adverse weather or nighttime conditions.</p><h3>Project Related Resources</h3><h5>Nemo Github: https://github.com/SayBender/Nemo</h5><h5>Nemo Research Paper: https://www.mdpi.com/2072-4292/14/16/3979/htm</h5>",12),pe=[fe];function ge(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("div",null,pe)}var ve={name:"AboutUs"};const he=(0,p.Z)(ve,[["render",ge]]);var be=he;const _e={class:"bg-white"},we={class:"container px-5 mt-custom"},ye={class:"row gx-5 align-items-center justify-content-center justify-content-lg-between"},ke={class:"col-12 col-lg-5"},De=(0,o._)("h2",{class:"display-6 lh-1 mb-5"},"Contribute",-1),je=(0,o._)("p",{class:"lead fw-normal text-muted mb-5 mb-lg-0"}," The Nemo wildfire smoke detection system is hoping to expand and improve over time. We could use any assistance in furthering the devolopment of Nemo. We are accepting labeled data to help improve our model. Please upload your labeled data for us to use to further train the Nemo model. Thank you ",-1),Ce=(0,o.uE)('<div class="col-sm-8 col-md-6"><figure><img alt="..." class="img-thumbnail mt-5" src="/CaughlinRanch_PineHaven_fire_Nov2020.png"><figcaption class="figure-caption mt-3"><b>Figure 1:</b> Annotated frame with confirmed flame detection. </figcaption></figure><figure><img alt="..." class="img-thumbnail mt-5" src="/TumbleWeed_fire_CA_2021Jul.png"><figcaption class="figure-caption mt-3"><b>Figure 2:</b> Annotated frame with confirmed fire detection. </figcaption></figure></div>',1);function Ue(e,t,n,i,a,r){const s=(0,o.up)("UploadFiles");return(0,o.wg)(),(0,o.iD)("section",_e,[(0,o._)("div",we,[(0,o._)("div",ye,[(0,o._)("div",ke,[De,je,(0,o.Wm)(s)]),Ce])])])}var Fe={name:"Contribute",components:{UploadFiles:re}};const xe=(0,p.Z)(Fe,[["render",Ue]]);var Ae=xe;const Ne=(0,a.p7)({history:(0,a.PO)(),routes:[{path:"/",name:"Home",component:me},{path:"/aboutus",name:"AboutUs",component:be},{path:"/contribute",name:"Contribute",component:Ae}]});(0,i.ri)(F).use(Ne).mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],o=e[d][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self["webpackChunknemo_frontend"]=self["webpackChunknemo_frontend"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(637)}));i=n.O(i)})();
//# sourceMappingURL=app.bf0fab80.js.map