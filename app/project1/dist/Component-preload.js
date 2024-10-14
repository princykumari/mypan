//@ui5-bundle project11/Component-preload.js
sap.ui.require.preload({
	"project11/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("project1.Component",{metadata:{manifest:"json"}})});
},
	"project11/i18n/i18n.properties":'# This is the resource bundle for project1\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,35\nflpTitle=panform\n',
	"project11/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"project11","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.0","toolsId":"17e33182-fbfb-4e24-8fbe-d9aa3a3218c8"},"dataSources":{"mainService":{"uri":"odata/v4/pan-approval/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"panappsem-display":{"semanticObject":"panappsem","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.128.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project1.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"PAN_Details_APRList","target":"PAN_Details_APRList"},{"pattern":"PAN_Details_APR({key}):?query:","name":"PAN_Details_APRObjectPage","target":"PAN_Details_APRObjectPage"}],"targets":{"PAN_Details_APRList":{"type":"Component","id":"PAN_Details_APRList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/PAN_Details_APR","variantManagement":"Page","navigation":{"PAN_Details_APR":{"detail":{"route":"PAN_Details_APRObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"PAN_Details_APRObjectPage":{"type":"Component","id":"PAN_Details_APRObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/PAN_Details_APR"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"panapp"}}'
});
//# sourceMappingURL=Component-preload.js.map
