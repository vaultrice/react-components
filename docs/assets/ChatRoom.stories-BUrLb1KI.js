import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-Fsy4Retp.js";import{C as Z}from"./Chat-CQwdcC9R.js";import{P as X}from"./Presence-CGpS6P0O.js";import"./theme-ELSemj-T.js";import"./preload-helper-D9Z9MdNV.js";import"./useNonLocalStorage-BcZ29QK1.js";const S=({id:a,user:p,title:n,subtitle:h,showPresence:r=!0,showHeader:c=!0,credentials:l,instanceOptions:g,deduplicateBy:m,predefinedUsers:T,showOfflineUsers:f,maxAvatars:M,renderPresenceAvatar:k,renderChatAvatar:s,renderMessage:x,placeholder:H,maxHeight:A="400px",showTimestamps:W=!0,showUserAvatars:L=!0,autoScroll:O=!0,messageFilter:z,disabled:B=!1,persistMessages:V=!1,messageHistoryLimit:J=100,onMessage:$,onSendReady:E,onPresenceMessage:q,onPresenceSendReady:I})=>{const[D,N]=t.useState(0),[u,F]=t.useState(null),_=t.useCallback(i=>{F(i),I&&I(i)},[I]),G=t.useCallback(i=>{i.type==="presence"?(i.action==="join"||i.action==="update")&&u&&u({type:"get-presence"}):i.type==="presence-state"&&Array.isArray(i.connections)&&N(i.connections.length),q&&q(i)},[q,u]);t.useEffect(()=>{u&&u({type:"get-presence"})},[u]);const K=n||"Team Chat",Q=h||(D>0?`${D} online`:"Join the conversation");return e.jsxs("div",{className:"vaultrice-chatroom",children:[c&&(n||h||r)&&e.jsxs("div",{className:"vaultrice-chatroom-header",children:[e.jsxs("div",{className:"vaultrice-chatroom-header-text",children:[(n||r)&&e.jsx("h3",{className:"vaultrice-chatroom-title",children:K}),(h||!n&&D>=0)&&e.jsx("p",{className:"vaultrice-chatroom-subtitle",children:Q})]}),r&&e.jsx("div",{className:"vaultrice-chatroom-presence",children:e.jsx(X,{id:a,user:p,credentials:l,instanceOptions:g,deduplicateBy:m,predefinedUsers:T,showOfflineUsers:f,maxAvatars:M,renderAvatar:k,onMessage:G,onSendReady:_})})]}),e.jsx("div",{className:"vaultrice-chatroom-chat",children:e.jsx(Z,{id:a,user:p,credentials:l,instanceOptions:g,placeholder:H,maxHeight:A,showTimestamps:W,showUserAvatars:L,autoScroll:O,messageFilter:z,renderMessage:x,renderAvatar:s,disabled:B,persistMessages:V,messageHistoryLimit:J,onMessage:$,onSendReady:E})})]})};S.__docgenInfo={description:"",methods:[],displayName:"ChatRoom",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the chat room (shared between chat and presence)."},user:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  name: string
  avatarUrl?: string
  id?: string
  [key: string]: any
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatarUrl",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"Current user information."},title:{required:!1,tsType:{name:"string"},description:"Optional room title."},subtitle:{required:!1,tsType:{name:"string"},description:"Optional room description or subtitle."},showPresence:{required:!1,tsType:{name:"boolean"},description:`Show presence component above chat.
@default true`,defaultValue:{value:"true",computed:!1}},showHeader:{required:!1,tsType:{name:"boolean"},description:`Show room header with title/subtitle.
@default true`,defaultValue:{value:"true",computed:!1}},credentials:{required:!1,tsType:{name:"ChatProps['credentials']",raw:"ChatProps['credentials']"},description:"Vaultrice credentials for authentication."},instanceOptions:{required:!1,tsType:{name:"ChatProps['instanceOptions']",raw:"ChatProps['instanceOptions']"},description:"Optional instance options (shared between chat and presence)."},deduplicateBy:{required:!1,tsType:{name:"PresenceProps['deduplicateBy']",raw:"PresenceProps['deduplicateBy']"},description:"Property name(s) to use for deduplicating users."},predefinedUsers:{required:!1,tsType:{name:"PresenceProps['predefinedUsers']",raw:"PresenceProps['predefinedUsers']"},description:"List of predefined team members to show in presence."},showOfflineUsers:{required:!1,tsType:{name:"PresenceProps['showOfflineUsers']",raw:"PresenceProps['showOfflineUsers']"},description:"Whether to show offline predefined users in presence."},maxAvatars:{required:!1,tsType:{name:"PresenceProps['maxAvatars']",raw:"PresenceProps['maxAvatars']"},description:"Maximum number of avatars to display in presence."},renderPresenceAvatar:{required:!1,tsType:{name:"PresenceProps['renderAvatar']",raw:"PresenceProps['renderAvatar']"},description:"Custom avatar renderer for presence."},renderChatAvatar:{required:!1,tsType:{name:"ChatProps['renderAvatar']",raw:"ChatProps['renderAvatar']"},description:"Custom avatar renderer for chat messages."},renderMessage:{required:!1,tsType:{name:"ChatProps['renderMessage']",raw:"ChatProps['renderMessage']"},description:"Custom message renderer for chat."},placeholder:{required:!1,tsType:{name:"ChatProps['placeholder']",raw:"ChatProps['placeholder']"},description:"Chat-specific props"},maxHeight:{required:!1,tsType:{name:"ChatProps['maxHeight']",raw:"ChatProps['maxHeight']"},description:"",defaultValue:{value:"'400px'",computed:!1}},showTimestamps:{required:!1,tsType:{name:"ChatProps['showTimestamps']",raw:"ChatProps['showTimestamps']"},description:"",defaultValue:{value:"true",computed:!1}},showUserAvatars:{required:!1,tsType:{name:"ChatProps['showUserAvatars']",raw:"ChatProps['showUserAvatars']"},description:"",defaultValue:{value:"true",computed:!1}},autoScroll:{required:!1,tsType:{name:"ChatProps['autoScroll']",raw:"ChatProps['autoScroll']"},description:"",defaultValue:{value:"true",computed:!1}},messageFilter:{required:!1,tsType:{name:"ChatProps['messageFilter']",raw:"ChatProps['messageFilter']"},description:""},disabled:{required:!1,tsType:{name:"ChatProps['disabled']",raw:"ChatProps['disabled']"},description:"",defaultValue:{value:"false",computed:!1}},persistMessages:{required:!1,tsType:{name:"ChatProps['persistMessages']",raw:"ChatProps['persistMessages']"},description:"If true, messages will be persisted using Vaultrice",defaultValue:{value:"false",computed:!1}},messageHistoryLimit:{required:!1,tsType:{name:"ChatProps['messageHistoryLimit']",raw:"ChatProps['messageHistoryLimit']"},description:"Maximum number of messages to keep in persistent history (default: 100)",defaultValue:{value:"100",computed:!1}},onMessage:{required:!1,tsType:{name:"ChatProps['onMessage']",raw:"ChatProps['onMessage']"},description:"Callbacks"},onSendReady:{required:!1,tsType:{name:"ChatProps['onSendReady']",raw:"ChatProps['onSendReady']"},description:""},onPresenceMessage:{required:!1,tsType:{name:"PresenceProps['onMessage']",raw:"PresenceProps['onMessage']"},description:""},onPresenceSendReady:{required:!1,tsType:{name:"PresenceProps['onSendReady']",raw:"PresenceProps['onSendReady']"},description:""}}};const de={title:"Vaultrice/ChatRoom",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{credentials:{control:!1},onMessage:{control:!1},onSendReady:{control:!1},onPresenceMessage:{control:!1},onPresenceSendReady:{control:!1},renderMessage:{control:!1},renderChatAvatar:{control:!1},renderPresenceAvatar:{control:!1},messageFilter:{control:!1},persistMessages:{control:"boolean",description:"Enable persistent message history using Vaultrice storage"},messageHistoryLimit:{control:{type:"number",min:10,max:1e3,step:10},description:"Maximum number of messages to keep in persistent history"}}},d={projectId:"253c8eeb-dcdf-4d67-8557-a7a8b92228be",apiKey:"08ee33b7-9e85-47b8-a164-87f0afba70fc",apiSecret:"27b20eee-3171-4727-8280-17ef62556c9f"},R=[{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe",role:"Team Lead"},{id:"jane-456",name:"Jane Smith",avatarUrl:"https://i.pravatar.cc/150?u=jane-smith",role:"Developer"},{id:"bob-789",name:"Bob Wilson",role:"Designer"}],y={args:{id:"chatroom-default",user:{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},title:"Team Discussion",subtitle:"General chat for the team",credentials:d}},v={args:{id:"chatroom-team",user:{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe"},title:"Engineering Team",subtitle:"Daily standup and collaboration",predefinedUsers:R,showOfflineUsers:!0,deduplicateBy:"id",credentials:d}},b={args:{id:"chatroom-persistent",user:{name:"Persistent User",id:"persistent-123",avatarUrl:"https://i.pravatar.cc/150?u=persistent"},title:"Persistent Chat Room",subtitle:"Messages are saved and restored on reload",persistMessages:!0,messageHistoryLimit:50,predefinedUsers:R,showOfflineUsers:!0,deduplicateBy:"id",credentials:d},parameters:{docs:{description:{story:"This chat room demonstrates message persistence. Messages are automatically saved using Vaultrice and restored when you reload the page or return later. The message history is capped at 50 messages to demonstrate the rolling history feature."}}}},C={args:{id:"chatroom-persistent-limited",user:{name:"Limited User",id:"limited-123",avatarUrl:"https://i.pravatar.cc/150?u=limited"},title:"Chat with Limited History",subtitle:"Only keeps last 20 messages",persistMessages:!0,messageHistoryLimit:20,maxHeight:"300px",credentials:d},parameters:{docs:{description:{story:"Demonstrates a chat room with a very limited message history (20 messages). When the limit is reached, older messages are automatically removed using atomic operations."}}}},P={args:{id:"chatroom-minimal",user:{name:"User",id:"user-123"},showHeader:!1,showPresence:!1,maxHeight:"300px",credentials:d}},w={args:{id:"chatroom-compact",user:{name:"Compact User",id:"compact-123",avatarUrl:"https://i.pravatar.cc/150?u=compact"},title:"Quick Chat",showTimestamps:!1,maxHeight:"250px",maxAvatars:3,credentials:d}},o=[{name:"Alice Johnson",id:"alice-1",avatarUrl:"https://i.pravatar.cc/150?u=alice"},{name:"Bob Smith",id:"bob-2",avatarUrl:"https://i.pravatar.cc/150?u=bob"},{name:"Carol Davis",id:"carol-3",avatarUrl:"https://i.pravatar.cc/150?u=carol"},{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},{name:"Eve Martinez",id:"eve-4",avatarUrl:"https://i.pravatar.cc/150?u=eve"},{name:"Frank Lee",id:"frank-5",avatarUrl:"https://i.pravatar.cc/150?u=frank"},{name:"Grace Kim",id:"grace-6",avatarUrl:"https://i.pravatar.cc/150?u=grace"},{name:"Henry Zhao",id:"henry-7",avatarUrl:"https://i.pravatar.cc/150?u=henry"},{name:"Ivy Chen",id:"ivy-8",avatarUrl:"https://i.pravatar.cc/150?u=ivy"},{name:"Jack Miller",id:"jack-9",avatarUrl:"https://i.pravatar.cc/150?u=jack"}],Y=()=>{const[a,p]=t.useState(()=>{const s=Math.floor(Math.random()*o.length);return o[s]}),[n,h]=t.useState("Product Team"),[r,c]=t.useState(!0),[l,g]=t.useState(!0),[m,T]=t.useState(!1),[f,M]=t.useState(100),k=()=>{const s=Math.floor(Math.random()*o.length);p(o[s])};return e.jsxs("div",{style:{width:"600px",padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Room Configuration:"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx("input",{type:"text",value:n,onChange:s=>h(s.target.value),placeholder:"Room title",style:{padding:"6px 8px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",minWidth:"150px"}}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:r,onChange:s=>c(s.target.checked)}),"Show presence"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:l,onChange:s=>g(s.target.checked)}),"Show offline users"]})]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Message Persistence:"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:m,onChange:s=>T(s.target.checked)}),e.jsx("span",{style:{fontWeight:m?"600":"normal"},children:"Save message history"})]}),m&&e.jsx(e.Fragment,{children:e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:["History limit:",e.jsx("input",{type:"number",value:f,onChange:s=>M(parseInt(s.target.value)||100),min:"10",max:"1000",step:"10",style:{padding:"4px 6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",width:"70px"}})]})})]}),m&&e.jsx("div",{style:{fontSize:"12px",color:"#666",marginTop:"4px",padding:"8px",backgroundColor:"#e8f4f8",borderRadius:"4px",border:"1px solid #bee5eb"},children:"💾 Messages will be automatically saved and restored on reload. Try refreshing the page after sending some messages!"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Join as:"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("select",{value:a.id,onChange:s=>{const x=o.find(H=>H.id===s.target.value);x&&p(x)},style:{padding:"6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",minWidth:"200px"},children:o.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))}),e.jsx("button",{onClick:k,style:{padding:"6px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"12px",background:"#f8f9fa",cursor:"pointer"},title:"Select random user",children:"🎲 Random"})]})]})]}),e.jsx(S,{id:"chatroom-interactive",user:a,title:n,subtitle:`Welcome to the ${n.toLowerCase()} discussion`,showPresence:r,predefinedUsers:o,showOfflineUsers:l,deduplicateBy:"id",maxHeight:"350px",persistMessages:m,messageHistoryLimit:f,credentials:d},`${a.id}-${r}-${l}-${m}-${f}`)]})},U={args:{id:"chatroom-interactive",user:{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},title:"Product Team",subtitle:"Welcome to the product team discussion",showPresence:!0,predefinedUsers:o,showOfflineUsers:!0,deduplicateBy:"id",maxHeight:"350px",persistMessages:!1,messageHistoryLimit:100,credentials:d},render:()=>e.jsx(Y,{}),parameters:{docs:{description:{story:"Complete interactive chat room with configurable options. Combines Chat and Presence into a single, polished component perfect for team collaboration. **Try enabling message persistence** to see how messages are automatically saved and restored!"}}}},ee=()=>{const[a,p]=t.useState(1),n=()=>p(r=>Math.min(r+1,3)),h=()=>p(r=>Math.max(r-1,1));return e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx("h4",{style:{margin:"0 0 12px 0",fontSize:"16px"},children:"Multi-Instance Persistence Demo"}),e.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"14px",color:"#666"},children:"This demonstrates how message persistence works across multiple chat instances. Messages sent in any instance are immediately visible in all others."}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx("button",{onClick:h,disabled:a<=1,style:{padding:"6px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"12px",background:a<=1?"#f8f9fa":"#fff",cursor:a<=1?"not-allowed":"pointer"},children:"Remove Instance"}),e.jsxs("span",{style:{fontSize:"14px"},children:[a," instance",a!==1?"s":""]}),e.jsx("button",{onClick:n,disabled:a>=3,style:{padding:"6px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"12px",background:a>=3?"#f8f9fa":"#fff",cursor:a>=3?"not-allowed":"pointer"},children:"Add Instance"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:a===1?"1fr":a===2?"1fr 1fr":"1fr 1fr 1fr",gap:"16px",maxWidth:"1200px"},children:Array.from({length:a},(r,c)=>{const l=o[c%o.length];return e.jsxs("div",{style:{minWidth:"300px"},children:[e.jsxs("div",{style:{marginBottom:"8px",padding:"8px",backgroundColor:"#e8f4f8",borderRadius:"4px",fontSize:"12px",fontWeight:"500",textAlign:"center"},children:["Instance ",c+1," - ",l.name]}),e.jsx(S,{id:"chatroom-persistence-demo",user:l,title:`Chat Instance ${c+1}`,subtitle:"Shared persistent history",persistMessages:!0,messageHistoryLimit:30,maxHeight:"250px",showPresence:!1,showHeader:!0,credentials:d},`persistence-demo-${c}`)]},c)})})]})},j={args:{id:"chatroom-persistence-demo",user:{name:"Alice Johnson",id:"alice-1",avatarUrl:"https://i.pravatar.cc/150?u=alice"},title:"Chat Instance 1",subtitle:"Shared persistent history",persistMessages:!0,messageHistoryLimit:30,maxHeight:"250px",showPresence:!1,showHeader:!0,credentials:d},render:()=>e.jsx(ee,{}),parameters:{docs:{description:{story:"This demo shows how message persistence works across multiple chat instances sharing the same ID. Send a message in any instance and see it immediately appear in all others. The shared message history persists even when instances are added or removed."}}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-persistent',
    user: {
      name: 'Persistent User',
      id: 'persistent-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=persistent'
    },
    title: 'Persistent Chat Room',
    subtitle: 'Messages are saved and restored on reload',
    persistMessages: true,
    messageHistoryLimit: 50,
    predefinedUsers: teamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    credentials: defaultCredentials
  },
  parameters: {
    docs: {
      description: {
        story: 'This chat room demonstrates message persistence. Messages are automatically saved using Vaultrice and restored when you reload the page or return later. The message history is capped at 50 messages to demonstrate the rolling history feature.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-persistent-limited',
    user: {
      name: 'Limited User',
      id: 'limited-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=limited'
    },
    title: 'Chat with Limited History',
    subtitle: 'Only keeps last 20 messages',
    persistMessages: true,
    messageHistoryLimit: 20,
    maxHeight: '300px',
    credentials: defaultCredentials
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a chat room with a very limited message history (20 messages). When the limit is reached, older messages are automatically removed using atomic operations.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    persistMessages: false,
    messageHistoryLimit: 100,
    credentials: defaultCredentials
  },
  render: () => <InteractiveChatRoomDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Complete interactive chat room with configurable options. Combines Chat and Presence into a single, polished component perfect for team collaboration. **Try enabling message persistence** to see how messages are automatically saved and restored!'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-persistence-demo',
    user: {
      name: 'Alice Johnson',
      id: 'alice-1',
      avatarUrl: 'https://i.pravatar.cc/150?u=alice'
    },
    title: 'Chat Instance 1',
    subtitle: 'Shared persistent history',
    persistMessages: true,
    messageHistoryLimit: 30,
    maxHeight: '250px',
    showPresence: false,
    showHeader: true,
    credentials: defaultCredentials
  },
  render: () => <PersistenceDemo />,
  parameters: {
    docs: {
      description: {
        story: 'This demo shows how message persistence works across multiple chat instances sharing the same ID. Send a message in any instance and see it immediately appear in all others. The shared message history persists even when instances are added or removed.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};const ce=["Default","WithPredefinedUsers","WithPersistentMessages","PersistentWithCustomLimit","Minimal","CompactWithPresence","Interactive","PersistenceAcrossInstances"];export{w as CompactWithPresence,y as Default,U as Interactive,P as Minimal,j as PersistenceAcrossInstances,C as PersistentWithCustomLimit,b as WithPersistentMessages,v as WithPredefinedUsers,ce as __namedExportsOrder,de as default};
