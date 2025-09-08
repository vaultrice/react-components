import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CUKlEioi.js";import{C as l}from"./Chat-CtRkn3oJ.js";import{P as g}from"./Presence-DuWhkiWR.js";import"./preload-helper-D9Z9MdNV.js";import"./theme-ELSemj-T.js";const j={title:"Vaultrice/Chat",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{credentials:{control:!1},onMessage:{control:!1},onSendReady:{control:!1},renderMessage:{control:!1},messageFilter:{control:!1}}},s={projectId:"253c8eeb-dcdf-4d67-8557-a7a8b92228be",apiKey:"08ee33b7-9e85-47b8-a164-87f0afba70fc",apiSecret:"27b20eee-3171-4727-8280-17ef62556c9f"},n={args:{id:"chat-default",user:{name:"John Doe",id:"john-123",avatarUrl:"https://i.pravatar.cc/150?u=John-Doe"},placeholder:"Type a message...",showTimestamps:!0,showUserAvatars:!0,maxHeight:"400px",credentials:s}},o={args:{id:"chat-no-avatars",user:{name:"Jane Smith",id:"jane-456"},showUserAvatars:!1,showTimestamps:!0,credentials:s}},i={args:{id:"chat-compact",user:{name:"Bob Wilson",id:"bob-789"},showTimestamps:!1,showUserAvatars:!1,maxHeight:"250px",placeholder:"Quick message...",credentials:s}},x=()=>{const a=[{name:"Alice Johnson",id:"alice-1",avatarUrl:"https://i.pravatar.cc/150?u=alice"},{name:"Bob Smith",id:"bob-2",avatarUrl:"https://i.pravatar.cc/150?u=bob"},{name:"Carol Davis",id:"carol-3",avatarUrl:"https://i.pravatar.cc/150?u=carol"},{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},{name:"Eve Martinez",id:"eve-4",avatarUrl:"https://i.pravatar.cc/150?u=eve"},{name:"Frank Lee",id:"frank-5",avatarUrl:"https://i.pravatar.cc/150?u=frank"},{name:"Grace Kim",id:"grace-6",avatarUrl:"https://i.pravatar.cc/150?u=grace"},{name:"Henry Zhao",id:"henry-7",avatarUrl:"https://i.pravatar.cc/150?u=henry"},{name:"Ivy Chen",id:"ivy-8",avatarUrl:"https://i.pravatar.cc/150?u=ivy"},{name:"Jack Miller",id:"jack-9",avatarUrl:"https://i.pravatar.cc/150?u=jack"}],[t,p]=u.useState(()=>{const r=Math.floor(Math.random()*a.length);return a[r]});return e.jsxs("div",{style:{width:"500px",padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"8px"},children:"Join as:"}),e.jsx("select",{value:t.id,onChange:r=>{const m=a.find(h=>h.id===r.target.value);m&&p(m)},style:{padding:"6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",minWidth:"200px"},children:a.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Who's Online"}),e.jsx(g,{id:"chat-presence-demo-1",user:t,credentials:s,deduplicateBy:"id"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Team Chat"}),e.jsx(l,{id:"chat-presence-demo-1",user:t,credentials:s,maxHeight:"300px"})]})]})},d={args:{id:"chat-presence-demo",user:{name:"Demo User",id:"demo-123",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},credentials:s},render:()=>e.jsx(x,{}),parameters:{docs:{description:{story:"Shows Chat and Presence components working together for complete real-time collaboration. Switch between users to see how the components sync."}}}},c={args:{id:"chat-custom",user:{name:"Custom User",id:"custom-123",avatarUrl:"https://i.pravatar.cc/150?u=Custom-User"},credentials:s,renderMessage:(a,t)=>e.jsx("div",{style:{display:"flex",justifyContent:t?"flex-end":"flex-start",marginBottom:"12px"},children:e.jsxs("div",{style:{maxWidth:"70%",padding:"12px 16px",borderRadius:"18px",background:t?"linear-gradient(135deg, #007bff, #0056b3)":"linear-gradient(135deg, #6c757d, #495057)",color:"white",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[!t&&e.jsx("div",{style:{fontSize:"12px",opacity:.8,marginBottom:"4px",fontWeight:"bold"},children:a.user}),e.jsx("div",{style:{fontSize:"14px",lineHeight:"1.4"},children:a.message}),e.jsx("div",{style:{fontSize:"10px",opacity:.7,marginTop:"4px",textAlign:t?"right":"left"},children:new Date(a.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})})},parameters:{docs:{description:{story:"Demonstrates custom message rendering with a more modern chat bubble design."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chat-default',
    user: {
      name: 'John Doe',
      id: 'john-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=John-Doe'
    },
    placeholder: 'Type a message...',
    showTimestamps: true,
    showUserAvatars: true,
    maxHeight: '400px',
    credentials: defaultCredentials
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chat-no-avatars',
    user: {
      name: 'Jane Smith',
      id: 'jane-456'
    },
    showUserAvatars: false,
    showTimestamps: true,
    credentials: defaultCredentials
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chat-compact',
    user: {
      name: 'Bob Wilson',
      id: 'bob-789'
    },
    showTimestamps: false,
    showUserAvatars: false,
    maxHeight: '250px',
    placeholder: 'Quick message...',
    credentials: defaultCredentials
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chat-presence-demo',
    user: {
      name: 'Demo User',
      id: 'demo-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User'
    },
    credentials: defaultCredentials
  },
  render: () => <ChatWithPresenceDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Shows Chat and Presence components working together for complete real-time collaboration. Switch between users to see how the components sync.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'chat-custom',
    user: {
      name: 'Custom User',
      id: 'custom-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=Custom-User'
    },
    credentials: defaultCredentials,
    renderMessage: (message, isOwnMessage) => <div style={{
      display: 'flex',
      justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
      marginBottom: '12px'
    }}>
        <div style={{
        maxWidth: '70%',
        padding: '12px 16px',
        borderRadius: '18px',
        background: isOwnMessage ? 'linear-gradient(135deg, #007bff, #0056b3)' : 'linear-gradient(135deg, #6c757d, #495057)',
        color: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
          {!isOwnMessage && <div style={{
          fontSize: '12px',
          opacity: 0.8,
          marginBottom: '4px',
          fontWeight: 'bold'
        }}>
              {message.user}
            </div>}
          <div style={{
          fontSize: '14px',
          lineHeight: '1.4'
        }}>
            {message.message}
          </div>
          <div style={{
          fontSize: '10px',
          opacity: 0.7,
          marginTop: '4px',
          textAlign: isOwnMessage ? 'right' : 'left'
        }}>
            {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
          </div>
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom message rendering with a more modern chat bubble design.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const C=["Default","WithoutAvatars","CompactMode","WithPresence","CustomMessages"];export{i as CompactMode,c as CustomMessages,n as Default,d as WithPresence,o as WithoutAvatars,C as __namedExportsOrder,j as default};
