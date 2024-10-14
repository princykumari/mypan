(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/mypanmdk/i18n/i18n.properties":
/*!*********************************************************!*\
  !*** ./build.definitions/mypanmdk/i18n/i18n.properties ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "PAN_attachments_APR=PAN attachments APR\nPAN_attachments_APR_Detail=PAN attachments APR Detail\nCreate_PAN_attachments_APR_Detail=Create PAN attachments APR Detail\nUpdate_PAN_attachments_APR_Detail=Update PAN attachments APR Detail\nPAN_Comments_APR=PAN Comments APR\nPAN_Comments_APR_Detail=PAN Comments APR Detail\nCreate_PAN_Comments_APR_Detail=Create PAN Comments APR Detail\nUpdate_PAN_Comments_APR_Detail=Update PAN Comments APR Detail\nPAN_Details_APR=PAN Details APR\nPAN_Details_APR_Detail=PAN Details APR Detail\nCreate_PAN_Details_APR_Detail=Create PAN Details APR Detail\nUpdate_PAN_Details_APR_Detail=Update PAN Details APR Detail\nCreate_PAN_WEB_EVENT_APR=Create PAN WEB EVENT APR\nCreate_PAN_TYPE_APR=Create PAN TYPE APR\nCreate_PAN_WORKFLOW_HISTORY_APR=Create PAN WORKFLOW HISTORY APR\nCreate_PAN_attachments_APR=Create PAN attachments APR\nCreate_PAN_vendor_data_APR=Create PAN vendor data APR\nCreate_PAN_Comments_APR=Create PAN Comments APR\nPAN_Payment_Method_Drop_APR=PAN Payment Method Drop APR\nPAN_Payment_Method_Drop_APR_Detail=PAN Payment Method Drop APR Detail\nCreate_PAN_Payment_Method_Drop_APR_Detail=Create PAN Payment Method Drop APR Detail\nUpdate_PAN_Payment_Method_Drop_APR_Detail=Update PAN Payment Method Drop APR Detail\nPAN_PAYMENT_TERM_DETAILS_APR=PAN PAYMENT TERM DETAILS APR\nPAN_PAYMENT_TERM_DETAILS_APR_Detail=PAN PAYMENT TERM DETAILS APR Detail\nCreate_PAN_PAYMENT_TERM_DETAILS_APR_Detail=Create PAN PAYMENT TERM DETAILS APR Detail\nUpdate_PAN_PAYMENT_TERM_DETAILS_APR_Detail=Update PAN PAYMENT TERM DETAILS APR Detail\nPAN_PRICE_DETAILS_APR=PAN PRICE DETAILS APR\nPAN_PRICE_DETAILS_APR_Detail=PAN PRICE DETAILS APR Detail\nCreate_PAN_PRICE_DETAILS_APR_Detail=Create PAN PRICE DETAILS APR Detail\nUpdate_PAN_PRICE_DETAILS_APR_Detail=Update PAN PRICE DETAILS APR Detail\nPAN_TYPE_APR=PAN TYPE APR\nPAN_TYPE_APR_Detail=PAN TYPE APR Detail\nCreate_PAN_TYPE_APR_Detail=Create PAN TYPE APR Detail\nUpdate_PAN_TYPE_APR_Detail=Update PAN TYPE APR Detail\nPAN_vendor_data_APR=PAN vendor data APR\nPAN_vendor_data_APR_Detail=PAN vendor data APR Detail\nCreate_PAN_vendor_data_APR_Detail=Create PAN vendor data APR Detail\nUpdate_PAN_vendor_data_APR_Detail=Update PAN vendor data APR Detail\nCreate_PAN_vendor_response_APR=Create PAN vendor response APR\nCreate_PAN_PAYMENT_TERM_DETAILS_APR=Create PAN PAYMENT TERM DETAILS APR\nCreate_PAN_PRICE_DETAILS_APR=Create PAN PRICE DETAILS APR\nPAN_vendor_response_APR=PAN vendor response APR\nPAN_vendor_response_APR_Detail=PAN vendor response APR Detail\nCreate_PAN_vendor_response_APR_Detail=Create PAN vendor response APR Detail\nUpdate_PAN_vendor_response_APR_Detail=Update PAN vendor response APR Detail\nPAN_WEB_EVENT_APR=PAN WEB EVENT APR\nPAN_WEB_EVENT_APR_Detail=PAN WEB EVENT APR Detail\nCreate_PAN_WEB_EVENT_APR_Detail=Create PAN WEB EVENT APR Detail\nUpdate_PAN_WEB_EVENT_APR_Detail=Update PAN WEB EVENT APR Detail\nPAN_WORKFLOW_HISTORY_APR=PAN WORKFLOW HISTORY APR\nPAN_WORKFLOW_HISTORY_APR_Detail=PAN WORKFLOW HISTORY APR Detail\nCreate_PAN_WORKFLOW_HISTORY_APR_Detail=Create PAN WORKFLOW HISTORY APR Detail\nUpdate_PAN_WORKFLOW_HISTORY_APR_Detail=Update PAN WORKFLOW HISTORY APR Detail\nvendorTaxDetails_APR=vendorTaxDetails APR\nvendorTaxDetails_APR_Detail=vendorTaxDetails APR Detail\nCreate_vendorTaxDetails_APR_Detail=Create vendorTaxDetails APR Detail\nUpdate_vendorTaxDetails_APR_Detail=Update vendorTaxDetails APR Detail"

/***/ }),

/***/ "./build.definitions/mypanmdk/Styles/Styles.css":
/*!******************************************************!*\
  !*** ./build.definitions/mypanmdk/Styles/Styles.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
.MyButton {
  color: #c80e0e;
  /* Text color */
  background-color: #c41919;
  /* Background color */
}
ui5-mdk-bar.actionbar {
  color: #c82525;
  background-color: #51abf1;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/mypanmdk/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.MyButton {\n  color: #c80e0e;\n  /* Text color */\n  background-color: #c41919;\n  /* Background color */\n}\nui5-mdk-bar.actionbar {\n  color: #c82525;\n  background-color: #51abf1;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/mypanmdk/Styles/Styles.less":
/*!*******************************************************!*\
  !*** ./build.definitions/mypanmdk/Styles/Styles.less ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
@textColor: rgb(200, 14, 14);
@backgroundColor: rgb(196, 25, 25);

.MyButton {
    color: @textColor; /* Text color */
    background-color: @backgroundColor; /* Background color */
}

ActionBar {
    color: rgb(200, 37, 37);
    background-color:#51abf1;
}



