/*! For license information please see components-Canvas-__docs__-Canvas-mdx.fa2dd853.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_my_captcha=self.webpackChunkreact_my_captcha||[]).push([[867,853],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/Canvas/__docs__/Canvas.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_tomasz_bajorek_react_my_captcha_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Canvas_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Canvas/__docs__/Canvas.stories.tsx");function _createMdxContent(props){const _components={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,_home_tomasz_bajorek_react_my_captcha_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Canvas_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"canvas",children:"Canvas"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Component designed to generate a captcha image with customizable properties such as text, background color, and dimensions."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This component doesn't offer any kind of validation. It doesn't regenrate captcha automatically. It's just a visual representation of the given text. However, this component gives you a full flexibility and doesn't force to use any UI library."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note:"})," This component is crucial for enhancing security by providing a captcha challenge to user interactions."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Canvas_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Example.tsx"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'import { Canvas } from "react-my-captcha";\n\nconst Example = () => {\n    return (\n        <Canvas\n            captchaText="V2LOKcB" //this must be a random text\n            backgroundColor="#ffffff"\n            width={200}\n            height={50}\n            minPoints={10}\n            maxPoints={20}\n            minLines={3}\n            maxLines={5}\n            fontFamilies={["Arial", "Verdana", "Courier New", "Georgia"]}\n            minFontSize={20}\n            maxFontSize={30}\n        />\n    );\n};\n\nexport default Example;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note:"})," Customize the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Canvas"})," component properties as needed to fit the design and security requirements of your application."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-styling",children:"Custom styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Canvas"})," component uses a CSS class named ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"captcha-canvas"})," for the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<canvas>"})," element. You can personalize the appearance of the captcha canvas by defining custom styles for this class in your CSS or SCSS files."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"For example, to add a border, you could write:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:".captcha-canvas {\n    border: 2px solid #000;\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:_Canvas_stories__WEBPACK_IMPORTED_MODULE_2__.Default})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_tomasz_bajorek_react_my_captcha_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/Canvas/__docs__/Canvas.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/Canvas",component:__webpack_require__("./src/components/Canvas/Canvas.tsx").A},Default={argTypes:{captchaText:{description:"Text to be drawn on the captcha canvas."},backgroundColor:{description:"Background color of the captcha canvas."},width:{description:"Width of the captcha canvas."},height:{description:"Height of the captcha canvas."},minPoints:{description:"Minimum number of points to be drawn on the captcha."},maxPoints:{description:"Maximum number of points to be drawn on the captcha."},minLines:{description:"Minimum number of lines to be drawn on the captcha."},maxLines:{description:"Maximum number of lines to be drawn on the captcha."},fontFamilies:{description:"Array of font families for the captcha text."},minFontSize:{description:"Minimum font size for the captcha text."},maxFontSize:{description:"Maximum font size for the captcha text."}},args:{captchaText:"V2LOKcB",backgroundColor:"#ffffff",width:200,height:50,minPoints:10,maxPoints:20,minLines:3,maxLines:5,fontFamilies:["Arial","Verdana","Courier New","Georgia"],minFontSize:20,maxFontSize:30}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    captchaText: {\n      description: "Text to be drawn on the captcha canvas."\n    },\n    backgroundColor: {\n      description: "Background color of the captcha canvas."\n    },\n    width: {\n      description: "Width of the captcha canvas."\n    },\n    height: {\n      description: "Height of the captcha canvas."\n    },\n    minPoints: {\n      description: "Minimum number of points to be drawn on the captcha."\n    },\n    maxPoints: {\n      description: "Maximum number of points to be drawn on the captcha."\n    },\n    minLines: {\n      description: "Minimum number of lines to be drawn on the captcha."\n    },\n    maxLines: {\n      description: "Maximum number of lines to be drawn on the captcha."\n    },\n    fontFamilies: {\n      description: "Array of font families for the captcha text."\n    },\n    minFontSize: {\n      description: "Minimum font size for the captcha text."\n    },\n    maxFontSize: {\n      description: "Maximum font size for the captcha text."\n    }\n  },\n  args: {\n    captchaText: "V2LOKcB",\n    backgroundColor: "#ffffff",\n    width: 200,\n    height: 50,\n    minPoints: 10,\n    maxPoints: 20,\n    minLines: 3,\n    maxLines: 5,\n    fontFamilies: ["Arial", "Verdana", "Courier New", "Georgia"],\n    minFontSize: 20,\n    maxFontSize: 30\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/Canvas/Canvas.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Canvas_Canvas});var react=__webpack_require__("./node_modules/react/index.js");function hexToRgb(hex){hex=hex.replace(/^#/,"");const bigint=parseInt(hex,16);return[bigint>>16&255,bigint>>8&255,255&bigint]}function rgbToLuminance(rgb){const[r,g,b]=rgb,a=[r,g,b].map((function(v){return(v/=255)<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)}));return.2126*a[0]+.7152*a[1]+.0722*a[2]}function getContrastRatio(foreground,background){const rgbForeground=hexToRgb(foreground),rgbBackground=hexToRgb(background),luminanceForeground=rgbToLuminance(rgbForeground),luminanceBackground=rgbToLuminance(rgbBackground);return(Math.max(luminanceForeground,luminanceBackground)+.05)/(Math.min(luminanceForeground,luminanceBackground)+.05)}function getRandomColor(backgroundColor){let contrastRatio=0;let color=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#FFFFFF";for(;contrastRatio<3;){const r=Math.floor(256*Math.random()),g=Math.floor(256*Math.random()),b=Math.floor(256*Math.random());color="#".concat(r.toString(16).padStart(2,"0")).concat(g.toString(16).padStart(2,"0")).concat(b.toString(16).padStart(2,"0")),contrastRatio=getContrastRatio(color,backgroundColor)}return color}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Canvas=props=>{const{captchaText,backgroundColor="#ffffff",width=200,height=50,minPoints=10,maxPoints=20,minLines=3,maxLines=5,fontFamilies=["Arial","Verdana","Courier New","Georgia"],minFontSize=20,maxFontSize=30}=props,canvasRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{const canvas=canvasRef.current;canvas&&(!function drawTextRandomly(canvas,text,backgroundColor,fontFamilies,minFontSize,maxFontSize){const ctx=canvas.getContext("2d");if(ctx){ctx.clearRect(0,0,canvas.width,canvas.height),ctx.fillStyle=backgroundColor,ctx.fillRect(0,0,canvas.width,canvas.height);const margin=Math.min(.1*canvas.width,20),characterWidth=(canvas.width-margin)/text.length;let offsetX=10;const verticalCenter=canvas.height/2;text.split("").forEach((char=>{const randomFont=fontFamilies[Math.floor(Math.random()*fontFamilies.length)],fontSize=Math.floor(Math.random()*(maxFontSize-minFontSize+1))+minFontSize;ctx.font="".concat(fontSize,"px ").concat(randomFont);const charWidth=ctx.measureText(char).width,charOffsetX=offsetX+(characterWidth-charWidth)/2;ctx.fillStyle=getRandomColor(backgroundColor),ctx.save();const rotation=.8*Math.random()-.4;ctx.translate(charOffsetX+charWidth/2,verticalCenter),ctx.rotate(rotation),ctx.fillText(char,-charWidth/2,fontSize/2-.1*canvas.height),ctx.restore(),offsetX+=characterWidth}))}}(canvas,captchaText,backgroundColor,fontFamilies,minFontSize,maxFontSize),function drawRandomPoints(canvas,backgroundColor,minPoints,maxPoints){const pointsCount=Math.floor(Math.random()*(maxPoints-minPoints+1))+minPoints,ctx=canvas.getContext("2d");if(ctx)for(let i=0;i<pointsCount;i++){const x=Math.floor(Math.random()*canvas.width),y=Math.floor(Math.random()*canvas.height),color=getRandomColor(backgroundColor);ctx.beginPath(),ctx.arc(x,y,1,0,2*Math.PI),ctx.fillStyle=color,ctx.fill()}}(canvas,backgroundColor,minPoints,maxPoints),function drawRandomLines(canvas,backgroundColor,minLines,maxLines){const linesCount=Math.floor(Math.random()*(maxLines-minLines+1))+minLines,ctx=canvas.getContext("2d");if(ctx)for(let i=0;i<linesCount;i++){const startX=Math.floor(Math.random()*canvas.width),startY=Math.floor(Math.random()*canvas.height),endX=Math.floor(Math.random()*canvas.width),endY=Math.floor(Math.random()*canvas.height),color=getRandomColor(backgroundColor);ctx.beginPath(),ctx.moveTo(startX,startY),ctx.lineTo(endX,endY),ctx.strokeStyle=color,ctx.stroke()}}(canvas,backgroundColor,minLines,maxLines))}),[captchaText,backgroundColor,width,height,minPoints,maxPoints,minLines,maxLines,fontFamilies,minFontSize,maxFontSize]),(0,jsx_runtime.jsx)("canvas",{className:"captcha-canvas",ref:canvasRef,width,height})};Canvas.displayName="Canvas";const Canvas_Canvas=Canvas;Canvas.__docgenInfo={description:"",methods:[],displayName:"Canvas",props:{width:{required:!1,tsType:{name:"number"},description:"Width of the captcha canvas."},height:{required:!1,tsType:{name:"number"},description:"Height of the captcha canvas."},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the captcha canvas."},minPoints:{required:!1,tsType:{name:"number"},description:"Minimum number of points to be drawn on the captcha."},maxPoints:{required:!1,tsType:{name:"number"},description:"Maximum number of points to be drawn on the captcha."},minLines:{required:!1,tsType:{name:"number"},description:"Minimum number of lines to be drawn on the captcha."},maxLines:{required:!1,tsType:{name:"number"},description:"Maximum number of lines to be drawn on the captcha."},fontFamilies:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of font families for the captcha text."},minFontSize:{required:!1,tsType:{name:"number"},description:"Minimum font size for the captcha text."},maxFontSize:{required:!1,tsType:{name:"number"},description:"Maximum font size for the captcha text."},captchaText:{required:!0,tsType:{name:"string"},description:"Text to be drawn on the captcha canvas."}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);