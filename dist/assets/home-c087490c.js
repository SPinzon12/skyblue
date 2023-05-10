import{_ as y,o as d,c as r,a as t,F as _,r as b,b as p,t as i,w as u,v as h,d as g,e as k,n as v,p as w,f as C}from"./index-b6558c10.js";const x={data(){return{trip:{},cantidadPersonas:1,showModal:!1,usuario:{}}},computed:{flights(){return this.$store.state.skyblue.flights},hotels(){return this.$store.state.skyblue.hotels}},methods:{handleRowClick(a,e){e==="hotel"?(this.trip.hotel=a,this.hotels.forEach(c=>c.selected=c===a)):e==="flight"&&(this.trip.vuelo=a,console.log("Clicked flight:",a),this.flights.forEach(c=>c.selected=c===a))},showAllHotels(){this.trip={}},mostrarModal(){this.showModal=!0},ocultarModal(){this.showModal=!1},realizarReserva(){const a={vuelo:this.trip.vuelo.id,hotel:this.trip.hotel.id,usuario:this.usuario,cantidad:this.cantidadPersonas,ciudad:this.trip.vuelo.ciudadOrigen};this.$store.dispatch("skyblue/newTrip",a),console.log("Reserva realizada:",a),this.showModal=!1,this.trip={},this.usuario={},this.cantidadPersonas=1}},beforeMount(){this.$store.dispatch("skyblue/getFlights"),this.$store.dispatch("skyblue/getHotels")}},l=a=>(w("data-v-1d0acffc"),a=a(),C(),a),M=k('<div class="jumbotron" data-v-1d0acffc><div class="container" data-v-1d0acffc><div class="content" data-v-1d0acffc><h1 class="display-3" data-v-1d0acffc>Reserva, vuela, disfruta</h1><p class="text" data-v-1d0acffc> SkyBlueTrips es una aplicación innovadora que te permite reservar planes de vuelo de manera fácil y rápida. Nuestra plataforma te permite encontrar los mejores vuelos a precios accesibles y reservarlos con un par de clics. Ofrecemos una amplia variedad de opciones de vuelos y destinos para satisfacer las necesidades de todos nuestros clientes. </p></div><div class="image-container" data-v-1d0acffc><img src="https://unabuenaidea.es/wp-content/uploads/2017/02/embarcaciones-en-4k-unabuenaidea-10.jpg" alt="" style="max-width:100%;" data-v-1d0acffc></div></div></div>',1),P={class:"container px-3"},R={class:"row mx-0"},V={class:"col-md-4"},O=l(()=>t("h2",null,"Escoge el vuelo",-1)),S={class:"table"},j=l(()=>t("thead",{class:"table-dark"},[t("tr",null,[t("th",null,"Origen"),t("th",null,"Destino"),t("th",null,"Capacidad"),t("th",null,"Costo")])],-1)),D=["onClick"],L={class:"table-light"},T={class:"table-light"},z={class:"table-light"},B={class:"table-light"},E={class:"col-md-4"},H=l(()=>t("h2",null,"Escoge el hotel",-1)),I={class:"table"},N=l(()=>t("thead",{class:"table-info"},[t("tr",null,[t("th",null,"Hotel"),t("th",null,"Ciudad"),t("th",null,"Capacidad"),t("th",null,"Costo")])],-1)),q=["onClick"],U={class:"table-light"},F={class:"table-light"},A={class:"table-light"},Z={class:"table-light"},G={key:0,class:"col-md-4"},J=l(()=>t("h2",null,"Reserva de Plan de Viaje",-1)),K={class:"table"},Q=l(()=>t("thead",{class:"table-warning"},[t("tr",null,[t("th",null,"Vuelo"),t("th",null,"Hotel"),t("th",null,"Total")])],-1)),W={style:{"font-weight":"bold"}},X={class:"row"},Y={class:"col-md-6"},$=l(()=>t("label",{for:"cantidadPersonas",class:"form-label"},[t("b",{style:{"font-weight":"bold"}},"Cantidad de Personas:")],-1)),tt={class:"input-group"},st=["max"],et=l(()=>t("br",null,null,-1)),ot={key:0},lt={class:"modal-content"},at={class:"modal-header"},it=l(()=>t("h2",{class:"modal-title",id:"modalReservaLabel"}," Información de Reserva ",-1)),nt=l(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[t("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})],-1)),dt=[nt],rt={class:"modal-body"},ct={class:"form-group"},ut=l(()=>t("label",{for:"nombre"},"Nombre completo:",-1)),ht={class:"form-group"},_t=l(()=>t("label",{for:"email"},"Correo electrónico:",-1)),pt={class:"form-group"},bt=l(()=>t("label",{for:"telefono"},"Teléfono:",-1)),vt={class:"modal-footer"},mt=l(()=>t("button",{type:"submit",class:"btn btn-primary"}," Confirmar reserva ",-1));function ft(a,e,c,yt,o,n){return d(),r(_,null,[M,t("div",P,[t("div",R,[t("div",V,[O,t("table",S,[j,t("tbody",null,[(d(!0),r(_,null,b(n.flights,(s,m)=>(d(),r("tr",{key:s.id,onClick:f=>n.handleRowClick(s,"flight"),class:v({"table-active":s.selected})},[t("td",L,i(s.ciudadOrigen),1),t("td",T,i(s.ciudadDestino),1),t("td",z,i(s.capacidad),1),t("td",B,"$"+i(s.costo),1)],10,D))),128))])])]),t("div",E,[H,t("table",I,[N,t("tbody",null,[(d(!0),r(_,null,b(o.trip.vuelo?n.hotels.filter(s=>s.ciudad===o.trip.vuelo.ciudadDestino&&s.capacidad>0):n.hotels.filter(s=>s.capacidad>0),(s,m)=>(d(),r("tr",{key:s.id,onClick:f=>n.handleRowClick(s,"hotel"),class:v({"table-active":s.selected})},[t("td",U,i(s.nombre),1),t("td",F,i(s.ciudad),1),t("td",A,i(s.capacidad),1),t("td",Z,"$"+i(s.costo),1)],10,q))),128))])]),Object.keys(o.trip).length>=1?(d(),r("button",{key:0,onClick:e[0]||(e[0]=s=>n.showAllHotels()),class:"btn btn-primary"}," Volver a mostrar todos los hoteles ")):p("",!0)]),Object.keys(o.trip).length==2?(d(),r("div",G,[J,t("table",K,[Q,t("tbody",null,[t("tr",null,[t("td",null,i(o.trip.vuelo.ciudadOrigen)+" - "+i(o.trip.vuelo.ciudadDestino),1),t("td",null,i(o.trip.hotel.nombre)+" ("+i(o.trip.hotel.ciudad)+")",1),t("td",null,[t("b",W,"$"+i((o.trip.vuelo.costo+o.trip.hotel.costo)*o.cantidadPersonas),1)])])])]),t("div",null,[t("div",X,[t("div",Y,[$,t("div",tt,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=s=>o.cantidadPersonas>1?o.cantidadPersonas--:null)},"-"),u(t("input",{type:"number",id:"cantidadPersonas",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=s=>o.cantidadPersonas=s),min:"1",max:Math.min(o.trip.vuelo.capacidad,o.trip.hotel.capacidad)},null,8,st),[[h,o.cantidadPersonas,void 0,{number:!0}]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[3]||(e[3]=s=>o.cantidadPersonas++)},"+")])])])]),et,t("div",null,[t("button",{class:"btn btn-primary",onClick:e[4]||(e[4]=s=>n.mostrarModal())}," Realizar reserva ")]),o.showModal==!0?(d(),r("div",ot,[t("div",lt,[t("div",at,[it,t("button",{type:"button",onClick:e[5]||(e[5]=s=>n.ocultarModal()),class:"btn btn-primary","data-dismiss":"modal","aria-label":"Close"},dt)]),t("div",rt,[t("form",{onSubmit:e[10]||(e[10]=g(s=>n.realizarReserva(),["prevent"]))},[t("div",ct,[ut,u(t("input",{type:"text",class:"form-control",id:"nombre","onUpdate:modelValue":e[6]||(e[6]=s=>o.usuario.nombre=s),required:""},null,512),[[h,o.usuario.nombre]])]),t("div",ht,[_t,u(t("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[7]||(e[7]=s=>o.usuario.email=s),required:""},null,512),[[h,o.usuario.email]])]),t("div",pt,[bt,u(t("input",{type:"tel",class:"form-control",id:"telefono","onUpdate:modelValue":e[8]||(e[8]=s=>o.usuario.telefono=s),required:""},null,512),[[h,o.usuario.telefono]])]),t("div",vt,[t("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:e[9]||(e[9]=s=>n.ocultarModal())}," Cancelar "),mt])],32)])])])):p("",!0)])):p("",!0)])])],64)}const kt=y(x,[["render",ft],["__scopeId","data-v-1d0acffc"]]);export{kt as default};
