const service = require("../services/main")
class mainController {
    static async list(req, res) {
        try {
            const response = { data: null, message: "No Content Found", code: 200 };
            const srvRes = await service.list({ ...req.query, ...req.params });
            if (srvRes.status) {
                response.data = srvRes.data;
                response.message = "Data Found";
            }
            response.extra = srvRes.extra
            res.send(response)
        } catch (err) {
            console.log(err)
            throw new Error(err)
        }
    }
}

module.exports = mainController 