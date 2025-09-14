import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BjnNhCKo.js";import{e as J}from"./theme-BHdC5j6d.js";const $=(a,e)=>{let n=[`connectionId:${a.connectionId}`];if(!a.data)return n.join("|");if(e){const i=(Array.isArray(e)?e:[e]).map(t=>{const s=a.data?.[t];return s!==void 0?`${t}:${JSON.stringify(s)}`:`${t}:undefined`});n=n.concat(i)}else{const i=Object.keys(a.data).sort().map(t=>{const s=a.data?.[t];return`${t}:${JSON.stringify(s)}`});n=n.concat(i)}return n.join("|")};function _(a,e,n){const i=typeof e=="function"||e===void 0,t=i&&typeof e=="function"?e:void 0,s=i?n:e,[T,o]=d.useState([]),[A,C]=d.useState(),[b,U]=d.useState(),r=J({...s?.instanceOptions,id:a},s?.credentials);return d.useEffect(()=>{r&&(async()=>{try{const c=await r.getJoinedConnections();o(c||[])}catch(c){U(c)}})()},[r]),d.useEffect(()=>{if(!r)return;const c=l=>{o(u=>{const m=$(l,s?.deduplicateBy),w=(u??[]).filter(N=>$(N,s?.deduplicateBy)!==m);return l.connectionId===r.connectionId?[l,...w]:[...w,l]})},v=l=>{o(u=>{if(s?.deduplicateBy||l.data&&Object.keys(l.data).length>0){const m={connectionId:l.connectionId,data:l.data},w=$(m,s?.deduplicateBy);return(u??[]).filter(N=>$(N,s?.deduplicateBy)!==w)}return(u??[]).filter(m=>m.connectionId!==l.connectionId)})},h=()=>{C(r.connectionId)};return r.on("connect",h),t&&r.on("message",t),r.on("presence:join",c),r.on("presence:leave",v),r.connectionId&&C(r.connectionId),()=>{r&&(t&&r.off("message",t),r.off("presence:join",c),r.off("presence:leave",v),r.off("connect",h))}},[r,t,s?.deduplicateBy]),[T,(c,v)=>{try{r?.send(c,{auth:v}),t&&t(c)}catch(h){U(h)}},(c,v)=>{try{r?.join(c,v)}catch(h){U(h)}},()=>{try{r?.leave()}catch(c){U(c)}},A,b]}const q=a=>a?a.split(" ").map(e=>e.charAt(0)).join("").substring(0,2).toUpperCase():"?",R=a=>{const e=["linear-gradient(135deg, #667eea 0%, #764ba2 100%)","linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)","linear-gradient(135deg, #fa709a 0%, #fee140 100%)","linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)","linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)","linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"];if(!a)return e[0];let n=0;for(let i=0;i<a.length;i++)n=a.charCodeAt(i)+((n<<5)-n);return e[Math.abs(n)%e.length]},V=(a,e=!1,n=!1)=>{const i=a.data,t=i?.name||"Anonymous",s=i?.avatarUrl,A=`${t}${e?" (You)":""}${n?" (Team Member)":""}`,C=e?"vaultrice-presence-avatar vaultrice-presence-avatar-own":"vaultrice-presence-avatar",b=e?"vaultrice-presence-avatar-fallback vaultrice-presence-avatar-fallback-own":"vaultrice-presence-avatar-fallback";return s?y.jsx("img",{src:s,alt:t,className:C,title:A}):y.jsx("div",{className:b,style:{background:R(t)},title:A,children:q(t)})},W=(a,e=!1)=>{const n=a?.name||"Anonymous",i=a?.avatarUrl,t=`${n}${e?" (You)":""}`;return i?y.jsx("img",{src:i,alt:n,className:"vaultrice-chat-avatar-img",title:t}):y.jsx("div",{className:"vaultrice-chat-avatar-fallback",style:{background:R(n)},title:t,children:q(n)})};V.__docgenInfo={description:"",methods:[],displayName:"defaultRenderPresenceAvatar"};W.__docgenInfo={description:"",methods:[],displayName:"defaultRenderChatAvatar"};const O=(a,e)=>e?Array.isArray(e)?e.map(n=>a?.[n]).join("|"):a?.[e]:a?.id,Y=({id:a,user:e,auth:n,onMessage:i,onSendReady:t,maxAvatars:s=5,renderAvatar:T=V,deduplicateBy:o="id",credentials:A,instanceOptions:C,predefinedUsers:b=[],showOfflineUsers:U=!1})=>{const[r,c,v,h,l]=_(a,i,{credentials:A,instanceOptions:C,deduplicateBy:o}),u=d.useRef(!1),m=d.useRef(t),w=U||b.length>0,N=d.useMemo(()=>e,o?(Array.isArray(o)?o:[o]).map(I=>e[I]):Object.values(e));d.useEffect(()=>{m.current=t},[t]),d.useEffect(()=>{m.current&&c&&m.current(c)},[]),d.useEffect(()=>((async()=>{if(N&&!u.current){let p=n;if(n?.getIdentityToken){const g=await n.getIdentityToken();p={...n,identityToken:g}}v(N,p),u.current=!0}})(),()=>{u.current&&(h(),u.current=!1)}),[N]);const S=d.useMemo(()=>{const I=[...b],p=[],g=new Set;return r.forEach(f=>{const x=O(f.data,o),k=I.find(j=>O(j,o)===x);k&&g.add(O(k,o)),p.push({connection:f,predefined:k,isOnline:!0})}),w&&I.forEach(f=>{const x=O(f,o);g.has(x)||p.some(j=>j.connection?O(j.connection.data,o)===x:!1)||p.push({connection:null,predefined:f,isOnline:!1})}),p},[r,b,o,w]),E=S.slice(0,s),M=Math.max(0,S.length-s);return y.jsx("div",{className:"vaultrice-presence",children:y.jsxs("div",{className:"vaultrice-presence-pile",children:[E.map((I,p)=>{const{connection:g,predefined:f,isOnline:x}=I,k=g&&l===g.connectionId||void 0,j=g||{connectionId:`offline-${f?.id||p}`,data:f};return y.jsx("div",{className:`
                ${k?"vaultrice-presence-own":""}
                ${x?"":"vaultrice-presence-offline"}
                ${f?"vaultrice-presence-predefined":""}
              `.trim(),children:T(j,k,!!f)},j.connectionId)}),M>0&&y.jsxs("div",{className:"vaultrice-presence-avatar vaultrice-presence-more",children:["+",M]})]})})};Y.__docgenInfo={description:"",methods:[],displayName:"Presence",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the presence instance."},user:{required:!0,tsType:{name:"User"},description:"Current user information."},onMessage:{required:!1,tsType:{name:"unknown"},description:"Callback function called when a message is received."},onSendReady:{required:!1,tsType:{name:"unknown"},description:"Callback function called when send function is ready to use."},maxAvatars:{required:!1,tsType:{name:"number"},description:'Maximum number of avatars to display before showing "+N more".',defaultValue:{value:"5",computed:!1}},renderAvatar:{required:!1,tsType:{name:"signature",type:"function",raw:"(connection: JoinedConnection, isOwnConnection?: boolean, predefinedUser?: boolean) => ReactNode",signature:{arguments:[{type:{name:"JoinedConnection"},name:"connection"},{type:{name:"boolean"},name:"isOwnConnection"},{type:{name:"boolean"},name:"predefinedUser"}],return:{name:"ReactNode"}}},description:"Custom avatar renderer function.",defaultValue:{value:`(connection: JoinedConnection, isOwnConnection = false, predefined = false) => {
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
@default 'id'`,defaultValue:{value:"'id'",computed:!1}},credentials:{required:!1,tsType:{name:"Credentials"},description:"Vaultrice credentials for authentication."},instanceOptions:{required:!1,tsType:{name:"InstanceOptions"},description:"Optional instance options."},predefinedUsers:{required:!1,tsType:{name:"Array",elements:[{name:"PredefinedUser"}],raw:"PredefinedUser[]"},description:"List of predefined team members to show even when offline.",defaultValue:{value:"[]",computed:!1}},showOfflineUsers:{required:!1,tsType:{name:"boolean"},description:"Whether to show offline predefined users.",defaultValue:{value:"false",computed:!1}},auth:{required:!1,tsType:{name:"UserAuthSettings"},description:"Optional object containing authentication credentials for user verification."}}};export{Y as P,W as d,_ as o};
