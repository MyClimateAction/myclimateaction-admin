(this["webpackJsonpmyclimateaction-admin"]=this["webpackJsonpmyclimateaction-admin"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),i=a.n(o),r=(a(15),a(9)),l=a(1),s=a(2),u=a(4),m=a(3),d=a(5),h=(a(16),a(17),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={tokenString:""},a.onTypeChange=function(e){a.setState({tokenString:e.target.value})},a.handleSubmit=function(e){a.props.onAccess(a.state.tokenString),e.preventDefault()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{className:"Auth-container",onSubmit:this.handleSubmit},c.a.createElement("label",{className:"Auth-item"},"My climate action admin"),c.a.createElement("input",{className:"Auth-item",onChange:this.onTypeChange,type:"password",placeholder:"Enter auth token"}),c.a.createElement("button",{className:"Auth-item",type:"submit",id:"submit"},"Access"))}}]),t}(n.Component)),p=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"TopBar-container"},c.a.createElement("h2",{className:"TopBar-item"},"actions"),c.a.createElement("h1",{className:"TopBar-item"},"MYCLIMATEACTION"),c.a.createElement("button",{className:"TopBar-item",onClick:this.props.logout},"logout"))}}]),t}(n.Component)),f=a(6),E=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleEdit=function(){a.setState((function(e){return{isEdit:!e.isEdit}}))},a.modifyAction=function(e,t,n,c){var o={name:t,picture_url:n,frequency:c};a.props.modifyAction(e,o),a.handleEdit()},a.handleUpdateValue=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(f.a)({},n,t))},a.state={isEdit:!1,name:"",picture_url:"",frequency:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({isEdit:!1,name:this.props.name,picture_url:this.props.picture_url,frequency:this.props.frequency})}},{key:"render",value:function(){var e=this;return c.a.createElement("tr",{key:this.props.id},this.state.isEdit&&c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{className:"rowTd"},c.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleUpdateValue})),c.a.createElement("td",{className:"rowTd"},c.a.createElement("select",{name:"frequency",value:this.state.frequency,onChange:this.handleUpdateValue},c.a.createElement("option",{value:"Daily"},"Daily"),c.a.createElement("option",{value:"Weekly"},"Weekly"),c.a.createElement("option",{value:"Monthly"},"Monthly"))),c.a.createElement("td",{className:"rowTd"},c.a.createElement("input",{type:"text",name:"picture_url",value:this.state.picture_url,onChange:this.handleUpdateValue})),c.a.createElement("td",{className:"rowTd"},this.props.votes),c.a.createElement("td",{className:"rowTd"},c.a.createElement("button",{onClick:function(){return e.modifyAction(e.props.id,e.props.name,e.props.picture_url,e.props.frequency)}},"Done"))),!this.state.isEdit&&c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{className:"rowTd"},this.state.name),c.a.createElement("td",{className:"rowTd"},this.state.frequency),c.a.createElement("td",{className:"rowTd"},this.state.picture_url),c.a.createElement("td",{className:"rowTd"},this.state.votes),c.a.createElement("td",{className:"rowTd"},c.a.createElement("button",{onClick:this.handleEdit},"Edit")),c.a.createElement("td",{className:"rowTd"},c.a.createElement("button",{onClick:function(){return e.props.deleteAction(e.props.id)}},"X"))))}}]),t}(n.Component)),y=(a(20),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleUpdateValue=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(f.a)({},n,t))},a.state={name:"",picture_url:"",frequency:"Daily"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"popup"},c.a.createElement("button",{onClick:this.props.closePopup},"close me"),c.a.createElement("div",{className:"popup\\_inner"},c.a.createElement("form",{className:"",onSubmit:this.props.addAction},c.a.createElement("label",{className:""},"Add an Action"),c.a.createElement("input",{className:"",name:"name",value:this.state.name,onChange:this.handleUpdateValue,type:"text",placeholder:"Enter a name",required:!0}),c.a.createElement("select",{name:"frequency",value:this.state.frequency,onChange:this.handleUpdateValue},c.a.createElement("option",{value:"Daily"},"Daily"),c.a.createElement("option",{value:"Weekly"},"Weekly"),c.a.createElement("option",{value:"Monthly"},"Monthly"),"required"),c.a.createElement("input",{className:"",name:"picture_url",value:this.state.picture_url,onChange:this.handleUpdateValue,type:"text",placeholder:"Enter an image url",required:!0}),c.a.createElement("button",{className:"",type:"submit",id:"submit"},"Add action!"))))}}]),t}(c.a.Component)),b=(a(21),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).returnTableData=function(){var e,t=a.props.data;return e=t.length?t.map((function(e){return c.a.createElement(E,{key:e.id,id:e.id,name:e.title,frequency:e.frequency,picture_url:e.picture_url,votes:10,modifyAction:a.props.modifyAction,deleteAction:a.props.deleteAction})})):c.a.createElement("tr",null,c.a.createElement("td",null,"No data")),c.a.createElement("table",{className:"Actions-List"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"Actions-tr"},c.a.createElement("td",{className:"rowTd"},"Name"),c.a.createElement("td",{className:"rowTd"},"Frequency"),c.a.createElement("td",{className:"rowTd"},"Image"),c.a.createElement("td",{className:"rowTd"},"Votes"),c.a.createElement("td",{className:"rowTd"},"Edit"),c.a.createElement("td",{className:"rowTd"},"Delete"))),c.a.createElement("tbody",null,e))},a.togglePopup=function(){a.setState({showPopup:!a.state.showPopup})},a.state={actions:[],showPopup:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,this.returnTableData(this.state.actions),c.a.createElement("button",{onClick:this.togglePopup},"Add an Action"),this.state.showPopup?c.a.createElement(y,{closePopup:this.togglePopup,addAction:this.props.addAction}):null)}}]),t}(n.Component)),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).checkAuth=function(t){e.fetchAuth(t)},e.fetchAuth=function(t){return fetch("".concat("https://myclimateaction.azurewebsites.net","/auth"),{headers:{authorization:t}}).then((function(a){if(!a.ok)throw e.setState({token:void 0}),alert("Invalid auth token"),Error(a.statusText);e.setState({token:t}),localStorage.setItem("token",t),e.fetchData()})).catch((function(t){throw e.setState({token:void 0}),alert("Invalid auth token"),Error(t.message)}))},e.fetchData=function(){fetch("".concat("https://myclimateaction.azurewebsites.net","/actions")).then((function(e){return e.json()})).then((function(t){console.log("fetching"),e.setState({actions:t.data,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data.",e)}))},e.postAction=function(){return console.log("post Action! "),fetch("".concat("https://myclimateaction.azurewebsites.net","/action"),{headers:{"Content-type":"application/json",authorization:"MyClimateActionAdmin2019!"},method:"POST",body:JSON.stringify({title:"new action",frequency:"daily",picture_url:"http://123.com"})}).then((function(e){return e.json()})).then(console.log("pass log")).catch((function(e){console.error(e)}))},e.deleteAction=function(t){return fetch("".concat("https://myclimateaction.azurewebsites.net","/action/").concat(t),{method:"DELETE",headers:{"Content-type":"application/json",authorization:e.state.token}}).then((function(e){return e.ok&&console.log("DELETE!"),e.json()})).catch((function(e){console.error(e)}))},e.handleLogout=function(){localStorage.removeItem("token"),e.setState({actions:[],token:void 0})},e.handleAddAction=function(t,a,n){e.setState((function(c){return{actions:[].concat(Object(r.a)(c.actions),[e.createActionObject(t,a,n)])}}))},e.handleModifyAction=function(t,a){var n;return e.setState((function(e){(n=e.actions).id===t&&(n.name=a.name,n.picture_url=a.picture_url,n.frequency=a.frequency)})),{actions:n}},e.handleDeleteAction=function(t){e.setState((function(e){return{actions:e.actions.filter((function(e){return e.id!==t}))}})),e.deleteAction(t)},e.createActionObject=function(e,t,a){return{title:e,picture_url:t,frequency:a}},e.state={actions:[],token:void 0,loading:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");e&&this.fetchAuth(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},!this.state.token&&c.a.createElement("div",{className:"Content"},c.a.createElement(h,{onAccess:this.checkAuth})),this.state.token&&c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{logout:this.handleLogout}),c.a.createElement("div",{className:"Content"},c.a.createElement("h2",null,"Manage actions"),this.state.loading?c.a.createElement("p",null,"Loading..."):c.a.createElement(b,{data:this.state.actions,addAction:this.postAction,modifyAction:this.handleModifyAction,deleteAction:this.handleDeleteAction}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.9fef89ec.chunk.js.map