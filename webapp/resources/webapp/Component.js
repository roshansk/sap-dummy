sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("UI5_webapp.webapp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			//Mgs Model
			
			var local = {

				loginMsg:"",

				login:{
					email:"",
					password:""
				},

				registerMsg:"",

				registerEmailErr:"",

				registerPasswordErr:"",

				register:{
					name:"",
					email:"",
					password:"",
					password2:""
				},

				userInSession : {}

			}
			
			var oModel = new JSONModel(local);
			this.setModel(oModel,"oLocal");
			
			// enable routing
			this.getRouter().initialize();

			// set the device model
			//this.setModel(models.createDeviceModel(), "device");
		}
	});
});