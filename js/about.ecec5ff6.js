(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a37":function(e,t,s){"use strict";var a=s("40c6"),i=s.n(a);i.a},"0f91":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("3245");t.EmailJSResponseStatus=a.EmailJSResponseStatus;var i=s("5129"),n=null,l="https://api.emailjs.com";function r(e,t,s){return void 0===s&&(s={}),new Promise((function(i,n){var l=new XMLHttpRequest;for(var r in l.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?i(t):n(t)})),l.addEventListener("error",(function(e){n(new a.EmailJSResponseStatus(e.target))})),l.open("POST",e,!0),s)l.setRequestHeader(r,s[r]);l.send(t)}))}function o(e){var t=document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function c(e,t){n=e,l=t||"https://api.emailjs.com"}function u(e,t,s,a){var i={lib_version:"2.4.1",user_id:a||n,service_id:e,template_id:t,template_params:o(s)};return r(l+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})}function d(e,t,s,a){if("string"===typeof s&&(s=document.querySelector(s)),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(s);var o=new FormData(s);return o.append("lib_version","2.4.1"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",a||n),r(l+"/api/v1.0/email/send-form",o).then((function(e){return i.UI.successState(s),e}),(function(e){return i.UI.errorState(s),Promise.reject(e)}))}t.init=c,t.send=u,t.sendForm=d,t.default={init:c,send:u,sendForm:d}},"291e":function(e,t,s){"use strict";var a=s("68a7"),i=s.n(a);i.a},3245:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=a},"40c6":function(e,t,s){},5129:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},"68a7":function(e,t,s){},b8fa:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contact-wrapper"},[s("form",{staticClass:"contact-form-wrapper",attrs:{id:"theForm"},on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{type:"text",id:"subject",name:"subject",required:""},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),s("span",{staticClass:"highlight"}),s("span",{staticClass:"bar"}),s("label",{attrs:{for:"subject"}},[e._v("Asunto")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name",name:"from_name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("span",{staticClass:"highlight"}),s("span",{staticClass:"bar"}),s("label",{attrs:{for:"name"}},[e._v("Nombre")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",name:"from_email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("span",{staticClass:"highlight"}),s("span",{staticClass:"bar"}),s("label",{attrs:{for:"email"}},[e._v("Email")])]),s("div",{staticClass:"input-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:"message",name:"message_html",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("span",{staticClass:"highlight"}),s("span",{staticClass:"bar"}),s("label",{attrs:{for:"message"}},[e._v("Mensaje")])]),e.loading?s("div",{staticClass:"loader"},[e._m(0)]):e._e(),e.answer?s("div",{staticClass:"answer"},[e._v("\n            "+e._s(e.answer)+"\n        ")]):e._e(),e._m(1)])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hollow-dots-spinner"},[s("div",{staticClass:"dot"}),s("div",{staticClass:"dot"}),s("div",{staticClass:"dot"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{attrs:{type:"submit"}},[s("i",{staticClass:"flaticon-paper-plane-2"})])}],n=(s("7f7f"),s("0f91")),l={name:"Contact",data:function(){return{subject:null,email:null,name:null,message:null,loading:!1,answer:null}},computed:{checkFields:function(){return!!(this.subject&&this.email&&this.name&&this.message)}},methods:{handleSubmit:function(){var e=this,t=this;this.checkFields&&(this.loading=!0,n.sendForm("gmail","template_HCzaKkuo","#theForm","user_3FERlUek61v4BGACejrEl").then((function(e){t.loading=!1,t.subject=null,t.email=null,t.name=null,t.message=null,t.answer="El mensaje se ha enviado satisfactoriamente!"}),(function(s){e.loading=!1,t.answer="Vaya, no hemos podido enviar el mensaje, inténtalo de nuevo."})))}}},r=l,o=(s("291e"),s("2877")),c=Object(o["a"])(r,a,i,!1,null,"68a91b1f",null);t["default"]=c.exports},c9e5:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"portfolio"},[s("grid",{attrs:{active:!0}})],1)},i=[],n=s("454f"),l={name:"Portfolio",components:{Grid:n["a"]}},r=l,o=s("2877"),c=Object(o["a"])(r,a,i,!1,null,"f24d1388",null);t["default"]=c.exports},f820:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about-wrapper"},[s("div",{staticClass:"about-page"},[s("div",{staticClass:"about-img"}),s("div",{staticClass:"about-text"},[s("h3",[e._v("Soy una desarrolladora Front-End entusiasta por el diseño gráfico y diseño UX. Me especializo\n            en el desarrollo de aplicaciones web en VueJS. Soy creativa, responsable y reisiliente. "),s("b",[e._v("¡Carpe Diem!")])]),s("h2",[e._v("Habilidades")]),s("ul",{staticClass:"skills-list"},[s("li",[s("div",{staticClass:"skill-name"},[e._v("\n                        HTML, CSS y JS\n                    ")]),s("div",{staticClass:"skill-bar"},[s("div",{staticClass:"bar b95"})])]),s("li",[s("div",{staticClass:"skill-name"},[e._v("\n                        VueJS, NUXT\n                    ")]),s("div",{staticClass:"skill-bar"},[s("div",{staticClass:"bar b80"})])]),s("li",[s("div",{staticClass:"skill-name"},[e._v("\n                        Supervisión\n                    ")]),s("div",{staticClass:"skill-bar"},[s("div",{staticClass:"bar b60"})])]),s("li",[s("div",{staticClass:"skill-name"},[e._v("\n                        Diseño Web\n                    ")]),s("div",{staticClass:"skill-bar"},[s("div",{staticClass:"bar b70"})])]),s("li",[s("div",{staticClass:"skill-name"},[e._v("\n                        Inglés\n                    ")]),s("div",{staticClass:"skill-bar"},[s("div",{staticClass:"bar b80"})])]),s("li",[s("div",{staticClass:"skill-name"},[e._v("\n                        Contacto con Clientes\n                    ")]),s("div",{staticClass:"skill-bar"},[s("div",{staticClass:"bar b80"})])])]),s("h2",[e._v("Experiencia")]),s("ul",{staticClass:"experience-list"},[s("li",[s("div",{staticClass:"experience-head"},[s("div",{staticClass:"date"},[s("span",[e._v("2014")]),s("strong",[e._v("Act.")])]),s("div",{staticClass:"name"},[s("h3",[e._v("Freelancer")])])])]),s("li",[s("div",{staticClass:"experience-head"},[s("div",{staticClass:"date"},[s("span",[e._v("2014")]),s("strong",[e._v("Act.")])]),s("div",{staticClass:"name"},[s("h3",[e._v("Desarrolladora Front")]),s("h4",[e._v("Firesoft International")])])]),s("ul",{staticClass:"experience-content"},[s("li",[e._v("\n                            Supervisión de diversos equipos de trabajo.\n                        ")]),s("li",[e._v("Supervisión del departamento de Diseño.")]),s("li",[e._v("Desarrollo web responsivo.")]),s("li",[e._v("Desarrollo de Aplicaciones Web con VueJS y NUXT.")]),s("li",[e._v("Conexión con APIs.")])])])]),s("h2",[e._v("Certificados")]),s("ul",{staticClass:"certifieds"},[s("li",[s("div",{staticClass:"date"},[e._v("2016")]),s("div",{staticClass:"text"},[s("h3",[e._v("Curso de Programación Básica")]),s("h4",[e._v("Platzi")])])]),s("li",[s("div",{staticClass:"date"},[e._v("2016")]),s("div",{staticClass:"text"},[s("h3",[e._v("Curso de Marca Personal")]),s("h4",[e._v("Platzi")])])]),s("li",[s("div",{staticClass:"date"},[e._v("2016")]),s("div",{staticClass:"text"},[s("h3",[e._v("Curso de desarrollo Web Online")]),s("h4",[e._v("Platzi")])])]),s("li",[s("div",{staticClass:"date"},[e._v("2016")]),s("div",{staticClass:"text"},[s("h3",[e._v("Curso de Responsive Design")]),s("h4",[e._v("Platzi")])])]),s("li",[s("div",{staticClass:"date"},[e._v("2016")]),s("div",{staticClass:"text"},[s("h3",[e._v("Curso de PostCSS")]),s("h4",[e._v("Platzi")])])])])])])])}],n={name:"about",data:function(){return{}},methods:{}},l=n,r=(s("0a37"),s("2877")),o=Object(r["a"])(l,a,i,!1,null,"6fb0af22",null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.ecec5ff6.js.map