(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"/uBK":function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var r=n(a("BMrR"));a("jCWc");var c=n(a("kPKH"));a("IzEo");var u=n(a("bx4M"));a("Pwec");var s=n(a("CtXQ"));a("5NDa");var d=n(a("5rEg"));a("+BJd");var o=n(a("mr32"));a("/zsF");var i,p,f=n(a("PArb")),m=n(a("RIqP")),g=n(a("lwsE")),h=n(a("W8MJ")),y=n(a("a1gu")),b=n(a("Nsbk")),E=n(a("7W2i")),v=n(a("PJYZ")),w=l(a("q1tI")),C=a("MuoO"),k=n(a("mOP9")),j=n(a("usdK")),N=n(a("v99g")),T=n(a("icBN")),I=(i=(0,C.connect)(function(e){var t=e.loading,a=e.user,n=e.project;return{listLoading:t.effects["list/fetch"],currentUser:a.currentUser,currentUserLoading:t.effects["user/fetchCurrent"],project:n,projectLoading:t.effects["project/fetchNotice"]}}),i(p=function(e){function t(){var e,a;(0,g.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,y.default)(this,(e=(0,b.default)(t)).call.apply(e,[this].concat(l))),a.state={newTags:[],inputVisible:!1,inputValue:""},a.onTabChange=function(e){var t=a.props.match;switch(e){case"joblist":j.default.push("".concat(t.url,"/joblist"));break;case"similar":j.default.push("".concat(t.url,"/similar"));break;case"projects":j.default.push("".concat(t.url,"/projects"));break;default:break}},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=(0,v.default)((0,v.default)(a)),t=e.state,n=t.inputValue,l=t.newTags;n&&0===l.filter(function(e){return e.label===n}).length&&(l=(0,m.default)(l).concat([{key:"new-".concat(l.length),label:n}])),a.setState({newTags:l,inputVisible:!1,inputValue:""})},a}return(0,E.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"user/fetchCurrent"}),e({type:"list/fetch",payload:{count:8}}),e({type:"project/fetchNotice"})}},{key:"render",value:function(){var e=this.state,t=e.newTags,a=e.inputVisible,n=e.inputValue,l=this.props,i=l.listLoading,p=l.currentUser,m=l.currentUserLoading,g=(l.project.notice,l.projectLoading,l.match),h=l.location,y=l.children,b=[{key:"joblist",tab:w.default.createElement("span",null,"\u5df2\u53d1\u5e03\u804c\u4f4d ",w.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"similar",tab:w.default.createElement("span",null,"\u76f8\u4f3c\u516c\u53f8 ",w.default.createElement("span",{style:{fontSize:14}},"(8)"))}];return w.default.createElement(N.default,{className:T.default.userCenter},w.default.createElement(r.default,{gutter:24},w.default.createElement(c.default,{lg:7,md:24},w.default.createElement(u.default,{bordered:!1,style:{marginBottom:24},loading:m,actions:[w.default.createElement(k.default,{to:"/company/add"},w.default.createElement("a",null,"\u53d1\u5e03\u804c\u4f4d"))]},w.default.createElement("div",null,w.default.createElement("div",{className:T.default.avatarHolder},w.default.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"}),w.default.createElement("div",{className:T.default.name},"\u652f\u4ed8\u5b9d")),w.default.createElement("div",{className:T.default.detail},w.default.createElement("p",null,w.default.createElement("i",{className:T.default.title}),"\u4e92\u8054\u7f51\u652f\u4ed8\u5de8\u5934"),w.default.createElement("p",null,w.default.createElement("i",{className:T.default.group}),p.group),w.default.createElement("p",null,w.default.createElement("i",{className:T.default.address}),p.geographic.province.label,p.geographic.city.label)),w.default.createElement(f.default,{dashed:!0}),w.default.createElement("div",{className:T.default.tags},w.default.createElement("div",{className:T.default.tagsTitle},"\u6807\u7b7e"),p.tags.concat(t).map(function(e){return w.default.createElement(o.default,{key:e.key},e.label)}),a&&w.default.createElement(d.default,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:n,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!a&&w.default.createElement(o.default,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},w.default.createElement(s.default,{type:"plus"})))))),w.default.createElement(c.default,{lg:17,md:24},w.default.createElement(u.default,{className:T.default.tabsCard,bordered:!1,tabList:b,activeTabKey:h.pathname.replace("".concat(g.path,"/"),""),onTabChange:this.onTabChange,loading:i},y))))}}]),t}(w.PureComponent))||p),V=I;t.default=V},icBN:function(e,t,a){e.exports={avatarHolder:"antd-pro-pages-company-center-center-avatarHolder",name:"antd-pro-pages-company-center-center-name",detail:"antd-pro-pages-company-center-center-detail",title:"antd-pro-pages-company-center-center-title",group:"antd-pro-pages-company-center-center-group",address:"antd-pro-pages-company-center-center-address",tagsTitle:"antd-pro-pages-company-center-center-tagsTitle",teamTitle:"antd-pro-pages-company-center-center-teamTitle",tags:"antd-pro-pages-company-center-center-tags",team:"antd-pro-pages-company-center-center-team",tabsCard:"antd-pro-pages-company-center-center-tabsCard"}}}]);