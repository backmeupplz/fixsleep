(function(e){function t(t){for(var i,a,s=t[0],u=t[1],l=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"041f":function(e,t,n){"use strict";var i=n("0a6b"),r=n.n(i);r.a},"0613":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("4d97")),o=i.__importDefault(n("dd9d")),a=i.__importDefault(n("2b0e")),s=i.__importDefault(n("2f62"));a.default.use(s.default);const u=new s.default.Store({modules:{AppStore:r.default},plugins:[o.default]});t.default=u},"0670":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=i.__importDefault(n("ce5b"));n("bf40"),r.default.use(o.default),t.default=new o.default({icons:{iconfont:"mdi"},theme:{dark:!0}})},"0756":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-box"},[n("div",{staticClass:"index-box"},[n("div",{staticClass:"index"},[e._v(e._s(e.index))])]),n("div",{staticClass:"text-box"},[n("div",{staticClass:"title"},[e._v(e._s(e.title))]),n("div",{staticClass:"description"},[e._v(e._s(e.description))]),n("a",{staticClass:"source",attrs:{href:e.source,target:"_blank"}},[e._v(e._s(e.$t("source")))])])])},r=[]},"0a6b":function(e,t,n){},"0ab0":function(e,t,n){"use strict";var i=n("c432"),r=n.n(i);r.a},"0e2f":function(e,t,n){"use strict";n.r(t);var i=n("b7b9"),r=n("8168");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("6e42");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"0eed":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=i.__importDefault(n("2fe1")),a=n("60a3");let s=class extends r.default{};i.__decorate([a.Prop({required:!0}),i.__metadata("design:type",Number)],s.prototype,"index",void 0),i.__decorate([a.Prop({required:!0}),i.__metadata("design:type",String)],s.prototype,"title",void 0),i.__decorate([a.Prop({required:!0}),i.__metadata("design:type",String)],s.prototype,"description",void 0),i.__decorate([a.Prop({required:!0}),i.__metadata("design:type",String)],s.prototype,"source",void 0),s=i.__decorate([o.default],s),t.default=s},1760:function(e,t,n){"use strict";var i=n("9697"),r=n.n(i);r.a},"24bc":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{staticClass:"main-container"},[n("div",{staticClass:"max-width"},[n("v-btn",{attrs:{icon:"",text:""},on:{click:function(t){return e.setLanguage("en")}}},[e._v("🇺🇸")]),n("v-btn",{attrs:{icon:"",text:""},on:{click:function(t){return e.setLanguage("ru")}}},[e._v("🇷🇺")]),n("GradientText",[e._v(e._s(e.$t("mainTitle")))]),n("MainSubtitle",[e._v(e._s(e.$t("mainSubtitle")))]),n("GradientText",{attrs:{smaller:!0}},[e._v(e._s(e.$t("rulesTitle")))]),n("RuleAndImage",{attrs:{index:0}}),n("RuleList",{attrs:{cardIndexArray:[1,2,3,4]}}),n("RuleAndImage",{attrs:{index:5,left:!0}}),n("RuleList",{attrs:{cardIndexArray:[6,7,8,9,10,11,12]}}),n("RuleAndImage",{attrs:{index:13}}),n("RuleList",{attrs:{cardIndexArray:[14,15,16]}}),n("div",{staticClass:"made-by",domProps:{innerHTML:e._s(e.$t("madeBy"))}})],1)])],1)},r=[]},2995:function(e,t,n){},"2cee":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-block"},[e.left?n("img",{staticClass:"mr-4",attrs:{src:"/images/"+e.index+".svg"}}):e._e(),n("Card",{attrs:{index:e.index+1,title:e.$t("rules")[e.index].title,description:e.$t("rules")[e.index].description,source:e.$t("rules")[e.index].source}}),e.left?e._e():n("img",{staticClass:"ml-4",attrs:{src:"/images/"+e.index+".svg"}})],1)},r=[]},"2e25":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=i.__importDefault(n("2fe1")),a=n("60a3");let s=class extends r.default{};i.__decorate([a.Prop({required:!1}),i.__metadata("design:type",Boolean)],s.prototype,"smaller",void 0),s=i.__decorate([o.default],s),t.default=s},"3c53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=i.__importDefault(n("2fe1")),a=n("60a3"),s=i.__importDefault(n("ae8d"));let u=class extends r.default{};i.__decorate([a.Prop({required:!0}),i.__metadata("design:type",Number)],u.prototype,"index",void 0),i.__decorate([a.Prop({required:!1}),i.__metadata("design:type",Boolean)],u.prototype,"left",void 0),u=i.__decorate([o.default({components:{Card:s.default}})],u),t.default=u},"3dfd":function(e,t,n){"use strict";n.r(t);var i=n("24bc"),r=n("6f68");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("034f");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"440e":function(e,t,n){"use strict";n.r(t);var i=n("579b"),r=n("a563");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("041f");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"4ae0":function(e,t,n){},"4d97":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=n("fe0b"),o=n("6fc5");let a=class extends o.VuexModule{constructor(){super(...arguments),this.language=void 0}setLanguage(e){r.i18n.locale=e,this.language=e,document.title=r.i18n.t("title")}};i.__decorate([o.Mutation,i.__metadata("design:type",Function),i.__metadata("design:paramtypes",[String]),i.__metadata("design:returntype",void 0)],a.prototype,"setLanguage",null),a=i.__decorate([o.Module({namespaced:!0,name:"AppStore"})],a),t.default=a},"562e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=i.__importDefault(n("2fe1")),a=n("60a3"),s=i.__importDefault(n("ae8d"));let u=class extends r.default{};i.__decorate([a.Prop({required:!0}),i.__metadata("design:type",Array)],u.prototype,"cardIndexArray",void 0),u=i.__decorate([o.default({components:{Card:s.default}})],u),t.default=u},"579b":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.cardIndexArray,(function(t){return n("Card",{key:t,attrs:{index:t+1,title:e.$t("rules")[t].title,description:e.$t("rules")[t].description,source:e.$t("rules")[t].source}})})),1)},r=[]},"5b65":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=n("fe0b"),a=i.__importDefault(n("2fe1")),s=i.__importDefault(n("0e2f")),u=i.__importDefault(n("f490")),l=i.__importDefault(n("d8c8")),c=i.__importDefault(n("440e")),d=n("4bb5"),f=d.namespace("AppStore");let p=class extends r.default{created(){document.title=o.i18n.t("title")}get metaInfo(){return{title:o.i18n.t("title")}}};i.__decorate([f.Mutation,i.__metadata("design:type",Function)],p.prototype,"setLanguage",void 0),p=i.__decorate([a.default({components:{GradientText:s.default,MainSubtitle:u.default,RuleAndImage:l.default,RuleList:c.default}})],p),t.default=p},"6e42":function(e,t,n){"use strict";var i=n("4ae0"),r=n.n(i);r.a},"6f68":function(e,t,n){"use strict";n.r(t);var i=n("5b65"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},7091:function(e,t,n){"use strict";var i=n("2995"),r=n.n(i);r.a},"72aa":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.messages=void 0,t.messages={ru:{title:"Исправьте сон",notFound:"Страница не найдена",source:"Источник",mainTitle:"Просыпаться в 5 утра — просто",mainSubtitle:"Я просыпаюсь в 5 утра уже больше года. Ниже — список из 17 простых научных трюков, как улучшить свое качество сна, даже если вы не хотите просыпаться так рано.",rulesTitle:"Так что же делать?",rules:[{title:"Не пытайтесь перестроить организм за ночь",description:"Лучше не торопиться и каждый день просыпаться на 10 минут раньше. Медленный прогресс приведет к результату, быстрая смена поведения никогда не закрепляется.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1125170/"},{title:"Ложитесь спать за 8 часов до пробуждения",description:"Но не ранее 14 часов после подъема. Вам нужно дать телу достаточно времени поспать, и вам нужно быть достаточно уставшими.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4434546/"},{title:"Включите фильтр голубого света за 1-2 часа до сна",description:"Но постарайтесь получать как можно больше голубого света днем. Голубой свет регулирует уровни мелатонина.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4734149/"},{title:"Включите черно-белый фильтр перед сном",description:'"Bedtime mode" на Андроиде, "Color Filters" на iOS. Смотреть мемы в черно-белом цвете менее приятно, поэтому мозг перестает этого хотеть перед сном.',source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4734149/"},{title:"Примите горячий душ перед сном",description:"Расширенные капилляры помогают охладить тело перед отходом в кровать.",source:"https://pubmed.ncbi.nlm.nih.gov/31102877/"},{title:"Охладите комнату до 17°-18° C перед сном",description:"В прохладе проще уснуть. Можете просто проветрить комнату перед отходом ко сну.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3427038/"},{title:"Нагрейте комнату до ~22° C перед пробуждением",description:"Проще просыпаться в теплоте. Вы можете включить обогреватель на самую низкую настройку после проветривания комнаты.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3427038/"},{title:"Включите свет на 100% за 30 минут до пробуждения",description:"Купите дешевую умную лампу и автоматически включите ее на полную яркость до того, как проснетесь.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6751071/"},{title:"Спите в темноте и тишине",description:"Никаких телевизора, музыки или подкастов. Приглушите свет до 10% яркости за 1-2 часа до сна.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6751071/"},{title:"Не пейте кофеин после полудня",description:"Кофеин спустя 8 часов после приема теряет силу лишь на 50%. Газировка и чай тоже часто содержат кофеин.",source:"https://www.ncbi.nlm.nih.gov/books/NBK223808/"},{title:"Приобретите простой трекер сна",description:"Попробуйте специальные мобильные приложения или фитнес-браслеты. Следите за сравнительным прогрессом улучшения сна.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5458149/"},{title:"Поиграйтесь с высотой подушки",description:"Подушки некоторой высоты могут уменьшить храп и улучшить качество сна.",source:"https://pubmed.ncbi.nlm.nih.gov/28127672/"},{title:"Не потребляйте калории за 3 часа до сна",description:"Любое количество калорий, включая маленький орешек или стакан молока. Что угодно с сахаром — тоже калории.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3227713/"},{title:"Не занимайтесь спортом за 2-3 часа до сна",description:"Это может повысить уровень кортизола.",source:"https://pubmed.ncbi.nlm.nih.gov/30374942/"},{title:"Не лежите в кровати, если не можете уснуть",description:"Чем больше вы это делаете, тем сложнее вам будет уснуть. Если не можете уснуть, встаньте и займитесь чем-нибудь продуктивным.",source:"https://www.ncbi.nlm.nih.gov/books/NBK279320/"},{title:"Забудьте про переносы будильников и несколько будильников подряд",description:"На каждый раз, когда вы просыпаетесь по будильнику, на вашу сердечно-сосудистую систему приходится пик нагрузки. Не перегружайте.",source:"https://pubmed.ncbi.nlm.nih.gov/12531174/"},{title:"Не пейте алкоголь после полудня",description:"Если вам необходимо выпить, то выпейте лучше до полудня, чтобы протрезветь до 9 вечера. Алкоголь убивает хороший сон.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5821259/"}],madeBy:'Этот сайт вдохновлен <a href="https://blog.borodutch.com/waking-up-at-5am-is-easy/">вот этой статьей</a>. Код этого сайта <a href="https://github.com/backmeupplz/fixsleep">открыт</a>.'},en:{title:"Fix sleep",notFound:"Page not found",source:"Source",mainTitle:"Waking up at 5 AM is easy",mainSubtitle:"I've been waking up at 5 AM daily for over a year. Here's the list of the 17 scientific tricks to increase your quality of sleep, even if you don't want to wake up this early.",rulesTitle:"So what do you do?",rules:[{title:"Don't try to rebuild your body overnight",description:"It's better to take it slow and wake up 10 minutes earlier every day. Slow progress will get you there, rapid change in behaviour never settles.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1125170/"},{title:"Go to bed 8 hours before you want to wake up",description:"But no earlier than 14 hours after you woke up today. You have to give the body enough time to sleep and you have to be tired enough.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4434546/"},{title:"Turn on the blue light filter 1-2 hours before bed",description:"But try to be exposed to the blue light as much as possible during the daytime. Blue light regulates the melatonin levels.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4734149/"},{title:"Turn on the black and white filter before bed",description:'"Bedtime mode" on Android, "Color Filters" on iOS. Surfing memes in black and white isn\'t as pleasant, and your brain stops craving it before bed.',source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4734149/"},{title:"Take a hot shower before going to bed",description:"Expanding the capillaries will help down your body before going to sleep.",source:"https://pubmed.ncbi.nlm.nih.gov/31102877/"},{title:"Cooldown the room to 17°-18° C before sleep",description:"it is easier to fall asleep in a cold room. You can air the room before going to bed.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3427038/"},{title:"Warm up the room to ~22° C before waking up",description:"it is easier to wake up in a warm room. You can start the heater on the lowest setting after airing the room.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3427038/"},{title:"Turn on the lights to 100% 30 minutes before waking up",description:"Buy a cheap smart lightbulb and expose yourselves to the brightest light before you wake up automatically.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6751071/"},{title:"Sleep in darkness and silence",description:"No TV, music or podcasts. Dim the lights to 10% 1-2 hours before bed.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6751071/"},{title:"Do not drink caffeine in the afternoon",description:"Caffeine is half as potent 8 hours after consumption. This includes soda and tea.",source:"https://www.ncbi.nlm.nih.gov/books/NBK223808/"},{title:"Get a simple sleep tracker",description:"Try mobile apps and fitness bands. Track the relative progress of sleep improvement.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5458149/"},{title:"Play with the pillow height",description:"Some heights can decrease snoring and improve sleep quality.",source:"https://pubmed.ncbi.nlm.nih.gov/28127672/"},{title:"Don't consume calories 3 hours before bed",description:"It includes any amount of calories, even a small nut or a glass of milk. Anything with sugar as well.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3227713/"},{title:"Do not exercise 2-3 hours before bed",description:"This can increase cortisol levels.",source:"https://pubmed.ncbi.nlm.nih.gov/30374942/"},{title:"Do not spend time in bed if you cannot sleep",description:"The more you do this, the harder it will be for you to fall asleep. If you can't sleep, get up and do something productive.",source:"https://www.ncbi.nlm.nih.gov/books/NBK279320/"},{title:"Forget about the snooze button and setting multiple alarms",description:"Every time you wake up with an alarm clock, there is a peak load on your cardiovascular system. Don't overload.",source:"https://pubmed.ncbi.nlm.nih.gov/12531174/"},{title:"Don't drink alcohol in the afternoon",description:"If you have to drink, drink before noon to get sober by 9 PM. Alcohol kills good sleep.",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5821259/"}],madeBy:'This page is inspired by <a href="https://blog.borodutch.com/waking-up-at-5am-is-easy/">this blog post</a>. Oh, and it is <a href="https://github.com/backmeupplz/fixsleep">open-source</a>.'}}},7502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=i.__importDefault(n("2fe1"));let a=class extends r.default{};a=i.__decorate([o.default],a),t.default=a},8168:function(e,t,n){"use strict";n.r(t);var i=n("2e25"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"85ec":function(e,t,n){},9697:function(e,t,n){},"9d3e":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-subtitle"},[e._t("default")],2)},r=[]},a563:function(e,t,n){"use strict";n.r(t);var i=n("562e"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},ae8d:function(e,t,n){"use strict";n.r(t);var i=n("0756"),r=n("c05b");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("0ab0");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},b61b:function(e,t,n){"use strict";n.r(t);var i=n("7502"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},b7b9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gradient-text",class:e.smaller?"smaller":""},[e._t("default")],2)},r=[]},c05b:function(e,t,n){"use strict";n.r(t);var i=n("0eed"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},c432:function(e,t,n){},cd49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=i.__importDefault(n("3dfd")),a=i.__importDefault(n("0613")),s=n("fe0b"),u=i.__importDefault(n("0670"));r.default.config.productionTip=!0,new r.default({store:a.default,i18n:s.i18n,vuetify:u.default,render:e=>e(o.default)}).$mount("#app")},d8c8:function(e,t,n){"use strict";n.r(t);var i=n("2cee"),r=n("f49f");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("1760");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},dd9d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n("9ab4"),r=i.__importDefault(n("0e44"));t.default=r.default({paths:["AppStore.language"]})},f490:function(e,t,n){"use strict";n.r(t);var i=n("9d3e"),r=n("b61b");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("7091");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},f49f:function(e,t,n){"use strict";n.r(t);var i=n("3c53"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},fe0b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.i18n=void 0;const i=n("9ab4"),r=i.__importDefault(n("2b0e")),o=i.__importDefault(n("a925")),a=n("72aa"),s=i.__importDefault(n("0613"));function u(){if(s.default.state.AppStore.language)return s.default.state.AppStore.language;{const e=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en").substr(0,2).toLowerCase(),t=["en","ru"];return t.indexOf(e)>-1?e:"en"}}r.default.use(o.default),t.i18n=new o.default({locale:u(),fallbackLocale:"en",messages:a.messages})}});
//# sourceMappingURL=app.5ce0a214.js.map