(this["webpackJsonppost21-front"]=this["webpackJsonppost21-front"]||[]).push([[0],{115:function(e,t,a){e.exports=a(528)},120:function(e,t,a){},527:function(e,t,a){},528:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=(a(120),a(49)),l=a(13),s=a(36),u=a.n(s),m=a(50),p=a(577),d=a(572),h=a(570),f=a(574),g=a(571),v=a(576),E=a(567),b=a(573),y=a(575),S=a(100),C=a.n(S),O=a(103),w=a(568),j=a(569),k=(a(71),a(14)),x=a(64),T=a(20),I=function(e){var t=Object(n.useState)({}),a=Object(T.a)(t,2),r=a[0],o=a[1];return{handleSubmit:function(t){t&&t.preventDefault(),e()},handleInputChange:function(e){e.persist(),o((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(k.a)({},e.target.name,e.target.value))}))},inputs:r}},W=a(43),A=a.n(W),N=a(44),_=a.n(N),K=_()(A.a);function P(){return r.a.createElement(O.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"https://material-ui.com/"},"Post-21"),"/",(new Date).getFullYear(),".")}var D=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function R(){var e=D(),t=Object(l.f)();function a(){return(a=Object(m.a)(u.a.mark((function e(){var t,a,n,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var n=I((function(){try{(function(){return a.apply(this,arguments)})("https://post21plus.herokuapp.com/api/auth",o).then((function(e){"OK"===e.status?(console.log(e),localStorage.setItem("token",e.token),t.push("/feed")):K.fire({icon:"Check again :)",title:"Not a valid e-mail or password"})}))}catch(e){}})),o=n.inputs,i=n.handleInputChange,c=n.handleSubmit;return r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement(h.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(p.a,{className:e.avatar},r.a.createElement(C.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,onSubmit:c,noValidate:!0},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:i,value:o.email,autoFocus:!0}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:i,value:o.password}),r.a.createElement(g.a,{control:r.a.createElement(v.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0},r.a.createElement(E.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(y.a,{mt:8},r.a.createElement(P,null)))}var B=a(45),V=a.n(B);a(130).config();var q=a(133);q.config=new q.Config,q.config.accessKeyId="AKIAWBTM6OXBHSGJ3RPR",q.config.secretAccessKey="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",q.config.region="us-east-2",q.config.apiVersions={s3:"2006-03-01"},console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_S3_KEY:"AKIAWBTM6OXBHSGJ3RPR",REACT_APP_S3_SECRET:"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"}));var H=_()(A.a);function J(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],o=t[1];function i(){return(i=Object(m.a)(u.a.mark((function e(){var t,a,n,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var c=I((function(){!function(e){new q.S3.ManagedUpload({params:{Bucket:"dionibucket",Key:e.name,Body:e,ACL:"public-read"}}).promise().then((function(e){console.log("Successfully uploaded photo.")}),(function(e){return alert("There was an error uploading your photo: ",e.message)}))}(a);try{l.token=localStorage.getItem("token"),function(){return i.apply(this,arguments)}("https://post21plus.herokuapp.com/api/user/post",l).then((function(e){"OK"===e.status?(console.log(e),H.fire({icon:"success",title:e.message,showConfirmButton:!1,timer:1500})):H.fire({icon:"Something is worng :(",title:e.message})}))}catch(e){}})),l=c.inputs,s=c.handleInputChange,p=c.handleSubmit;return r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(O.a,{component:"h4",variant:"h5"},"Upload the image")),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement("input",{type:"file",id:"file",name:"file",accept:"image/png, image/jpeg",onChange:function(e){o(e.target.files[0]);var t=V()(localStorage.getItem("token")).email;l.email=t,l.image=e.target.files[0].name}}),r.a.createElement("form",{onSubmit:p},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",onChange:s,value:l.title,autoFocus:!0}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"content",label:"Content",name:"content",onChange:s,value:l.content,multiline:!0}),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Send!")))))}function M(){return r.a.createElement(J,null)}var X=a(57),F=a(29),L=a(102),U=a(101),G=(a(527),function(e){Object(L.a)(a,e);var t=Object(U.a)(a);function a(e){var n;return Object(X.a)(this,a),(n=t.call(this,e)).state={status:void 0},n}return Object(F.a)(a,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("token"),t=V()(e).exp,a=(t*=1e3)>=Date.now();this.setState({status:a})}catch(n){this.setState({status:!1})}}},{key:"render",value:function(){return void 0===this.state.status?r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))):(!0!==this.state.status&&this.props.history.push("/"),this.props.children)}}]),a}(n.Component)),Y=Object(l.g)(G);var $=function(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:R}),r.a.createElement(Y,null,r.a.createElement(l.a,{path:"/feed",exact:!0,component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t){},71:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.77ffaa1d.chunk.js.map