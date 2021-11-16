(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),o=(a(18),a(31),a(8)),i=a(15),l=a(7),u=(a(32),a(33),a(1)),d=function(){var e=JSON.parse(window.localStorage.getItem("user")).name;return Object(u.jsxs)("nav",{className:"navbar bg-light",children:[Object(u.jsx)("div",{id:"nav-username",children:Object(u.jsx)("h3",{children:e})}),Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsxs)(i.b,{exact:!0,activeClassName:"active",className:"nav-link",to:"/",children:["Welcome to BadBank",Object(u.jsx)("span",{className:"tooltiptext",children:" Home page/Account Information "})]}),Object(u.jsxs)(i.b,{activeClassName:"active",className:"nav-link ms-auto",to:"/deposit/",children:["Deposit",Object(u.jsx)("span",{className:"tooltiptext",children:"Deposit cash from your account. "})]}),Object(u.jsxs)(i.b,{activeClassName:"active",className:"nav-link",to:"/withdraw/",children:["Withdraw",Object(u.jsx)("span",{className:"tooltiptext",children:"Withdraw cash from your account. "})]}),Object(u.jsxs)(i.b,{activeClassName:"active",className:"nav-link",to:"/logout/",children:["Logout",Object(u.jsx)("span",{className:"tooltiptext",children:"Logout of your account. "})]})]})]})};var j=a(6),b=a.n(j),p=a(9),h=a(48),m=a(49);a(17);var O=function(){var e=JSON.parse(window.localStorage.getItem("user")),t=e.name,a=e.email,n=e.balance;function r(e){return c.apply(this,arguments)}function c(){return(c=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/home",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var s=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"YES"===prompt("This will permanently delete your account. Type YES to confirm.")&&(console.log("delete"),t.preventDefault(),r({email:a}),sessionStorage.removeItem("token"),localStorage.removeItem("user"),window.location.reload(),window.location.href="/");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("reset"),t.preventDefault(),window.location.href=window.location+"changePwd";case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(h.a,{className:"bg-dark text-white",border:"light",children:[Object(u.jsx)(h.a.Img,{src:"./bank.jpg",alt:"Banking image"}),Object(u.jsxs)(h.a.ImgOverlay,{children:[Object(u.jsx)(h.a.Title,{className:"title",children:"Welcome To BadBank"}),Object(u.jsx)(h.a.Text,{className:"text",children:"Thank you for trusting us with your banking needs!"}),Object(u.jsxs)("div",{className:"user-home",children:[Object(u.jsxs)(h.a.Text,{children:["Username: ",t]}),Object(u.jsxs)(h.a.Text,{children:["Balance: $",n]}),Object(u.jsxs)(h.a.Text,{children:[Object(u.jsx)("div",{children:Object(u.jsx)(m.a,{onClick:o,children:"Reset password"})}),Object(u.jsx)("div",{children:Object(u.jsx)(m.a,{onClick:s,children:"Permanently close this Account."})})]})]})]})]})},x=a(47),f=a(46);function g(e){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return e}));case 2:if(a=e.sent,a.user,"ok"!==a.status){e.next=11;break}return console.log("Got the token: ",a.data),console.log("Got user: ",a.user),alert("You have successfully logged in"),n=a.data,localStorage.setItem("user",JSON.stringify(a.user)),e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}));case 2:"ok"===(a=e.sent).status?(alert("You have successfully created an account"),window.location.reload(),alert("Please login to your newly created account")):alert(a.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){var t=e.setToken,a=Object(n.useState)(),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(),l=Object(o.a)(i,2),d=l[0],j=l[1],O=Object(n.useState)(),w=Object(o.a)(O,2),y=w[0],k=w[1],N=function(){var e=Object(p.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log("clicked login in"),e.next=4,g({email:c,password:d});case 4:void 0!==(n=e.sent)?(t(n),console.log(n),window.location.reload()):alert("invalid email or password, please try again or create an account");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("clicked signed up"),v({name:y,email:c,password:d,balance:0});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(h.a,{bgcolor:"primary",header:"Login",children:[Object(u.jsx)(h.a.Img,{src:"./bank.jpg",alt:"Banking image"}),Object(u.jsxs)(h.a.ImgOverlay,{children:[Object(u.jsx)(h.a.Title,{className:"title",children:"Welcome To BadBank"}),Object(u.jsx)(h.a.Text,{className:"text",children:"Let us help you with all your banking needs!"}),Object(u.jsxs)("div",{className:"spacer",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{className:"container-login",children:[Object(u.jsx)(h.a.Header,{children:" Login "}),Object(u.jsx)(h.a.Body,{children:Object(u.jsxs)(x.a,{className:"acc-form",onSubmit:N,children:[Object(u.jsxs)(x.a.Group,{className:"mb-3-email",children:[Object(u.jsx)(x.a.Label,{children:" Email address "}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"email",placeholder:"email@address.com",required:!0,id:"email",onChange:function(e){return s(e.target.value)}})})]}),Object(u.jsxs)(x.a.Group,{className:"mb-3-password",children:[Object(u.jsx)(x.a.Label,{children:"Password"}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"password",placeholder:"password",required:!0,id:"password",onChange:function(e){return j(e.target.value)}})})]}),Object(u.jsx)(m.a,{as:"input",type:"submit",value:"Login"})]})})]}),Object(u.jsx)("div",{className:"spacer",children:Object(u.jsx)("br",{})}),Object(u.jsxs)("div",{className:"container-create",children:[Object(u.jsx)(h.a.Header,{children:" Create An Account "}),Object(u.jsx)(h.a.Body,{children:Object(u.jsxs)(x.a,{className:"acc-form",onSubmit:S,children:[Object(u.jsxs)(x.a.Group,{className:"mb-3-name",children:[Object(u.jsx)(x.a.Label,{className:"name-label",children:"Enter Full Name"}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"text",placeholder:"Enter Name",required:!0,id:"name",onChange:function(e){return k(e.target.value)}})})]}),Object(u.jsxs)(x.a.Group,{className:"mb-3-email",children:[Object(u.jsx)(x.a.Label,{children:" Email address "}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"email",placeholder:"email@address.com",required:!0,id:"email",onChange:function(e){return s(e.target.value)}})})]}),Object(u.jsxs)(x.a.Group,{className:"mb-3-password",children:[Object(u.jsx)(x.a.Label,{children:"Password"}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"password",placeholder:"password",required:!0,id:"password",onChange:function(e){return j(e.target.value)}})}),Object(u.jsx)(x.a.Text,{className:"text-muted",children:"Password must contain at least 8 characters."})]}),Object(u.jsx)(m.a,{as:"input",type:"submit",value:"Create Account"})]})})]})]})]})}var N=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)("0"),j=Object(o.a)(d,2),O=j[0],g=j[1],w=JSON.parse(window.localStorage.getItem("user")),v=w.balance,y=w.email;console.log(v+" userbalance");var k=Object(n.useContext)(P);k.balance=v;var N=k.balance;function S(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/deposit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=a){e.next=5;break}return alert("Please enter how much you would like to deposit"),r(0),l(!1),e.abrupt("return");case 5:k.updateBalance(a,"ADD"),t.preventDefault(),n=parseInt(O)+parseInt(a),g(n.toString()),N=k.balance,console.log(N),alert("Deposit was a success! Account Balance is now: $"+k.balance),w.balance=k.balance,localStorage.setItem("user",JSON.stringify(w)),t.preventDefault(),console.log("balance "+N+" email "+y),S({email:y,status:N});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(h.a,{bgcolor:"primary",header:"Deposit",children:[Object(u.jsx)(h.a.Img,{src:"./bank.jpg",alt:"Banking image"}),Object(u.jsx)(h.a.ImgOverlay,{children:Object(u.jsxs)("div",{className:"money-card",children:[Object(u.jsx)(h.a.Header,{children:" Deposit "}),Object(u.jsx)(h.a.Body,{children:Object(u.jsxs)(x.a,{onSubmit:C,children:[Object(u.jsxs)(x.a.Group,{className:"mb-3",controlId:"deposit amount",children:[Object(u.jsxs)("h3",{children:[" Account Balance: $ ",N," "]}),Object(u.jsx)(x.a.Label,{children:" Please enter the amount you would like to deposit. "}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"number",placeholder:"$0",min:"0",onChange:function(e){l(!0),r(e.target.value)}})})]}),Object(u.jsx)(m.a,{as:"input",type:"submit",disabled:!i,value:"Deposit"})]})})]})})]})};var S=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)("0"),j=Object(o.a)(d,2),O=j[0],g=j[1],w=JSON.parse(window.localStorage.getItem("user")),v=w.balance,y=w.email;console.log(v+" userbalance");var k=Object(n.useContext)(P);k.balance=v;var N=k.balance;function S(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/withdraw",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNaN(a)){e.next=5;break}return alert("Please enter valid number to withdraw, cannot include non-number values."),r(0),l(!1),e.abrupt("return");case 5:if(!(a<0)){e.next=10;break}return alert("Please enter valid number to withdraw, cannot include negative numbers."),r(0),l(!1),e.abrupt("return");case 10:a>N?alert("Withdraw amount cannot exceed account balance."):(k.updateBalance(a,"MINUS"),t.preventDefault(),n=parseInt(O)-parseInt(a),g(n.toString()),N=k.balance,console.log(N),alert("Your withdraw was successful. Account Balance is now: $"+k.balance),w.balance=k.balance,localStorage.setItem("user",JSON.stringify(w)),t.preventDefault(),console.log("balance "+N+" email "+y),S({email:y,status:N}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(h.a,{bgcolor:"primary",header:"Withdraw",status:N,children:[Object(u.jsx)(h.a.Img,{src:"./bank.jpg",alt:"Banking image"}),Object(u.jsx)(h.a.ImgOverlay,{children:Object(u.jsxs)("div",{className:"money-card",children:[Object(u.jsx)(h.a.Header,{children:" Withdraw "}),Object(u.jsx)(h.a.Body,{children:Object(u.jsxs)(x.a,{onSubmit:C,children:[Object(u.jsxs)(x.a.Group,{className:"mb-3",controlId:"withdraw amount",children:[Object(u.jsxs)("h3",{children:[" Account Balance: $ ",N," "]}),Object(u.jsx)(x.a.Label,{children:" Please enter the amount you would like to withdraw. "}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"number",placeholder:"$0",min:"0",onChange:function(e){l(!0),r(e.target.value)}})})]}),Object(u.jsx)(m.a,{as:"input",type:"submit",disabled:!i,value:"Make Withdraw"})]})})]})})]})};var I=function(){var e=JSON.parse(window.localStorage.getItem("user")),t=e.name,a=e.balance;return Object(u.jsxs)(h.a,{bgcolor:"primary",header:"Deposit",children:[Object(u.jsx)(h.a.Img,{src:"./bank.jpg",alt:"Banking image"}),Object(u.jsxs)(h.a.ImgOverlay,{children:[Object(u.jsxs)("div",{className:"user-home",children:[Object(u.jsxs)(h.a.Text,{children:["Username: ",t]}),Object(u.jsxs)(h.a.Text,{children:["Balance: $",a]})]}),Object(u.jsx)("div",{className:"message",children:Object(u.jsx)(h.a.Header,{children:" Thank you for your business. "})}),Object(u.jsx)(h.a.Body,{children:Object(u.jsx)(m.a,{onClick:function(){console.log("logged out"),sessionStorage.removeItem("token"),localStorage.removeItem("user"),window.location.reload(),window.location.href="/"},children:"Click here to confirm logout."})})]})]})};function C(e){return T.apply(this,arguments)}function T(){return(T=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/changePwd",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),s=Object(o.a)(c,2),i=s[0],l=s[1],d=JSON.parse(window.localStorage.getItem("user")).email,j=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("reset"),t.preventDefault(),a.length<8&&alert("Passwords have to be at least 8 characters"),a!==i?alert("Entered Passwords do not match"):(alert("successfully changed password"),C({email:d,password:a}),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(h.a,{className:"bg-dark text-white",border:"light",children:[Object(u.jsx)(h.a.Img,{src:"./bank.jpg",alt:"Banking image"}),Object(u.jsxs)(h.a.ImgOverlay,{children:[Object(u.jsx)(h.a.Title,{className:"title",children:"Welcome To BadBank"}),Object(u.jsx)(h.a.Text,{className:"text",children:"Thank you for trusting us with your banking needs!"}),Object(u.jsxs)("div",{className:"user-home",children:[Object(u.jsxs)(x.a.Group,{className:"mb-3-password",children:[Object(u.jsx)(x.a.Label,{children:"Password"}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"password",placeholder:"enter new password",required:!0,id:"current-password",onChange:function(e){return r(e.target.value)}})}),Object(u.jsx)(f.a,{children:Object(u.jsx)(x.a.Control,{type:"password",placeholder:"re-enter new password",required:!0,id:"new-password",onChange:function(e){return l(e.target.value)}})})]}),Object(u.jsx)(h.a.Text,{children:Object(u.jsx)("div",{children:Object(u.jsx)(m.a,{onClick:j,children:"Reset password"})})})]})]})]})}var P=Object(n.createContext)();var D=function(){var e=Object(n.useState)({users:"peter",updateUsers:function(e){a.users=e},email:"peter@mit.edu",updateEmail:function(e){a.email=e},password:"secret",updatePassword:function(e){a.password=e},balance:100,updateBalance:function(e,t){"ADD"===t&&(a.balance=parseInt(e)+a.balance,r(a),console.log(a.balance));"MINUS"===t&&(a.balance=a.balance-parseInt(e),r(a),console.log(a.balance))}}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(n.useState)(sessionStorage.getItem("token")),t=Object(o.a)(e,2),a=t[0],r=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),r(e.token)},token:a}}(),s=c.token,j=c.setToken;return s?Object(u.jsxs)(i.a,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(P.Provider,{value:a,children:Object(u.jsxs)("div",{className:"container",style:{padding:"20px"},children:[Object(u.jsx)(l.a,{path:"/",exact:!0,component:O}),Object(u.jsx)(l.a,{path:"/changePwd/",component:B}),Object(u.jsx)(l.a,{path:"/deposit/",component:N}),Object(u.jsx)(l.a,{path:"/withdraw/",component:S}),Object(u.jsx)(l.a,{path:"/logout/",component:I})]})})]}):Object(u.jsx)(k,{setToken:j})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.43c9df3f.chunk.js.map