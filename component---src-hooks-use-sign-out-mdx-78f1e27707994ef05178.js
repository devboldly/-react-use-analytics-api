(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{gjPA:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var a=n("/FXl"),i=n("TjRS"),r=n("5Gwe");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useSignOut.mdx"}});var c={_frontmatter:l},u=i.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(u,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"useSignOut"),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This hook returns a ",Object(a.b)("inlineCode",{parentName:"p"},"signOut")," function that can be used to sign the user out of Google Analytics via the ",Object(a.b)("a",o({parentName:"p"},{href:"/useAnalyticsApi"}),"Google Analytics Embed API"),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { signOut } from '@devboldly/react-use-analytics-api';\n")),Object(a.b)("p",null,"In your function component:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"const signOut = useSignOut(gapi);\n")),Object(a.b)("p",null,"Provide the hook with ",Object(a.b)("inlineCode",{parentName:"p"},"gapi"),", the ",Object(a.b)("a",o({parentName:"p"},{href:"/useAnalyticsApi"}),"Google Analytics Embed API"),". Call ",Object(a.b)("inlineCode",{parentName:"p"},"signOut")," to sign the user out."),Object(a.b)("h2",{id:"signature"},"Signature"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useSignOut(gapi?: GoogleAnalyticsEmbedAPI) => (() => void)")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Argument"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"gapi"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")," ","|"," ",Object(a.b)("inlineCode",{parentName:"td"},"undefined")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"The ",Object(a.b)("a",o({parentName:"td"},{href:"/useAnalyticsApi"}),"Google Analytics Embed API"),". When ",Object(a.b)("inlineCode",{parentName:"td"},"undefined"),", calling ",Object(a.b)("inlineCode",{parentName:"td"},"signOut")," does nothing.")))),Object(a.b)("h3",{id:"return"},"Return"),Object(a.b)("p",null,"The hook returns a function, ",Object(a.b)("inlineCode",{parentName:"p"},"signOut"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"signOut() => void\n")),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"gapi")," is not ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),", this function calls ",Object(a.b)("a",o({parentName:"p"},{href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth"}),Object(a.b)("inlineCode",{parentName:"a"},"gapi.auth.signOut"))," to sign the user out of Google Analytics."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(a.b)(r.a,{mdxType:"UseAuthorizeExample"})),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { useAnalyticsApi, useAuthorize, useSignOut } from '@devboldly/react-use-analytics-api';\n\nexport function UseSignOutExample(props) {\n  const { ready, gapi, authorized, error } = useAnalyticsApi();\n  const authorize = useAuthorize(gapi, {\n    clientId,\n    container: 'authorize-container-id',\n  });\n  const signOut = useSignOut(gapi);\n\n  // Workaround for API limitation\n  const [authorizeCalled, setAuthorizeCalled] = React.useState(false);\n  const authDiv = React.useRef(null);\n  const hasAuthElements = authDiv.current && authDiv?.current?.children?.length > 0;\n\n  React.useEffect(() => {\n    if (ready && !error && !authorizeCalled) {\n      authorize();\n      setAuthorizeCalled(true);\n    }\n  }, [authorize, authorizeCalled, error, ready]);\n\n  return (\n    <div>\n      {!error &&\n        (ready && !!gapi ? (\n          <div>\n            {authorized && (\n              <div>\n                ☀️ Logged into Google Analytics! <button onClick={() => signOut()}>Sign Out</button>\n              </div>\n            )}\n            {!authorized && <div>🔐 Not logged into Google Analytics</div>}\n            <div id=\"authorize-container-id\" ref={authDiv} />\n            {!authorized && authorizeCalled && !hasAuthElements && <div>🔄 Refresh the page to access analytics.</div>}\n          </div>\n        ) : (\n          <div>⌛ Loading...</div>\n        ))}\n      {error && <div>{error.toString()}</div>}\n    </div>\n  );\n}\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useSignOut.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-sign-out-mdx-78f1e27707994ef05178.js.map