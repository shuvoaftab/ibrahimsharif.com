import"./hoisted.DKpK2bxw.js";import{d as e}from"./dayjs.min.YXKSuztI.js";import{r as a}from"./zh-cn.CxIDA5lQ.js";import{t as r}from"./utils.Cs786-Y_.js";import{c as i}from"./consts.BbQ_R12j.js";import"./SidebarIcon.astro_astro_type_script_index_0_lang.Bnhx_xVM.js";import"./_commonjsHelpers.Cpj98o6Y.js";e.extend(a);e.locale(i.lang);class n extends HTMLElement{constructor(){super();const t=this.dataset.date,o=this.dataset.index;let s=document.getElementsByClassName("postTimeEle"),m=t?e(t).fromNow():e().format("YYYY-MM-DD");s[o].innerHTML=`${r("feed.publishedIn")}：${m}`}}customElements.define("feed-post-date",n);
