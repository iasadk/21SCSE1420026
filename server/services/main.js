const thidPartyAPI = require("../third_party/api");

class mainService {
    static async list(query) {
        try {
            const response = { data: null, status: false, $extra: {}};
            const apiRes = await thidPartyAPI.list({
                companyName: query?.companyName,
                categoryName: query?.categoryName,
                ...query
            });
            
            console.log(apiRes, "API RES")
            response.data = apiRes.data;
            response.status = true;


            return response;
        } catch (err) {
            throw new Error(err)
        }
    }

}

module.exports = mainService