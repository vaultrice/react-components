import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CcyhuIVe.js";import{e as J}from"./theme-BHdC5j6d.js";const S=(a,e)=>{let t=[`connectionId:${a.connectionId}`];if(!a.data)return t.join("|");if(e){const i=(Array.isArray(e)?e:[e]).map(n=>{const s=a.data?.[n];return s!==void 0?`${n}:${JSON.stringify(s)}`:`${n}:undefined`});t=t.concat(i)}else{const i=Object.keys(a.data).sort().map(n=>{const s=a.data?.[n];return`${n}:${JSON.stringify(s)}`});t=t.concat(i)}return t.join("|")};function _(a,e,t){const i=typeof e=="function"||e===void 0,n=i&&typeof e=="function"?e:void 0,s=i?t:e,[$,c]=d.useState([]),[C,I]=d.useState(),[g,U]=d.useState(),r=J({...s?.instanceOptions,id:a},s?.credentials);return d.useEffect(()=>{r&&(async()=>{try{const o=await r.getJoinedConnections();c(o||[])}catch(o){U(o)}})()},[r]),d.useEffect(()=>{if(!r)return;const o=l=>{c(u=>{const m=S(l,s?.deduplicateBy),y=(u??[]).filter(b=>S(b,s?.deduplicateBy)!==m);return l.connectionId===r.connectionId?[l,...y]:[...y,l]})},p=l=>{c(u=>{if(s?.deduplicateBy||l.data&&Object.keys(l.data).length>0){const m={connectionId:l.connectionId,data:l.data},y=S(m,s?.deduplicateBy);return(u??[]).filter(b=>S(b,s?.deduplicateBy)!==y)}return(u??[]).filter(m=>m.connectionId!==l.connectionId)})},v=()=>{I(r.connectionId)};return r.on("connect",v),n&&r.on("message",n),r.on("presence:join",o),r.on("presence:leave",p),r.connectionId&&I(r.connectionId),()=>{r&&(n&&r.off("message",n),r.off("presence:join",o),r.off("presence:leave",p),r.off("connect",v))}},[r,n,s?.deduplicateBy]),[$,(o,p)=>{try{r?.send(o,{auth:p}),n&&n(o)}catch(v){U(v)}},(o,p)=>{try{r?.join(o,p)}catch(v){U(v)}},()=>{try{r?.leave()}catch(o){U(o)}},C,g]}const q=a=>a?a.split(" ").map(e=>e.charAt(0)).join("").substring(0,2).toUpperCase():"?",R=a=>{const e=["linear-gradient(135deg, #667eea 0%, #764ba2 100%)","linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)","linear-gradient(135deg, #fa709a 0%, #fee140 100%)","linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)","linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)","linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"];if(!a)return e[0];let t=0;for(let i=0;i<a.length;i++)t=a.charCodeAt(i)+((t<<5)-t);return e[Math.abs(t)%e.length]},V=(a,e=!1,t=!1)=>{const i=a.data,n=i?.name||"Anonymous",s=i?.avatarUrl,C=`${n}${e?" (You)":""}${t?" (Team Member)":""}`,I=e?"vaultrice-presence-avatar vaultrice-presence-avatar-own":"vaultrice-presence-avatar",g=e?"vaultrice-presence-avatar-fallback vaultrice-presence-avatar-fallback-own":"vaultrice-presence-avatar-fallback";return s?h.jsx("img",{src:s,alt:n,className:I,title:C}):h.jsx("div",{className:g,style:{background:R(n)},title:C,children:q(n)})},Y=(a,e=!1)=>{const t=a?.name||"Anonymous",i=a?.avatarUrl,n=`${t}${e?" (You)":""}`;return i?h.jsx("img",{src:i,alt:t,className:"vaultrice-chat-avatar-img",title:n}):h.jsx("div",{className:"vaultrice-chat-avatar-fallback",style:{background:R(t)},title:n,children:q(t)})};V.__docgenInfo={description:"",methods:[],displayName:"defaultRenderPresenceAvatar"};Y.__docgenInfo={description:"",methods:[],displayName:"defaultRenderChatAvatar"};const O=(a,e)=>e?Array.isArray(e)?e.map(t=>a?.[t]).join("|"):a?.[e]:a?.id,D=({id:a,user:e,auth:t,onMessage:i,onSendReady:n,maxAvatars:s=5,renderAvatar:$=V,deduplicateBy:c="id",credentials:C,instanceOptions:I,predefinedUsers:g=[],showOfflineUsers:U=!1})=>{const[r,o,p,v,l]=_(a,i,{credentials:C,instanceOptions:I,deduplicateBy:c}),u=d.useRef(!1),m=d.useRef(n),y=U||g.length>0,b=d.useMemo(()=>e,c?(Array.isArray(c)?c:[c]).map(j=>e[j]):Object.values(e));d.useEffect(()=>{m.current=n},[n]),d.useEffect(()=>{m.current&&o&&m.current(o)},[]),d.useEffect(()=>(b&&!u.current&&(p(b,t),u.current=!0),()=>{u.current&&(v(),u.current=!1)}),[b]);const M=d.useMemo(()=>{const j=[...g],A=[],k=new Set;return r.forEach(f=>{const x=O(f.data,c),w=j.find(N=>O(N,c)===x);w&&k.add(O(w,c)),A.push({connection:f,predefined:w,isOnline:!0})}),y&&j.forEach(f=>{const x=O(f,c);k.has(x)||A.some(N=>N.connection?O(N.connection.data,c)===x:!1)||A.push({connection:null,predefined:f,isOnline:!1})}),A},[r,g,c,y]),E=M.slice(0,s),T=Math.max(0,M.length-s);return h.jsx("div",{className:"vaultrice-presence",children:h.jsxs("div",{className:"vaultrice-presence-pile",children:[E.map((j,A)=>{const{connection:k,predefined:f,isOnline:x}=j,w=k&&l===k.connectionId||void 0,N=k||{connectionId:`offline-${f?.id||A}`,data:f};return h.jsx("div",{className:`
                ${w?"vaultrice-presence-own":""}
                ${x?"":"vaultrice-presence-offline"}
                ${f?"vaultrice-presence-predefined":""}
              `.trim(),children:$(N,w,!!f)},N.connectionId)}),T>0&&h.jsxs("div",{className:"vaultrice-presence-avatar vaultrice-presence-more",children:["+",T]})]})})};D.__docgenInfo={description:"",methods:[],displayName:"Presence",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the presence instance."},user:{required:!0,tsType:{name:"User"},description:"Current user information."},onMessage:{required:!1,tsType:{name:"unknown"},description:"Callback function called when a message is received."},onSendReady:{required:!1,tsType:{name:"unknown"},description:"Callback function called when send function is ready to use."},maxAvatars:{required:!1,tsType:{name:"number"},description:'Maximum number of avatars to display before showing "+N more".',defaultValue:{value:"5",computed:!1}},renderAvatar:{required:!1,tsType:{name:"signature",type:"function",raw:"(connection: JoinedConnection, isOwnConnection?: boolean, predefinedUser?: boolean) => ReactNode",signature:{arguments:[{type:{name:"JoinedConnection"},name:"connection"},{type:{name:"boolean"},name:"isOwnConnection"},{type:{name:"boolean"},name:"predefinedUser"}],return:{name:"ReactNode"}}},description:"Custom avatar renderer function.",defaultValue:{value:`(connection: JoinedConnection, isOwnConnection = false, predefined = false) => {
  const userData = connection.data
  const userName = userData?.name as string || 'Anonymous'
  const avatarUrl = userData?.avatarUrl as string | undefined

  const titleSuffix = isOwnConnection ? ' (You)' : ''
  const predefinedSuffix = predefined ? ' (Team Member)' : ''
  const title = \`\${userName}\${titleSuffix}\${predefinedSuffix}\`

  const className = isOwnConnection
    ? 'vaultrice-presence-avatar vaultrice-presence-avatar-own'
    : 'vaultrice-presence-avatar'

  const fallbackClassName = isOwnConnection
    ? 'vaultrice-presence-avatar-fallback vaultrice-presence-avatar-fallback-own'
    : 'vaultrice-presence-avatar-fallback'

  return avatarUrl
    ? (
      <img
        src={avatarUrl}
        alt={userName}
        className={className}
        title={title}
      />
      )
    : (
      <div
        className={fallbackClassName}
        style={{ background: getAvatarColor(userName) }}
        title={title}
      >
        {getUserInitials(userName)}
      </div>
      )
}`,computed:!1}},deduplicateBy:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:`Property name(s) to use for deduplicating users.
@default 'id'`,defaultValue:{value:"'id'",computed:!1}},credentials:{required:!1,tsType:{name:"Credentials"},description:"Vaultrice credentials for authentication."},instanceOptions:{required:!1,tsType:{name:"InstanceOptions"},description:"Optional instance options."},predefinedUsers:{required:!1,tsType:{name:"Array",elements:[{name:"PredefinedUser"}],raw:"PredefinedUser[]"},description:"List of predefined team members to show even when offline.",defaultValue:{value:"[]",computed:!1}},showOfflineUsers:{required:!1,tsType:{name:"boolean"},description:"Whether to show offline predefined users.",defaultValue:{value:"false",computed:!1}},auth:{required:!1,tsType:{name:"UserAuthSettings"},description:"Optional object containing authentication credentials for user verification."}}};export{D as P,Y as d,_ as o};
