import{_ as m,o as a,c,a as t,F as h,r as _,d as p,w as i,v as n,t as l,g as b,p as f,f as w}from"./index-6718e34f.js";const v={data(){return{newflight:{},newHotel:{}}},computed:{flights(){return this.$store.state.skyblue.flights},hotels(){return this.$store.state.skyblue.hotels},trips(){return this.$store.state.skyblue.trips}},methods:{agregarVuelo(){this.newflight.ciudadOrigen!==this.newflight.ciudadDestino?(console.log(this.newflight),this.$store.dispatch("skyblue/newFlight",this.newflight),this.newflight={}):alert("La ciudad de origen y la ciudad de destino no pueden ser iguales")},agregarHotel(){console.log(this.newHotel),this.$store.dispatch("skyblue/newHotel",this.newHotel),this.newHotel={}}},beforeMount(){this.$store.dispatch("skyblue/getFlights"),this.$store.dispatch("skyblue/getHotels"),this.$store.dispatch("skyblue/getTrips")}},e=u=>(f("data-v-16d5bd93"),u=u(),w(),u),y={class:"container"},H={class:"row w-100 mx-0"},k={class:"col"},V=e(()=>t("h2",null,"Vuelos",-1)),x={class:"table flight-table mb-5"},C=e(()=>t("thead",{class:"table-dark"},[t("tr",null,[t("th",null,"ID"),t("th",null,"Origen"),t("th",null,"Destino"),t("th",null,"Costo"),t("th",null,"Capacidad")])],-1)),D={class:"table-light"},U={class:"table-light"},q={class:"table-light"},O={class:"table-light"},I={class:"table-light"},N={class:"col-4"},S=e(()=>t("div",{class:"modal-header bg-dark"},[t("h2",{class:"modal-title text-white",id:"modalVueloLabel"}," Nuevo Vuelo ")],-1)),F={class:"modal-body bg-light"},L={class:"form-group"},T=e(()=>t("label",{for:"ciudadOrigen"},"Ciudad de Origen:",-1)),B={class:"form-group"},M=e(()=>t("label",{for:"ciudadDestino"},"Ciudad de Destino:",-1)),A={class:"form-group"},E=e(()=>t("label",{for:"telefono"},"Costo:",-1)),j={class:"form-group"},P=e(()=>t("label",{for:"capacidad"},"Capacidad:",-1)),z=e(()=>t("div",{class:"modal-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Agregar vuelo ")],-1)),G=e(()=>t("div",{class:"w-100 d-none d-md-block"},null,-1)),J={class:"col"},K=e(()=>t("h2",null,"Hoteles",-1)),Q={class:"table hotel-table mb-5"},R=e(()=>t("thead",{class:"table-info"},[t("tr",null,[t("th",null,"ID"),t("th",null,"Hotel"),t("th",null,"Ciudad"),t("th",null,"Costo"),t("th",null,"Capacidad")])],-1)),W={class:"table-light"},X={class:"table-light"},Y={class:"table-light"},Z={class:"table-light"},$={class:"table-light"},tt={class:"col-4"},st=e(()=>t("div",{class:"modal-header bg-cyan-200"},[t("h2",{class:"modal-title",id:"modalHotelLabel"}," Nuevo Hotel ")],-1)),et={class:"modal-body bg-light"},ot={class:"form-group"},lt=e(()=>t("label",{for:"nombre"},"Nombre:",-1)),dt={class:"form-group"},it=e(()=>t("label",{for:"ciudad"},"Ciudad:",-1)),nt={class:"form-group"},at=e(()=>t("label",{for:"costo"},"Costo:",-1)),ct={class:"form-group"},rt=e(()=>t("label",{for:"capacidad"},"Capacidad:",-1)),ut=e(()=>t("div",{class:"modal-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Agregar Hotel ")],-1)),ht=e(()=>t("div",{class:"w-100 d-none d-md-block"},null,-1)),_t={class:"col"},bt=e(()=>t("h2",null,"Planes de Viaje",-1)),gt={class:"table trip-table"},pt=e(()=>t("thead",{class:"table-warning"},[t("tr",null,[t("th",null,"ID"),t("th",null,"Ciudad"),t("th",null,"Vuelo"),t("th",null,"Hotel"),t("th",null,"Cantidad"),t("th",null,"Costo"),t("th",null,"Usuario")])],-1)),mt={class:"table-light"},ft={class:"table-light"},wt={class:"table-light"},vt={class:"table-light"},yt={class:"table-light"},Ht={class:"table-light"},kt={style:{"font-weight":"bold"}},Vt={class:"table-light"},xt=e(()=>t("b",{style:{"font-weight":"bold"}},"Nombre:",-1)),Ct=e(()=>t("br",null,null,-1)),Dt=e(()=>t("b",{style:{"font-weight":"bold"}},"Email:",-1)),Ut=e(()=>t("br",null,null,-1)),qt=e(()=>t("b",{style:{"font-weight":"bold"}},"Teléfono:",-1));function Ot(u,o,It,Nt,d,r){return a(),c("div",y,[t("div",H,[t("div",k,[V,t("table",x,[C,t("tbody",null,[(a(!0),c(h,null,_(r.flights,(s,g)=>(a(),c("tr",{key:s.id},[t("td",D,l(s.id),1),t("td",U,l(s.ciudadOrigen),1),t("td",q,l(s.ciudadDestino),1),t("td",O,"$"+l(s.costo),1),t("td",I,l(s.capacidad),1)]))),128))])])]),t("div",N,[S,t("div",F,[t("form",{onSubmit:o[4]||(o[4]=p(s=>r.agregarVuelo(),["prevent"]))},[t("div",L,[T,i(t("input",{type:"text",class:"form-control",id:"ciudadOrigen","onUpdate:modelValue":o[0]||(o[0]=s=>d.newflight.ciudadOrigen=s),required:""},null,512),[[n,d.newflight.ciudadOrigen]])]),t("div",B,[M,i(t("input",{type:"text",class:"form-control",id:"ciudadDestino","onUpdate:modelValue":o[1]||(o[1]=s=>d.newflight.ciudadDestino=s),required:""},null,512),[[n,d.newflight.ciudadDestino]])]),t("div",A,[E,i(t("input",{type:"text",class:"form-control",id:"costo","onUpdate:modelValue":o[2]||(o[2]=s=>d.newflight.costo=s),required:""},null,512),[[n,d.newflight.costo]])]),t("div",j,[P,i(t("input",{type:"text",class:"form-control",id:"capacidad","onUpdate:modelValue":o[3]||(o[3]=s=>d.newflight.capacidad=s),required:""},null,512),[[n,d.newflight.capacidad]])]),z],32)])]),G,t("div",J,[K,t("table",Q,[R,t("tbody",null,[(a(!0),c(h,null,_(r.hotels,(s,g)=>(a(),c("tr",{key:s.id},[t("td",W,l(s.id),1),t("td",X,l(s.nombre),1),t("td",Y,l(s.ciudad),1),t("td",Z,"$"+l(s.costo),1),t("td",$,l(s.capacidad),1)]))),128))])])]),t("div",tt,[st,t("div",et,[t("form",{onSubmit:o[9]||(o[9]=p(s=>r.agregarHotel(),["prevent"]))},[t("div",ot,[lt,i(t("input",{type:"text",class:"form-control",id:"nombre","onUpdate:modelValue":o[5]||(o[5]=s=>d.newHotel.nombre=s),required:""},null,512),[[n,d.newHotel.nombre]])]),t("div",dt,[it,i(t("input",{type:"text",class:"form-control",id:"ciudad","onUpdate:modelValue":o[6]||(o[6]=s=>d.newHotel.ciudad=s),required:""},null,512),[[n,d.newHotel.ciudad]])]),t("div",nt,[at,i(t("input",{type:"text",class:"form-control",id:"costo","onUpdate:modelValue":o[7]||(o[7]=s=>d.newHotel.costo=s),required:""},null,512),[[n,d.newHotel.costo]])]),t("div",ct,[rt,i(t("input",{type:"text",class:"form-control",id:"capacidad","onUpdate:modelValue":o[8]||(o[8]=s=>d.newHotel.capacidad=s),required:""},null,512),[[n,d.newHotel.capacidad]])]),ut],32)])]),ht,t("div",_t,[bt,t("table",gt,[pt,t("tbody",null,[(a(!0),c(h,null,_(r.trips,(s,g)=>(a(),c("tr",{key:s.id},[t("td",mt,l(s.id),1),t("td",ft,l(s.ciudad),1),t("td",wt,l(s.vuelo),1),t("td",vt,l(s.hotel),1),t("td",yt,l(s.cantidad),1),t("td",Ht,[t("b",kt,"$"+l(s.costo),1)]),t("td",Vt,[t("span",null,[xt,b(" "+l(s.usuario.nombre),1)]),Ct,t("span",null,[Dt,b(" "+l(s.usuario.email),1)]),Ut,t("span",null,[qt,b(" "+l(s.usuario.telefono),1)])])]))),128))])])])])])}const Ft=m(v,[["render",Ot],["__scopeId","data-v-16d5bd93"]]);export{Ft as default};
