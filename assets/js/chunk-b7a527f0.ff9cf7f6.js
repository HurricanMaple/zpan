(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7a527f0"],{6275:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("a026"),r=a("9225"),l=a("c0d6"),n=function(e){var t=i["default"].extend(e);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log(e);var a=new t({i18n:r["a"],store:l["a"],propsData:e}).$mount(document.createElement("div"));return new Promise((function(e,t){a.$once("completed",(function(t){return e(t)})),a.$once("cancel",(function(e){return t(e)}))}))}}},"6a72":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"topbar"},[a("el-input",{staticStyle:{width:"300px"},attrs:{size:"medium",placeholder:e.$t("admin.storage-search-placeholder"),"prefix-icon":"el-icon-search"},on:{change:e.listRefresh},model:{value:e.query.email,callback:function(t){e.$set(e.query,"email",t)},expression:"query.email"}}),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"medium"},on:{click:e.onCreate}},[e._v(e._s(e.$t("admin.btn-storage-add")))])],1),a("el-card",{staticStyle:{"margin-top":"10px","padding-bottom":"20px"},attrs:{shadow:"never"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rows,size:"medium"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{prop:"name",label:e.$t("admin.label-name"),width:"100"}}),a("el-table-column",{attrs:{prop:"title",label:e.$t("admin.label-title"),width:"100"}}),a("el-table-column",{attrs:{prop:"bucket",label:e.$t("admin.label-bucket"),width:"250"}}),a("el-table-column",{attrs:{prop:"endpoint",label:e.$t("admin.label-endpoint")}}),a("el-table-column",{attrs:{prop:"operation",label:e.$t("admin.label-operation"),width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.onEdit(t.$index,t.row)}}},[e._v(e._s(e.$t("admin.btn-edit")))]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.onDelete(t.$index,t.row)}}},[e._v(e._s(e.$t("delete")))])]}}])})],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","current-page":e.pageNo,"page-size":e.query.limit,total:e.total},on:{"update:currentPage":function(t){e.pageNo=t},"update:current-page":function(t){e.pageNo=t},"current-change":e.listRefresh}})],1)],1)],1)},r=[],l=(a("7f7f"),a("6275")),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-drawer",{attrs:{title:e.$t("admin.label-storage-manager"),visible:e.visible,size:"50%"},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"form",staticStyle:{"padding-right":"50px"},attrs:{model:e.form,rules:e.rules,size:"small"}},[a("el-tabs",{staticStyle:{"margin-left":"20px"},attrs:{value:"basic",type:"card"}},[a("el-tab-pane",{attrs:{label:"基础配置",name:"basic"}},[a("el-form-item",{attrs:{label:"类型","label-width":"120px"}},[a("el-radio-group",{attrs:{disabled:e.editMode},model:{value:e.form.mode,callback:function(t){e.$set(e.form,"mode",t)},expression:"form.mode"}},[a("el-radio",{attrs:{label:1}},[e._v("网盘")]),a("el-radio",{attrs:{label:2}},[e._v("外链盘")])],1)],1),a("el-form-item",{attrs:{prop:"name",label:e.$t("admin.label-name"),"label-width":"120px"}},[a("el-input",{attrs:{placeholder:"请输入一个名字",autofocus:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{prop:"title",label:e.$t("admin.label-title"),"label-width":"120px"}},[a("el-input",{attrs:{placeholder:"请设置一个标题，会显示在导航栏"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{prop:"idirs",label:"系统目录","label-width":"120px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"设置系统内置目录，这些目录不允许用户删除"},model:{value:e.form.internal_dirs,callback:function(t){e.$set(e.form,"internal_dirs",t)},expression:"form.internal_dirs"}},e._l(e.form.internal_dirs,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),a("el-tab-pane",{attrs:{label:"云平台配置",name:"storage"}},[a("el-form-item",{attrs:{prop:"provider",label:"云平台","label-width":"120px"}},[a("el-select",{attrs:{placeholder:"请选择您的云平台",disabled:e.editMode},model:{value:e.form.provider,callback:function(t){e.$set(e.form,"provider",t)},expression:"form.provider"}},e._l(e.providers,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{prop:"bucket",label:e.$t("admin.label-bucket"),"label-width":"120px"}},[a("el-input",{attrs:{disabled:e.editMode},model:{value:e.form.bucket,callback:function(t){e.$set(e.form,"bucket",t)},expression:"form.bucket"}})],1),a("el-form-item",{attrs:{prop:"endpoint",label:e.$t("admin.label-endpoint"),"label-width":"120px"}},[a("el-input",{attrs:{disabled:e.editMode},model:{value:e.form.endpoint,callback:function(t){e.$set(e.form,"endpoint",t)},expression:"form.endpoint"}})],1),a("el-form-item",{attrs:{prop:"access_key",label:e.$t("admin.label-access_key"),"label-width":"120px"}},[a("el-input",{model:{value:e.form.access_key,callback:function(t){e.$set(e.form,"access_key",t)},expression:"form.access_key"}})],1),a("el-form-item",{attrs:{prop:"secret_key",label:e.$t("admin.label-secret_key"),"label-width":"120px"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.secret_key,callback:function(t){e.$set(e.form,"secret_key",t)},expression:"form.secret_key"}})],1),a("el-form-item",{attrs:{prop:"custom_host",label:e.$t("admin.label-custom_host"),"label-width":"120px"}},[a("el-input",{model:{value:e.form.custom_host,callback:function(t){e.$set(e.form,"custom_host",t)},expression:"form.custom_host"}})],1),a("el-form-item",{attrs:{prop:"root_path",label:"根路径","label-width":"120px"}},[a("el-input",{attrs:{placeholder:"请设置文件存储规则，不填则默认为Bucket根路径"},model:{value:e.form.root_path,callback:function(t){e.$set(e.form,"root_path",t)},expression:"form.root_path"}})],1),a("el-form-item",{attrs:{prop:"file_path",label:"文件路径","label-width":"120px"}},[a("el-input",{attrs:{placeholder:"请设置文件存储规则，不填则使用系统默认规则"},model:{value:e.form.file_path,callback:function(t){e.$set(e.form,"file_path",t)},expression:"form.file_path"}}),a("span",{staticClass:"tips",on:{click:e.openEnvs}},[a("i",{staticClass:"el-icon-warning"}),e._v("支持的系统变量")])],1)],1)],1)],1),a("div",{staticClass:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.$t("confirm")))]),a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("cancel")))])],1),a("el-drawer",{attrs:{title:"支持的系统变量","append-to-body":!0,visible:e.envDrawerVisible,size:"35%"},on:{"update:visible":function(t){e.envDrawerVisible=t}}},[a("el-table",{staticStyle:{padding:"10px 20px"},attrs:{data:e.support_envs,size:"small"}},[a("el-table-column",{attrs:{property:"name",label:"变量",width:"150"}}),a("el-table-column",{attrs:{property:"intro",label:"介绍",width:"150"}}),a("el-table-column",{attrs:{property:"example",label:"例子"}})],1)],1)],1)},o=[],s=a("ebbf"),c={mixins:[s["b"]],props:{form:{type:Object,default:function(){return{mode:1}}}},data:function(){return{providers:[],envDrawerVisible:!1,support_envs:[],rules:{name:[{required:!0,message:"请输入存储名称",trigger:"blur"},{pattern:/^[A-Za-z]+$/,message:"仅允许使用英文单词",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"},{max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],provider:[{required:!0,message:"请选择云平台",trigger:"change"}],bucket:[{required:!0,message:"请填写存储桶名称",trigger:"blur"}],endpoint:[{required:!0,message:"请填写Endpoint",trigger:"blur"},{pattern:/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,message:"Endpoint只包含域名",trigger:"blur"}],access_key:[{required:!0,message:"请填写AccessKey",trigger:"blur"}],secret_key:[{required:!0,message:"请填写SecretKey",trigger:"blur"}]}}},computed:{editMode:function(){return this.form.id>0}},methods:{openEnvs:function(){var e=this;this.envDrawerVisible=!0,this.$zpan.System.matterPathEnvs().then((function(t){e.support_envs=t.data}))},onSubmit:function(){var e=this;this.$refs.form.validate((function(t){if(t){var a=e.$zpan.Storage.create;e.form.id&&(a=e.$zpan.Storage.update),e.form.idirs=e.form.internal_dirs.join(","),a(e.form).then((function(t){e.close(),e.finish(),e.$message({type:"success",message:e.$t("msg.save-success")})}))}}))}},mounted:function(){var e=this;this.$zpan.System.providers().then((function(t){e.providers=t.data}))}},u=c,d=(a("99bc"),a("2877")),m=Object(d["a"])(u,n,o,!1,null,null,null),p=m.exports,f={data:function(){return{query:{offset:0,limit:20},pageNo:1,rows:[],total:0}},methods:{listRefresh:function(){var e=this;this.query.offset=(this.pageNo-1)*this.query.limit,this.$zpan.Storage.list(this.query).then((function(t){e.rows=t.data.list,e.total=t.data.total}))},onCreate:function(){var e=this;Object(l["a"])(p)({}).then((function(){e.listRefresh()}))},onEdit:function(e,t){var a=this,i={form:Object.assign({},t)};Object(l["a"])(p)(i).then((function(){a.listRefresh()}))},onDelete:function(e,t){var a=this;this.$confirm(this.$t("tips.remove"),this.$t("delete")+" ".concat(t.name),{type:"warning",confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel")}).then((function(){a.$zpan.Storage.delete(t.id).then((function(e){a.$message({type:"success",message:a.$t("msg.delete-success")}),a.listRefresh()}))}))}},mounted:function(){this.listRefresh()}},b=f,h=Object(d["a"])(b,i,r,!1,null,null,null);t["default"]=h.exports},"99bc":function(e,t,a){"use strict";a("ca4c")},ca4c:function(e,t,a){},ebbf:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));a("7f7f"),a("ac6a");var i={data:function(){return{cs:{}}},watch:{$route:function(e,t){this.setCs()}},computed:{},methods:{setCs:function(){var e=this;this.$store.state.storages.forEach((function(t){t.name==e.$route.params.sname&&(e.cs=t)}))},getSid:function(){return this.cs.id}},mounted:function(){this.setCs()}},r=i,l={data:function(){return{visible:!1}},watch:{visible:function(e){!e&&this.$destroy()}},mounted:function(){document.body.appendChild(this.$el),this.visible=!0},destroyed:function(){this.$el.parentNode.removeChild(this.$el)},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},finish:function(){this.visible=!1,this.$emit("completed")}}},n=l}}]);
//# sourceMappingURL=chunk-b7a527f0.ff9cf7f6.js.map