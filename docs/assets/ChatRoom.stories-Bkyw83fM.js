import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-CUKlEioi.js";import{C as $}from"./Chat-CtRkn3oJ.js";import{P as L}from"./Presence-DuWhkiWR.js";import"./theme-ELSemj-T.js";import"./preload-helper-D9Z9MdNV.js";const j=({id:i,user:p,title:s,subtitle:m,showPresence:o=!0,showHeader:P=!0,credentials:c,instanceOptions:u,deduplicateBy:C,predefinedUsers:a,showOfflineUsers:h,maxAvatars:b,renderPresenceAvatar:S,renderChatAvatar:q,renderMessage:k,placeholder:D,maxHeight:M="400px",showTimestamps:R=!0,showUserAvatars:A=!0,autoScroll:O=!0,messageFilter:H,disabled:W=!1,onMessage:B,onSendReady:I,onPresenceMessage:U,onPresenceSendReady:w})=>{const[T,V]=t.useState(0),[d,z]=t.useState(null),J=t.useCallback(r=>{z(r),w&&w(r)},[w]),N=t.useCallback(r=>{r.type==="presence"?(r.action==="join"||r.action==="update")&&d&&d({type:"get-presence"}):r.type==="presence-state"&&Array.isArray(r.connections)&&V(r.connections.length),U&&U(r)},[U,d]);t.useEffect(()=>{d&&d({type:"get-presence"})},[d]);const E=s||"Team Chat",F=m||(T>0?`${T} online`:"Join the conversation");return e.jsxs("div",{className:"vaultrice-chatroom",children:[P&&(s||m||o)&&e.jsxs("div",{className:"vaultrice-chatroom-header",children:[e.jsxs("div",{className:"vaultrice-chatroom-header-text",children:[(s||o)&&e.jsx("h3",{className:"vaultrice-chatroom-title",children:E}),(m||!s&&T>=0)&&e.jsx("p",{className:"vaultrice-chatroom-subtitle",children:F})]}),o&&e.jsx("div",{className:"vaultrice-chatroom-presence",children:e.jsx(L,{id:i,user:p,credentials:c,instanceOptions:u,deduplicateBy:C,predefinedUsers:a,showOfflineUsers:h,maxAvatars:b,renderAvatar:S,onMessage:N,onSendReady:J})})]}),e.jsx("div",{className:"vaultrice-chatroom-chat",children:e.jsx($,{id:i,user:p,credentials:c,instanceOptions:u,placeholder:D,maxHeight:M,showTimestamps:R,showUserAvatars:A,autoScroll:O,messageFilter:H,renderMessage:k,renderAvatar:q,disabled:W,onMessage:B,onSendReady:I})})]})};j.__docgenInfo={description:"",methods:[],displayName:"ChatRoom",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the chat room (shared between chat and presence)."},user:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  name: string
  avatarUrl?: string
  id?: string
  [key: string]: any
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatarUrl",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"Current user information."},title:{required:!1,tsType:{name:"string"},description:"Optional room title."},subtitle:{required:!1,tsType:{name:"string"},description:"Optional room description or subtitle."},showPresence:{required:!1,tsType:{name:"boolean"},description:`Show presence component above chat.
@default true`,defaultValue:{value:"true",computed:!1}},showHeader:{required:!1,tsType:{name:"boolean"},description:`Show room header with title/subtitle.
@default true`,defaultValue:{value:"true",computed:!1}},credentials:{required:!1,tsType:{name:"ChatProps['credentials']",raw:"ChatProps['credentials']"},description:"Vaultrice credentials for authentication."},instanceOptions:{required:!1,tsType:{name:"ChatProps['instanceOptions']",raw:"ChatProps['instanceOptions']"},description:"Optional instance options (shared between chat and presence)."},deduplicateBy:{required:!1,tsType:{name:"PresenceProps['deduplicateBy']",raw:"PresenceProps['deduplicateBy']"},description:"Property name(s) to use for deduplicating users."},predefinedUsers:{required:!1,tsType:{name:"PresenceProps['predefinedUsers']",raw:"PresenceProps['predefinedUsers']"},description:"List of predefined team members to show in presence."},showOfflineUsers:{required:!1,tsType:{name:"PresenceProps['showOfflineUsers']",raw:"PresenceProps['showOfflineUsers']"},description:"Whether to show offline predefined users in presence."},maxAvatars:{required:!1,tsType:{name:"PresenceProps['maxAvatars']",raw:"PresenceProps['maxAvatars']"},description:"Maximum number of avatars to display in presence."},renderPresenceAvatar:{required:!1,tsType:{name:"PresenceProps['renderAvatar']",raw:"PresenceProps['renderAvatar']"},description:"Custom avatar renderer for presence."},renderChatAvatar:{required:!1,tsType:{name:"ChatProps['renderAvatar']",raw:"ChatProps['renderAvatar']"},description:"Custom avatar renderer for chat messages."},renderMessage:{required:!1,tsType:{name:"ChatProps['renderMessage']",raw:"ChatProps['renderMessage']"},description:"Custom message renderer for chat."},placeholder:{required:!1,tsType:{name:"ChatProps['placeholder']",raw:"ChatProps['placeholder']"},description:"Chat-specific props"},maxHeight:{required:!1,tsType:{name:"ChatProps['maxHeight']",raw:"ChatProps['maxHeight']"},description:"",defaultValue:{value:"'400px'",computed:!1}},showTimestamps:{required:!1,tsType:{name:"ChatProps['showTimestamps']",raw:"ChatProps['showTimestamps']"},description:"",defaultValue:{value:"true",computed:!1}},showUserAvatars:{required:!1,tsType:{name:"ChatProps['showUserAvatars']",raw:"ChatProps['showUserAvatars']"},description:"",defaultValue:{value:"true",computed:!1}},autoScroll:{required:!1,tsType:{name:"ChatProps['autoScroll']",raw:"ChatProps['autoScroll']"},description:"",defaultValue:{value:"true",computed:!1}},messageFilter:{required:!1,tsType:{name:"ChatProps['messageFilter']",raw:"ChatProps['messageFilter']"},description:""},disabled:{required:!1,tsType:{name:"ChatProps['disabled']",raw:"ChatProps['disabled']"},description:"",defaultValue:{value:"false",computed:!1}},onMessage:{required:!1,tsType:{name:"ChatProps['onMessage']",raw:"ChatProps['onMessage']"},description:"Callbacks"},onSendReady:{required:!1,tsType:{name:"ChatProps['onSendReady']",raw:"ChatProps['onSendReady']"},description:""},onPresenceMessage:{required:!1,tsType:{name:"PresenceProps['onMessage']",raw:"PresenceProps['onMessage']"},description:""},onPresenceSendReady:{required:!1,tsType:{name:"PresenceProps['onSendReady']",raw:"PresenceProps['onSendReady']"},description:""}}};const ae={title:"Vaultrice/ChatRoom",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{credentials:{control:!1},onMessage:{control:!1},onSendReady:{control:!1},onPresenceMessage:{control:!1},onPresenceSendReady:{control:!1},renderMessage:{control:!1},renderChatAvatar:{control:!1},renderPresenceAvatar:{control:!1},messageFilter:{control:!1}}},l={projectId:"253c8eeb-dcdf-4d67-8557-a7a8b92228be",apiKey:"08ee33b7-9e85-47b8-a164-87f0afba70fc",apiSecret:"27b20eee-3171-4727-8280-17ef62556c9f"},_=[{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe",role:"Team Lead"},{id:"jane-456",name:"Jane Smith",avatarUrl:"https://i.pravatar.cc/150?u=jane-smith",role:"Developer"},{id:"bob-789",name:"Bob Wilson",role:"Designer"}],f={args:{id:"chatroom-default",user:{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},title:"Team Discussion",subtitle:"General chat for the team",credentials:l}},v={args:{id:"chatroom-team",user:{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe"},title:"Engineering Team",subtitle:"Daily standup and collaboration",predefinedUsers:_,showOfflineUsers:!0,deduplicateBy:"id",credentials:l}},x={args:{id:"chatroom-minimal",user:{name:"User",id:"user-123"},showHeader:!1,showPresence:!1,maxHeight:"300px",credentials:l}},g={args:{id:"chatroom-compact",user:{name:"Compact User",id:"compact-123",avatarUrl:"https://i.pravatar.cc/150?u=compact"},title:"Quick Chat",showTimestamps:!1,maxHeight:"250px",maxAvatars:3,credentials:l}},n=[{name:"Alice Johnson",id:"alice-1",avatarUrl:"https://i.pravatar.cc/150?u=alice"},{name:"Bob Smith",id:"bob-2",avatarUrl:"https://i.pravatar.cc/150?u=bob"},{name:"Carol Davis",id:"carol-3",avatarUrl:"https://i.pravatar.cc/150?u=carol"},{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},{name:"Eve Martinez",id:"eve-4",avatarUrl:"https://i.pravatar.cc/150?u=eve"},{name:"Frank Lee",id:"frank-5",avatarUrl:"https://i.pravatar.cc/150?u=frank"},{name:"Grace Kim",id:"grace-6",avatarUrl:"https://i.pravatar.cc/150?u=grace"},{name:"Henry Zhao",id:"henry-7",avatarUrl:"https://i.pravatar.cc/150?u=henry"},{name:"Ivy Chen",id:"ivy-8",avatarUrl:"https://i.pravatar.cc/150?u=ivy"},{name:"Jack Miller",id:"jack-9",avatarUrl:"https://i.pravatar.cc/150?u=jack"}],G=()=>{const[i,p]=t.useState(()=>{const a=Math.floor(Math.random()*n.length);return n[a]}),[s,m]=t.useState("Product Team"),[o,P]=t.useState(!0),[c,u]=t.useState(!0),C=()=>{const a=Math.floor(Math.random()*n.length);p(n[a])};return e.jsxs("div",{style:{width:"600px",padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Room Configuration:"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx("input",{type:"text",value:s,onChange:a=>m(a.target.value),placeholder:"Room title",style:{padding:"6px 8px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",minWidth:"150px"}}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:o,onChange:a=>P(a.target.checked)}),"Show presence"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:c,onChange:a=>u(a.target.checked)}),"Show offline users"]})]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Join as:"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("select",{value:i.id,onChange:a=>{const h=n.find(b=>b.id===a.target.value);h&&p(h)},style:{padding:"6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",minWidth:"200px"},children:n.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))}),e.jsx("button",{onClick:C,style:{padding:"6px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"12px",background:"#f8f9fa",cursor:"pointer"},title:"Select random user",children:"🎲 Random"})]})]})]}),e.jsx(j,{id:"chatroom-interactive",user:i,title:s,subtitle:`Welcome to the ${s.toLowerCase()} discussion`,showPresence:o,predefinedUsers:n,showOfflineUsers:c,deduplicateBy:"id",maxHeight:"350px",credentials:l},`${i.id}-${o}-${c}`)]})},y={args:{id:"chatroom-interactive",user:{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},title:"Product Team",subtitle:"Welcome to the product team discussion",showPresence:!0,predefinedUsers:n,showOfflineUsers:!0,deduplicateBy:"id",maxHeight:"350px",credentials:l},render:()=>e.jsx(G,{}),parameters:{docs:{description:{story:"Complete interactive chat room with configurable options. Combines Chat and Presence into a single, polished component perfect for team collaboration."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-default',
    user: {
      name: 'Demo User',
      id: 'demo-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User'
    },
    title: 'Team Discussion',
    subtitle: 'General chat for the team',
    credentials: defaultCredentials
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-team',
    user: {
      id: 'john-123',
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=john-doe'
    },
    title: 'Engineering Team',
    subtitle: 'Daily standup and collaboration',
    predefinedUsers: teamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    credentials: defaultCredentials
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-minimal',
    user: {
      name: 'User',
      id: 'user-123'
    },
    showHeader: false,
    showPresence: false,
    maxHeight: '300px',
    credentials: defaultCredentials
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-compact',
    user: {
      name: 'Compact User',
      id: 'compact-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=compact'
    },
    title: 'Quick Chat',
    showTimestamps: false,
    maxHeight: '250px',
    maxAvatars: 3,
    credentials: defaultCredentials
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-interactive',
    user: {
      name: 'Demo User',
      id: 'demo-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User'
    },
    title: 'Product Team',
    subtitle: 'Welcome to the product team discussion',
    showPresence: true,
    predefinedUsers: allUsers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    maxHeight: '350px',
    credentials: defaultCredentials
  },
  render: () => <InteractiveChatRoomDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Complete interactive chat room with configurable options. Combines Chat and Presence into a single, polished component perfect for team collaboration.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const re=["Default","WithPredefinedUsers","Minimal","CompactWithPresence","Interactive"];export{g as CompactWithPresence,f as Default,y as Interactive,x as Minimal,v as WithPredefinedUsers,re as __namedExportsOrder,ae as default};
