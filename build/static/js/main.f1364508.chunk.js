(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){},176:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(78),o=a.n(i),l=a(185),s=a(4),c=a(5),u=a(7),m=a(6),p=a(8),h=a(187),d=a(182),g=a(46),f=a(184),b=a(28),v=a.n(b),E=new(function(){function e(){Object(s.a)(this,e),this.auth=v.a.create({baseURL:"https://tripandgo2.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.phoneNumber,r=e.name;return this.auth.post("/auth/signup",{username:t,password:a,phoneNumber:n,name:r}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(e){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),y=r.a.createContext(),j=y.Provider,O=y.Consumer,N=function(e){return function(t){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(O,null,function(a){return r.a.createElement(e,Object.assign({isLogged:a.isLogged,user:a.user,logout:a.logout,login:a.login,signup:a.signup},t.props))})}}]),a}(n.Component)},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLogged:!1,user:{},status:"loading"},a.setUser=function(e){a.setState({isLogged:!0,user:e})},a.logoutUser=function(){return E.logout().then(function(){a.setState({isLogged:!1,user:{}})}).catch(function(e){return console.log(e)})},a.loginUser=function(e){return E.login(e).then(function(e){a.setUser(e)}).catch(function(e){return console.log(e)})},a.signupUser=function(e){return E.signup(e).then(function(e){a.setUser(e)}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.me().then(function(t){e.setState({isLogged:!0,user:t,status:"loaded"})}).catch(function(t){e.setState({isLogged:!1,user:{},status:"loaded"})})}},{key:"render",value:function(){var e=this.state,t=e.isLogged,a=e.user,n=e.status,i=this.props.children;switch(n){case"loading":return r.a.createElement("div",null,"Loading");default:return r.a.createElement(j,{value:{isLogged:t,user:a,logout:this.logoutUser,login:this.loginUser,signup:this.signupUser}},i)}}}]),t}(n.Component),w=N(function(e){var t=e.component,a=e.isLogged,n=Object(g.a)(e,["component","isLogged"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(f.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),k=N(function(e){var t=e.component,a=e.isLogged,n=Object(g.a)(e,["component","isLogged"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(f.a,{to:{pathname:"/trips",state:{from:e.location}}}):r.a.createElement(t,e)}}))}),S=a(183),x=N(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLogged,a=e.user;e.logout,a.username;return t?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement(S.a,{to:"/login"},"Login"),r.a.createElement(S.a,{to:"/signup"},"Signup"))}}]),t}(n.Component)),L=a(13),U=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",name:"",phoneNumber:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.name,i=a.state.phoneNumber;a.props.signup({username:t,password:n,name:r,phoneNumber:i}).then(function(){a.setState({username:"",password:"",name:"",phoneNumber:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.name,i=e.phoneNumber;return r.a.createElement("div",{className:"signup-div-container"},r.a.createElement("h1",null,"Registro"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"signup-form"},r.a.createElement("label",null,"Nombre y apellidos"),r.a.createElement("input",{className:"signup-form-input",type:"text",name:"name",value:n,onChange:this.handleChange}),r.a.createElement("label",null,"Direcci\xf3n de correo electr\xf3nico"),r.a.createElement("input",{className:"signup-form-input",type:"email",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{className:"signup-form-input",type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"N\xfamero de tel\xe9fono"),r.a.createElement("input",{className:"signup-form-input",type:"number",name:"phoneNumber",value:i,onChange:this.handleChange}),r.a.createElement("p",{id:"signup-p"},"Already have account?",r.a.createElement(S.a,{to:"/login"}," Login")),r.a.createElement("div",{className:"signup-input-submit-container"},r.a.createElement("i",{id:"login-submit",class:"fas fa-sign-in-alt"}),r.a.createElement("input",{className:"login-input-submit",type:"submit",value:""}))))}}]),t}(n.Component)),P=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r}).then(function(){}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"login-div-container"},r.a.createElement("h1",null,"Iniciar Sesi\xf3n"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"login-form"},r.a.createElement("label",null,"Direcci\xf3n de correo electr\xf3nico:"),r.a.createElement("input",{className:"login-form-input",type:"email",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{className:"login-form-input",type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("div",{className:"login-input-submit-container"},r.a.createElement("i",{id:"login-submit",class:"fas fa-sign-in-alt",type:"submit"}),r.a.createElement("input",{className:"login-input-submit",type:"submit",value:""}))))}}]),t}(n.Component)),R=a(18),T=a.n(R),I=a(35),F=N(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"text-align-center"},r.a.createElement(S.a,{to:"/trips",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/search.png",alt:"search",className:"size-5vh"}),r.a.createElement("p",{className:"text-size"},"Explorar"))),r.a.createElement("div",{className:"text-align-center"},r.a.createElement(S.a,{to:"/favs",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/like.png",alt:"like",className:"size-5vh"}),r.a.createElement("p",{className:"text-size"},"Guardados"))),r.a.createElement("div",{className:"text-align-center"},r.a.createElement(S.a,{to:"/trips/new",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/world.png",alt:"world",className:"size-5vh"}),r.a.createElement("p",{className:"text-size"},"Crear viaje"))),r.a.createElement("div",{className:"text-align-center"},r.a.createElement(S.a,{to:"/mytrips",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/airplane.png",alt:"airplane",className:"size-5vh"}),r.a.createElement("p",{className:"text-size"},"Mis viajes"))),r.a.createElement("div",{className:"text-align-center"},r.a.createElement(S.a,{to:"/profile/me",className:"text-decoration-none color-black"},r.a.createElement("img",{src:"/images/user.png",alt:"user",className:"size-5vh"}),r.a.createElement("p",{className:"text-size"},"Perfil"))))}}]),t}(n.Component)),D=new(function(){function e(){Object(s.a)(this,e),this.trip=v.a.create({baseURL:"https://tripandgo2.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"create",value:function(e){var t=e.title,a=e.description,n=e.itinerary,r=e.date,i=e.dateInit,o=e.ageRange,l=e.numberPersons;return this.trip.post("/trip",{title:t,description:a,itinerary:n,date:r,dateInit:i,ageRange:o,numberPersons:l}).then(function(e){return e.data})}},{key:"edit",value:function(e,t){var a=t.title,n=t.description,r=t.itinerary,i=t.date,o=t.dateInit,l=t.ageRange,s=t.numberPersons;return this.trip.put("/trip/".concat(e,"/edit"),{title:a,description:n,itinerary:r,date:i,dateInit:o,ageRange:l,numberPersons:s}).then(function(e){return e.data})}},{key:"getAll",value:function(){return this.trip.get("/trip").then(function(e){return e.data})}},{key:"getMyTrips",value:function(){return this.trip.get("/trip/mytrips").then(function(e){return e.data})}},{key:"getOne",value:function(e){return this.trip.get("/trip/".concat(e)).then(function(e){return e.data})}},{key:"deleteOne",value:function(e){return this.trip.delete("/trip/".concat(e)).then(function(e){return e.data})}},{key:"joinTrip",value:function(e){return this.trip.put("/trip/".concat(e,"/join")).then(function(e){return e.data})}},{key:"leaveTrip",value:function(e){return this.trip.put("/trip/".concat(e,"/leave")).then(function(e){return e.data})}},{key:"getMyTripsJoin",value:function(){return this.trip.get("/trip/mytripsjoin").then(function(e){return e.data})}}]),e}()),J=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"tripscard-margin-top"},r.a.createElement("div",null,r.a.createElement(S.a,{to:"/trips/".concat(e._id)},r.a.createElement("img",{className:"tripcard-image",src:"http://tifositours.com/wp-content/uploads/2019/02/Barcelona.jpg",alt:"image"}))),r.a.createElement("h1",{className:"font-family-montserrat tripcard-title"},e.title),r.a.createElement("p",{className:"tripcard-style-p"},"Itinerario: ",e.itinerary),r.a.createElement("p",{className:"tripcard-style-p"},"Edad: ",e.ageRange," a\xf1os"))}}]),t}(n.Component),A=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getTripList=Object(I.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getAll().then(function(e){a.setState({data:e})});case 2:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTripList()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"trips-margin-div-global"},r.a.createElement("div",{className:"trips-height-tool-bar"},r.a.createElement("p",null,"Barra de b\xfasqueda")),r.a.createElement("div",{className:"trips-height-filter"},r.a.createElement("p",null,"Filtros")),r.a.createElement("div",{className:"trips-div-title-margin"},r.a.createElement("p",{className:"trips-title font-family-montserrat"},"Viajes m\xe1s populares")),e.map(function(e){return r.a.createElement(J,{data:e})})),r.a.createElement(F,null))}}]),t}(n.Component)),z=a(186),M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",itinerary:"",date:"",dateInit:"",ageRange:"18-25",numberPersons:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.title,n=a.state.description,r=a.state.itinerary,i=a.state.date,o=a.state.dateInit,l=a.state.ageRange,s=a.state.numberPersons;D.create({title:t,description:n,itinerary:r,date:i,dateInit:o,ageRange:l,numberPersons:s}).then(function(e){a.props.history.push("/trips/".concat(e._id))}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.itinerary,i=e.date,o=e.dateInit,l=e.ageRange,s=e.numberPersons;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"trips-margin-div-global"},r.a.createElement("div",null,r.a.createElement("h1",{className:"trips-title font-family-montserrat"},"\xa1Crea tu propio viaje!")),r.a.createElement("form",{className:"formcreatetrip-margin-top",onSubmit:this.handleFormSubmit},r.a.createElement("div",null,r.a.createElement("input",Object(L.a)({className:"font-family-roboto",type:"text",placeholder:"Introduce el t\xedtulo de tu viaje",name:"title",value:t,onChange:this.handleChange},"className","borderTest"))),r.a.createElement("div",{className:"formcreatetrip-margin-top"},r.a.createElement("textarea",{className:"font-family-roboto formcreatetrip-text-area",name:"description",placeholder:"Descripci\xf3n del viaje",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"formcreatetrip-margin-top"},r.a.createElement("input",{type:"text",placeholder:"Itinerario",name:"itinerary",value:n,onChange:this.handleChange,className:"borderTest"})),r.a.createElement("div",{className:"formcreatetrip-margin-top formcreatetrip-flex"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{className:"color-grey"},"Fecha Inicio:")),r.a.createElement("div",null,r.a.createElement("input",{type:"date",name:"dateInit",value:o,onChange:this.handleChange,className:"formcreatetrip-date"}))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{className:"color-grey"},"Fecha Fin:")),r.a.createElement("div",null,r.a.createElement("input",{type:"date",name:"date",value:i,onChange:this.handleChange,className:"formcreatetrip-date"})))),r.a.createElement("div",{className:"formcreatetrip-margin-top"},r.a.createElement("label",{className:"color-grey"},"Rango de edad:"),r.a.createElement("select",{className:"formcreatetrip-age-range",value:l,name:"ageRange",onChange:this.handleChange},r.a.createElement("option",{value:"18-25"},"18-25"),r.a.createElement("option",{value:"25-30"},"25-30"),r.a.createElement("option",{value:"30-40"},"30-40"),r.a.createElement("option",{value:"40-50"},"40-50"),r.a.createElement("option",{value:"+50"},"+50"))),r.a.createElement("div",{className:"formcreatetrip-margin-top"},r.a.createElement("input",Object(L.a)({type:"number",className:"font-family-roboto",placeholder:"N\xfamero m\xe1ximo de personas",name:"numberPersons",value:s,onChange:this.handleChange},"className","borderTest"))),r.a.createElement("footer",{className:"formcreatetrip-footer formcreatetrip-text-align-center"},r.a.createElement("input",{className:"formcreatetrip-button",type:"submit",value:"Crear viaje"})))))}}]),t}(n.Component),B=Object(z.a)(M),_=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-top"},r.a.createElement("div",null,r.a.createElement("p",{onClick:this.props.history.goBack},r.a.createElement("img",{src:"/images/right-arrow.png",alt:"arrow-left",className:"size-5vh arrow-back"})))),r.a.createElement(B,{history:this.props}))}}]),t}(n.Component),V=Object(z.a)(_),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:a.props.trip.title,description:a.props.trip.description,itinerary:a.props.trip.itinerary,date:a.props.trip.date,dateInit:a.props.trip.dateInit,ageRange:a.props.trip.ageRange,numberPersons:a.props.trip.numberPersons},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.title,n=a.state.description,r=a.state.itinerary,i=a.state.date,o=a.state.dateInit,l=a.state.ageRange,s=a.state.numberPersons;D.edit(a.props.trip._id,{title:t,description:n,itinerary:r,date:i,dateInit:o,ageRange:l,numberPersons:s}).then(function(){a.props.history.goBack()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.itinerary,i=e.date,o=e.dateInit,l=e.ageRange,s=e.numberPersons;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Editar viaje"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Introduce el t\xedtulo de tu viaje"),r.a.createElement("input",{type:"text",name:"title",value:t,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Descripci\xf3n:"),r.a.createElement("textarea",{name:"description",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"Itinerario:"),r.a.createElement("input",{type:"text",name:"itinerary",value:n,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Fecha Inicio:"),r.a.createElement("input",{type:"date",name:"dateInit",value:o,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Fecha Fin:"),r.a.createElement("input",{type:"date",name:"date",value:i,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Rango de edad:"),r.a.createElement("select",{value:l,name:"ageRange",onChange:this.handleChange},r.a.createElement("option",{value:"18-25"},"18-25"),r.a.createElement("option",{value:"25-30"},"25-30"),r.a.createElement("option",{value:"30-40"},"30-40"),r.a.createElement("option",{value:"40-50"},"40-50"),r.a.createElement("option",{value:"+50"},"+50")),r.a.createElement("label",null,"N\xfamero m\xe1ximo de personas:"),r.a.createElement("input",{type:"number",name:"numberPersons",value:s,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("input",{type:"submit",value:"Editar viaje"})))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,data:{}},a.componentDidMount=function(){a.getTrip()},a.getTrip=function(){var e=a.props.match.params.id;D.getOne(e).then(function(e){a.setState({data:e,isLoading:!1})})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data;switch(e.isLoading){case!0:return"loading...";case!1:return r.a.createElement("div",null,r.a.createElement("h1",null,"TripsEdit"),r.a.createElement(q,{trip:t,history:this.props.history}))}}}]),t}(n.Component),K=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],message:"",isLoading:!0,isJoin:!1},a.handleDelete=function(e){e.preventDefault(),D.deleteOne(a.props.match.params.id).then(function(e){a.setState({message:e}),a.props.history.goBack()})},a.handleJoin=function(e){e.preventDefault(),D.joinTrip(a.props.match.params.id).then(function(e){a.setState({message:e}),a.props.history.push("/mytrips")})},a.handleLeave=function(e){e.preventDefault(),D.leaveTrip(a.props.match.params.id).then(function(e){a.setState({message:e}),a.props.history.push("/trips")})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;D.getOne(this.props.match.params.id).then(function(t){e.setState({data:t,isLoading:!1}),e.checkUserIsJoin()})}},{key:"checkUserIsJoin",value:function(){var e=this;this.state.data.participants.map(function(t){console.log(e.props.user._id),e.props.user._id===t?e.setState({isJoin:!0}):e.setState({isJoin:!1}),console.log(e.state.isJoin)})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.isJoin;switch(a){case!0:return"loading...";case!1:return r.a.createElement("div",null,r.a.createElement("h1",null,"Trip Detail"),r.a.createElement("img",{width:"60px",src:"http://tifositours.com/wp-content/uploads/2019/02/Barcelona.jpg",alt:"image"}),r.a.createElement("p",null,t.date),r.a.createElement("p",null,t.dateInit),r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.itinerary),r.a.createElement("p",null,t.ageRange),t.owner===this.props.user._id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.handleDelete},"Eliminar")," ",r.a.createElement(S.a,{to:"/trips/".concat(t._id,"/edit")},"Editar")),t.owner===this.props.user._id||n?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.handleLeave},"Salir")," "):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.handleJoin},"Unirse")," "),r.a.createElement(F,null))}}}]),t}(n.Component)),Q=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],dataJoin:[]},a.getTripCreateList=Object(I.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getMyTrips().then(function(e){a.setState({data:e})});case 2:case"end":return e.stop()}},e,this)})),a.getTripJoinList=Object(I.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getMyTripsJoin().then(function(e){a.setState({dataJoin:e})});case 2:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTripCreateList(),this.getTripJoinList()}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.dataJoin;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"trips-margin-div-global mytrips-margin-top-global"},r.a.createElement("h1",{className:"trips-title font-family-montserrat"},"Mis viajes"),t.map(function(e){return r.a.createElement(J,{data:e})}),r.a.createElement("h1",{className:"trips-title font-family-montserrat"},"Viajes confirmados"),a.map(function(e){return r.a.createElement(J,{data:e})})),r.a.createElement(F,null))}}]),t}(n.Component)),W=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"TripFavs"),r.a.createElement(F,null))}}]),t}(n.Component),Y=new(function(){function e(){Object(s.a)(this,e),this.profile=v.a.create({baseURL:"https://tripandgo2.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"edit",value:function(e){var t=e.name,a=e.username,n=e.password,r=e.newPassword,i=e.phoneNumber,o=e.imageURL;return this.profile.put("/profile/edit",{name:t,username:a,password:n,newPassword:r,phoneNumber:i,imageURL:o}).then(function(e){return e.data})}},{key:"getProfile",value:function(){return this.profile.get("/profile").then(function(e){return e.data})}}]),e}()),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y.getProfile().then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data,t=e.name,a=e.username,n=e.phoneNumber,i=e.imageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-top"},r.a.createElement("div",null,r.a.createElement("p",{onClick:this.props.history.goBack},r.a.createElement("img",{src:"/images/right-arrow.png",alt:"arrow-left",className:"size-5vh arrow-back"})))),r.a.createElement("h1",null,"Profile"),r.a.createElement("img",{src:i,alt:"",width:"200px"}),r.a.createElement("h1",null,t),r.a.createElement("h3",null,"Direcci\xf3n de correo electr\xf3nico"),r.a.createElement("h3",null,a),r.a.createElement("h3",null,"N\xfamero de tel\xe9fono"),r.a.createElement("h3",null,n),r.a.createElement(S.a,{to:"/profile/me/edit"},r.a.createElement("img",{src:"/images/profile-edit.png",alt:"profile-edit",className:"size-5vh arrow-back"})))}}]),t}(n.Component),X=Object(z.a)(H),Z=a(29),$=a.n(Z),ee=a(61),te=a.n(ee),ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:a.props.profile.name,username:a.props.profile.username,password:"",newPassword:"",phoneNumber:a.props.profile.phoneNumber,imageURL:"",avatar:"",isUploading:!1,progress:0},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.name,n=a.state.username,r=a.state.password,i=a.state.newPassword,o=a.state.phoneNumber,l=a.state.imageURL;Y.edit({name:t,username:n,password:r,phoneNumber:o,newPassword:i,imageURL:l}).then(function(){a.props.history.goBack()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(L.a)({},n,r))},a.handleChangeUsername=function(e){return a.setState({username:e.target.value})},a.handleUploadStart=function(){return a.setState({isUploading:!0,progress:0})},a.handleProgress=function(e){return a.setState({progress:e})},a.handleUploadError=function(e){a.setState({isUploading:!1}),console.error(e)},a.handleUploadSuccess=function(e){a.setState({avatar:e,progress:100,isUploading:!1}),$.a.storage().ref("/fotos").child(e).getDownloadURL().then(function(e){return a.setState({imageURL:e})})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.username,n=e.password,i=e.newPassword,o=e.phoneNumber;return console.log(this.state),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Editar Perfil"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Nombre y apellidos"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Direcci\xf3n de correo electr\xf3nico"),r.a.createElement("textarea",{name:"username",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"Contrase\xf1a actual"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"Nueva contrase\xf1a"),r.a.createElement("input",{type:"password",name:"newPassword",value:i,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("label",null,"N\xfamero de tel\xe9fono"),r.a.createElement("input",{type:"text",name:"phoneNumber",value:o,onChange:this.handleChange,className:"borderTest"}),r.a.createElement("input",{type:"submit",value:"Save"}),r.a.createElement(te.a,{accept:"image/*",name:"avatar",randomizeFilename:!0,storageRef:$.a.storage().ref("/fotos"),onUploadStart:this.handleUploadStart,onUploadError:this.handleUploadError,onUploadSuccess:this.handleUploadSuccess,onProgress:this.handleProgress})))}}]),t}(n.Component),ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,data:{}},a.componentDidMount=function(){a.getProfile()},a.getProfile=function(){Y.getProfile().then(function(e){a.setState({data:e,isLoading:!1})})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data;switch(e.isLoading){case!0:return"loading...";case!1:return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile Edit"),r.a.createElement(ae,{profile:t,history:this.props.history}))}}}]),t}(n.Component),re=Object(z.a)(ne),ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 - page not found"))}}]),t}(n.Component),oe=(a(166),a(168),a(170),a(172),a(174),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(k,{exact:!0,path:"/",component:x}),r.a.createElement(k,{exact:!0,path:"/signup",component:U}),r.a.createElement(k,{exact:!0,path:"/login",component:P}),r.a.createElement(w,{exact:!0,path:"/trips",component:A}),r.a.createElement(w,{exact:!0,path:"/trips/new",component:V}),r.a.createElement(w,{exact:!0,path:"/trips/:id",component:K}),r.a.createElement(w,{exact:!0,path:"/trips/:id/edit",component:G}),r.a.createElement(w,{exact:!0,path:"/mytrips",component:Q}),r.a.createElement(w,{exact:!0,path:"/favs",component:W}),r.a.createElement(w,{exact:!0,path:"/profile/me/edit",component:re}),r.a.createElement(w,{exact:!0,path:"/profile/me",component:X}),r.a.createElement(w,{exact:!0,path:"/profile/:id",component:X}),r.a.createElement(d.a,{component:ie}))))}}]),t}(n.Component));a(176);$.a.initializeApp({apiKey:"AIzaSyCfuQ70DR94cFTl80h620DfyvRW5tCYnMI",authDomain:"tripandgofrontend.firebaseapp.com",databaseURL:"https://tripandgofrontend.firebaseio.com",projectId:"tripandgofrontend",storageBucket:"tripandgofrontend.appspot.com",messagingSenderId:"1087449744779"}),o.a.render(r.a.createElement(l.a,null,r.a.createElement(oe,null)),document.getElementById("root"))},80:function(e,t,a){e.exports=a(180)}},[[80,2,1]]]);
//# sourceMappingURL=main.f1364508.chunk.js.map