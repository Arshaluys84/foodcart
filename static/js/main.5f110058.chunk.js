(this.webpackJsonpfoods=this.webpackJsonpfoods||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__h2dII",control:"Checkout_control__DwLT9",actions:"Checkout_actions__1KWvW",submit:"Checkout_submit__1YUXd",invalid:"Checkout_invalid__1nh42"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3FpfT",total:"Cart_total__3BSyY",actions:"Cart_actions__1ZIa8","button--alt":"Cart_button--alt__3iZCl",button:"Cart_button__1iUne"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2t2jZ",summary:"CartItem_summary__2KYsz",price:"CartItem_price__2d0v-",amount:"CartItem_amount__2AY2_",actions:"CartItem_actions__13B76"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3xwUQ",icon:"HeaderCartButton_icon__1syVw",badge:"HeaderCartButton_badge__1y1kz",bump:"HeaderCartButton_bump__189ko"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__sQBfg",description:"MealItem_description__3RAek",price:"MealItem_price__2vquZ"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3uuKH","meals-appear":"AvailableMeals_meals-appear__21Rel",mealsLoading:"AvailableMeals_mealsLoading__3xlXe",mealsError:"AvailableMeals_mealsError__3IR0Y"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1qwOD",modal:"Modal_modal__1sle8","slide-down":"Modal_slide-down__1PEDc"}},function(e,t,n){e.exports={header:"Header_header__2uwOQ","main-image":"Header_main-image__1eeiu"}},,function(e,t,n){e.exports={input:"Input_input__nr4_X"}},function(e,t,n){e.exports={form:"MealItemForm_form__3h3Ok"}},function(e,t,n){e.exports={card:"Card_card__4Z2H0"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2M8RU"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=(n(27),n(2)),o=n(0),l=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsx)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"}),c(!0)},className:"top ".concat(n?"clicked":""),children:"\u2191"})},u=n(6),d=n.n(u),j=n(12),m=n(4),b=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),O=n(16),h=n.n(O),p=function(e){var t=e.hideCartHandler;return Object(o.jsx)("div",{className:h.a.backdrop,onClick:t})},x=function(e){var t=e.children;return Object(o.jsxs)("div",{className:h.a.modal,children:[t," "]})},f=document.getElementById("overlays"),_=function(e){var t=e.children,n=e.hideCartHandler;return Object(o.jsxs)("div",{children:[s.a.createPortal(Object(o.jsx)(p,{hideCartHandler:n}),f),s.a.createPortal(Object(o.jsx)(x,{children:t}),f)]})},v=n(5),C=n.n(v),y=n(7),g=n.n(y),N=function(e){var t=e.price,n=e.amount,a=e.name,c=e.onRemove,r=e.onAdd,s="$".concat(t.toFixed(2));return Object(o.jsxs)("li",{className:g.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:a}),Object(o.jsxs)("div",{className:g.a.summary,children:[Object(o.jsx)("span",{className:g.a.price,children:s}),Object(o.jsxs)("span",{className:g.a.amount,children:["x ",n]})]})]}),Object(o.jsxs)("div",{className:g.a.actions,children:[Object(o.jsx)("button",{onClick:c,children:"\u2212"}),Object(o.jsx)("button",{onClick:r,children:"+"})]})]})},w=n(3),k=n.n(w),A=function(e){var t=e.onCancel,n=e.onConfirm,c=Object(a.useState)({name:!0,street:!0,postal:!0,city:!0}),r=Object(i.a)(c,2),s=r[0],l=r[1],u=function(e){return""===e.trim()},d=Object(a.useRef)(),j=Object(a.useRef)(),m=Object(a.useRef)(),b=Object(a.useRef)();return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=d.current.value,a=j.current.value,c=b.current.value,r=m.current.value,s=!u(t),i=!u(a),o=!u(c),O=5===r.trim().length;l({name:s,street:i,postal:O,city:o}),s&&i&&O&&o&&(n({name:t,street:a,city:c,postal:r}),console.log(t,a,c,r))},className:k.a.form,children:[Object(o.jsxs)("div",{className:"".concat(k.a.control," ").concat(s.name?"":k.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:d}),!s.name&&Object(o.jsx)("p",{children:"Enter name please"})]}),Object(o.jsxs)("div",{className:"".concat(k.a.control," ").concat(s.street?"":k.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"street",children:"Your street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:j}),!s.street&&Object(o.jsx)("p",{children:"Enter street please"})]}),Object(o.jsxs)("div",{className:"".concat(k.a.control," ").concat(s.postal?"":k.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Your postal code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:m}),!s.postal&&Object(o.jsx)("p",{children:"Enter 5 chars please"})]}),Object(o.jsxs)("div",{className:"".concat(k.a.control," ").concat(s.city?"":k.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"city",children:"Your city"}),Object(o.jsx)("input",{type:"text",id:"city",ref:b}),!s.city&&Object(o.jsx)("p",{children:"Enter city please"})]}),Object(o.jsxs)("div",{className:k.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:t,children:"Cancel"}),Object(o.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})},I=function(e){var t=e.hideCartHandler,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),O=u[0],h=u[1],p=Object(a.useState)(),x=Object(i.a)(p,2),f=x[0],v=x[1],y=Object(a.useContext)(b),g=function(e){y.removeItem(e)},w=function(e){y.addItem(Object(m.a)(Object(m.a)({},e),{},{amount:1}))},k=Object(o.jsx)("ul",{className:C.a["cart-items"],children:y.items.map((function(e){return Object(o.jsx)(N,{name:e.name,price:e.price,amount:e.amount,onRemove:g.bind(null,e.id),onAdd:w.bind(null,e)},e.id)}))}),I=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch("https://foods-fe8e8-default-rtdb.firebaseio.com/opders.json",{method:"POST",body:JSON.stringify({user:t,orderItems:y.items,total:y.totalAmount})});case 3:h(!1),v(!0),y.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=Object(o.jsxs)(o.Fragment,{children:[k,Object(o.jsxs)("div",{className:C.a.total,children:[Object(o.jsx)("span",{children:"Total amount"}),Object(o.jsx)("span",{children:y.totalAmount.toFixed(2)})]}),!r&&Object(o.jsxs)("div",{className:C.a.actions,children:[Object(o.jsx)("button",{className:C.a["button--alt"],onClick:t,children:"Cancel"}),y.items.length>0&&Object(o.jsx)("button",{className:C.a.button,onClick:function(){s(!0)},children:"Order"})]}),r&&Object(o.jsx)(A,{onCancel:t,onConfirm:I})]}),S=Object(o.jsx)("p",{children:"Your order is sending...."}),M=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:"Your order was succesfully sent"}),Object(o.jsx)("div",{className:C.a.actions,children:Object(o.jsx)("button",{className:C.a.button,onClick:t,children:"Cancel"})})]});return Object(o.jsxs)(_,{hideCartHandler:t,children:[!O&&!f&&H,O&&S,f&&M]})},H=n.p+"static/media/meal.df0cceb9.jpg",S=n(17),M=n.n(S),F=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},E=n(10),R=n.n(E),Y=function(e){var t=e.text,n=e.showCartHandler,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],l=r[1],u=Object(a.useContext)(b).items,d=u.reduce((function(e,t){return e+t.amount}),0),j="".concat(R.a.button," ").concat(s?R.a.bump:"");return Object(a.useEffect)((function(){if(0!==u.length){l(!0);var e=setTimeout((function(){l(!1)}),300);return function(){clearTimeout(e)}}}),[u]),Object(o.jsxs)("button",{className:j,onClick:n,children:[Object(o.jsx)("span",{className:R.a.icon,children:Object(o.jsx)(F,{})}),Object(o.jsx)("span",{children:t}),Object(o.jsx)("span",{className:R.a.badge,children:d})]})},D=function(e){var t=e.showCartHandler;return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsxs)("header",{className:M.a.header,children:[Object(o.jsx)("h1",{children:"Meals"}),Object(o.jsx)(Y,{text:"Your Cart ",showCartHandler:t})]}),Object(o.jsx)("div",{className:M.a["main-image"],children:Object(o.jsx)("img",{src:H,alt:H})})]})},B=n(13),T=n.n(B),L=n(19),P=n.n(L),z=function(e){var t=e.input,n=e.label;return Object(o.jsxs)("div",{className:P.a.input,children:[Object(o.jsx)("label",{htmlFor:t.id,children:n}),Object(o.jsx)("input",Object(m.a)(Object(m.a)({id:t.id},t),{},{onChange:t.onChange}))]})},Z=n(20),U=n.n(Z),V=function(e){var t=e.id,n=e.onAddAmount,c=Object(a.useState)(1),r=Object(i.a)(c,2),s=r[0],l=r[1],u=Object(a.useState)(!0),d=Object(i.a)(u,2),j=d[0],m=d[1];return Object(o.jsxs)("form",{className:U.a.form,onSubmit:function(e){e.preventDefault(),s<1||s>50?m(!1):n(+s)},children:[Object(o.jsx)(z,{label:"amount:",input:{onChange:function(e){l(e.target.value)},defaultValue:s,id:"amount"+t,type:"number",min:"1",max:"50",step:"1"}}),Object(o.jsx)("button",{type:"submit",children:"Add to Cart"}),!j&&Object(o.jsx)("p",{children:"Please enter valid amount (1-50)"})]})},q=function(e){var t=e.name,n=e.description,c=e.price,r=e.id,s=Object(a.useContext)(b),i="$".concat(c.toFixed(2));return Object(o.jsxs)("li",{className:T.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("div",{className:T.a.description,children:n}),Object(o.jsx)("div",{className:T.a.price,children:i})]}),Object(o.jsx)("div",{children:Object(o.jsx)(V,{onAddAmount:function(e){s.addItem({id:r,name:t,description:n,price:c,amount:e})}})})]})},J=n(21),K=n.n(J),Q=function(e){var t=e.children;return Object(o.jsx)("div",{className:K.a.card,children:t})},X=n(14),W=n.n(X),$=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),l=s[0],u=s[1],m=Object(a.useState)(),b=Object(i.a)(m,2),O=b[0],h=b[1];return Object(a.useEffect)((function(){u(!0);var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://foods-fe8e8-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something was wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),h(e.message)}))}),[]),l?Object(o.jsx)("section",{className:W.a.mealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})}):O?Object(o.jsx)("section",{className:W.a.mealsError,children:Object(o.jsx)("p",{children:O})}):Object(o.jsx)("section",{className:W.a.meals,children:Object(o.jsx)(Q,{children:Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)(q,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}))})})})},G=n(22),ee=n.n(G),te=function(){return Object(o.jsxs)("section",{className:ee.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},ne=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(te,{}),Object(o.jsx)($,{})]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.payload.amount*t.payload.price,c=e.items.findIndex((function(e){return e.id===t.payload.id})),r=e.items[c];if(r){var s=Object(m.a)(Object(m.a)({},r),{},{amount:r.amount+t.payload.amount});(n=Object(ae.a)(e.items))[c]=s}else n=e.items.concat(t.payload);return{totalAmount:a,items:n}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.payload})),l=e.items[o];if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.payload}));else{var u=Object(m.a)(Object(m.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=u}return{totalAmount:e.totalAmount-l.price,items:i}}return t.type,ce},se=function(e){var t=e.children,n=Object(a.useReducer)(re,ce),c=Object(i.a)(n,2),r=c[0],s=c[1],l={items:r.items,totalAmount:r.totalAmount,addItem:function(e){s({type:"ADD",payload:e})},removeItem:function(e){s({type:"REMOVE",payload:e})},clearCart:function(){s({type:"CLEAR"})}};return Object(o.jsx)(b.Provider,{value:l,children:t})};var ie=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(se,{children:[Object(o.jsx)(D,{showCartHandler:function(){c(!0)}}),n&&Object(o.jsx)(I,{hideCartHandler:function(){c(!1)}}),Object(o.jsxs)("main",{children:[Object(o.jsx)(ne,{}),Object(o.jsx)(l,{})]})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(ie,{})}),document.getElementById("root")),oe()}],[[30,1,2]]]);
//# sourceMappingURL=main.5f110058.chunk.js.map