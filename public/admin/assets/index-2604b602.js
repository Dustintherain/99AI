
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as q,y as E,A as F,r as H,C,x as J,M as R,o as r,c as h,e,ag as O,b as l,f as a,k as i,a as o,G as U,I as w,J as f,U as T,h as g,_ as D,p as G,i as j,g as K,E as L,n as Q}from"./index-4eef28ae.js";import{u as W}from"./index-626bf66d.js";const u=y=>(G("data-v-d5267795"),y=y(),j(),y),X={class:"color-scheme"},Y={key:1,class:"menu-mode"},Z=u(()=>o("div",{class:"mode-container"},null,-1)),ee=u(()=>o("div",{class:"mode-container"},null,-1)),te=u(()=>o("div",{class:"mode-container"},null,-1)),le={class:"setting-item"},se={class:"label"},ne={class:"setting-item"},oe={class:"label"},ae={class:"setting-item"},ie=u(()=>o("div",{class:"label"}," 次导航是否折叠 ",-1)),de={key:2,class:"setting-item"},ue=u(()=>o("div",{class:"label"}," 显示次导航折叠按钮 ",-1)),me={class:"setting-item"},pe=u(()=>o("div",{class:"label"}," 是否启用快捷键 ",-1)),ce={class:"setting-item"},_e=u(()=>o("div",{class:"label"}," 模式 ",-1)),ge={key:3,class:"setting-item"},re={class:"label"},be={class:"setting-item"},fe={class:"label"},ve={class:"setting-item"},Ve={class:"label"},he={key:5,class:"setting-item"},ye=u(()=>o("div",{class:"label"}," 是否启用 ",-1)),Se={class:"setting-item"},Ue={class:"label"},ke={class:"setting-item"},Me=u(()=>o("div",{class:"label"}," 是否启用快捷键 ",-1)),Ce={class:"setting-item"},we=u(()=>o("div",{class:"label"}," 是否启用 ",-1)),qe={class:"setting-item"},ze=u(()=>o("div",{class:"label"}," 日期 ",-1)),Pe={class:"setting-item"},xe=u(()=>o("div",{class:"label"}," 公司 ",-1)),Ae={class:"setting-item"},Be=u(()=>o("div",{class:"label"}," 网址 ",-1)),Ie={class:"setting-item"},Ne=u(()=>o("div",{class:"label"}," 备案 ",-1)),$e={class:"setting-item"},Ee={class:"label"},Fe={class:"setting-item"},He=u(()=>o("div",{class:"label"}," 主页名称 ",-1)),Je={class:"setting-item"},Re={class:"label"},Oe={class:"setting-item"},Te=u(()=>o("div",{class:"label"}," 是否启用权限 ",-1)),De={class:"setting-item"},Ge={class:"label"},je={class:"setting-item"},Ke={class:"label"},Le=q({name:"AppSetting"}),Qe=q({...Le,setup(y){const z=K(),t=E(),k=F(),v=H(!1);C(()=>t.settings.menu.menuMode,S=>{S==="single"?k.setActived(0):k.setActived(z.fullPath)}),J(()=>{R.on("global-app-setting-toggle",()=>{v.value=!v.value})});const{copy:P,copied:x,isSupported:A}=W();C(x,S=>{S&&L.success("复制成功，请粘贴到 src/settings.ts 文件中！")});function B(){P(JSON.stringify(t.settings,null,2))}return(S,s)=>{const I=g("el-alert"),_=g("el-divider"),m=D,p=g("el-icon"),c=g("el-tooltip"),d=g("el-switch"),b=g("el-radio-button"),M=g("el-radio-group"),V=g("el-input"),N=g("el-button"),$=g("el-drawer");return r(),h("div",null,[e($,{modelValue:l(v),"onUpdate:modelValue":s[27]||(s[27]=n=>T(v)?v.value=n:null),title:"应用配置",direction:"rtl",size:360},O({default:a(()=>[e(I,{title:"应用配置可实时预览效果，但只是临时生效，要想真正作用于项目，可以点击下方的“复制配置”按钮，并将配置粘贴到 src/settings.ts 文件中。同时建议在生产环境隐藏应用配置功能。",type:"error",closable:!1}),e(_,null,{default:a(()=>[i("颜色主题")]),_:1}),o("div",X,[o("div",{class:U(["switch",l(t).settings.app.colorScheme]),onClick:s[0]||(s[0]=n=>l(t).settings.app.colorScheme=l(t).settings.app.colorScheme==="dark"?"light":"dark")},[e(p,{class:"icon"},{default:a(()=>[e(m,{name:l(t).settings.app.colorScheme==="light"?"ep:sunny":"ep:moon"},null,8,["name"])]),_:1})],2)]),l(t).mode==="pc"?(r(),w(_,{key:0},{default:a(()=>[i(" 导航栏模式 ")]),_:1})):f("",!0),l(t).mode==="pc"?(r(),h("div",Y,[e(c,{content:"侧边栏模式（含主导航）",placement:"top","show-after":500},{default:a(()=>[o("div",{class:U(["mode mode-side",{active:l(t).settings.menu.menuMode==="side"}]),onClick:s[1]||(s[1]=n=>l(t).settings.menu.menuMode="side")},[Z,e(p,null,{default:a(()=>[e(m,{name:"ep:check"})]),_:1})],2)]),_:1}),e(c,{content:"顶部模式",placement:"top","show-after":500},{default:a(()=>[o("div",{class:U(["mode mode-head",{active:l(t).settings.menu.menuMode==="head"}]),onClick:s[2]||(s[2]=n=>l(t).settings.menu.menuMode="head")},[ee,e(p,null,{default:a(()=>[e(m,{name:"ep:check"})]),_:1})],2)]),_:1}),e(c,{content:"侧边栏模式（不含主导航）",placement:"top","show-after":500},{default:a(()=>[o("div",{class:U(["mode mode-single",{active:l(t).settings.menu.menuMode==="single"}]),onClick:s[3]||(s[3]=n=>l(t).settings.menu.menuMode="single")},[te,e(p,null,{default:a(()=>[e(m,{name:"ep:check"})]),_:1})],2)]),_:1})])):f("",!0),e(_,null,{default:a(()=>[i("导航栏")]),_:1}),o("div",le,[o("div",se,[i(" 主导航切换跳转 "),e(c,{content:"开启该功能后，切换主导航时，页面自动跳转至该主导航下，次导航里第一个导航",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.menu.switchMainMenuAndPageJump,"onUpdate:modelValue":s[4]||(s[4]=n=>l(t).settings.menu.switchMainMenuAndPageJump=n),disabled:["single"].includes(l(t).settings.menu.menuMode)},null,8,["modelValue","disabled"])]),o("div",ne,[o("div",oe,[i(" 次导航保持展开一个 "),e(c,{content:"开启该功能后，次导航只保持单个菜单的展开",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.menu.subMenuUniqueOpened,"onUpdate:modelValue":s[5]||(s[5]=n=>l(t).settings.menu.subMenuUniqueOpened=n)},null,8,["modelValue"])]),o("div",ae,[ie,e(d,{modelValue:l(t).settings.menu.subMenuCollapse,"onUpdate:modelValue":s[6]||(s[6]=n=>l(t).settings.menu.subMenuCollapse=n)},null,8,["modelValue"])]),l(t).mode==="pc"?(r(),h("div",de,[ue,e(d,{modelValue:l(t).settings.menu.enableSubMenuCollapseButton,"onUpdate:modelValue":s[7]||(s[7]=n=>l(t).settings.menu.enableSubMenuCollapseButton=n)},null,8,["modelValue"])])):f("",!0),o("div",me,[pe,e(d,{modelValue:l(t).settings.menu.enableHotkeys,"onUpdate:modelValue":s[8]||(s[8]=n=>l(t).settings.menu.enableHotkeys=n),disabled:["single"].includes(l(t).settings.menu.menuMode)},null,8,["modelValue","disabled"])]),e(_,null,{default:a(()=>[i("顶栏")]),_:1}),o("div",ce,[_e,e(M,{modelValue:l(t).settings.topbar.mode,"onUpdate:modelValue":s[9]||(s[9]=n=>l(t).settings.topbar.mode=n),size:"small"},{default:a(()=>[e(b,{label:"static"},{default:a(()=>[i(" 静止 ")]),_:1}),e(b,{label:"fixed"},{default:a(()=>[i(" 固定 ")]),_:1}),e(b,{label:"sticky"},{default:a(()=>[i(" 粘性 ")]),_:1})]),_:1},8,["modelValue"])]),e(_,null,{default:a(()=>[i("工具栏")]),_:1}),l(t).mode==="pc"?(r(),h("div",ge,[o("div",re,[i(" 全屏 "),e(c,{content:"该功能使用场景极少，用户习惯于通过窗口“最大化”功能来扩大显示区域，以显示更多内容，并且使用 F11 键也可以进入全屏效果",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.toolbar.enableFullscreen,"onUpdate:modelValue":s[10]||(s[10]=n=>l(t).settings.toolbar.enableFullscreen=n)},null,8,["modelValue"])])):f("",!0),o("div",be,[o("div",fe,[i(" 页面刷新 "),e(c,{content:"开启时会阻止原生 F5 键刷新功能，并采用框架提供的刷新模式进行页面刷新",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.toolbar.enablePageReload,"onUpdate:modelValue":s[11]||(s[11]=n=>l(t).settings.toolbar.enablePageReload=n)},null,8,["modelValue"])]),o("div",ve,[o("div",Ve,[i(" 颜色主题 "),e(c,{content:"开启后可在明亮/暗黑模式中切换",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.toolbar.enableColorScheme,"onUpdate:modelValue":s[12]||(s[12]=n=>l(t).settings.toolbar.enableColorScheme=n)},null,8,["modelValue"])]),l(t).mode==="pc"?(r(),w(_,{key:4},{default:a(()=>[i(" 面包屑导航 ")]),_:1})):f("",!0),l(t).mode==="pc"?(r(),h("div",he,[ye,e(d,{modelValue:l(t).settings.breadcrumb.enable,"onUpdate:modelValue":s[13]||(s[13]=n=>l(t).settings.breadcrumb.enable=n)},null,8,["modelValue"])])):f("",!0),e(_,null,{default:a(()=>[i("导航搜索")]),_:1}),o("div",Se,[o("div",Ue,[i(" 是否启用 "),e(c,{content:"对导航进行快捷搜索",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.navSearch.enable,"onUpdate:modelValue":s[14]||(s[14]=n=>l(t).settings.navSearch.enable=n)},null,8,["modelValue"])]),o("div",ke,[Me,e(d,{modelValue:l(t).settings.navSearch.enableHotkeys,"onUpdate:modelValue":s[15]||(s[15]=n=>l(t).settings.navSearch.enableHotkeys=n),disabled:!l(t).settings.navSearch.enable},null,8,["modelValue","disabled"])]),e(_,null,{default:a(()=>[i("底部版权")]),_:1}),o("div",Ce,[we,e(d,{modelValue:l(t).settings.copyright.enable,"onUpdate:modelValue":s[16]||(s[16]=n=>l(t).settings.copyright.enable=n)},null,8,["modelValue"])]),o("div",qe,[ze,e(V,{modelValue:l(t).settings.copyright.dates,"onUpdate:modelValue":s[17]||(s[17]=n=>l(t).settings.copyright.dates=n),size:"small",disabled:!l(t).settings.copyright.enable},null,8,["modelValue","disabled"])]),o("div",Pe,[xe,e(V,{modelValue:l(t).settings.copyright.company,"onUpdate:modelValue":s[18]||(s[18]=n=>l(t).settings.copyright.company=n),size:"small",disabled:!l(t).settings.copyright.enable},null,8,["modelValue","disabled"])]),o("div",Ae,[Be,e(V,{modelValue:l(t).settings.copyright.website,"onUpdate:modelValue":s[19]||(s[19]=n=>l(t).settings.copyright.website=n),size:"small",disabled:!l(t).settings.copyright.enable},null,8,["modelValue","disabled"])]),o("div",Ie,[Ne,e(V,{modelValue:l(t).settings.copyright.beian,"onUpdate:modelValue":s[20]||(s[20]=n=>l(t).settings.copyright.beian=n),size:"small",disabled:!l(t).settings.copyright.enable},null,8,["modelValue","disabled"])]),e(_,null,{default:a(()=>[i("主页")]),_:1}),o("div",$e,[o("div",Ee,[i(" 是否开启 "),e(c,{content:"该功能开启时，登录成功默认进入主页，反之则默认进入导航栏里第一个导航页面",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.home.enable,"onUpdate:modelValue":s[21]||(s[21]=n=>l(t).settings.home.enable=n)},null,8,["modelValue"])]),o("div",Fe,[He,e(V,{modelValue:l(t).settings.home.title,"onUpdate:modelValue":s[22]||(s[22]=n=>l(t).settings.home.title=n),size:"small"},null,8,["modelValue"])]),e(_,null,{default:a(()=>[i("其它")]),_:1}),o("div",Je,[o("div",Re,[i(" 组件尺寸 "),e(c,{content:"全局设置 Element Plus 组件的默认尺寸大小",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(M,{modelValue:l(t).settings.app.elementSize,"onUpdate:modelValue":s[23]||(s[23]=n=>l(t).settings.app.elementSize=n),size:"small"},{default:a(()=>[e(b,{label:"large"},{default:a(()=>[i(" 较大 ")]),_:1}),e(b,{label:"default"},{default:a(()=>[i(" 默认 ")]),_:1}),e(b,{label:"small"},{default:a(()=>[i(" 稍小 ")]),_:1})]),_:1},8,["modelValue"])]),o("div",Oe,[Te,e(d,{modelValue:l(t).settings.app.enablePermission,"onUpdate:modelValue":s[24]||(s[24]=n=>l(t).settings.app.enablePermission=n)},null,8,["modelValue"])]),o("div",De,[o("div",Ge,[i(" 载入进度条 "),e(c,{content:"该功能开启时，跳转路由会看到页面顶部有进度条",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.app.enableProgress,"onUpdate:modelValue":s[25]||(s[25]=n=>l(t).settings.app.enableProgress=n)},null,8,["modelValue"])]),o("div",je,[o("div",Ke,[i(" 动态标题 "),e(c,{content:"该功能开启时，页面标题会显示当前路由标题，格式为“页面标题 - 网站名称”；关闭时则显示网站名称，网站名称在项目根目录下 .env.* 文件里配置",placement:"top"},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:question-filled"})]),_:1})]),_:1})]),e(d,{modelValue:l(t).settings.app.enableDynamicTitle,"onUpdate:modelValue":s[26]||(s[26]=n=>l(t).settings.app.enableDynamicTitle=n)},null,8,["modelValue"])])]),_:2},[l(A)?{name:"footer",fn:a(()=>[e(N,{type:"primary",onClick:B},{icon:a(()=>[e(p,null,{default:a(()=>[e(m,{name:"ep:document-copy"})]),_:1})]),default:a(()=>[i(" 复制配置 ")]),_:1})]),key:"0"}:void 0]),1032,["modelValue"])])}}});const Ye=Q(Qe,[["__scopeId","data-v-d5267795"]]);export{Ye as default};