var CreditCardToken = function (formObject, documentNumber = null) {
    this.formObject = formObject;
    this.documentNumber = documentNumber;
};

CreditCardToken.prototype.getDataToGenerateToken = function () {
    return {
        type: "card",
        card : {
            holder_name: this.formObject.creditCardHolderName.val(),
            number: this.formObject.creditCardNumber.val(),
            exp_month: this.formObject.creditCardExpMonth.val(),
            exp_year: this.formObject.creditCardExpYear.val(),
            cvv: this.formObject.creditCardCvv.val(),
            holder_document: this.documentNumber
        }
    };
}

CreditCardToken.prototype.getToken = function (pkKey) {
    var data = this.getDataToGenerateToken();
    return jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://api.mundipagg.com/core/v1/tokens?appId=' + pkKey,
        async: false,
        cache: true,
        data
    });
}