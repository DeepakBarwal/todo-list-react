(this["webpackJsonpreact-crash-todo"]=this["webpackJsonpreact-crash-todo"]||[]).push([[0],{32:function(t,e,n){t.exports=n(60)},59:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(29),c=n.n(r),l=n(18),i=n(7),d=n(8),u=n(10),s=n(9),p=n(13),m=n(1),f=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,o.a.createElement("button",{style:h,onClick:this.props.delTodo.bind(this,e)},"x")))}}]),n}(a.Component),h={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},b=f,v=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(b,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),n}(o.a.Component),y=n(30),E=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onChange=function(e){return t.setState(Object(y.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(a.Component);function g(){return o.a.createElement("div",null,o.a.createElement("header",{style:j},o.a.createElement("h1",null,"TodoList"),o.a.createElement(p.b,{style:k,to:"/"},"Home")," ","|"," ",o.a.createElement(p.b,{style:k,to:"/about"},"About")))}var j={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},k={color:"#fff",textDecoration:"none"};function O(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"Todo List v1.0.0"))}var x=n(14),C=n.n(x),S=(n(59),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(g,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{addTodo:t.addTodo}),o.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(o.a.Component));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.744e8192.chunk.js.map