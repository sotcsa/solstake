(this.webpackJsonpsolstake=this.webpackJsonpsolstake||[]).push([[0],{152:function(e,t,a){},153:function(e,t){},157:function(e,t){},192:function(e,t){},193:function(e,t){},217:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),s=(a(152),a(87),a(83)),i=a(22),o=a(3),d=a.n(o),u=a(8),h=a(20),j=a(264),b=a(265),p=a(266),S=a(255),f=a(283),m=a(271),O=a(133),v=a(272),x=a(282),q=a(286),y=a(287),g=a(274),k=a(63),w=a(275),E=a(262),Z=a(276),M=a(273),N=a(26),H=a(28),A=new N.c("Stake11111111111111111111111111111111111111");function C(e,t){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(d.a.mark((function e(t,a){var n,c,l,r,s,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Promise.all(Array.from(Array(20).keys()).map(function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="stake:".concat(t),e.abrupt("return",N.c.createWithSeed(a,n,A).then((function(e){return{seed:n,pubkey:e}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return c=e.sent,e.next=6,Promise.all(Array.from(Array(20).keys()).map(function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t),e.abrupt("return",N.c.createWithSeed(a,n,A).then((function(e){return{seed:n,pubkey:e}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.next=9,t.getParsedProgramAccounts(N.d.programId,{filters:[{dataSize:200},{memcmp:{offset:12,bytes:a.toBase58()}}]});case 9:return e.sent.forEach((function(e){var t=e.pubkey,a=e.account;if((null===a||void 0===a?void 0:a.data)&&"parsed"in(null===a||void 0===a?void 0:a.data)){var r,s,i,o;console.log(null===a||void 0===a?void 0:a.data.parsed);var d=null===a||void 0===a?void 0:a.data.parsed,u=null===(r=c.find((function(e){return e.pubkey.equals(t)})))||void 0===r?void 0:r.seed,h=null===(s=l.find((function(e){return e.pubkey.equals(t)})))||void 0===s?void 0:s.seed,j=u||h||"".concat(t.toBase58().slice(12),"...");n.push({address:t,seed:j,balance:null!==(i=parseInt(null===(o=d.info.stake)||void 0===o?void 0:o.delegation.stake))&&void 0!==i?i:0/N.b,stakeAccount:d,inflationRewards:[]})}})),n.sort((function(e,t){return e.seed<t.seed?-1:e.seed>t.seed?1:0})),e.next=14,t.getEpochInfo();case 14:r=e.sent,s=Math.min.apply(Math,Object(H.a)(n.map((function(e){var t,a,n;return parseInt(null!==(t=null===(a=e.stakeAccount)||void 0===a||null===(n=a.info.stake)||void 0===n?void 0:n.delegation.activationEpoch)&&void 0!==t?t:"1000")})))),console.log("minEpoch: ".concat(s)),i=r.epoch-1;case 18:if(!(i>s)){e.next=28;break}return e.next=21,t.getInflationReward(n.map((function(e){return e.address})),i);case 21:o=e.sent,console.log(i),console.log(o),o.forEach((function(e,t){e&&n[t].inflationRewards.push(e)}));case 25:i--,e.next=18;break;case 28:return e.abrupt("return",n);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=a(252),P=a(254),B=a(258),R=a(259),z=a(221),T=a(260),D=a(261),F=a(256),W=a(257),G=a(263),J=a(7);function K(e){var t,a,c=e.stakeAccountMeta,l=Object(n.useState)(!1),r=Object(h.a)(l,2),s=r[0],i=r[1];return Object(J.jsx)(x.a,{m:.5,children:Object(J.jsxs)(I.a,{variant:"outlined",children:[Object(J.jsxs)(P.a,{children:[Object(J.jsx)(k.a,{component:"h1",gutterBottom:!0,children:"".concat(c.seed)}),Object(J.jsx)(k.a,{variant:"h6",component:"h2",children:"Balance: ".concat(c.balance," SOL")}),Object(J.jsx)(k.a,{color:"textSecondary",children:c.stakeAccount?"Type: ".concat(c.stakeAccount.type,", activation epoch: ").concat(null===(t=c.stakeAccount.info.stake)||void 0===t?void 0:t.delegation.activationEpoch,", voter: ").concat(null===(a=c.stakeAccount.info.stake)||void 0===a?void 0:a.delegation.voter):"No data"}),Object(J.jsxs)(S.a,{onClick:function(){return i(!s)},children:["Rewards ",c.inflationRewards.reduce((function(e,t){return e+t.amount}),0)/N.b," SOL",s?Object(J.jsx)(F.a,{}):Object(J.jsx)(W.a,{})]}),Object(J.jsx)(B.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(J.jsx)(R.a,{component:"div",disablePadding:!0,children:c.inflationRewards.map((function(e){return Object(J.jsx)(z.a,{style:{paddingLeft:4},children:Object(J.jsx)(T.a,{primary:"Epoch: ".concat(e.epoch,", reward: ").concat(e.amount/N.b," SOL")})})}))})})]}),Object(J.jsx)(D.a,{children:Object(J.jsx)(E.a,{href:"https://explorer.solana.com/address/".concat(c.address.toBase58()),children:Object(J.jsx)(G.a,{})})})]})})}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var U=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#022f4c;}.cls-2{fill:#fdc100;}")),V=n.createElement("path",{className:"cls-1",d:"M28.974,31.293a7.473,7.473,0,0,1-1.117,2.8,5.43,5.43,0,0,1-1.991,1.728,9.1,9.1,0,0,1-2.932.876,28.6,28.6,0,0,1-3.939.24H1.619q.613-1.53,1.183-3.107T3.938,30.68H19.826a2.092,2.092,0,0,0,1.73-.591,3.04,3.04,0,0,0,.459-1.86,1.2,1.2,0,0,0-.35-1.006,1.745,1.745,0,0,0-1.051-.263h-8.14a12.268,12.268,0,0,1-5.362-.919A3.172,3.172,0,0,1,5.3,22.978a5.759,5.759,0,0,1,.175-1.4L6,18.95a7.447,7.447,0,0,1,1.116-2.8,5.4,5.4,0,0,1,2.014-1.728,9.388,9.388,0,0,1,2.953-.876,28.77,28.77,0,0,1,3.94-.24H32.037l-2.407,6.3H15.144a2.157,2.157,0,0,0-1.686.569,2.741,2.741,0,0,0-.5,1.839q0,1.269,1.4,1.268H22.5a12.007,12.007,0,0,1,5.361.942,3.22,3.22,0,0,1,1.817,3.085,7.105,7.105,0,0,1-.132,1.313Z"}),Y=n.createElement("path",{className:"cls-1",d:"M40.922,36.938A10.277,10.277,0,0,1,35.1,35.582a4.933,4.933,0,0,1-1.969-4.377,11.687,11.687,0,0,1,.306-2.582l1.488-7q.918-4.419,3.654-6.368a12.486,12.486,0,0,1,7.375-1.947h7.966a10.388,10.388,0,0,1,5.842,1.335,4.9,4.9,0,0,1,1.948,4.354,11.976,11.976,0,0,1-.306,2.626l-1.488,7q-.965,4.466-3.677,6.39a12.486,12.486,0,0,1-7.352,1.925ZM54.183,21.62c.029-.145.05-.276.066-.393a2.953,2.953,0,0,0,.022-.351q0-1.312-1.708-1.313H44.6a2.643,2.643,0,0,0-1.62.459,2.5,2.5,0,0,0-.832,1.6l-1.488,7c-.029.147-.051.277-.066.394a2.95,2.95,0,0,0-.022.35,1.161,1.161,0,0,0,.416,1.029,2.224,2.224,0,0,0,1.248.284H50.2a2.715,2.715,0,0,0,1.663-.459,2.5,2.5,0,0,0,.831-1.6Z"}),$=n.createElement("path",{className:"cls-1",d:"M63.024,36.938l6.521-30.68,7.747-2.407L70.245,36.938Z"}),X=n.createElement("path",{className:"cls-1",d:"M101.714,31.293a7.49,7.49,0,0,1-1.117,2.8,5.43,5.43,0,0,1-1.991,1.728,9.093,9.093,0,0,1-2.933.876,28.576,28.576,0,0,1-3.939.24H74.358q.615-1.53,1.183-3.107t1.138-3.151H92.565a2.092,2.092,0,0,0,1.73-.591,3.033,3.033,0,0,0,.46-1.86,1.192,1.192,0,0,0-.351-1.006,1.741,1.741,0,0,0-1.05-.263h-8.14a12.26,12.26,0,0,1-5.361-.919,3.171,3.171,0,0,1-1.817-3.063,5.807,5.807,0,0,1,.174-1.4l.525-2.626a7.447,7.447,0,0,1,1.118-2.8,5.4,5.4,0,0,1,2.012-1.728,9.394,9.394,0,0,1,2.954-.876,28.781,28.781,0,0,1,3.94-.24h16.017l-2.406,6.3H87.883a2.154,2.154,0,0,0-1.685.569,2.741,2.741,0,0,0-.5,1.839q0,1.269,1.4,1.268h8.14a12.009,12.009,0,0,1,5.362.942,3.217,3.217,0,0,1,1.816,3.085,7.1,7.1,0,0,1-.131,1.313Z"}),ee=n.createElement("path",{className:"cls-1",d:"M116.506,36.676a6.371,6.371,0,0,1-1.531.5,10.024,10.024,0,0,1-2.233.24q-3.544,0-5.186-1.729a7.21,7.21,0,0,1-1.641-5.142,23.633,23.633,0,0,1,.612-4.859l1.488-7.045h-2.494l2.013-5.34h1.619l1.05-4.99,7.748-2.407-1.576,7.4h4.377l-2.014,5.34h-3.5l-1.488,7.045a10.348,10.348,0,0,0-.305,2.408q0,2.976,2.756,2.976a4.319,4.319,0,0,0,2.67-.613Z"}),te=n.createElement("path",{className:"cls-1",d:"M127.754,36.938a10.426,10.426,0,0,1-5.208-.984,3.389,3.389,0,0,1-1.619-3.13,8.069,8.069,0,0,1,.219-1.663l.569-2.626a6.2,6.2,0,0,1,2.8-4.266,11.584,11.584,0,0,1,6.04-1.335H138.3a9,9,0,0,1,2.1.2,4.812,4.812,0,0,1,1.357.548l.481-2.189a2.337,2.337,0,0,0,.044-.525,1.076,1.076,0,0,0-.635-1.051,4.719,4.719,0,0,0-1.948-.306H125.435l2.056-6.3h13.962a16.181,16.181,0,0,1,4,.416,7.345,7.345,0,0,1,2.561,1.137,3.871,3.871,0,0,1,1.335,1.685,5.686,5.686,0,0,1,.372,2.058,6.514,6.514,0,0,1-.088,1.049q-.088.527-.175,1.1l-3.458,16.193a4.817,4.817,0,0,1-2.714-.809,3.3,3.3,0,0,1-1.4-2.6A6.572,6.572,0,0,1,139.353,36a8.349,8.349,0,0,1-4.159.94Zm13.306-9.8a10.245,10.245,0,0,0-1.423-.263,17.347,17.347,0,0,0-1.9-.087h-6.04a7.315,7.315,0,0,0-1.575.131,1.736,1.736,0,0,0-.853.416,1.408,1.408,0,0,0-.372.788,7.267,7.267,0,0,0-.088,1.247c0,.584.174.948.525,1.094a4.147,4.147,0,0,0,1.531.219h6.04a7.849,7.849,0,0,0,2.386-.306,2.244,2.244,0,0,0,1.378-1.488Z"}),ae=n.createElement("path",{className:"cls-1",d:"M168.675,36.938l-5.208-7.483-4.6,3.676-.787,3.807h-7.222l6.522-30.68,7.746-2.407-4.42,20.833,13.479-11.379h8.754L168.807,24.946l9.015,11.992Z"}),ne=n.createElement("path",{className:"cls-1",d:"M188.151,36.938a10.1,10.1,0,0,1-5.733-1.377,5.047,5.047,0,0,1-2.013-4.487,13.459,13.459,0,0,1,.263-2.451l1.487-7a9.818,9.818,0,0,1,3.83-6.368,12.534,12.534,0,0,1,7.2-1.947h7.965a10.34,10.34,0,0,1,5.755,1.356,4.967,4.967,0,0,1,2.035,4.465,8.569,8.569,0,0,1-.086,1.182q-.089.612-.219,1.312l-1.182,5.69H188.2l-.306,1.313c-.03.147-.051.271-.066.372a2.434,2.434,0,0,0-.021.328q0,1.359,1.663,1.357h16.763l-2.277,6.258ZM201.413,21.8c.028-.147.051-.285.066-.416a3.535,3.535,0,0,0,.022-.372q0-1.444-1.707-1.445h-7.966a2.266,2.266,0,0,0-2.451,2.057l-.35,1.795h12.035Z"}),ce=n.createElement("path",{className:"cls-2",d:"M210.078,36.938l1.357-6.345h6.652l-1.357,6.345Z"}),le=n.createElement("path",{className:"cls-2",d:"M221.764,36.938,226.8,13.305h7.222l-5.034,23.633Zm5.47-25.69,1.314-6.259h7.264L234.5,11.248Z"}),re=n.createElement("path",{className:"cls-2",d:"M243.3,36.938a10.275,10.275,0,0,1-5.82-1.356,4.932,4.932,0,0,1-1.97-4.377,11.687,11.687,0,0,1,.306-2.582l1.488-7q.919-4.419,3.655-6.368a12.483,12.483,0,0,1,7.374-1.947H256.3a10.392,10.392,0,0,1,5.843,1.335,4.9,4.9,0,0,1,1.947,4.354,11.976,11.976,0,0,1-.306,2.626l-1.488,7q-.964,4.466-3.677,6.39a12.484,12.484,0,0,1-7.352,1.925ZM256.558,21.62c.028-.145.05-.276.065-.393a2.758,2.758,0,0,0,.023-.351q0-1.312-1.708-1.313h-7.965a2.637,2.637,0,0,0-1.619.459,2.5,2.5,0,0,0-.833,1.6l-1.488,7c-.029.147-.051.277-.065.394a2.753,2.753,0,0,0-.022.35,1.158,1.158,0,0,0,.416,1.029,2.218,2.218,0,0,0,1.247.284h7.966a2.715,2.715,0,0,0,1.663-.459,2.5,2.5,0,0,0,.831-1.6Z"});function se(e,t){var a=e.title,c=e.titleId,l=Q(e,["title","titleId"]);return n.createElement("svg",_({id:"Ebene_2","data-name":"Ebene 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 264.085 48.405",ref:t,"aria-labelledby":c},l),a?n.createElement("title",{id:c},a):null,U,V,Y,$,X,ee,te,ae,ne,ce,le,re)}var ie=n.forwardRef(se),oe=(a.p,a(267)),de=[{address:new N.c(0),seed:"stake:0",balance:123.23,inflationRewards:[]},{address:new N.c(0),seed:"stake:1",balance:221,inflationRewards:[]},{address:new N.c(0),seed:"stake:2",balance:1,inflationRewards:[]}],ue=new N.a(Object(N.e)("mainnet-beta"));var he=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),r=Object(h.a)(l,2),s=r[0],i=r[1],o=Object(n.useState)(null),H=Object(h.a)(o,2),A=H[0],L=H[1],I=Object(n.useState)(de),P=Object(h.a)(I,2),B=P[0],R=P[1],z=Object(n.useState)(!1),T=Object(h.a)(z,2),D=T[0],F=T[1];function W(){F(!1)}function G(){return(G=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=R,e.next=3,C(ue,t);case 3:e.t1=e.sent,(0,e.t0)(e.t1),i(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){R([]),null!==a&&(i(!0),function(e){G.apply(this,arguments)}(a))}),[a]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(j.a,{style:{backgroundColor:"#fdc100"},position:"relative",children:Object(J.jsxs)(b.a,{children:[Object(J.jsx)(ie,{className:"App-logo"}),Object(J.jsx)("div",{style:{flexGrow:1}}),Object(J.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[Object(J.jsx)(p.a,{onClick:function(){F(!0)},children:Object(J.jsx)(oe.a,{})}),Object(J.jsx)(S.a,{variant:"contained",disabled:!0,children:"Demo"}),Object(J.jsx)(S.a,{variant:"contained",children:"Connect wallet"}),Object(J.jsxs)(f.a,{defaultValue:"mainnet-beta",variant:"outlined",children:[Object(J.jsx)(m.a,{value:"mainnet-beta",children:"Mainnet-beta"}),Object(J.jsx)(m.a,{value:"testnet",children:"Testnet"})]})]})]})}),Object(J.jsx)(O.a,{anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!1,children:Object(J.jsx)(m.a,{children:"Demo"})}),Object(J.jsxs)(v.a,{maxWidth:"md",children:[Object(J.jsx)(x.a,{m:1,children:Object(J.jsx)(q.a,{id:"standard-basic",fullWidth:!0,label:"Wallet public key",value:null===a||void 0===a?void 0:a.toBase58(),error:null!==A,helperText:A,onChange:function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=new N.c(t.target.value),L(null),c(a)}catch(n){console.log("".concat(t.target.value," is not a valid PublicKey input")),L("Invalid public key"),c(null)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}),Object(J.jsx)(v.a,{children:s?Object(J.jsx)(M.a,{height:200}):B.map((function(e){return Object(J.jsx)(K,{stakeAccountMeta:e})}))})]}),Object(J.jsxs)(y.a,{fullWidth:!0,open:D,onClose:W,children:[Object(J.jsx)(g.a,{children:Object(J.jsx)(k.a,{variant:"h4",children:"How to use solstake?"})}),Object(J.jsx)(w.a,{children:Object(J.jsxs)(x.a,{m:1,children:[Object(J.jsx)(k.a,{children:"Paste your wallet public key (Stake account authority) to view your stake state, rewards and more"}),Object(J.jsxs)(k.a,{children:["For in-depth staking documentation about solana staking head to ",Object(J.jsx)(E.a,{href:"https://docs.solana.com/staking",children:"Solana staking documentation"})]}),Object(J.jsx)(k.a,{style:{visibility:"hidden"},children:"Spacer"}),Object(J.jsx)(k.a,{variant:"h5",children:"Coming soon"}),Object(J.jsx)(k.a,{children:"Create stake accounts, delegate to validators, unstake, reward overview... All from any popular wallet: solflare, sollet, phantom, ledger..."})]})}),Object(J.jsx)(Z.a,{children:Object(J.jsx)(S.a,{onClick:W,color:"primary",children:"Close"})})]})]})},je=(a(217),a(278)),be=a(290),pe=a(279),Se=a(288);function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var Oe=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#022f4c;}.cls-2{fill:#fdc100;}.cls-3{fill:#fbc004;}.cls-4{fill:#11304a;}")),ve=n.createElement("path",{className:"cls-1",d:"M133.971,75.037a7.457,7.457,0,0,1-1.117,2.8,5.435,5.435,0,0,1-1.99,1.728,9.107,9.107,0,0,1-2.934.876,28.4,28.4,0,0,1-3.938.241H106.616q.614-1.532,1.182-3.108t1.138-3.151h15.887a2.09,2.09,0,0,0,1.729-.591,3.031,3.031,0,0,0,.46-1.86,1.2,1.2,0,0,0-.35-1.007,1.751,1.751,0,0,0-1.05-.262h-8.141a12.248,12.248,0,0,1-5.361-.919,3.172,3.172,0,0,1-1.817-3.064,5.8,5.8,0,0,1,.174-1.4l.526-2.626a7.426,7.426,0,0,1,1.117-2.8,5.4,5.4,0,0,1,2.013-1.729,9.386,9.386,0,0,1,2.954-.876,28.6,28.6,0,0,1,3.939-.24h16.018l-2.407,6.3H120.14a2.152,2.152,0,0,0-1.684.569,2.738,2.738,0,0,0-.5,1.838q0,1.271,1.4,1.269h8.141a12.009,12.009,0,0,1,5.361.941,3.219,3.219,0,0,1,1.816,3.086,7.181,7.181,0,0,1-.13,1.313Z"}),xe=n.createElement("path",{className:"cls-1",d:"M145.918,80.683a10.269,10.269,0,0,1-5.82-1.357,4.935,4.935,0,0,1-1.97-4.377,11.754,11.754,0,0,1,.306-2.582l1.488-7q.921-4.419,3.655-6.368a12.488,12.488,0,0,1,7.375-1.947h7.966a10.4,10.4,0,0,1,5.842,1.334,4.9,4.9,0,0,1,1.948,4.355,11.916,11.916,0,0,1-.306,2.626l-1.488,7q-.963,4.464-3.677,6.39a12.485,12.485,0,0,1-7.353,1.926ZM159.18,65.364c.029-.145.051-.277.066-.394a2.923,2.923,0,0,0,.022-.35q0-1.313-1.707-1.313H149.6a2.633,2.633,0,0,0-1.619.46,2.5,2.5,0,0,0-.832,1.6l-1.487,7c-.03.146-.052.278-.067.394a2.948,2.948,0,0,0-.021.35,1.161,1.161,0,0,0,.416,1.029,2.213,2.213,0,0,0,1.247.284H155.2a2.705,2.705,0,0,0,1.662-.46,2.5,2.5,0,0,0,.832-1.6Z"}),qe=n.createElement("path",{className:"cls-1",d:"M168.021,80.683,174.542,50l7.747-2.407-7.046,33.088Z"}),ye=n.createElement("path",{className:"cls-1",d:"M206.71,75.037a7.456,7.456,0,0,1-1.116,2.8,5.438,5.438,0,0,1-1.991,1.728,9.086,9.086,0,0,1-2.933.876,28.417,28.417,0,0,1-3.939.241H179.356q.612-1.532,1.182-3.108t1.138-3.151h15.887a2.091,2.091,0,0,0,1.729-.591,3.031,3.031,0,0,0,.459-1.86,1.2,1.2,0,0,0-.35-1.007,1.749,1.749,0,0,0-1.05-.262H190.21a12.248,12.248,0,0,1-5.361-.919,3.171,3.171,0,0,1-1.816-3.064,5.708,5.708,0,0,1,.175-1.4l.525-2.626a7.425,7.425,0,0,1,1.116-2.8,5.4,5.4,0,0,1,2.013-1.729,9.393,9.393,0,0,1,2.955-.876,28.591,28.591,0,0,1,3.938-.24h16.019l-2.407,6.3H192.879a2.149,2.149,0,0,0-1.683.569,2.738,2.738,0,0,0-.5,1.838q0,1.271,1.4,1.269h8.141a12.009,12.009,0,0,1,5.361.941,3.22,3.22,0,0,1,1.817,3.086,7.187,7.187,0,0,1-.131,1.313Z"}),ge=n.createElement("path",{className:"cls-1",d:"M221.5,80.42a6.4,6.4,0,0,1-1.533.5,9.924,9.924,0,0,1-2.232.241q-3.544,0-5.186-1.729a7.209,7.209,0,0,1-1.64-5.142,23.617,23.617,0,0,1,.612-4.858l1.487-7.047h-2.494l2.014-5.339h1.619l1.051-4.99,7.746-2.407-1.576,7.4h4.377l-2.014,5.339h-3.5l-1.488,7.047a10.234,10.234,0,0,0-.307,2.407q0,2.976,2.758,2.976a4.323,4.323,0,0,0,2.67-.613Z"}),ke=n.createElement("path",{className:"cls-1",d:"M232.751,80.683a10.413,10.413,0,0,1-5.208-.985,3.389,3.389,0,0,1-1.619-3.13,8.139,8.139,0,0,1,.219-1.663l.568-2.626a6.2,6.2,0,0,1,2.8-4.267,11.6,11.6,0,0,1,6.041-1.335H243.3a9.012,9.012,0,0,1,2.1.2,4.81,4.81,0,0,1,1.355.547l.483-2.188a2.477,2.477,0,0,0,.043-.525,1.075,1.075,0,0,0-.635-1.051,4.72,4.72,0,0,0-1.947-.306H230.432l2.057-6.3H246.45a16.3,16.3,0,0,1,4.006.415,7.331,7.331,0,0,1,2.56,1.139,3.846,3.846,0,0,1,1.334,1.684,5.664,5.664,0,0,1,.373,2.057,6.548,6.548,0,0,1-.088,1.051q-.087.525-.176,1.094L251,80.683a4.821,4.821,0,0,1-2.714-.81,3.3,3.3,0,0,1-1.4-2.6,6.57,6.57,0,0,1-2.537,2.473,8.345,8.345,0,0,1-4.158.941Zm13.306-9.8a10.035,10.035,0,0,0-1.424-.263,17.282,17.282,0,0,0-1.9-.087H236.69a7.3,7.3,0,0,0-1.574.131,1.732,1.732,0,0,0-.854.416,1.422,1.422,0,0,0-.373.788,7.476,7.476,0,0,0-.088,1.247q0,.876.526,1.094a4.126,4.126,0,0,0,1.531.219H241.9a7.838,7.838,0,0,0,2.385-.306,2.246,2.246,0,0,0,1.379-1.489Z"}),we=n.createElement("path",{className:"cls-1",d:"M273.672,80.683,268.463,73.2l-4.6,3.676-.787,3.808H255.86L262.381,50l7.746-2.407-4.419,20.833,13.478-11.379h8.754L273.8,68.69l9.016,11.993Z"}),Ee=n.createElement("path",{className:"cls-1",d:"M293.147,80.683a10.083,10.083,0,0,1-5.732-1.379,5.045,5.045,0,0,1-2.014-4.486,13.46,13.46,0,0,1,.264-2.451l1.486-7A9.822,9.822,0,0,1,290.981,59a12.53,12.53,0,0,1,7.2-1.947h7.967a10.339,10.339,0,0,1,5.754,1.356,4.968,4.968,0,0,1,2.035,4.465,8.544,8.544,0,0,1-.086,1.181c-.058.409-.133.847-.219,1.313l-1.181,5.69H293.192l-.307,1.313q-.043.219-.066.372a2.417,2.417,0,0,0-.022.328q0,1.358,1.664,1.357h16.762l-2.275,6.259ZM306.409,65.54c.029-.146.05-.285.066-.416a3.535,3.535,0,0,0,.022-.372q0-1.444-1.707-1.445h-7.965a2.264,2.264,0,0,0-2.451,2.057l-.35,1.8h12.035Z"}),Ze=n.createElement("path",{className:"cls-2",d:"M315.075,80.683l1.355-6.347h6.653l-1.356,6.347Z"}),Me=n.createElement("path",{className:"cls-2",d:"M326.76,80.683l5.033-23.634h7.221l-5.033,23.634Zm5.471-25.691,1.312-6.259h7.266L339.5,54.992Z"}),Ne=n.createElement("path",{className:"cls-2",d:"M348.292,80.683a10.272,10.272,0,0,1-5.821-1.357,4.937,4.937,0,0,1-1.969-4.377,11.7,11.7,0,0,1,.307-2.582l1.486-7q.921-4.419,3.657-6.368a12.479,12.479,0,0,1,7.373-1.947h7.967a10.4,10.4,0,0,1,5.841,1.334,4.9,4.9,0,0,1,1.948,4.355,11.973,11.973,0,0,1-.305,2.626l-1.488,7q-.965,4.464-3.678,6.39a12.484,12.484,0,0,1-7.352,1.926Zm13.261-15.319c.03-.145.051-.277.067-.394a3.146,3.146,0,0,0,.021-.35q0-1.313-1.707-1.313h-7.965a2.631,2.631,0,0,0-1.619.46,2.488,2.488,0,0,0-.832,1.6l-1.488,7c-.029.146-.051.278-.067.394a3.175,3.175,0,0,0-.021.35,1.161,1.161,0,0,0,.416,1.029,2.219,2.219,0,0,0,1.248.284h7.965a2.712,2.712,0,0,0,1.664-.46,2.5,2.5,0,0,0,.83-1.6Z"}),He=n.createElement("path",{className:"cls-3",d:"M37.335,72.747A35.242,35.242,0,0,0,96.582,56.255c-8.548,3.28-18.414,6.542-29.03,9.506C56.755,68.774,46.461,71.123,37.335,72.747Z"}),Ae=n.createElement("path",{className:"cls-3",d:"M28.736,57.48l.522-.051.1-.01q.339-.034.687-.073l.131-.014.7-.081.118-.014c.253-.03.508-.062.767-.095l.061-.007q1.288-.165,2.671-.372l.087-.014q.4-.06.81-.124l.181-.028.751-.12.2-.033.774-.129.176-.03q.434-.073.875-.151l.086-.015q1-.175,2.031-.369l.069-.013.932-.177.226-.044c.263-.051.528-.1.794-.155l.284-.057q.381-.075.767-.154l.288-.058.8-.164.267-.056q.463-.1.933-.2l.13-.027q1.089-.234,2.2-.483l.27-.06.83-.188.357-.082.755-.174.392-.092.751-.177.385-.091.8-.192.345-.083.992-.243.154-.038,1.166-.291.276-.07.887-.225.405-.1c.257-.066.515-.132.773-.2l.442-.115.743-.2.464-.123.741-.2.461-.125.791-.215.409-.112q.6-.164,1.2-.332t1.2-.338l.387-.11.807-.231.454-.131.738-.214.466-.137.722-.213.458-.136.74-.222.421-.127.856-.26.289-.089q.575-.175,1.144-.353l.174-.055q.478-.149.952-.3l.347-.11c.258-.082.515-.163.771-.246l.385-.124.73-.236.382-.124.733-.241.355-.117.8-.268.265-.088q1.083-.364,2.137-.73l.121-.042q.454-.158.9-.316l.262-.092.754-.268.292-.105.731-.263.268-.1.763-.28.213-.079q.45-.165.891-.332l.065-.023q.984-.37,1.929-.737l.08-.031.828-.325.165-.065c.246-.1.489-.2.73-.291l.186-.075q.359-.144.71-.288l.163-.067c.254-.1.506-.208.754-.312l.089-.037q1.29-.538,2.476-1.064l.054-.024q.358-.159.706-.317l.11-.05.638-.292.117-.054.626-.293.091-.043c.231-.111.46-.22.684-.329l.046-.023.217-.106c-.008-.029-.015-.059-.023-.088-.093-.333-.192-.664-.294-.992-.03-.095-.061-.19-.091-.284-.076-.238-.154-.476-.235-.711l-.105-.3q-.129-.363-.264-.721c-.03-.08-.06-.161-.091-.242-.122-.315-.247-.629-.377-.939v0h0Q94.441,33.3,94,32.4l-.021-.042q-.213-.433-.437-.86l-.013-.024q-.23-.438-.472-.869h0a35.045,35.045,0,0,0-6.248-8.074l-.011-.01a35.206,35.206,0,0,0-3.274-2.785l-.038-.029q-.567-.425-1.151-.827h0q-1.17-.806-2.4-1.514l-.056-.033q-.6-.342-1.208-.661l-.077-.04q-1.234-.642-2.52-1.187l-.061-.026q-.623-.262-1.254-.5l-.135-.051q-.633-.236-1.274-.448l-.056-.018q-.653-.213-1.314-.4l-.041-.012q-.644-.181-1.3-.339l-.175-.043q-.637-.151-1.282-.28l-.154-.029q-1.322-.256-2.669-.412l-.191-.022q-.644-.071-1.292-.117l-.215-.015c-.442-.029-.885-.052-1.329-.064h-.075q-.651-.016-1.3-.008h-.177c-.435.007-.87.024-1.306.048l-.248.014c-.436.027-.873.06-1.311.1-.058,0-.117.013-.175.019-.429.044-.857.1-1.287.157l-.123.016c-.441.064-.883.139-1.325.22l-.25.047q-.651.125-1.3.274c-.077.017-.153.036-.229.054-.453.108-.905.222-1.357.348s-.9.263-1.34.4c-.075.024-.15.047-.224.072q-.633.208-1.254.439l-.238.09c-.42.159-.837.324-1.248.5l-.113.049q-.6.257-1.181.532l-.162.075q-.6.285-1.175.59l-.219.116c-.385.206-.766.417-1.141.636l-.154.091q-.562.332-1.11.682l-.065.041c-.373.24-.74.489-1.1.742l-.178.125q-.529.375-1.044.768l-.153.119q-1.07.83-2.068,1.733l-.118.106q-.485.442-.95.9L37.5,22.9q-.475.473-.931.96l-.03.033q-.468.5-.914,1.023l-.04.046q-.44.513-.857,1.042l-.09.115q-.417.529-.813,1.075l-.04.057q-.816,1.128-1.54,2.318l-.046.075q-.355.588-.689,1.189l-.033.061q-.686,1.242-1.27,2.536v0q-.291.645-.556,1.3l-.018.046a35.216,35.216,0,0,0-1.358,4.076l-.005.017A35.023,35.023,0,0,0,27.1,49.012v0c.01.328.026.656.045.984l0,.03c.02.32.044.642.072.963l0,.044q.088,1,.238,2.005c.049.334.105.668.164,1,.015.085.032.169.047.253.047.252.1.5.149.755q.032.156.066.312c.052.242.108.485.166.727.024.1.046.2.07.294q.125.5.263,1c.011.042.024.083.036.125L28.5,57.5Z"}),Ce=n.createElement("circle",{className:"cls-4",cx:92.792,cy:5.251,r:5.25,transform:"translate(17.189 59.308) rotate(-38.804)"}),Le=n.createElement("path",{className:"cls-4",d:"M126.344,32.285a3.12,3.12,0,0,0-1.731-1.823,13.19,13.19,0,0,0-4.141-1.152c-5.261-.745-13.711-.274-24.128,1.3.162.22.324.441.476.657a26.1,26.1,0,0,1,1.943,3.191,26.173,26.173,0,0,1,4.091.121c1.679.214,2.686.665,2.884,1.372.407,1.46-2.694,3.772-8.215,6.458-.224.109-.453.218-.685.329l-.091.043q-.307.145-.626.293l-.116.054-.638.292-.11.05-.706.317-.054.024q-1.186.525-2.476,1.064l-.089.037q-.373.156-.754.312l-.163.067-.71.288-.186.075-.73.291-.165.065q-.41.162-.828.324l-.08.032q-.945.366-1.93.737l-.064.023c-.294.111-.592.222-.891.332l-.214.079-.762.279-.268.1-.731.263-.292.105-.755.268-.261.092q-.448.157-.9.316L81.124,49q-1.053.364-2.138.73l-.264.088-.8.267-.355.118-.733.241-.383.124-.729.236-.385.124c-.256.083-.514.164-.772.246l-.346.11q-.474.15-.952.3l-.175.055q-.568.177-1.143.353l-.289.089c-.285.087-.57.174-.857.26l-.42.127-.741.222-.457.136-.723.213L68,53.17l-.737.214-.454.131L66,53.746l-.387.11q-.6.169-1.2.338t-1.2.332l-.409.112-.791.215-.461.125-.741.2-.464.123-.743.2-.442.115c-.258.068-.516.134-.773.2l-.406.1-.887.225-.275.07L55.65,56.5l-.154.038-.992.243-.344.083-.8.192-.386.091-.751.177-.391.092-.755.174-.358.082-.83.188-.27.06q-1.114.249-2.2.483l-.13.027q-.47.1-.933.2l-.267.056-.8.164L45,58.906c-.256.052-.512.1-.766.154l-.285.057c-.266.053-.53.1-.793.155l-.226.044L42,59.493l-.068.013q-1.034.194-2.032.369l-.085.015q-.441.078-.875.151l-.176.03-.775.129-.2.033-.75.12-.181.028q-.408.064-.81.124l-.087.014q-1.381.207-2.671.372l-.061.007q-.389.049-.768.095l-.117.014-.7.081-.13.014q-.348.039-.688.073l-.1.01c-.256.026-.509.051-.757.074-6.114.562-9.964.19-10.372-1.27-.179-.643.322-1.451,1.41-2.384a23.667,23.667,0,0,1,3.7-2.457,26.706,26.706,0,0,1-.063-4.5C15.186,54.605,7.883,58.48,3.762,61.782A11.9,11.9,0,0,0,.336,65.594a2.779,2.779,0,0,0-.258,1.935c.4,1.445,2.305,2.4,5.415,2.905,5.831.939,15.92.269,28.42-1.837a321.476,321.476,0,0,0,32.456-7.376,321.812,321.812,0,0,0,31.584-10.5c11.763-4.665,20.73-9.308,25.239-13.128C125.609,35.546,126.749,33.734,126.344,32.285Z"});function Ie(e,t){var a=e.title,c=e.titleId,l=me(e,["title","titleId"]);return n.createElement("svg",fe({id:"Ebene_2","data-name":"Ebene 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 369.083 92.149",width:"100%",ref:t,"aria-labelledby":c},l),a?n.createElement("title",{id:c},a):null,Oe,ve,xe,qe,ye,ge,ke,we,Ee,Ze,Me,Ne,He,Ae,Ce,Le)}var Pe=n.forwardRef(Ie),Be=(a.p,a(277)),Re=a(280),ze=a(281);var Te=a(285);function De(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://hooks.zapier.com/hooks/catch/1602339/bob62i2/",{method:"POST",body:JSON.stringify({email:t})});case 3:return a=e.sent,console.log(a),e.abrupt("return",a.ok);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var We={largeIcon:{fontSize:"2em"}};function Ge(e){return Object(J.jsx)(S.a,{onClick:e.callback,disabled:e.disabled,children:Object(J.jsx)(Be.a,{})})}var Je=Object(je.a)((function(e){return Object(be.a)({root:{flexGrow:1}})}));function Ke(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),r=Object(h.a)(l,2),i=r[0],o=r[1],f=Object(n.useState)({open:!1,content:"",severity:"success"}),v=Object(h.a)(f,2),E=v[0],M=v[1],N=Object(n.useState)(!1),H=Object(h.a)(N,2),A=H[0],C=H[1];function L(){C(!1)}function I(){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,De(a);case 3:e.sent?(c(""),M({open:!0,content:"Your email has been sent, we will get back to you when solstake is released",severity:"success"})):M({open:!0,content:"Failed to send email, please try again later",severity:"error"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=Je();return Object(J.jsxs)("div",{id:"landing",children:[Object(J.jsx)(j.a,{style:{backgroundColor:"#fdc100"},className:"AppBar",position:"relative",children:Object(J.jsxs)(b.a,{children:[Object(J.jsx)(ie,{className:"App-logo",width:"20%"}),Object(J.jsx)("div",{style:{flexGrow:1}}),Object(J.jsx)("div",{style:{display:"flex",gap:"10px"},children:Object(J.jsx)(s.b,{style:{textDecoration:"none"},to:"/app",children:Object(J.jsx)(S.a,{variant:"contained",children:"Use Solstake"})})})]})}),Object(J.jsx)(O.a,{anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!1,children:Object(J.jsx)(m.a,{children:"Demo"})}),Object(J.jsx)("div",{className:B.root,children:Object(J.jsx)(pe.a,{container:!0,alignItems:"center",justify:"center",direction:"column",style:{minHeight:"90vh",textAlign:"center"},children:Object(J.jsxs)(pe.a,{item:!0,xs:8,children:[Object(J.jsx)(Pe,{}),Object(J.jsx)(k.a,{style:{visibility:"hidden"},children:"Hack for non working svg scaling SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS"}),Object(J.jsx)(k.a,{children:"Solstake is an open-source and Non-custodial interface that makes staking SOL effortless"}),Object(J.jsx)(k.a,{children:"Enjoy the beta, enter your email to get notified when we release our product"}),Object(J.jsx)(x.a,{m:3}),Object(J.jsx)(q.a,{label:"Enter your email",variant:"outlined",style:{width:"40%"},error:""!==a&&!i,helperText:""===a||i?null:"Invalid",onKeyDown:function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=3;break}return e.next=3,I();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onChange:function(e){var t=e.target.value;c(t);var a=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(t);o(a)},value:a,InputProps:{endAdornment:Object(J.jsx)(Ge,{callback:I,disabled:!i})}}),Object(J.jsx)(x.a,{m:3}),Object(J.jsxs)("div",{children:[Object(J.jsx)(p.a,{href:"https://github.com/rooware-io/solstake",children:Object(J.jsx)(Re.a,{style:We.largeIcon})}),Object(J.jsx)(p.a,{href:"https://twitter.com/solstakeio",children:Object(J.jsx)(ze.a,{style:We.largeIcon})})]})]})})}),Object(J.jsxs)(y.a,{title:"Email sent!",fullWidth:!0,open:A,onClose:L,children:[Object(J.jsx)(g.a,{children:"Email sent!"}),Object(J.jsx)(w.a,{children:Object(J.jsx)(x.a,{m:1,children:Object(J.jsx)(k.a,{children:"Thank you for registering, we will get back to you when solstake is production ready"})})}),Object(J.jsx)(Z.a,{children:Object(J.jsx)(S.a,{onClick:L,color:"primary",children:"OK"})})]}),Object(J.jsx)("div",{id:"stars"}),Object(J.jsx)("div",{id:"stars2"}),Object(J.jsx)("div",{id:"stars3"}),Object(J.jsx)(Se.a,{open:E.open,autoHideDuration:1e4,onClose:function(){M({open:!1,content:"",severity:"success"})},children:Object(J.jsx)(Te.a,{onClose:L,severity:E.severity,children:E.content})})]})}var _e=function(){return Object(J.jsxs)(s.a,{children:[Object(J.jsx)(i.a,{exact:!0,path:"/",component:Ke}),Object(J.jsx)(i.a,{path:"/app",component:he})]})},Qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,292)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(J.jsx)(c.a.StrictMode,{children:Object(J.jsx)(_e,{})}),document.getElementById("root")),Qe()},87:function(e,t,a){}},[[219,1,2]]]);
//# sourceMappingURL=main.5e1a7d03.chunk.js.map