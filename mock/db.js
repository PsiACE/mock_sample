var Mock = require("mockjs");

module.exports = {
    getUserInfo: Mock.mock({
        error: 0,
        message: "success",
        "result|40": [
            {
                username: "@name",
                userid: "@string",
                regdate: "@datetime"
            }
        ]
    }),
    login: Mock.mock({
        error: 0,
        message: "success",
        result: [
            {
                flag: 0
            }
        ]
    })
};
