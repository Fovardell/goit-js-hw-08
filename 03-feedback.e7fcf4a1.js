!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var n=r("1WSnx"),l={form:document.querySelector(".feedback-form"),email:document.querySelector('input[name="email"]'),message:document.querySelector('textarea[name="message"]'),submit:document.querySelector('button[type="submit"]')},u=l.form,i=l.email,s=l.message,c=l.submit,m=e(n).throttle((function(){var e={email:i.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);u.addEventListener("input",m);var f=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};i.value=f.email,s.value=f.message,c.addEventListener("click",(function(e){e.preventDefault(),i.value&&s.value&&(console.log("Your email: ".concat(i.value,"\nYour message: ").concat(s.value)),u.reset(),localStorage.removeItem("feedback-form-state"))}))}();
//# sourceMappingURL=03-feedback.e7fcf4a1.js.map