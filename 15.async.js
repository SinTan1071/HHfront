(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{DokE:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var u=l(a("bx4M"));a("T2oS");var r=l(a("W9HT"));a("14J3");var c=l(a("BMrR"));a("jCWc");var d=l(a("kPKH"));a("Telt");var s=l(a("Tckk"));a("/zsF");var i,f,o=l(a("PArb")),m=l(a("RIqP")),p=l(a("lwsE")),h=l(a("W8MJ")),g=l(a("a1gu")),E=l(a("Nsbk")),b=l(a("7W2i")),v=l(a("PJYZ")),y=n(a("q1tI")),k=a("MuoO"),w=l(a("mOP9")),T=l(a("usdK")),N=l(a("v99g")),j=l(a("HrHx")),C=(i=(0,k.connect)(function(e){var t=e.loading,a=e.user,l=e.project;return{listLoading:t.effects["list/fetch"],currentUser:a.currentUser,currentUserLoading:t.effects["user/fetchCurrent"],project:l,projectLoading:t.effects["project/fetchNotice"]}}),i(f=function(e){function t(){var e,a;(0,p.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,g.default)(this,(e=(0,E.default)(t)).call.apply(e,[this].concat(n))),a.state={newTags:[],inputVisible:!1,inputValue:""},a.onTabChange=function(e){var t=a.props.match;switch(e){case"detail":T.default.push("".concat(t.url,"/detail"));break;case"recommend":T.default.push("".concat(t.url,"/recommend"));break;case"similar":T.default.push("".concat(t.url,"/similar"));break;default:break}},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=(0,v.default)((0,v.default)(a)),t=e.state,l=t.inputValue,n=t.newTags;l&&0===n.filter(function(e){return e.label===l}).length&&(n=(0,m.default)(n).concat([{key:"new-".concat(n.length),label:l}])),a.setState({newTags:n,inputVisible:!1,inputValue:""})},a}return(0,b.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"user/fetchCurrent"}),e({type:"list/fetch",payload:{count:8}}),e({type:"project/fetchNotice"})}},{key:"render",value:function(){var e=this.state,t=(e.newTags,e.inputVisible,e.inputValue,this.props),a=t.listLoading,l=t.currentUser,n=t.currentUserLoading,i=t.project.notice,f=t.projectLoading,m=t.match,p=t.location,h=t.children,g=[{key:"detail",tab:y.default.createElement("span",null,"\u804c\u4f4d\u8bf4\u660e ",y.default.createElement("span",{style:{fontSize:14}}))},{key:"recommend",tab:y.default.createElement("span",null,"\u5019\u9009\u4eba\u63a8\u8350 ",y.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"similar",tab:y.default.createElement("span",null,"\u76f8\u4f3c\u804c\u4f4d ",y.default.createElement("span",{style:{fontSize:14}},"(8)"))}];return y.default.createElement(N.default,{className:j.default.userCenter},y.default.createElement(c.default,{gutter:24},y.default.createElement(d.default,{lg:7,md:24},y.default.createElement(u.default,{bordered:!1,style:{marginBottom:24},loading:n,actions:[]},y.default.createElement("div",null,y.default.createElement(w.default,{to:"/company/1/center"},y.default.createElement("div",{className:j.default.avatarHolder},y.default.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"}),y.default.createElement("div",{className:j.default.name},"\u652f\u4ed8\u5b9d \u524d\u7aef\u5de5\u7a0b\u5e08"))),y.default.createElement("div",{className:j.default.detail},y.default.createElement("p",null,y.default.createElement("i",{className:j.default.title}),"3-5\u5e74\u7ecf\u9a8c"),y.default.createElement("p",null,y.default.createElement("i",{className:j.default.group}),"React"),y.default.createElement("p",null,y.default.createElement("i",{className:j.default.address}),l.geographic.province.label,l.geographic.city.label)),y.default.createElement(o.default,{style:{marginTop:16},dashed:!0}),y.default.createElement("div",{className:j.default.team},y.default.createElement("div",{className:j.default.teamTitle},"\u80fd\u529b\u8981\u6c42"),y.default.createElement(r.default,{spinning:f},y.default.createElement(c.default,{gutter:36},i.map(function(e){return y.default.createElement(d.default,{key:e.id,lg:24,xl:12},y.default.createElement(w.default,{to:e.href},y.default.createElement(s.default,{size:"small",src:e.logo}),e.skill))}))))))),y.default.createElement(d.default,{lg:17,md:24},y.default.createElement(u.default,{className:j.default.tabsCard,bordered:!1,tabList:g,activeTabKey:p.pathname.replace("".concat(m.path,"/"),""),onTabChange:this.onTabChange,loading:a},h))))}}]),t}(y.PureComponent))||f),V=C;t.default=V}}]);