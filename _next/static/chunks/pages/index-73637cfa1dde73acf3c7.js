_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ie}));var r=n("nKUr"),a=n("g4pe"),i=n.n(a),s=n("ara8"),c=n("ODXe"),o=n("q1tI"),l=n("PHNs"),u=n("PGlZ"),d=n("0iN6");function p(e){var t=Object(u.a)(),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(o.useState)(!1),p=s[0],j=s[1],f=Object(l.useCountUp)({start:0,end:0,duration:2});return i&&!p&&(j(!0),f.update(e.quantity)),Object(r.jsxs)("div",{className:Object(d.a)("stat","dynamic",e.className),ref:a,children:[Object(r.jsx)("div",{className:Object(d.a)("quantity"),style:{fontFeatureSettings:"'WWID' on"},children:f.countUp}),Object(r.jsx)("div",{className:Object(d.a)("desc"),children:e.description})]})}function j(e){return Object(r.jsxs)("div",{className:Object(d.a)("stat","static",e.className),children:[Object(r.jsx)("div",{className:Object(d.a)("quantity"),style:{fontFeatureSettings:"'WWID' on"},children:e.quantity}),Object(r.jsx)("div",{className:Object(d.a)("desc"),children:e.description})]})}var f=n("kTSt").c;function b(){return Object(r.jsxs)(s.a,{className:"banner",children:[Object(r.jsx)("h1",{className:Object(d.a)("banner-title"),children:"Iosevka"}),Object(r.jsxs)("div",{className:"functional-button-row banner-stats",children:[Object(r.jsx)(j,{quantity:f,description:"Version"}),Object(r.jsx)("a",{className:"main-button install-button",href:"https://github.com/be5invis/Iosevka/releases",children:Object(r.jsx)("span",{className:"label",children:"\ud83d\udce6 Download Fonts"})}),Object(r.jsx)("a",{className:"main-button install-button",href:"customizer",children:Object(r.jsx)("span",{className:"label",children:"Customize"})}),Object(r.jsxs)("div",{className:"install-button-split",children:[Object(r.jsx)("a",{className:"sub-button",href:"https://github.com/be5invis/Iosevka",children:Object(r.jsx)("span",{className:"label",children:"Repository"})}),Object(r.jsx)("a",{className:"sub-button",href:"specimen",children:Object(r.jsx)("span",{className:"label",children:"Specimen"})})]})]}),Object(r.jsxs)("div",{className:"banner-scroll-down-arrow",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]})}var m=n("rePB"),O=n("z8ug"),h=n("yj9g"),y=n("16fy"),x=n("mgia"),g=n("8Kay"),v=n("SiIv"),N=n("qX4b"),T=n("S9BX"),E=n("vZuO"),I=E.a;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=w(w({},E.b),{},{supportedLanguages:I.length,characterVariants:Array.from(v.b).length,stylisticSets:Array.from(v.d).filter((function(e){var t=Object(c.a)(e,2),n=(t[0],t[1]);return n.rank&&n.tag})).length,ligationSets:T.a.filter((function(e){return!!e.rank})).length,extraOtFeatures:2,weightCount:9,slopeCount:3,widthCount:2}),C=n("vivN"),P=n("Dg7G");function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=Object(o.createContext)({currentChoice:P.a,setChoice:function(){},isSlab:!1,slope:N.h.Upright,resolvedComposition:{},resolvedNonDefaultComposition:{},featureAssignment:{},nonDefaultFeatureAssignment:{},userFriendlyFeatureAssignment:{},hotChars:new Map});function k(){var e,t=Object(o.useState)(!1),n=t[0],a=t[1],i=Object(o.useState)(N.h.Upright),c=i[0],l=i[1],u=Object(o.useState)(P.a),d=u[0],p=u[1],j=R(R({},e={currentChoice:d,setChoice:p,isSlab:n,slope:c}),Object(P.e)(e.currentChoice,e));return Object(r.jsx)(F.Provider,{value:j,children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(V,{}),Object(r.jsxs)("div",{className:"character-variant-sampler-body",children:[Object(r.jsx)("div",{className:"preview",children:Object(r.jsx)(y.a,{styleGrades:[N.k.Sans,N.k.Slab,N.k.Aile,N.k.Etoile],content:W,defaultFontStyle:N.a,onFontSet:function(e){l(e.slope||N.h.Upright),a(e.style===N.k.Slab||e.style===N.k.Etoile)}})}),Object(r.jsx)(g.a,{usageAvailable:j.currentChoice.inherits!==v.c,mainPanel:D,usagePanel:M,customizerPageHashT:function(){return Object(P.d)({charVariants:d,ligationSet:T.a[1]})}})]})]})})}function V(){return Object(r.jsxs)("div",{className:"section-introduction",children:[Object(r.jsx)("h2",{className:"header",children:"Variants \xe0\xa0la\xa0Carte"}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("p",{children:["Iosevka provides ",Object(r.jsx)("em",{children:S.characterVariants})," configurable characters with ",Object(r.jsx)("em",{children:S.stylisticSets})," stylistic sets, which gives you incredible ability to customize one variant that fills exactly what you need. You can either select one pre-defined stylistic set, or cherry-pick your flavor."]})})]})}function D(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U,{}),Object(r.jsx)(q,{})]})}function U(){return Object(r.jsxs)("div",{className:"panel ss",children:[Object(r.jsx)("h3",{children:"Stylistic Sets"}),Object(r.jsx)("div",{className:"groups",children:Array.from(v.d.values()).map((function(e){return Object(r.jsx)(G,{stylisticSet:e},e.key)}))})]})}function G(e){var t=e.stylisticSet,n=Object(o.useContext)(F),a=n.currentChoice.inherits===t;return Object(r.jsxs)("a",{className:Object(d.a)("option",a?"active":null,e.stylisticSet.rank?"substantial":"default"),onClick:function(){return n.setChoice({inherits:t})},children:[Object(r.jsx)("span",{className:"tag",children:t.tag}),Object(r.jsx)("span",{className:"brief",children:t.description})]})}function q(){var e=Object(o.useContext)(F),t={slope:e.slope,style:e.isSlab?N.k.Slab:N.k.Sans},n=function(t){Object.keys(t).length?e.setChoice({design:t}):e.setChoice({inherits:v.c})};return Object(r.jsxs)("div",{className:"panel cv",children:[Object(r.jsx)("h3",{children:"Cherry-Picking"}),Object(r.jsx)("div",{className:"groups",children:Array.from(v.b.values()).map((function(a){return Object(r.jsx)(O.b,{className:"large",prime:a,fontStyle:t,onItemSelect:function(t){return n(R(R({},e.resolvedNonDefaultComposition),{},Object(m.a)({},a.key,t)))},onItemClear:function(){var t=R({},e.resolvedNonDefaultComposition);delete t[a.key],n(t)},activeVariantKey:e.resolvedComposition[a.key],activeVariantKind:e.resolvedNonDefaultComposition[a.key]?O.a.NonDefault:O.a.Default},a.key)}))})]})}function M(){return Object(r.jsxs)("div",{className:"panel usage",children:[Object(r.jsx)("h3",{children:"Usage"}),Object(r.jsx)(B,{})]})}function W(e){var t=Object(o.useContext)(F),n=R(R({},e.fontStyle),{},{charVarTags:t.userFriendlyFeatureAssignment});return Object(r.jsx)(x.a,{fontStyle:n,code:C.a,highlightCharSet:t.hotChars})}function B(){var e=Object(o.useContext)(F);return Object(r.jsx)(h.a,{directives:e.userFriendlyFeatureAssignment})}function H(){var e=(new Date).getFullYear();return Object(r.jsxs)("div",{className:"footer",children:["Copyright (c) 2015-",e," Belleve Invis."]})}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(){return Object(r.jsxs)(s.a,{className:"grand-intro",children:[Object(r.jsx)(X,{}),Object(r.jsx)(K,{})]})}function X(){return Object(r.jsxs)("div",{className:"grand-intro-text",children:[Object(r.jsx)("strong",{children:"Iosevka"})," is an ",Object(r.jsx)("em",{children:"open-source"}),", ",Object(r.jsx)("em",{children:"sans-serif"}),"\xa0+\xa0",Object(r.jsx)("em",{children:"slab-serif"}),", ",Object(r.jsx)("em",{children:"monospace"}),"\xa0+\xa0",Object(r.jsx)("em",{children:"quasi\u2011proportional"})," typeface family, designed for ",Object(r.jsx)("em",{children:"writing code"}),", using in ",Object(r.jsx)("em",{children:"terminals"}),", and preparing ",Object(r.jsx)("em",{children:"technical documents"}),"."]})}function K(){var e=z(z({},N.a),{},{weight:N.l.Light}),t=z(z({},e),{},{style:N.k.Slab}),n=[{fontStyle:e,familyName:"Iosevka",spacingType:"Monospace",hasWidth:!0,hasLigation:!0},{fontStyle:e,familyName:"Iosevka Term",spacingType:"Monospace",hasWidth:!0,hasLigation:!0},{fontStyle:e,familyName:"Iosevka Fixed",spacingType:"Monospace, Ligation Off",hasWidth:!0},{fontStyle:t,familyName:"Iosevka Slab",spacingType:"Monospace",hasWidth:!0,hasLigation:!0},{fontStyle:t,familyName:"Iosevka Term Slab",spacingType:"Monospace",hasWidth:!0,hasLigation:!0},{fontStyle:t,familyName:"Iosevka Fixed Slab",spacingType:"Monospace, Ligation Off",hasWidth:!0},{fontStyle:z(z({},e),{},{style:N.k.Aile}),familyName:"Iosevka Aile",spacingType:"Quasi-Proportional"},{fontStyle:z(z({},e),{},{style:N.k.Etoile}),familyName:"Iosevka Etoile",spacingType:"Quasi-Proportional"}];return Object(r.jsxs)("div",{className:"grand-intro-family",children:[n.map((function(e){return Object(o.createElement)(Y,z(z({},e),{},{key:e.familyName}))})),Object(r.jsxs)("div",{className:"family-item enumeration",children:[Object(r.jsx)("h3",{className:"family-name"}),Object(r.jsx)("div",{className:"stat refer",children:N.d.map((function(e,t){return Object(r.jsx)("div",{className:"enumeration-item",children:t.display},e)}))}),Object(r.jsx)("div",{className:"stat static"}),Object(r.jsx)("div",{className:"stat refer",children:N.c.map((function(e,t){return Object(r.jsx)("div",{className:"enumeration-item",children:t.display},e)}))}),Object(r.jsx)("div",{className:"stat static"}),Object(r.jsx)("div",{className:"stat refer ext-4",children:N.e.map((function(e,t){return Object(r.jsx)("div",{className:"enumeration-item",children:t.display},e)}))})]})]})}function Y(e){return Object(r.jsxs)("div",{className:"family-item",children:[Object(r.jsx)("h3",{className:Object(d.a)("family-name",N.n(e.fontStyle)),children:e.familyName}),Object(r.jsx)("h4",{className:"spacing-type",children:e.spacingType}),Object(r.jsx)(p,{quantity:S.weightCount,description:"Weights"}),Object(r.jsx)(j,{quantity:"\xd7",description:" "}),Object(r.jsx)(p,{quantity:S.slopeCount,description:"Slopes"}),Object(r.jsx)(j,{quantity:"\xd7",description:" ",className:e.hasWidth?"visible":"hidden"}),Object(r.jsx)(p,{quantity:S.widthCount,description:"Widths",className:e.hasWidth?"visible":"hidden"})]})}var J=n("c0IA");function Z(e){var t=e.n.toString();if(t=t.replace(/[, ]/g,""),0===parseInt(t))return Object(r.jsx)(r.Fragment,{children:"zero"});for(var n,a=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],s=["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quatttuor-decillion","quindecillion","sexdecillion","septen-decillion","octodecillion","novemdecillion","vigintillion","centillion"],c=t.length,o=[];c>0;)n=c,o.push(t.slice(c=Math.max(0,c-3),n));var l=o.length;if(l>s.length)return Object(r.jsx)(r.Fragment,{});for(var u=[],d=0;d<l;d++){if(parseInt(o[d])){var p=o[d].split("").reverse().map(parseFloat);1===p[1]&&(p[0]+=10);var j=void 0;(j=s[d])&&u.push(j),(j=a[p[0]])&&u.push(j),(j=i[p[1]])&&u.push(j),(p[0]||p[1])&&(p[2]||!d&&l>1)&&u.push("and"),(j=a[p[2]])&&u.push(j+" hundred")}}return Object(r.jsx)(r.Fragment,{children:u.reverse().join(" ")})}function $(){var e=[N.k.Aile,N.k.Etoile];return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(ee,{styleGrades:e}),Object(r.jsx)("div",{className:"proportional-sampler-body",children:Object(r.jsx)(y.a,{styleGrades:e,disableWidth:!0,content:ne,defaultFontStyle:{style:N.k.Etoile,weight:N.l.Light}})})]})}function ee(e){return Object(r.jsxs)("div",{className:"section-introduction",children:[Object(r.jsx)("h2",{className:"header",children:"For Every Writing"}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("p",{children:["The ",Object(r.jsx)(Z,{n:e.styleGrades.length})," quasi-proportional families:"," ",Object(r.jsx)(te,{styleGrades:e.styleGrades}),", are made for"," ",Object(r.jsx)("em",{children:"documentation preparation"})," and ",Object(r.jsx)("em",{children:"writing"}),". They provide more variety on character widths, including a slightly wider letter ",Object(r.jsx)("code",{children:"w"}),"\xa0and\xa0",Object(r.jsx)("code",{children:"m"}),", and narrower ",Object(r.jsx)("code",{children:"i"}),"\xa0and\xa0",Object(r.jsx)("code",{children:"l"}),"."]})})]})}function te(e){return Object(r.jsx)(r.Fragment,{children:e.styleGrades.map((function(t,n){return Object(r.jsxs)(o.Fragment,{children:[0===n?"":n===e.styleGrades.length-1?", and ":", ",Object(r.jsxs)("em",{children:["Iosevka\xa0",N.k[t]]},t)]},n)}))})}function ne(e){return Object(r.jsx)(x.a,{code:C.b,fontStyle:e.fontStyle,literature:!0})}function re(){return Object(r.jsx)(s.a,{className:"stat-dashboard-section",children:Object(r.jsx)(ae,{})})}function ae(){return Object(r.jsxs)("div",{className:"stat-dashboard",children:[Object(r.jsx)(p,{quantity:S.codePointCount,description:"Characters Covered"}),Object(r.jsx)(p,{quantity:S.glyphCount,description:"Glyphs Included"}),Object(r.jsx)(p,{quantity:S.supportedLanguages,description:"Languages Supported"}),Object(r.jsx)(p,{quantity:S.characterVariants,description:"Character Variant Features"}),Object(r.jsx)(p,{quantity:S.stylisticSets,description:"Stylistic Set Features"}),Object(r.jsx)(p,{quantity:S.ligationSets,description:"Ligation Sets"})]})}function ie(){return Object(r.jsxs)(s.a,{className:"secondary",children:[Object(r.jsxs)("h3",{children:[S.supportedLanguages," Languages Supported"]}),Object(r.jsx)("ul",{className:"enumeration supported-languages",children:I.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(){var e=ce(ce({},N.a),{},{weight:N.l.ExtraLight}),t=ce(ce({},e),{},{spacingTag:"NWID"}),n=ce(ce({},e),{},{spacingTag:"NWID",ligationTag:"calt",ligationOn:!1});return Object(r.jsxs)(s.a,{className:"terminal-sampler",children:[Object(r.jsx)(le,{}),Object(r.jsx)(ue,{title:"Iosevka",fontStyle:e}),Object(r.jsx)(ue,{title:"Iosevka Term",fontStyle:t}),Object(r.jsx)(ue,{title:"Iosevka Fixed",fontStyle:n})]})}function le(){return Object(r.jsxs)("div",{className:"section-introduction",children:[Object(r.jsx)("h2",{className:"header",children:"Code and Terminal"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("p",{children:["Terminal emulators have a stricter compatibility requirements for fonts. Therefore, Iosevka and Iosevka Slab all contain two specialized families,"," ",Object(r.jsx)("em",{children:"Term"})," and ",Object(r.jsx)("em",{children:"Fixed"}),", targeting terminal users."]}),Object(r.jsxs)("p",{children:["In these families, the symbols will be ",Object(r.jsx)("em",{children:"narrower"})," to follow terminals\u2019 ideology of column count. In the Fixed families, the ligation will be disabled to ensure better compatibility in certain environments."]})]})]})}function ue(e){return Object(r.jsxs)("div",{className:"sample-item",children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)(de,{fontStyle:e.fontStyle})]})}function de(e){return Object(r.jsxs)("div",{className:Object(d.a)("sample-body",N.n(e.fontStyle)),style:N.o(e.fontStyle),children:[Object(r.jsx)("em",{children:"\u2211"})," ","{"," ",Object(r.jsx)("i",{children:"n"})," \u2208 ",Object(r.jsx)("em",{children:"\u25b2"})," ","}"," ",Object(r.jsx)("em",{children:"\ud83c\udd47"}),"(",Object(r.jsx)("i",{children:"n"}),") ",Object(r.jsxs)("em",{children:["\u25cb","->"]})," ",Object(r.jsx)("em",{children:"\u24ce"}),"[",Object(r.jsx)("i",{children:"n"}),"] ",Object(r.jsx)("em",{children:"\u25a2\u25b3\u25c8"})]})}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=Object(o.createContext)({groupIndex:0,itemIndex:0,setIndex:function(){}});function be(e){var t=Object(o.useState)(0),n=t[0],a=t[1],i=Object(o.useState)(0),c=i[0],l=i[1],u=[e.primary,e.secondary],d={groupIndex:n,itemIndex:c,setIndex:function(e,t){a(e),l(t)}};return Object(r.jsx)(fe.Provider,{value:d,children:Object(r.jsxs)("div",{className:"picker-frame",children:[Object(r.jsxs)(s.b,{children:[Object(r.jsx)(me,{groupIndex:0,styles:e.primary}),Object(r.jsx)("div",{className:"button-group-gap"}),Object(r.jsx)(me,{groupIndex:1,styles:e.secondary})]}),Object(r.jsx)(e.content,{fontStyle:u[n][c]})]})})}function me(e){return Object(r.jsx)("div",{className:"button-group",children:e.styles.map((function(t,n){return Object(r.jsx)(Oe,{groupIndex:e.groupIndex,itemIndex:n,apply:t,children:t.label},n)}))})}function Oe(e){var t=Object(o.useContext)(fe),n=t.itemIndex===e.itemIndex&&t.groupIndex===e.groupIndex;return Object(r.jsx)("a",{onClick:function(){return t.setIndex(e.groupIndex,e.itemIndex)},className:Object(d.a)("picker-button",n?"active":null,N.n(je(je({},N.a),e.apply))),children:e.children})}function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe="\n# UCD DATA Section\n00B0 ; DEGREE SIGN                                ; So ; 0 ; ET ;                           ;  ;   ;     ; N ;                                   ;  ;      ;      ;     \n00B1 ; PLUS-MINUS SIGN                            ; Sm ; 0 ; ET ;                           ;  ;   ;     ; N ; PLUS-OR-MINUS SIGN                ;  ;      ;      ;     \n00B2 ; SUPERSCRIPT TWO                            ; No ; 0 ; EN ; <super> 0032              ;  ; 2 ; 2   ; N ; SUPERSCRIPT DIGIT TWO             ;  ;      ;      ;     \n00B3 ; SUPERSCRIPT THREE                          ; No ; 0 ; EN ; <super> 0033              ;  ; 3 ; 3   ; N ; SUPERSCRIPT DIGIT THREE           ;  ;      ;      ;     \n00B4 ; ACUTE ACCENT                               ; Sk ; 0 ; ON ; <compat> 0020 0301        ;  ;   ;     ; N ; SPACING ACUTE                     ;  ;      ;      ;     \n00B5 ; MICRO SIGN                                 ; Ll ; 0 ; L  ; <compat> 03BC             ;  ;   ;     ; N ;                                   ;  ; 039C ;      ; 039C\n00B6 ; PILCROW SIGN                               ; Po ; 0 ; ON ;                           ;  ;   ;     ; N ; PARAGRAPH SIGN                    ;  ;      ;      ;     \n00B7 ; MIDDLE DOT                                 ; Po ; 0 ; ON ;                           ;  ;   ;     ; N ;                                   ;  ;      ;      ;     \n00B8 ; CEDILLA                                    ; Sk ; 0 ; ON ; <compat> 0020 0327        ;  ;   ;     ; N ; SPACING CEDILLA                   ;  ;      ;      ;     \n00B9 ; SUPERSCRIPT ONE                            ; No ; 0 ; EN ; <super> 0031              ;  ; 1 ; 1   ; N ; SUPERSCRIPT DIGIT ONE             ;  ;      ;      ;     \n00BA ; MASCULINE ORDINAL INDICATOR                ; Lo ; 0 ; L  ; <super> 006F              ;  ;   ;     ; N ;                                   ;  ;      ;      ;     \n00BB ; RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK ; Pf ; 0 ; ON ;                           ;  ;   ;     ; Y ; RIGHT POINTING GUILLEMET          ;  ;      ;      ;     \n00BC ; VULGAR FRACTION ONE QUARTER                ; No ; 0 ; ON ; <fraction> 0031 2044 0034 ;  ;   ; 1/4 ; N ; FRACTION ONE QUARTER              ;  ;      ;      ;     \n00BD ; VULGAR FRACTION ONE HALF                   ; No ; 0 ; ON ; <fraction> 0031 2044 0032 ;  ;   ; 1/2 ; N ; FRACTION ONE HALF                 ;  ;      ;      ;     \n00BE ; VULGAR FRACTION THREE QUARTERS             ; No ; 0 ; ON ; <fraction> 0033 2044 0034 ;  ;   ; 3/4 ; N ; FRACTION THREE QUARTERS           ;  ;      ;      ;     \n00BF ; INVERTED QUESTION MARK                     ; Po ; 0 ; ON ;                           ;  ;   ;     ; N ;                                   ;  ;      ;      ;     \n00C0 ; LATIN CAPITAL LETTER A WITH GRAVE          ; Lu ; 0 ; L  ; 0041 0300                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A GRAVE      ;  ;      ; 00E0 ;     \n00C1 ; LATIN CAPITAL LETTER A WITH ACUTE          ; Lu ; 0 ; L  ; 0041 0301                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A ACUTE      ;  ;      ; 00E1 ;     \n00C2 ; LATIN CAPITAL LETTER A WITH CIRCUMFLEX     ; Lu ; 0 ; L  ; 0041 0302                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A CIRCUMFLEX ;  ;      ; 00E2 ;     \n00C3 ; LATIN CAPITAL LETTER A WITH TILDE          ; Lu ; 0 ; L  ; 0041 0303                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A TILDE      ;  ;      ; 00E3 ;     \n00C4 ; LATIN CAPITAL LETTER A WITH DIAERESIS      ; Lu ; 0 ; L  ; 0041 0308                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A DIAERESIS  ;  ;      ; 00E4 ;     \n00C5 ; LATIN CAPITAL LETTER A WITH RING ABOVE     ; Lu ; 0 ; L  ; 0041 030A                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER A RING       ;  ;      ; 00E5 ;     \n00C6 ; LATIN CAPITAL LETTER AE                    ; Lu ; 0 ; L  ;                           ;  ;   ;     ; N ; LATIN CAPITAL LETTER A E          ;  ;      ; 00E6 ;     \n00C7 ; LATIN CAPITAL LETTER C WITH CEDILLA        ; Lu ; 0 ; L  ; 0043 0327                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER C CEDILLA    ;  ;      ; 00E7 ;     \n00C8 ; LATIN CAPITAL LETTER E WITH GRAVE          ; Lu ; 0 ; L  ; 0045 0300                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER E GRAVE      ;  ;      ; 00E8 ;     \n00C9 ; LATIN CAPITAL LETTER E WITH ACUTE          ; Lu ; 0 ; L  ; 0045 0301                 ;  ;   ;     ; N ; LATIN CAPITAL LETTER E ACUTE      ;  ;      ; 00E9 ;     \n".trim(),ge=[ye(ye({},N.a),{},{label:"Iosevka"}),ye(ye({},N.a),{},{width:N.m.Extended,label:"Iosevka Extended"})],ve=[ye(ye({},N.a),{},{style:N.k.FiraCode,label:"Fira Code"}),ye(ye({},N.a),{},{style:N.k.IbmPlex,label:"IBM Plex"})];function Ne(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(Te,{}),Object(r.jsx)("div",{className:"width-sampler",children:Object(r.jsx)(be,{content:Ee,primary:ge,secondary:ve})})]})}function Te(){return Object(r.jsxs)("div",{className:"section-introduction",children:[Object(r.jsx)("h2",{className:"header",children:"Spatial Efficient"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("p",{children:["The Iosevka\u2019s monospace family is provided in a ",Object(r.jsx)("em",{children:"slender outfit"})," by default: glyphs are exactly ",Object(r.jsx)("em",{children:"1/2em wide"}),". Compared to the competitors, you could fit more columns within the same screen width."]}),Object(r.jsxs)("p",{children:["Iosevka provides two widths, ",Object(r.jsx)("em",{children:"Normal"})," and ",Object(r.jsx)("em",{children:"Extended"}),". If you prefer more breeze between the character, choose Extended and enjoy."]})]})]})}function Ee(e){return Object(r.jsx)("pre",{className:Object(d.a)("sample-text",N.n(e.fontStyle)),children:xe})}function Ie(){return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:"Iosevka"})}),Object(r.jsx)(b,{}),Object(r.jsx)(Q,{}),Object(r.jsx)(re,{}),Object(r.jsx)(Ne,{}),Object(r.jsx)(oe,{}),Object(r.jsx)(k,{}),Object(r.jsx)(J.a,{}),Object(r.jsx)($,{}),Object(r.jsx)(ie,{}),Object(r.jsx)(H,{})]})}},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},GiOn:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,i){function s(e){var t,n,r,a,i,s,c=e<0;if(e=Math.abs(e).toFixed(l.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?l.options.decimal+t[1]:"",l.options.useGrouping){for(a="",i=0,s=n.length;i<s;++i)0!==i&&i%3===0&&(a=l.options.separator+a),a=n[s-i-1]+a;n=a}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]}))),(c?"-":"")+l.options.prefix+n+r+l.options.suffix}function c(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function o(e){return"number"==typeof e&&!isNaN(e)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:c,formattingFn:s,prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var u in l.options)i.hasOwnProperty(u)&&null!==i[u]&&(l.options[u]=i[u]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,p=["webkit","moz","ms","o"],j=0;j<p.length&&!window.requestAnimationFrame;++j)window.requestAnimationFrame=window[p[j]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[j]+"CancelAnimationFrame"]||window[p[j]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-d)),a=window.setTimeout((function(){e(n+r)}),r);return d=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof e?document.getElementById(e):e,l.d?(l.startVal=Number(t),l.endVal=Number(n),o(l.startVal)&&o(l.endVal)?(l.decimals=Math.max(0,r||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(a)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(e){var t=l.options.formattingFn(e);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(e){l.startTime||(l.startTime=e),l.timestamp=e;var t=e-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(e){l.initialize()&&(l.callback=e,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(e){if(l.initialize()){if(!o(e=Number(e)))return void(l.error="[CountUp] update() - new endVal is not a number: "+e);l.error="",e!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=e,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)},PHNs:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("17x9")),i=n("q1tI"),s=r(i),c=r(n("2W6z")),o=r(n("GiOn"));function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,i=t.easingFn,s=t.end,c=t.formattingFn,l=t.prefix,u=t.separator,d=t.start,p=t.suffix,j=t.useEasing;return new o(e,d,s,r,a,{decimal:n,easingFn:i,formattingFn:c,separator:u,prefix:l,suffix:p,useEasing:j,useGrouping:!!u})},y=function(e){function t(){var e,n;l(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return d(b(n=m(this,(e=j(t)).call.apply(e,[this].concat(a)))),"createInstance",(function(){return"function"===typeof n.props.children&&c(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),h(n.containerRef.current,n.props)})),d(b(n),"pauseResume",(function(){var e=b(n),t=e.reset,r=e.restart,a=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:r,update:a})})),d(b(n),"reset",(function(){var e=b(n),t=e.pauseResume,r=e.restart,a=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:r,update:a})})),d(b(n),"restart",(function(){n.reset(),n.start()})),d(b(n),"start",(function(){var e=b(n),t=e.pauseResume,r=e.reset,a=e.restart,i=e.update,s=n.props,c=s.delay,o=s.onEnd,l=s.onStart,u=function(){return n.instance.start((function(){return o({pauseResume:t,reset:r,start:a,update:i})}))};c>0?n.timeoutId=setTimeout(u,1e3*c):u(),l({pauseResume:t,reset:r,update:i})})),d(b(n),"update",(function(e){var t=b(n),r=t.pauseResume,a=t.reset,i=t.restart,s=n.props.onUpdate;n.instance.update(e),s({pauseResume:r,reset:a,start:i})})),d(b(n),"containerRef",s.createRef()),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,i=t.prefix,s=t.redraw,c=t.duration,o=t.separator,l=t.decimals,u=t.decimal;return c!==e.duration||n!==e.end||r!==e.start||a!==e.suffix||i!==e.prefix||o!==e.separator||l!==e.decimals||u!==e.decimal||s}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,i=t.prefix,s=t.duration,c=t.separator,o=t.decimals,l=t.decimal,u=t.preserveValue;s===e.duration&&r===e.start&&a===e.suffix&&i===e.prefix&&c===e.separator&&o===e.decimals&&l===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(u||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,i=this.pauseResume,c=this.reset,o=this.restart,l=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:i,reset:c,start:o,update:l}):s.createElement("span",{className:n,ref:a,style:r})}}])&&u(n.prototype,r),a&&u(n,a),t}(i.Component);d(y,"propTypes",{decimal:a.string,decimals:a.number,delay:a.number,easingFn:a.func,end:a.number.isRequired,formattingFn:a.func,onEnd:a.func,onStart:a.func,prefix:a.string,redraw:a.bool,separator:a.string,start:a.number,startOnMount:a.bool,suffix:a.string,style:a.object,useEasing:a.bool,preserveValue:a.bool}),d(y,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var x={innerHTML:null};t.default=y,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y.defaultProps,{},e),n=t.start,r=t.formattingFn,a=O(i.useState("function"===typeof r?r(n):n),2),s=a[0],c=a[1],o=i.useRef(null),l=function(){var e=o.current;if(null!==e)return e;var n=function(){var e=h(x,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);c(e)},e}();return o.current=n,n},u=function(){var e=t.onReset;l().reset(),e({pauseResume:f,start:j,update:b})},j=function e(){var n=t.onStart,r=t.onEnd;l().reset(),l().start((function(){r({pauseResume:f,reset:u,start:e,update:b})})),n({pauseResume:f,reset:u,update:b})},f=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:u,start:j,update:b})},b=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:f,reset:u,start:j})};return i.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;if(t.startOnMount)var a=setTimeout((function(){n({pauseResume:f,reset:u,update:b}),l().start((function(){clearTimeout(a),r({pauseResume:f,reset:u,start:j,update:b})}))}),1e3*e);return u}),[]),{countUp:s,start:j,pauseResume:f,reset:u,update:b}}}},[["/EDR",0,1,2,3,4]]]);