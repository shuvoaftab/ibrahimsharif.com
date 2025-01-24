import{d as i}from"./formatDate.B31H1PU4.js";import{c as e}from"./consts.BG5L221n.js";import{r as f}from"./zh-cn.OFSM3MJf.js";import"./hoisted.M7aTynpC.js";import"./Donate.astro_astro_type_script_index_0_lang.BKzhUlNd.js";import"./SidebarIcon.astro_astro_type_script_index_0_lang.CF7awRPF.js";import"./_commonjsHelpers.Cpj98o6Y.js";i.extend(f);i.locale(e.lang);let m=document.getElementById("more-btn");m.addEventListener("click",function(){d()});let n="",c="",r="";await g();await d();async function g(){let a=await(await fetch(`${e.memosUrl}/api/v1/users:search?filter=username=='${e.memosUsername}'`)).json();n=a.users[0].avatarUrl?a.users[0].avatarUrl:"https://memos.cirry.cn/full-logo.webp",c=a.users[0].name}async function d(){let a=await(await fetch(`${e.memosUrl}/api/v1/memos?filter=creator=='${c}'&&visibilities==['PUBLIC']&pageSize=${e.memosPageSize}&pageToken=${r}`)).json(),l="";a.memos.forEach(t=>{let o="";t.resources.length>0&&t.resources.filter(s=>["image/jpeg","image/png","image/jpg","image/webp"].includes(s.type)).forEach(s=>{o+=`<img src="${e.memosUrl+"/file/"+s.name+"/"+s.filename}" alt="${s.filename}" />`}),l+=`
          <div class="flex flex-col  shadow flex flex-col bg-skin-card p-4 mb-4 rounded-lg">
            <div class="flex w-full memos-center">
              <img src="${n}" class="github-avatar mr-4" alt="avatar" />
              <div>@${e.memosUsername}</div>
            </div>
            <p class="memo-content-wrapper my-4"> ${t.snippet}</p>
            <div>${o}</div>

            <p>${i(t.updateTime).fromNow()} • ${i(t.updateTime).format("YYYY-MM-DD HH:mm")}</p>
          </div>
          `}),document.getElementById("memos").innerHTML+=l.toString(),r=a.nextPageToken,r===""?m.classList.add("hidden"):m.classList.remove("hidden")}
