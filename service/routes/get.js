const express = require('express')

const router = express.Router()

router.get('/permission', function (req, res) {
    res.send(
        {
            "code": 0,
            "message": "获取权限成功",
            "data": [
                {
                    "name": "订单管理",
                    "children": [
                        {
                            "name": "订单列表"
                        },
                        {
                            "name": "生产管理",
                            "children": [
                                {
                                    "name": "生产列表"
                                },
                                {
                                    "name": "审核管理"
                                }
                            ]
                        },
                        {
                            "name": "退货管理"
                        }
                    ]
                },
                {
                    "name": "产品管理",
                    "children": [
                        {
                            "name": "产品列表"
                        },
                        {
                            "name": "产品分类"
                        }
                    ]
                }
            ]
        }

    )
})

module.exports = router