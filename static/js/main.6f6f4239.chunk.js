(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(32)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(14),n(3)),i=n(4),m=n(6),s=n(5),u=n(7),h=(n(16),n(18),function(e){var t=e.title;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,t))}),f=(n(20),n(22),function(){return r.a.createElement("span",{className:"spinner"},r.a.createElement("i",{className:"fas fa-spin fa-pulse fa-spinner"}))}),E=function(e){var t=e.quote;return r.a.createElement(a.Fragment,null,r.a.createElement("p",{id:"text"},r.a.createElement("span",{className:"quote-content-icon"},r.a.createElement("i",{className:"fas fa-quote-left"})),t.text),r.a.createElement("p",{id:"author"},"\u2014",r.a.createElement("em",null,t.author)))},p=(n(24),function(){return r.a.createElement("div",{className:"error-box"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-exclamation-circle"})),r.a.createElement("span",null,"Something went wrong! Please try again."))}),d=(n(26),function(e){var t=e.onChangeTheme,n=e.activeTheme;return r.a.createElement("ul",{className:"theme-list"},["#3498db","#9b59b6","#e67e22","#c0392b","#2c3e50"].map(function(e,a){return r.a.createElement("li",{key:e,className:"theme-item theme-item-".concat(a+1," ").concat(n===e?"active-theme":""),onClick:function(){return t(e)}})}))}),g=function(e){var t=e.quote,n=e.onNewQuote,o=e.isFetching,c=e.isError,l=e.onChangeTheme,i=e.activeTheme;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"quote-content"},o&&r.a.createElement(f,null),c&&r.a.createElement(p,null),r.a.createElement("div",{className:o||c?"hide-quote":""},r.a.createElement(E,{quote:t}))),r.a.createElement(d,{onChangeTheme:l,activeTheme:i}),r.a.createElement("div",{className:"quote-controls"},r.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=".concat(t.text,"- ").concat(t.author),rel:"noopener noreferrer",target:"_blank",id:"tweet-quote"},r.a.createElement("i",{className:"fab fa-twitter"})," Tweet"),r.a.createElement("button",{type:"button",id:"new-quote",onClick:n,disabled:o},r.a.createElement("i",{className:"fab fa-telegram-plane"})," New Quote")))},w=(n(28),function(e){var t=e.children,n=e.theme;return r.a.createElement("div",{className:"theme",style:{backgroundColor:n,color:n}},t)}),v=(n(30),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"API:"," ",r.a.createElement("a",{className:"footer-link",href:"https://forismatic.com/en/",target:"_blank",rel:"noopener noreferrer"},"forismatic")),r.a.createElement("span",null,"|"),r.a.createElement("span",null,r.a.createElement("a",{className:"footer-link",href:"https://github.com/rmasianjr/random-quote-machine",target:"_blank",rel:"noopener noreferrer"},"Repo Link")),r.a.createElement("p",null,"Created by:"," ",r.a.createElement("a",{className:"footer-link",href:"https://twitter.com/rmasianjr",target:"_blank",rel:"noopener noreferrer"},"Ricardo Masian Jr.")))}),b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isFetching:!1,quote:{text:"",author:""},error:!1,theme:"#3498db"},n.getNewQuote=function(){n.setState({isFetching:!n.state.isFetching,error:!1}),fetch("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en").then(function(e){return e.json()}).then(function(e){var t=e.quoteAuthor,a={text:e.quoteText,author:t||"Unknown"};n.setState({isFetching:!n.state.isFetching,quote:a})}).catch(function(e){console.log(e),n.setState({error:!0,isFetching:!n.state.isFetching})})},n.handleThemeColor=function(e){n.setState({theme:e})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getNewQuote()}},{key:"render",value:function(){var e=this.state,t=e.isFetching,n=e.quote,a=e.error,o=e.theme;return r.a.createElement(w,{theme:o},r.a.createElement("div",{className:"container"},r.a.createElement(h,{title:"Random Quote Machine"}),r.a.createElement("div",{id:"quote-box"},r.a.createElement(g,{quote:n,onNewQuote:this.getNewQuote,isFetching:t,isError:a,onChangeTheme:this.handleThemeColor,activeTheme:o})),r.a.createElement(v,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.6f6f4239.chunk.js.map