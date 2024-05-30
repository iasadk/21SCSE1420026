const { default: axios } = require("axios")

const refreshMyToken = async () => {
    const res = await axios.post("http://20.244.56.144/test/auth", {
        "companyName": "Galgotias University",
        "clientID": "bf256e03-ff61-4061-9fd0-45a1c3785c4b",
        "clientSecret": "eIMTtnvhgkIbsAVw",
        "ownerName": "Mohammad Asad Khan",
        "ownerEmail": "iasad0017@gmail.com",
        "rollNo": "21SCSE1420026"
    });
    const data = res.data;
    return data?.access_token;
    
}


module.exports = {
    refreshMyToken
}