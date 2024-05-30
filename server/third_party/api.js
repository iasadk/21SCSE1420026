const axiosInstance = require("../utils/axiosInstance");

class thidPartyAPI {
    static baseURL = "/test/companies/";

    static list(data) {
        const companyName = data.companyName;
        const categoryName = data.categoryName;

        delete data.companyName;
        delete data.categoryName;
        return axiosInstance.get(this.baseURL + companyName + '/categories/'+categoryName+"/products", { params: data });
    }
}

module.exports = thidPartyAPI;