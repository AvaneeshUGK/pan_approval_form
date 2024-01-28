sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        reject: function(oEvent) {
            MessageToast.show("Rejected");
        }
    };
});
