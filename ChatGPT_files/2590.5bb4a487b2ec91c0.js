"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2590],{52590:function(e,a,t){t.r(a),t.d(a,{GlobalModalsComponent:function(){return eh}});var s,o,r,i,n,l=t(94521),c=t(21515),d=t(27084),u=t(65530),f=t(50684),p=t(8649),g=t(49217),m=t(93223),h=t(4702),M=t(18454),b=t(55371),x=t(24040),j=t(45779),y=t(14816),v=t(35226),k=t(27033),w=t(92379),C=t(75172),Z=t(62984),O=t(94982),P=t(651);function N(e){var a;let{workspace:t}=e,s=(0,C.Z)(),o=(0,x.aF)(),{0:r,1:i}=(0,w.useState)(""),n=t.isOwnerOfAccount(),l=(a=t.id,(0,y.a)({queryKey:["workspace",a,"owner_count"],queryFn:async()=>await m.Z.getWorkspaceOwnerCount(a)})),{data:c}=(0,h.rk)(),{0:f,1:M}=(0,w.useState)(!1),{0:j,1:v}=(0,w.useState)(!1);if(!c)return null;let k=c.accountItems.find(e=>e.id!=t.id),N=()=>{b.vm.setLeaveWorkspaceData(null)},S=async()=>{if(void 0!=o){v(!0);try{await m.Z.removeWorkspaceUser(t.id,o.id),M(!0)}catch(e){O.m.danger(s.formatMessage({id:"leaveWorkspaceModal.leaveFailed",defaultMessage:"Failed to leave workspace"}))}v(!1)}};if(f)return(0,P.jsx)(B,{workspace:t,fallbackWorkspace:k,onClose:N});if(!l.data)return(0,P.jsx)(W,{onClose:N});let D=l.data.total_count,E=l.data.owner_count;if(n&&E<2)return(0,P.jsx)(A,{workspace:t,onClose:N});let F=(0,P.jsx)(p.Z.Button,{onClick:()=>{b.vm.setLeaveWorkspaceData(null)},title:s.formatMessage({id:"leaveWorkspaceModal.cancel",defaultMessage:"Cancel"})}),I=(0,P.jsx)(p.Z.Button,{color:"danger",disabled:void 0==o||j||""==r||r.toLowerCase()!=(null==o?void 0:o.email.toLowerCase()),title:s.formatMessage({id:"leaveWorkspaceModal.leaveButton",defaultMessage:"Leave workspace"}),onClick:()=>{S()}});return(0,P.jsx)(g.Z,{isOpen:!0,onClose:N,showCloseButton:!0,type:"danger",title:s.formatMessage({id:"leaveWorkspaceModal.leaveWorkspace",defaultMessage:"Leave the {workspaceName} workspace"},{workspaceName:t.data.name}),primaryButton:I,secondaryButton:F,children:(0,P.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,P.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,P.jsx)(d.B0,{size:"large",src:t.data.profilePictureUrl}),(0,P.jsxs)("div",{className:"flex flex-col justify-around",children:[(0,P.jsx)("div",{className:"text-base font-semibold",children:t.data.name}),(0,P.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,P.jsx)(Z.Z,{id:"leaveWorkspaceModal.memberCount",defaultMessage:"{memberCount, plural, one {1 member} other {{memberCount} members} }",values:{memberCount:D}})})]})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("h3",{className:"mb-2 text-base font-semibold",children:(0,P.jsx)(Z.Z,{id:"leaveWorkspaceModal.leaveAreYouSure",defaultMessage:"Are you sure?"})}),(0,P.jsxs)("ul",{className:"ml-3 list-disc text-sm text-token-text-secondary",children:[(0,P.jsx)("li",{className:"mb-2",children:(0,P.jsx)(Z.Z,{id:"leaveWorkspaceModal.leaveWorkspaceWarning1",defaultMessage:"This will remove you from your workspace and you won't be able to access all data, including profile, settings, and chat history."})}),(0,P.jsx)("li",{children:(0,P.jsx)(Z.Z,{id:"leaveWorkspaceModal.leaveWorkspaceWarning2",defaultMessage:"You will lose access to all channels and messages in this workspace."})})]})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("h3",{className:"mb-2 text-base",children:(0,P.jsx)(Z.Z,{id:"leaveWorkspaceModal.enterYourEmail",defaultMessage:"Enter your email address to confirm"})}),(0,P.jsx)(u.Z,{name:"typeEmailConfirm",value:r,onChange:e=>{i(e.target.value)}})]})]})})}function W(e){let{onClose:a}=e;return(0,P.jsx)(g.Z,{isOpen:!0,onClose:a,showCloseButton:!0,type:"warning",children:(0,P.jsx)("div",{className:"flex flex-row justify-center",children:(0,P.jsx)(f.Z,{})})})}function A(e){let{workspace:a,onClose:t}=e,s=(0,C.Z)(),o=(0,P.jsx)(p.Z.Button,{onClick:()=>{b.vm.setLeaveWorkspaceData(null)},title:s.formatMessage({id:"leaveWorkspaceModal.ok",defaultMessage:"OK"})});return(0,P.jsx)(g.Z,{isOpen:!0,onClose:t,showCloseButton:!0,type:"danger",title:s.formatMessage({id:"leaveWorkspaceModal.cantLeaveWorkspace",defaultMessage:"Couldn't leave the {workspaceName} workspace"},{workspaceName:a.data.name}),secondaryButton:o,children:(0,P.jsx)(Z.Z,{id:"leaveWorkspaceModal.lastOwnerWarning",defaultMessage:"Because you're the only owner in the {workspaceName} workspace, assign the owner role to another member before leaving.",values:{workspaceName:a.data.name}})})}function B(e){let{workspace:a,fallbackWorkspace:t,onClose:s}=e,o=(0,v.NL)(),r=(0,C.Z)(),i=(0,x.ec)(e=>e.currentWorkspace),n=(0,M.b)(),l=()=>{if(void 0!=t&&i){if(b.vm.setLeaveWorkspaceData(null),i.id==a.id){let{willRedirect:e}=(0,h.nq)(o,t.id,n,r);e||(0,j.M)()}else o.invalidateQueries({queryKey:["account-status"]})}else b.vm.setLeaveWorkspaceData(null),k.bX.deleteCookie(k.cn.Workspace),(0,j.M)();s()},c=void 0!=t?(0,P.jsx)(p.Z.Button,{color:"primary",onClick:l,title:r.formatMessage({id:"leaveWorkspaceModal.done",defaultMessage:"Done"})}):(0,P.jsx)(p.Z.Button,{color:"primary",onClick:l,title:r.formatMessage({id:"leaveWorkspaceModal.startPersonalAccount",defaultMessage:"Start using ChatGPT for free"})});return(0,P.jsx)(g.Z,{isOpen:!0,onClose:l,primaryButton:c,type:"success",title:r.formatMessage({id:"leaveWorkspaceModal.leftWorkspaceTitle",defaultMessage:"Successfully left the {workspaceName} workspace"},{workspaceName:a.data.name}),children:(0,P.jsx)("div",{className:"flex flex-col gap-5",children:(0,P.jsx)("p",{children:void 0!=t?(0,P.jsx)(Z.Z,{id:"leaveWorkspaceModal.leftWorkspaceDescription",defaultMessage:"You have successfully left the {workspaceName} workspace.",values:{workspaceName:a.data.name}}):(0,P.jsx)(Z.Z,{id:"leaveWorkspaceModal.leftWorkspaceDescriptionNoOtherWorkspaces",defaultMessage:"You have successfully left the {workspaceName} workspace. This will create your personal workspace automatically.",values:{workspaceName:a.data.name}})})})})}var S=t(41141),D=t(91530),E=t.n(D),F=t(68306),I=t(74091),T=t(5443),L=t(92426);function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,s)}return t}function Y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach(function(a){(0,l.Z)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function _(){let e=(0,C.Z)(),a=(0,b.tN)(e=>e.activeModals.has(b.B.AgeVerificationInterstitial));return(0,P.jsxs)(g.Z,{type:"success",isOpen:a,onClose:E(),title:e.formatMessage(q.title),children:[(0,P.jsxs)("div",{className:"text-token-text-secondary",children:[(0,P.jsx)("p",{className:"mb-4",children:(0,P.jsx)(Z.Z,Y({},q.description0))}),(0,P.jsx)(G,{children:(0,P.jsx)(Z.Z,Y({},q.subtitle1))}),(0,P.jsxs)("ol",{className:"mb-4 ml-4 list-decimal",children:[(0,P.jsx)("li",{className:"",children:(0,P.jsx)(Z.Z,Y({},q.description1Bullet1))}),(0,P.jsx)("li",{children:(0,P.jsx)(Z.Z,Y({},q.description1Bullet2))})]}),(0,P.jsx)("p",{className:"mb-4 font-semibold",children:(0,P.jsx)(Z.Z,Y({},q.description1a))}),(0,P.jsx)("p",{className:"mb-4",children:(0,P.jsx)(Z.Z,Y({},q.description1b))}),(0,P.jsx)(G,{children:(0,P.jsx)(Z.Z,Y({},q.subtitle2))}),(0,P.jsx)("p",{className:"mb-4",children:(0,P.jsx)(Z.Z,Y(Y({},q.description2),{},{values:{learnMoreLink:e=>(0,P.jsx)("a",{href:"https://help.openai.com/en/articles/8411987-why-am-i-being-asked-to-verify-my-age",target:"_blank",rel:"noreferrer",className:"cursor-pointer font-normal underline",children:e})}}))})]}),(0,P.jsx)("div",{className:"mt-4 flex justify-center",children:(0,P.jsx)(T.z,{color:"primary",as:"link",to:"https://platform.openai.com/verify-age",openNewTab:!0,onClick:()=>b.vm.closeModal(b.B.AgeVerificationInterstitial),icon:L.Pfi,children:(0,P.jsx)(Z.Z,Y({},q.redirect))})})]})}let G=I.Z.h3(s||(s=(0,S.Z)(["text-token-text-primary text-base mb-1"]))),q=(0,F.vU)({title:{id:"AgeVerificationInterstitial.title",defaultMessage:"Please verify your age"},redirect:{id:"AgeVerificationInterstitial.redirect",defaultMessage:"Sign in on platform.openai.com"},description0:{id:"AgeVerificationInterstitial.description0",defaultMessage:"To continue using ChatGPT, you need to complete a brief age verification check"},subtitle1:{id:"AgeVerificationInterstitial.title1",defaultMessage:"What will happen next?"},description1Bullet1:{id:"AgeVerificationInterstitial.description1",defaultMessage:"You will be redirected to platform.openai.com where you will need to sign in."},description1Bullet2:{id:"AgeVerificationInterstitial.description2",defaultMessage:"You will then be redirected to Yoti, our age verification provider, to verify your age."},description1a:{id:"AgeVerificationInterstitial.description1a",defaultMessage:"If you are between the ages of 13 and 17, your parent or guardian must complete the age verification check on your behalf."},description1b:{id:"AgeVerificationInterstitial.description1b",defaultMessage:"The process is quick and secure."},subtitle2:{id:"AgeVerificationInterstitial.title2",defaultMessage:"Why do I need to do this?"},description2:{id:"AgeVerificationInterstitial.description2-v3",defaultMessage:"We are required to verify that our users in Italy are old enough to use ChatGPT. <learnMoreLink>Learn more</learnMoreLink>."}});var U=t(54538),z=t(18102),X=t(73572);function K(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,s)}return t}function R(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?K(Object(t),!0).forEach(function(a){(0,l.Z)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function J(e){let{serverPrimedAllowBrowserStorageValue:a,isStorageComplianceEnabled:t}=e;return(0,b.EV)(b.B.CookieManagement)?(0,P.jsx)(Q,{isStorageComplianceEnabled:t,serverPrimedAllowBrowserStorageValue:a,onClose:()=>{b.vm.closeModal(b.B.CookieManagement)}}):null}function Q(e){let{onClose:a,serverPrimedAllowBrowserStorageValue:t,isStorageComplianceEnabled:s}=e,o=(0,C.Z)(),{isUnauthenticated:r}=(0,U.u)(),i=(0,X.fv)({serverPrimedAllowBrowserStorageValue:t,enabled:s&&!r}),{0:n,1:l}=(0,w.useState)(t),c=r?n:i,d=e=>{k.bX.setCookie(k.cn.AllowNonessential,e,{maxAge:X.nv,domain:k.xY}),r?l(e):u.mutateAsync({analytics_cookies_accepted:e},{onSuccess(){O.m.success(o.formatMessage(et.updateSuccess))},onError(){O.m.danger(o.formatMessage(et.updateFailure))}})};(0,w.useEffect)(()=>{if(r){var e;l(null!==(e=k.bX.getCookie(k.cn.AllowNonessential))&&void 0!==e?e:t)}},[r,t]);let u=(0,X.CX)();return(0,P.jsx)(g.Z,{type:"success",isOpen:!0,onClose:a,title:o.formatMessage(et.title),showCloseButton:!0,children:(0,P.jsxs)("div",{className:"text-sm text-token-text-secondary",children:[(0,P.jsx)(Z.Z,R(R({},et.description),{},{values:{cookiePolicy:e=>(0,P.jsx)("a",{className:"underline",href:"https://openai.com/policies/privacy-policy",children:e})}})),(0,P.jsxs)(H,{children:[(0,P.jsxs)($,{children:[(0,P.jsx)(ee,{children:o.formatMessage(et.preference1title)}),(0,P.jsx)(ea,{children:o.formatMessage(et.preference1desc)})]}),(0,P.jsx)(z.Z,{onChange:E(),enabled:!0,disabled:!0,label:o.formatMessage(et.preference1toggle)})]}),(0,P.jsxs)(H,{children:[(0,P.jsxs)($,{children:[(0,P.jsx)(ee,{children:o.formatMessage(et.preference2title)}),(0,P.jsx)(ea,{children:o.formatMessage(et.preference2desc)})]}),(0,P.jsx)(z.Z,{onChange:d,enabled:!!c,label:o.formatMessage(et.preference2toggle)})]}),(0,P.jsxs)("div",{className:"flex justify-end gap-3 border-t border-black/10 pt-4 dark:border-white/10",children:[(0,P.jsx)(T.z,{color:"secondary",onClick:()=>d(!1),children:(0,P.jsx)(Z.Z,R({},et.reject))}),(0,P.jsx)(T.z,{color:"secondary",onClick:()=>d(!0),children:(0,P.jsx)(Z.Z,R({},et.accept))})]})]})})}let H=I.Z.div(o||(o=(0,S.Z)(["flex gap-4 border-t last:border-b border-black/10 dark:border-white/10 py-4 mt-4 text-token-text-secondary"]))),$=I.Z.div(r||(r=(0,S.Z)(["flex gap-2 flex-col "]))),ee=I.Z.p(i||(i=(0,S.Z)(["font-semibold text-sm text-token-text-primary"]))),ea=I.Z.p(n||(n=(0,S.Z)(["text-xs"]))),et=(0,F.vU)({title:{id:"ManageCookiesModal.title",defaultMessage:"Manage cookies"},description:{id:"ManageCookiesModal.description",defaultMessage:"OpenAI uses cookies to improve your experience and analyze site traffic. For more information, read our <cookiePolicy>cookie policy</cookiePolicy>."},preference1title:{id:"ManageCookiesModal.preference1title",defaultMessage:"Essential"},preference1desc:{id:"ManageCookiesModal.preference1desc.0",defaultMessage:"These cookies are required to operate our Services. For example, they allow us to authenticate users or enable specific features within the Services, including for security purposes."},preference1toggle:{id:"ManageCookiesModal.preference1toggle",defaultMessage:"Allow essential cookies"},preference2title:{id:"ManageCookiesModal.preference2title",defaultMessage:"Analytics"},preference2desc:{id:"ManageCookiesModal.preference2desc.0",defaultMessage:"These cookies help us analyze and understand how our Services perform and are used, such as the number of users, how they interact with our Services, and time spent using the Services."},preference2toggle:{id:"ManageCookiesModal.preference2toggle",defaultMessage:"Allow analytics cookies"},reject:{id:"ManageCookiesModal.reject",defaultMessage:"Reject all"},accept:{id:"ManageCookiesModal.accept",defaultMessage:"Accept all"},updateSuccess:{id:"ManageCookiesModal.updateSuccess",defaultMessage:"Your cookie preferences were updated successfully"},updateFailure:{id:"ManageCookiesModal.updateFailure",defaultMessage:"Unable to update cookie preferences. Try again later."}});var es=t(87055),eo=t(44254),er=t(58171),ei=t(93180),en=t(43128),el=t(5373),ec=t(86078),ed=t.n(ec),eu=t(44899);let ef=ed()(()=>t.e(4229).then(t.bind(t,94229)).then(e=>e.GlobalSettingsModal),{loadableGenerated:{webpack:()=>[94229]}}),ep=ed()(()=>t.e(4229).then(t.bind(t,94229)).then(e=>e.UnauthSettingsModal),{loadableGenerated:{webpack:()=>[94229]}});function eg(e){let{isStorageComplianceEnabled:a}=e,{isOpen:t}=(0,eu.F)(),{isUnauthenticated:s}=(0,U.u)();return t?s?(0,P.jsx)(ep,{}):(0,P.jsx)(ef,{isStorageComplianceEnabled:a}):null}function em(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,s)}return t}function eh(e){let{isStorageComplianceEnabled:a,serverPrimedAllowBrowserStorageValue:t}=e,s=(0,b.tN)(e=>e.purchaseWorkspaceData),o=(0,b.tN)(e=>e.leaveWorkspaceData),r=null!=s,i=(0,b.EV)(b.B.UserContext),n=(0,h.t)(),{isOpen:d}=function(){var e;let{isUnauthenticated:a}=(0,U.u)(),t=(0,en.useRouter)(),s=null!==(e=(0,ei.L)(()=>t.asPath))&&void 0!==e?e:"",o=(0,eo.zu)(s)&&!a;return(0,w.useEffect)(()=>{!s.startsWith("/auth")&&k.bX.getCookie(k.cn.ShowPaymentModal)&&(k.bX.deleteCookie(k.cn.ShowPaymentModal),(0,eo.MG)("Show payment modal cookie"))},[]),{isOpen:o}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(eg,{isStorageComplianceEnabled:a}),(0,P.jsx)(_,{}),d&&n&&(0,P.jsx)(eo.Dq,{currentAccount:n}),(0,P.jsx)(es.gO,{}),(0,P.jsx)(J,{serverPrimedAllowBrowserStorageValue:t,isStorageComplianceEnabled:a}),r&&(0,P.jsx)(er.ZP,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?em(Object(t),!0).forEach(function(a){(0,l.Z)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):em(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({isOpen:r,onClose:()=>b.vm.setPurchaseWorkspaceData(null)},s)),o&&(0,P.jsx)(N,{workspace:o}),(0,P.jsx)(el.Ji,{}),i&&(0,P.jsx)(c.wm,{isModalOpen:i})]})}},5373:function(e,a,t){t.d(a,{Ji:function(){return p},nB:function(){return m}});var s=t(93223),o=t(13326),r=t(50406),i=t(43128),n=t(75172),l=t(62984),c=t(68306),d=t(22763),u=t(94982),f=t(651);function p(){let e=(0,i.useRouter)(),a="disable_mfa"===e.asPath.split("#")[1],t=(0,n.Z)();return a?(0,f.jsx)(g,{onClose:()=>e.replace("/"),onConfirm:()=>{s.Z.disableMfa().then(()=>{e.replace("/#settings").then(()=>{u.m.success(t.formatMessage(h.disableMfaSuccess),{hasCloseButton:!0})})}).catch(()=>{e.replace("/#settings").then(()=>{u.m.info(t.formatMessage(h.disableMfaTimeout),{hasCloseButton:!0})})})}}):null}function g(e){let{onClose:a,onConfirm:t}=e,s=(0,n.Z)();return(0,f.jsx)(d.Z,{isOpen:!0,title:s.formatMessage(h.disableConfimationTitle),confirmText:s.formatMessage(h.disable),onConfirm:t,onClose:a,primaryButtonColor:"danger",children:(0,f.jsx)("div",{children:(0,f.jsx)(l.Z,{id:"postSigninDisableConfimationModal.description.1",defaultMessage:"Are you sure you want to disable multi-factor authentication? You will no longer need to provide a verification code when you log into your account."})})})}function m(e){var a,t;let{mfaInfo:s,onEnableMFA:i,onCancel:c}=e,u=(0,n.Z)(),{session:p}=(0,r.kP)(),g=null==p?void 0:p.user,m=null==g?void 0:g.idp,h=null!==(a=m?o.w[m]:void 0)&&void 0!==a?a:(0,f.jsx)(l.Z,{id:"confirmEnableMfaForByPassModal.yourAccount",defaultMessage:"your current account"}),M=function(e){let a=e.map(e=>o.w[e]).filter(e=>void 0!==e);return 1===a.length?a[0]:(0,f.jsx)(l.Z,{id:"confirmEnableMfaForByPassModal.otherAccount",defaultMessage:"another account"})}(null!==(t=s.otherProvidersWithoutMfa)&&void 0!==t?t:[]);return(0,f.jsx)(d.Z,{isOpen:!0,title:u.formatMessage({id:"confirmEnableMfaForByPassModal.title",defaultMessage:"Enable multi-factor authentication (MFA)"}),confirmText:u.formatMessage({id:"confirmEnableMfaForByPassModal.enableMfa",defaultMessage:"Enable MFA"}),onConfirm:i,onClose:c,primaryButtonColor:"primary",children:(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"mb-6",children:(0,f.jsx)(l.Z,{id:"confirmEnableMfaForByPassModal.description0",defaultMessage:"You'll only be able to log in using {currentIdp} while MFA is on.",values:{currentIdp:h}})}),(0,f.jsx)("p",{children:(0,f.jsx)(l.Z,{id:"confirmEnableMfaForByPassModal.description1",defaultMessage:"If you prefer to have MFA enabled for your account when logging in with {otherNonMfaIdp}, please sign out and log in again through that method before enabling.",values:{otherNonMfaIdp:M}})})]})})}let h=(0,c.vU)({disableConfimationTitle:{id:"mfaDisableConfirmationModal.title.0",defaultMessage:"Disable multi-factor authentication (MFA)"},disable:{id:"mfaDisableConfirmationModal.button",defaultMessage:"Disable MFA"},disableMfaSuccess:{id:"disableMfa.success",defaultMessage:"Multi-factor authentication disabled"},disableMfaTimeout:{id:"disableMfa.timeout",defaultMessage:"Your last log in was too long ago, please try again"}})},13326:function(e,a,t){t.d(a,{w:function(){return r}});var s=t(62984),o=t(651);let r={auth0:(0,o.jsx)(s.Z,{id:"mfaModals.auth0",defaultMessage:"username & password"}),"google-oauth2":(0,o.jsx)(s.Z,{id:"mfaModals.google-oauth2",defaultMessage:"Google"}),windowslive:(0,o.jsx)(s.Z,{id:"mfaModals.microsoft",defaultMessage:"Microsoft"}),apple:(0,o.jsx)(s.Z,{id:"mfaModals.apple",defaultMessage:"Apple"}),samlp:(0,o.jsx)(s.Z,{id:"mfaModals.samlp",defaultMessage:"your company's single sign on solution"}),oidc:(0,o.jsx)(s.Z,{id:"mfaModals.oidc",defaultMessage:"your company's single sign on solution"})}}}]);
//# sourceMappingURL=2590.5bb4a487b2ec91c0.js.map