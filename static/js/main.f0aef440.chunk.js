(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),o=(n(76),n(77),n(14)),s=(n(78),n(79),function(e){var t=e.onClick,n=e.show;return a.createElement("div",{className:"HamburguerMenu"},n?a.createElement("div",{className:"CloseModal",onClick:t},"X"):a.createElement("div",{className:"container","aria-label":"HamburguerMenu",onClick:t},a.createElement("span",null),a.createElement("span",null),a.createElement("span",null)))});s.displayName="HamburguerMenu";n(80);var l=n(21),u="/Pokedex-React",m="/PokemonDetails/:PokemonURL",f="/ConstructionPage",p="/PokemonList",d=function(e){var t=e.show,n=e.onClick;return a.createElement("div",{className:t?"NavbarModalShow":"NavbarDesktop",onClick:n},a.createElement("div",{className:"NavbarLink"},a.createElement(l.b,{to:u},"Home")),a.createElement("div",{className:"NavbarLink"},a.createElement(l.b,{to:p},"Pokemon List")))};d.displayName="NavbarDesktop";var b=n(10),v=n.n(b),k=n(16),g=n(58),h=n(59),E=n(30),j=n.n(E),O=function(){function e(){Object(g.a)(this,e)}return Object(h.a)(e,[{key:"getPokemonUrlList",value:function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(t.limit,"&offset=").concat(t.offset)).then((function(e){return e.data.results.map((function(e){return e.url}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPokemonNames",value:function(){var e=Object(k.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,j.a.get("https://pokeapi.co/api/v2/pokemon?limit=805&offset=0").then((function(e){return e.data.results.map((function(e){return e.name}))}));case 3:return e.t1=e.sent,e.abrupt("return",e.t0.resolve.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPokemonDataFrom",value:function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPokemonDataFromUrlWithParams",value:function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.toLowerCase()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPokemonTypes",value:function(){var e=Object(k.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://pokeapi.co/api/v2/type").then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPokemonGenerations",value:function(){var e=Object(k.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://pokeapi.co/api/v2/generation").then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSinglePokemon",value:function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),y=function(){var e=Object(k.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O,e.next=3,t.getAllPokemonNames();case 3:return n=e.sent,e.abrupt("return",n.map((function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(k.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new O,e.next=3,n.getPokemonUrlList(t);case 3:return a=e.sent,e.next=6,Promise.all(a.map((function(e){return n.getPokemonDataFrom(e)})));case 6:return r=e.sent,e.abrupt("return",r.map((function(e){return{sprite:e.data.sprites.front_default,name:e.data.name,height:e.data.height,id:e.data.id,types:e.data.types}})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N={limit:151,offset:0,name:"generation-i"},P={limit:100,offset:151,name:"generation-ii"},x={limit:135,offset:251,name:"generation-iii"},S={limit:107,offset:386,name:"generation-iv"},C={limit:156,offset:493,name:"generation-v"},G={limit:72,offset:649,name:"generation-vi"},L={limit:86,offset:721,name:"generation-vii"},D=Object(a.createContext)(),T=function(e){var t=e.children,n=Object(a.useState)("#EF5350"),c=Object(o.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)([]),u=Object(o.a)(l,2),m=u[0],f=u[1],p=Object(a.useState)({limit:N.limit,offset:N.offset,name:N.name}),d=Object(o.a)(p,2),b=d[0],v=d[1];Object(a.useEffect)((function(){y().then(f)}),[]);var k={pokemonList:m,selectedGeneration:b,setSelectedGeneration:function(e){v(e)},theme:i,setTheme:function(e){switch(e){case"grass":s("#7c5");break;case"poison":s("#a59");break;case"fire":s("#f42");break;case"flying":s("#89f");break;case"normal":s("#dbdbdb");break;case"water":s("#39f");break;case"bug":s("#ab2");break;case"dark":s("#754");break;case"electric":s("#fc3");break;case"psychic":s("#f59");break;case"ground":s("#db5");break;case"rock":s("#ba6");break;case"fairy":s("#e9e");break;case"steel":s("#aab");break;case"fighting":s("#b54");break;case"ice":s("#6cf");break;case"ghost":s("#66b");break;case"dragon":s("#76e")}}};return r.a.createElement(D.Provider,{value:k},t)},F=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(){r(!n)}var i=function(){var e="object"===typeof window,t=Object(a.useCallback)((function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}),[e]),n=Object(a.useState)(t),r=Object(o.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){i(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[t,e]),c}(),l=Object(a.useContext)(D);return a.createElement("div",{className:"Header",style:{backgroundColor:"".concat(l.theme)}},a.createElement("div",{className:"Navbar"},i.width<576?a.createElement(d,{show:n,onClick:c}):a.createElement(d,{show:n}),a.createElement(s,{onClick:c,show:n})))};F.displayName="Header";n(103);var H=function(){return a.createElement("div",{className:"Footer"},"All content & design \xa9 Pok\xe9mon Database, 2008-2020. Pok\xe9mon images & names \xa9 1995-2020 Nintendo/Game Freak.")};H.displayName="Footer";var I=n(13),_=n(6),A=(n(104),n(105),function(e){var t=e.pokemon;return a.createElement("div",{className:"ContentDetail"},a.createElement("div",{className:"PokemonInfo"},a.createElement("h1",null,"Pok\xe9dex data"),a.createElement("div",{className:"PokemonImage"},a.createElement("img",{src:t.data.sprites.front_default,alt:"Imagen del pokemon"})),a.createElement("div",null,a.createElement("p",null,"National N\xba: ",t.data.id),a.createElement("p",null,"Type: ",a.createElement("div",null,t.data.types.map((function(e){return a.createElement("div",{className:"PokemonStats"},a.createElement("div",null,e.type.name))})))),a.createElement("p",null,"Species: ",t.data.species.name),a.createElement("p",null,"Height: ",t.data.height),a.createElement("p",null,"Weight: ",t.data.weight),a.createElement("p",null,"Abilities:",a.createElement("div",null,t.data.abilities.map((function(e){return a.createElement("div",null,e.is_hidden?e.ability.name+" (Hidden ability)":e.ability.name)}))))),a.createElement("div",{className:"PokemonInfo"},t.data.stats.map((function(e){return a.createElement("div",{className:"PokemonStats"},a.createElement("div",null,e.stat.name),a.createElement("div",null,e.base_stat))})))))});A.displayName="ContentDetail";n(57);var B=function(){var e=Object(I.f)().PokemonURL,t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(),s=Object(o.a)(i,2),l=s[0],u=s[1],m=Object(a.useContext)(D);return Object(a.useEffect)((function(){c(!0),(new O).getPokemonDataFromUrlWithParams(e).then((function(e){u((function(t){return Object(_.a)(Object(_.a)({},t),{},{data:e.data})})),c(!1)}))}),[e]),m.setTheme(null===l||void 0===l?void 0:l.data.types[0].type.name),a.createElement("div",{className:"PokemonDetails"},console.log(null===l||void 0===l?void 0:l.data.types[0].type.name),r?a.createElement("div",{className:"pokeball"},a.createElement("div",{className:"pokeball__button"})):void 0!==l?a.createElement(A,{pokemon:l}):a.createElement("div",null,"me mori"))};B.displayName="PokemonDetails";var M=n(60),U=n.n(M),W=function(){return a.createElement("div",{className:"Home"},a.createElement("img",{src:U.a,alt:"Gif Pikachu construyendo"}))},R=(n(106),n(107),n(147)),z=n(148),J=function(){var e=Object(a.useState)(1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),s=i[0],u=i[1],m=Object(a.useContext)(D);return Object(a.useEffect)((function(){r(Math.floor(152*Math.random()))}),[]),a.createElement("div",{className:"SearchBar"},a.createElement("span",null,"Search for Pokemons"),a.createElement("div",{className:"Content"},a.createElement(z.a,{id:"combo-box-demo",options:m.pokemonList,getOptionLabel:function(e){return e},onInputChange:function(e,t){u(t)},renderInput:function(e){return a.createElement(R.a,Object.assign({},e,{label:"Combo box",variant:"outlined"}))}}),""!==s?a.createElement("button",{className:"SearchButton"},a.createElement(l.b,{to:"/PokemonDetails/".concat(s)},"Search")):a.createElement("button",{className:"SearchButton"},a.createElement(l.b,{to:"/PokemonDetails/".concat(n)},"Search"))))};J.displayName="SearchBar";var X=function(){var e=Object(k.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O,e.next=3,t.getPokemonTypes();case 3:return n=e.sent,e.abrupt("return",n.map((function(e){return e.name.charAt(0).toUpperCase()+e.name.slice(1)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(k.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O,e.next=3,t.getPokemonGenerations();case 3:return n=e.sent,e.abrupt("return",n.map((function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=(n(108),function(e){e.selectedGeneration;var t=e.isLoading,n=e.pokemonTable,r=e.selectedType,c=function(e){return a.createElement("div",{className:"Filas"},a.createElement("div",null,a.createElement(l.b,{to:"/PokemonDetails/".concat(e.name)},a.createElement("img",{alt:"imagen del pokemon",src:e.sprite}))),a.createElement("div",null,a.createElement(l.b,{to:"/PokemonDetails/".concat(e.name)},e.name)),a.createElement("div",null,e.height/10,"m"),a.createElement("div",null,e.id),a.createElement("div",{className:"types"},a.createElement("div",{className:e.types[0].type.name},e.types[0].type.name),e.types[1]&&a.createElement("div",{className:e.types[1].type.name},e.types[1].type.name)))};return a.createElement("div",{className:"PokemonTable"},t?a.createElement("div",null,"Cargando..."):a.createElement("div",{className:"PokemonIndexTable"},a.createElement("div",{className:"Filas"},a.createElement("div",null,"Pokemon"),a.createElement("div",null,"Nombre"),a.createElement("div",null,"Altura"),a.createElement("div",null,"Pokedex"),a.createElement("div",null,"Type")),r&&(null===n||void 0===n?void 0:n.filter((function(e){var t;return r.toLowerCase()===e.types[0].type.name||r.toLowerCase()===(null===(t=e.types[1])||void 0===t?void 0:t.type.name)})).map((function(e){return c(e)}))),"all"===r&&(null===n||void 0===n?void 0:n.map((function(e){return c(e)})))))});q.displayName="PokemonTable";var K=function(){var e=Object(a.useContext)(D),t=Object(a.useState)(!0),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],u=s[1],m=Object(a.useState)("all"),f=Object(o.a)(m,2),p=f[0],d=f[1],b=Object(a.useState)([]),v=Object(o.a)(b,2),k=v[0],g=v[1],h=Object(a.useState)({firstgen:[],secondgen:[],thirdgen:[],fourthgen:[],fifthgen:[],sixthgen:[],seventhgen:[]}),E=Object(o.a)(h,2),j=E[0],O=E[1],y=Object(a.useState)({"generation-i":!1,"generation-ii":!1,"generation-iii":!1,"generation-iv":!1,"generation-v":!1,"generation-vi":!1,"generation-vii":!1}),T=Object(o.a)(y,2),F=T[0],H=T[1];Object(a.useEffect)((function(){X().then(u),$().then(g)}),[]),Object(a.useEffect)((function(){F[e.selectedGeneration.name]?c(!1):(r||c(!0),w(e.selectedGeneration).then((function(e){return I(e)})).then((function(){return c(!1)})))}),[e.selectedGeneration]);var I=function(e){switch(e.length){case 151:O(Object(_.a)(Object(_.a)({},j),{},{firstgen:e})),H(Object(_.a)(Object(_.a)({},F),{},{"generation-i":!0}));break;case 100:O(Object(_.a)(Object(_.a)({},j),{},{secondgen:e})),H(Object(_.a)(Object(_.a)({},F),{},{"generation-ii":!0}));break;case 135:O(Object(_.a)(Object(_.a)({},j),{},{thirdgen:e})),H(Object(_.a)(Object(_.a)({},F),{},{"generation-iii":!0}));break;case 107:O(Object(_.a)(Object(_.a)({},j),{},{fourthgen:e})),H(Object(_.a)(Object(_.a)({},F),{},{"generation-iv":!0}));break;case 156:O(Object(_.a)(Object(_.a)({},j),{},{fifthgen:e})),H(Object(_.a)(Object(_.a)({},F),{},{"generation-v":!0}));break;case 72:O(Object(_.a)(Object(_.a)({},j),{},{sixthgen:e})),H(Object(_.a)(Object(_.a)({},F),{},{"generation-vi":!0}));break;case 86:O(Object(_.a)(Object(_.a)({},j),{},{seventhgen:e})),H(Object(_.a)(Object(_.a)({},F),{},{"generation-vii":!0}))}};return a.createElement("div",{className:"Content"},a.createElement(J,null),a.createElement("div",{className:"Selects"},a.createElement("select",{name:"TypeSelect",id:"TypeSelect",onChange:function(e){d(e.target.value)}},a.createElement("option",{value:"all"},"- Elige un tipo -"),l.map((function(e){return a.createElement("option",{value:e},e)}))),a.createElement("select",{name:"GenerationSelect",id:"GenerationSelect",onChange:function(t){switch(t.target.value){case"generation-i":e.setSelectedGeneration({limit:N.limit,offset:N.offset,name:N.name});break;case"generation-ii":e.setSelectedGeneration({limit:P.limit,offset:P.offset,name:P.name});break;case"generation-iii":e.setSelectedGeneration({limit:x.limit,offset:x.offset,name:x.name});break;case"generation-iv":e.setSelectedGeneration({limit:S.limit,offset:S.offset,name:S.name});break;case"generation-v":e.setSelectedGeneration({limit:C.limit,offset:C.offset,name:C.name});break;case"generation-vi":e.setSelectedGeneration({limit:G.limit,offset:G.offset,name:G.name});break;case"generation-vii":e.setSelectedGeneration({limit:L.limit,offset:L.offset,name:L.name})}}},a.createElement("option",{value:"all"},"- Elige una generacion -"),k.map((function(e){return a.createElement("option",{value:e.name},e.name)})))),r?a.createElement("div",{className:"pokeball"},a.createElement("div",{className:"pokeball__button"})):a.createElement(q,{isLoading:r,selectedType:p,pokemonTable:"generation-i"===e.selectedGeneration.name?j.firstgen:"generation-ii"===e.selectedGeneration.name?j.secondgen:"generation-iii"===e.selectedGeneration.name?j.thirdgen:"generation-iv"===e.selectedGeneration.name?j.fourthgen:"generation-v"===e.selectedGeneration.name?j.fifthgen:"generation-vi"===e.selectedGeneration.name?j.sixthgen:"generation-vii"===e.selectedGeneration.name?j.seventhgen:void 0}))};K.displayName="Body";var Q=function(){return a.createElement("div",{className:"PokemonList"},a.createElement(K,null))},V=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"main"},r.a.createElement(F,null),r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:u,component:Q}),r.a.createElement(I.a,{exact:!0,path:m,component:B}),r.a.createElement(I.a,{exact:!0,path:f,component:W}),r.a.createElement(I.a,{exact:!0,path:p,component:Q}))),r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,n){},60:function(e,t,n){e.exports=n.p+"static/media/tenor.83592060.gif"},71:function(e,t,n){e.exports=n(109)},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){}},[[71,1,2]]]);
//# sourceMappingURL=main.f0aef440.chunk.js.map