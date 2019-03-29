(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(62)},58:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),i=a.n(l),c=a(67),o=a(2),s=a(3),u=a(5),m=a(4),p=a(6),h=a(69),d=a(64),g=a(19),b=a(66),E=a(14),f=a.n(E),v=new(function(){function e(){Object(o.a)(this,e),this.auth=f.a.create({baseURL:"https://tripandgo2.herokuapp.com",withCredentials:!0})}return Object(s.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.phoneNumber,r=e.name;return this.auth.post("/auth/signup",{username:t,password:a,phoneNumber:n,name:r}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(e){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),j=r.a.createContext(),O=j.Provider,y=j.Consumer,C=function(e){return function(t){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(y,null,function(a){return r.a.createElement(e,Object.assign({isLogged:a.isLogged,user:a.user,logout:a.logout,login:a.login,signup:a.signup},t.props))})}}]),a}(n.Component)},w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLogged:!1,user:{},status:"loading"},a.setUser=function(e){a.setState({isLogged:!0,user:e})},a.logoutUser=function(){return v.logout().then(function(){a.setState({isLogged:!1,user:{}})}).catch(function(e){return console.log(e)})},a.loginUser=function(e){return v.login(e).then(function(e){a.setUser(e)}).catch(function(e){return console.log(e)})},a.signupUser=function(e){return v.signup(e).then(function(e){a.setUser(e)}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.me().then(function(t){e.setState({isLogged:!0,user:t,status:"loaded"})}).catch(function(t){e.setState({isLogged:!1,user:{},status:"loaded"})})}},{key:"render",value:function(){var e=this.state,t=e.isLogged,a=e.user,n=e.status,l=this.props.children;switch(n){case"loading":return r.a.createElement("div",null,"Loading");default:return r.a.createElement(O,{value:{isLogged:t,user:a,logout:this.logoutUser,login:this.loginUser,signup:this.signupUser}},l)}}}]),t}(n.Component),k=C(function(e){var t=e.component,a=e.isLogged,n=Object(g.a)(e,["component","isLogged"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),N=C(function(e){var t=e.component,a=e.isLogged,n=Object(g.a)(e,["component","isLogged"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(b.a,{to:{pathname:"/trips",state:{from:e.location}}}):r.a.createElement(t,e)}}))}),x=a(65),S=C(function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLogged,a=e.user;e.logout,a.username;return t?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement(x.a,{to:"/login"},"Login"),r.a.createElement(x.a,{to:"/signup"},"Signup"))}}]),t}(n.Component)),L=a(11),T=C(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",name:"",phoneNumber:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.name,l=a.state.phoneNumber;a.props.signup({username:t,password:n,name:r,phoneNumber:l}).then(function(){a.setState({username:"",password:"",name:"",phoneNumber:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.name,l=e.phoneNumber;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Nombre y apellidos"),r.a.createElement("input",{type:"text",name:"name",value:n,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Direcci\xf3n de correo electr\xf3nico:"),r.a.createElement("input",{type:"email",name:"username",value:t,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"N\xfamero de tel\xe9fono"),r.a.createElement("input",{type:"number",name:"phoneNumber",value:l,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(x.a,{to:"/login"}," Login")))}}]),t}(n.Component)),I=C(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r}).then(function(){}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Direcci\xf3n de correo electr\xf3nico:"),r.a.createElement("input",{type:"email",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Login"}))}}]),t}(n.Component)),R=a(13),F=a.n(R),P=a(18),D=C(function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"text-align-center"},r.a.createElement(x.a,{to:"/trips",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/search.png",alt:"search",className:"size-5vh"}),r.a.createElement("p",null,"Explorar"))),r.a.createElement("div",{className:"text-align-center"},r.a.createElement(x.a,{to:"/favs",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/like.png",alt:"like",className:"size-5vh"}),r.a.createElement("p",null,"Guardados"))),r.a.createElement("div",{className:"text-align-center"},r.a.createElement(x.a,{to:"/trips/new",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/world.png",alt:"world",className:"size-5vh"}),r.a.createElement("p",null,"Crear viaje"))),r.a.createElement("div",{className:"text-align-center"},r.a.createElement(x.a,{to:"/mytrips",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/airplane.png",alt:"airplane",className:"size-5vh"}),r.a.createElement("p",null,"Mis viajes"))),r.a.createElement("div",{className:"text-align-center"},r.a.createElement(x.a,{to:"/profile/me",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/user.png",alt:"user",className:"size-5vh"}),r.a.createElement("p",null,"Perfil"))))}}]),t}(n.Component));console.log("https://tripandgo2.herokuapp.com");var A=new(function(){function e(){Object(o.a)(this,e),this.trip=f.a.create({baseURL:"https://tripandgo2.herokuapp.com",withCredentials:!0})}return Object(s.a)(e,[{key:"create",value:function(e){var t=e.title,a=e.description,n=e.itinerary,r=e.date,l=e.dateInit,i=e.ageRange,c=e.numberPersons;return this.trip.post("/trip",{title:t,description:a,itinerary:n,date:r,dateInit:l,ageRange:i,numberPersons:c}).then(function(e){return e.data})}},{key:"edit",value:function(e,t){console.log(e,t);var a=t.title,n=t.description,r=t.itinerary,l=t.date,i=t.dateInit,c=t.ageRange,o=t.numberPersons;return this.trip.put("/trip/".concat(e,"/edit"),{title:a,description:n,itinerary:r,date:l,dateInit:i,ageRange:c,numberPersons:o}).then(function(e){return e.data})}},{key:"getAll",value:function(){return this.trip.get("/trip").then(function(e){return e.data})}},{key:"getMyTrips",value:function(){return this.trip.get("/trip/mytrips").then(function(e){return e.data})}},{key:"getOne",value:function(e){return console.log(e),this.trip.get("/trip/".concat(e)).then(function(e){return e.data})}},{key:"deleteOne",value:function(e){return this.trip.delete("/trip/".concat(e)).then(function(e){return e.data})}}]),e}()),U=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,r.a.createElement(x.a,{to:"/trips/".concat(e._id)},r.a.createElement("img",{width:"60px",src:"http://tifositours.com/wp-content/uploads/2019/02/Barcelona.jpg",alt:"image"})),r.a.createElement("p",null,e.date),r.a.createElement("p",null,e.dateInit),r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.itinerary),r.a.createElement("p",null,e.ageRange))}}]),t}(n.Component),M=C(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getTripList=Object(P.a)(F.a.mark(function e(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getAll().then(function(e){a.setState({data:e})});case 2:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTripList()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",null,r.a.createElement("h1",null,"Viajes mas populares"),e.map(function(e){return r.a.createElement(U,{data:e})}),r.a.createElement(D,null))}}]),t}(n.Component)),z=a(68),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",itinerary:"",date:"",dateInit:"",ageRange:"18-25",numberPersons:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.title,n=a.state.description,r=a.state.itinerary,l=a.state.date,i=a.state.dateInit,c=a.state.ageRange,o=a.state.numberPersons;A.create({title:t,description:n,itinerary:r,date:l,dateInit:i,ageRange:c,numberPersons:o}).then(function(e){a.props.history.push("/trips/".concat(e._id))}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.itinerary,l=e.date,i=e.dateInit,c=e.ageRange,o=e.numberPersons;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\xa1Crea tu propio viaje!"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Introduce el t\xedtulo de tu viaje"),r.a.createElement("input",{type:"text",name:"title",value:t,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Descripci\xf3n:"),r.a.createElement("textarea",{name:"description",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"Itinerario:"),r.a.createElement("input",{type:"text",name:"itinerary",value:n,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Fecha Inicio:"),r.a.createElement("input",{type:"date",name:"dateInit",value:i,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Fecha Fin:"),r.a.createElement("input",{type:"date",name:"date",value:l,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Rango de edad:"),r.a.createElement("select",{value:c,name:"ageRange",onChange:this.handleChange},r.a.createElement("option",{value:"18-25"},"18-25"),r.a.createElement("option",{value:"25-30"},"25-30"),r.a.createElement("option",{value:"30-40"},"30-40"),r.a.createElement("option",{value:"40-50"},"40-50"),r.a.createElement("option",{value:"+50"},"+50")),r.a.createElement("label",null,"N\xfamero m\xe1ximo de personas:"),r.a.createElement("input",{type:"number",name:"numberPersons",value:o,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("input",{type:"submit",value:"Crear viaje"})))}}]),t}(n.Component),_=Object(z.a)(B),J=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-top"},r.a.createElement("div",null,r.a.createElement("p",{onClick:this.props.history.goBack},r.a.createElement("img",{src:"/images/right-arrow.png",alt:"arrow-left",className:"size-5vh arrow-back"})))),r.a.createElement(_,{history:this.props}))}}]),t}(n.Component),G=Object(z.a)(J),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:a.props.trip.title,description:a.props.trip.description,itinerary:a.props.trip.itinerary,date:a.props.trip.date,dateInit:a.props.trip.dateInit,ageRange:a.props.trip.ageRange,numberPersons:a.props.trip.numberPersons},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.title,n=a.state.description,r=a.state.itinerary,l=a.state.date,i=a.state.dateInit,c=a.state.ageRange,o=a.state.numberPersons;A.edit(a.props.trip._id,{title:t,description:n,itinerary:r,date:l,dateInit:i,ageRange:c,numberPersons:o}).then(function(){a.props.history.goBack()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.itinerary,l=e.date,i=e.dateInit,c=e.ageRange,o=e.numberPersons;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Editar viaje"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Introduce el t\xedtulo de tu viaje"),r.a.createElement("input",{type:"text",name:"title",value:t,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Descripci\xf3n:"),r.a.createElement("textarea",{name:"description",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"Itinerario:"),r.a.createElement("input",{type:"text",name:"itinerary",value:n,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Fecha Inicio:"),r.a.createElement("input",{type:"date",name:"dateInit",value:i,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Fecha Fin:"),r.a.createElement("input",{type:"date",name:"date",value:l,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Rango de edad:"),r.a.createElement("select",{value:c,name:"ageRange",onChange:this.handleChange},r.a.createElement("option",{value:"18-25"},"18-25"),r.a.createElement("option",{value:"25-30"},"25-30"),r.a.createElement("option",{value:"30-40"},"30-40"),r.a.createElement("option",{value:"40-50"},"40-50"),r.a.createElement("option",{value:"+50"},"+50")),r.a.createElement("label",null,"N\xfamero m\xe1ximo de personas:"),r.a.createElement("input",{type:"number",name:"numberPersons",value:o,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("input",{type:"submit",value:"Editar viaje"})))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,data:{}},a.componentDidMount=function(){a.getTrip()},a.getTrip=function(){var e=a.props.match.params.id;A.getOne(e).then(function(e){a.setState({data:e,isLoading:!1})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data;switch(e.isLoading){case!0:return"loading...";case!1:return r.a.createElement("div",null,r.a.createElement("h1",null,"TripsEdit"),r.a.createElement(V,{trip:t,history:this.props.history}))}}}]),t}(n.Component),H=C(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],message:""},a.handleDelete=function(e){e.preventDefault(),A.deleteOne(a.props.match.params.id).then(function(e){a.setState({message:e}),a.props.history.goBack()})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;A.getOne(this.props.match.params.id).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data;return console.log(this.props),r.a.createElement("div",null,r.a.createElement("h1",null,"TripDetail"),r.a.createElement("img",{width:"60px",src:"http://tifositours.com/wp-content/uploads/2019/02/Barcelona.jpg",alt:"image"}),r.a.createElement("p",null,e.date),r.a.createElement("p",null,e.dateInit),r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.itinerary),r.a.createElement("p",null,e.ageRange),e.owner===this.props.user._id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.handleDelete},"Eliminar")," ",r.a.createElement(x.a,{to:"/trips/".concat(e._id,"/edit")},"Editar")),r.a.createElement(D,null))}}]),t}(n.Component)),K=C(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getTripList=Object(P.a)(F.a.mark(function e(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getMyTrips().then(function(e){a.setState({data:e})});case 2:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTripList()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",null,r.a.createElement("h1",null,"Mis viajes"),e.map(function(e){return r.a.createElement(U,{data:e})}),r.a.createElement(D,null))}}]),t}(n.Component)),Q=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"TripFavs"),r.a.createElement(D,null))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-top"},r.a.createElement("div",null,r.a.createElement("p",{onClick:this.props.history.goBack},r.a.createElement("img",{src:"/images/right-arrow.png",alt:"arrow-left",className:"size-5vh arrow-back"})))),r.a.createElement("h1",null,"Profile"))}}]),t}(n.Component),X=Object(z.a)(W),Y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile Edit"))}}]),t}(n.Component),Z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 - page not found"))}}]),t}(n.Component),$=(a(58),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(N,{exact:!0,path:"/",component:S}),r.a.createElement(N,{exact:!0,path:"/signup",component:T}),r.a.createElement(N,{exact:!0,path:"/login",component:I}),r.a.createElement(k,{exact:!0,path:"/trips",component:M}),r.a.createElement(k,{exact:!0,path:"/trips/new",component:G}),r.a.createElement(k,{exact:!0,path:"/trips/:id",component:H}),r.a.createElement(k,{exact:!0,path:"/trips/:id/edit",component:q}),r.a.createElement(k,{exact:!0,path:"/mytrips",component:K}),r.a.createElement(k,{exact:!0,path:"/favs",component:Q}),r.a.createElement(k,{exact:!0,path:"/profile/me/edit",component:Y}),r.a.createElement(k,{exact:!0,path:"/profile/me",component:X}),r.a.createElement(k,{exact:!0,path:"/profile/:id",component:X}),r.a.createElement(d.a,{component:Z}))))}}]),t}(n.Component));a(60);i.a.render(r.a.createElement(c.a,null,r.a.createElement($,null)),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.5c71602f.chunk.js.map