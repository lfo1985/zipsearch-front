const onlyNumbers = (value) => {

    const onlyNumbersRegex = /^[0-9]*$/;

    if (value === null || value === undefined) {
        return "";
    }

    if (onlyNumbersRegex.test(value)) {
        return value;
    } else {
        return value.replace(/[^0-9]/g, "");
    }
};

export default onlyNumbers;
