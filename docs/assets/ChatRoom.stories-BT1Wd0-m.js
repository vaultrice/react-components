import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-CcyhuIVe.js";import{C as J}from"./Chat-Csk7LkaX.js";import{P as N}from"./Presence-DntoYNaJ.js";import"./theme-BHdC5j6d.js";import"./preload-helper-D9Z9MdNV.js";import"./useNonLocalStorage-WQFKiGvU.js";const U=({id:a,user:d,auth:l,title:p,subtitle:r,showPresence:t=!0,showHeader:c=!0,credentials:u,instanceOptions:o,deduplicateBy:j="id",predefinedUsers:h,showOfflineUsers:T,maxAvatars:S,renderPresenceAvatar:s,renderChatAvatar:f,renderMessage:M,placeholder:I,showTimestamps:D=!0,showUserAvatars:R=!0,autoScroll:q=!0,messageFilter:W,disabled:A=!1,persistMessages:H=!1,messageHistoryLimit:L=100,onMessage:O,onSendReady:z})=>{const B=p||"Team Chat",V=r||"Join the conversation";return e.jsxs("div",{className:"vaultrice-chatroom",children:[c&&(p||r||t)&&e.jsxs("div",{className:"vaultrice-chatroom-header",children:[e.jsxs("div",{className:"vaultrice-chatroom-header-text",children:[(p||t)&&e.jsx("h3",{className:"vaultrice-chatroom-title",children:B}),r&&e.jsx("p",{className:"vaultrice-chatroom-subtitle",children:V})]}),t&&e.jsx("div",{className:"vaultrice-chatroom-presence",children:e.jsx(N,{id:a,user:d,auth:l,credentials:u,instanceOptions:o,deduplicateBy:j,predefinedUsers:h,showOfflineUsers:T,maxAvatars:S,renderAvatar:s})})]}),e.jsx("div",{className:"vaultrice-chatroom-chat",children:e.jsx(J,{id:a,user:d,auth:l,credentials:u,instanceOptions:o,placeholder:I,showTimestamps:D,showUserAvatars:R,autoScroll:q,messageFilter:W,renderMessage:M,renderAvatar:f,disabled:A,persistMessages:H,messageHistoryLimit:L,onMessage:O,onSendReady:z})})]})};U.__docgenInfo={description:"",methods:[],displayName:"ChatRoom",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the chat room (shared between chat and presence)."},user:{required:!0,tsType:{name:"User"},description:"Current user information."},title:{required:!1,tsType:{name:"string"},description:"Optional room title."},subtitle:{required:!1,tsType:{name:"string"},description:"Optional room description or subtitle."},showPresence:{required:!1,tsType:{name:"boolean"},description:`Show presence component above chat.
@default true`,defaultValue:{value:"true",computed:!1}},showHeader:{required:!1,tsType:{name:"boolean"},description:`Show room header with title/subtitle.
@default true`,defaultValue:{value:"true",computed:!1}},credentials:{required:!1,tsType:{name:"ChatProps['credentials']",raw:"ChatProps['credentials']"},description:"Vaultrice credentials for authentication."},instanceOptions:{required:!1,tsType:{name:"ChatProps['instanceOptions']",raw:"ChatProps['instanceOptions']"},description:"Optional instance options (shared between chat and presence)."},deduplicateBy:{required:!1,tsType:{name:"PresenceProps['deduplicateBy']",raw:"PresenceProps['deduplicateBy']"},description:`Property name(s) to use for deduplicating users.
@default 'id'`,defaultValue:{value:"'id'",computed:!1}},predefinedUsers:{required:!1,tsType:{name:"PresenceProps['predefinedUsers']",raw:"PresenceProps['predefinedUsers']"},description:"List of predefined team members to show in presence."},showOfflineUsers:{required:!1,tsType:{name:"PresenceProps['showOfflineUsers']",raw:"PresenceProps['showOfflineUsers']"},description:"Whether to show offline predefined users in presence."},maxAvatars:{required:!1,tsType:{name:"PresenceProps['maxAvatars']",raw:"PresenceProps['maxAvatars']"},description:"Maximum number of avatars to display in presence."},renderPresenceAvatar:{required:!1,tsType:{name:"PresenceProps['renderAvatar']",raw:"PresenceProps['renderAvatar']"},description:"Custom avatar renderer for presence."},renderChatAvatar:{required:!1,tsType:{name:"ChatProps['renderAvatar']",raw:"ChatProps['renderAvatar']"},description:"Custom avatar renderer for chat messages."},renderMessage:{required:!1,tsType:{name:"ChatProps['renderMessage']",raw:"ChatProps['renderMessage']"},description:"Custom message renderer for chat."},placeholder:{required:!1,tsType:{name:"ChatProps['placeholder']",raw:"ChatProps['placeholder']"},description:"Chat-specific props"},showTimestamps:{required:!1,tsType:{name:"ChatProps['showTimestamps']",raw:"ChatProps['showTimestamps']"},description:"",defaultValue:{value:"true",computed:!1}},showUserAvatars:{required:!1,tsType:{name:"ChatProps['showUserAvatars']",raw:"ChatProps['showUserAvatars']"},description:"",defaultValue:{value:"true",computed:!1}},autoScroll:{required:!1,tsType:{name:"ChatProps['autoScroll']",raw:"ChatProps['autoScroll']"},description:"",defaultValue:{value:"true",computed:!1}},messageFilter:{required:!1,tsType:{name:"ChatProps['messageFilter']",raw:"ChatProps['messageFilter']"},description:""},disabled:{required:!1,tsType:{name:"ChatProps['disabled']",raw:"ChatProps['disabled']"},description:"",defaultValue:{value:"false",computed:!1}},persistMessages:{required:!1,tsType:{name:"ChatProps['persistMessages']",raw:"ChatProps['persistMessages']"},description:"If true, messages will be persisted using Vaultrice",defaultValue:{value:"false",computed:!1}},messageHistoryLimit:{required:!1,tsType:{name:"ChatProps['messageHistoryLimit']",raw:"ChatProps['messageHistoryLimit']"},description:"Maximum number of messages to keep in persistent history (default: 100)",defaultValue:{value:"100",computed:!1}},onMessage:{required:!1,tsType:{name:"ChatProps['onMessage']",raw:"ChatProps['onMessage']"},description:"Callbacks"},onSendReady:{required:!1,tsType:{name:"ChatProps['onSendReady']",raw:"ChatProps['onSendReady']"},description:""},auth:{required:!1,tsType:{name:"ChatProps['auth']",raw:"ChatProps['auth']"},description:"Optional object containing authentication credentials for user verification."}}};const Y={title:"Vaultrice/ChatRoom",component:U,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{credentials:{control:!1},onMessage:{control:!1},onSendReady:{control:!1},renderMessage:{control:!1},renderChatAvatar:{control:!1},renderPresenceAvatar:{control:!1},messageFilter:{control:!1},persistMessages:{control:"boolean",description:"Enable persistent message history using Vaultrice storage"},messageHistoryLimit:{control:{type:"number",min:10,max:1e3,step:10},description:"Maximum number of messages to keep in persistent history"}}},n={projectId:"253c8eeb-dcdf-4d67-8557-a7a8b92228be",apiKey:"08ee33b7-9e85-47b8-a164-87f0afba70fc",apiSecret:"27b20eee-3171-4727-8280-17ef62556c9f"},k=[{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe",role:"Team Lead"},{id:"jane-456",name:"Jane Smith",avatarUrl:"https://i.pravatar.cc/150?u=jane-smith",role:"Developer"},{id:"bob-789",name:"Bob Wilson",role:"Designer"}],g={args:{id:"chatroom-default",user:{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},title:"Team Discussion",subtitle:"General chat for the team",credentials:n}},y={args:{id:"chatroom-team",user:{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe"},title:"Engineering Team",subtitle:"Daily standup and collaboration",predefinedUsers:k,showOfflineUsers:!0,deduplicateBy:"id",credentials:n}},x={args:{id:"chatroom-persistent",user:{name:"Persistent User",id:"persistent-123",avatarUrl:"https://i.pravatar.cc/150?u=persistent"},title:"Persistent Chat Room",subtitle:"Messages are saved and restored on reload",persistMessages:!0,messageHistoryLimit:50,predefinedUsers:k,showOfflineUsers:!0,deduplicateBy:"id",credentials:n},parameters:{docs:{description:{story:"This chat room demonstrates message persistence. Messages are automatically saved using Vaultrice and restored when you reload the page or return later. The message history is capped at 50 messages to demonstrate the rolling history feature."}}}},v={args:{id:"chatroom-persistent-limited",user:{name:"Limited User",id:"limited-123",avatarUrl:"https://i.pravatar.cc/150?u=limited"},title:"Chat with Limited History",subtitle:"Only keeps last 20 messages",persistMessages:!0,messageHistoryLimit:20,credentials:n},parameters:{docs:{description:{story:"Demonstrates a chat room with a very limited message history (20 messages). When the limit is reached, older messages are automatically removed using atomic operations."}}}},b={args:{id:"chatroom-minimal",user:{name:"User",id:"user-123"},showHeader:!1,showPresence:!1,credentials:n}},C={args:{id:"chatroom-compact",user:{name:"Compact User",id:"compact-123",avatarUrl:"https://i.pravatar.cc/150?u=compact"},title:"Quick Chat",showTimestamps:!1,maxAvatars:3,credentials:n}},i=[{name:"Alice Johnson",id:"alice-1",avatarUrl:"https://i.pravatar.cc/150?u=alice"},{name:"Bob Smith",id:"bob-2",avatarUrl:"https://i.pravatar.cc/150?u=bob"},{name:"Carol Davis",id:"carol-3",avatarUrl:"https://i.pravatar.cc/150?u=carol"},{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},{name:"Eve Martinez",id:"eve-4",avatarUrl:"https://i.pravatar.cc/150?u=eve"},{name:"Frank Lee",id:"frank-5",avatarUrl:"https://i.pravatar.cc/150?u=frank"},{name:"Grace Kim",id:"grace-6",avatarUrl:"https://i.pravatar.cc/150?u=grace"},{name:"Henry Zhao",id:"henry-7",avatarUrl:"https://i.pravatar.cc/150?u=henry"},{name:"Ivy Chen",id:"ivy-8",avatarUrl:"https://i.pravatar.cc/150?u=ivy"},{name:"Jack Miller",id:"jack-9",avatarUrl:"https://i.pravatar.cc/150?u=jack"}],$=()=>{const[a,d]=m.useState(()=>{const s=Math.floor(Math.random()*i.length);return i[s]}),[l,p]=m.useState("Product Team"),[r,t]=m.useState(!0),[c,u]=m.useState(!0),[o,j]=m.useState(!1),[h,T]=m.useState(100),S=()=>{const s=Math.floor(Math.random()*i.length);d(i[s])};return e.jsxs("div",{style:{width:"600px",padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Room Configuration:"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx("input",{type:"text",value:l,onChange:s=>p(s.target.value),placeholder:"Room title",style:{padding:"6px 8px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",minWidth:"150px"}}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:r,onChange:s=>t(s.target.checked)}),"Show presence"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:c,onChange:s=>u(s.target.checked)}),"Show offline users"]})]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Message Persistence:"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:o,onChange:s=>j(s.target.checked)}),e.jsx("span",{style:{fontWeight:o?"600":"normal"},children:"Save message history"})]}),o&&e.jsx(e.Fragment,{children:e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:["History limit:",e.jsx("input",{type:"number",value:h,onChange:s=>T(parseInt(s.target.value)||100),min:"10",max:"1000",step:"10",style:{padding:"4px 6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",width:"70px"}})]})})]}),o&&e.jsx("div",{style:{fontSize:"12px",color:"#666",marginTop:"4px",padding:"8px",backgroundColor:"#e8f4f8",borderRadius:"4px",border:"1px solid #bee5eb"},children:"💾 Messages will be automatically saved and restored on reload. Try refreshing the page after sending some messages!"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Join as:"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("select",{value:a.id,onChange:s=>{const f=i.find(M=>M.id===s.target.value);f&&d(f)},style:{padding:"6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",minWidth:"200px"},children:i.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))}),e.jsx("button",{onClick:S,style:{padding:"6px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"12px",background:"#f8f9fa",cursor:"pointer"},title:"Select random user",children:"🎲 Random"})]})]})]}),e.jsx(U,{id:"chatroom-interactive",user:a,title:l,subtitle:`Welcome to the ${l.toLowerCase()} discussion`,showPresence:r,predefinedUsers:i,showOfflineUsers:c,deduplicateBy:"id",persistMessages:o,messageHistoryLimit:h,credentials:n},`${a.id}-${r}-${c}-${o}-${h}`)]})},w={args:{id:"chatroom-interactive",user:{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},title:"Product Team",subtitle:"Welcome to the product team discussion",showPresence:!0,predefinedUsers:i,showOfflineUsers:!0,deduplicateBy:"id",persistMessages:!1,messageHistoryLimit:100,credentials:n},render:()=>e.jsx($,{}),parameters:{docs:{description:{story:"Complete interactive chat room with configurable options. Combines Chat and Presence into a single, polished component perfect for team collaboration. **Try enabling message persistence** to see how messages are automatically saved and restored!"}}}},E=()=>{const[a,d]=m.useState(1),l=()=>d(r=>Math.min(r+1,3)),p=()=>d(r=>Math.max(r-1,1));return e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx("h4",{style:{margin:"0 0 12px 0",fontSize:"16px"},children:"Multi-Instance Persistence Demo"}),e.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"14px",color:"#666"},children:"This demonstrates how message persistence works across multiple chat instances. Messages sent in any instance are immediately visible in all others."}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx("button",{onClick:p,disabled:a<=1,style:{padding:"6px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"12px",background:a<=1?"#f8f9fa":"#fff",cursor:a<=1?"not-allowed":"pointer"},children:"Remove Instance"}),e.jsxs("span",{style:{fontSize:"14px"},children:[a," instance",a!==1?"s":""]}),e.jsx("button",{onClick:l,disabled:a>=3,style:{padding:"6px 12px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"12px",background:a>=3?"#f8f9fa":"#fff",cursor:a>=3?"not-allowed":"pointer"},children:"Add Instance"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:a===1?"1fr":a===2?"1fr 1fr":"1fr 1fr 1fr",gap:"16px",maxWidth:"1200px"},children:Array.from({length:a},(r,t)=>{const c=i[t%i.length];return e.jsxs("div",{style:{minWidth:"300px"},children:[e.jsxs("div",{style:{marginBottom:"8px",padding:"8px",backgroundColor:"#e8f4f8",borderRadius:"4px",fontSize:"12px",fontWeight:"500",textAlign:"center"},children:["Instance ",t+1," - ",c.name]}),e.jsx(U,{id:"chatroom-persistence-demo",user:c,title:`Chat Instance ${t+1}`,subtitle:"Shared persistent history",persistMessages:!0,messageHistoryLimit:30,showPresence:!1,showHeader:!0,credentials:n},`persistence-demo-${t}`)]},t)})})]})},P={args:{id:"chatroom-persistence-demo",user:{name:"Alice Johnson",id:"alice-1",avatarUrl:"https://i.pravatar.cc/150?u=alice"},title:"Chat Instance 1",subtitle:"Shared persistent history",persistMessages:!0,messageHistoryLimit:30,showPresence:!1,showHeader:!0,credentials:n},render:()=>e.jsx(E,{}),parameters:{docs:{description:{story:"This demo shows how message persistence works across multiple chat instances sharing the same ID. Send a message in any instance and see it immediately appear in all others. The shared message history persists even when instances are added or removed."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    credentials: defaultCredentials
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a chat room with a very limited message history (20 messages). When the limit is reached, older messages are automatically removed using atomic operations.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-minimal',
    user: {
      name: 'User',
      id: 'user-123'
    },
    showHeader: false,
    showPresence: false,
    credentials: defaultCredentials
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chatroom-compact',
    user: {
      name: 'Compact User',
      id: 'compact-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=compact'
    },
    title: 'Quick Chat',
    showTimestamps: false,
    maxAvatars: 3,
    credentials: defaultCredentials
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const ee=["Default","WithPredefinedUsers","WithPersistentMessages","PersistentWithCustomLimit","Minimal","CompactWithPresence","Interactive","PersistenceAcrossInstances"];export{C as CompactWithPresence,g as Default,w as Interactive,b as Minimal,P as PersistenceAcrossInstances,v as PersistentWithCustomLimit,x as WithPersistentMessages,y as WithPredefinedUsers,ee as __namedExportsOrder,Y as default};
