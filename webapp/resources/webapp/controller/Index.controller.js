sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller) {
	"use strict";

	return Controller.extend("UI5_webapp.webapp.controller.Index", {
		onInit: function () {
		
		},
		
		login: function() {
			var credentials = this.getView().getModel("oLocal").getProperty("/login");
			var users = this.getView().getModel("user").getProperty('/users');
			console.log(credentials,users);
			var hasLoggedIn = false;
			var loggedInUser = {};
			users.forEach( user => {
				if ( credentials.email == user.email && credentials.password == user.password){
					hasLoggedIn = true;
					loggedInUser = user;
				}
			} );
			
			if(hasLoggedIn){
				this.getView().getModel("oLocal").setProperty("/loginMsg","Login Successful User - "+loggedInUser.name);
				this.getView().getModel("oLocal").setProperty("/userInSession",loggedInUser);
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("home");
			}
			else{
				this.getView().getModel("oLocal").setProperty("/loginMsg","Login Failed!");
			}
		},

		register : function (){

			this.getView().getModel("oLocal").setProperty("/registerEmailErr","");
			this.getView().getModel("oLocal").setProperty("/registerPasswordErr","");
			this.getView().getModel("oLocal").setProperty("/registerMsg","");

			var credentials = this.getView().getModel("oLocal").getProperty("/register");
			var users = this.getView().getModel("user").getProperty('/users');
			var err = 0;
			
			users.forEach( user => {
				if(credentials.email == user.email){
					this.getView().getModel("oLocal").setProperty("/registerEmailErr",credentials.email+" is already in use!");
					err++;
				}
			});

			if( credentials.password != credentials.password2){
				this.getView().getModel("oLocal").setProperty("/registerPasswordErr","Passwords do not match!");
				err++;
			}

			if(err == 0) {
				this.getView().getModel("oLocal").setProperty("/registerMsg","Registration Successfull!");
			}
			else{ 
			this.getView().getModel("oLocal").setProperty("/registerMsg","Registration Failed!");
			}
			console.log("Register Running",err);

		},

		goToLogin : function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("login");
		},

		goToRegister : function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("register");
		}
	});
});