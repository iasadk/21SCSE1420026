const thidPartyAPI = require("../third_party/api");

class mainService {
    static async list(query) {
        try {
            const response = { data: null, status: false, $extra: {} };
            const apiRes = await thidPartyAPI.list({
                companyName: query?.companyName || 'AMZ',
                categoryName: query?.categoryName || "'Laptop",
                ...query
            });
            console.log(apiRes, "API RES")
            response.data = apiRes.data;

            if(query.sortBy === "ASC"){
                response.data.sort((a,b)=> a[query.sortKey] - b[query.sortKey]);
            }else if(query.sortBy === "DSC"){
                response.data.sort((a,b)=> b[query.sortKey] - a[query.sortKey]);

            }
            if (query.top < response.data) {
                response.$extra = {
                    page: query.page || 1,
                }
            }
            response.status = true;


            return response;
        } catch (err) {
            console.log(err)
            throw new Error(err)
        }
    }

}

module.exports = mainService