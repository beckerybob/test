const authen=(t,e)=>{return fetch(t,e).then(t=>{if(200===t.status)return aocResponseData=t.json(),aocResponseData.then(e=>({status:t.status,statusText:t.statusText,...e}));throw t}).then(t=>{const{access_token:e,cp_id:s,service_id:a,css_keyword:o,cp_trans_id:c,status:r}=t;return localStorage.setItem("access_token",e),localStorage.setItem("cp_id",s),localStorage.setItem("service_id",a),localStorage.setItem("cp_trans_id",c),localStorage.setItem("css_keyword",o),localStorage.setItem("status",r),t}).catch(t=>(console.log(t),{status:t.status,statusText:t.statusText})).then(t=>({status:t.status,statusText:t.statusText}))},aoc=async(t,e,s,a,o)=>{let c=!1;const r=localStorage.getItem("access_token"),n=localStorage.getItem("cp_id"),i=localStorage.getItem("service_id"),l=localStorage.getItem("cp_trans_id"),d=localStorage.getItem("css_keyword"),_=document.createElement("form");_.setAttribute("id","aoc_form"),_.setAttribute("method","post");const u={access_token:r,service_id:i,cp_id:n,css_keyword:d,cp_trans_id:l};Object.entries({from_cp_msisdn:e,from_cp_minsertion_datetime:s,from_cp_client_ip:a,from_cp_user_agent:o}).forEach(t=>{void 0!==t[1]&&(u[t[0]]=t[1])}),Object.keys(u).forEach(t=>{const e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name",t.toString()),e.setAttribute("id",t.toString()),e.setAttribute("value",u[t].toString()),_.appendChild(e)}),document.getElementsByTagName("body")[0].appendChild(_);const m=t?"PROD"!==t?`-${t.toLowerCase()}`:"":"-dev";if(r&&i&&n&&d&&l){let e="";switch(t){case"PROD":e="https://aoc.truecorp.co.th/front/aoc-frontend";break;default:c=!0}const s=`${e}?cp_trans_id=${l}`;_.setAttribute("action",s)}else c=!0;await localStorage.clear(),c?window.location.replace(`https://aoc${m||"dev"}.truecorp.co.th/K199.html`):_.submit()};
