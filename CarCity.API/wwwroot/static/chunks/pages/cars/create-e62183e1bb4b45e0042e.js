_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/75s":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cars/create",function(){return r("AQdt")}])},"20a2":function(e,t,r){e.exports=r("nOHt")},AQdt:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return d}));var a=r("nKUr"),c=r("o0o1"),n=r.n(c),l=r("HaE+"),o=r("YaM9"),s=r("bHkH"),i=r("20a2");var d=!0;t.default=function(e){var t=Object(i.useRouter)(),r=function(){var e=Object(l.a)(n.a.mark((function e(r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.Cars.create(r);case 2:a=e.sent,console.log(a),t.replace("/cars");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(s.a,{onAddMeetup:r,carTypeData:e.carTypes})}},"F0+R":function(e,t,r){e.exports={form:"NewCarForm_form__1-3jZ",cardAdd:"NewCarForm_cardAdd__2nmMG",control:"NewCarForm_control__1Jbd2",actions:"NewCarForm_actions__2sDYH",formRow:"NewCarForm_formRow__3LHac"}},bHkH:function(e,t,r){"use strict";var a=r("nKUr"),c=r("q1tI"),n=r("leqP"),l=r("F0+R"),o=r.n(l);t.a=function(e){var t,r=Object(c.useRef)(),l=Object(c.useRef)(),s=Object(c.useRef)(),i=Object(c.useRef)(),d=Object(c.useRef)(),u=Object(c.useRef)(),j=Object(c.useRef)();return Object(a.jsx)("div",{className:"container mt-2",children:Object(a.jsx)("div",{className:"row justify-content-center ".concat(o.a.formRow," "),children:Object(a.jsx)(n.a,{style:o.a.cardAdd,children:Object(a.jsxs)("form",{className:o.a.form,onSubmit:function(t){t.preventDefault();var a={brand:r.current.value,model:l.current.value,year:s.current.value,km:i.current.value,color:d.current.value,imageUrl:u.current.value,carTypeId:e.carTypeData.filter((function(e){return e.type===j.current.value}))[0].id};e.onAddMeetup(a)},children:[Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"title",children:"Brand"}),Object(a.jsx)("input",{type:"text",required:!0,id:"title",defaultValue:e.carData?e.carData.brand:"",ref:r})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"model",children:"Model"}),Object(a.jsx)("input",{type:"text",required:!0,id:"model",defaultValue:e.carData?e.carData.model:"",ref:l})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"year",children:"Year"}),Object(a.jsx)("input",{type:"text",required:!0,id:"year",defaultValue:e.carData?e.carData.year:"",ref:s})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"km",children:"KM"}),Object(a.jsx)("input",{id:"km",type:"text",defaultValue:e.carData?e.carData.km:"",ref:i})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"color",children:"Color"}),Object(a.jsx)("input",{required:!0,type:"text",id:"color",defaultValue:e.carData?e.carData.color:"",ref:d})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"image",children:"Image"}),Object(a.jsx)("input",{type:"text",required:!0,id:"image",defaultValue:e.carData?e.carData.imageUrl:"",ref:u})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"carType",children:"CarTypeId"}),Object(a.jsx)("select",{ref:j,name:"cars",id:"cars",children:null===(t=e.carTypeData)||void 0===t?void 0:t.map((function(t){var r;return Object(a.jsx)("option",{selected:t.id===(null===(r=e.carData)||void 0===r?void 0:r.carType.id)?"selected":"",value:t.type,children:t.type})}))})]}),Object(a.jsx)("div",{className:o.a.actions,children:Object(a.jsx)("button",{children:"Add Meetup"})})]})})})})}},leqP:function(e,t,r){"use strict";var a=r("nKUr"),c=r("rQAc"),n=r.n(c);t.a=function(e){return Object(a.jsx)("div",{className:"".concat(n.a.card," ").concat(e.style),children:e.children})}},rQAc:function(e,t,r){e.exports={card:"Card_card__3KSLO"}}},[["/75s",0,2,1,3]]]);