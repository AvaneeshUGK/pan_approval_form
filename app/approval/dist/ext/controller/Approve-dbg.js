sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        approve: function(oEvent) {
            MessageToast.show("PAN Form Approved");
        }
    };
});
