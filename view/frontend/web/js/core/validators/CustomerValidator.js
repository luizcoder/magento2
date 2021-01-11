var CustomerValidator = function (addressObject) {
    this.addressObject = addressObject;
    this.errors = [];
};

CustomerValidator.prototype.validate = function () {
    var address = this.addressObject;

    console.log("Address", address);

    if (address == null) {
        this.errors.push("Customer address is required");
        return;
    }

    if (address.vatId <= 0 && address.vatId != null) {
        this.errors.push("Customer document is a required field");
    }

    if (!address.street || address.street.length < 1) {
        this.errors.push("Invalid address");
    }
}

CustomerValidator.prototype.getErrors = function () {
    return this.errors;
}