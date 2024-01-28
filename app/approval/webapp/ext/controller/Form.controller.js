sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';
	var i = 0;

	return ControllerExtension.extend('approval.ext.controller.Form', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf approval.ext.controller.Form
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing:{
				onBeforeBinding:function(){debugger
					// console.log(oBindingContext);
					this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().setEditable(true);
					this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().getFormContainers()[0].getFormElements()[0].getFields()[0].getContent().setEditMode('Editable');
					this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().getFormContainers()[0].getFormElements()[0].getFields()[0].getContent().getContentEdit()[0].setEditable(true);

				}
			}
		}
	});
});
