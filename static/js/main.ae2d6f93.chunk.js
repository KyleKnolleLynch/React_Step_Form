(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),i=(a(101),a(12)),o=a(13),s=a(15),u=a(14),m=a(16),p=(a(102),a(95)),h=a(24),b=a.n(h),f=a(25),y=a.n(f),E=a(18),v=a.n(E),d=a(26),g=a.n(d),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{title:"Enter User Details"}),r.a.createElement(v.a,{hintText:"Enter First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Last Name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Company",floatingLabelText:"Company",onChange:a("company"),defaultValue:t.company}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Continue",primary:!0,style:C.button,onClick:this.continue})))}}]),t}(n.Component),C={button:{margin:15}},S=x,j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.reverse=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{title:"Enter Personal Details"}),r.a.createElement(v.a,{hintText:"Enter City Name",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter State",floatingLabelText:"State",onChange:a("currentState"),defaultValue:t.currentState}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio,multiLine:!0}),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Continue",primary:!0,style:O.button,onClick:this.continue}),r.a.createElement(g.a,{label:"Back",secondary:!0,style:O.button,onClick:this.reverse})))}}]),t}(n.Component),O={button:{margin:15}},T=j,N=a(19),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.reverse=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.company,l=e.email,c=e.city,i=e.currentState,o=e.bio;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{title:"Comfirm Data is Correct"}),r.a.createElement(N.List,null,r.a.createElement(N.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement(N.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement(N.ListItem,{primaryText:"Company",secondaryText:n}),r.a.createElement(N.ListItem,{primaryText:"Email",secondaryText:l}),r.a.createElement(N.ListItem,{primaryText:"City",secondaryText:c}),r.a.createElement(N.ListItem,{primaryText:"State",secondaryText:i}),r.a.createElement(N.ListItem,{primaryText:"Bio",secondaryText:o})),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Confirm and Continue",primary:!0,style:k.button,onClick:this.continue}),r.a.createElement(g.a,{label:"Back",secondary:!0,style:k.button,onClick:this.reverse})))}}]),t}(n.Component),k={button:{margin:15}},w=L,D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.values.firstName;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{title:"Success!"}),r.a.createElement("h2",null,"Congratulations ",e,", you have successfully signed up.")))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",company:"",email:"",city:"",currentState:"",bio:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(p.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,company:t.company,email:t.email,city:t.city,currentState:t.currentState,bio:t.bio};switch(e){case 1:return r.a.createElement(S,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(T,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(w,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(D,{values:a});default:return r.a.createElement(S,{nextStep:this.nextStep,handleChange:this.handleChange,values:a})}}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(238)}},[[96,1,2]]]);
//# sourceMappingURL=main.ae2d6f93.chunk.js.map