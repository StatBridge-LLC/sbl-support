"use strict";(self.webpackChunksbl_support=self.webpackChunksbl_support||[]).push([[347],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return t?i.createElement(h,o(o({ref:n},g),{},{components:t})):i.createElement(h,o({ref:n},g))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:2},o="Managing Screenings",l={unversionedId:"oxygen-admin/managing-screenings",id:"oxygen-admin/managing-screenings",title:"Managing Screenings",description:"This section covers adding, editing and deleting and activating screening events on the Oxygen system.",source:"@site/docs/oxygen-admin/managing-screenings.md",sourceDirName:"oxygen-admin",slug:"/oxygen-admin/managing-screenings",permalink:"/sbl-support/oxygen-docs/oxygen-admin/managing-screenings",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Managing Eligibility Files",permalink:"/sbl-support/oxygen-docs/oxygen-admin/managing-eligibility-files"},next:{title:"Managing The Current Screening",permalink:"/sbl-support/oxygen-docs/oxygen-admin/managing-current-screening"}},s={},c=[{value:"This section covers adding, editing and deleting and activating screening events on the Oxygen system.",id:"this-section-covers-adding-editing-and-deleting-and-activating-screening-events-on-the-oxygen-system",level:2},{value:"Adding A Screening Event",id:"adding-a-screening-event",level:3},{value:"Editing a Screening Event",id:"editing-a-screening-event",level:3},{value:"Deleting a Screening Event",id:"deleting-a-screening-event",level:3},{value:"Activating an Event",id:"activating-an-event",level:3}],g={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"managing-screenings"},"Managing Screenings"),(0,a.kt)("h2",{id:"this-section-covers-adding-editing-and-deleting-and-activating-screening-events-on-the-oxygen-system"},"This section covers adding, editing and deleting and activating screening events on the Oxygen system."),(0,a.kt)("p",null,"To access this page, click \u201cScreenings\u201d on the Dashboard. This will load the \u2018Manage Screenings\u2019 page."),(0,a.kt)("h3",{id:"adding-a-screening-event"},"Adding A Screening Event"),(0,a.kt)("p",null,"1","."," Click the \u201cAdd New\u201d button, and enter a name for your screening. It\u2019s recommended to use a good descriptive name that clearly indicates which event it\u2019s referring to."),(0,a.kt)("p",null,"2","."," Select the appropriate 'Client'. There will usually be two options: \u2018Demo / Training\u2019 and one specifically provided by StatBridge for your clients."),(0,a.kt)("p",null,"3","."," For \u2018Workflow\u2019 select the option that\u2019s most appropriate for your screening event.\nNOTE: a Workflow is a blueprint that determines how participants will flow through the screening event. The default types are \u2018Single Station\u2019 and \u2018Station By Station\u2019. \u2018Single Station\u2019 allows data collection for a participant in one seamless flow through all the data collection stations. \u2018Station By Station\u2019 separates each data collection station into a separate module, accessible through a dedicated button for each station."),(0,a.kt)("p",null,"4","."," If an eligibility file has been uploaded and is intended for this screening event, it can be chosen via the \u2018Eligibility File\u2019 selector. Note: whichever \u2018Client\u2019 was selected when uploading an eligibility file will correspond to the eligibility file(s) that are available after selecting a \u2018Client\u2019 on this page. Also, the \u2018Eligibility File\u2019 selector will not show any options unless a client is selected."),(0,a.kt)("p",null,"5","."," Choose a \u2018Start Date\u2019 and \u2018End Date\u2019. It\u2019s usually easiest to click the calendar-icon on the right side, and select a date from the pop-up date picker."),(0,a.kt)("p",null,"6","."," When finished, click the \u201cSave\u201d button."),(0,a.kt)("p",null,"\u2192 The new screening event will now appear on the \u2018Manage Screenings\u2019 page."),(0,a.kt)("h3",{id:"editing-a-screening-event"},"Editing a Screening Event"),(0,a.kt)("p",null,"1","."," Click the \u201cEdit\u201d button corresponding to a screening event."),(0,a.kt)("p",null,"2","."," When finished making your changes, click \u2018Save\u2019."),(0,a.kt)("p",null,"\u2192 The updated screening event information will now be in effect, and visible in the app."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note 1: the fields for \u2018Name\u2019, \u2018Start Date\u2019 and \u2018End Date\u2019 can be changed at any point, regardless of whether a screening event has been activated and data collected or not.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note 2: the fields for \u2018Client\u2019, \u2018Workflow\u2019 and \u2018Eligibility File\u2019 can only be edited before the screening event has first been activated. Once a screening event is activated, these selections are locked in for this event and cannot be altered.")),(0,a.kt)("h3",{id:"deleting-a-screening-event"},"Deleting a Screening Event"),(0,a.kt)("p",null,"1","."," Click the \u201cDelete\u201d button corresponding to the event you wish to delete."),(0,a.kt)("p",null,"2","."," On the \u2018Confirm screening deletion\u2019 window, click the \u201cDelete\u201d button."),(0,a.kt)("p",null,"\u2192 The event will now be removed from the \u2018Manage Screenings\u2019 page."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note 1: if an event is currently active, it won't be possible to delete the event.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note 2: If you try to delete a screening where any participant data has been collected, the system will not allow it to be deleted.")),(0,a.kt)("h3",{id:"activating-an-event"},"Activating an Event"),(0,a.kt)("p",null,"1","."," Click the \u201cActivate\u201d button corresponding to the event you wish to make active."),(0,a.kt)("p",null,"\u2192 The screening event will now be activated."))}d.isMDXComponent=!0}}]);