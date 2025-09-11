import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-QT8oHMxz.js";import{P as A}from"./Presence-CNF3E5M3.js";import"./preload-helper-D9Z9MdNV.js";import"./theme-XIYBvMck.js";const q={title:"Vaultrice/Presence",component:A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{credentials:{control:!1},onMessage:{control:!1},onSendReady:{control:!1},renderAvatar:{control:!1}}},s={projectId:"253c8eeb-dcdf-4d67-8557-a7a8b92228be",apiKey:"08ee33b7-9e85-47b8-a164-87f0afba70fc",apiSecret:"27b20eee-3171-4727-8280-17ef62556c9f"},h={args:{id:"presence-default",user:{name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=John-Doe"},maxAvatars:5,credentials:s}},u={args:{id:"presence-no-avatar",user:{name:"Jane Smith"},maxAvatars:5,credentials:s}},f={args:{id:"presence-long-name",user:{name:"Alexander Christopher Montgomery"},maxAvatars:5,credentials:s}},g={args:{id:"presence-single-letter",user:{name:"X"},maxAvatars:5,credentials:s}},v={args:{id:"presence-max-avatars",user:{name:"User One",avatarUrl:"https://i.pravatar.cc/150?u=User-One"},maxAvatars:3,credentials:s}},b={args:{id:"presence-custom-avatar",user:{name:"Custom User",avatarUrl:"https://i.pravatar.cc/150?u=Custom-User"},maxAvatars:5,credentials:s,renderAvatar:a=>e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:a.data?.avatarUrl?`url(${a.data?.avatarUrl})`:"linear-gradient(45deg, #ff6b6b, #4ecdc4)",backgroundSize:"cover",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"14px",border:"3px solid #fff",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",marginLeft:"-10px"},children:!a.data?.avatarUrl&&(a.data?.name||"").charAt(0).toUpperCase()})}},O=()=>{const[a,o]=d.useState([]),[t,l]=d.useState(""),[i,m]=d.useState(null),p=Math.random().toString(36).substring(2,15),[r,R]=d.useState("Demo User "+p),[x,k]=d.useState("https://i.pravatar.cc/150?u="+r),[D,W]=d.useState(!1),B=d.useCallback(n=>{n.type==="chat"&&o(I=>[...I,{user:n.user,message:n.message,timestamp:Date.now()}])},[]),M=d.useCallback(n=>{m(()=>n)},[]),z=()=>{t.trim()&&i&&(i({type:"chat",user:r,message:t.trim()}),l(""))},P=()=>{const n=Math.random().toString(36).substring(2,15);k(`https://i.pravatar.cc/150?u=${n}`)},T=()=>{k("")};return e.jsxs("div",{style:{width:"500px",padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"6px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("h4",{style:{margin:0},children:"User Configuration"}),e.jsx("button",{onClick:()=>W(!D),style:{padding:"4px 8px",fontSize:"12px",backgroundColor:"#6c757d",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:D?"Hide":"Edit"})]}),D&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"12px",color:"#666",display:"block",marginBottom:"4px"},children:"Display Name:"}),e.jsx("input",{type:"text",value:r,onChange:n=>R(n.target.value),style:{width:"100%",padding:"6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px"},placeholder:"Enter your name"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"12px",color:"#666",display:"block",marginBottom:"4px"},children:"Avatar URL:"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:x,onChange:n=>k(n.target.value),style:{flex:1,padding:"6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px"},placeholder:"Enter avatar URL or leave empty"}),e.jsx("button",{onClick:P,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#28a745",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Random"}),e.jsx("button",{onClick:T,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#dc3545",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})]})]}),e.jsxs("div",{style:{marginTop:"8px",padding:"8px",backgroundColor:"white",borderRadius:"4px",border:"1px solid #e9ecef"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"4px"},children:"Current User:"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x?e.jsx("img",{src:x,alt:r,style:{width:"24px",height:"24px",borderRadius:"50%",objectFit:"cover"}}):e.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"10px",fontWeight:"bold"},children:r.charAt(0).toUpperCase()}),e.jsx("span",{style:{fontSize:"14px",fontWeight:"500"},children:r})]})]})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Chat with Presence"}),e.jsx(A,{id:"presence-chat-demo",user:{name:r,avatarUrl:x||void 0},onMessage:B,onSendReady:M,credentials:s})]}),e.jsx("div",{style:{height:"200px",border:"1px solid #eee",borderRadius:"4px",padding:"8px",overflowY:"auto",marginBottom:"12px",backgroundColor:"#f9f9f9"},children:a.length===0?e.jsx("p",{style:{color:"#666",fontStyle:"italic"},children:"No messages yet. Send one below!"}):a.map((n,I)=>e.jsxs("div",{style:{marginBottom:"8px",fontSize:"14px"},children:[e.jsxs("strong",{style:{color:"#333"},children:[n.user,":"]})," ",e.jsx("span",{style:{color:"#666"},children:n.message})]},I))}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:t,onChange:n=>l(n.target.value),onKeyDown:n=>n.key==="Enter"&&z(),placeholder:"Type a message...",style:{flex:1,padding:"8px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px"}}),e.jsx("button",{onClick:z,disabled:!t.trim()||!i,style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:i?"pointer":"not-allowed",opacity:i?1:.6},children:"Send"})]})]})},y={args:{id:"presence-chat-demo",user:{name:"Demo User",avatarUrl:"https://i.pravatar.cc/150?u=Demo-User"},maxAvatars:5,credentials:s},render:()=>e.jsx(O,{}),parameters:{docs:{description:{story:"Interactive chat example with runtime user configuration. You can change your display name and avatar URL to test different scenarios. The presence component updates in real-time to reflect your changes."}}}},w={args:{id:"presence-room-2",user:{name:"Room 2 User",avatarUrl:"https://i.pravatar.cc/150?u=Room-2-User"},maxAvatars:5,credentials:s},parameters:{docs:{description:{story:"Users in different rooms (different IDs) won't see each other. This is room 2."}}}},J=()=>{const a=["Alice Johnson","Bob Wilson","Carol Davis","David Brown","Eve Miller","Frank Garcia","Grace Lee"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("h3",{children:"Different Users (Fallback Avatars)"}),a.map((o,t)=>e.jsx(A,{id:`presence-batch-${t}`,user:{name:o},maxAvatars:1,credentials:s},t))]})},j={args:{id:"presence-batch-0",user:{name:"Alice Johnson"},maxAvatars:1,credentials:s},render:()=>e.jsx(J,{}),parameters:{docs:{description:{story:"Shows how different names generate different colored fallback avatars with consistent colors."}}}},c=[{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe",role:"Team Lead",department:"Engineering"},{id:"jane-456",name:"Jane Smith",avatarUrl:"https://i.pravatar.cc/150?u=jane-smith",role:"Developer",department:"Engineering"},{id:"bob-789",name:"Bob Wilson",role:"Designer",department:"Design"},{id:"alice-101",name:"Alice Johnson",avatarUrl:"https://i.pravatar.cc/150?u=alice-johnson",role:"Product Manager",department:"Product"},{id:"charlie-202",name:"Charlie Brown",avatarUrl:"https://i.pravatar.cc/150?u=charlie-brown",role:"QA Engineer",department:"Engineering"}],U={args:{id:"presence-predefined",user:{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe"},predefinedUsers:c,showOfflineUsers:!0,deduplicateBy:"id",maxAvatars:6,credentials:s},parameters:{docs:{description:{story:"Shows how predefined users work. Online users get matched with predefined data, and offline predefined users are shown with reduced opacity. Predefined users have a gold star badge."}}}},$=()=>{const[a,o]=d.useState("john-123"),[t,l]=d.useState(!0),[i,m]=d.useState(6),p=c.find(r=>r.id===a)||c[0];return e.jsxs("div",{style:{width:"600px",padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Team Presence with Predefined Users"}),e.jsxs("div",{style:{marginBottom:"20px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"6px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",display:"block",marginBottom:"4px"},children:"Join as:"}),e.jsx("select",{value:a,onChange:r=>o(r.target.value),style:{padding:"6px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",minWidth:"200px"},children:c.map(r=>e.jsxs("option",{value:r.id,children:[r.name," - ",r.role]},r.id))})]}),e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[e.jsx("input",{type:"checkbox",checked:t,onChange:r=>l(r.target.checked)}),"Show offline team members"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:["Max avatars:",e.jsx("input",{type:"number",value:i,onChange:r=>m(parseInt(r.target.value)||6),min:"1",max:"10",style:{width:"60px",padding:"4px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px"}})]})]})]}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsx(A,{id:"presence-predefined-demo",user:{id:p.id,name:p.name,avatarUrl:p.avatarUrl},predefinedUsers:c,showOfflineUsers:t,deduplicateBy:"id",maxAvatars:i,credentials:s},`${a}-${t}-${i}`)}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"6px"},children:[e.jsx("h4",{style:{margin:"0 0 12px 0",fontSize:"16px"},children:"Team Members"}),e.jsx("div",{style:{display:"grid",gap:"8px"},children:c.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"8px",backgroundColor:r.id===a?"#e3f2fd":"white",borderRadius:"4px",border:"1px solid #e9ecef"},children:[r.avatarUrl?e.jsx("img",{src:r.avatarUrl,alt:r.name,style:{width:"32px",height:"32px",borderRadius:"50%",objectFit:"cover"}}):e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"12px",fontWeight:"bold"},children:r.name.split(" ").map(R=>R.charAt(0)).join("").substring(0,2)}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{style:{fontWeight:"500",fontSize:"14px"},children:[r.name,r.id===a&&e.jsx("span",{style:{marginLeft:"8px",fontSize:"12px",color:"#007bff",fontWeight:"normal"},children:"(You)"})]}),e.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:[r.role," • ",r.department]})]})]},r.id))})]}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"12px",color:"#666",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"4px"},children:[e.jsx("div",{style:{fontWeight:"500",marginBottom:"4px"},children:"Legend:"}),e.jsx("div",{children:"🟢 Online (full opacity) • 🔘 Offline (reduced opacity) • ⭐ Predefined team member • 🔵 Your avatar"})]})]})},S={args:{id:"presence-predefined-demo",user:{id:"john-123",name:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john-doe"},predefinedUsers:c,showOfflineUsers:!0,deduplicateBy:"id",maxAvatars:6,credentials:s},render:()=>e.jsx($,{}),parameters:{docs:{description:{story:"Interactive demo showing predefined users functionality. You can switch between different team members, toggle offline user visibility, and adjust the maximum number of avatars shown. This demonstrates how predefined users provide consistent avatars and allow showing team members even when they're offline."}}}},C={args:{id:"presence-custom-predefined",user:{id:"jane-456",name:"Jane Smith",avatarUrl:"https://i.pravatar.cc/150?u=jane-smith"},predefinedUsers:c,showOfflineUsers:!0,deduplicateBy:"id",maxAvatars:5,credentials:s,renderAvatar:(a,o,t)=>{const l=a.data,i=l?.name||"Anonymous",m=l?.avatarUrl;return e.jsxs("div",{style:{position:"relative",marginLeft:"-8px"},children:[m?e.jsx("img",{src:m,alt:i,style:{width:"36px",height:"36px",borderRadius:"8px",border:o?"3px solid #007bff":"2px solid white",objectFit:"cover",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",opacity:a.connectionId?.startsWith("offline-")?.6:1},title:`${i}${o?" (You)":""}${t?" (Team Member)":""}`}):e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"8px",border:o?"3px solid #007bff":"2px solid white",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"12px",fontWeight:"bold",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",opacity:a.connectionId?.startsWith("offline-")?.6:1},title:`${i}${o?" (You)":""}${t?" (Team Member)":""}`,children:i.split(" ").map(p=>p.charAt(0)).join("").substring(0,2)}),t&&e.jsx("div",{style:{position:"absolute",top:"-4px",right:"-4px",width:"16px",height:"16px",background:"#ffd700",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"8px",border:"1px solid white",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"},children:"⭐"}),o&&e.jsx("div",{style:{position:"absolute",bottom:"-2px",right:"-2px",width:"12px",height:"12px",background:"#28a745",borderRadius:"50%",border:"2px solid white",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})]})}},parameters:{docs:{description:{story:"Shows how to create custom avatar rendering with predefined users. This example uses square avatars with custom badges for predefined users (gold star) and online status (green dot)."}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-default',
    user: {
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=John-Doe'
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-no-avatar',
    user: {
      name: 'Jane Smith'
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-long-name',
    user: {
      name: 'Alexander Christopher Montgomery'
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-single-letter',
    user: {
      name: 'X'
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-max-avatars',
    user: {
      name: 'User One',
      avatarUrl: 'https://i.pravatar.cc/150?u=User-One'
    },
    maxAvatars: 3,
    credentials: defaultCredentials
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-custom-avatar',
    user: {
      name: 'Custom User',
      avatarUrl: 'https://i.pravatar.cc/150?u=Custom-User'
    },
    maxAvatars: 5,
    credentials: defaultCredentials,
    renderAvatar: connection => <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      background: connection.data?.avatarUrl ? \`url(\${connection.data?.avatarUrl})\` : 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '14px',
      border: '3px solid #fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      marginLeft: '-10px'
    }}>
        {!connection.data?.avatarUrl && (connection.data?.name as string || '').charAt(0).toUpperCase()}
      </div>
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-chat-demo',
    user: {
      name: 'Demo User',
      avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User'
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  },
  render: () => <ChatWithPresence />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive chat example with runtime user configuration. You can change your display name and avatar URL to test different scenarios. The presence component updates in real-time to reflect your changes.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-room-2',
    user: {
      name: 'Room 2 User',
      avatarUrl: 'https://i.pravatar.cc/150?u=Room-2-User'
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  },
  parameters: {
    docs: {
      description: {
        story: 'Users in different rooms (different IDs) won\\'t see each other. This is room 2.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-batch-0',
    user: {
      name: 'Alice Johnson'
    },
    maxAvatars: 1,
    credentials: defaultCredentials
  },
  render: () => <BatchAvatarsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Shows how different names generate different colored fallback avatars with consistent colors.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-predefined',
    user: {
      id: 'john-123',
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=john-doe'
    },
    predefinedUsers: predefinedTeamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    maxAvatars: 6,
    credentials: defaultCredentials
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how predefined users work. Online users get matched with predefined data, and offline predefined users are shown with reduced opacity. Predefined users have a gold star badge.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-predefined-demo',
    user: {
      id: 'john-123',
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=john-doe'
    },
    predefinedUsers: predefinedTeamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    maxAvatars: 6,
    credentials: defaultCredentials
  },
  render: () => <PredefinedUsersDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing predefined users functionality. You can switch between different team members, toggle offline user visibility, and adjust the maximum number of avatars shown. This demonstrates how predefined users provide consistent avatars and allow showing team members even when they\\'re offline.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'presence-custom-predefined',
    user: {
      id: 'jane-456',
      name: 'Jane Smith',
      avatarUrl: 'https://i.pravatar.cc/150?u=jane-smith'
    },
    predefinedUsers: predefinedTeamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    maxAvatars: 5,
    credentials: defaultCredentials,
    renderAvatar: (connection, isOwnConnection, isPredefined) => {
      const userData = connection.data;
      const userName = userData?.name as string || 'Anonymous';
      const avatarUrl = userData?.avatarUrl as string | undefined;
      return <div style={{
        position: 'relative',
        marginLeft: '-8px'
      }}>
          {avatarUrl ? <img src={avatarUrl} alt={userName} style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          border: isOwnConnection ? '3px solid #007bff' : '2px solid white',
          objectFit: 'cover',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          opacity: connection.connectionId?.startsWith('offline-') ? 0.6 : 1
        }} title={\`\${userName}\${isOwnConnection ? ' (You)' : ''}\${isPredefined ? ' (Team Member)' : ''}\`} /> : <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          border: isOwnConnection ? '3px solid #007bff' : '2px solid white',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          opacity: connection.connectionId?.startsWith('offline-') ? 0.6 : 1
        }} title={\`\${userName}\${isOwnConnection ? ' (You)' : ''}\${isPredefined ? ' (Team Member)' : ''}\`}>
                {userName.split(' ').map(n => n.charAt(0)).join('').substring(0, 2)}
              </div>}
          {isPredefined && <div style={{
          position: 'absolute',
          top: '-4px',
          right: '-4px',
          width: '16px',
          height: '16px',
          background: '#ffd700',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '8px',
          border: '1px solid white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
        }}>
              ⭐
            </div>}
          {isOwnConnection && <div style={{
          position: 'absolute',
          bottom: '-2px',
          right: '-2px',
          width: '12px',
          height: '12px',
          background: '#28a745',
          borderRadius: '50%',
          border: '2px solid white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
        }} />}
        </div>;
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to create custom avatar rendering with predefined users. This example uses square avatars with custom badges for predefined users (gold star) and online status (green dot).'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const G=["Default","WithoutAvatar","LongName","SingleLetter","MaxAvatarsLimit","CustomAvatar","WithChatFunctionality","DifferentRoom","BatchAvatars","WithPredefinedUsers","InteractivePredefinedUsers","CustomAvatarWithPredefined"];export{j as BatchAvatars,b as CustomAvatar,C as CustomAvatarWithPredefined,h as Default,w as DifferentRoom,S as InteractivePredefinedUsers,f as LongName,v as MaxAvatarsLimit,g as SingleLetter,y as WithChatFunctionality,U as WithPredefinedUsers,u as WithoutAvatar,G as __namedExportsOrder,q as default};