`, "",{"version":3,"sources":["webpack://./build.definitions/mypanmdk/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD,oBAAoB;AACpB,iBAAiB;AACjB,4BAA4B;AAC5B,kCAAkC;;AAElC;IACI,iBAAiB,EAAE,eAAe;IAClC,kCAAkC,EAAE,qBAAqB;AAC7D;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n@textColor: rgb(200, 14, 14);\n@backgroundColor: rgb(196, 25, 25);\n\n.MyButton {\n    color: @textColor; /* Text color */\n    background-color: @backgroundColor; /* Background color */\n}\n\nActionBar {\n    color: rgb(200, 37, 37);\n    background-color:#51abf1;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/mypanmdk/Styles/Styles.nss":
/*!******************************************************!*\
  !*** ./build.definitions/mypanmdk/Styles/Styles.nss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
@textColor: rgb(200, 14, 14);
@backgroundColor: rgb(196, 25, 25);
MyButton {
	font-color: #c80e0e;
	/* Text color */
  background-color: #c41919;
}
ActionBar {
	font-color: #c82525;
	background-color: #51abf1;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/mypanmdk/Styles/Styles.nss"],"names":[],"mappings":"AAAA,oBAAoB;AACpB,iBAAiB;AACjB,4BAA4B;AAC5B,kCAAkC;AAClC;CACC,mBAAmB;CACnB,eAAe;EACd,yBAAyB;AAC3B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B","sourcesContent":["@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n@textColor: rgb(200, 14, 14);\n@backgroundColor: rgb(196, 25, 25);\nMyButton {\n\tfont-color: #c80e0e;\n\t/* Text color */\n  background-color: #c41919;\n}\nActionBar {\n\tfont-color: #c82525;\n\tbackground-color: #51abf1;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/Application/About.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/Application/About.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/mypanmdk/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/mypanmdk/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/mypanmdk/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/mypanmdk/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/mypanmdk/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/Application/Support.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/Application/Support.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/mypanmdk/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/mypanmdk/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/mypanmdk/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/mypanmdk/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/mypanmdk/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/Application/UserActivityLog.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/Application/UserActivityLog.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/mypanmdk/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/mypanmdk/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/mypanmdk/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/mypanmdk/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/mypanmdk/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/mypanmdk/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/mypanmdk/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/mypanmdk/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/ErrorArchive/ErrorArchive_List.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/mypanmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/Login.page":
/*!*****************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/Login.page ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":true,"Caption":"Pan Number","PlaceHolder":"Enter Pan Number","OnValueChange":"/mypanmdk/Rules/Login.js","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker0","IsVisible":true,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Choose Type","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","OnValueChange":"/mypanmdk/Rules/second_button.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":["Supplier","Buyer"]},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":false,"Separator":true,"Title":"Login","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/mypanmdk/Rules/Login.js"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":false,"Separator":true,"Title":"second button","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/mypanmdk/Actions/tocustom.action"}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_vendor_data_APR"},"_Type":"Page","_Name":"Login","Caption":"Login","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"menu","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/mypanmdk/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"},"FioriToolbar":{"_Type":"Control.Type.FioriToolbar","_Name":"FioriToolbar0","Styles":{"FioriToolbar":"MyButton","HelperText":"MyButton","OverflowIcon":"MyButton"},"Items":[{"_Type":"FioriToolbarItem.Type.Button","_Name":"ToolbarItem0","Visible":true,"Title":"All form Details","Styles":{"Image":"MyButton","Button":"MyButton"},"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_List.action","Enabled":true,"ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading"}]}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/Main.page":
/*!****************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/Main.page ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader_mypan","AccessoryType":"None","UseTopPadding":true,"Caption":"mypan","_Type":"SectionCommon.Type.Header"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_List.action","Alignment":"Center","Title":"PAN_attachments_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_List.action","Alignment":"Center","Title":"PAN_Comments_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_List.action","Alignment":"Center","Title":"PAN_Details_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_List.action","Alignment":"Center","Title":"PAN_Payment_Method_Drop_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_List.action","Alignment":"Center","Title":"PAN_PAYMENT_TERM_DETAILS_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_List.action","Alignment":"Center","Title":"PAN_PRICE_DETAILS_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_List.action","Alignment":"Center","Title":"PAN_TYPE_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_List.action","Alignment":"Center","Title":"PAN_vendor_data_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_List.action","Alignment":"Center","Title":"PAN_vendor_response_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_List.action","Alignment":"Center","Title":"PAN_WEB_EVENT_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_List.action","Alignment":"Center","Title":"PAN_WORKFLOW_HISTORY_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_List.action","Alignment":"Center","Title":"vendorTaxDetails_APR","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"}],"_Name":"SectionButtonTable_mypan","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/mypanmdk/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/custom.page":
/*!******************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/custom.page ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"_Type":"Section.Type.KPISection","_Name":"SectionKPISection0","Visible":true,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Styles":{"TintColor":"KPISectionTintColor","BackgroundColor":"KPISectionBackgroundColor"},"KPIItems":[{"_Name":"KPIItem0","CaptionLabel":"20 minutes ago","MetricItems":[{"Value":"104","TrailingUnit":"°F"}]},{"_Name":"KPIItem1","CaptionLabel":"Working Hours","MetricItems":[{"Value":"6","TrailingUnit":"h"},{"Value":"59","TrailingUnit":"m"}]},{"_Name":"KPIItem2","CaptionLabel":"Completed","MetricItems":[{"Value":"54","TrailingUnit":"%","_Name":"KPIItem2MetricItem0"}],"ShowProgress":true,"Progress":0.7},{"_Name":"KPIItem3","CaptionLabel":"Documents","MetricItems":[{"Value":"2"}],"Icon":"/mypanmdk/Images/panda.png"}]}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"custom","Caption":"KPI section Page","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Create.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Create.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_Comments_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"user","_Name":"user","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Comments","_Name":"Comments","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Comments_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Detail.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Detail.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_Comments_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_Comments_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{createdAt}","Subhead":"{createdBy}","BodyText":"","Footnote":"{modifiedBy}","Description":"{modifiedAt}","StatusText":"{PAN_Number}","StatusImage":"","SubstatusImage":"","SubstatusText":"{user}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Created On","Value":"{createdAt}"},{"KeyName":"Created By","Value":"{createdBy}"},{"KeyName":"Changed On","Value":"{modifiedAt}"},{"KeyName":"Changed By","Value":"{modifiedBy}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"user","Value":"{user}"},{"KeyName":"Comments","Value":"{Comments}"},{"KeyName":"status","Value":"{status}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_Comments_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Edit.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Edit.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_Comments_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_Comments_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{PAN_Number}","_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"user","_Name":"user","Value":"{user}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Comments","_Name":"Comments","Value":"{Comments}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Comments_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_List.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_List.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_Comments_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{modifiedAt}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Detail.action","StatusImage":"","Title":"{createdAt}","Footnote":"{modifiedBy}","PreserveIconStackSpacing":false,"StatusText":"{PAN_Number}","Subhead":"{createdBy}","SubstatusText":"{user}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_Comments_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_Comments_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Create.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Create.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_Details_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"PAN_Number","_Name":"PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty","Value":"def"},{"Caption":"SBG","_Name":"SBG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SBU","_Name":"SBU","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BUORPurchasing_Group","_Name":"BUORPurchasing_Group","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Plant_Code","_Name":"Plant_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_Description","_Name":"Project_Description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PR_NumberBKTsBKT","_Name":"PR_NumberBKTsBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Subject_of_ProposalOROrder","_Name":"Subject_of_ProposalOROrder","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Previous_PAN_References","_Name":"Previous_PAN_References","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Split_OrderORNo_of_vendors","_Name":"Split_OrderORNo_of_vendors","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SOP_Type","_Name":"SOP_Type","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Type_OR_Document_tyFuuidpe","_Name":"Order_Type_OR_Document_tyFuuidpe","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Asset_Type","_Name":"Asset_Type","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Nature_of_Transaction","_Name":"Nature_of_Transaction","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Location_OR_Plant","_Name":"Order_Location_OR_Plant","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Base_line_spend","_Name":"Base_line_spend","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_CurrencyORBase_Currency","_Name":"Project_CurrencyORBase_Currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_CurrencyORBid_currency","_Name":"Order_CurrencyORBid_currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Final_proposed_Value","_Name":"Final_proposed_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Savings_achieved_btw_initial_and_final_quote","_Name":"Savings_achieved_btw_initial_and_final_quote","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Savings_against_base_line_spend_of_RFP","_Name":"Savings_against_base_line_spend_of_RFP","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Vendors_Shortlisted_for_RFP","_Name":"Number_of_Vendors_Shortlisted_for_RFP","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Vendors_Technically_Qualified","_Name":"Number_of_Vendors_Technically_Qualified","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Required_at_Site_Date","_Name":"Required_at_Site_Date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"RFP_Number","_Name":"RFP_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"RFP_Publish_Date","_Name":"RFP_Publish_Date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Time_Taken_for_FinalizationDASHIn_DAYS","_Name":"Time_Taken_for_FinalizationDASHIn_DAYS","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"statusInd","KeyboardType":"Number","_Name":"statusInd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"created_by","_Name":"created_by","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"task_id","_Name":"task_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status_a","_Name":"status_a","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"switch_control","Caption":"switch_control","Value":false,"_Type":"Control.Type.FormCell.Switch"},{"Caption":"ProjectId","_Name":"ProjectId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"number_of_vendors_invited","_Name":"number_of_vendors_invited","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"total_levels_of_approval","_Name":"total_levels_of_approval","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Current_level_of_approval","_Name":"Current_level_of_approval","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sap_workitem_id","_Name":"Sap_workitem_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Comments","_Name":"Comments","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"submitted_by","_Name":"submitted_by","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"submitted_date","_Name":"submitted_date","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.page":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_Comments_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","Value":"{PAN_Number}"},{"Caption":"user","_Name":"user","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Comments","_Name":"Comments","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_CreatePAN_Comments_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.page":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_TYPE_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","Value":"{PAN_Number}"},{"Caption":"typeNo","_Name":"typeNo","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"required","_Name":"required","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"submittedOn","_Name":"submittedOn","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"receivedOn","_Name":"receivedOn","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"timeTakenForApproval","_Name":"timeTakenForApproval","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_CreatePAN_TYPE_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.page":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.page ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_WEB_EVENT_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","Value":"{PAN_Number}"},{"Caption":"eventNo","_Name":"eventNo","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"number","_Name":"number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date","_Name":"date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"numberOfVendorsParticipated","_Name":"numberOfVendorsParticipated","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"l1AmountObtained","_Name":"l1AmountObtained","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_CreatePAN_WEB_EVENT_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_WORKFLOW_HISTORY_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","Value":"{PAN_Number}"},{"Caption":"Employee_ID","_Name":"Employee_ID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"level","_Name":"level","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Approved_by","_Name":"Approved_by","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Employee_Name","_Name":"Employee_Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Title","_Name":"Title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Notification_Status","_Name":"Notification_Status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Result","_Name":"Result","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Begin_DateAND_Time","_Name":"Begin_DateAND_Time","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"End_DateAND_Time","_Name":"End_DateAND_Time","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Days_Taken","_Name":"Days_Taken","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Remarks","_Name":"Remarks","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.page":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.page ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_attachments_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","Value":"{PAN_Number}"},{"AttachmentTitle":"content","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"content","_Type":"Control.Type.FormCell.Attachment"},{"Caption":"mediaType","_Name":"mediaType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","KeyboardType":"Number","_Name":"size","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_CreatePAN_attachments_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.page":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.page ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_vendor_data_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","Value":"{PAN_Number}"},{"Caption":"Awarded_Vendor","_Name":"Awarded_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Name","_Name":"Vendor_Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Location","_Name":"Vendor_Location","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technically_Approved","_Name":"Technically_Approved","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Client_Approved","_Name":"Client_Approved","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Original_quote","_Name":"Original_quote","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Final_Quote","_Name":"Final_Quote","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_amount_OR_Split_order_amount","_Name":"Order_amount_OR_Split_order_amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Discount_Amount","_Name":"Discount_Amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Discount_percentage","_Name":"Discount_percentage","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Rank","_Name":"Rank","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Proposed_Vendor_Name","_Name":"Proposed_Vendor_Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier_Origin_State","_Name":"Supplier_Origin_State","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Destination_State_BKTShipDASHto_LocationBKT","_Name":"Destination_State_BKTShipDASHto_LocationBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_GST_Number","_Name":"Vendor_GST_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_CE_Score","_Name":"Vendor_CE_Score","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_CE_Date","Caption":"Vendor_CE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_PE_Score","_Name":"Vendor_PE_Score","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_PE_Date","_Name":"Vendor_PE_Date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH1","_Name":"Vendor_Contact_PersonDASH1","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH2","_Name":"Vendor_Contact_PersonDASH2","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technical_Committee_who_cleared_the_proposal","_Name":"Technical_Committee_who_cleared_the_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Committee_who_cleared_the_proposal","_Name":"Commercial_Committee_who_cleared_the_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_References_to_be_displayed_in_Order","_Name":"Vendor_References_to_be_displayed_in_Order","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Shortlisted_Vendors_Response_summary","_Name":"Shortlisted_Vendors_Response_summary","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Project_CurrencyBKT","_Name":"Order_Value_BKTIn_Project_CurrencyBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Bid_CurrencyBKT","_Name":"Order_Value_BKTIn_Bid_CurrencyBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Date","_Name":"Vendor_Final_Quotation_Date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Amount","_Name":"Vendor_Final_Quotation_Amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_CurrencyORBase_Currency","_Name":"Project_CurrencyORBase_Currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_CurrencyORBid_currency","_Name":"Order_CurrencyORBid_currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Incoterms","_Name":"Incoterms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Name":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Name":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Market_Scenario_and_Demand","_Name":"Market_Scenario_and_Demand","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Companys_Position_and_Market_dynamics_of_this_purchase","_Name":"Companys_Position_and_Market_dynamics_of_this_purchase","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Should_Be_Cost_estimated","_Name":"Should_Be_Cost_estimated","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Name":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price_Escalation_Agreed_if_any","_Name":"Price_Escalation_Agreed_if_any","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Name":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Transportation","_Name":"Transportation","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Logistics_Cost","_Name":"Logistics_Cost","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Delivery_Schedule","_Name":"Delivery_Schedule","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax_Details","_Name":"Tax_Details","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Additional_Remarks","_Name":"Additional_Remarks","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG","_Name":"ABG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG_Value","_Name":"ABG_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG","_Name":"CPBG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG_Value","_Name":"CPBG_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Scope_and_Responsibilities","_Name":"Scope_and_Responsibilities","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Terms","_Name":"Commercial_Terms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Compliance_Terms","_Name":"Compliance_Terms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Others","_Name":"Others","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_CreatePAN_vendor_data_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail copy.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail copy.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_Details_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_Details_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{task_id}","Subhead":"{PAN_Number}","BodyText":"","Footnote":"{SBU}","Description":"{SBG}","StatusText":"{BUORPurchasing_Group}","StatusImage":"","SubstatusImage":"","SubstatusText":"{Plant_Code}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"SBG","Value":"{SBG}"},{"KeyName":"SBU","Value":"{SBU}"},{"KeyName":"BUORPurchasing_Group","Value":"{BUORPurchasing_Group}"},{"KeyName":"Plant_Code","Value":"{Plant_Code}"},{"KeyName":"Project_Description","Value":"{Project_Description}"},{"KeyName":"PR_NumberBKTsBKT","Value":"{PR_NumberBKTsBKT}"},{"KeyName":"Subject_of_ProposalOROrder","Value":"{Subject_of_ProposalOROrder}"},{"KeyName":"Previous_PAN_References","Value":"{Previous_PAN_References}"},{"KeyName":"Split_OrderORNo_of_vendors","Value":"{Split_OrderORNo_of_vendors}"},{"KeyName":"SOP_Type","Value":"{SOP_Type}"},{"KeyName":"Order_Type_OR_Document_tyFuuidpe","Value":"{Order_Type_OR_Document_tyFuuidpe}"},{"KeyName":"Asset_Type","Value":"{Asset_Type}"},{"KeyName":"Nature_of_Transaction","Value":"{Nature_of_Transaction}"},{"KeyName":"Order_Location_OR_Plant","Value":"{Order_Location_OR_Plant}"},{"KeyName":"Base_line_spend","Value":"{Base_line_spend}"},{"KeyName":"Project_CurrencyORBase_Currency","Value":"{Project_CurrencyORBase_Currency}"},{"KeyName":"Order_CurrencyORBid_currency","Value":"{Order_CurrencyORBid_currency}"},{"KeyName":"Final_proposed_Value","Value":"{Final_proposed_Value}"},{"KeyName":"Savings_achieved_btw_initial_and_final_quote","Value":"{Savings_achieved_btw_initial_and_final_quote}"},{"KeyName":"Savings_against_base_line_spend_of_RFP","Value":"{Savings_against_base_line_spend_of_RFP}"},{"KeyName":"Number_of_Vendors_Shortlisted_for_RFP","Value":"{Number_of_Vendors_Shortlisted_for_RFP}"},{"KeyName":"Number_of_Vendors_Technically_Qualified","Value":"{Number_of_Vendors_Technically_Qualified}"},{"KeyName":"Required_at_Site_Date","Value":"{Required_at_Site_Date}"},{"KeyName":"RFP_Number","Value":"{RFP_Number}"},{"KeyName":"RFP_Publish_Date","Value":"{RFP_Publish_Date}"},{"KeyName":"Time_Taken_for_FinalizationDASHIn_DAYS","Value":"{Time_Taken_for_FinalizationDASHIn_DAYS}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"statusInd","Value":"{statusInd}"},{"KeyName":"created_by","Value":"{created_by}"},{"KeyName":"task_id","Value":"{task_id}"},{"KeyName":"type","Value":"{type}"},{"KeyName":"status_a","Value":"{status_a}"},{"KeyName":"switch_control","Value":"{switch_control}"},{"KeyName":"ProjectId","Value":"{ProjectId}"},{"KeyName":"number_of_vendors_invited","Value":"{number_of_vendors_invited}"},{"KeyName":"total_levels_of_approval","Value":"{total_levels_of_approval}"},{"KeyName":"Current_level_of_approval","Value":"{Current_level_of_approval}"},{"KeyName":"Sap_workitem_id","Value":"{Sap_workitem_id}"},{"KeyName":"Comments","Value":"{Comments}"},{"KeyName":"submitted_by","Value":"{submitted_by}"},{"KeyName":"submitted_date","Value":"{submitted_date}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"tab1totab2","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{eventNo}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{idd}","Footnote":"{number}","PreserveIconStackSpacing":false,"StatusText":"{date}","Subhead":"{PAN_Number}","SubstatusText":"{numberOfVendorsParticipated}","OnPress":"/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/tab1totab2","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"tab1totab3","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{typeNo}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{idd}","Footnote":"{required}","PreserveIconStackSpacing":false,"StatusText":"{submittedOn}","Subhead":"{PAN_Number}","SubstatusText":"{receivedOn}","OnPress":"/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/tab1totab3","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"tab1toWORKFLOW_HISTORY","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PAN_Number}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{Title}","Footnote":"{Employee_ID}","PreserveIconStackSpacing":false,"StatusText":"{level}","Subhead":"{idd}","SubstatusText":"{Approved_by}","OnPress":"/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/tab1toWORKFLOW_HISTORY","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"tab1topdf","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{createdBy}","AvatarStack":{"Avatars":[{"Image":"/mypanmdk/Services/mypan.service/{@odata.readLink}/content"}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{fileName}","Footnote":"{modifiedAt}","PreserveIconStackSpacing":false,"StatusText":"{modifiedBy}","Subhead":"{createdAt}","SubstatusText":"{PAN_Number}","OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/tab1topdf","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"tab1tovendor_data","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PAN_Number}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{Vendor_Name}","Footnote":"{Awarded_Vendor}","PreserveIconStackSpacing":false,"StatusText":"{Vendor_Location}","Subhead":"{Proposed_Vendor_Code}","SubstatusText":"{Technically_Approved}","OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/tab1tovendor_data","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"tab1tocom","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{modifiedAt}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{createdAt}","Footnote":"{modifiedBy}","PreserveIconStackSpacing":false,"StatusText":"{PAN_Number}","Subhead":"{createdBy}","SubstatusText":"{user}","OnPress":"/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/tab1tocom","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["PAN_WEB_EVENT_APR","PAN_TYPE_APR","PAN_WORKFLOW_HISTORY_APR","PAN_attachments_APR","PAN_vendor_data_APR","PAN_Comments_APR"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_Details_APR","QueryOptions":"$expand=tab1tovendor_data&$filter=PAN_Number eq '{PAN_Number}'"},"Controls":[{"DataSubscriptions":["PAN_WEB_EVENT_APR","PAN_TYPE_APR","PAN_WORKFLOW_HISTORY_APR","PAN_attachments_APR","PAN_vendor_data_APR","PAN_Comments_APR"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"{PAN_Number}","Footnote":"{SBU}","Description":"{SBG}","StatusText":"{BUORPurchasing_Group}","SubstatusText":"{Plant_Code}","HeadlineText":"{task_id}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{PAN_Number}","_Name":"KeyValue0","KeyName":"PAN_Number","Visible":true},{"Value":"{SBG}","_Name":"KeyValue1","KeyName":"SBG","Visible":true},{"Value":"{SBU}","_Name":"KeyValue2","KeyName":"SBU","Visible":true},{"Value":"{BUORPurchasing_Group}","_Name":"KeyValue3","KeyName":"BUORPurchasing_Group","Visible":true},{"Value":"{Plant_Code}","_Name":"KeyValue4","KeyName":"Plant_Code","Visible":true},{"Value":"{Project_Description}","_Name":"KeyValue5","KeyName":"Project_Description","Visible":true},{"Value":"{PR_NumberBKTsBKT}","_Name":"KeyValue6","KeyName":"PR_NumberBKTsBKT","Visible":true},{"Value":"{Subject_of_ProposalOROrder}","_Name":"KeyValue7","KeyName":"Subject_of_ProposalOROrder","Visible":true},{"Value":"{Previous_PAN_References}","_Name":"KeyValue8","KeyName":"Previous_PAN_References","Visible":true},{"Value":"{Split_OrderORNo_of_vendors}","_Name":"KeyValue9","KeyName":"Split_OrderORNo_of_vendors","Visible":true},{"Value":"{SOP_Type}","_Name":"KeyValue10","KeyName":"SOP_Type","Visible":true},{"Value":"{Order_Type_OR_Document_tyFuuidpe}","_Name":"KeyValue11","KeyName":"Order_Type_OR_Document_tyFuuidpe","Visible":true},{"Value":"{Asset_Type}","_Name":"KeyValue12","KeyName":"Asset_Type","Visible":true},{"Value":"{Nature_of_Transaction}","_Name":"KeyValue13","KeyName":"Nature_of_Transaction","Visible":true},{"Value":"{Order_Location_OR_Plant}","_Name":"KeyValue14","KeyName":"Order_Location_OR_Plant","Visible":true},{"Value":"{Base_line_spend}","_Name":"KeyValue15","KeyName":"Base_line_spend","Visible":true},{"Value":"{Project_CurrencyORBase_Currency}","_Name":"KeyValue16","KeyName":"Project_CurrencyORBase_Currency","Visible":true},{"Value":"{Order_CurrencyORBid_currency}","_Name":"KeyValue17","KeyName":"Order_CurrencyORBid_currency","Visible":true},{"Value":"{Final_proposed_Value}","_Name":"KeyValue18","KeyName":"Final_proposed_Value","Visible":true},{"Value":"{Savings_achieved_btw_initial_and_final_quote}","_Name":"KeyValue19","KeyName":"Savings_achieved_btw_initial_and_final_quote","Visible":true},{"Value":"{Savings_against_base_line_spend_of_RFP}","_Name":"KeyValue20","KeyName":"Savings_against_base_line_spend_of_RFP","Visible":true},{"Value":"{Number_of_Vendors_Shortlisted_for_RFP}","_Name":"KeyValue21","KeyName":"Number_of_Vendors_Shortlisted_for_RFP","Visible":true},{"Value":"{Number_of_Vendors_Technically_Qualified}","_Name":"KeyValue22","KeyName":"Number_of_Vendors_Technically_Qualified","Visible":true},{"Value":"{Required_at_Site_Date}","_Name":"KeyValue23","KeyName":"Required_at_Site_Date","Visible":true},{"Value":"{RFP_Number}","_Name":"KeyValue24","KeyName":"RFP_Number","Visible":true},{"Value":"{RFP_Publish_Date}","_Name":"KeyValue25","KeyName":"RFP_Publish_Date","Visible":true},{"Value":"{Time_Taken_for_FinalizationDASHIn_DAYS}","_Name":"KeyValue26","KeyName":"Time_Taken_for_FinalizationDASHIn_DAYS","Visible":true},{"Value":"{status}","_Name":"KeyValue27","KeyName":"status","Visible":true},{"Value":"{statusInd}","_Name":"KeyValue28","KeyName":"statusInd","Visible":true},{"Value":"{created_by}","_Name":"KeyValue29","KeyName":"created_by","Visible":true},{"Value":"{task_id}","_Name":"KeyValue30","KeyName":"task_id","Visible":true},{"Value":"{type}","_Name":"KeyValue31","KeyName":"type","Visible":true},{"Value":"{status_a}","_Name":"KeyValue32","KeyName":"status_a","Visible":true},{"Value":"{switch_control}","_Name":"KeyValue33","KeyName":"switch_control","Visible":true},{"Value":"{ProjectId}","_Name":"KeyValue34","KeyName":"ProjectId","Visible":true},{"Value":"{number_of_vendors_invited}","_Name":"KeyValue35","KeyName":"number_of_vendors_invited","Visible":true},{"Value":"{total_levels_of_approval}","_Name":"KeyValue36","KeyName":"total_levels_of_approval","Visible":true},{"Value":"{Current_level_of_approval}","_Name":"KeyValue37","KeyName":"Current_level_of_approval","Visible":true},{"Value":"{Sap_workitem_id}","_Name":"KeyValue38","KeyName":"Sap_workitem_id","Visible":true},{"Value":"{Comments}","_Name":"KeyValue39","KeyName":"Comments","Visible":true},{"Value":"{submitted_by}","_Name":"KeyValue40","KeyName":"submitted_by","Visible":true},{"Value":"{submitted_date}","_Name":"KeyValue41","KeyName":"submitted_date","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"NumberOfColumns":2}},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"tab1totab2"},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"{@odata.readLink}/tab1totab2","Service":"/mypanmdk/Services/mypan.service"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{idd}","Subhead":"{PAN_Number}","Footnote":"{number}","Description":"{eventNo}","StatusText":"{date}","SubstatusText":"{numberOfVendorsParticipated}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Detail.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]}},"HighlightSelectedItem":false},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader1","AccessoryType":"None","UseTopPadding":true,"Caption":"tab1totab3"},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"{@odata.readLink}/tab1totab3","Service":"/mypanmdk/Services/mypan.service"},"_Name":"SectionObjectTable1","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{idd}","Subhead":"{PAN_Number}","Footnote":"{required}","Description":"{typeNo}","StatusText":"{submittedOn}","SubstatusText":"{receivedOn}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Detail.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]}},"HighlightSelectedItem":false},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader2","AccessoryType":"None","UseTopPadding":true,"Caption":"tab1toWORKFLOW_HISTORY"},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"{@odata.readLink}/tab1toWORKFLOW_HISTORY","Service":"/mypanmdk/Services/mypan.service"},"_Name":"SectionObjectTable2","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{Title}","Subhead":"{idd}","Footnote":"{Employee_ID}","Description":"{PAN_Number}","StatusText":"{level}","SubstatusText":"{Approved_by}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Detail.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]}},"HighlightSelectedItem":false},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader3","AccessoryType":"None","UseTopPadding":true,"Caption":"tab1topdf"},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"{@odata.readLink}/tab1topdf","Service":"/mypanmdk/Services/mypan.service"},"_Name":"SectionObjectTable3","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{fileName}","Subhead":"{createdAt}","Footnote":"{modifiedAt}","Description":"{createdBy}","StatusText":"{modifiedBy}","SubstatusText":"{PAN_Number}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"/mypanmdk/Services/mypan.service/{@odata.readLink}/content"}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Detail.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]}},"HighlightSelectedItem":false},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader4","AccessoryType":"None","UseTopPadding":true,"Caption":"tab1tovendor_data"},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"{@odata.readLink}/tab1tovendor_data","Service":"/mypanmdk/Services/mypan.service"},"_Name":"SectionObjectTable4","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{Vendor_Name}","Subhead":"{Proposed_Vendor_Code}","Footnote":"{Awarded_Vendor}","Description":"{PAN_Number}","StatusText":"{Vendor_Location}","SubstatusText":"{Technically_Approved}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Detail.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]}},"HighlightSelectedItem":false},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader5","AccessoryType":"None","UseTopPadding":true,"Caption":"tab1tocom"},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"{@odata.readLink}/tab1tocom","Service":"/mypanmdk/Services/mypan.service"},"_Name":"SectionObjectTable5","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{createdAt}","Subhead":"{createdBy}","Footnote":"{modifiedBy}","Description":"{modifiedAt}","StatusText":"{PAN_Number}","SubstatusText":"{user}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Detail.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]}},"HighlightSelectedItem":false}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"PAN_Details_APR_Detail","Caption":"$(L,PAN_Details_APR_Detail)","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Edit.action"},{"_Name":"ActionBarItem1","Caption":"More","Position":"Right","IsIconCircular":false,"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DetailPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Edit.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Edit.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_Details_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_Details_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"PAN_Number","_Name":"PAN_Number","Value":"{PAN_Number}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"SBG","_Name":"SBG","Value":"{SBG}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SBU","_Name":"SBU","Value":"{SBU}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BUORPurchasing_Group","_Name":"BUORPurchasing_Group","Value":"{BUORPurchasing_Group}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Plant_Code","_Name":"Plant_Code","Value":"{Plant_Code}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_Description","_Name":"Project_Description","Value":"{Project_Description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PR_NumberBKTsBKT","_Name":"PR_NumberBKTsBKT","Value":"{PR_NumberBKTsBKT}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Subject_of_ProposalOROrder","_Name":"Subject_of_ProposalOROrder","Value":"{Subject_of_ProposalOROrder}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Previous_PAN_References","_Name":"Previous_PAN_References","Value":"{Previous_PAN_References}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Split_OrderORNo_of_vendors","_Name":"Split_OrderORNo_of_vendors","Value":"{Split_OrderORNo_of_vendors}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SOP_Type","_Name":"SOP_Type","Value":"{SOP_Type}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Type_OR_Document_tyFuuidpe","_Name":"Order_Type_OR_Document_tyFuuidpe","Value":"{Order_Type_OR_Document_tyFuuidpe}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Asset_Type","_Name":"Asset_Type","Value":"{Asset_Type}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Nature_of_Transaction","_Name":"Nature_of_Transaction","Value":"{Nature_of_Transaction}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Location_OR_Plant","_Name":"Order_Location_OR_Plant","Value":"{Order_Location_OR_Plant}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Base_line_spend","_Name":"Base_line_spend","Value":"{Base_line_spend}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_CurrencyORBase_Currency","_Name":"Project_CurrencyORBase_Currency","Value":"{Project_CurrencyORBase_Currency}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_CurrencyORBid_currency","_Name":"Order_CurrencyORBid_currency","Value":"{Order_CurrencyORBid_currency}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Final_proposed_Value","_Name":"Final_proposed_Value","Value":"{Final_proposed_Value}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Savings_achieved_btw_initial_and_final_quote","_Name":"Savings_achieved_btw_initial_and_final_quote","Value":"{Savings_achieved_btw_initial_and_final_quote}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Savings_against_base_line_spend_of_RFP","_Name":"Savings_against_base_line_spend_of_RFP","Value":"{Savings_against_base_line_spend_of_RFP}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Vendors_Shortlisted_for_RFP","_Name":"Number_of_Vendors_Shortlisted_for_RFP","Value":"{Number_of_Vendors_Shortlisted_for_RFP}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Vendors_Technically_Qualified","_Name":"Number_of_Vendors_Technically_Qualified","Value":"{Number_of_Vendors_Technically_Qualified}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Required_at_Site_Date","_Name":"Required_at_Site_Date","Value":"{Required_at_Site_Date}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"RFP_Number","_Name":"RFP_Number","Value":"{RFP_Number}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"RFP_Publish_Date","_Name":"RFP_Publish_Date","Value":"{RFP_Publish_Date}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Time_Taken_for_FinalizationDASHIn_DAYS","_Name":"Time_Taken_for_FinalizationDASHIn_DAYS","Value":"{Time_Taken_for_FinalizationDASHIn_DAYS}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"statusInd","_Name":"statusInd","Value":"{statusInd}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"created_by","_Name":"created_by","Value":"{created_by}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"task_id","_Name":"task_id","Value":"{task_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"type","_Name":"type","Value":"{type}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status_a","_Name":"status_a","Value":"{status_a}","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"switch_control","Caption":"switch_control","Value":"{switch_control}","_Type":"Control.Type.FormCell.Switch"},{"Caption":"ProjectId","_Name":"ProjectId","Value":"{ProjectId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"number_of_vendors_invited","_Name":"number_of_vendors_invited","Value":"{number_of_vendors_invited}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"total_levels_of_approval","_Name":"total_levels_of_approval","Value":"{total_levels_of_approval}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Current_level_of_approval","_Name":"Current_level_of_approval","Value":"{Current_level_of_approval}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sap_workitem_id","_Name":"Sap_workitem_id","Value":"{Sap_workitem_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Comments","_Name":"Comments","Value":"{Comments}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"submitted_by","_Name":"submitted_by","Value":"{submitted_by}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"submitted_date","_Name":"submitted_date","Value":"{submitted_date}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List copy.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List copy.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_Details_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{SBG}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Detail.action","StatusImage":"","Title":"{task_id}","Footnote":"{SBU}","PreserveIconStackSpacing":false,"StatusText":"{BUORPurchasing_Group}","Subhead":"{PAN_Number}","SubstatusText":"{Plant_Code}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_Details_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader0","AccessoryType":"None","UseTopPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_Details_APR","QueryOptions":"$filter=PAN_Number eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{task_id}","Subhead":"{PAN_Number}","Footnote":"{SBU}","Description":"{SBG}","StatusText":"{BUORPurchasing_Group}","SubstatusText":"{Plant_Code}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Detail.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"PAN_Details_APR_List","Caption":"$(L,PAN_Details_APR)","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Add","Position":"Right","IsIconCircular":false,"OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Create.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Create.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_PAYMENT_TERM_DETAILS_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"PAN_Number","_Name":"PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"iddd","_Name":"iddd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"slNo","KeyboardType":"Number","_Name":"slNo","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Payment_methord","_Name":"Payment_methord","_Type":"Control.Type.FormCell.SimpleProperty","Value":"RTGS payment"},{"Caption":"Percentage","_Name":"Percentage","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Description","_Name":"Description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Due_date","_Name":"Due_date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Mandatory_Documents_OR_Submissions","_Name":"Mandatory_Documents_OR_Submissions","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To_be_certified_in_Company","_Name":"To_be_certified_in_Company","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_PAYMENT_TERM_DETAILS_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Detail.page":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Detail.page ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_PAYMENT_TERM_DETAILS_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_PAYMENT_TERM_DETAILS_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Proposed_Vendor_Code}","Subhead":"{PAN_Number}","BodyText":"","Footnote":"{slNo}","Description":"{iddd}","StatusText":"{Payment_methord}","StatusImage":"","SubstatusImage":"","SubstatusText":"{Percentage}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Proposed_Vendor_Code","Value":"{Proposed_Vendor_Code}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"iddd","Value":"{iddd}"},{"KeyName":"slNo","Value":"{slNo}"},{"KeyName":"Payment_methord","Value":"{Payment_methord}"},{"KeyName":"Percentage","Value":"{Percentage}"},{"KeyName":"Description","Value":"{Description}"},{"KeyName":"Due_date","Value":"{Due_date}"},{"KeyName":"Mandatory_Documents_OR_Submissions","Value":"{Mandatory_Documents_OR_Submissions}"},{"KeyName":"To_be_certified_in_Company","Value":"{To_be_certified_in_Company}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_PAYMENT_TERM_DETAILS_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Edit.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Edit.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_PAYMENT_TERM_DETAILS_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_PAYMENT_TERM_DETAILS_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{Proposed_Vendor_Code}","_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"PAN_Number","_Name":"PAN_Number","Value":"{PAN_Number}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"iddd","_Name":"iddd","Value":"{iddd}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"slNo","_Name":"slNo","Value":"{slNo}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Payment_methord","_Name":"Payment_methord","Value":"{Payment_methord}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Percentage","_Name":"Percentage","Value":"{Percentage}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Description","_Name":"Description","Value":"{Description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Due_date","_Name":"Due_date","Value":"{Due_date}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Mandatory_Documents_OR_Submissions","_Name":"Mandatory_Documents_OR_Submissions","Value":"{Mandatory_Documents_OR_Submissions}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To_be_certified_in_Company","_Name":"To_be_certified_in_Company","Value":"{To_be_certified_in_Company}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_PAYMENT_TERM_DETAILS_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_List.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_List.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_PAYMENT_TERM_DETAILS_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{iddd}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Detail.action","StatusImage":"","Title":"{Proposed_Vendor_Code}","Footnote":"{slNo}","PreserveIconStackSpacing":false,"StatusText":"{Payment_methord}","Subhead":"{PAN_Number}","SubstatusText":"{Percentage}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_PAYMENT_TERM_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_PAYMENT_TERM_DETAILS_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Create.page":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Create.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_PRICE_DETAILS_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"PAN_Number","_Name":"PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item_Code","_Name":"Item_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HSN_OR_SAC_Code","_Name":"HSN_OR_SAC_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"extendedPrice","_Name":"extendedPrice","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item_Short_Description","_Name":"Item_Short_Description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"UOM","_Name":"UOM","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Quantity","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Unit_Price","_Name":"Unit_Price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Amount","_Name":"Amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Indian_Tax_PER","_Name":"Indian_Tax_PER","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Quantity_Over_Delivery_Tolerance","_Name":"Quantity_Over_Delivery_Tolerance","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_PRICE_DETAILS_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Detail.page":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Detail.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_PRICE_DETAILS_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_PRICE_DETAILS_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Proposed_Vendor_Code}","Subhead":"{PAN_Number}","BodyText":"","Footnote":"{HSN_OR_SAC_Code}","Description":"{Item_Code}","StatusText":"{extendedPrice}","StatusImage":"","SubstatusImage":"","SubstatusText":"{Item_Short_Description}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Proposed_Vendor_Code","Value":"{Proposed_Vendor_Code}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"Item_Code","Value":"{Item_Code}"},{"KeyName":"HSN_OR_SAC_Code","Value":"{HSN_OR_SAC_Code}"},{"KeyName":"extendedPrice","Value":"{extendedPrice}"},{"KeyName":"Item_Short_Description","Value":"{Item_Short_Description}"},{"KeyName":"UOM","Value":"{UOM}"},{"KeyName":"Quantity","Value":"{Quantity}"},{"KeyName":"Unit_Price","Value":"{Unit_Price}"},{"KeyName":"Amount","Value":"{Amount}"},{"KeyName":"Indian_Tax_PER","Value":"{Indian_Tax_PER}"},{"KeyName":"Quantity_Over_Delivery_Tolerance","Value":"{Quantity_Over_Delivery_Tolerance}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_PRICE_DETAILS_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Edit.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Edit.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_PRICE_DETAILS_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_PRICE_DETAILS_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{Proposed_Vendor_Code}","_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"PAN_Number","_Name":"PAN_Number","Value":"{PAN_Number}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item_Code","_Name":"Item_Code","Value":"{Item_Code}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HSN_OR_SAC_Code","_Name":"HSN_OR_SAC_Code","Value":"{HSN_OR_SAC_Code}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"extendedPrice","_Name":"extendedPrice","Value":"{extendedPrice}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item_Short_Description","_Name":"Item_Short_Description","Value":"{Item_Short_Description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"UOM","_Name":"UOM","Value":"{UOM}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Quantity","_Name":"Quantity","Value":"{Quantity}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Unit_Price","_Name":"Unit_Price","Value":"{Unit_Price}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Amount","_Name":"Amount","Value":"{Amount}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Indian_Tax_PER","_Name":"Indian_Tax_PER","Value":"{Indian_Tax_PER}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Quantity_Over_Delivery_Tolerance","_Name":"Quantity_Over_Delivery_Tolerance","Value":"{Quantity_Over_Delivery_Tolerance}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_PRICE_DETAILS_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_List.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_List.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_PRICE_DETAILS_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Item_Code}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Detail.action","StatusImage":"","Title":"{Proposed_Vendor_Code}","Footnote":"{HSN_OR_SAC_Code}","PreserveIconStackSpacing":false,"StatusText":"{extendedPrice}","Subhead":"{PAN_Number}","SubstatusText":"{Item_Short_Description}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_PRICE_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_PRICE_DETAILS_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Create.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Create.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_Payment_Method_Drop_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Payment_method","_Name":"Payment_method","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Payment_Method_Drop_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Detail.page":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Detail.page ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_Payment_Method_Drop_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_Payment_Method_Drop_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{id}","Subhead":"{Payment_method}","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Payment_method","Value":"{Payment_method}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_Payment_Method_Drop_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Edit.page":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Edit.page ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_Payment_Method_Drop_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_Payment_Method_Drop_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Payment_method","_Name":"Payment_method","Value":"{Payment_method}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_Payment_Method_Drop_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_List.page":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_List.page ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_Payment_Method_Drop_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Detail.action","StatusImage":"","Title":"{id}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{Payment_method}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_Payment_Method_Drop_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_Payment_Method_Drop_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Create.page":
/*!**************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Create.page ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_TYPE_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"typeNo","_Name":"typeNo","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"required","_Name":"required","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"submittedOn","_Name":"submittedOn","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"receivedOn","_Name":"receivedOn","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"timeTakenForApproval","_Name":"timeTakenForApproval","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_TYPE_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Detail.page":
/*!**************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Detail.page ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_TYPE_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_TYPE_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{idd}","Subhead":"{PAN_Number}","BodyText":"","Footnote":"{required}","Description":"{typeNo}","StatusText":"{submittedOn}","StatusImage":"","SubstatusImage":"","SubstatusText":"{receivedOn}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"idd","Value":"{idd}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"typeNo","Value":"{typeNo}"},{"KeyName":"required","Value":"{required}"},{"KeyName":"submittedOn","Value":"{submittedOn}"},{"KeyName":"receivedOn","Value":"{receivedOn}"},{"KeyName":"timeTakenForApproval","Value":"{timeTakenForApproval}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_TYPE_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Edit.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Edit.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_TYPE_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_TYPE_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","Value":"{idd}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{PAN_Number}","_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"typeNo","_Name":"typeNo","Value":"{typeNo}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"required","_Name":"required","Value":"{required}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"submittedOn","_Name":"submittedOn","Value":"{submittedOn}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"receivedOn","_Name":"receivedOn","Value":"{receivedOn}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"timeTakenForApproval","_Name":"timeTakenForApproval","Value":"{timeTakenForApproval}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_TYPE_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_List.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_List.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_TYPE_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{typeNo}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Detail.action","StatusImage":"","Title":"{idd}","Footnote":"{required}","PreserveIconStackSpacing":false,"StatusText":"{submittedOn}","Subhead":"{PAN_Number}","SubstatusText":"{receivedOn}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_TYPE_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_TYPE_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Create.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Create.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_WEB_EVENT_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"eventNo","_Name":"eventNo","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"number","_Name":"number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date","_Name":"date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"numberOfVendorsParticipated","_Name":"numberOfVendorsParticipated","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"l1AmountObtained","_Name":"l1AmountObtained","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_WEB_EVENT_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Detail.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Detail.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_WEB_EVENT_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_WEB_EVENT_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{idd}","Subhead":"{PAN_Number}","BodyText":"","Footnote":"{number}","Description":"{eventNo}","StatusText":"{date}","StatusImage":"","SubstatusImage":"","SubstatusText":"{numberOfVendorsParticipated}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"idd","Value":"{idd}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"eventNo","Value":"{eventNo}"},{"KeyName":"number","Value":"{number}"},{"KeyName":"date","Value":"{date}"},{"KeyName":"numberOfVendorsParticipated","Value":"{numberOfVendorsParticipated}"},{"KeyName":"l1AmountObtained","Value":"{l1AmountObtained}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_WEB_EVENT_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Edit.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Edit.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_WEB_EVENT_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_WEB_EVENT_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","Value":"{idd}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{PAN_Number}","_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"eventNo","_Name":"eventNo","Value":"{eventNo}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"number","_Name":"number","Value":"{number}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date","_Name":"date","Value":"{date}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"numberOfVendorsParticipated","_Name":"numberOfVendorsParticipated","Value":"{numberOfVendorsParticipated}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"l1AmountObtained","_Name":"l1AmountObtained","Value":"{l1AmountObtained}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_WEB_EVENT_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_List.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_List.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_WEB_EVENT_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{eventNo}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Detail.action","StatusImage":"","Title":"{idd}","Footnote":"{number}","PreserveIconStackSpacing":false,"StatusText":"{date}","Subhead":"{PAN_Number}","SubstatusText":"{numberOfVendorsParticipated}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_WEB_EVENT_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_WEB_EVENT_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Create.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Create.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_WORKFLOW_HISTORY_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Employee_ID","_Name":"Employee_ID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"level","_Name":"level","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Approved_by","_Name":"Approved_by","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Employee_Name","_Name":"Employee_Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Title","_Name":"Title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Notification_Status","_Name":"Notification_Status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Result","_Name":"Result","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Begin_DateAND_Time","_Name":"Begin_DateAND_Time","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"End_DateAND_Time","_Name":"End_DateAND_Time","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Days_Taken","_Name":"Days_Taken","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Remarks","_Name":"Remarks","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_WORKFLOW_HISTORY_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Detail.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Detail.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_WORKFLOW_HISTORY_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_WORKFLOW_HISTORY_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Title}","Subhead":"{idd}","BodyText":"","Footnote":"{Employee_ID}","Description":"{PAN_Number}","StatusText":"{level}","StatusImage":"","SubstatusImage":"","SubstatusText":"{Approved_by}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"idd","Value":"{idd}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"Employee_ID","Value":"{Employee_ID}"},{"KeyName":"level","Value":"{level}"},{"KeyName":"Approved_by","Value":"{Approved_by}"},{"KeyName":"Employee_Name","Value":"{Employee_Name}"},{"KeyName":"Title","Value":"{Title}"},{"KeyName":"Notification_Status","Value":"{Notification_Status}"},{"KeyName":"Result","Value":"{Result}"},{"KeyName":"Begin_DateAND_Time","Value":"{Begin_DateAND_Time}"},{"KeyName":"End_DateAND_Time","Value":"{End_DateAND_Time}"},{"KeyName":"Days_Taken","Value":"{Days_Taken}"},{"KeyName":"Remarks","Value":"{Remarks}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_WORKFLOW_HISTORY_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Edit.page":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Edit.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_WORKFLOW_HISTORY_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_WORKFLOW_HISTORY_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"idd","_Name":"idd","Value":"{idd}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{PAN_Number}","_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"Employee_ID","_Name":"Employee_ID","Value":"{Employee_ID}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"level","_Name":"level","Value":"{level}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Approved_by","_Name":"Approved_by","Value":"{Approved_by}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Employee_Name","_Name":"Employee_Name","Value":"{Employee_Name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Title","_Name":"Title","Value":"{Title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Notification_Status","_Name":"Notification_Status","Value":"{Notification_Status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Result","_Name":"Result","Value":"{Result}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Begin_DateAND_Time","_Name":"Begin_DateAND_Time","Value":"{Begin_DateAND_Time}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"End_DateAND_Time","_Name":"End_DateAND_Time","Value":"{End_DateAND_Time}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Days_Taken","_Name":"Days_Taken","Value":"{Days_Taken}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Remarks","_Name":"Remarks","Value":"{Remarks}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_WORKFLOW_HISTORY_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_List.page":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_List.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_WORKFLOW_HISTORY_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PAN_Number}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Detail.action","StatusImage":"","Title":"{Title}","Footnote":"{Employee_ID}","PreserveIconStackSpacing":false,"StatusText":"{level}","Subhead":"{idd}","SubstatusText":"{Approved_by}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_WORKFLOW_HISTORY_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_WORKFLOW_HISTORY_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Create.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Create.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.js","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_attachments_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker"},{"AttachmentTitle":"content","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"content","_Type":"Control.Type.FormCell.Attachment"},{"Caption":"mediaType","_Name":"mediaType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","KeyboardType":"Number","_Name":"size","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_attachments_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Detail.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Detail.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_attachments_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_attachments_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"/mypanmdk/Services/mypan.service/{@odata.readLink}/content","HeadlineText":"{fileName}","Subhead":"{createdAt}","BodyText":"","Footnote":"{modifiedAt}","Description":"{createdBy}","StatusText":"{modifiedBy}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PAN_Number}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Created On","Value":"{createdAt}"},{"KeyName":"Created By","Value":"{createdBy}"},{"KeyName":"Changed On","Value":"{modifiedAt}"},{"KeyName":"Changed By","Value":"{modifiedBy}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"mediaType","Value":"{mediaType}"},{"KeyName":"fileName","Value":"{fileName}"},{"KeyName":"size","Value":"{size}"},{"KeyName":"url","Value":"{url}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_attachments_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Edit.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Edit.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_attachments_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_attachments_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{PAN_Number}","_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"mediaType","_Name":"mediaType","Value":"{mediaType}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","Value":"{fileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","_Name":"size","Value":"{size}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","Value":"{url}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_attachments_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_List.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_List.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_attachments_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{createdBy}","AvatarStack":{"Avatars":[{"Image":"/mypanmdk/Services/mypan.service/{@odata.readLink}/content"}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Detail.action","StatusImage":"","Title":"{fileName}","Footnote":"{modifiedAt}","PreserveIconStackSpacing":false,"StatusText":"{modifiedBy}","Subhead":"{createdAt}","SubstatusText":"{PAN_Number}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_attachments_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_attachments_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Create.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Create.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_vendor_data_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Awarded_Vendor","_Name":"Awarded_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Name","_Name":"Vendor_Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Location","_Name":"Vendor_Location","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technically_Approved","_Name":"Technically_Approved","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Client_Approved","_Name":"Client_Approved","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Original_quote","_Name":"Original_quote","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Final_Quote","_Name":"Final_Quote","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_amount_OR_Split_order_amount","_Name":"Order_amount_OR_Split_order_amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Discount_Amount","_Name":"Discount_Amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Discount_percentage","_Name":"Discount_percentage","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Rank","_Name":"Rank","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Proposed_Vendor_Name","_Name":"Proposed_Vendor_Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier_Origin_State","_Name":"Supplier_Origin_State","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Destination_State_BKTShipDASHto_LocationBKT","_Name":"Destination_State_BKTShipDASHto_LocationBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_GST_Number","_Name":"Vendor_GST_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_CE_Score","_Name":"Vendor_CE_Score","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_CE_Date","Caption":"Vendor_CE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_PE_Score","_Name":"Vendor_PE_Score","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_PE_Date","_Name":"Vendor_PE_Date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH1","_Name":"Vendor_Contact_PersonDASH1","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH2","_Name":"Vendor_Contact_PersonDASH2","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technical_Committee_who_cleared_the_proposal","_Name":"Technical_Committee_who_cleared_the_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Committee_who_cleared_the_proposal","_Name":"Commercial_Committee_who_cleared_the_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_References_to_be_displayed_in_Order","_Name":"Vendor_References_to_be_displayed_in_Order","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Shortlisted_Vendors_Response_summary","_Name":"Shortlisted_Vendors_Response_summary","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Project_CurrencyBKT","_Name":"Order_Value_BKTIn_Project_CurrencyBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Bid_CurrencyBKT","_Name":"Order_Value_BKTIn_Bid_CurrencyBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Date","_Name":"Vendor_Final_Quotation_Date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Amount","_Name":"Vendor_Final_Quotation_Amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_CurrencyORBase_Currency","_Name":"Project_CurrencyORBase_Currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_CurrencyORBid_currency","_Name":"Order_CurrencyORBid_currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Incoterms","_Name":"Incoterms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Name":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Name":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Market_Scenario_and_Demand","_Name":"Market_Scenario_and_Demand","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Companys_Position_and_Market_dynamics_of_this_purchase","_Name":"Companys_Position_and_Market_dynamics_of_this_purchase","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Should_Be_Cost_estimated","_Name":"Should_Be_Cost_estimated","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Name":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price_Escalation_Agreed_if_any","_Name":"Price_Escalation_Agreed_if_any","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Name":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Transportation","_Name":"Transportation","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Logistics_Cost","_Name":"Logistics_Cost","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Delivery_Schedule","_Name":"Delivery_Schedule","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax_Details","_Name":"Tax_Details","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Additional_Remarks","_Name":"Additional_Remarks","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG","_Name":"ABG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG_Value","_Name":"ABG_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG","_Name":"CPBG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG_Value","_Name":"CPBG_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Scope_and_Responsibilities","_Name":"Scope_and_Responsibilities","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Terms","_Name":"Commercial_Terms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Compliance_Terms","_Name":"Compliance_Terms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Others","_Name":"Others","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_data_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.page":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.page ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_PAYMENT_TERM_DETAILS_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker","Value":"{Proposed_Vendor_Code}"},{"Caption":"PAN_Number","_Name":"PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"iddd","_Name":"iddd","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"slNo","KeyboardType":"Number","_Name":"slNo","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Payment_methord","_Name":"Payment_methord","_Type":"Control.Type.FormCell.SimpleProperty","Value":"RTGS payment"},{"Caption":"Percentage","_Name":"Percentage","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Description","_Name":"Description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Due_date","_Name":"Due_date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Mandatory_Documents_OR_Submissions","_Name":"Mandatory_Documents_OR_Submissions","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To_be_certified_in_Company","_Name":"To_be_certified_in_Company","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.page":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.page ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_PRICE_DETAILS_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker","Value":"{Proposed_Vendor_Code}"},{"Caption":"PAN_Number","_Name":"PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item_Code","_Name":"Item_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"HSN_OR_SAC_Code","_Name":"HSN_OR_SAC_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"extendedPrice","_Name":"extendedPrice","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item_Short_Description","_Name":"Item_Short_Description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"UOM","_Name":"UOM","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Quantity","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Unit_Price","_Name":"Unit_Price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Amount","_Name":"Amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Indian_Tax_PER","_Name":"Indian_Tax_PER","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Quantity_Over_Delivery_Tolerance","_Name":"Quantity_Over_Delivery_Tolerance","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.page":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.page ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_vendor_response_APR)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","_Name":"PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Proposed_Vendor_Name","_Name":"Proposed_Vendor_Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier_Origin_State","_Name":"Supplier_Origin_State","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Destination_State_BKTShipDASHto_LocationBKT","_Name":"Destination_State_BKTShipDASHto_LocationBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_GST_Number","_Name":"Vendor_GST_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_CE_Score","_Name":"Vendor_CE_Score","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_CE_Date","Caption":"Vendor_CE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_PE_Score","_Name":"Vendor_PE_Score","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_PE_Date","Caption":"Vendor_PE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_Contact_PersonDASH1","_Name":"Vendor_Contact_PersonDASH1","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH2","_Name":"Vendor_Contact_PersonDASH2","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technical_Committee_who_cleared_the_proposal","_Name":"Technical_Committee_who_cleared_the_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Committee_who_cleared_the_proposal","_Name":"Commercial_Committee_who_cleared_the_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_References_to_be_displayed_in_Order","_Name":"Vendor_References_to_be_displayed_in_Order","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Shortlisted_Vendors_Response_summary","_Name":"Shortlisted_Vendors_Response_summary","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Project_CurrencyBKT","_Name":"Order_Value_BKTIn_Project_CurrencyBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Bid_CurrencyBKT","_Name":"Order_Value_BKTIn_Bid_CurrencyBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Date","_Name":"Vendor_Final_Quotation_Date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Amount","_Name":"Vendor_Final_Quotation_Amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_CurrencyORBase_Currency","_Name":"Project_CurrencyORBase_Currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_CurrencyORBid_currency","_Name":"Order_CurrencyORBid_currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Incoterms","_Name":"Incoterms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Name":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Name":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Market_Scenario_and_Demand","_Name":"Market_Scenario_and_Demand","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Companys_Position_and_Market_dynamics_of_this_purchase","_Name":"Companys_Position_and_Market_dynamics_of_this_purchase","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Should_Be_Cost_estimated","_Name":"Should_Be_Cost_estimated","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Name":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price_Escalation_Agreed_if_any","_Name":"Price_Escalation_Agreed_if_any","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Name":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Transportation","_Name":"Transportation","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Logistics_Cost","_Name":"Logistics_Cost","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Delivery_Schedule","_Name":"Delivery_Schedule","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax_Details","_Name":"Tax_Details","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Additional_Remarks","_Name":"Additional_Remarks","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG","_Name":"ABG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG_Value","_Name":"ABG_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG","_Name":"CPBG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG_Value","_Name":"CPBG_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Scope_and_Responsibilities","_Name":"Scope_and_Responsibilities","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Terms","_Name":"Commercial_Terms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Compliance_Terms","_Name":"Compliance_Terms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Others","_Name":"Others","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"venrtovend_Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"venrtovend_Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker","Value":"{Proposed_Vendor_Code}"},{"Caption":"venrtovend_PAN_Number","_Name":"venrtovend_PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_data_APR_CreatePAN_vendor_response_APR","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Detail.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Detail.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_vendor_data_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_vendor_data_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Vendor_Name}","Subhead":"{Proposed_Vendor_Code}","BodyText":"","Footnote":"{Awarded_Vendor}","Description":"{PAN_Number}","StatusText":"{Vendor_Location}","StatusImage":"","SubstatusImage":"","SubstatusText":"{Technically_Approved}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Proposed_Vendor_Code","Value":"{Proposed_Vendor_Code}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"Awarded_Vendor","Value":"{Awarded_Vendor}"},{"KeyName":"Vendor_Name","Value":"{Vendor_Name}"},{"KeyName":"Vendor_Location","Value":"{Vendor_Location}"},{"KeyName":"Technically_Approved","Value":"{Technically_Approved}"},{"KeyName":"Client_Approved","Value":"{Client_Approved}"},{"KeyName":"Original_quote","Value":"{Original_quote}"},{"KeyName":"Final_Quote","Value":"{Final_Quote}"},{"KeyName":"Order_amount_OR_Split_order_amount","Value":"{Order_amount_OR_Split_order_amount}"},{"KeyName":"Discount_Amount","Value":"{Discount_Amount}"},{"KeyName":"Discount_percentage","Value":"{Discount_percentage}"},{"KeyName":"Rank","Value":"{Rank}"},{"KeyName":"Proposed_Vendor_Name","Value":"{Proposed_Vendor_Name}"},{"KeyName":"Supplier_Origin_State","Value":"{Supplier_Origin_State}"},{"KeyName":"Destination_State_BKTShipDASHto_LocationBKT","Value":"{Destination_State_BKTShipDASHto_LocationBKT}"},{"KeyName":"Vendor_GST_Number","Value":"{Vendor_GST_Number}"},{"KeyName":"Vendor_CE_Score","Value":"{Vendor_CE_Score}"},{"KeyName":"Vendor_CE_Date","Value":"{Vendor_CE_Date}"},{"KeyName":"Vendor_PE_Score","Value":"{Vendor_PE_Score}"},{"KeyName":"Vendor_PE_Date","Value":"{Vendor_PE_Date}"},{"KeyName":"Vendor_Contact_PersonDASH1","Value":"{Vendor_Contact_PersonDASH1}"},{"KeyName":"Vendor_Contact_PersonDASH2","Value":"{Vendor_Contact_PersonDASH2}"},{"KeyName":"Technical_Committee_who_cleared_the_proposal","Value":"{Technical_Committee_who_cleared_the_proposal}"},{"KeyName":"Commercial_Committee_who_cleared_the_proposal","Value":"{Commercial_Committee_who_cleared_the_proposal}"},{"KeyName":"Vendor_References_to_be_displayed_in_Order","Value":"{Vendor_References_to_be_displayed_in_Order}"},{"KeyName":"Shortlisted_Vendors_Response_summary","Value":"{Shortlisted_Vendors_Response_summary}"},{"KeyName":"Order_Value_BKTIn_Project_CurrencyBKT","Value":"{Order_Value_BKTIn_Project_CurrencyBKT}"},{"KeyName":"Order_Value_BKTIn_Bid_CurrencyBKT","Value":"{Order_Value_BKTIn_Bid_CurrencyBKT}"},{"KeyName":"Vendor_Final_Quotation_Date","Value":"{Vendor_Final_Quotation_Date}"},{"KeyName":"Vendor_Final_Quotation_Amount","Value":"{Vendor_Final_Quotation_Amount}"},{"KeyName":"Project_CurrencyORBase_Currency","Value":"{Project_CurrencyORBase_Currency}"},{"KeyName":"Order_CurrencyORBid_currency","Value":"{Order_CurrencyORBid_currency}"},{"KeyName":"Incoterms","Value":"{Incoterms}"},{"KeyName":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","Value":"{Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC}"},{"KeyName":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","Value":"{Details_of_deviated_or_better_terms_agreed_with_the_Vendor}"},{"KeyName":"Market_Scenario_and_Demand","Value":"{Market_Scenario_and_Demand}"},{"KeyName":"Companys_Position_and_Market_dynamics_of_this_purchase","Value":"{Companys_Position_and_Market_dynamics_of_this_purchase}"},{"KeyName":"Should_Be_Cost_estimated","Value":"{Should_Be_Cost_estimated}"},{"KeyName":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","Value":"{Highlights_of_this_proposal_and_Price_Justification_for_this_proposal}"},{"KeyName":"Price_Escalation_Agreed_if_any","Value":"{Price_Escalation_Agreed_if_any}"},{"KeyName":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","Value":"{Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor}"},{"KeyName":"Transportation","Value":"{Transportation}"},{"KeyName":"Logistics_Cost","Value":"{Logistics_Cost}"},{"KeyName":"Delivery_Schedule","Value":"{Delivery_Schedule}"},{"KeyName":"Tax_Details","Value":"{Tax_Details}"},{"KeyName":"Additional_Remarks","Value":"{Additional_Remarks}"},{"KeyName":"ABG","Value":"{ABG}"},{"KeyName":"ABG_Value","Value":"{ABG_Value}"},{"KeyName":"CPBG","Value":"{CPBG}"},{"KeyName":"CPBG_Value","Value":"{CPBG_Value}"},{"KeyName":"Scope_and_Responsibilities","Value":"{Scope_and_Responsibilities}"},{"KeyName":"Commercial_Terms","Value":"{Commercial_Terms}"},{"KeyName":"Compliance_Terms","Value":"{Compliance_Terms}"},{"KeyName":"Others","Value":"{Others}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"vendtovenr","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PAN_Number}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{Proposed_Vendor_Name}","Footnote":"{Supplier_Origin_State}","PreserveIconStackSpacing":false,"StatusText":"{Destination_State_BKTShipDASHto_LocationBKT}","Subhead":"{Proposed_Vendor_Code}","SubstatusText":"{Vendor_GST_Number}","OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/vendtovenr","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"vendtoptd","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{iddd}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{Proposed_Vendor_Code}","Footnote":"{slNo}","PreserveIconStackSpacing":false,"StatusText":"{Payment_methord}","Subhead":"{PAN_Number}","SubstatusText":"{Percentage}","OnPress":"/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/vendtoptd","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"vendtopd","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Item_Code}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{Proposed_Vendor_Code}","Footnote":"{HSN_OR_SAC_Code}","PreserveIconStackSpacing":false,"StatusText":"{extendedPrice}","Subhead":"{PAN_Number}","SubstatusText":"{Item_Short_Description}","OnPress":"/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/vendtopd","Service":"/mypanmdk/Services/mypan.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["PAN_vendor_response_APR","PAN_PAYMENT_TERM_DETAILS_APR","PAN_PRICE_DETAILS_APR"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_data_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Edit.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Edit.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_vendor_data_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_vendor_data_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","_Name":"Proposed_Vendor_Code","Value":"{Proposed_Vendor_Code}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"PAN_Number","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PAN_Number}","ReturnValue":"{PAN_Number}","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{PAN_Number}","_Name":"PAN_Number","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"Awarded_Vendor","_Name":"Awarded_Vendor","Value":"{Awarded_Vendor}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Name","_Name":"Vendor_Name","Value":"{Vendor_Name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Location","_Name":"Vendor_Location","Value":"{Vendor_Location}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technically_Approved","_Name":"Technically_Approved","Value":"{Technically_Approved}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Client_Approved","_Name":"Client_Approved","Value":"{Client_Approved}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Original_quote","_Name":"Original_quote","Value":"{Original_quote}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Final_Quote","_Name":"Final_Quote","Value":"{Final_Quote}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_amount_OR_Split_order_amount","_Name":"Order_amount_OR_Split_order_amount","Value":"{Order_amount_OR_Split_order_amount}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Discount_Amount","_Name":"Discount_Amount","Value":"{Discount_Amount}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Discount_percentage","_Name":"Discount_percentage","Value":"{Discount_percentage}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Rank","_Name":"Rank","Value":"{Rank}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Proposed_Vendor_Name","_Name":"Proposed_Vendor_Name","Value":"{Proposed_Vendor_Name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier_Origin_State","_Name":"Supplier_Origin_State","Value":"{Supplier_Origin_State}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Destination_State_BKTShipDASHto_LocationBKT","_Name":"Destination_State_BKTShipDASHto_LocationBKT","Value":"{Destination_State_BKTShipDASHto_LocationBKT}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_GST_Number","_Name":"Vendor_GST_Number","Value":"{Vendor_GST_Number}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_CE_Score","_Name":"Vendor_CE_Score","Value":"{Vendor_CE_Score}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_CE_Date","Value":"{Vendor_CE_Date}","Caption":"Vendor_CE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_PE_Score","_Name":"Vendor_PE_Score","Value":"{Vendor_PE_Score}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_PE_Date","_Name":"Vendor_PE_Date","Value":"{Vendor_PE_Date}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH1","_Name":"Vendor_Contact_PersonDASH1","Value":"{Vendor_Contact_PersonDASH1}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH2","_Name":"Vendor_Contact_PersonDASH2","Value":"{Vendor_Contact_PersonDASH2}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technical_Committee_who_cleared_the_proposal","_Name":"Technical_Committee_who_cleared_the_proposal","Value":"{Technical_Committee_who_cleared_the_proposal}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Committee_who_cleared_the_proposal","_Name":"Commercial_Committee_who_cleared_the_proposal","Value":"{Commercial_Committee_who_cleared_the_proposal}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_References_to_be_displayed_in_Order","_Name":"Vendor_References_to_be_displayed_in_Order","Value":"{Vendor_References_to_be_displayed_in_Order}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Shortlisted_Vendors_Response_summary","_Name":"Shortlisted_Vendors_Response_summary","Value":"{Shortlisted_Vendors_Response_summary}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Project_CurrencyBKT","_Name":"Order_Value_BKTIn_Project_CurrencyBKT","Value":"{Order_Value_BKTIn_Project_CurrencyBKT}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Bid_CurrencyBKT","_Name":"Order_Value_BKTIn_Bid_CurrencyBKT","Value":"{Order_Value_BKTIn_Bid_CurrencyBKT}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Date","_Name":"Vendor_Final_Quotation_Date","Value":"{Vendor_Final_Quotation_Date}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Amount","_Name":"Vendor_Final_Quotation_Amount","Value":"{Vendor_Final_Quotation_Amount}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_CurrencyORBase_Currency","_Name":"Project_CurrencyORBase_Currency","Value":"{Project_CurrencyORBase_Currency}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_CurrencyORBid_currency","_Name":"Order_CurrencyORBid_currency","Value":"{Order_CurrencyORBid_currency}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Incoterms","_Name":"Incoterms","Value":"{Incoterms}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Name":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","Value":"{Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Name":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","Value":"{Details_of_deviated_or_better_terms_agreed_with_the_Vendor}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Market_Scenario_and_Demand","_Name":"Market_Scenario_and_Demand","Value":"{Market_Scenario_and_Demand}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Companys_Position_and_Market_dynamics_of_this_purchase","_Name":"Companys_Position_and_Market_dynamics_of_this_purchase","Value":"{Companys_Position_and_Market_dynamics_of_this_purchase}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Should_Be_Cost_estimated","_Name":"Should_Be_Cost_estimated","Value":"{Should_Be_Cost_estimated}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Name":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","Value":"{Highlights_of_this_proposal_and_Price_Justification_for_this_proposal}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price_Escalation_Agreed_if_any","_Name":"Price_Escalation_Agreed_if_any","Value":"{Price_Escalation_Agreed_if_any}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Name":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","Value":"{Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Transportation","_Name":"Transportation","Value":"{Transportation}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Logistics_Cost","_Name":"Logistics_Cost","Value":"{Logistics_Cost}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Delivery_Schedule","_Name":"Delivery_Schedule","Value":"{Delivery_Schedule}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax_Details","_Name":"Tax_Details","Value":"{Tax_Details}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Additional_Remarks","_Name":"Additional_Remarks","Value":"{Additional_Remarks}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG","_Name":"ABG","Value":"{ABG}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG_Value","_Name":"ABG_Value","Value":"{ABG_Value}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG","_Name":"CPBG","Value":"{CPBG}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG_Value","_Name":"CPBG_Value","Value":"{CPBG_Value}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Scope_and_Responsibilities","_Name":"Scope_and_Responsibilities","Value":"{Scope_and_Responsibilities}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Terms","_Name":"Commercial_Terms","Value":"{Commercial_Terms}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Compliance_Terms","_Name":"Compliance_Terms","Value":"{Compliance_Terms}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Others","_Name":"Others","Value":"{Others}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_data_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_List.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_List.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_vendor_data_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PAN_Number}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Detail.action","StatusImage":"","Title":"{Vendor_Name}","Footnote":"{Awarded_Vendor}","PreserveIconStackSpacing":false,"StatusText":"{Vendor_Location}","Subhead":"{Proposed_Vendor_Code}","SubstatusText":"{Technically_Approved}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_data_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Create.page":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Create.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_PAN_vendor_response_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","_Name":"PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Proposed_Vendor_Name","_Name":"Proposed_Vendor_Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier_Origin_State","_Name":"Supplier_Origin_State","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Destination_State_BKTShipDASHto_LocationBKT","_Name":"Destination_State_BKTShipDASHto_LocationBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_GST_Number","_Name":"Vendor_GST_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_CE_Score","_Name":"Vendor_CE_Score","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_CE_Date","Caption":"Vendor_CE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_PE_Score","_Name":"Vendor_PE_Score","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_PE_Date","Caption":"Vendor_PE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_Contact_PersonDASH1","_Name":"Vendor_Contact_PersonDASH1","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH2","_Name":"Vendor_Contact_PersonDASH2","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technical_Committee_who_cleared_the_proposal","_Name":"Technical_Committee_who_cleared_the_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Committee_who_cleared_the_proposal","_Name":"Commercial_Committee_who_cleared_the_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_References_to_be_displayed_in_Order","_Name":"Vendor_References_to_be_displayed_in_Order","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Shortlisted_Vendors_Response_summary","_Name":"Shortlisted_Vendors_Response_summary","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Project_CurrencyBKT","_Name":"Order_Value_BKTIn_Project_CurrencyBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Bid_CurrencyBKT","_Name":"Order_Value_BKTIn_Bid_CurrencyBKT","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Date","_Name":"Vendor_Final_Quotation_Date","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Amount","_Name":"Vendor_Final_Quotation_Amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_CurrencyORBase_Currency","_Name":"Project_CurrencyORBase_Currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_CurrencyORBid_currency","_Name":"Order_CurrencyORBid_currency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Incoterms","_Name":"Incoterms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Name":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Name":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Market_Scenario_and_Demand","_Name":"Market_Scenario_and_Demand","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Companys_Position_and_Market_dynamics_of_this_purchase","_Name":"Companys_Position_and_Market_dynamics_of_this_purchase","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Should_Be_Cost_estimated","_Name":"Should_Be_Cost_estimated","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Name":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price_Escalation_Agreed_if_any","_Name":"Price_Escalation_Agreed_if_any","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Name":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Transportation","_Name":"Transportation","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Logistics_Cost","_Name":"Logistics_Cost","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Delivery_Schedule","_Name":"Delivery_Schedule","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax_Details","_Name":"Tax_Details","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Additional_Remarks","_Name":"Additional_Remarks","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG","_Name":"ABG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG_Value","_Name":"ABG_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG","_Name":"CPBG","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG_Value","_Name":"CPBG_Value","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Scope_and_Responsibilities","_Name":"Scope_and_Responsibilities","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Terms","_Name":"Commercial_Terms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Compliance_Terms","_Name":"Compliance_Terms","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Others","_Name":"Others","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"venrtovend_Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"_Name":"venrtovend_Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"venrtovend_PAN_Number","_Name":"venrtovend_PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_response_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Detail.page":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Detail.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_vendor_response_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_vendor_response_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Proposed_Vendor_Name}","Subhead":"{Proposed_Vendor_Code}","BodyText":"","Footnote":"{Supplier_Origin_State}","Description":"{PAN_Number}","StatusText":"{Destination_State_BKTShipDASHto_LocationBKT}","StatusImage":"","SubstatusImage":"","SubstatusText":"{Vendor_GST_Number}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Proposed_Vendor_Code","Value":"{Proposed_Vendor_Code}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"Proposed_Vendor_Name","Value":"{Proposed_Vendor_Name}"},{"KeyName":"Supplier_Origin_State","Value":"{Supplier_Origin_State}"},{"KeyName":"Destination_State_BKTShipDASHto_LocationBKT","Value":"{Destination_State_BKTShipDASHto_LocationBKT}"},{"KeyName":"Vendor_GST_Number","Value":"{Vendor_GST_Number}"},{"KeyName":"Vendor_CE_Score","Value":"{Vendor_CE_Score}"},{"KeyName":"Vendor_CE_Date","Value":"{Vendor_CE_Date}"},{"KeyName":"Vendor_PE_Score","Value":"{Vendor_PE_Score}"},{"KeyName":"Vendor_PE_Date","Value":"{Vendor_PE_Date}"},{"KeyName":"Vendor_Contact_PersonDASH1","Value":"{Vendor_Contact_PersonDASH1}"},{"KeyName":"Vendor_Contact_PersonDASH2","Value":"{Vendor_Contact_PersonDASH2}"},{"KeyName":"Technical_Committee_who_cleared_the_proposal","Value":"{Technical_Committee_who_cleared_the_proposal}"},{"KeyName":"Commercial_Committee_who_cleared_the_proposal","Value":"{Commercial_Committee_who_cleared_the_proposal}"},{"KeyName":"Vendor_References_to_be_displayed_in_Order","Value":"{Vendor_References_to_be_displayed_in_Order}"},{"KeyName":"Shortlisted_Vendors_Response_summary","Value":"{Shortlisted_Vendors_Response_summary}"},{"KeyName":"Order_Value_BKTIn_Project_CurrencyBKT","Value":"{Order_Value_BKTIn_Project_CurrencyBKT}"},{"KeyName":"Order_Value_BKTIn_Bid_CurrencyBKT","Value":"{Order_Value_BKTIn_Bid_CurrencyBKT}"},{"KeyName":"Vendor_Final_Quotation_Date","Value":"{Vendor_Final_Quotation_Date}"},{"KeyName":"Vendor_Final_Quotation_Amount","Value":"{Vendor_Final_Quotation_Amount}"},{"KeyName":"Project_CurrencyORBase_Currency","Value":"{Project_CurrencyORBase_Currency}"},{"KeyName":"Order_CurrencyORBid_currency","Value":"{Order_CurrencyORBid_currency}"},{"KeyName":"Incoterms","Value":"{Incoterms}"},{"KeyName":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","Value":"{Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC}"},{"KeyName":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","Value":"{Details_of_deviated_or_better_terms_agreed_with_the_Vendor}"},{"KeyName":"Market_Scenario_and_Demand","Value":"{Market_Scenario_and_Demand}"},{"KeyName":"Companys_Position_and_Market_dynamics_of_this_purchase","Value":"{Companys_Position_and_Market_dynamics_of_this_purchase}"},{"KeyName":"Should_Be_Cost_estimated","Value":"{Should_Be_Cost_estimated}"},{"KeyName":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","Value":"{Highlights_of_this_proposal_and_Price_Justification_for_this_proposal}"},{"KeyName":"Price_Escalation_Agreed_if_any","Value":"{Price_Escalation_Agreed_if_any}"},{"KeyName":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","Value":"{Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor}"},{"KeyName":"Transportation","Value":"{Transportation}"},{"KeyName":"Logistics_Cost","Value":"{Logistics_Cost}"},{"KeyName":"Delivery_Schedule","Value":"{Delivery_Schedule}"},{"KeyName":"Tax_Details","Value":"{Tax_Details}"},{"KeyName":"Additional_Remarks","Value":"{Additional_Remarks}"},{"KeyName":"ABG","Value":"{ABG}"},{"KeyName":"ABG_Value","Value":"{ABG_Value}"},{"KeyName":"CPBG","Value":"{CPBG}"},{"KeyName":"CPBG_Value","Value":"{CPBG_Value}"},{"KeyName":"Scope_and_Responsibilities","Value":"{Scope_and_Responsibilities}"},{"KeyName":"Commercial_Terms","Value":"{Commercial_Terms}"},{"KeyName":"Compliance_Terms","Value":"{Compliance_Terms}"},{"KeyName":"Others","Value":"{Others}"},{"KeyName":"venrtovend_Proposed_Vendor_Code","Value":"{venrtovend_Proposed_Vendor_Code}"},{"KeyName":"venrtovend_PAN_Number","Value":"{venrtovend_PAN_Number}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_response_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Edit.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Edit.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_PAN_vendor_response_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_vendor_response_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","_Name":"Proposed_Vendor_Code","Value":"{Proposed_Vendor_Code}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"PAN_Number","_Name":"PAN_Number","Value":"{PAN_Number}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Proposed_Vendor_Name","_Name":"Proposed_Vendor_Name","Value":"{Proposed_Vendor_Name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier_Origin_State","_Name":"Supplier_Origin_State","Value":"{Supplier_Origin_State}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Destination_State_BKTShipDASHto_LocationBKT","_Name":"Destination_State_BKTShipDASHto_LocationBKT","Value":"{Destination_State_BKTShipDASHto_LocationBKT}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_GST_Number","_Name":"Vendor_GST_Number","Value":"{Vendor_GST_Number}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_CE_Score","_Name":"Vendor_CE_Score","Value":"{Vendor_CE_Score}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_CE_Date","Value":"{Vendor_CE_Date}","Caption":"Vendor_CE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_PE_Score","_Name":"Vendor_PE_Score","Value":"{Vendor_PE_Score}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"Vendor_PE_Date","Value":"{Vendor_PE_Date}","Caption":"Vendor_PE_Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Vendor_Contact_PersonDASH1","_Name":"Vendor_Contact_PersonDASH1","Value":"{Vendor_Contact_PersonDASH1}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Contact_PersonDASH2","_Name":"Vendor_Contact_PersonDASH2","Value":"{Vendor_Contact_PersonDASH2}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Technical_Committee_who_cleared_the_proposal","_Name":"Technical_Committee_who_cleared_the_proposal","Value":"{Technical_Committee_who_cleared_the_proposal}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Committee_who_cleared_the_proposal","_Name":"Commercial_Committee_who_cleared_the_proposal","Value":"{Commercial_Committee_who_cleared_the_proposal}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_References_to_be_displayed_in_Order","_Name":"Vendor_References_to_be_displayed_in_Order","Value":"{Vendor_References_to_be_displayed_in_Order}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Shortlisted_Vendors_Response_summary","_Name":"Shortlisted_Vendors_Response_summary","Value":"{Shortlisted_Vendors_Response_summary}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Project_CurrencyBKT","_Name":"Order_Value_BKTIn_Project_CurrencyBKT","Value":"{Order_Value_BKTIn_Project_CurrencyBKT}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_Value_BKTIn_Bid_CurrencyBKT","_Name":"Order_Value_BKTIn_Bid_CurrencyBKT","Value":"{Order_Value_BKTIn_Bid_CurrencyBKT}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Date","_Name":"Vendor_Final_Quotation_Date","Value":"{Vendor_Final_Quotation_Date}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Vendor_Final_Quotation_Amount","_Name":"Vendor_Final_Quotation_Amount","Value":"{Vendor_Final_Quotation_Amount}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Project_CurrencyORBase_Currency","_Name":"Project_CurrencyORBase_Currency","Value":"{Project_CurrencyORBase_Currency}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Order_CurrencyORBid_currency","_Name":"Order_CurrencyORBid_currency","Value":"{Order_CurrencyORBid_currency}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Incoterms","_Name":"Incoterms","Value":"{Incoterms}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","_Name":"Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC","Value":"{Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","_Name":"Details_of_deviated_or_better_terms_agreed_with_the_Vendor","Value":"{Details_of_deviated_or_better_terms_agreed_with_the_Vendor}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Market_Scenario_and_Demand","_Name":"Market_Scenario_and_Demand","Value":"{Market_Scenario_and_Demand}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Companys_Position_and_Market_dynamics_of_this_purchase","_Name":"Companys_Position_and_Market_dynamics_of_this_purchase","Value":"{Companys_Position_and_Market_dynamics_of_this_purchase}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Should_Be_Cost_estimated","_Name":"Should_Be_Cost_estimated","Value":"{Should_Be_Cost_estimated}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","_Name":"Highlights_of_this_proposal_and_Price_Justification_for_this_proposal","Value":"{Highlights_of_this_proposal_and_Price_Justification_for_this_proposal}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price_Escalation_Agreed_if_any","_Name":"Price_Escalation_Agreed_if_any","Value":"{Price_Escalation_Agreed_if_any}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","_Name":"Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor","Value":"{Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Transportation","_Name":"Transportation","Value":"{Transportation}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Logistics_Cost","_Name":"Logistics_Cost","Value":"{Logistics_Cost}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Delivery_Schedule","_Name":"Delivery_Schedule","Value":"{Delivery_Schedule}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax_Details","_Name":"Tax_Details","Value":"{Tax_Details}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Additional_Remarks","_Name":"Additional_Remarks","Value":"{Additional_Remarks}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG","_Name":"ABG","Value":"{ABG}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ABG_Value","_Name":"ABG_Value","Value":"{ABG_Value}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG","_Name":"CPBG","Value":"{CPBG}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CPBG_Value","_Name":"CPBG_Value","Value":"{CPBG_Value}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Scope_and_Responsibilities","_Name":"Scope_and_Responsibilities","Value":"{Scope_and_Responsibilities}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Commercial_Terms","_Name":"Commercial_Terms","Value":"{Commercial_Terms}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Compliance_Terms","_Name":"Compliance_Terms","Value":"{Compliance_Terms}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Others","_Name":"Others","Value":"{Others}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"venrtovend_Proposed_Vendor_Code","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Proposed_Vendor_Code}","ReturnValue":"{Proposed_Vendor_Code}","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"}},"Value":"{venrtovend_Proposed_Vendor_Code}","_Name":"venrtovend_Proposed_Vendor_Code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"venrtovend_PAN_Number","_Name":"venrtovend_PAN_Number","Value":"{venrtovend_PAN_Number}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_response_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_List.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_List.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PAN_vendor_response_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PAN_Number}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Detail.action","StatusImage":"","Title":"{Proposed_Vendor_Name}","Footnote":"{Supplier_Origin_State}","PreserveIconStackSpacing":false,"StatusText":"{Destination_State_BKTShipDASHto_LocationBKT}","Subhead":"{Proposed_Vendor_Code}","SubstatusText":"{Vendor_GST_Number}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PAN_vendor_response_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PAN_vendor_response_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Create.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Create.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_vendorTaxDetails_APR_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","_Name":"Proposed_Vendor_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PAN_Number","_Name":"PAN_Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item_Code","_Name":"Item_Code","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"name","_Name":"name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"value","_Name":"value","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"vendorTaxDetails_APR_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Detail.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Detail.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,vendorTaxDetails_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"vendorTaxDetails_APR","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/mypanmdk/Rules/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{name}","Subhead":"{Proposed_Vendor_Code}","BodyText":"","Footnote":"{Item_Code}","Description":"{PAN_Number}","StatusText":"{value}","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Proposed_Vendor_Code","Value":"{Proposed_Vendor_Code}"},{"KeyName":"PAN_Number","Value":"{PAN_Number}"},{"KeyName":"Item_Code","Value":"{Item_Code}"},{"KeyName":"name","Value":"{name}"},{"KeyName":"value","Value":"{value}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"vendorTaxDetails_APR_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Edit.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Edit.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_vendorTaxDetails_APR_Detail)","DesignTimeTarget":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"vendorTaxDetails_APR","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/mypanmdk/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Proposed_Vendor_Code","_Name":"Proposed_Vendor_Code","Value":"{Proposed_Vendor_Code}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"PAN_Number","_Name":"PAN_Number","Value":"{PAN_Number}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Item_Code","_Name":"Item_Code","Value":"{Item_Code}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"name","_Name":"name","Value":"{name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"value","_Name":"value","Value":"{value}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"vendorTaxDetails_APR_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_List.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_List.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,vendorTaxDetails_APR)","ActionBar":{"Items":[{"OnPress":"/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PAN_Number}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Detail.action","StatusImage":"","Title":"{name}","Footnote":"{Item_Code}","PreserveIconStackSpacing":false,"StatusText":"{value}","Subhead":"{Proposed_Vendor_Code}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"vendorTaxDetails_APR","Service":"/mypanmdk/Services/mypan.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"vendorTaxDetails_APR_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/mypanmdk/Pages/Login.page","OnLaunch":["/mypanmdk/Rules/Service/Initialize.js"],"OnWillUpdate":"/mypanmdk/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/mypanmdk/Actions/pushnotification.action","Styles":"/mypanmdk/Styles/Styles.less","Version":"/mypanmdk/Globals/Application/AppDefinition_Version.global","Localization":"/mypanmdk/i18n/i18n.properties","_SchemaVersion":"24.7","_Name":"mypanmdk","StyleSheets":{"Styles":{"css":"/mypanmdk/Styles/Styles.css","ios":"/mypanmdk/Styles/Styles.nss","android":"/mypanmdk/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/AppUpdate.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/AppUpdate.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/mypanmdk/Rules/Application/AppUpdateFailure.js","OnSuccess":"/mypanmdk/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/AppUpdateFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/AppUpdateFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/AppUpdateProgressBanner.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/AppUpdateProgressBanner.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/mypanmdk/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/AppUpdateSuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/AppUpdateSuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/Logout.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/Logout.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/NavToAbout.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/NavToAbout.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/NavToActivityLog.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/NavToActivityLog.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/NavToSupport.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/NavToSupport.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/mypanmdk/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/OnWillUpdate.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/OnWillUpdate.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/Reset.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/Reset.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/ResetMessage.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/ResetMessage.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/mypanmdk/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Application/UserMenuPopover.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Application/UserMenuPopover.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/mypanmdk/Actions/mypan/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/mypanmdk/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/mypanmdk/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/mypanmdk/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/mypanmdk/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/mypanmdk/Actions/Application/Logout.action","Title":"Logout","Visible":"/mypanmdk/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/CloseModalPage_Cancel.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/CloseModalPage_Cancel.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/CloseModalPage_Complete.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/CloseModalPage_Complete.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/ClosePage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/ClosePage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/CreateEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/CreateEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/CreateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/CreateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/mypanmdk/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/DeleteConfirmation.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/DeleteConfirmation.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/DeleteEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/DeleteEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/DeleteEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/DeleteEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/mypanmdk/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/mypanmdk/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/GenericBannerMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/GenericBannerMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/GenericMessageBox.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/GenericMessageBox.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/GenericNavigation.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/GenericNavigation.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/mypanmdk/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/GenericToastMessage.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/GenericToastMessage.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Logging/LogUploadFailure.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Logging/LogUploadFailure.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Logging/LogUploadSuccessful.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Logging/LogUploadSuccessful.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Logging/UploadLog.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Logging/UploadLog.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/mypanmdk/Actions/Logging/LogUploadFailure.action","OnSuccess":"/mypanmdk/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/Logging/UploadLogProgress.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/Logging/UploadLogProgress.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/mypanmdk/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/UpdateEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/UpdateEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/UpdateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/UpdateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/mypanmdk/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/UploadStreamFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/UploadStreamFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload stream failure - {#ActionResults:uploadstream/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/UploadStreamSuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/UploadStreamSuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Stream uploaded","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/mypanmdk/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Create.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Create.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Detail.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Detail.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Edit.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Edit.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_List.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_List.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_CreateEntity.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_CreateEntity.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"PAN_Number":"#Control:PAN_Number/#SelectedValue","user":"#Control:user/#Value","Comments":"#Control:Comments/#Value","status":"#Control:status/#Value"},"Target":{"EntitySet":"PAN_Comments_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteEntity.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteEntity.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_Comments_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_UpdateEntity.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_UpdateEntity.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_Comments_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"PAN_Number":"#Control:PAN_Number/#SelectedValue","user":"#Control:user/#Value","Comments":"#Control:Comments/#Value","status":"#Control:status/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Create.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Create.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_Comments_APR.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_Comments_APR.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_TYPE_APR.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_TYPE_APR.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WEB_EVENT_APR.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WEB_EVENT_APR.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_attachments_APR.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_attachments_APR.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_vendor_data_APR.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_vendor_data_APR.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Detail.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Detail.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Edit.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Edit.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_List.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_List.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreateEntity.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreateEntity.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"PAN_Number":"#Control:PAN_Number/#Value","SBG":"#Control:SBG/#Value","SBU":"#Control:SBU/#Value","BUORPurchasing_Group":"#Control:BUORPurchasing_Group/#Value","Plant_Code":"#Control:Plant_Code/#Value","Project_Description":"#Control:Project_Description/#Value","PR_NumberBKTsBKT":"#Control:PR_NumberBKTsBKT/#Value","Subject_of_ProposalOROrder":"#Control:Subject_of_ProposalOROrder/#Value","Previous_PAN_References":"#Control:Previous_PAN_References/#Value","Split_OrderORNo_of_vendors":"#Control:Split_OrderORNo_of_vendors/#Value","SOP_Type":"#Control:SOP_Type/#Value","Order_Type_OR_Document_tyFuuidpe":"#Control:Order_Type_OR_Document_tyFuuidpe/#Value","Asset_Type":"#Control:Asset_Type/#Value","Nature_of_Transaction":"#Control:Nature_of_Transaction/#Value","Order_Location_OR_Plant":"#Control:Order_Location_OR_Plant/#Value","Base_line_spend":"#Control:Base_line_spend/#Value","Project_CurrencyORBase_Currency":"#Control:Project_CurrencyORBase_Currency/#Value","Order_CurrencyORBid_currency":"#Control:Order_CurrencyORBid_currency/#Value","Final_proposed_Value":"#Control:Final_proposed_Value/#Value","Savings_achieved_btw_initial_and_final_quote":"#Control:Savings_achieved_btw_initial_and_final_quote/#Value","Savings_against_base_line_spend_of_RFP":"#Control:Savings_against_base_line_spend_of_RFP/#Value","Number_of_Vendors_Shortlisted_for_RFP":"#Control:Number_of_Vendors_Shortlisted_for_RFP/#Value","Number_of_Vendors_Technically_Qualified":"#Control:Number_of_Vendors_Technically_Qualified/#Value","Required_at_Site_Date":"#Control:Required_at_Site_Date/#Value","RFP_Number":"#Control:RFP_Number/#Value","RFP_Publish_Date":"#Control:RFP_Publish_Date/#Value","Time_Taken_for_FinalizationDASHIn_DAYS":"#Control:Time_Taken_for_FinalizationDASHIn_DAYS/#Value","status":"#Control:status/#Value","statusInd":"#Control:statusInd/#Value","created_by":"#Control:created_by/#Value","task_id":"#Control:task_id/#Value","type":"#Control:type/#Value","status_a":"#Control:status_a/#Value","switch_control":"#Control:switch_control/#Value","ProjectId":"#Control:ProjectId/#Value","number_of_vendors_invited":"#Control:number_of_vendors_invited/#Value","total_levels_of_approval":"#Control:total_levels_of_approval/#Value","Current_level_of_approval":"#Control:Current_level_of_approval/#Value","Sap_workitem_id":"#Control:Sap_workitem_id/#Value","Comments":"#Control:Comments/#Value","submitted_by":"#Control:submitted_by/#Value","submitted_date":"#Control:submitted_date/#Value"},"Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"tab1tocom","Target":{"EntitySet":"PAN_Details_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"PAN_Number":"#Control:PAN_Number/#SelectedValue","user":"#Control:user/#Value","Comments":"#Control:Comments/#Value","status":"#Control:status/#Value"},"Target":{"EntitySet":"PAN_Comments_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"tab1totab3","Target":{"EntitySet":"PAN_Details_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","typeNo":"#Control:typeNo/#Value","required":"#Control:required/#Value","submittedOn":"#Control:submittedOn/#Value","receivedOn":"#Control:receivedOn/#Value","timeTakenForApproval":"#Control:timeTakenForApproval/#Value"},"Target":{"EntitySet":"PAN_TYPE_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"tab1totab2","Target":{"EntitySet":"PAN_Details_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","eventNo":"#Control:eventNo/#Value","number":"#Control:number/#Value","date":"#Control:date/#Value","numberOfVendorsParticipated":"#Control:numberOfVendorsParticipated/#Value","l1AmountObtained":"#Control:l1AmountObtained/#Value"},"Target":{"EntitySet":"PAN_WEB_EVENT_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"tab1toWORKFLOW_HISTORY","Target":{"EntitySet":"PAN_Details_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","Employee_ID":"#Control:Employee_ID/#Value","level":"#Control:level/#Value","Approved_by":"#Control:Approved_by/#Value","Employee_Name":"#Control:Employee_Name/#Value","Title":"#Control:Title/#Value","Notification_Status":"#Control:Notification_Status/#Value","Result":"#Control:Result/#Value","Begin_DateAND_Time":"#Control:Begin_DateAND_Time/#Value","End_DateAND_Time":"#Control:End_DateAND_Time/#Value","Days_Taken":"#Control:Days_Taken/#Value","Remarks":"#Control:Remarks/#Value"},"Target":{"EntitySet":"PAN_WORKFLOW_HISTORY_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"tab1topdf","Target":{"EntitySet":"PAN_Details_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"PAN_Number":"#Control:PAN_Number/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"Target":{"EntitySet":"PAN_attachments_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"tab1tovendor_data","Target":{"EntitySet":"PAN_Details_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","Awarded_Vendor":"#Control:Awarded_Vendor/#Value","Vendor_Name":"#Control:Vendor_Name/#Value","Vendor_Location":"#Control:Vendor_Location/#Value","Technically_Approved":"#Control:Technically_Approved/#Value","Client_Approved":"#Control:Client_Approved/#Value","Original_quote":"#Control:Original_quote/#Value","Final_Quote":"#Control:Final_Quote/#Value","Order_amount_OR_Split_order_amount":"#Control:Order_amount_OR_Split_order_amount/#Value","Discount_Amount":"#Control:Discount_Amount/#Value","Discount_percentage":"#Control:Discount_percentage/#Value","Rank":"#Control:Rank/#Value","Proposed_Vendor_Name":"#Control:Proposed_Vendor_Name/#Value","Supplier_Origin_State":"#Control:Supplier_Origin_State/#Value","Destination_State_BKTShipDASHto_LocationBKT":"#Control:Destination_State_BKTShipDASHto_LocationBKT/#Value","Vendor_GST_Number":"#Control:Vendor_GST_Number/#Value","Vendor_CE_Score":"#Control:Vendor_CE_Score/#Value","Vendor_CE_Date":"#Control:Vendor_CE_Date/#Value","Vendor_PE_Score":"#Control:Vendor_PE_Score/#Value","Vendor_PE_Date":"#Control:Vendor_PE_Date/#Value","Vendor_Contact_PersonDASH1":"#Control:Vendor_Contact_PersonDASH1/#Value","Vendor_Contact_PersonDASH2":"#Control:Vendor_Contact_PersonDASH2/#Value","Technical_Committee_who_cleared_the_proposal":"#Control:Technical_Committee_who_cleared_the_proposal/#Value","Commercial_Committee_who_cleared_the_proposal":"#Control:Commercial_Committee_who_cleared_the_proposal/#Value","Vendor_References_to_be_displayed_in_Order":"#Control:Vendor_References_to_be_displayed_in_Order/#Value","Shortlisted_Vendors_Response_summary":"#Control:Shortlisted_Vendors_Response_summary/#Value","Order_Value_BKTIn_Project_CurrencyBKT":"#Control:Order_Value_BKTIn_Project_CurrencyBKT/#Value","Order_Value_BKTIn_Bid_CurrencyBKT":"#Control:Order_Value_BKTIn_Bid_CurrencyBKT/#Value","Vendor_Final_Quotation_Date":"#Control:Vendor_Final_Quotation_Date/#Value","Vendor_Final_Quotation_Amount":"#Control:Vendor_Final_Quotation_Amount/#Value","Project_CurrencyORBase_Currency":"#Control:Project_CurrencyORBase_Currency/#Value","Order_CurrencyORBid_currency":"#Control:Order_CurrencyORBid_currency/#Value","Incoterms":"#Control:Incoterms/#Value","Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC":"#Control:Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC/#Value","Details_of_deviated_or_better_terms_agreed_with_the_Vendor":"#Control:Details_of_deviated_or_better_terms_agreed_with_the_Vendor/#Value","Market_Scenario_and_Demand":"#Control:Market_Scenario_and_Demand/#Value","Companys_Position_and_Market_dynamics_of_this_purchase":"#Control:Companys_Position_and_Market_dynamics_of_this_purchase/#Value","Should_Be_Cost_estimated":"#Control:Should_Be_Cost_estimated/#Value","Highlights_of_this_proposal_and_Price_Justification_for_this_proposal":"#Control:Highlights_of_this_proposal_and_Price_Justification_for_this_proposal/#Value","Price_Escalation_Agreed_if_any":"#Control:Price_Escalation_Agreed_if_any/#Value","Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor":"#Control:Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor/#Value","Transportation":"#Control:Transportation/#Value","Logistics_Cost":"#Control:Logistics_Cost/#Value","Delivery_Schedule":"#Control:Delivery_Schedule/#Value","Tax_Details":"#Control:Tax_Details/#Value","Additional_Remarks":"#Control:Additional_Remarks/#Value","ABG":"#Control:ABG/#Value","ABG_Value":"#Control:ABG_Value/#Value","CPBG":"#Control:CPBG/#Value","CPBG_Value":"#Control:CPBG_Value/#Value","Scope_and_Responsibilities":"#Control:Scope_and_Responsibilities/#Value","Commercial_Terms":"#Control:Commercial_Terms/#Value","Compliance_Terms":"#Control:Compliance_Terms/#Value","Others":"#Control:Others/#Value"},"Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DeleteEntity.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DeleteEntity.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DetailPopover.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DetailPopover.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add PAN_WEB_EVENT_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WEB_EVENT_APR.action"},{"Title":"Add PAN_TYPE_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_TYPE_APR.action"},{"Title":"Add PAN_WORKFLOW_HISTORY_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action"},{"Title":"Add PAN_attachments_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_attachments_APR.action"},{"Title":"Add PAN_vendor_data_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_vendor_data_APR.action"},{"Title":"Add PAN_Comments_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_Comments_APR.action"},{"Title":"Delete","OnPress":"/mypanmdk/Rules/mypan/PAN_Details_APR/PAN_Details_APR_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_UpdateEntity.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_UpdateEntity.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_Details_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"PAN_Number":"#Control:PAN_Number/#Value","SBG":"#Control:SBG/#Value","SBU":"#Control:SBU/#Value","BUORPurchasing_Group":"#Control:BUORPurchasing_Group/#Value","Plant_Code":"#Control:Plant_Code/#Value","Project_Description":"#Control:Project_Description/#Value","PR_NumberBKTsBKT":"#Control:PR_NumberBKTsBKT/#Value","Subject_of_ProposalOROrder":"#Control:Subject_of_ProposalOROrder/#Value","Previous_PAN_References":"#Control:Previous_PAN_References/#Value","Split_OrderORNo_of_vendors":"#Control:Split_OrderORNo_of_vendors/#Value","SOP_Type":"#Control:SOP_Type/#Value","Order_Type_OR_Document_tyFuuidpe":"#Control:Order_Type_OR_Document_tyFuuidpe/#Value","Asset_Type":"#Control:Asset_Type/#Value","Nature_of_Transaction":"#Control:Nature_of_Transaction/#Value","Order_Location_OR_Plant":"#Control:Order_Location_OR_Plant/#Value","Base_line_spend":"#Control:Base_line_spend/#Value","Project_CurrencyORBase_Currency":"#Control:Project_CurrencyORBase_Currency/#Value","Order_CurrencyORBid_currency":"#Control:Order_CurrencyORBid_currency/#Value","Final_proposed_Value":"#Control:Final_proposed_Value/#Value","Savings_achieved_btw_initial_and_final_quote":"#Control:Savings_achieved_btw_initial_and_final_quote/#Value","Savings_against_base_line_spend_of_RFP":"#Control:Savings_against_base_line_spend_of_RFP/#Value","Number_of_Vendors_Shortlisted_for_RFP":"#Control:Number_of_Vendors_Shortlisted_for_RFP/#Value","Number_of_Vendors_Technically_Qualified":"#Control:Number_of_Vendors_Technically_Qualified/#Value","Required_at_Site_Date":"#Control:Required_at_Site_Date/#Value","RFP_Number":"#Control:RFP_Number/#Value","RFP_Publish_Date":"#Control:RFP_Publish_Date/#Value","Time_Taken_for_FinalizationDASHIn_DAYS":"#Control:Time_Taken_for_FinalizationDASHIn_DAYS/#Value","status":"#Control:status/#Value","statusInd":"#Control:statusInd/#Value","created_by":"#Control:created_by/#Value","task_id":"#Control:task_id/#Value","type":"#Control:type/#Value","status_a":"#Control:status_a/#Value","switch_control":"#Control:switch_control/#Value","ProjectId":"#Control:ProjectId/#Value","number_of_vendors_invited":"#Control:number_of_vendors_invited/#Value","total_levels_of_approval":"#Control:total_levels_of_approval/#Value","Current_level_of_approval":"#Control:Current_level_of_approval/#Value","Sap_workitem_id":"#Control:Sap_workitem_id/#Value","Comments":"#Control:Comments/#Value","submitted_by":"#Control:submitted_by/#Value","submitted_date":"#Control:submitted_date/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Create.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Create.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Detail.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Detail.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Edit.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Edit.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_List.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_List.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_CreateEntity.action":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_CreateEntity.action ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#SelectedValue","PAN_Number":"#Control:PAN_Number/#Value","iddd":"#Control:iddd/#Value","slNo":"#Control:slNo/#Value","Payment_methord":"#Control:Payment_methord/#Value","Percentage":"#Control:Percentage/#Value","Description":"#Control:Description/#Value","Due_date":"#Control:Due_date/#Value","Mandatory_Documents_OR_Submissions":"#Control:Mandatory_Documents_OR_Submissions/#Value","To_be_certified_in_Company":"#Control:To_be_certified_in_Company/#Value"},"Target":{"EntitySet":"PAN_PAYMENT_TERM_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteEntity.action":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteEntity.action ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_PAYMENT_TERM_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_UpdateEntity.action":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_UpdateEntity.action ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_PAYMENT_TERM_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#SelectedValue","PAN_Number":"#Control:PAN_Number/#Value","iddd":"#Control:iddd/#Value","slNo":"#Control:slNo/#Value","Payment_methord":"#Control:Payment_methord/#Value","Percentage":"#Control:Percentage/#Value","Description":"#Control:Description/#Value","Due_date":"#Control:Due_date/#Value","Mandatory_Documents_OR_Submissions":"#Control:Mandatory_Documents_OR_Submissions/#Value","To_be_certified_in_Company":"#Control:To_be_certified_in_Company/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Create.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Create.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Detail.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Detail.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Edit.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Edit.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_List.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_List.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_CreateEntity.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_CreateEntity.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#SelectedValue","PAN_Number":"#Control:PAN_Number/#Value","Item_Code":"#Control:Item_Code/#Value","HSN_OR_SAC_Code":"#Control:HSN_OR_SAC_Code/#Value","extendedPrice":"#Control:extendedPrice/#Value","Item_Short_Description":"#Control:Item_Short_Description/#Value","UOM":"#Control:UOM/#Value","Quantity":"#Control:Quantity/#Value","Unit_Price":"#Control:Unit_Price/#Value","Amount":"#Control:Amount/#Value","Indian_Tax_PER":"#Control:Indian_Tax_PER/#Value","Quantity_Over_Delivery_Tolerance":"#Control:Quantity_Over_Delivery_Tolerance/#Value"},"Target":{"EntitySet":"PAN_PRICE_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteEntity.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteEntity.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_PRICE_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_UpdateEntity.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_UpdateEntity.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_PRICE_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#SelectedValue","PAN_Number":"#Control:PAN_Number/#Value","Item_Code":"#Control:Item_Code/#Value","HSN_OR_SAC_Code":"#Control:HSN_OR_SAC_Code/#Value","extendedPrice":"#Control:extendedPrice/#Value","Item_Short_Description":"#Control:Item_Short_Description/#Value","UOM":"#Control:UOM/#Value","Quantity":"#Control:Quantity/#Value","Unit_Price":"#Control:Unit_Price/#Value","Amount":"#Control:Amount/#Value","Indian_Tax_PER":"#Control:Indian_Tax_PER/#Value","Quantity_Over_Delivery_Tolerance":"#Control:Quantity_Over_Delivery_Tolerance/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Create.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Create.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Detail.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Detail.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Edit.action":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Edit.action ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_List.action":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_List.action ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_CreateEntity.action":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_CreateEntity.action ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Payment_method":"#Control:Payment_method/#Value"},"Target":{"EntitySet":"PAN_Payment_Method_Drop_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteEntity.action":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteEntity.action ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_Payment_Method_Drop_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_UpdateEntity.action":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_UpdateEntity.action ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_Payment_Method_Drop_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"Payment_method":"#Control:Payment_method/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Create.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Create.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Detail.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Detail.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Edit.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Edit.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_List.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_List.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_CreateEntity.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_CreateEntity.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","typeNo":"#Control:typeNo/#Value","required":"#Control:required/#Value","submittedOn":"#Control:submittedOn/#Value","receivedOn":"#Control:receivedOn/#Value","timeTakenForApproval":"#Control:timeTakenForApproval/#Value"},"Target":{"EntitySet":"PAN_TYPE_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteEntity.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteEntity.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_TYPE_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_UpdateEntity.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_UpdateEntity.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_TYPE_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","typeNo":"#Control:typeNo/#Value","required":"#Control:required/#Value","submittedOn":"#Control:submittedOn/#Value","receivedOn":"#Control:receivedOn/#Value","timeTakenForApproval":"#Control:timeTakenForApproval/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Create.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Create.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Detail.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Detail.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Edit.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Edit.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_List.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_List.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_CreateEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_CreateEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","eventNo":"#Control:eventNo/#Value","number":"#Control:number/#Value","date":"#Control:date/#Value","numberOfVendorsParticipated":"#Control:numberOfVendorsParticipated/#Value","l1AmountObtained":"#Control:l1AmountObtained/#Value"},"Target":{"EntitySet":"PAN_WEB_EVENT_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_WEB_EVENT_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_UpdateEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_UpdateEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_WEB_EVENT_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","eventNo":"#Control:eventNo/#Value","number":"#Control:number/#Value","date":"#Control:date/#Value","numberOfVendorsParticipated":"#Control:numberOfVendorsParticipated/#Value","l1AmountObtained":"#Control:l1AmountObtained/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Create.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Create.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Detail.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Detail.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Edit.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Edit.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_List.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_List.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_CreateEntity.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_CreateEntity.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","Employee_ID":"#Control:Employee_ID/#Value","level":"#Control:level/#Value","Approved_by":"#Control:Approved_by/#Value","Employee_Name":"#Control:Employee_Name/#Value","Title":"#Control:Title/#Value","Notification_Status":"#Control:Notification_Status/#Value","Result":"#Control:Result/#Value","Begin_DateAND_Time":"#Control:Begin_DateAND_Time/#Value","End_DateAND_Time":"#Control:End_DateAND_Time/#Value","Days_Taken":"#Control:Days_Taken/#Value","Remarks":"#Control:Remarks/#Value"},"Target":{"EntitySet":"PAN_WORKFLOW_HISTORY_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteEntity.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteEntity.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_WORKFLOW_HISTORY_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_UpdateEntity.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_UpdateEntity.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_WORKFLOW_HISTORY_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"idd":"#Control:idd/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","Employee_ID":"#Control:Employee_ID/#Value","level":"#Control:level/#Value","Approved_by":"#Control:Approved_by/#Value","Employee_Name":"#Control:Employee_Name/#Value","Title":"#Control:Title/#Value","Notification_Status":"#Control:Notification_Status/#Value","Result":"#Control:Result/#Value","Begin_DateAND_Time":"#Control:Begin_DateAND_Time/#Value","End_DateAND_Time":"#Control:End_DateAND_Time/#Value","Days_Taken":"#Control:Days_Taken/#Value","Remarks":"#Control:Remarks/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Create.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Create.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Detail.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Detail.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Edit.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Edit.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_List.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_List.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"PAN_Number":"#Control:PAN_Number/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"Target":{"EntitySet":"PAN_attachments_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_attachments_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DetailPopover.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DetailPopover.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Open Document","OnPress":"/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_OpenDocument.action"},{"Title":"Delete","OnPress":"/mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_OpenDocument.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_OpenDocument.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenDocument","Path":"/mypanmdk/Services/mypan.service/{@odata.readLink}/content","MimeType":"image/jpeg"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UpdateEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UpdateEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_attachments_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"PAN_Number":"#Control:PAN_Number/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UploadStream.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UploadStream.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UploadStream","Target":{"Service":"/mypanmdk/Services/mypan.service","EntitySet":"PAN_attachments_APR","ReadLink":"{@odata.readLink}"},"Properties":{"content":"#Control:content/#Value"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"uploadstream"},"OnSuccess":"/mypanmdk/Actions/UploadStreamSuccessMessage.action","OnFailure":"/mypanmdk/Actions/UploadStreamFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Create.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Create.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action":
/*!*****************************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_vendor_response_APR.action":
/*!************************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_vendor_response_APR.action ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Detail.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Detail.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Edit.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Edit.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_List.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_List.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreateEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreateEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","Awarded_Vendor":"#Control:Awarded_Vendor/#Value","Vendor_Name":"#Control:Vendor_Name/#Value","Vendor_Location":"#Control:Vendor_Location/#Value","Technically_Approved":"#Control:Technically_Approved/#Value","Client_Approved":"#Control:Client_Approved/#Value","Original_quote":"#Control:Original_quote/#Value","Final_Quote":"#Control:Final_Quote/#Value","Order_amount_OR_Split_order_amount":"#Control:Order_amount_OR_Split_order_amount/#Value","Discount_Amount":"#Control:Discount_Amount/#Value","Discount_percentage":"#Control:Discount_percentage/#Value","Rank":"#Control:Rank/#Value","Proposed_Vendor_Name":"#Control:Proposed_Vendor_Name/#Value","Supplier_Origin_State":"#Control:Supplier_Origin_State/#Value","Destination_State_BKTShipDASHto_LocationBKT":"#Control:Destination_State_BKTShipDASHto_LocationBKT/#Value","Vendor_GST_Number":"#Control:Vendor_GST_Number/#Value","Vendor_CE_Score":"#Control:Vendor_CE_Score/#Value","Vendor_CE_Date":"#Control:Vendor_CE_Date/#Value","Vendor_PE_Score":"#Control:Vendor_PE_Score/#Value","Vendor_PE_Date":"#Control:Vendor_PE_Date/#Value","Vendor_Contact_PersonDASH1":"#Control:Vendor_Contact_PersonDASH1/#Value","Vendor_Contact_PersonDASH2":"#Control:Vendor_Contact_PersonDASH2/#Value","Technical_Committee_who_cleared_the_proposal":"#Control:Technical_Committee_who_cleared_the_proposal/#Value","Commercial_Committee_who_cleared_the_proposal":"#Control:Commercial_Committee_who_cleared_the_proposal/#Value","Vendor_References_to_be_displayed_in_Order":"#Control:Vendor_References_to_be_displayed_in_Order/#Value","Shortlisted_Vendors_Response_summary":"#Control:Shortlisted_Vendors_Response_summary/#Value","Order_Value_BKTIn_Project_CurrencyBKT":"#Control:Order_Value_BKTIn_Project_CurrencyBKT/#Value","Order_Value_BKTIn_Bid_CurrencyBKT":"#Control:Order_Value_BKTIn_Bid_CurrencyBKT/#Value","Vendor_Final_Quotation_Date":"#Control:Vendor_Final_Quotation_Date/#Value","Vendor_Final_Quotation_Amount":"#Control:Vendor_Final_Quotation_Amount/#Value","Project_CurrencyORBase_Currency":"#Control:Project_CurrencyORBase_Currency/#Value","Order_CurrencyORBid_currency":"#Control:Order_CurrencyORBid_currency/#Value","Incoterms":"#Control:Incoterms/#Value","Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC":"#Control:Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC/#Value","Details_of_deviated_or_better_terms_agreed_with_the_Vendor":"#Control:Details_of_deviated_or_better_terms_agreed_with_the_Vendor/#Value","Market_Scenario_and_Demand":"#Control:Market_Scenario_and_Demand/#Value","Companys_Position_and_Market_dynamics_of_this_purchase":"#Control:Companys_Position_and_Market_dynamics_of_this_purchase/#Value","Should_Be_Cost_estimated":"#Control:Should_Be_Cost_estimated/#Value","Highlights_of_this_proposal_and_Price_Justification_for_this_proposal":"#Control:Highlights_of_this_proposal_and_Price_Justification_for_this_proposal/#Value","Price_Escalation_Agreed_if_any":"#Control:Price_Escalation_Agreed_if_any/#Value","Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor":"#Control:Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor/#Value","Transportation":"#Control:Transportation/#Value","Logistics_Cost":"#Control:Logistics_Cost/#Value","Delivery_Schedule":"#Control:Delivery_Schedule/#Value","Tax_Details":"#Control:Tax_Details/#Value","Additional_Remarks":"#Control:Additional_Remarks/#Value","ABG":"#Control:ABG/#Value","ABG_Value":"#Control:ABG_Value/#Value","CPBG":"#Control:CPBG/#Value","CPBG_Value":"#Control:CPBG_Value/#Value","Scope_and_Responsibilities":"#Control:Scope_and_Responsibilities/#Value","Commercial_Terms":"#Control:Commercial_Terms/#Value","Compliance_Terms":"#Control:Compliance_Terms/#Value","Others":"#Control:Others/#Value"},"Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action":
/*!************************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"vendtoptd","Target":{"EntitySet":"PAN_vendor_data_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#SelectedValue","PAN_Number":"#Control:PAN_Number/#Value","iddd":"#Control:iddd/#Value","slNo":"#Control:slNo/#Value","Payment_methord":"#Control:Payment_methord/#Value","Percentage":"#Control:Percentage/#Value","Description":"#Control:Description/#Value","Due_date":"#Control:Due_date/#Value","Mandatory_Documents_OR_Submissions":"#Control:Mandatory_Documents_OR_Submissions/#Value","To_be_certified_in_Company":"#Control:To_be_certified_in_Company/#Value"},"Target":{"EntitySet":"PAN_PAYMENT_TERM_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action":
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"vendtopd","Target":{"EntitySet":"PAN_vendor_data_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#SelectedValue","PAN_Number":"#Control:PAN_Number/#Value","Item_Code":"#Control:Item_Code/#Value","HSN_OR_SAC_Code":"#Control:HSN_OR_SAC_Code/#Value","extendedPrice":"#Control:extendedPrice/#Value","Item_Short_Description":"#Control:Item_Short_Description/#Value","UOM":"#Control:UOM/#Value","Quantity":"#Control:Quantity/#Value","Unit_Price":"#Control:Unit_Price/#Value","Amount":"#Control:Amount/#Value","Indian_Tax_PER":"#Control:Indian_Tax_PER/#Value","Quantity_Over_Delivery_Tolerance":"#Control:Quantity_Over_Delivery_Tolerance/#Value"},"Target":{"EntitySet":"PAN_PRICE_DETAILS_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.action":
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.action ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"vendtovenr","Target":{"EntitySet":"PAN_vendor_data_APR","ReadLink":"{@odata.readLink}"}},"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#Value","PAN_Number":"#Control:PAN_Number/#Value","Proposed_Vendor_Name":"#Control:Proposed_Vendor_Name/#Value","Supplier_Origin_State":"#Control:Supplier_Origin_State/#Value","Destination_State_BKTShipDASHto_LocationBKT":"#Control:Destination_State_BKTShipDASHto_LocationBKT/#Value","Vendor_GST_Number":"#Control:Vendor_GST_Number/#Value","Vendor_CE_Score":"#Control:Vendor_CE_Score/#Value","Vendor_CE_Date":"#Control:Vendor_CE_Date/#Value","Vendor_PE_Score":"#Control:Vendor_PE_Score/#Value","Vendor_PE_Date":"#Control:Vendor_PE_Date/#Value","Vendor_Contact_PersonDASH1":"#Control:Vendor_Contact_PersonDASH1/#Value","Vendor_Contact_PersonDASH2":"#Control:Vendor_Contact_PersonDASH2/#Value","Technical_Committee_who_cleared_the_proposal":"#Control:Technical_Committee_who_cleared_the_proposal/#Value","Commercial_Committee_who_cleared_the_proposal":"#Control:Commercial_Committee_who_cleared_the_proposal/#Value","Vendor_References_to_be_displayed_in_Order":"#Control:Vendor_References_to_be_displayed_in_Order/#Value","Shortlisted_Vendors_Response_summary":"#Control:Shortlisted_Vendors_Response_summary/#Value","Order_Value_BKTIn_Project_CurrencyBKT":"#Control:Order_Value_BKTIn_Project_CurrencyBKT/#Value","Order_Value_BKTIn_Bid_CurrencyBKT":"#Control:Order_Value_BKTIn_Bid_CurrencyBKT/#Value","Vendor_Final_Quotation_Date":"#Control:Vendor_Final_Quotation_Date/#Value","Vendor_Final_Quotation_Amount":"#Control:Vendor_Final_Quotation_Amount/#Value","Project_CurrencyORBase_Currency":"#Control:Project_CurrencyORBase_Currency/#Value","Order_CurrencyORBid_currency":"#Control:Order_CurrencyORBid_currency/#Value","Incoterms":"#Control:Incoterms/#Value","Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC":"#Control:Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC/#Value","Details_of_deviated_or_better_terms_agreed_with_the_Vendor":"#Control:Details_of_deviated_or_better_terms_agreed_with_the_Vendor/#Value","Market_Scenario_and_Demand":"#Control:Market_Scenario_and_Demand/#Value","Companys_Position_and_Market_dynamics_of_this_purchase":"#Control:Companys_Position_and_Market_dynamics_of_this_purchase/#Value","Should_Be_Cost_estimated":"#Control:Should_Be_Cost_estimated/#Value","Highlights_of_this_proposal_and_Price_Justification_for_this_proposal":"#Control:Highlights_of_this_proposal_and_Price_Justification_for_this_proposal/#Value","Price_Escalation_Agreed_if_any":"#Control:Price_Escalation_Agreed_if_any/#Value","Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor":"#Control:Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor/#Value","Transportation":"#Control:Transportation/#Value","Logistics_Cost":"#Control:Logistics_Cost/#Value","Delivery_Schedule":"#Control:Delivery_Schedule/#Value","Tax_Details":"#Control:Tax_Details/#Value","Additional_Remarks":"#Control:Additional_Remarks/#Value","ABG":"#Control:ABG/#Value","ABG_Value":"#Control:ABG_Value/#Value","CPBG":"#Control:CPBG/#Value","CPBG_Value":"#Control:CPBG_Value/#Value","Scope_and_Responsibilities":"#Control:Scope_and_Responsibilities/#Value","Commercial_Terms":"#Control:Commercial_Terms/#Value","Compliance_Terms":"#Control:Compliance_Terms/#Value","Others":"#Control:Others/#Value","venrtovend_Proposed_Vendor_Code":"#Control:venrtovend_Proposed_Vendor_Code/#SelectedValue","venrtovend_PAN_Number":"#Control:venrtovend_PAN_Number/#Value"},"Target":{"EntitySet":"PAN_vendor_response_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DetailPopover.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DetailPopover.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add PAN_vendor_response_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_vendor_response_APR.action"},{"Title":"Add PAN_PAYMENT_TERM_DETAILS_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action"},{"Title":"Add PAN_PRICE_DETAILS_APR","OnPress":"/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action"},{"Title":"Delete","OnPress":"/mypanmdk/Rules/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_UpdateEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_UpdateEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_vendor_data_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#Value","PAN_Number":"#Control:PAN_Number/#SelectedValue","Awarded_Vendor":"#Control:Awarded_Vendor/#Value","Vendor_Name":"#Control:Vendor_Name/#Value","Vendor_Location":"#Control:Vendor_Location/#Value","Technically_Approved":"#Control:Technically_Approved/#Value","Client_Approved":"#Control:Client_Approved/#Value","Original_quote":"#Control:Original_quote/#Value","Final_Quote":"#Control:Final_Quote/#Value","Order_amount_OR_Split_order_amount":"#Control:Order_amount_OR_Split_order_amount/#Value","Discount_Amount":"#Control:Discount_Amount/#Value","Discount_percentage":"#Control:Discount_percentage/#Value","Rank":"#Control:Rank/#Value","Proposed_Vendor_Name":"#Control:Proposed_Vendor_Name/#Value","Supplier_Origin_State":"#Control:Supplier_Origin_State/#Value","Destination_State_BKTShipDASHto_LocationBKT":"#Control:Destination_State_BKTShipDASHto_LocationBKT/#Value","Vendor_GST_Number":"#Control:Vendor_GST_Number/#Value","Vendor_CE_Score":"#Control:Vendor_CE_Score/#Value","Vendor_CE_Date":"#Control:Vendor_CE_Date/#Value","Vendor_PE_Score":"#Control:Vendor_PE_Score/#Value","Vendor_PE_Date":"#Control:Vendor_PE_Date/#Value","Vendor_Contact_PersonDASH1":"#Control:Vendor_Contact_PersonDASH1/#Value","Vendor_Contact_PersonDASH2":"#Control:Vendor_Contact_PersonDASH2/#Value","Technical_Committee_who_cleared_the_proposal":"#Control:Technical_Committee_who_cleared_the_proposal/#Value","Commercial_Committee_who_cleared_the_proposal":"#Control:Commercial_Committee_who_cleared_the_proposal/#Value","Vendor_References_to_be_displayed_in_Order":"#Control:Vendor_References_to_be_displayed_in_Order/#Value","Shortlisted_Vendors_Response_summary":"#Control:Shortlisted_Vendors_Response_summary/#Value","Order_Value_BKTIn_Project_CurrencyBKT":"#Control:Order_Value_BKTIn_Project_CurrencyBKT/#Value","Order_Value_BKTIn_Bid_CurrencyBKT":"#Control:Order_Value_BKTIn_Bid_CurrencyBKT/#Value","Vendor_Final_Quotation_Date":"#Control:Vendor_Final_Quotation_Date/#Value","Vendor_Final_Quotation_Amount":"#Control:Vendor_Final_Quotation_Amount/#Value","Project_CurrencyORBase_Currency":"#Control:Project_CurrencyORBase_Currency/#Value","Order_CurrencyORBid_currency":"#Control:Order_CurrencyORBid_currency/#Value","Incoterms":"#Control:Incoterms/#Value","Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC":"#Control:Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC/#Value","Details_of_deviated_or_better_terms_agreed_with_the_Vendor":"#Control:Details_of_deviated_or_better_terms_agreed_with_the_Vendor/#Value","Market_Scenario_and_Demand":"#Control:Market_Scenario_and_Demand/#Value","Companys_Position_and_Market_dynamics_of_this_purchase":"#Control:Companys_Position_and_Market_dynamics_of_this_purchase/#Value","Should_Be_Cost_estimated":"#Control:Should_Be_Cost_estimated/#Value","Highlights_of_this_proposal_and_Price_Justification_for_this_proposal":"#Control:Highlights_of_this_proposal_and_Price_Justification_for_this_proposal/#Value","Price_Escalation_Agreed_if_any":"#Control:Price_Escalation_Agreed_if_any/#Value","Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor":"#Control:Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor/#Value","Transportation":"#Control:Transportation/#Value","Logistics_Cost":"#Control:Logistics_Cost/#Value","Delivery_Schedule":"#Control:Delivery_Schedule/#Value","Tax_Details":"#Control:Tax_Details/#Value","Additional_Remarks":"#Control:Additional_Remarks/#Value","ABG":"#Control:ABG/#Value","ABG_Value":"#Control:ABG_Value/#Value","CPBG":"#Control:CPBG/#Value","CPBG_Value":"#Control:CPBG_Value/#Value","Scope_and_Responsibilities":"#Control:Scope_and_Responsibilities/#Value","Commercial_Terms":"#Control:Commercial_Terms/#Value","Compliance_Terms":"#Control:Compliance_Terms/#Value","Others":"#Control:Others/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Create.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Create.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Detail.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Detail.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Edit.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Edit.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_List.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_List.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_CreateEntity.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_CreateEntity.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#Value","PAN_Number":"#Control:PAN_Number/#Value","Proposed_Vendor_Name":"#Control:Proposed_Vendor_Name/#Value","Supplier_Origin_State":"#Control:Supplier_Origin_State/#Value","Destination_State_BKTShipDASHto_LocationBKT":"#Control:Destination_State_BKTShipDASHto_LocationBKT/#Value","Vendor_GST_Number":"#Control:Vendor_GST_Number/#Value","Vendor_CE_Score":"#Control:Vendor_CE_Score/#Value","Vendor_CE_Date":"#Control:Vendor_CE_Date/#Value","Vendor_PE_Score":"#Control:Vendor_PE_Score/#Value","Vendor_PE_Date":"#Control:Vendor_PE_Date/#Value","Vendor_Contact_PersonDASH1":"#Control:Vendor_Contact_PersonDASH1/#Value","Vendor_Contact_PersonDASH2":"#Control:Vendor_Contact_PersonDASH2/#Value","Technical_Committee_who_cleared_the_proposal":"#Control:Technical_Committee_who_cleared_the_proposal/#Value","Commercial_Committee_who_cleared_the_proposal":"#Control:Commercial_Committee_who_cleared_the_proposal/#Value","Vendor_References_to_be_displayed_in_Order":"#Control:Vendor_References_to_be_displayed_in_Order/#Value","Shortlisted_Vendors_Response_summary":"#Control:Shortlisted_Vendors_Response_summary/#Value","Order_Value_BKTIn_Project_CurrencyBKT":"#Control:Order_Value_BKTIn_Project_CurrencyBKT/#Value","Order_Value_BKTIn_Bid_CurrencyBKT":"#Control:Order_Value_BKTIn_Bid_CurrencyBKT/#Value","Vendor_Final_Quotation_Date":"#Control:Vendor_Final_Quotation_Date/#Value","Vendor_Final_Quotation_Amount":"#Control:Vendor_Final_Quotation_Amount/#Value","Project_CurrencyORBase_Currency":"#Control:Project_CurrencyORBase_Currency/#Value","Order_CurrencyORBid_currency":"#Control:Order_CurrencyORBid_currency/#Value","Incoterms":"#Control:Incoterms/#Value","Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC":"#Control:Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC/#Value","Details_of_deviated_or_better_terms_agreed_with_the_Vendor":"#Control:Details_of_deviated_or_better_terms_agreed_with_the_Vendor/#Value","Market_Scenario_and_Demand":"#Control:Market_Scenario_and_Demand/#Value","Companys_Position_and_Market_dynamics_of_this_purchase":"#Control:Companys_Position_and_Market_dynamics_of_this_purchase/#Value","Should_Be_Cost_estimated":"#Control:Should_Be_Cost_estimated/#Value","Highlights_of_this_proposal_and_Price_Justification_for_this_proposal":"#Control:Highlights_of_this_proposal_and_Price_Justification_for_this_proposal/#Value","Price_Escalation_Agreed_if_any":"#Control:Price_Escalation_Agreed_if_any/#Value","Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor":"#Control:Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor/#Value","Transportation":"#Control:Transportation/#Value","Logistics_Cost":"#Control:Logistics_Cost/#Value","Delivery_Schedule":"#Control:Delivery_Schedule/#Value","Tax_Details":"#Control:Tax_Details/#Value","Additional_Remarks":"#Control:Additional_Remarks/#Value","ABG":"#Control:ABG/#Value","ABG_Value":"#Control:ABG_Value/#Value","CPBG":"#Control:CPBG/#Value","CPBG_Value":"#Control:CPBG_Value/#Value","Scope_and_Responsibilities":"#Control:Scope_and_Responsibilities/#Value","Commercial_Terms":"#Control:Commercial_Terms/#Value","Compliance_Terms":"#Control:Compliance_Terms/#Value","Others":"#Control:Others/#Value","venrtovend_Proposed_Vendor_Code":"#Control:venrtovend_Proposed_Vendor_Code/#SelectedValue","venrtovend_PAN_Number":"#Control:venrtovend_PAN_Number/#Value"},"Target":{"EntitySet":"PAN_vendor_response_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteEntity.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteEntity.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"PAN_vendor_response_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_UpdateEntity.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_UpdateEntity.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PAN_vendor_response_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#Value","PAN_Number":"#Control:PAN_Number/#Value","Proposed_Vendor_Name":"#Control:Proposed_Vendor_Name/#Value","Supplier_Origin_State":"#Control:Supplier_Origin_State/#Value","Destination_State_BKTShipDASHto_LocationBKT":"#Control:Destination_State_BKTShipDASHto_LocationBKT/#Value","Vendor_GST_Number":"#Control:Vendor_GST_Number/#Value","Vendor_CE_Score":"#Control:Vendor_CE_Score/#Value","Vendor_CE_Date":"#Control:Vendor_CE_Date/#Value","Vendor_PE_Score":"#Control:Vendor_PE_Score/#Value","Vendor_PE_Date":"#Control:Vendor_PE_Date/#Value","Vendor_Contact_PersonDASH1":"#Control:Vendor_Contact_PersonDASH1/#Value","Vendor_Contact_PersonDASH2":"#Control:Vendor_Contact_PersonDASH2/#Value","Technical_Committee_who_cleared_the_proposal":"#Control:Technical_Committee_who_cleared_the_proposal/#Value","Commercial_Committee_who_cleared_the_proposal":"#Control:Commercial_Committee_who_cleared_the_proposal/#Value","Vendor_References_to_be_displayed_in_Order":"#Control:Vendor_References_to_be_displayed_in_Order/#Value","Shortlisted_Vendors_Response_summary":"#Control:Shortlisted_Vendors_Response_summary/#Value","Order_Value_BKTIn_Project_CurrencyBKT":"#Control:Order_Value_BKTIn_Project_CurrencyBKT/#Value","Order_Value_BKTIn_Bid_CurrencyBKT":"#Control:Order_Value_BKTIn_Bid_CurrencyBKT/#Value","Vendor_Final_Quotation_Date":"#Control:Vendor_Final_Quotation_Date/#Value","Vendor_Final_Quotation_Amount":"#Control:Vendor_Final_Quotation_Amount/#Value","Project_CurrencyORBase_Currency":"#Control:Project_CurrencyORBase_Currency/#Value","Order_CurrencyORBid_currency":"#Control:Order_CurrencyORBid_currency/#Value","Incoterms":"#Control:Incoterms/#Value","Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC":"#Control:Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC/#Value","Details_of_deviated_or_better_terms_agreed_with_the_Vendor":"#Control:Details_of_deviated_or_better_terms_agreed_with_the_Vendor/#Value","Market_Scenario_and_Demand":"#Control:Market_Scenario_and_Demand/#Value","Companys_Position_and_Market_dynamics_of_this_purchase":"#Control:Companys_Position_and_Market_dynamics_of_this_purchase/#Value","Should_Be_Cost_estimated":"#Control:Should_Be_Cost_estimated/#Value","Highlights_of_this_proposal_and_Price_Justification_for_this_proposal":"#Control:Highlights_of_this_proposal_and_Price_Justification_for_this_proposal/#Value","Price_Escalation_Agreed_if_any":"#Control:Price_Escalation_Agreed_if_any/#Value","Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor":"#Control:Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor/#Value","Transportation":"#Control:Transportation/#Value","Logistics_Cost":"#Control:Logistics_Cost/#Value","Delivery_Schedule":"#Control:Delivery_Schedule/#Value","Tax_Details":"#Control:Tax_Details/#Value","Additional_Remarks":"#Control:Additional_Remarks/#Value","ABG":"#Control:ABG/#Value","ABG_Value":"#Control:ABG_Value/#Value","CPBG":"#Control:CPBG/#Value","CPBG_Value":"#Control:CPBG_Value/#Value","Scope_and_Responsibilities":"#Control:Scope_and_Responsibilities/#Value","Commercial_Terms":"#Control:Commercial_Terms/#Value","Compliance_Terms":"#Control:Compliance_Terms/#Value","Others":"#Control:Others/#Value","venrtovend_Proposed_Vendor_Code":"#Control:venrtovend_Proposed_Vendor_Code/#SelectedValue","venrtovend_PAN_Number":"#Control:venrtovend_PAN_Number/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/CloseOffline.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/CloseOffline.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/mypanmdk/Services/mypan.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/mypanmdk/Actions/mypan/Service/CloseOfflineSuccessMessage.action","OnFailure":"/mypanmdk/Actions/mypan/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/CloseOfflineFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/CloseOfflineFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/CloseOfflineSuccessMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/CloseOfflineSuccessMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/DownloadOffline.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/DownloadOffline.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/mypanmdk/Services/mypan.service","DefiningRequests":[{"Name":"PAN_attachments_APR","Query":"PAN_attachments_APR"},{"Name":"PAN_Comments_APR","Query":"PAN_Comments_APR"},{"Name":"PAN_Details_APR","Query":"PAN_Details_APR"},{"Name":"PAN_Payment_Method_Drop_APR","Query":"PAN_Payment_Method_Drop_APR"},{"Name":"PAN_PAYMENT_TERM_DETAILS_APR","Query":"PAN_PAYMENT_TERM_DETAILS_APR"},{"Name":"PAN_PRICE_DETAILS_APR","Query":"PAN_PRICE_DETAILS_APR"},{"Name":"PAN_TYPE_APR","Query":"PAN_TYPE_APR"},{"Name":"PAN_vendor_data_APR","Query":"PAN_vendor_data_APR"},{"Name":"PAN_vendor_response_APR","Query":"PAN_vendor_response_APR"},{"Name":"PAN_WEB_EVENT_APR","Query":"PAN_WEB_EVENT_APR"},{"Name":"PAN_WORKFLOW_HISTORY_APR","Query":"PAN_WORKFLOW_HISTORY_APR"},{"Name":"vendorTaxDetails_APR","Query":"vendorTaxDetails_APR"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/mypanmdk/Actions/mypan/Service/SyncFailureMessage.action","OnSuccess":"/mypanmdk/Rules/mypan/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/DownloadStartedMessage.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/DownloadStartedMessage.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/mypanmdk/Actions/mypan/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/InitializeOffline.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/InitializeOffline.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/mypanmdk/Services/mypan.service","DefiningRequests":[{"Name":"PAN_attachments_APR","Query":"PAN_attachments_APR"},{"Name":"PAN_Comments_APR","Query":"PAN_Comments_APR"},{"Name":"PAN_Details_APR","Query":"PAN_Details_APR"},{"Name":"PAN_Payment_Method_Drop_APR","Query":"PAN_Payment_Method_Drop_APR"},{"Name":"PAN_PAYMENT_TERM_DETAILS_APR","Query":"PAN_PAYMENT_TERM_DETAILS_APR"},{"Name":"PAN_PRICE_DETAILS_APR","Query":"PAN_PRICE_DETAILS_APR"},{"Name":"PAN_TYPE_APR","Query":"PAN_TYPE_APR"},{"Name":"PAN_vendor_data_APR","Query":"PAN_vendor_data_APR"},{"Name":"PAN_vendor_response_APR","Query":"PAN_vendor_response_APR"},{"Name":"PAN_WEB_EVENT_APR","Query":"PAN_WEB_EVENT_APR"},{"Name":"PAN_WORKFLOW_HISTORY_APR","Query":"PAN_WORKFLOW_HISTORY_APR"},{"Name":"vendorTaxDetails_APR","Query":"vendorTaxDetails_APR"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/mypanmdk/Actions/mypan/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/InitializeOfflineFailureMessage.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/InitializeOfflineFailureMessage.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/SyncFailureMessage.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/SyncFailureMessage.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/SyncStartedMessage.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/SyncStartedMessage.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/mypanmdk/Actions/mypan/Service/UploadOffline.action","OnFailure":"/mypanmdk/Actions/mypan/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/Service/UploadOffline.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/Service/UploadOffline.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/mypanmdk/Services/mypan.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/mypanmdk/Actions/mypan/Service/DownloadStartedMessage.action","OnFailure":"/mypanmdk/Actions/mypan/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Create.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Create.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Detail.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Detail.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Detail.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Edit.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Edit.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_List.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_List.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_List.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_CreateEntity.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_CreateEntity.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/mypanmdk/Actions/CreateEntityFailureMessage.action","OnSuccess":"/mypanmdk/Actions/CreateEntitySuccessMessage.action","Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#Value","PAN_Number":"#Control:PAN_Number/#Value","Item_Code":"#Control:Item_Code/#Value","name":"#Control:name/#Value","value":"#Control:value/#Value"},"Target":{"EntitySet":"vendorTaxDetails_APR","Service":"/mypanmdk/Services/mypan.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteEntity.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteEntity.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"vendorTaxDetails_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/mypanmdk/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_UpdateEntity.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_UpdateEntity.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"vendorTaxDetails_APR","Service":"/mypanmdk/Services/mypan.service","ReadLink":"{@odata.readLink}"},"Properties":{"Proposed_Vendor_Code":"#Control:Proposed_Vendor_Code/#Value","PAN_Number":"#Control:PAN_Number/#Value","Item_Code":"#Control:Item_Code/#Value","name":"#Control:name/#Value","value":"#Control:value/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/mypanmdk/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/mypanmdk/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/pushnotification.action":
/*!********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/pushnotification.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.PushNotificationRegister","ActionResult":{"_Name":"pushnotification"}}

/***/ }),

/***/ "./build.definitions/mypanmdk/Actions/tocustom.action":
/*!************************************************************!*\
  !*** ./build.definitions/mypanmdk/Actions/tocustom.action ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"tocustom"},"PageToOpen":"/mypanmdk/Pages/custom.page"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Globals/Application/AppDefinition_Version.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Globals/Application/AppDefinition_Version.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Globals/Application/ApplicationName.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Globals/Application/ApplicationName.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Globals/Application/SupportEmail.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Globals/Application/SupportEmail.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Globals/Application/SupportPhone.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Globals/Application/SupportPhone.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/mypanmdk/Services/mypan.service":
/*!***********************************************************!*\
  !*** ./build.definitions/mypanmdk/Services/mypan.service ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"mypan","OfflineEnabled":false,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let mypanmdk_actions_application_appupdate_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/AppUpdate.action */ "./build.definitions/mypanmdk/Actions/Application/AppUpdate.action")
let mypanmdk_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/mypanmdk/Actions/Application/AppUpdateFailureMessage.action")
let mypanmdk_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/mypanmdk/Actions/Application/AppUpdateProgressBanner.action")
let mypanmdk_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/mypanmdk/Actions/Application/AppUpdateSuccessMessage.action")
let mypanmdk_actions_application_logout_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/Logout.action */ "./build.definitions/mypanmdk/Actions/Application/Logout.action")
let mypanmdk_actions_application_navtoabout_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/NavToAbout.action */ "./build.definitions/mypanmdk/Actions/Application/NavToAbout.action")
let mypanmdk_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/NavToActivityLog.action */ "./build.definitions/mypanmdk/Actions/Application/NavToActivityLog.action")
let mypanmdk_actions_application_navtosupport_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/NavToSupport.action */ "./build.definitions/mypanmdk/Actions/Application/NavToSupport.action")
let mypanmdk_actions_application_onwillupdate_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/OnWillUpdate.action */ "./build.definitions/mypanmdk/Actions/Application/OnWillUpdate.action")
let mypanmdk_actions_application_reset_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/Reset.action */ "./build.definitions/mypanmdk/Actions/Application/Reset.action")
let mypanmdk_actions_application_resetmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/ResetMessage.action */ "./build.definitions/mypanmdk/Actions/Application/ResetMessage.action")
let mypanmdk_actions_application_usermenupopover_action = __webpack_require__(/*! ./mypanmdk/Actions/Application/UserMenuPopover.action */ "./build.definitions/mypanmdk/Actions/Application/UserMenuPopover.action")
let mypanmdk_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./mypanmdk/Actions/CloseModalPage_Cancel.action */ "./build.definitions/mypanmdk/Actions/CloseModalPage_Cancel.action")
let mypanmdk_actions_closemodalpage_complete_action = __webpack_require__(/*! ./mypanmdk/Actions/CloseModalPage_Complete.action */ "./build.definitions/mypanmdk/Actions/CloseModalPage_Complete.action")
let mypanmdk_actions_closepage_action = __webpack_require__(/*! ./mypanmdk/Actions/ClosePage.action */ "./build.definitions/mypanmdk/Actions/ClosePage.action")
let mypanmdk_actions_createentityfailuremessage_action = __webpack_require__(/*! ./mypanmdk/Actions/CreateEntityFailureMessage.action */ "./build.definitions/mypanmdk/Actions/CreateEntityFailureMessage.action")
let mypanmdk_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/mypanmdk/Actions/CreateEntitySuccessMessage.action")
let mypanmdk_actions_deleteconfirmation_action = __webpack_require__(/*! ./mypanmdk/Actions/DeleteConfirmation.action */ "./build.definitions/mypanmdk/Actions/DeleteConfirmation.action")
let mypanmdk_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./mypanmdk/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/mypanmdk/Actions/DeleteEntityFailureMessage.action")
let mypanmdk_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/mypanmdk/Actions/DeleteEntitySuccessMessage.action")
let mypanmdk_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./mypanmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/mypanmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let mypanmdk_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/mypanmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let mypanmdk_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./mypanmdk/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/mypanmdk/Actions/ErrorArchive/NavToErrorArchive_List.action")
let mypanmdk_actions_genericbannermessage_action = __webpack_require__(/*! ./mypanmdk/Actions/GenericBannerMessage.action */ "./build.definitions/mypanmdk/Actions/GenericBannerMessage.action")
let mypanmdk_actions_genericmessagebox_action = __webpack_require__(/*! ./mypanmdk/Actions/GenericMessageBox.action */ "./build.definitions/mypanmdk/Actions/GenericMessageBox.action")
let mypanmdk_actions_genericnavigation_action = __webpack_require__(/*! ./mypanmdk/Actions/GenericNavigation.action */ "./build.definitions/mypanmdk/Actions/GenericNavigation.action")
let mypanmdk_actions_generictoastmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/GenericToastMessage.action */ "./build.definitions/mypanmdk/Actions/GenericToastMessage.action")
let mypanmdk_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./mypanmdk/Actions/Logging/LogUploadFailure.action */ "./build.definitions/mypanmdk/Actions/Logging/LogUploadFailure.action")
let mypanmdk_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./mypanmdk/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/mypanmdk/Actions/Logging/LogUploadSuccessful.action")
let mypanmdk_actions_logging_uploadlog_action = __webpack_require__(/*! ./mypanmdk/Actions/Logging/UploadLog.action */ "./build.definitions/mypanmdk/Actions/Logging/UploadLog.action")
let mypanmdk_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./mypanmdk/Actions/Logging/UploadLogProgress.action */ "./build.definitions/mypanmdk/Actions/Logging/UploadLogProgress.action")
let mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Create.action")
let mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Detail.action")
let mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_Edit.action")
let mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/NavToPAN_attachments_APR_List.action")
let mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_detailpopover_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DetailPopover.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DetailPopover.action")
let mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_opendocument_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_OpenDocument.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_OpenDocument.action")
let mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_uploadstream_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UploadStream.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UploadStream.action")
let mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Create.action")
let mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Detail.action")
let mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_Edit.action")
let mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/NavToPAN_Comments_APR_List.action")
let mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Create.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_attachments_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_attachments_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_attachments_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_comments_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_Comments_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_Comments_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_type_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_TYPE_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_TYPE_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_vendor_data_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_vendor_data_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_vendor_data_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_web_event_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WEB_EVENT_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WEB_EVENT_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_workflow_history_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Detail.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_Edit.action")
let mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/NavToPAN_Details_APR_List.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_attachments_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_comments_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_type_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_vendor_data_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_web_event_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_workflow_history_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_detailpopover_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DetailPopover.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DetailPopover.action")
let mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Create.action")
let mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Detail.action")
let mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_Edit.action")
let mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/NavToPAN_Payment_Method_Drop_APR_List.action")
let mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Create.action")
let mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Detail.action")
let mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_Edit.action")
let mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/NavToPAN_PAYMENT_TERM_DETAILS_APR_List.action")
let mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Create.action")
let mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Detail.action")
let mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_Edit.action")
let mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/NavToPAN_PRICE_DETAILS_APR_List.action")
let mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Create.action")
let mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Detail.action")
let mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_Edit.action")
let mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/NavToPAN_TYPE_APR_List.action")
let mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Create.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_payment_term_details_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_price_details_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_vendor_response_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_vendor_response_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_CreatePAN_vendor_response_APR.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Detail.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_Edit.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/NavToPAN_vendor_data_APR_List.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_payment_term_details_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_price_details_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_vendor_response_apr_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_detailpopover_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DetailPopover.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DetailPopover.action")
let mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Create.action")
let mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Detail.action")
let mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_Edit.action")
let mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/NavToPAN_vendor_response_APR_List.action")
let mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Create.action")
let mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Detail.action")
let mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_Edit.action")
let mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/NavToPAN_WEB_EVENT_APR_List.action")
let mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Create.action")
let mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Detail.action")
let mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_Edit.action")
let mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/NavToPAN_WORKFLOW_HISTORY_APR_List.action")
let mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_CreateEntity.action")
let mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_UpdateEntity.action")
let mypanmdk_actions_mypan_service_closeoffline_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/CloseOffline.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/CloseOffline.action")
let mypanmdk_actions_mypan_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/CloseOfflineFailureMessage.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/CloseOfflineFailureMessage.action")
let mypanmdk_actions_mypan_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/CloseOfflineSuccessMessage.action")
let mypanmdk_actions_mypan_service_downloadoffline_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/DownloadOffline.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/DownloadOffline.action")
let mypanmdk_actions_mypan_service_downloadstartedmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/DownloadStartedMessage.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/DownloadStartedMessage.action")
let mypanmdk_actions_mypan_service_initializeoffline_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/InitializeOffline.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/InitializeOffline.action")
let mypanmdk_actions_mypan_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/InitializeOfflineFailureMessage.action")
let mypanmdk_actions_mypan_service_syncfailuremessage_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/SyncFailureMessage.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/SyncFailureMessage.action")
let mypanmdk_actions_mypan_service_syncstartedmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/SyncStartedMessage.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/SyncStartedMessage.action")
let mypanmdk_actions_mypan_service_uploadoffline_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/Service/UploadOffline.action */ "./build.definitions/mypanmdk/Actions/mypan/Service/UploadOffline.action")
let mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_create_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Create.action */ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Create.action")
let mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_detail_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Detail.action */ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Detail.action")
let mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_edit_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Edit.action */ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_Edit.action")
let mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_list_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_List.action */ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/NavTovendorTaxDetails_APR_List.action")
let mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_createentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_CreateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_CreateEntity.action")
let mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_deleteentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteEntity.action")
let mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_updateentity_action = __webpack_require__(/*! ./mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_UpdateEntity.action */ "./build.definitions/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_UpdateEntity.action")
let mypanmdk_actions_pushnotification_action = __webpack_require__(/*! ./mypanmdk/Actions/pushnotification.action */ "./build.definitions/mypanmdk/Actions/pushnotification.action")
let mypanmdk_actions_tocustom_action = __webpack_require__(/*! ./mypanmdk/Actions/tocustom.action */ "./build.definitions/mypanmdk/Actions/tocustom.action")
let mypanmdk_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./mypanmdk/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/mypanmdk/Actions/UpdateEntityFailureMessage.action")
let mypanmdk_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/mypanmdk/Actions/UpdateEntitySuccessMessage.action")
let mypanmdk_actions_uploadstreamfailuremessage_action = __webpack_require__(/*! ./mypanmdk/Actions/UploadStreamFailureMessage.action */ "./build.definitions/mypanmdk/Actions/UploadStreamFailureMessage.action")
let mypanmdk_actions_uploadstreamsuccessmessage_action = __webpack_require__(/*! ./mypanmdk/Actions/UploadStreamSuccessMessage.action */ "./build.definitions/mypanmdk/Actions/UploadStreamSuccessMessage.action")
let mypanmdk_globals_application_appdefinition_version_global = __webpack_require__(/*! ./mypanmdk/Globals/Application/AppDefinition_Version.global */ "./build.definitions/mypanmdk/Globals/Application/AppDefinition_Version.global")
let mypanmdk_globals_application_applicationname_global = __webpack_require__(/*! ./mypanmdk/Globals/Application/ApplicationName.global */ "./build.definitions/mypanmdk/Globals/Application/ApplicationName.global")
let mypanmdk_globals_application_supportemail_global = __webpack_require__(/*! ./mypanmdk/Globals/Application/SupportEmail.global */ "./build.definitions/mypanmdk/Globals/Application/SupportEmail.global")
let mypanmdk_globals_application_supportphone_global = __webpack_require__(/*! ./mypanmdk/Globals/Application/SupportPhone.global */ "./build.definitions/mypanmdk/Globals/Application/SupportPhone.global")
let mypanmdk_i18n_i18n_properties = __webpack_require__(/*! ./mypanmdk/i18n/i18n.properties */ "./build.definitions/mypanmdk/i18n/i18n.properties")
let mypanmdk_images_panda_png = __webpack_require__(/*! ./mypanmdk/Images/panda.png */ "./build.definitions/mypanmdk/Images/panda.png")
let mypanmdk_jsconfig_json = __webpack_require__(/*! ./mypanmdk/jsconfig.json */ "./build.definitions/mypanmdk/jsconfig.json")
let mypanmdk_pages_application_about_page = __webpack_require__(/*! ./mypanmdk/Pages/Application/About.page */ "./build.definitions/mypanmdk/Pages/Application/About.page")
let mypanmdk_pages_application_support_page = __webpack_require__(/*! ./mypanmdk/Pages/Application/Support.page */ "./build.definitions/mypanmdk/Pages/Application/Support.page")
let mypanmdk_pages_application_useractivitylog_page = __webpack_require__(/*! ./mypanmdk/Pages/Application/UserActivityLog.page */ "./build.definitions/mypanmdk/Pages/Application/UserActivityLog.page")
let mypanmdk_pages_custom_page = __webpack_require__(/*! ./mypanmdk/Pages/custom.page */ "./build.definitions/mypanmdk/Pages/custom.page")
let mypanmdk_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/mypanmdk/Pages/ErrorArchive/ErrorArchive_Detail.page")
let mypanmdk_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./mypanmdk/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/mypanmdk/Pages/ErrorArchive/ErrorArchive_List.page")
let mypanmdk_pages_login_page = __webpack_require__(/*! ./mypanmdk/Pages/Login.page */ "./build.definitions/mypanmdk/Pages/Login.page")
let mypanmdk_pages_main_page = __webpack_require__(/*! ./mypanmdk/Pages/Main.page */ "./build.definitions/mypanmdk/Pages/Main.page")
let mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Create.page")
let mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Detail.page")
let mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_Edit.page")
let mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_attachments_APR/PAN_attachments_APR_List.page")
let mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Create.page")
let mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Detail.page")
let mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_Edit.page")
let mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Comments_APR/PAN_Comments_APR_List.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Create.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_attachments_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_attachments_APR.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_comments_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_Comments_APR.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_type_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_TYPE_APR.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_vendor_data_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_vendor_data_APR.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_web_event_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WEB_EVENT_APR.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_workflow_history_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_CreatePAN_WORKFLOW_HISTORY_APR.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_detail_copy_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail copy.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail copy.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Detail.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_Edit.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_list_copy_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List copy.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List copy.page")
let mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Details_APR/PAN_Details_APR_List.page")
let mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Create.page")
let mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Detail.page")
let mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_Edit.page")
let mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_List.page")
let mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Create.page")
let mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Detail.page")
let mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_Edit.page")
let mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_List.page")
let mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Create.page")
let mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Detail.page")
let mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_Edit.page")
let mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_List.page")
let mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Create.page")
let mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Detail.page")
let mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_Edit.page")
let mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_TYPE_APR/PAN_TYPE_APR_List.page")
let mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Create.page")
let mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_payment_term_details_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PAYMENT_TERM_DETAILS_APR.page")
let mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_price_details_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_PRICE_DETAILS_APR.page")
let mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_vendor_response_apr_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_CreatePAN_vendor_response_APR.page")
let mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Detail.page")
let mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_Edit.page")
let mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_data_APR/PAN_vendor_data_APR_List.page")
let mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Create.page")
let mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Detail.page")
let mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_Edit.page")
let mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_vendor_response_APR/PAN_vendor_response_APR_List.page")
let mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Create.page")
let mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Detail.page")
let mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_Edit.page")
let mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_List.page")
let mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Create.page")
let mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Detail.page")
let mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_Edit.page")
let mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_List.page")
let mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_create_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Create.page */ "./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Create.page")
let mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_detail_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Detail.page */ "./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Detail.page")
let mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_edit_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Edit.page */ "./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_Edit.page")
let mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_list_page = __webpack_require__(/*! ./mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_List.page */ "./build.definitions/mypanmdk/Pages/mypan_vendorTaxDetails_APR/vendorTaxDetails_APR_List.page")
let mypanmdk_rules_application_appupdatefailure_js = __webpack_require__(/*! ./mypanmdk/Rules/Application/AppUpdateFailure.js */ "./build.definitions/mypanmdk/Rules/Application/AppUpdateFailure.js")
let mypanmdk_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./mypanmdk/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/mypanmdk/Rules/Application/AppUpdateSuccess.js")
let mypanmdk_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./mypanmdk/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/mypanmdk/Rules/Application/ClientIsMultiUserMode.js")
let mypanmdk_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./mypanmdk/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/mypanmdk/Rules/Application/GetClientSupportVersions.js")
let mypanmdk_rules_application_getclientversion_js = __webpack_require__(/*! ./mypanmdk/Rules/Application/GetClientVersion.js */ "./build.definitions/mypanmdk/Rules/Application/GetClientVersion.js")
let mypanmdk_rules_application_onwillupdate_js = __webpack_require__(/*! ./mypanmdk/Rules/Application/OnWillUpdate.js */ "./build.definitions/mypanmdk/Rules/Application/OnWillUpdate.js")
let mypanmdk_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./mypanmdk/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/mypanmdk/Rules/Application/ResetAppSettingsAndLogout.js")
let mypanmdk_rules_logging_loglevels_js = __webpack_require__(/*! ./mypanmdk/Rules/Logging/LogLevels.js */ "./build.definitions/mypanmdk/Rules/Logging/LogLevels.js")
let mypanmdk_rules_logging_settracecategories_js = __webpack_require__(/*! ./mypanmdk/Rules/Logging/SetTraceCategories.js */ "./build.definitions/mypanmdk/Rules/Logging/SetTraceCategories.js")
let mypanmdk_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./mypanmdk/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/mypanmdk/Rules/Logging/SetUserLogLevel.js")
let mypanmdk_rules_logging_togglelogging_js = __webpack_require__(/*! ./mypanmdk/Rules/Logging/ToggleLogging.js */ "./build.definitions/mypanmdk/Rules/Logging/ToggleLogging.js")
let mypanmdk_rules_logging_tracecategories_js = __webpack_require__(/*! ./mypanmdk/Rules/Logging/TraceCategories.js */ "./build.definitions/mypanmdk/Rules/Logging/TraceCategories.js")
let mypanmdk_rules_logging_userlogsetting_js = __webpack_require__(/*! ./mypanmdk/Rules/Logging/UserLogSetting.js */ "./build.definitions/mypanmdk/Rules/Logging/UserLogSetting.js")
let mypanmdk_rules_login_js = __webpack_require__(/*! ./mypanmdk/Rules/Login.js */ "./build.definitions/mypanmdk/Rules/Login.js")
let mypanmdk_rules_mypan_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/ErrorArchive_CheckForSyncError.js */ "./build.definitions/mypanmdk/Rules/mypan/ErrorArchive_CheckForSyncError.js")
let mypanmdk_rules_mypan_pan_attachments_apr_pan_attachments_apr_createentity_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.js")
let mypanmdk_rules_mypan_pan_attachments_apr_pan_attachments_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_comments_apr_pan_comments_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_details_apr_pan_details_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_Details_APR/PAN_Details_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_Details_APR/PAN_Details_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_price_details_apr_pan_price_details_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_type_apr_pan_type_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_vendor_data_apr_pan_vendor_data_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_vendor_response_apr_pan_vendor_response_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_web_event_apr_pan_web_event_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_pan_workflow_history_apr_pan_workflow_history_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteConfirmation.js")
let mypanmdk_rules_mypan_vendortaxdetails_apr_vendortaxdetails_apr_deleteconfirmation_js = __webpack_require__(/*! ./mypanmdk/Rules/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteConfirmation.js */ "./build.definitions/mypanmdk/Rules/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteConfirmation.js")
let mypanmdk_rules_second_button_js = __webpack_require__(/*! ./mypanmdk/Rules/second_button.js */ "./build.definitions/mypanmdk/Rules/second_button.js")
let mypanmdk_rules_service_initialize_js = __webpack_require__(/*! ./mypanmdk/Rules/Service/Initialize.js */ "./build.definitions/mypanmdk/Rules/Service/Initialize.js")
let mypanmdk_services_mypan_service = __webpack_require__(/*! ./mypanmdk/Services/mypan.service */ "./build.definitions/mypanmdk/Services/mypan.service")
let mypanmdk_styles_styles_css = __webpack_require__(/*! ./mypanmdk/Styles/Styles.css */ "./build.definitions/mypanmdk/Styles/Styles.css")
let mypanmdk_styles_styles_json = __webpack_require__(/*! ./mypanmdk/Styles/Styles.json */ "./build.definitions/mypanmdk/Styles/Styles.json")
let mypanmdk_styles_styles_less = __webpack_require__(/*! ./mypanmdk/Styles/Styles.less */ "./build.definitions/mypanmdk/Styles/Styles.less")
let mypanmdk_styles_styles_nss = __webpack_require__(/*! ./mypanmdk/Styles/Styles.nss */ "./build.definitions/mypanmdk/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	mypanmdk_actions_application_appupdate_action : mypanmdk_actions_application_appupdate_action,
	mypanmdk_actions_application_appupdatefailuremessage_action : mypanmdk_actions_application_appupdatefailuremessage_action,
	mypanmdk_actions_application_appupdateprogressbanner_action : mypanmdk_actions_application_appupdateprogressbanner_action,
	mypanmdk_actions_application_appupdatesuccessmessage_action : mypanmdk_actions_application_appupdatesuccessmessage_action,
	mypanmdk_actions_application_logout_action : mypanmdk_actions_application_logout_action,
	mypanmdk_actions_application_navtoabout_action : mypanmdk_actions_application_navtoabout_action,
	mypanmdk_actions_application_navtoactivitylog_action : mypanmdk_actions_application_navtoactivitylog_action,
	mypanmdk_actions_application_navtosupport_action : mypanmdk_actions_application_navtosupport_action,
	mypanmdk_actions_application_onwillupdate_action : mypanmdk_actions_application_onwillupdate_action,
	mypanmdk_actions_application_reset_action : mypanmdk_actions_application_reset_action,
	mypanmdk_actions_application_resetmessage_action : mypanmdk_actions_application_resetmessage_action,
	mypanmdk_actions_application_usermenupopover_action : mypanmdk_actions_application_usermenupopover_action,
	mypanmdk_actions_closemodalpage_cancel_action : mypanmdk_actions_closemodalpage_cancel_action,
	mypanmdk_actions_closemodalpage_complete_action : mypanmdk_actions_closemodalpage_complete_action,
	mypanmdk_actions_closepage_action : mypanmdk_actions_closepage_action,
	mypanmdk_actions_createentityfailuremessage_action : mypanmdk_actions_createentityfailuremessage_action,
	mypanmdk_actions_createentitysuccessmessage_action : mypanmdk_actions_createentitysuccessmessage_action,
	mypanmdk_actions_deleteconfirmation_action : mypanmdk_actions_deleteconfirmation_action,
	mypanmdk_actions_deleteentityfailuremessage_action : mypanmdk_actions_deleteentityfailuremessage_action,
	mypanmdk_actions_deleteentitysuccessmessage_action : mypanmdk_actions_deleteentitysuccessmessage_action,
	mypanmdk_actions_errorarchive_errorarchive_syncfailure_action : mypanmdk_actions_errorarchive_errorarchive_syncfailure_action,
	mypanmdk_actions_errorarchive_navtoerrorarchive_detail_action : mypanmdk_actions_errorarchive_navtoerrorarchive_detail_action,
	mypanmdk_actions_errorarchive_navtoerrorarchive_list_action : mypanmdk_actions_errorarchive_navtoerrorarchive_list_action,
	mypanmdk_actions_genericbannermessage_action : mypanmdk_actions_genericbannermessage_action,
	mypanmdk_actions_genericmessagebox_action : mypanmdk_actions_genericmessagebox_action,
	mypanmdk_actions_genericnavigation_action : mypanmdk_actions_genericnavigation_action,
	mypanmdk_actions_generictoastmessage_action : mypanmdk_actions_generictoastmessage_action,
	mypanmdk_actions_logging_loguploadfailure_action : mypanmdk_actions_logging_loguploadfailure_action,
	mypanmdk_actions_logging_loguploadsuccessful_action : mypanmdk_actions_logging_loguploadsuccessful_action,
	mypanmdk_actions_logging_uploadlog_action : mypanmdk_actions_logging_uploadlog_action,
	mypanmdk_actions_logging_uploadlogprogress_action : mypanmdk_actions_logging_uploadlogprogress_action,
	mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_create_action : mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_create_action,
	mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_detail_action : mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_detail_action,
	mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_edit_action : mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_edit_action,
	mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_list_action : mypanmdk_actions_mypan_pan_attachments_apr_navtopan_attachments_apr_list_action,
	mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_createentity_action : mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_createentity_action,
	mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_deleteentity_action : mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_detailpopover_action : mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_detailpopover_action,
	mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_opendocument_action : mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_opendocument_action,
	mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_updateentity_action : mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_uploadstream_action : mypanmdk_actions_mypan_pan_attachments_apr_pan_attachments_apr_uploadstream_action,
	mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_create_action : mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_create_action,
	mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_detail_action : mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_detail_action,
	mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_edit_action : mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_edit_action,
	mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_list_action : mypanmdk_actions_mypan_pan_comments_apr_navtopan_comments_apr_list_action,
	mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_createentity_action : mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_createentity_action,
	mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_deleteentity_action : mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_updateentity_action : mypanmdk_actions_mypan_pan_comments_apr_pan_comments_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_create_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_create_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_attachments_apr_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_attachments_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_comments_apr_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_comments_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_type_apr_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_type_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_vendor_data_apr_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_vendor_data_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_web_event_apr_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_web_event_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_workflow_history_apr_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_createpan_workflow_history_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_detail_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_detail_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_edit_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_edit_action,
	mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_list_action : mypanmdk_actions_mypan_pan_details_apr_navtopan_details_apr_list_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createentity_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createentity_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_attachments_apr_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_attachments_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_comments_apr_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_comments_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_type_apr_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_type_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_vendor_data_apr_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_vendor_data_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_web_event_apr_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_web_event_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_workflow_history_apr_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_createpan_workflow_history_apr_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_deleteentity_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_detailpopover_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_detailpopover_action,
	mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_updateentity_action : mypanmdk_actions_mypan_pan_details_apr_pan_details_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_create_action : mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_create_action,
	mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_detail_action : mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_detail_action,
	mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_edit_action : mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_edit_action,
	mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_list_action : mypanmdk_actions_mypan_pan_payment_method_drop_apr_navtopan_payment_method_drop_apr_list_action,
	mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_createentity_action : mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_createentity_action,
	mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_deleteentity_action : mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_updateentity_action : mypanmdk_actions_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_create_action : mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_create_action,
	mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_detail_action : mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_detail_action,
	mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_edit_action : mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_edit_action,
	mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_list_action : mypanmdk_actions_mypan_pan_payment_term_details_apr_navtopan_payment_term_details_apr_list_action,
	mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_createentity_action : mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_createentity_action,
	mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_deleteentity_action : mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_updateentity_action : mypanmdk_actions_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_create_action : mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_create_action,
	mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_detail_action : mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_detail_action,
	mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_edit_action : mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_edit_action,
	mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_list_action : mypanmdk_actions_mypan_pan_price_details_apr_navtopan_price_details_apr_list_action,
	mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_createentity_action : mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_createentity_action,
	mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_deleteentity_action : mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_updateentity_action : mypanmdk_actions_mypan_pan_price_details_apr_pan_price_details_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_create_action : mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_create_action,
	mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_detail_action : mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_detail_action,
	mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_edit_action : mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_edit_action,
	mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_list_action : mypanmdk_actions_mypan_pan_type_apr_navtopan_type_apr_list_action,
	mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_createentity_action : mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_createentity_action,
	mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_deleteentity_action : mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_updateentity_action : mypanmdk_actions_mypan_pan_type_apr_pan_type_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_create_action : mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_create_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_payment_term_details_apr_action : mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_payment_term_details_apr_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_price_details_apr_action : mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_price_details_apr_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_vendor_response_apr_action : mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_createpan_vendor_response_apr_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_detail_action : mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_detail_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_edit_action : mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_edit_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_list_action : mypanmdk_actions_mypan_pan_vendor_data_apr_navtopan_vendor_data_apr_list_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createentity_action : mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createentity_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_payment_term_details_apr_action : mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_payment_term_details_apr_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_price_details_apr_action : mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_price_details_apr_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_vendor_response_apr_action : mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_vendor_response_apr_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_deleteentity_action : mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_detailpopover_action : mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_detailpopover_action,
	mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_updateentity_action : mypanmdk_actions_mypan_pan_vendor_data_apr_pan_vendor_data_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_create_action : mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_create_action,
	mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_detail_action : mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_detail_action,
	mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_edit_action : mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_edit_action,
	mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_list_action : mypanmdk_actions_mypan_pan_vendor_response_apr_navtopan_vendor_response_apr_list_action,
	mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_createentity_action : mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_createentity_action,
	mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_deleteentity_action : mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_updateentity_action : mypanmdk_actions_mypan_pan_vendor_response_apr_pan_vendor_response_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_create_action : mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_create_action,
	mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_detail_action : mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_detail_action,
	mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_edit_action : mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_edit_action,
	mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_list_action : mypanmdk_actions_mypan_pan_web_event_apr_navtopan_web_event_apr_list_action,
	mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_createentity_action : mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_createentity_action,
	mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_deleteentity_action : mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_updateentity_action : mypanmdk_actions_mypan_pan_web_event_apr_pan_web_event_apr_updateentity_action,
	mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_create_action : mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_create_action,
	mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_detail_action : mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_detail_action,
	mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_edit_action : mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_edit_action,
	mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_list_action : mypanmdk_actions_mypan_pan_workflow_history_apr_navtopan_workflow_history_apr_list_action,
	mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_createentity_action : mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_createentity_action,
	mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_deleteentity_action : mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_deleteentity_action,
	mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_updateentity_action : mypanmdk_actions_mypan_pan_workflow_history_apr_pan_workflow_history_apr_updateentity_action,
	mypanmdk_actions_mypan_service_closeoffline_action : mypanmdk_actions_mypan_service_closeoffline_action,
	mypanmdk_actions_mypan_service_closeofflinefailuremessage_action : mypanmdk_actions_mypan_service_closeofflinefailuremessage_action,
	mypanmdk_actions_mypan_service_closeofflinesuccessmessage_action : mypanmdk_actions_mypan_service_closeofflinesuccessmessage_action,
	mypanmdk_actions_mypan_service_downloadoffline_action : mypanmdk_actions_mypan_service_downloadoffline_action,
	mypanmdk_actions_mypan_service_downloadstartedmessage_action : mypanmdk_actions_mypan_service_downloadstartedmessage_action,
	mypanmdk_actions_mypan_service_initializeoffline_action : mypanmdk_actions_mypan_service_initializeoffline_action,
	mypanmdk_actions_mypan_service_initializeofflinefailuremessage_action : mypanmdk_actions_mypan_service_initializeofflinefailuremessage_action,
	mypanmdk_actions_mypan_service_syncfailuremessage_action : mypanmdk_actions_mypan_service_syncfailuremessage_action,
	mypanmdk_actions_mypan_service_syncstartedmessage_action : mypanmdk_actions_mypan_service_syncstartedmessage_action,
	mypanmdk_actions_mypan_service_uploadoffline_action : mypanmdk_actions_mypan_service_uploadoffline_action,
	mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_create_action : mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_create_action,
	mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_detail_action : mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_detail_action,
	mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_edit_action : mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_edit_action,
	mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_list_action : mypanmdk_actions_mypan_vendortaxdetails_apr_navtovendortaxdetails_apr_list_action,
	mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_createentity_action : mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_createentity_action,
	mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_deleteentity_action : mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_deleteentity_action,
	mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_updateentity_action : mypanmdk_actions_mypan_vendortaxdetails_apr_vendortaxdetails_apr_updateentity_action,
	mypanmdk_actions_pushnotification_action : mypanmdk_actions_pushnotification_action,
	mypanmdk_actions_tocustom_action : mypanmdk_actions_tocustom_action,
	mypanmdk_actions_updateentityfailuremessage_action : mypanmdk_actions_updateentityfailuremessage_action,
	mypanmdk_actions_updateentitysuccessmessage_action : mypanmdk_actions_updateentitysuccessmessage_action,
	mypanmdk_actions_uploadstreamfailuremessage_action : mypanmdk_actions_uploadstreamfailuremessage_action,
	mypanmdk_actions_uploadstreamsuccessmessage_action : mypanmdk_actions_uploadstreamsuccessmessage_action,
	mypanmdk_globals_application_appdefinition_version_global : mypanmdk_globals_application_appdefinition_version_global,
	mypanmdk_globals_application_applicationname_global : mypanmdk_globals_application_applicationname_global,
	mypanmdk_globals_application_supportemail_global : mypanmdk_globals_application_supportemail_global,
	mypanmdk_globals_application_supportphone_global : mypanmdk_globals_application_supportphone_global,
	mypanmdk_i18n_i18n_properties : mypanmdk_i18n_i18n_properties,
	mypanmdk_images_panda_png : mypanmdk_images_panda_png,
	mypanmdk_jsconfig_json : mypanmdk_jsconfig_json,
	mypanmdk_pages_application_about_page : mypanmdk_pages_application_about_page,
	mypanmdk_pages_application_support_page : mypanmdk_pages_application_support_page,
	mypanmdk_pages_application_useractivitylog_page : mypanmdk_pages_application_useractivitylog_page,
	mypanmdk_pages_custom_page : mypanmdk_pages_custom_page,
	mypanmdk_pages_errorarchive_errorarchive_detail_page : mypanmdk_pages_errorarchive_errorarchive_detail_page,
	mypanmdk_pages_errorarchive_errorarchive_list_page : mypanmdk_pages_errorarchive_errorarchive_list_page,
	mypanmdk_pages_login_page : mypanmdk_pages_login_page,
	mypanmdk_pages_main_page : mypanmdk_pages_main_page,
	mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_create_page : mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_create_page,
	mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_detail_page : mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_detail_page,
	mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_edit_page : mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_edit_page,
	mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_list_page : mypanmdk_pages_mypan_pan_attachments_apr_pan_attachments_apr_list_page,
	mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_create_page : mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_create_page,
	mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_detail_page : mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_detail_page,
	mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_edit_page : mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_edit_page,
	mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_list_page : mypanmdk_pages_mypan_pan_comments_apr_pan_comments_apr_list_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_create_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_create_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_attachments_apr_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_attachments_apr_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_comments_apr_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_comments_apr_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_type_apr_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_type_apr_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_vendor_data_apr_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_vendor_data_apr_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_web_event_apr_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_web_event_apr_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_workflow_history_apr_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_createpan_workflow_history_apr_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_detail_copy_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_detail_copy_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_detail_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_detail_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_edit_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_edit_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_list_copy_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_list_copy_page,
	mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_list_page : mypanmdk_pages_mypan_pan_details_apr_pan_details_apr_list_page,
	mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_create_page : mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_create_page,
	mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_detail_page : mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_detail_page,
	mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_edit_page : mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_edit_page,
	mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_list_page : mypanmdk_pages_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_list_page,
	mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_create_page : mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_create_page,
	mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_detail_page : mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_detail_page,
	mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_edit_page : mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_edit_page,
	mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_list_page : mypanmdk_pages_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_list_page,
	mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_create_page : mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_create_page,
	mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_detail_page : mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_detail_page,
	mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_edit_page : mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_edit_page,
	mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_list_page : mypanmdk_pages_mypan_pan_price_details_apr_pan_price_details_apr_list_page,
	mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_create_page : mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_create_page,
	mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_detail_page : mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_detail_page,
	mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_edit_page : mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_edit_page,
	mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_list_page : mypanmdk_pages_mypan_pan_type_apr_pan_type_apr_list_page,
	mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_create_page : mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_create_page,
	mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_payment_term_details_apr_page : mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_payment_term_details_apr_page,
	mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_price_details_apr_page : mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_price_details_apr_page,
	mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_vendor_response_apr_page : mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_createpan_vendor_response_apr_page,
	mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_detail_page : mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_detail_page,
	mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_edit_page : mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_edit_page,
	mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_list_page : mypanmdk_pages_mypan_pan_vendor_data_apr_pan_vendor_data_apr_list_page,
	mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_create_page : mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_create_page,
	mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_detail_page : mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_detail_page,
	mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_edit_page : mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_edit_page,
	mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_list_page : mypanmdk_pages_mypan_pan_vendor_response_apr_pan_vendor_response_apr_list_page,
	mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_create_page : mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_create_page,
	mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_detail_page : mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_detail_page,
	mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_edit_page : mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_edit_page,
	mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_list_page : mypanmdk_pages_mypan_pan_web_event_apr_pan_web_event_apr_list_page,
	mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_create_page : mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_create_page,
	mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_detail_page : mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_detail_page,
	mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_edit_page : mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_edit_page,
	mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_list_page : mypanmdk_pages_mypan_pan_workflow_history_apr_pan_workflow_history_apr_list_page,
	mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_create_page : mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_create_page,
	mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_detail_page : mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_detail_page,
	mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_edit_page : mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_edit_page,
	mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_list_page : mypanmdk_pages_mypan_vendortaxdetails_apr_vendortaxdetails_apr_list_page,
	mypanmdk_rules_application_appupdatefailure_js : mypanmdk_rules_application_appupdatefailure_js,
	mypanmdk_rules_application_appupdatesuccess_js : mypanmdk_rules_application_appupdatesuccess_js,
	mypanmdk_rules_application_clientismultiusermode_js : mypanmdk_rules_application_clientismultiusermode_js,
	mypanmdk_rules_application_getclientsupportversions_js : mypanmdk_rules_application_getclientsupportversions_js,
	mypanmdk_rules_application_getclientversion_js : mypanmdk_rules_application_getclientversion_js,
	mypanmdk_rules_application_onwillupdate_js : mypanmdk_rules_application_onwillupdate_js,
	mypanmdk_rules_application_resetappsettingsandlogout_js : mypanmdk_rules_application_resetappsettingsandlogout_js,
	mypanmdk_rules_logging_loglevels_js : mypanmdk_rules_logging_loglevels_js,
	mypanmdk_rules_logging_settracecategories_js : mypanmdk_rules_logging_settracecategories_js,
	mypanmdk_rules_logging_setuserloglevel_js : mypanmdk_rules_logging_setuserloglevel_js,
	mypanmdk_rules_logging_togglelogging_js : mypanmdk_rules_logging_togglelogging_js,
	mypanmdk_rules_logging_tracecategories_js : mypanmdk_rules_logging_tracecategories_js,
	mypanmdk_rules_logging_userlogsetting_js : mypanmdk_rules_logging_userlogsetting_js,
	mypanmdk_rules_login_js : mypanmdk_rules_login_js,
	mypanmdk_rules_mypan_errorarchive_checkforsyncerror_js : mypanmdk_rules_mypan_errorarchive_checkforsyncerror_js,
	mypanmdk_rules_mypan_pan_attachments_apr_pan_attachments_apr_createentity_js : mypanmdk_rules_mypan_pan_attachments_apr_pan_attachments_apr_createentity_js,
	mypanmdk_rules_mypan_pan_attachments_apr_pan_attachments_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_attachments_apr_pan_attachments_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_comments_apr_pan_comments_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_comments_apr_pan_comments_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_details_apr_pan_details_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_details_apr_pan_details_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_payment_method_drop_apr_pan_payment_method_drop_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_payment_term_details_apr_pan_payment_term_details_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_price_details_apr_pan_price_details_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_price_details_apr_pan_price_details_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_type_apr_pan_type_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_type_apr_pan_type_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_vendor_data_apr_pan_vendor_data_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_vendor_data_apr_pan_vendor_data_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_vendor_response_apr_pan_vendor_response_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_vendor_response_apr_pan_vendor_response_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_web_event_apr_pan_web_event_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_web_event_apr_pan_web_event_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_pan_workflow_history_apr_pan_workflow_history_apr_deleteconfirmation_js : mypanmdk_rules_mypan_pan_workflow_history_apr_pan_workflow_history_apr_deleteconfirmation_js,
	mypanmdk_rules_mypan_vendortaxdetails_apr_vendortaxdetails_apr_deleteconfirmation_js : mypanmdk_rules_mypan_vendortaxdetails_apr_vendortaxdetails_apr_deleteconfirmation_js,
	mypanmdk_rules_second_button_js : mypanmdk_rules_second_button_js,
	mypanmdk_rules_service_initialize_js : mypanmdk_rules_service_initialize_js,
	mypanmdk_services_mypan_service : mypanmdk_services_mypan_service,
	mypanmdk_styles_styles_css : mypanmdk_styles_styles_css,
	mypanmdk_styles_styles_json : mypanmdk_styles_styles_json,
	mypanmdk_styles_styles_less : mypanmdk_styles_styles_less,
	mypanmdk_styles_styles_nss : mypanmdk_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Application/AppUpdateFailure.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Application/AppUpdateFailure.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/mypanmdk/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Application/AppUpdateSuccess.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Application/AppUpdateSuccess.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/mypanmdk/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/mypanmdk/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Application/ClientIsMultiUserMode.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Application/ClientIsMultiUserMode.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Application/GetClientSupportVersions.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Application/GetClientSupportVersions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Application/GetClientVersion.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Application/GetClientVersion.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Application/OnWillUpdate.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Application/OnWillUpdate.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Application/ResetAppSettingsAndLogout.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/mypanmdk/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Logging/LogLevels.js":
/*!***************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Logging/LogLevels.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Logging/SetTraceCategories.js":
/*!************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Logging/SetTraceCategories.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Logging/SetUserLogLevel.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Logging/SetUserLogLevel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Logging/ToggleLogging.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Logging/ToggleLogging.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Logging/TraceCategories.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Logging/TraceCategories.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Logging/UserLogSetting.js":
/*!********************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Logging/UserLogSetting.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Login.js":
/*!***************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Login.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputFieldOnValueChange)
/* harmony export */ });
// // // import { Console } from "console";

// // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function Login(clientAPI) {
// //     debugger;
// //     // // const vendor_Name = this.context.binding.Vendor_Name; 
// //     let vendor_Name = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// //     // let vendorName = vendor_Name.getValue();
// //     // console.log(vendorName);
// //   // let b = clientAPI._context.element._model._model.callback._page.childViews[0]._actionItems._actionBar.parent.parent._router._reactInternalFiber.child.firstEffect.alternate.memoizedProps.value;
// //   // console.log(b);
// //   // alert(b);
// //     // let a = context.binding;
// //     // console.log(a);
// //     // console.log()

// //     if (vendor_Name = u) {
// //       clientAPI._context.element._props.definition.parent._data.Controls[0].Enabled = true;
// //     }


// // }


// // import { Console } from "console";

// // /**
// //  * Describe this function...
// // /**
// //  * @param {IClientAPI} clientAPI
// //  */
// // // export default function Login(clientAPI) {
// // //   debugger;
// // //   let vendor_Name = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // //   let button = clientAPI._context.element._props.definition.parent._data.Controls[2].IsVisible = false;
// // //   // Assuming u is defined somewhere in your code
// // //   if (vendor_Name === u) {
// // //     // clientAPI._context.element._props.definition.parent._data.Controls[0].Enabled = true;
// // //     button = true;
// // //   }
// // // }

// // /**
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function Login(clientAPI) {
// //   debugger;

// //   // Get the vendor name control
// //   let vendor_Name_Control = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
  
// //   // Get the button control
// //   // let buttonControl = clientAPI._context.element._props.definition.parent._data.Controls[2];
// //   let a = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');

// //   // Initially hide the button
// // a = false;

// //   // Add an event listener for changes in the vendor name input
// //   vendor_Name_Control.setOnChange(() => {
// //     let vendor_Name = vendor_Name_Control.getValue();

// //     // Show the button only if the vendor name is not empty
// //     if (vendor_Name) {
// //       buttonControl.IsVisible = true;
// //     } else {
// //       buttonControl.IsVisible = false;
// //     }
// //   });
// // }


// /**
//  * @param {IClientAPI} clientAPI
//  */
// export default function Login(clientAPI) {
 

//   // Get the vendor name control
//   let vendor_Name_Control = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
  
//   // Get the button control
//   let buttonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');

//   // Initially hide the button
//   buttonControl.IsVisible = false;

//   // Add an event listener for changes in the vendor name input
//   vendor_Name_Control.setOnChange(() => {
//     let vendor_Name = vendor_Name_Control.getValue();

//     // Show the button only if the vendor name is not empty
//     if (vendor_Name) {
//       buttonControl.IsVisible = true; // Show button
//     } else {
//       buttonControl.IsVisible = false; // Hide button
//     }
//   });
// }

// ===================================================================================
// export default function InputFieldOnValueChange(clientAPI) {
// debugger


//   let inputValue =clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');// Get the current value of the input field
//   let phoneNumber =inputValue.getValue();
  
//   let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');
//   getOtpButtonControl.setVisible(true);
  
// }
// =========================================================================================

function InputFieldOnValueChange(clientAPI) {
debugger


  let inputValue =clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');// Get the current value of the input field
  let phoneNumber =inputValue.getValue();
  debugger;
  if (phoneNumber==="u")
  {
  let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');
  getOtpButtonControl.setVisible(true);
  }
  
}


/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/Service/Initialize.js":
/*!****************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/Service/Initialize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _mypan = context.executeAction('/mypanmdk/Actions/mypan/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_mypan]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/mypanmdk/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/ErrorArchive_CheckForSyncError.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/ErrorArchive_CheckForSyncError.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/mypanmdk/Services/mypan.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/mypanmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteConfirmation.js":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteConfirmation.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_Comments_APR/PAN_Comments_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_Details_APR/PAN_Details_APR_DeleteConfirmation.js":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_Details_APR/PAN_Details_APR_DeleteConfirmation.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_Details_APR/PAN_Details_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteConfirmation.js":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteConfirmation.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_PAYMENT_TERM_DETAILS_APR/PAN_PAYMENT_TERM_DETAILS_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteConfirmation.js":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteConfirmation.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_PRICE_DETAILS_APR/PAN_PRICE_DETAILS_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteConfirmation.js":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteConfirmation.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_Payment_Method_Drop_APR/PAN_Payment_Method_Drop_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteConfirmation.js":
/*!************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteConfirmation.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_TYPE_APR/PAN_TYPE_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteConfirmation.js":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteConfirmation.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_WEB_EVENT_APR/PAN_WEB_EVENT_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteConfirmation.js":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteConfirmation.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_WORKFLOW_HISTORY_APR/PAN_WORKFLOW_HISTORY_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.js":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    return clientAPI.executeAction({
        'Name': '/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.action',
        'Properties': {
            'OnSuccess': ''
        }
    }).then((result) => {
        let newEntity = JSON.parse(result.data);
        return clientAPI.executeAction({
            'Name': '/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UploadStream.action',
            'Properties': {
                'Target': {
                    'ReadLink': newEntity['@odata.readLink']
                }
            }
        });
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteConfirmation.js":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteConfirmation.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteConfirmation.js":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteConfirmation.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_vendor_data_APR/PAN_vendor_data_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteConfirmation.js":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteConfirmation.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/PAN_vendor_response_APR/PAN_vendor_response_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteConfirmation.js":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteConfirmation.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mypanmdk/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mypanmdk/Actions/mypan/vendorTaxDetails_APR/vendorTaxDetails_APR_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/mypanmdk/Rules/second_button.js":
/*!***********************************************************!*\
  !*** ./build.definitions/mypanmdk/Rules/second_button.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ second_button)
/* harmony export */ });
  // /**
  //  * Describe this function...
  //  * @param {IClientAPI} clientAPI
  //  */
  // export default function second_button(clientAPI) {
  //     debugger


  //   let select =clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellListPicker0');// Get the current value of the input field
  //   let selected =select.getValue();

  //   let isSupplierSelected = selected[0].ReturnValue;

  //   // let isBuyerSelected = selected.includes('Buyer');
  //   debugger;
  //   if (isSupplierSelected == false)
  //   {
  //   let ButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton1');
  //   ButtonControl.setVisible(true);
  //   }
  //   else{
  //     ButtonControl.setVisible(false);
  //   }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function second_button(clientAPI) {
//   debugger;

//   // Access the list picker control
//   let select = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellListPicker0');
  
//   // Get the selected values
//   let selected = select.getValue(); // This should return an array of selected items
//   let st= selected[0].ReturnValue;
//   console.log(st);
//   // Get the button control
//   let ButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton1');

//   if (selected.includes(st)) {
//     ButtonControl.setVisible(false); // Hide the button if 'Supplier' is selected
// } 
// console.log(selected.includes(st))
// }


// ============================================================================
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function second_button(clientAPI) {
  debugger;

  // Access the list picker control
  let select = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellListPicker0');
  
  // Get the selected values
  let selected = select.getValue(); // This should return an array of selected items
  let st = selected[0].ReturnValue; // Get the ReturnValue of the first selected item
  console.log(st);
  
  // Get the button control
  let ButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton1');

  // Check if 'Supplier' is selected
  if (selected.some(item => item.ReturnValue === 'Supplier')) {
    ButtonControl.setVisible(true); // Show the button if 'Supplier' is selected
  } else {
    ButtonControl.setVisible(false); // Hide the button if 'Supplier' is NOT selected
  }
  
  console.log(selected.includes(st));
  
}


/***/ }),

/***/ "./build.definitions/mypanmdk/Images/panda.png":
/*!*****************************************************!*\
  !*** ./build.definitions/mypanmdk/Images/panda.png ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIAAAAKICAIAAACHSRZaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAADLRSURBVHhe7dwLjuO4tiXQN8ueS8+sR/e6KmOfLOpYCn9Fy9Za2MBFWhRJOWjxEAXc//lfAAAApnAAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAA4B//c+2tACAp9lUADipnK7ul/sB4H52EYAXS5F+IZd5t/w9XiE9AsDNbB4AL5B6/Ga5jbny7b9aegeAG9g2AB6XAvwJ6Yj95RvfTYYBgF/ZMAAekaL7RdLpUWWWD0kXb5WpXJPWG9LoV2kKANvsFgD3Sa29gwzwJpnELBl1fxlvQxrdI3duSCMA2GCrALhDquxfpematNiWdlNkyMPItF4n/W5IoyekozVpAQAXbBIAt0pxvSGNbpN71qTFDjLAh8ikH5Ve1qTFK6THNWkBAEt2CIDrUlOvSYuHpIs1afEK6fFj5THukTsv5PKrpfcLuQwAA9sDwBWppi/k8tPS3YVcflR6eYX/93//z8NJF6+QB7smrS/k8m4yzFKuAUCxNwD8JnX0hVx+kXR6IZdvltse1c5OuyZDPioPfCGXl3JtfxlvKdcA4A8bA8BvUkQv5dpLpesLuXxNWt+pHYremEzoTnn4QS4McmGWjDrIBQD4w8YAsCkV9CAXdpNhBrmwIY1u1o49h02me7Otb+Pn88ky9iAXAOCfbSL/C8BSaudBLuwsgw1yYSnXbtOONx+UPMBD8k29Q2YwyAUATs+WALAiVfNSru0v4w1y4Y98dE07yXxB8mA3y/f1DpnBUq4BcG72A4AVKZkHuTBFhhxsfX6pHVq+MnnUX/18Y2+UeQxyAYBzsx8AdKmXB7kwUQa+RzulfH3y2L/Kt/kmmcQgFwA4MZsBQJdiueTT6TL8Ne1YcsLki9iWL3S6DD/IBQBOzGYAsJBKeZAL02X4be0cIv8kX82afK1zZexBLgBwVnYCgIWUySWfzpWxt7VTh/xNvqBt+YonysAlnwJwVnYCgP+kRh7kwkQZeEM7b8hq8mVtyBc9S0Yt+RSAs7ITAPwnNXLJp7Nk1F+1k4b8knxlG/Kl7y/jDXIBgFOyDQD8JwVyyaf7y3g3aGcMuZp8cRvyB9hZBiv5FIBTsg0ARKrjQS7sLIOt+Tk/jMcJeSw/3+eq/Bn2lJFKPgXglGwDAJHquOTTnWWwNe0IIU8mX+ua/DF2k2FKPgXglGwDAJHquOTT3WSYNe3kIC9MvuI1+cPsI2OUfArA+dgDACKlccmn+8gYF9ppQXZKvu4L+fPsIAOUfArA+dgDACKlccmnO8gAF9ohQXZNvvQL+SO9Wnov+RSA87EHAPwrdXHJp6+W3te044FMSL76NfmDvU76LfkUgPOxBwD8K3Vxyacvla4vtFOBTE7+DBfyZ3uRdFryKQDnYw8A+Ffq4pJPXyf9XmiHAXlL8se4kD/eK6THkk8BOB97AMC/UheXfPoi6fRCOwbIG5M/yYX8CZ+W7ko+BeB87AEA/0pdXPLpK6THpVb9y0GSP89S/pDPSV8lnwJwPvYAgH+lLi759GnpbqkV/XKo5I+0lD/nE9JRyacAnI89AOBfqYtLPn1O+lpq5b4cMPlTLeWP+qj0UvIpAOdjDwD4V+rikk+fkI6WWqEvh03+YEv50z4kXZR8CsD52AMA/pW6uOTTR6WXpVbiy8GTP9tS/sB3ys0lnwJwSrYBgEh1/Ec+eki6WGrFvXxE8sdbyp/5Hrmz5FMATsk2ABCpjks+vVNuXmplvXxQ8idcyh/7Zrmt5FMATsk2ABCpjks+vUfuXGoFvXxc8odcyp/8BrlhkAsAnJJtACBSHZd8erPcttRKefnQ5M+5lD/8NWld8ikAZ2UnAIgUyINcuE3uGbQiXj46+aMO8oe/Jq1LPgXgrOwEAP9JjVzy6Q1yw6CV7/IFyZ92kD//trQb5AIAZ2UnAPhPauSST69J60Er3OWx5Ntcam0mJ5MYZBGsSYtBLgBwYjYDgP+kTB7kwra0W2pV+6uyX8+Hys93eFW7a04y9lKWwoVcHuQCACdmMwBYSKVc8um2tBu0kl1uT77Be7QeJiQDD7IUlnJtkAsAnJv9AGAhxfIgF9akxaAV6wdMJrrU2rwlmcr9Wj8TkoEHWRCDXBjkAgDnZj8A6FIvl3x6IZcHrUw/VDLFa9pdc5Kxn9P63DsZdZBl8Uc+GuQCAKdnSwDoUjIPcmEp1watRj9IMrl7tB52TYbckO96kAtrWs+7JkMOMj+nLwB+ZVcAWJHCeZALJZ8OWoF+hGRmj2q97ZGMdCHf8ra0u9D63zUZcrA1sZ85A8A/7AoAK1I4D3Kh5NPSSvMjJDN7Tuvz5ckwS/mKr0nrC22IXZMhf5XpAsAfNgaAdSmfB7mwdqnV5W9PprUmz7CUa2tazy9MBhhkNvfInYM2yq7JkNsySwAo9gaATSmiB6sftqL87cm0Lvw81C/S7kLr/yVJ14NM4n65f9DG2jUZck3mBwAD2wPAptTR17SK/L3JnJbyPLfJPUttlOeTfgcZ/n65f6kNt1My2JpMDgCW7BAAv0k1va1V5O9N5rSUJ7lH7lxqYz2T9DjIwI9KL4M24q7JkINMCwAu2CQArkhNvaYV4m9PpjXIM9wv9y+14R5L+hpkyOekr0Ebd79kvEHmBAAXbBIA16WsXtNq8TcmExpk9o9KL4M24mNJX4OM95z0NWjj7peMt5RpAcCSHQLgVqmsB60Qf2MyoUEm/Zz0NWjjPpB0VDLSK6THQRt6p2SwpcwJAJbsEAA3SVm91ArxNyYTGmTez0lfgzbuvUkvg4z0Ium0tNF3TYYcZE4AMLA9ANwkNfVSK8HflcxmkEm/QnoctNHvSrooGeN10m9po++djFoyJwAY2B4ArktBfaHV3+9KZlMy6ddJv6WNfnty/yADvE76HbQ57JoMOci0AKDYGwCuSzU9aJX3e5M5lUz6ddLvoE3gxuTmkt5fLb2XNoe9k1FL5gQAxd4AcF2q6dJq7vcmcxpk0i+Vrkubw43JzSVdv1p6L20OeyejlswJAIq9AeCKlNKDVnO/N5lTyaRfLb2XNocbk5tLun619F7aHPZORh1kWgDwh40B4IrU0aUV3G9PplUy6VdL76XN4cbk5pKuXy29D9o09k5GLZkWAPxhYwC4InV0adX225NplUz61dJ7aXO4JbmzpN99ZIzSZrJ3MmrJnADgDxsDwG9SRA9atf3eZE4lk95HxihtJleT20o63UfGKG0meyejDjItAHAAA/hdKujSSu23J9MqmfQ+MkZpM7ma3FbS6T4yRmkzmZAMXDItAHAAA/hdKujS6uy3J9MqmfQ+MkZpM7ma3FbS6T4yRmkzmZAMXDItAHAAA/hFyudBq7PfnkyrZN7XpPUgF36VpqXN5GpyW0mn+8gYpc1kQjLwIDMD4PRsCQCbUjuXVmQfIZlZyby3pd2GNNqQRqXN5GpyW0mn+8gYpc1kTjJ2ycwAOD1bAsCm1M6lVdhHSGZWMu8NafSrNF2TFqXN5GpyW0mnN8gNJZ/+Kk1Lm8mcZOySmQFwerYEgE2pnUursI+QzKxk3hdy+Wa5bSnXSpvJ1eS2kk5/laZr0mJDGpU2kznJ2CUzA+D0bAkAm1I7l1ZhHyGZWcm8L+TyzXLbUq6VNpOryW0lnW5Lu21ptyYtSpvJnGTsQSYHwLnZDwDWpWourbw+SDK5kqkv5dqdcvMgF0qbydXktpJON6TRNWl9IZdLm8m0ZPiSyQFwbvYDgHWpmkurrQ+STK5k6ku5dr/cX/JpaTO5mtxW0umatLhN7lnKtdJmMi0ZvmRyAJyb/QBgXarm0mrr4yTzK5l9yacPSRd/5KPS5nBjcnNJ1xdy+Ta5Z5ALpc1hZjKDkvkBcG72A4B1qZpLq62Pk8yvZPYlnz4kXfyRj0qbw43JzSVdL+XaPXJnyaelzWFmMoOS+QFwbvYDgHWpmkurrY+TzK9k9iWfPiq9vOjbyM0lXS/l2j1yZ8mnpc1hZjKDkvkBcG72A4B1qZr/aIX1oZIpDvIADx1mmnT0olNNbi7peinX7pE7Sz4tbQ6Tk0mUTBGAE7MZAKxIvVxaVX20ZJYlz/DQYabZ6qdN4Mbk5sFP/3/l0/vl/tdN9VXJJEpmCcCJ2QwAVqReLq2qPloyy5JneOI889dqP230u5Iuyk//f+XT++X+4/3hMo+SWQJwYjYDgBWpl0urqo+WzHKw+hQPWO2kjX5X0sXgZ6o/8tH9cv/x/nCZR8ksATgxmwHAitTLpVXVB0wmWlaf4gF7fBXpqPxM9Uc+ut/W7W3o+ck8ys88ATgzmwHAitTLpVXVB0wmOlh9kOe1cR9IOio/8/yRj+63ensb9y3JVMrPPAE4M5sBwIrUy6VV1cdM5jq4fJAntREfS/oa/Hzn/8i/77d6bxv3LclUys9jAnBmNgOAFamXS6uqD5tMdzdtuIeT7garX/sz2ojvSmZTfh4TgDOzGQCsSL1cWlV92GS6+2hjPZP0uLT6zd9i9a424ruS2ZSfZwTgzGwGACtSL5dWVR85mfGrtVGeT/odrH7zj2ljvTGZUPl5RgDOzGYAsCL1cmlV9cGTSb9O6/9VSe+Dy2/+AW2U9yZzKj+rC4AzsxkArEi9XFpVffxk3q/Qen5hMsCrtVHem8ypZHkBcGI2A4AVqZdLq6o/Ipn6c1qfL0+GeZ3W/9uTaZUsLwBOzGYAsCL1cmlV9acks39U622nZLBXaD0fIZlZyfIC4MRsBgArUi+XVlV/VvIM92g97J2M+pzW50GSyZUsLwBOzGYAsCL1cmlV9ScmT3KDduO0ZPiHtK6Ok8yvZHkBcGI2A4B1KZlLK6w/NHmYNa3lW5Kp3KP1cLRkliVrC4ATsxkArEvJXFphLfsl3/g17a4DJhMtWVgAnJv9AGBdqubSamuZkHz1S63NkZMZlywsAM7NfgCwLlVzabW1yNVk6ZQsLADOzX4AsC5Vc2m1tcjVZOmULCwAzs1+ALAuVXNptbVcJt/Uhtb4DMmTlywsAM7NfgCwKYVzaeW1/JN8NXdqnXxl8qiDrCoAzs1+ALAphXNpFfbJky/lCa3DL0sesmRJAXB6tgSATamdS6uwT5t8HS/SOv+a5PFKlhQAp2dLANiU2rm0CvucyXfxUm2I70ierWRJAXB6tgSATamdB63IPlXyFfwqX9yatNjWhvvo5JEG+RYAOD1bAsBvUj6XVmefKvkKLuSbulluu9CG++jkkUqeHAAcwAB+lwq6tDr7PMnzL+U7eki6WGqDfm7yPCXPDAAOYAC/SwU9aKX2GZInX8oX9IR0tNSG/sTkSQZ5YABwAAO4KkV0adX2GZInH+SreVq6G7ShPzF5kpJHBYA/bAwAV6SOLq3a/vrksQf5Xl4knQ7aBD4ueYyS5wSAP2wMAFekjh60gvu7k2cu+VJKPr1H7hzkQmkT+KzkGQZ5SAD4w8YAcF1K6dJq7u9OnnmiNoHPSp6hZAEBQLE3AFyXarq0mvuLkweeq83hs5JnKFlAAFDsDQDXpZoetLL7m5InPIY2t4Mnkx5kAQFAsTcA3CQFdWmV9xckD3ZUbbbHTOZasnQAYGB7ALhJaupBK74/N3meh1ztqjX4J7nwkNbVoZIpDrJ0AGBgewC4Vcrq0urvj0se41Gtt3+SC0utzZi0eEjr6gjJzEoWDQAs2SEAbpXKetBK8A9KHuCadtfvyT0XWrOf5NrSL5cu/e3qCMmcBlk0ALBkhwC4Q4rr0qrwj0im/qt2yy3JnWtay7uSLra19u9KZlOyXADggk0C4A6prwetED9yMuNtrf1dSRcbWuN7k162tfaTk0kMslwA4IJNAuA+KbFLq8UPm0x3Q2t8b9LLttb+saSvDa3xzGQGJQsFANbYJwDukyp70MrxAyYTXdNaPpb0VS4/+cfY/pmkuzWt5Zxk7EEWCgCssU8A3C2F9qAV5YdKpnihNXs46W6w9eELk04vtGZ7J6MOskQAYIOtAuBuqbUHrS4/TjK/pdbmyaTTcvXzFyZdL7U2uyZDDrJEAGCDrQLgESm3B600P0Iys6XW5smk08Etl16YdL3U2uyUDDbI4gCAbXYLgAel6B606nz85/z8TKlpbZ5P+i13XX1V0vtSa/PC/HT+M8ooywIAfmXDAHhQ6u7B3wL9x88/35VMYtAaPJ/0O7i3wauS3getwQuTAS5kWQDAr2wYAI9L6b2hFe4zkxkMWoOXJF2XdvUnuTZoDV6V9D5oDV6V9L6UBQEA19gzAJ6SAnxNK9xnJjMo7epLkq4HrcFPcm3QGrwwGaC0q69Keh9kKQDADWwbAE9JDb6mFe4zkxmUdvX5pN9BazAmLQatwauS3ku7+nzS74UsBQC4gW0D4Fkpwy+08n1aMnxpV59P+l1qbVrSaKm1eUnSdWlXn0/6XZPVAAC/smEAPCXV94VWuM9MZlDa1XuTXn7VbrlM2q1pLZ9MOi3t6pNJp9uyJgBgm90C4HGpuze08n1aMnxpV39P7rlH62Eraf2Q1tUvyQ2lXX0m6fGarAwA2GCrAHhQKu5ftSJ+TjJ2aVdb0uhRrbffk3se0rraSlqXdvXhpLvbZH0AwBr7BMAjUmvfoJXyE5KBS7s6Ji0e1Xq7Jbnzfq2fraR1aVcfS/pa+v1qVgkAXLBJANwtVfbSLcX6nGTU0q6OSYs7tU4eSDq6R+thK2ld2tUHko6WbmmTtQIAS3YIgPukvl66Wo6PDSYko5Z29W9y+Zp21wuTAa5pd20lrUu7+kDS0VJr85NcW8qKAYCB7QHgDqmsl1ot/k9yYam12TUZsrSrY9KitKuflTxDaVfvTXpZam3GpMVS1g0AFHsDwK1SUy+1KvxvcnmptdkvGW/QGnxf8pyD1uCupIul1uYyabeU1QMAf9gYAG6Sanqp1d8tabTU2uyXjDdoDb4pecJBa3BX0sVSa7OVtF7KGgIABzCAG6WUHrTKezVputTa7JQMttTafEfybEutze3J/Uutze/JPUtZRgCcni0B4LoU0YNWc/+S3LDU2uyUDLbU2nx68lRLrc3tyf1Lrc0tyZ2DrCQATs+WAHBFKuhBq7avJrcttTY7JYMttTafmzzPUmtze3L/Umtze3L/IOsJgHOzHwD8JrXzUiu1b0nuvNCa7ZGMdKE1+6zkGS60ZjcmN19oze5NehlkVQFwYjYDgE2pmpdakX17cv+F1myPZKQ1reXxk3mvaS1vTG6+0Jo9kHS0lLUFwFnZCQDWpV5eahX2vUkvF1qzPZKRNrTGh02mu6a1vDG5+UJr9nDS3VJWGACnZBsAWJFKeanV1o8lfa1pLV+eDLOttT9OMr9trf0tyZ1rWssnk06Xss4AOB97AMCKlMmDVlU/mXR6oTXbIxlpW2v/3mRO21r7G5ObL7Rmr0p6H2SdAXA+9gCALjXyoNXTL0m6XtNa7pGMdE27a04y9g3ajbckd65pLV+bjDHIagPgZGwAAAupjgetkn5tMsaF1myPZKSbtdtfm4xxs3b7jcnNa1rLPZKRBllzAJyJtz/AQkrjQSujX54Ms6a13CMZ6SGtq9uT+x/SuroxuXlNa7lfMt4gaw6AM/H2B/hP6uJBq6F3Sgbb0BrvlAx2VG22tyf3b2iN905GHWTlAXAaXv0AkYp40KrnvZNRN7TG+yXjHUOb211JFxta42nJ8IOsPwDOwXsfIFIOD1rpPCEZeFtrv2sy5Du0mdyb9LKttZ+ZzGCQ9QfAOXjvA/wrtfCg1c0zkxlsa+3nJGPvo431cNLdttb+LclUBlmFAJyAlz7AsU5ff5OpbGvt35JM5U6tk5ckXW9r7d+bzGmQtQjAt/PGBzjoAeyfZDa/arecMPkiftVueXsyrUHWIgDfzhsfOLvUv4NWK789mdY17a6vTx77mnbXcZL5DbIiAfhqXvfA2aX4La1KPk4yv2vaXV+ZPOo17a4DJhMdZFEC8L2864FTS9k7aCXy0ZJZ3qDd+AXJg92g3XjYZLqDrEsAvpd3PXBeqXkHrT4+cjLj27R7Pyt5hhu0G4+fzPuarFcAvoLXOnBeKW8HrT4+fjLvm7XbD5tM92bt9k9JZn+/rGAAPpCXOHBSqWQHrTj+rOQZ7tF6eHsyrXu0Hj4ueYznZEED8CG8uIGTSvVaWmX8ocnDPKR1NSEZ+CGtqw9NHuYVsqwBODyvbOB7pBT91VbLVhl/evJUr9B6fiDp6BVaz1+QPNjr/KxwAA7Lmxr4VKk3X6HVxF+WPOTHao/zrcnTll8u3SI/EgCOxzsa+BgpLXczlrxfmTznh2iT//rksQetwd/k8g3yywHgSLydgQ+QcnJnrcz9+uSxD6NN74TJF1Ha1dWk6a/yKwLgGLyXgeNK/ThLK23PlnwLE7UJSL6XQWuwlbTell8UAAfgpQwcUcrGe7SSdCtpvaa1lJ/k23lC61B+Sb6y0q5eTW5bk58WAO/mjQwcS6rFG7TS88bk5jJ+MjYTeUuyFku7emNy85r8zAB4H+9i4EBSJG5rhea9SS+D1kDkvcm6HLQGtyf3X8iPDYA38SIGDiG14bZWXD6W9FXaVZEjJKuztKt3JV1cyK8OgHfwFgbeL1XhmlZQPpP0OGgNRI6QrM5Ba3BX0sWF/PYAmM4rGHinFINrWh35fNJvaVdFjpOs0dKuPpB0tJQfIQBzef8Cb5MycE0rH1+SdF3aVZHjJGu0tKuPJX0N8jsEYC7vX+A9UgNeaFXjq5LeB62ByKGSZVra1ceSvgb5NQIwkZcv8Aap/i60evGFyQClXRU5WrJSS7v6cNLdIL9JAGbx5gVmS913oVWKr03GKO2qyNGSlVra1YeT7gb5WQIwizcvMFvqvkGrEV+eDDNoDUSOlqzUQWvwcNLdIL9MAKbw2gWmSsU3aNXhHslIpV0VOWayXku7+kzSY8mPE4ApvHaBeVLuDVpduFMyWGlXRY6ZrNfSrj6T9DjITxSA/XnnApOk0FtqdeFOyWClXRU5ZrJeB63BM0mPJb9SAPbnnQtMkkJv0CrCnZLBSrsqcuRk1ZZ29Zmkx5JfKQD7884FJkmhV1o5uF8yXmlXRY6crNrSrj6T9DjIDxWAnXnhAjOkxBu0cnC/ZLzSroocOVm1pV19Mum05LcKwM68cIEZUuKVVgjul4w3aA1Ejpys2kFr8EzSY8lvFYCdeeECu0t9N2iF4H7JeKVdFTl+snZLu/pM0mPJzxWAnXnhArtLfVdaFbhrMmRpV0WOn6zd0q4+k/RY8nMFYGdeuMDuUt+VVgXumgxZ2lWR4ydrt7SrzyQ9lvxcAdiZFy6wrxR3g1YF7poMWdpVkeMna7e0q88kPZb8YgHYmRcusK8Ud6WVgHsno5Z2VeT4ydot7eozSY8lv1gAduaFC+wrxV1pJeCuyZClXRX5lGQFl3b1saSvQX6xAOzMCxfYV4q70qrAXZMhS7sq8inJCi7t6mNJXyU/VwD2550L7Cv1XWlV4K7JkKVdFfmUZAWXdvWxpK+SnysA+/POBfaV+q60KnDXZMjSrop8SrKCS7v6QNLRID9XAPbnnQvsK/VdaYXgrsmQpV0V+ZRkBZd29YGko5LfKgBTeO0C+0qJV1ohuGsyZGlXRT4lWcGlXb036WWQ3yoAU3jtAvtKiVdaLbhrMmRpV0U+JVnBpV29K+likB8qALN48wK7S6FXWkW4XzLeH+2SyGcl67i0q7cn9w/yKwVgFm9eYHcp9EqrCHdKBivtqshnJeu4tKs3JjcP8hMFYCIvX2B3qfUGrS7cIxmptKsin5Ws49Ku3pLcOcjvE4C5vH+BGVLxlVYa7pGMVNpVkc9K1nFpV68mty3lxwnAXN6/wAyp+AatQHx5MkxpV0U+K1nHpV39JbnhQn6ZAEznFQxMkrqvtDLx5ckwpV0V+axkHZd2dStpfSG/SQDewVsYmCSl36AVi69NxijtqshnJeu4tKurSdML+UEC8CZexMAkqf6WWsn4wmSA0q6KfFayjku72pJGa/JrBOB9vIuBeVIDDlrh+MJkgNKuinxWso5Lu/o3ubwhv0MA3srrGJgqleCgVZCvSnov7arIZyXruLSr/yQXNuTnB8ABeCkDs6UkHLRS8iVJ16VdFfmsZB2Xrc9X5YcHwDF4LwOzpSpc+ltQvirpt7SrIp+VrOM75ScHwJF4OwNvkPLwQis6n0l6LO2qyGcl6/hm+aUBcDze0cB7pE680OrOh5PuSrsq8hHJ8r1HfmAAHJU3NfA2KRjXtDL0gaSj0q7em5d0InJvfhbejfK7AuDYvK+Bd0rluKZVovcmvZR29d4834PIA/lZvb/LbwmAD+HFDbxfCsk1rR69Pbm/tKsiH5Es3wv55QDwgbzEgUNIXbmtFaa3JHeWdlXk+MnavZCfDQAfyEscOJBUl9taefp7ck9pV0U+KFnEf+TXAsBn8h4HjiU15g1ahXqZtCvt6t/k8h/tksgRktVZ8lMB4DN5jwNHlErzZq1g/UmulXZ1TFo4gMkhk9VZ8iMB4DN5jwPHlXrzdVpdK/IRyfIt+XkA8Jm8x4EPkMLzaa2uFfmIZPmW/CoA+Eze48DHSPn5hFbXinxEsnxLfg8AfCbvceAjpRS9U6trRT4iWb4lvwEAPpP3OPAlUpz+qtW1IsdP1m7JcgfgY3mVA98sRWtppa3I8ZO1W7KyAfhYXuXAN0vRWlppK3L8ZO2WrGwAPpZXOfDNUrSWVtqKHD9ZuyUrG4CP5VUOfLMUraWVtiLHT9ZuycoG4GN5lQPfLEXroFW3IgdPFm7JygbgY3mVA18udWtp1a3IkZNVW7KmAfhk3ubAl0vpWlqBK3LkZNWWrGkAPpm3OfDlUrqWVuCKHDlZtSVrGoBP5m0OfL9Ur6XVuCLHTNbrIAsagE/mbQ58v1SvpZW5IsdM1mvJagbgw3mhA98vBWxpZa7IMZP1WrKaAfhwXujA90sBO2iVrsjRkpU6yGoG4MN5oQOnkBq2tGJX5GjJSi1ZxwB8Pu904BRSxpZW7IocLVmpJesYgM/nnQ6cQsrYQat3RQ6VLNOSdQzA5/NOB84ilWxp9a7IcZI1OsgiBuDzeacDZ5FKtrSSV+Q4yRotWcEAfAWvdeAsUswOWtUrcoRkdQ6yggH4Cl7rwImkni2t8BU5QrI6S9YuAN/Cmx04kZS0g1b7irw3WZeDrF0AvoU3O3AuqWpLK39F3pusy5JVC8AX8XIHziWFbWnlr8h7k3VZsmoB+CJe7sC5pLAdtApY5F3Jihxk1QLwRbzcgdNJbVtaESzyrmRFlqxXAL6L9ztwOilvB60OFpmfrMVB1isA38X7HTijVLillcIi85O1WLJSAfg6XvHAGaXIHbRqWGRmsgoHWakAfB2veOCkUueWVhCLzExWYckaBeAbecsDJ5VSd9BqYpE5yfobZI0C8I285YHzSrVbWlksMidZfyWrE4Av5UUPnFcK3kGrjEX2TlbeIKsTgC/lRQ+cWmreQauPRfZL1twg6xKA7+VdD5xayt5BK5FF9kvW3CDrEoDv5V0PnF0q30GrkkX2SFbbICsSgK/mdQ/g/41D3pCstkGWIwBfzesewH8Ek9nJOhtkLQLw7bzxAf6VKnjQKmaRVyUrbJBVCMAJeOkD/CuF8FKrm0WeT9bWUlYhACfgpQ8QqYUHrXQWeT5ZW4OsPwDOwXsf4D+piAetehZ5JllVg6w8AE7Dqx9gIXXxoNXQIo8l62mQNQfAmXj7AyykNB60MlrksWQ9DbLmADgTb3+ALtXxoFXSIvcmK2mQ1QbAydgAAFakRh60elrk9mQNDbLOADgfewDAipTJS62qFrklWT1LWWcAnI89AGBdKuWlVluL/J6sm6WsMABOyTYAsCn18lKrsEW2khWzlLUFwFnZCQB+k6p50Ipska1kxQyyqgA4MZsBwBWpnQetzha5TNbKIOsJgHOzHwBclwp60KptkTFZJYOsJABOz5YAcF2K6KVWc4v8JOtjKSsJgNOzJQDcJHX0Uqu8RbIylrKGAMABDOB2qaaXWv0tZ07WxFJWDwD8YWMAuENq6qVWhcs5k9WwlHUDAMXeAHCfVNZLrRaX92b+X+RnGTRZMQAwsD0A3C319VKryOU8yQpYyloBgCU7BMAjUmUvtbpczpD87ZeySgDggk0C4EGptS+0Al2+Nfl7X8j6AIA19gmAx6XivtAqdfnK5I+9lJUBABtsFQBPSd19oRXr8gXJn3Zb1gQAbLNbADwr1feFVr7LdyR/3QtZDQDwKxsGwGukDL/Qynf56OSPuiFLAQC22S0AXiZl+IVWxMsnJn/La7IUAGCDrQLglVKGX2jVvHxW8le8TZYCAKyxTwC8WMrwNa2s/+h82eNs5ecPt+qXBlkKAHDBJgGwi1TiF/5W9mO2Pj94PnTat+fPX2zd1WZZBwCwZIcA2Esq8TWX5fv4yWfloye/lZ8/yqrW8ie5tpR1AAAD2wPAjlKJr2mF+99S/hPz6fNv+fmLrGotx6TFUtYBABR7A8DuUozfppX1n5LPnfmYnz/Bltb4Mmm3lEUAAH/YGABmSDF+TSvoPytfMP8treUvyQ2DrAAA+MPGADBPSvINrZSXackfYE1reUty5yB/fgBwAAOYLCX5hlbKy97J976hNb49uX+QPz8Ap2dLAJgq9fivWjUveyTf9YbW+N6kl0H+/ACcni0BYKrU4zdoNf1n5cjz//l6f9HaP5b0NcgKAODc7AcA86QSv1mr6eXJ5Gvd1to/mXRasggAODf7AcA8qcTLVqV+6W9LeSz5Hre19i9Juh5kHQBwYjYDgElSgw+u1utNa3/8HGHOP1/dL1r71yZjlCwFAE7MZgAwQwrwQavU/yaXf9VukdXky/pVu+XlyTCDLAgAzspOADBDqu9Bq9THpMU17S75Sb6da9pd+yXjlSwIAM7KTgAwQ6rv0mr0raT1Ne2ucybfxQ3ajXsno5YsCADOyk4AsLuU3qUV6FeT227QbjxD8uQ3aDdOS4YfZFkAcEq2AYDdpe4urUC/Mbn5Nu3e70ue8zbt3vnJPEqWBQCnZBsA2FeK7kGrzu9NerlNu/fTk6e6Tbv3jcmESlYGAKdkGwDYV4ru0krzh5Pu7tQ6mZAnB/2Z9r1aJ29PpjXI4gDgfOwBAPtKxV1aaf580u/9Wj875YGxfm55QOvnUMkUSxYHAOdjDwDYUcrtQavLX5gM8ITW4UuSrtdcbXCjv2MdOZlryfoA4HzsAQA7SrldWlG+UzLYi7TO70162UEb6ODJpEvWBwDnYw8A2FHK7dKK8gnJwN+iPd0HJQ9Qsj4AOB97AMCOUm6XVpRPTibxadpTfG7yPCVLBICTsQEA7Ci1dmkV+XuTOR1Pm+fXJI9XskQAOBkbAMBeUmiXVo4fMJnoXG0OX5w8cMkqAeBkbAAAe0mhXVo5/lnJMzzny76Te5NnLj+LBICzsQEA7CWFdmnl+BmSJy8n/07yzOVnkQBwNjYAgL2k0C6tHD9D8uTl5N9Jnrn8LBIAzsYGALCXFNqlleNnSJ68nPw7yTOXn0UCwNnYAAD2kkK7tHL8DMmTl5N/J3nm8rNIADgbGwDAXlJol1aOnyF58nLy7yTPXH4WCQBnYwMA2EsK7dLK8TMkT15O/p3kmcvPIgHgbGwAAHtJoV1aOX6G5MnLyb+TPHP5WSQAnI0NAGAvKbRLK8fPkDx5Ofl3kmcuP4sEgLOxAQDsJYV2aeX4SZKH39Aaf3HywCVLBIDzsQcA7CjldmlF+RmSJ1/TWn538swl6wOA87EHAOwo5XZpRfkZkidf01p+d/LMJesDgPOxBwDsKOV2aUX5GZInX9NafnfyzCXrA4DzsQcA7CjldmlF+RmSJ1/TWn538swl6wOA87EHAOwo5fag1eVnSJ78Qmv2xckDlywOAE7JNgCwrxTdpZXmZ0iefKm1+e7kmUtWBgCnZBsA2FeK7tJK8zMkT77U2nx38swlKwOAU7INAOwrRfegVednSJ580Bp8cfLAJcsCgLOyEwDsLqV3aQX6GZInL+3qdyfPXLImADgrOwHA7lJ6l1agnyF58kFr8K3J0w6yJgA4KzsBwO5Seg9amf7dyTMvtTbfmjxtyYIA4MRsBgAzpAAftEr9i5MHvtCafV/ynIOsBgBOzGYAMEMK8EEr1r81edo1reX3Jc9ZshQAODf7AcAkKcMHrV7/vuQ5t7X235Q84SDrAIBzsx8ATJIyfNBK9u9LnvNX7ZbvSJ5tkEUAwOnZEgDmSTE+aIX7NyVPODjPN5BnG/wsAACwJQBMlXp80Gr370iebZDnP8E3kKca5MkBwAEMYLKU5Eutgv/05KmW8vx/5KNB6+Fzk+cZ5JkB4A8bA8BsKcyXWh3/ucnzLOXJSz5dav18YvIkS3lmAPjDxgDwBqnNl1o1/4nJkyzlmZdyban19lnJMyzlaQGg2BsA3iMV+lKr6T8reYalPO2atFhqfX5KMvulPCcADGwPAG+TOn2pVfYflDzAIM+5Le2WWrfHT+a9lCcEgCU7BMA7pVpfavX98ZN5L+UJr0nrpdb/kZMZL+XZAOCCTQLgzVKzL7Uq/8jJjC/k8W6QG5baKMdM5rqUpwKANfYJgDdL2b6mlfsHTCZ6Ic92s9x2oQ13qGSKS3keANhgqwB4vxTva1rRf5xkfmvyVHfKzRfauEdIZnYhTwIA2+wWAEeRKv5Cq/6PkMzsQp7kUenlQhv9vcmcLuQZAOBXNgyAA0ktv6YdA96VzGZNnuE56WtNm8n8ZB5rMnsAuMaeAXA4KerXtCPBzGQGGzL1F0mna9qs5iRjr8mMAeA2dg6AI0p1v62dEHZNhtyQGb9aet/QZrhfMt6GzBUAbmbzADio1Pi/aqeF1yZj/Cpz3UfG+FWb86uS3n+VWQLAPewfAIeWYv+adn54JunxmsxvfxnvmvYUjyV9XZOZAcD97CIAHyCF/83aueKX5IZ7ZE5zZeybtcfcSlrfLLMBgEfZSwA+Rg4B75N5vE/m8Q6ZAQA8x44C8GFyIJgrYx9D5jRLRgWAV7CvAHyqnA/2lJGOKrPcR8YAgJeywQB8gxwaXiE9fprM/jnpCwB2Y7MB+EI5T9wm93yXPNs1aQ0As9h7AAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAACZxAAMAAJjEAQwAAGASBzAAAIBJHMAAAAAmcQADAACYxAEMAABgEgcwAACASRzAAAAAJnEAAwAAmMQBDAAAYBIHMAAAgEkcwAAAAKb43//9/xJbNgCPKjBWAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/mypanmdk/Styles/Styles.json":
/*!*******************************************************!*\
  !*** ./build.definitions/mypanmdk/Styles/Styles.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"MyButton":{"font-color":"#c80e0e","/* Text color */\\n  background-color":"#c41919"},"ActionBar":{"font-color":"#c82525","background-color":"#51abf1"}}');

/***/ }),

/***/ "./build.definitions/mypanmdk/jsconfig.json":
/*!**************************************************!*\
  !*** ./build.definitions/mypanmdk/jsconfig.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map