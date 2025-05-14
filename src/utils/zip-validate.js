const zipValidate = (cep) => {
    cep = cep.replace(/\D/g, ""); // Remove tudo que não for dígito
    const regexCEP = /^[0-9]{8}$/;
    return regexCEP.test(cep);
};

export default zipValidate;
