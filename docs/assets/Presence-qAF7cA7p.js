import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DQf5qH27.js";import{e as P}from"./theme-ELSemj-T.js";const S=(n,e)=>{let t=[`connectionId:${n.connectionId}`];if(!n.data)return t.join("|");if(e){const s=(Array.isArray(e)?e:[e]).map(a=>{const i=n.data?.[a];return i!==void 0?`${a}:${JSON.stringify(i)}`:`${a}:undefined`});t=t.concat(s)}else{const s=Object.keys(n.data).sort().map(a=>{const i=n.data?.[a];return`${a}:${JSON.stringify(i)}`});t=t.concat(s)}return t.join("|")};function J(n,e,t){const s=typeof e=="function"||e===void 0,a=s&&typeof e=="function"?e:void 0,i=s?t:e,[l,N]=d.useState([]),[k,u]=d.useState(),[A,y]=d.useState(),r=P({...i?.instanceOptions,id:n},i?.credentials);return d.useEffect(()=>{r&&(async()=>{try{const c=await r.getJoinedConnections();N(c||[])}catch(c){y(c)}})()},[r]),d.useEffect(()=>{if(!r)return;const c=o=>{N(p=>{const v=S(o,i?.deduplicateBy),g=(p??[]).filter(C=>S(C,i?.deduplicateBy)!==v);return o.connectionId===r.connectionId?[o,...g]:[...g,o]})},m=o=>{N(p=>{if(i?.deduplicateBy||o.data&&Object.keys(o.data).length>0){const v={connectionId:o.connectionId,data:o.data},g=S(v,i?.deduplicateBy);return(p??[]).filter(C=>S(C,i?.deduplicateBy)!==g)}return(p??[]).filter(v=>v.connectionId!==o.connectionId)})},$=()=>{u(r.connectionId)};return r.on("connect",$),a&&r.on("message",a),r.on("presence:join",c),r.on("presence:leave",m),r.connectionId&&u(r.connectionId),()=>{r&&(a&&r.off("message",a),r.off("presence:join",c),r.off("presence:leave",m),r.off("connect",$))}},[r,a,i?.deduplicateBy]),[l,c=>{try{r?.send(c),a&&a(c)}catch(m){y(m)}},c=>{try{r?.join(c)}catch(m){y(m)}},()=>{try{r?.leave()}catch(c){y(c)}},k,A]}const M=n=>n?n.split(" ").map(e=>e.charAt(0)).join("").substring(0,2).toUpperCase():"?",T=n=>{const e=["linear-gradient(135deg, #667eea 0%, #764ba2 100%)","linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)","linear-gradient(135deg, #fa709a 0%, #fee140 100%)","linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)","linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)","linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"];if(!n)return e[0];let t=0;for(let s=0;s<n.length;s++)t=n.charCodeAt(s)+((t<<5)-t);return e[Math.abs(t)%e.length]},R=(n,e=!1,t=!1)=>{const s=n.data,a=s?.name||"Anonymous",i=s?.avatarUrl,k=`${a}${e?" (You)":""}${t?" (Team Member)":""}`,u=e?"vaultrice-presence-avatar vaultrice-presence-avatar-own":"vaultrice-presence-avatar",A=e?"vaultrice-presence-avatar-fallback vaultrice-presence-avatar-fallback-own":"vaultrice-presence-avatar-fallback";return i?h.jsx("img",{src:i,alt:a,className:u,title:k}):h.jsx("div",{className:A,style:{background:T(a)},title:k,children:M(a)})},_=(n,e=!1)=>{const t=n?.name||"Anonymous",s=n?.avatarUrl,a=`${t}${e?" (You)":""}`;return s?h.jsx("img",{src:s,alt:t,className:"vaultrice-chat-avatar-img",title:a}):h.jsx("div",{className:"vaultrice-chat-avatar-fallback",style:{background:T(t)},title:a,children:M(t)})};R.__docgenInfo={description:"",methods:[],displayName:"defaultRenderPresenceAvatar"};_.__docgenInfo={description:"",methods:[],displayName:"defaultRenderChatAvatar"};const O=(n,e)=>e?Array.isArray(e)?e.map(t=>n?.[t]).join("|"):n?.[e]:n?.name,Y=({id:n,user:e,onMessage:t,onSendReady:s,maxAvatars:a=5,renderAvatar:i=R,deduplicateBy:l,credentials:N,instanceOptions:k,predefinedUsers:u=[],showOfflineUsers:A=!1})=>{const[y,r,c,m,$]=J(n,t,{credentials:N,instanceOptions:k,deduplicateBy:l}),o=d.useRef(!1),p=d.useRef(s),v=A||u.length>0,g=d.useMemo(()=>e,l?(Array.isArray(l)?l:[l]).map(I=>e[I]):Object.values(e));d.useEffect(()=>{p.current=s},[s]),d.useEffect(()=>{p.current&&r&&p.current(r)},[]),d.useEffect(()=>(g&&!o.current&&(c(g),o.current=!0),()=>{o.current&&(m(),o.current=!1)}),[g]);const C=d.useMemo(()=>{const I=[...u],U=[],j=new Set;return y.forEach(f=>{const x=O(f.data,l),b=I.find(w=>O(w,l)===x);b&&j.add(O(b,l)),U.push({connection:f,predefined:b,isOnline:!0})}),v&&I.forEach(f=>{const x=O(f,l);j.has(x)||U.some(w=>w.connection?O(w.connection.data,l)===x:!1)||U.push({connection:null,predefined:f,isOnline:!1})}),U},[y,u,l,v]),V=C.slice(0,a),q=Math.max(0,C.length-a);return h.jsx("div",{className:"vaultrice-presence",children:h.jsxs("div",{className:"vaultrice-presence-pile",children:[V.map((I,U)=>{const{connection:j,predefined:f,isOnline:x}=I,b=j&&$===j.connectionId||void 0,w=j||{connectionId:`offline-${f?.id||U}`,data:f};return h.jsx("div",{className:`
                ${b?"vaultrice-presence-own":""}
                ${x?"":"vaultrice-presence-offline"}
                ${f?"vaultrice-presence-predefined":""}
              `.trim(),children:i(w,b,!!f)},w.connectionId)}),q>0&&h.jsxs("div",{className:"vaultrice-presence-avatar vaultrice-presence-more",children:["+",q]})]})})};Y.__docgenInfo={description:"",methods:[],displayName:"Presence",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the presence instance."},user:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  name?: string
  avatarUrl?: string
  [key: string]: any
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"avatarUrl",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"Current user information."},onMessage:{required:!1,tsType:{name:"unknown"},description:"Callback function called when a message is received."},onSendReady:{required:!1,tsType:{name:"unknown"},description:"Callback function called when send function is ready to use."},maxAvatars:{required:!1,tsType:{name:"number"},description:'Maximum number of avatars to display before showing "+N more".',defaultValue:{value:"5",computed:!1}},renderAvatar:{required:!1,tsType:{name:"signature",type:"function",raw:"(connection: JoinedConnection, isOwnConnection?: boolean, predefinedUser?: boolean) => ReactNode",signature:{arguments:[{type:{name:"JoinedConnection"},name:"connection"},{type:{name:"boolean"},name:"isOwnConnection"},{type:{name:"boolean"},name:"predefinedUser"}],return:{name:"ReactNode"}}},description:"Custom avatar renderer function.",defaultValue:{value:`(connection: JoinedConnection, isOwnConnection = false, predefined = false) => {
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
}`,computed:!1}},deduplicateBy:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Property name(s) to use for deduplicating users."},credentials:{required:!1,tsType:{name:"Credentials"},description:"Vaultrice credentials for authentication."},instanceOptions:{required:!1,tsType:{name:"InstanceOptions"},description:"Optional instance options."},predefinedUsers:{required:!1,tsType:{name:"Array",elements:[{name:"PredefinedUser"}],raw:"PredefinedUser[]"},description:"List of predefined team members to show even when offline.",defaultValue:{value:"[]",computed:!1}},showOfflineUsers:{required:!1,tsType:{name:"boolean"},description:"Whether to show offline predefined users.",defaultValue:{value:"false",computed:!1}}}};export{Y as P,_ as d,J as o};
