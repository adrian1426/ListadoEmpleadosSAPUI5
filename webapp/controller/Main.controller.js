sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("App_Lista.App_Lista.controller.Main", {
		onInit: function () {
			var oFormEmpleados = this.getView().byId("page");
			oFormEmpleados.bindElement("Model_Norwind>/Employees");
			
			var oFormCategorias = this.getView().byId("categoria");
			oFormCategorias.bindElement("Model_Norwind>/Categories");
		}
	});
});