(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),o=a(12),l=a.n(o),c=a(13),s=a.n(c),i=(a(16),a(14)),m=a.n(i);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return a=n=u(this,e.call.apply(e,[this].concat(o))),n.state={email:"",commentbody:"",commentsubmitted:""},n.handlechange=function(e){var t;n.setState(((t={})[e.target.id]=e.target.value,t))},n.handlesubmit=function(e){e.preventDefault(),m.a.post("http://localhost:1116/newcomment",{postID:n.props.postid,email:n.state.email,commentbody:n.state.commentbody}).then(function(e){1==e.data?n.setState({commentsubmitted:!0}):(n.setState({error:e.data}),console.log(n.state.error),n.state.error&&(Materialize.toast(n.state.error,3e3,"red rounded"),n.setState({error:""})))})},u(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.state.commentsubmitted?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},this.state.email),r.a.createElement("p",null,this.state.commentbody)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.handlesubmit,className:"col s8"},r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"left-align"},r.a.createElement("input",{id:"email",type:"email",className:"validate",required:!0,"aria-required":"true",onChange:this.handlechange}),r.a.createElement("label",{htmlFor:"email"},"Email"))),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"commentbody",className:"materialize-textarea",required:!0,onChange:this.handlechange}),r.a.createElement("label",{htmlFor:"commentbody"},"Textarea")),r.a.createElement("div",{className:"left-align"},"  ",r.a.createElement("input",{type:"submit",value:"Send",className:"btn"})))))},t}(r.a.Component);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return a=n=p(this,e.call.apply(e,[this].concat(o))),n.state={comments:[]},p(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;m.a.get("http://localhost:1116/comments/"+this.props.postid).then(function(t){e.setState({comments:t.data})})},t.prototype.render=function(){var e=this.state.comments,t=e.length?e.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card col s8 z-depth-4",style:{padding:"0px"},key:e._id},r.a.createElement("div",{className:"card blue-grey darken-4 darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},e.email),r.a.createElement("span",{style:{fontSize:"11px",marginLeft:"10px"}},e.time.replace("T"," ").substring(0,19)),r.a.createElement("p",null,e.commentbody)))),r.a.createElement("div",{className:"col s4"}))}):r.a.createElement("div",{className:"center"});return r.a.createElement("div",{className:"container"},t)},t}(r.a.Component);function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return a=n=h(this,e.call.apply(e,[this].concat(o))),n.state={posts:[],thereIsApost:!1,post:"",postid:""},n.setpost=function(e){n.setState({postid:e}),n.setState({thereIsApost:!0}),m.a.get("http://localhost:1115/post/"+e).then(function(e){n.setState({post:e.data[0],postid:e.data[0]._id})})},n.backhome=function(){n.setState({thereIsApost:!1})},h(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;m.a.get("http://localhost:1115/posts").then(function(t){e.setState({posts:t.data})})},t.prototype.render=function(){var e=this,t=this.state.posts,a=t.length?t.map(function(t){return r.a.createElement("div",{className:"card",key:t._id},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},r.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){e.setpost(t._id)}},t.title)),r.a.createElement("span",{style:{fontSize:"11px",marginLeft:"10px"}},t.date.replace("T"," ").substring(0,19)),r.a.createElement("span",{className:"right"},t.writer),r.a.createElement("p",null,t.body))))}):r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m12"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"}),r.a.createElement("p",null,"No posts yet!!")),r.a.createElement("div",{className:"card-action"})))));return this.state.thereIsApost?r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},this.state.post.title),r.a.createElement("span",{style:{fontSize:"11px",marginLeft:"10px"}},this.state.post.date),r.a.createElement("span",{className:"right"},this.state.post.writer),r.a.createElement("p",null,this.state.post.body)))),r.a.createElement(d,{postid:this.state.post._id}),r.a.createElement(f,{postid:this.state.postid}),r.a.createElement("a",{className:"btn-floating btn-large waves-effect waves-light red",onClick:this.backhome},r.a.createElement("i",{className:"material-icons"},"home"))):r.a.createElement("div",null,a)},t}(r.a.Component),y=a(63);function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return a=n=b(this,e.call.apply(e,[this].concat(o))),n.state={posts:[],thereIsApost:!1,post:"",postid:"",hover:!1,editapost:!1,title:"",body:"",edited:!1,postdeleted:!1},n.getCookie=function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2==t.length)return t.pop().split(";").shift()},n.setpost=function(e){n.setState({postid:e}),n.setState({thereIsApost:!0}),m.a.get("http://localhost:1115/post/"+e).then(function(e){n.setState({post:e.data[0],postid:e.data[0]._id,title:e.data[0].title,body:e.data[0].body})})},n.backhome=function(){location.reload()},n.hoverOn=function(){n.setState({hover:!0})},n.hoverOff=function(){n.setState({hover:!1})},n.handleedit=function(){var e={"Content-Type":"application/json",Authorization:"Bearer "+n.getCookie("jwt")};m.a.put("http://localhost:1115/editpost/"+n.state.postid.toString(),{title:n.state.title,body:n.state.body},{headers:e}).then(function(e){n.setState({edited:!0}),setTimeout(function(){location.reload()},2e3)})},n.handlechange=function(e){var t;n.setState(((t={})[e.target.id]=e.target.value,t))},n.editpost=function(){n.setState({editapost:!0})},n.deletepost=function(){Object(y.confirmAlert)({message:"Are you sure to delete this post?",buttons:[{label:"Yes",onClick:function(){var e={"Content-Type":"application/json",Authorization:"Bearer "+n.getCookie("jwt")};m.a.delete("http://localhost:1115/deleteapost/"+n.state.postid.toString(),{headers:e}).then(function(e){console.log("post has been deleted"),Materialize.toast("Post has been deleted",1e3,"red rounded"),setTimeout(function(){location.reload()},1e3)})}},{label:"No"}]})},b(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this,t={"Content-Type":"application/json",Authorization:"Bearer "+this.getCookie("jwt")};m.a.get("http://localhost:1115/allpostsbyuser",{headers:t}).then(function(t){e.setState({posts:t.data})})},t.prototype.render=function(){var e=this,t=this.state.posts,a=t.length?t.map(function(t){return r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:t._id},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},r.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){e.setpost(t._id)}},t.title)),r.a.createElement("span",{style:{fontSize:"11px",marginLeft:"10px"}},t.date.replace("T"," ").substring(0,19)),r.a.createElement("span",{className:"right"},t.writer),r.a.createElement("p",null,t.body)))))}):r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m12"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"}),r.a.createElement("p",null,"No posts yet!!")),r.a.createElement("div",{className:"card-action"})))));return this.state.editapost?this.state.edited?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card-panel center"},r.a.createElement("h5",{className:"center green-text"},"Post Edited!"),r.a.createElement("h6",{className:"center green-text"},":)")))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card-panel center"},r.a.createElement("i",{className:"medium material-icons"},"edit"),r.a.createElement("h5",{className:"center black-text"},"Edit The Post"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card-panel center"},r.a.createElement("form",{onSubmit:this.handlesubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"title",id:"title",defaultValue:this.state.post.title,onChange:this.handlechange}),r.a.createElement("label",{htmlFor:"title",className:"active"},"Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{name:"body",id:"body",className:"materialize-textarea",defaultValue:this.state.post.body,onChange:this.handlechange}),r.a.createElement("label",{htmlFor:"body",className:"active"},"Post Content")),r.a.createElement("div",{className:"left-align"},"  ",r.a.createElement("input",{type:"button",onClick:this.handleedit,value:"Edit",className:"btn"})))))):this.state.thereIsApost?r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text",onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff},r.a.createElement("span",{className:"card-title"},this.state.post.title),r.a.createElement("span",{style:{fontSize:"11px",marginLeft:"10px"}},this.state.post.date),r.a.createElement("span",{className:"right"},this.state.post.writer),r.a.createElement("p",null,this.state.post.body),r.a.createElement("br",null),this.state.hover?r.a.createElement("div",null,r.a.createElement("i",{className:" material-icons useroptioncolor",onClick:this.deletepost},"delete"),r.a.createElement("i",{className:" material-icons useroptioncolor",onClick:this.editpost},"mode_edit")):r.a.createElement("div",null)))),r.a.createElement(d,{postid:this.state.post._id}),r.a.createElement(f,{postid:this.state.postid}),r.a.createElement("a",{className:"btn-floating btn-large waves-effect waves-light red",onClick:this.backhome},r.a.createElement("i",{className:"material-icons"},"home"))):r.a.createElement("div",null,a)},t}(r.a.Component);function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var N=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return a=n=g(this,e.call.apply(e,[this].concat(o))),n.state={email:document.cookie||"",islogged:""},n.setemail=function(e){n.setState({email:n.state.email.concat(e)},function(){var e=new Date;e.setTime(e.getTime()+6e4),window.document.cookie="email="+n.state.email+"; expires="+e.toGMTString()})},n.getCookie=function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2==t.length)return t.pop().split(";").shift()},g(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.state.email?r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("div",{className:"welcomemsgparent"},r.a.createElement("h4",{className:"welcomemsg"},"Welcome ",this.getCookie("email")),r.a.createElement("div",{className:"fade_rule"})),r.a.createElement(v,null)):r.a.createElement("div",{className:"container"},r.a.createElement(E,null))},t}(r.a.Component);a.d(t,"bootstrap",function(){return C}),a.d(t,"mount",function(){return k}),a.d(t,"unmount",function(){return _});var w=s()({React:r.a,ReactDOM:l.a,rootComponent:N,domElementGetter:function(){return document.getElementById("home")}}),C=[w.bootstrap],k=[w.mount],_=[w.unmount]},63:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.7");var a=document.createElementNS(e,"filter");a.setAttribute("id","gaussian-blur"),a.appendChild(t);var n=document.createElementNS(e,"svg");n.setAttribute("id","react-confirm-alert-firm-svg"),n.setAttribute("class","react-confirm-alert-svg"),n.appendChild(a),document.body.appendChild(n)}(),function(e){var t=document.getElementById("react-confirm-alert");t?(0,i.render)(c.default.createElement(d,e),t):(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t),(0,i.render)(c.default.createElement(d,e),t))}(e)};var l=a(10),c=m(l),s=m(a(17)),i=a(12);function m(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=(r=n=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return a=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.handleClickButton=function(e){e.onClick&&e.onClick(),n.close()},n.handleClickOverlay=function(e){e.target===n.overlay&&n.close()},n.close=function(){var e,t;document.body.classList.remove("react-confirm-alert-body-element"),e=document.getElementById("react-confirm-alert"),(0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e),(t=document.getElementById("react-confirm-alert-firm-svg")).parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur")},n.keyboardClose=function(e){27===e.keyCode&&n.close()},n.componentDidMount=function(){document.addEventListener("keydown",n.keyboardClose,!1)},n.componentWillUnmount=function(){document.removeEventListener("keydown",n.keyboardClose,!1),n.props.willUnmount()},n.renderCustomUI=function(){var e=n.props,t=e.title,a=e.message;return(0,e.customUI)({title:t,message:a,onClose:n.close})},u(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.message,r=t.buttons,o=t.childrenElement,l=t.customUI;return c.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},c.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():c.default.createElement("div",{className:"react-confirm-alert-body"},a&&c.default.createElement("h1",null,a),n,o(),c.default.createElement("div",{className:"react-confirm-alert-button-group"},r.map(function(t,a){return c.default.createElement("button",{key:a,onClick:function(){return e.handleClickButton(t)}},t.label)})))))}}]),t}(),n.propTypes={title:s.default.string,message:s.default.string,buttons:s.default.array.isRequired,childrenElement:s.default.func,customUI:s.default.func,willUnmount:s.default.func},n.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null}},{label:"Confirm",onClick:function(){return null}}],childrenElement:function(){return null},willUnmount:function(){return null}},r);t.default=d}}]);
//# sourceMappingURL=4.js.map