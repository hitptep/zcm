(function(e){function t(t){for(var r,n,a=t[0],l=t[1],u=t[2],c=0,d=[];c<a.length;c++)n=a[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],r=!0,n=1;n<i.length;n++){var a=i[n];0!==s[a]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=i[0]))}return e}var r={},n={app:0},s={app:0},o=[];function a(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0c43d03c":"332856aa","chunk-2b09ce3a":"b693183b","chunk-3a2222d1":"818b6121","chunk-587414d6":"1d525b75","chunk-7926bd51":"ff152b28"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(e){var t=[],i={"chunk-0c43d03c":1,"chunk-2b09ce3a":1,"chunk-3a2222d1":1,"chunk-587414d6":1,"chunk-7926bd51":1};n[e]?t.push(n[e]):0!==n[e]&&i[e]&&t.push(n[e]=new Promise((function(t,i){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c43d03c":"b3b333a7","chunk-2b09ce3a":"46dd57ef","chunk-3a2222d1":"46874ed0","chunk-587414d6":"ebe8f626","chunk-7926bd51":"dc5c34e4"}[e]+".css",s=l.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===s))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],c=u.getAttribute("data-href");if(c===r||c===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],f.parentNode.removeChild(f),i(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,i){r=s[e]=[t,i]}));t.push(r[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=a(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var i=s[e];if(0!==i){if(i){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,i[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(i,r,function(t){return e[t]}.bind(null,r));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0399":function(e,t,i){"use strict";var r=i("4389"),n=i.n(r);n.a},"1bf1":function(e,t,i){"use strict";var r=i("7d7d"),n=i.n(r);n.a},"1d5b":function(e,t,i){},"2d22":function(e,t,i){"use strict";var r=i("c626"),n=i.n(r);n.a},4389:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("d9a3"),i("c9db"),i("de3e"),i("618d");var r=i("0261"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view"),i("FileUpload")],1)},s=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"global-uploader"},[i("uploader",{ref:"uploaderFile",staticClass:"uploader-app",attrs:{options:e.options,"auto-start":!0,"file-status-text":e.statusText},on:{"file-added":e.onFileAdded,"file-progress":e.onFileProgress,"file-success":e.onFileSuccess,"file-error":e.onFileError}},[i("uploader-unsupport"),i("uploader-btn",{ref:"uploadFileBtn",attrs:{id:"global-uploader-btn"}},[e._v("选择文件")]),i("uploader-list",{directives:[{name:"show",rawName:"v-show",value:e.panelShow,expression:"panelShow"}],scopedSlots:e._u([{key:"default",fn:function(t){return i("div",{staticClass:"file-panel",class:{collapse:e.collapse}},[i("div",{staticClass:"file-title"},[i("span",[e._v("上传文件列表")]),i("div",{staticClass:"operate"},[i("el-button",{attrs:{type:"text",title:e.collapse?"展开":"折叠"},on:{click:e.fileListShow}},[i("i",{class:e.collapse?"el-icon-full-screen":"el-icon-minus"})]),i("el-button",{attrs:{type:"text",title:"关闭"},on:{click:e.close}},[i("i",{staticClass:"el-icon-close"})])],1)]),e.collapse?e._e():i("ul",{staticClass:"file-list"},[e._l(t.fileList,(function(e){return i("li",{key:e.id},[i("uploader-file",{ref:"files",refInFor:!0,class:"file_"+e.id,attrs:{file:e,list:!0}})],1)})),t.fileList.length?e._e():i("div",{staticClass:"no-file"},[i("i",{staticClass:"el-icon-folder"}),e._v(" 暂无待上传文件")])],2)])}}])})],1)],1)},a=[],l=(i("7ae7"),i("c354"),i("f4a0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploader"},[e._t("default",[i("uploader-unsupport"),i("uploader-drop",[i("p",[e._v("Drop files here to upload or")]),i("uploader-btn",[e._v("select files")]),i("uploader-btn",{attrs:{directory:!0}},[e._v("select folder")])],1),i("uploader-list")],{files:e.files,fileList:e.fileList,started:e.started})],2)}),u=[],c=(i("c1f4"),i("4ca4")),d=i("979e"),f=i.n(d);i("b3f9"),i("d780");function p(e){var t=Math.floor(e/31536e3);if(t)return t+" year"+o(t);var i=Math.floor((e%=31536e3)/86400);if(i)return i+" day"+o(i);var r=Math.floor((e%=86400)/3600);if(r)return r+" hour"+o(r);var n=Math.floor((e%=3600)/60);if(n)return n+" minute"+o(n);var s=e%60;return s+" second"+o(s);function o(e){return e>1?"s":""}}function h(e){return e.replace(/[A-Z]/g,(function(e){return"-".concat(e.toLowerCase())}))}var m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{directives:[{name:"show",rawName:"v-show",value:e.support,expression:"support"}],ref:"btn",staticClass:"uploader-btn"},[e._t("default")],2)},v=[],g={inject:["uploader"]},b={data:function(){return{support:!0}},mounted:function(){this.support=this.uploader.uploader.support}},y="uploader-btn",w={name:y,mixins:[g,b],props:{directory:{type:Boolean,default:!1},single:{type:Boolean,default:!1},attrs:{type:Object,default:function(){return{}}}},mounted:function(){var e=this;this.$nextTick((function(){e.uploader.uploader.assignBrowse(e.$refs.btn,e.directory,e.single,e.attrs)}))}},_=w,S=(i("afe6"),i("5511")),C=Object(S["a"])(_,m,v,!1,null,null,null),k=C.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.support,expression:"support"}],ref:"drop",staticClass:"uploader-drop",class:e.dropClass},[e._t("default")],2)},E=[],j="uploader-drop",T={name:j,mixins:[g,b],data:function(){return{dropClass:""}},methods:{onDragEnter:function(){this.dropClass="uploader-dragover"},onDragLeave:function(){this.dropClass=""},onDrop:function(){this.dropClass="uploader-droped"}},mounted:function(){var e=this;this.$nextTick((function(){var t=e.$refs.drop,i=e.uploader.uploader;i.assignDrop(t),i.on("dragenter",e.onDragEnter),i.on("dragleave",e.onDragLeave),i.on("drop",e.onDrop)}))},beforeDestroy:function(){var e=this.$refs.drop,t=this.uploader.uploader;t.off("dragenter",this.onDragEnter),t.off("dragleave",this.onDragLeave),t.off("drop",this.onDrop),t.unAssignDrop(e)}},O=T,L=(i("2d22"),Object(S["a"])(O,x,E,!1,null,null,null)),U=L.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:!e.support,expression:"!support"}],staticClass:"uploader-unsupport"},[e._t("default",[e._m(0)])],2)},F=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v(" Your browser, unfortunately, is not supported by Uploader.js. The library requires support for "),i("a",{attrs:{href:"http://www.w3.org/TR/FileAPI/"}},[e._v("the HTML5 File API")]),e._v(" along with "),i("a",{attrs:{href:"http://www.w3.org/TR/FileAPI/#normalization-of-params"}},[e._v("file slicing")]),e._v(". ")])}],$="uploader-unsupport",z={name:$,mixins:[g,b]},P=z,R=(i("8692"),Object(S["a"])(P,A,F,!1,null,null,null)),I=R.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploader-list"},[e._t("default",[i("ul",e._l(e.fileList,(function(e){return i("li",{key:e.id},[i("uploader-file",{attrs:{file:e,list:!0}})],1)})),0)],{fileList:e.fileList})],2)},M=[],D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploader-file",attrs:{status:e.status}},[e._t("default",[i("div",{staticClass:"uploader-file-progress",class:e.progressingClass,style:e.progressStyle}),i("div",{staticClass:"uploader-file-info"},[i("div",{staticClass:"uploader-file-name"},[i("i",{staticClass:"uploader-file-icon",attrs:{icon:e.fileCategory}}),e._v(e._s(e.file.name))]),i("div",{staticClass:"uploader-file-size"},[e._v(e._s(e.formatedSize))]),i("div",{staticClass:"uploader-file-meta"}),i("div",{staticClass:"uploader-file-status"},[i("span",{directives:[{name:"show",rawName:"v-show",value:"uploading"!==e.status,expression:"status !== 'uploading'"}]},[e._v(e._s(e.statusText))]),i("span",{directives:[{name:"show",rawName:"v-show",value:"uploading"===e.status,expression:"status === 'uploading'"}]},[i("span",[e._v(e._s(e.progressStyle.progress))]),i("em",[e._v(e._s(e.formatedAverageSpeed))]),i("i",[e._v(e._s(e.formatedTimeRemaining))])])]),i("div",{staticClass:"uploader-file-actions"},[i("span",{staticClass:"uploader-file-pause",on:{click:e.pause}}),i("span",{staticClass:"uploader-file-resume",on:{click:e.resume}},[e._v("️")]),i("span",{staticClass:"uploader-file-retry",on:{click:e.retry}}),i("span",{staticClass:"uploader-file-remove",on:{click:e.remove}})])])],{file:e.file,list:e.list,status:e.status,paused:e.paused,error:e.error,response:e.response,averageSpeed:e.averageSpeed,formatedAverageSpeed:e.formatedAverageSpeed,currentSpeed:e.currentSpeed,isComplete:e.isComplete,isUploading:e.isUploading,size:e.size,formatedSize:e.formatedSize,uploadedSize:e.uploadedSize,progress:e.progress,progressStyle:e.progressStyle,progressingClass:e.progressingClass,timeRemaining:e.timeRemaining,formatedTimeRemaining:e.formatedTimeRemaining,type:e.type,extension:e.extension,fileCategory:e.fileCategory})],2)},N=[],q=(i("af82"),i("4045"),i("79dd"),i("9a14"),["fileProgress","fileSuccess","fileComplete","fileError"]),H=q,J="uploader-file",Y={name:J,props:{file:{type:Object,default:function(){return{}}},list:{type:Boolean,default:!1}},data:function(){return{response:null,paused:!1,error:!1,averageSpeed:0,currentSpeed:0,isComplete:!1,isUploading:!1,size:0,formatedSize:"",uploadedSize:0,progress:0,timeRemaining:0,type:"",extension:"",progressingClass:""}},computed:{fileCategory:function(){var e=this.extension,t=this.file.isFolder,i=t?"folder":"unknown",r=this.file.uploader.opts.categoryMap,n=r||{image:["gif","jpg","jpeg","png","bmp","webp"],video:["mp4","m3u8","rmvb","avi","swf","3gp","mkv","flv"],audio:["mp3","wav","wma","ogg","aac","flac"],document:["doc","txt","docx","pages","epub","pdf","numbers","csv","xls","xlsx","keynote","ppt","pptx"]};return Object.keys(n).forEach((function(t){var r=n[t];r.indexOf(e)>-1&&(i=t)})),i},progressStyle:function(){var e=Math.floor(100*this.progress),t="translateX(".concat(Math.floor(e-100),"%)");return{progress:"".concat(e,"%"),webkitTransform:t,mozTransform:t,msTransform:t,transform:t}},formatedAverageSpeed:function(){return"".concat(f.a.utils.formatSize(this.averageSpeed)," / s")},status:function(){var e=this.isUploading,t=this.isComplete,i=this.error,r=this.paused;return t?"success":i?"error":e?"uploading":r?"paused":"waiting"},statusText:function(){var e=this.status,t=this.file.uploader.fileStatusText,i=e;return i="function"===typeof t?t(e,this.response):t[e],i||e},formatedTimeRemaining:function(){var e=this.timeRemaining,t=this.file;if(e===Number.POSITIVE_INFINITY||0===e)return"";var i=p(e),r=t.uploader.opts.parseTimeRemaining;return r&&(i=r(e,i)),i}},watch:{status:function(e,t){var i=this;t&&"uploading"===e&&"uploading"!==t?this.tid=setTimeout((function(){i.progressingClass="uploader-file-progressing"}),200):(clearTimeout(this.tid),this.progressingClass="")}},methods:{_actionCheck:function(){this.paused=this.file.paused,this.error=this.file.error,this.isUploading=this.file.isUploading()},pause:function(){this.file.pause(),this._actionCheck(),this._fileProgress()},resume:function(){this.file.resume(),this._actionCheck()},remove:function(){this.file.cancel()},retry:function(){this.file.retry(),this._actionCheck()},processResponse:function(e){var t=e;try{t=JSON.parse(e)}catch(i){}this.response=t},fileEventsHandler:function(e,t){var i=t[0],r=t[1],n=this.list?i:r;if(this.file===n){if(this.list&&"fileSuccess"===e)return void this.processResponse(t[2]);this["_".concat(e)].apply(this,t)}},_fileProgress:function(){this.progress=this.file.progress(),this.averageSpeed=this.file.averageSpeed,this.currentSpeed=this.file.currentSpeed,this.timeRemaining=this.file.timeRemaining(),this.uploadedSize=this.file.sizeUploaded(),this._actionCheck()},_fileSuccess:function(e,t,i){e&&this.processResponse(i),this._fileProgress(),this.error=!1,this.isComplete=!0,this.isUploading=!1},_fileComplete:function(){this._fileSuccess()},_fileError:function(e,t,i){this._fileProgress(),this.processResponse(i),this.error=!0,this.isComplete=!1,this.isUploading=!1}},mounted:function(){var e=this,t=["paused","error","averageSpeed","currentSpeed"],i=["isComplete","isUploading",{key:"size",fn:"getSize"},{key:"formatedSize",fn:"getFormatSize"},{key:"uploadedSize",fn:"sizeUploaded"},"progress","timeRemaining",{key:"type",fn:"getType"},{key:"extension",fn:"getExtension"}];t.forEach((function(t){e[t]=e.file[t]})),i.forEach((function(t){"string"===typeof t?e[t]=e.file[t]():e[t.key]=e.file[t.fn]()}));var r=this._handlers={},n=function(t){return r[t]=function(){for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];e.fileEventsHandler(t,r)},r[t]};H.forEach((function(t){e.file.uploader.on(t,n(t))}))},destroyed:function(){var e=this;H.forEach((function(t){e.file.uploader.off(t,e._handlers[t])})),this._handlers=null}},K=Y,V=(i("0399"),Object(S["a"])(K,D,N,!1,null,null,null)),X=V.exports,Z="uploader-list",G={name:Z,mixins:[g],computed:{fileList:function(){return this.uploader.fileList}},components:{UploaderFile:X}},Q=G,W=(i("8d67"),Object(S["a"])(Q,B,M,!1,null,null,null)),ee=W.exports,te="uploader",ie="fileAdded",re="filesAdded",ne="uploadStart",se={name:te,provide:function(){return{uploader:this}},props:{options:{type:Object,default:function(){return{}}},autoStart:{type:Boolean,default:!0},fileStatusText:{type:[Object,Function],default:function(){return{success:"success",error:"error",uploading:"uploading",paused:"paused",waiting:"waiting"}}}},data:function(){return{started:!1,files:[],fileList:[]}},methods:{uploadStart:function(){this.started=!0},fileAdded:function(e){if(this.$emit(h(ie),e),e.ignored)return!1},filesAdded:function(e,t){if(this.$emit(h(re),e,t),e.ignored||t.ignored)return!1},fileRemoved:function(){this.files=this.uploader.files,this.fileList=this.uploader.fileList},filesSubmitted:function(){this.files=this.uploader.files,this.fileList=this.uploader.fileList,this.autoStart&&this.uploader.upload()},allEvent:function(){for(var e,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];var n=i[0],s=(e={},Object(c["a"])(e,ie,!0),Object(c["a"])(e,re,!0),Object(c["a"])(e,ne,"uploadStart"),e),o=s[n];if(o){if(!0===o)return;this[o].apply(this,i.slice(1))}i[0]=h(n),this.$emit.apply(this,i)}},created:function(){this.options.initialPaused=!this.autoStart;var e=new f.a(this.options);this.uploader=e,this.uploader.fileStatusText=this.fileStatusText,e.on("catchAll",this.allEvent),e.on(ie,this.fileAdded),e.on(re,this.filesAdded),e.on("fileRemoved",this.fileRemoved),e.on("filesSubmitted",this.filesSubmitted)},destroyed:function(){var e=this.uploader;e.off("catchAll",this.allEvent),e.off(ie,this.fileAdded),e.off(re,this.filesAdded),e.off("fileRemoved",this.fileRemoved),e.off("filesSubmitted",this.filesSubmitted),this.uploader=null},components:{UploaderBtn:k,UploaderDrop:U,UploaderUnsupport:I,UploaderList:ee}},oe=se,ae=(i("1bf1"),Object(S["a"])(oe,l,u,!1,null,null,null)),le=ae.exports,ue=i("97af"),ce=function(){return window.location.origin+"/v1/resource/chunk"},de=function(e){return Object(ue["a"])({url:"/v1/resource/merge",method:"post",data:e})},fe={components:{Uploader:le,UploaderUnsupport:I,UploaderBtn:k,UploaderList:ee,UploaderFile:X},props:{parentId:{type:Number,default:0}},data:function(){return{fileMap:{},options:{target:ce(),chunkSize:"2048000",fileParameterName:"file",maxChunkRetries:3,testChunks:!0,simultaneousUploads:3},statusText:{success:"成功了",error:"出错了",uploading:"上传中",paused:"暂停中",waiting:"等待中"},panelShow:!1,collapse:!1}},computed:{uploader:function(){return this.$refs.uploaderFile.uploader}},methods:{onFileAdded:function(){this.fileMap[arguments[0].uniqueIdentifier]=this.$store.state.folderId,this.panelShow=!0,this.computeMD5(arguments[0])},onFileProgress:function(e,t,i){console.log("上传中 ".concat(t.name,"，chunk：").concat(i.startByte/1024/1024," ~ ").concat(i.endByte/1024/1024))},onFileSuccess:function(){var e=arguments,t=this,i=arguments[0].file,r={fileName:i.name,size:i.size,identifier:arguments[0].uniqueIdentifier,parentId:this.fileMap[arguments[0].uniqueIdentifier]};de(r).then((function(){window.eventBus.$emit("flushFileList",t.fileMap[e[0].uniqueIdentifier])})).catch((function(){t.$message({type:"error",message:"文件合并失败，请重新上传"})}))},onFileError:function(){},fileListShow:function(){this.collapse=!this.collapse},computeMD5:function(e){},close:function(){this.uploader.cancel(),this.panelShow=!1}},mounted:function(){var e=this;window.eventBus.$on("openUploader",(function(t){e.params=t||{},e.$refs.uploadFileBtn&&e.$refs.uploadFileBtn.$el.click()}))},destroyed:function(){window.eventBus.$off("openUploader")}},pe=fe,he=(i("de7b"),Object(S["a"])(pe,o,a,!1,null,"524c7604",null)),me=he.exports,ve={name:"app",components:{FileUpload:me}},ge=ve,be=(i("5c0b"),Object(S["a"])(ge,n,s,!1,null,null,null)),ye=be.exports,we=i("2ca7"),_e=i.n(we),Se=(i("46c6"),i("83a6")),Ce=i.n(Se),ke=i("a18c"),xe=i("08c1");r["default"].use(xe["a"]);var Ee=new xe["a"].Store({state:{folderId:0},mutations:{changeFolderId:function(e,t){e.folderId=t}}});r["default"].use(_e.a,{locale:Ce.a}),r["default"].config.productionTip=!1,window.eventBus=new r["default"],new r["default"]({router:ke["a"],store:Ee,render:function(e){return e(ye)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var r=i("676d"),n=i.n(r);n.a},"676d":function(e,t,i){},"7d7d":function(e,t,i){},8692:function(e,t,i){"use strict";var r=i("8cdf"),n=i.n(r);n.a},"8cdf":function(e,t,i){},"8d67":function(e,t,i){"use strict";var r=i("1d5b"),n=i.n(r);n.a},"97af":function(e,t,i){"use strict";i("3a20");var r=i("82ae"),n=i.n(r),s=i("2ca7"),o=i("a18c"),a=n.a.create({baseURL:"/",timeout:15e3}),l=function(e){404===e&&o["a"].push("/404")};a.interceptors.response.use((function(e){return e.data}),(function(e){var t=e.response;return t?(l(t.status),Promise.reject(t)):(window.navigator.onLine?Object(s["Message"])({message:e,type:"error"}):alert("断网了"),Promise.reject(e))})),t["a"]=a},a18c:function(e,t,i){"use strict";i("3a20");var r=i("0261"),n=i("9bfb");r["default"].use(n["a"]);var s=n["a"].prototype.push;n["a"].prototype.push=function(e,t,i){return t||i?s.call(this,e,t,i):s.call(this,e).catch((function(e){return e}))};var o=new n["a"]({routes:[{path:"",redirect:"/folder/0",component:function(){return i.e("chunk-7926bd51").then(i.bind(null,"d9ce"))},children:[{path:"folder/:folderId",component:function(){return i.e("chunk-2b09ce3a").then(i.bind(null,"bf7b"))},props:!0,meta:{title:"文件列表"}},{path:"/system",component:function(){return i.e("chunk-3a2222d1").then(i.bind(null,"26b0"))},meta:{title:"系统信息"}}]},{path:"/video/:fileId",component:function(){return i.e("chunk-587414d6").then(i.bind(null,"007b"))},props:!0,meta:{title:"播放视频"}},{path:"*",component:function(){return i.e("chunk-0c43d03c").then(i.bind(null,"8cdb"))}}]});o.beforeEach((function(e,t,i){e.meta.title&&(document.title=e.meta.title),i()})),t["a"]=o},afe6:function(e,t,i){"use strict";var r=i("cad2"),n=i.n(r);n.a},c626:function(e,t,i){},cad2:function(e,t,i){},de7b:function(e,t,i){"use strict";var r=i("ed00"),n=i.n(r);n.a},ed00:function(e,t,i){}});
//# sourceMappingURL=app.95dd8885.js.map