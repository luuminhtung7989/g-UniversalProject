var gcGobal_INCOM_Receipt_Instance = {
    _rightOnTable: {},
    _titleName: "gcGobal_INCOM_Receipt",
    _id: "gcGobal_INCOM_Receipt",

    _selfRender: { self: true, funcBuild: "BuildSelfForm", seflGrid: true, funcBuildGrid: "BuildSelfGrid" },
    _refDetail: [{ _id: "", addTab: true }, { _id: "", addTab: true }],
    _selfBuildSetting: { form: true, grid: true, update: true, new: true, detailMultiTab: true, detailOnlyMainHidden: true },

    //phần này có thể định nghĩa vào instance trực tiếp từ thư mục vì các control tùy thuộc vào instance
    //Bạn có thể định nghĩa bất kỳ thứ gì tại đây// Dựa vào quyền của User
    _permission: [
        //form control
        { id: "btnSave", show: false, css: "", instanceName: "Lưu dữ liệu" },
        { id: "btnAdd", show: true, css: "special", instanceName: "Tạo mới" },
        { id: "btnUpdate", show: true, css: "special", instanceName: "Cập nhật" },
        { id: "btnSearch", show: false, css: "special", instanceName: "Tìm kiếm" },
        { id: "divFormConten", show: false, css: "special", instanceName: "Tìm kiếm" },
        { id: "divSearchContent", show: false, css: "special", instanceName: "Tìm kiếm" },
        { id: "tabDetail", show: false, css: "special", instanceName: "Chi tiết phiếu xuất" },
        { id: "tabCompany", show: false, css: "special", instanceName: "Chi tiết phiếu xuất" },
        //grid control
        { id: "btnGridAdd", show: false, css: "special", instanceName: "Thêm" },
        { id: "btnGridEdit", show: false, css: "special", instanceName: "Sửa" },
        { id: "btnGridCancel", show: false, css: "special", instanceName: "Hủy" },
        { id: "btnGriDelete", show: false, css: "special", instanceName: "Xóa" },
        //vẫn show như disable có điều kiện mới enable
        { id: "btnGriDelete", show: true, disable: true, css: "special", instanceName: "Xóa" },
    ],
    //nhiều form khác nhau cho đối tượng này (Receipt)
    //Extern View for this instance
    _instanceEditForm: {},
    //
    _instanceGrid: {},

    _listRefTables: [
        {
            "field": "MSHDId",
            "mergename": [
                1
            ],
            "objAjax": {
                "AjaxObj": {
                    "a": "fGetgcGobal_INCOM_Contract",
                    "c": {},
                    "_f": "Id,Name",
                    "ModelDb": "CanteenDb"
                },
                "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
            }
        },
        {
            "field": "BranchId",
            "mergename": [
                1
            ],
            "objAjax": {
                "AjaxObj": {
                    "a": "fGetgcGobal_COMP_Branch",
                    "c": {},
                    "_f": "Id,NAME,CODE",
                    "ModelDb": "CanteenDb"
                },
                "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
            }
        },
        {
            "field": "LoaiKhachId",
            "mergename": [
                1
            ],
            "objAjax": {
                "AjaxObj": {
                    "a": "fGetgcGobal_CUST_CustomerType",
                    "c": {},
                    "_f": "Id,Name,Code",
                    "ModelDb": "CanteenDb"
                },
                "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
            }
        },
        {
            "field": "KHId",
            "mergename": [
                1
            ],
            "objAjax": {
                "AjaxObj": {
                    "a": "fGetgcGobal_CUST_Customer",
                    "c": {},
                    "_f": "Id,Id",
                    "ModelDb": "CanteenDb"
                },
                "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
            }
        },
        {
            "field": "NhanVienId",
            "mergename": [
                1
            ],
            "objAjax": {
                "AjaxObj": {
                    "a": "fGetgcGobal_COMP_EmployeeLife",
                    "c": {},
                    "_f": "Id,Id",
                    "ModelDb": "CanteenDb"
                },
                "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
            }
        },
        {
            "field": "StatusId",
            "mergename": [
                1
            ],
            "objAjax": {
                "AjaxObj": {
                    "a": "fGetgcGobal_INCOM_Status",
                    "c": {},
                    "_f": "Id,Name,Code",
                    "ModelDb": "CanteenDb"
                },
                "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
            }
        },
        {
            "field": "OrderId",
            "mergename": [
                1
            ],
            "objAjax": {
                "AjaxObj": {
                    "a": "fGetgcGobal_LITERAL_DANHMUC_THU",
                    "c": {},
                    "_f": "Id,Name,Code",
                    "ModelDb": "CanteenDb"
                },
                "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
            }
        },
        {
            "field": "ClassId",
            "mergename": [
                1
            ],
            "objAjax": {
                "AjaxObj": {
                    "a": "fGetgcGobal_TRAINNING_COURSE_CLASS",
                    "c": {},
                    "_f": "Id,Name,Code",
                    "ModelDb": "CanteenDb"
                },
                "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
            }
        }
    ],
    className: "display",
    _listSelfTables: [
        {
            "AjaxObj": {
                "a": "fGetgcGobal_INCOM_Receipt",
                "_f": " TOP 20 *",
                "_gb": "",
                "ModelDb": "CanteenDb"
            },
            "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
        },
        {
            "AjaxObj": {
                "a": "fGetgcGobal_INCOM_Receipt",
                "_f": "Id,MaCT,SoCT,MSHDId,NgayLap,BranchId,LoaiKhachId,KHId,TongTien,ThucThu,NoLai,DienGiai,VAT,PhuThu,NhanVienId,NgayHen,isFinished,DiscountCust,StatusId,isPrinted,BankReceiptId,CardPaymentId,OrderId,ClassId,Keep01,Keep02,Keep03,Keep04,Space01,Space02,Space03,SpaceId",
                "_gb": "",
                "ModelDb": "CanteenDb"
            },
            "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
        },
        {
            "AjaxObj": {
                "a": "fGetgcGobal_INCOM_Receipt",
                "_f": "Id,MaCT,SoCT,MSHDId,NgayLap,BranchId,LoaiKhachId,KHId,TongTien,ThucThu,NoLai,DienGiai,VAT,PhuThu,NhanVienId,NgayHen,isFinished,DiscountCust,StatusId,isPrinted,BankReceiptId,CardPaymentId,OrderId,ClassId,Keep01,Keep02,Keep03,Keep04,Space01,Space02,Space03,SpaceId,isPrgAccountId,isPrgInUse,isPrgCreateDate,isPrgWaitingConfirmStatus,isPrgbAdminDeleted,isPrgbUserDeleted,isPrgbShow,isPrgOrdered,isPrgVNKoDau,isPrgSmField,isPrgPartComp,isPrgEncriptData,isPrgDescriptData,isPrgAccountUpdateId",
                "_gb": "",
                "ModelDb": "CanteenDb"
            },
            "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
        }
    ],
    _fieldsList: [
        {
            "field": "Id",
            "name": "Identify",
            "create": true,
            "edit": true,
            "list": true,
            "type": "hidden"
        },
        {
            "field": "MaCT",
            "name": "Mã CT",
            "create": true,
            "edit": true,
            "list": true
        },
        {
            "field": "SoCT",
            "name": "Số CT",
            "create": true,
            "edit": true,
            "list": true
        },
        {
            "field": "MSHDId",
            "name": "MSHDId",
            "create": true,
            "edit": true,
            "list": true,
            "type": "select",
            "option": {
                "field": "MSHDId",
                "mergename": [
                    1
                ],
                "objAjax": {
                    "AjaxObj": {
                        "a": "fGetgcGobal_INCOM_Contract",
                        "c": {},
                        "_f": "Id,Name",
                        "ModelDb": "CanteenDb"
                    },
                    "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
                }
            }
        },
        {
            "field": "NgayLap",
            "name": "NgayLap",
            "create": true,
            "edit": true,
            "list": true,
            "type": "datetime"
        },
        {
            "field": "BranchId",
            "name": "BranchId",
            "create": true,
            "edit": true,
            "list": true,
            "type": "select",
            "option": {
                "field": "BranchId",
                "mergename": [
                    1
                ],
                "objAjax": {
                    "AjaxObj": {
                        "a": "fGetgcGobal_COMP_Branch",
                        "c": {},
                        "_f": "Id,NAME,CODE",
                        "ModelDb": "CanteenDb"
                    },
                    "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
                }
            }
        },
        {
            "field": "LoaiKhachId",
            "name": "LoaiKhachId",
            "create": true,
            "edit": true,
            "list": true,
            "type": "select",
            "option": {
                "field": "LoaiKhachId",
                "mergename": [
                    1
                ],
                "objAjax": {
                    "AjaxObj": {
                        "a": "fGetgcGobal_CUST_CustomerType",
                        "c": {},
                        "_f": "Id,Name,Code",
                        "ModelDb": "CanteenDb"
                    },
                    "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
                }
            }
        },
        {
            "field": "KHId",
            "name": "KHId",
            "create": true,
            "edit": true,
            "list": true,
            "type": "select",
            "option": {
                "field": "KHId",
                "mergename": [
                    1
                ],
                "objAjax": {
                    "AjaxObj": {
                        "a": "fGetgcGobal_CUST_Customer",
                        "c": {},
                        "_f": "Id,Id",
                        "ModelDb": "CanteenDb"
                    },
                    "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
                }
            }
        },
        {
            "field": "TongTien",
            "name": "TongTien",
            "create": true,
            "edit": true,
            "list": true,
            "type": "money",
            "precition": 2
        },
        {
            "field": "ThucThu",
            "name": "ThucThu",
            "create": true,
            "edit": true,
            "list": true,
            "type": "money",
            "precition": 2
        },
        {
            "field": "NoLai",
            "name": "NoLai",
            "create": true,
            "edit": true,
            "list": true,
            "type": "money",
            "precition": 2
        },
        {
            "field": "DienGiai",
            "name": "DienGiai",
            "create": true,
            "edit": true,
            "list": true
        },
        {
            "field": "VAT",
            "name": "VAT",
            "create": true,
            "edit": true,
            "list": true,
            "type": "money",
            "precition": 2
        },
        {
            "field": "PhuThu",
            "name": "PhuThu",
            "create": true,
            "edit": true,
            "list": true,
            "type": "money",
            "precition": 2
        },
        {
            "field": "NhanVienId",
            "name": "NhanVienId",
            "create": true,
            "edit": true,
            "list": true,
            "type": "select",
            "option": {
                "field": "NhanVienId",
                "mergename": [
                    1
                ],
                "objAjax": {
                    "AjaxObj": {
                        "a": "fGetgcGobal_COMP_EmployeeLife",
                        "c": {},
                        "_f": "Id,Id",
                        "ModelDb": "CanteenDb"
                    },
                    "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
                }
            }
        },
        {
            "field": "NgayHen",
            "name": "NgayHen",
            "create": true,
            "edit": true,
            "list": true,
            "type": "datetime"
        },
        {
            "field": "isFinished",
            "name": "isFinished",
            "create": true,
            "edit": true,
            "list": true
        },
        {
            "field": "DiscountCust",
            "name": "DiscountCust",
            "create": true,
            "edit": true,
            "list": true,
            "type": "money",
            "precition": 2
        },
        {
            "field": "StatusId",
            "name": "StatusId",
            "create": true,
            "edit": true,
            "list": true,
            "type": "select",
            "option": {
                "field": "StatusId",
                "mergename": [
                    1
                ],
                "objAjax": {
                    "AjaxObj": {
                        "a": "fGetgcGobal_INCOM_Status",
                        "c": {},
                        "_f": "Id,Name,Code",
                        "ModelDb": "CanteenDb"
                    },
                    "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
                }
            }
        },
        {
            "field": "isPrinted",
            "name": "isPrinted",
            "create": true,
            "edit": true,
            "list": true,
            "type": "money"
        },
        {
            "field": "BankReceiptId",
            "name": "BankReceiptId",
            "create": true,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "CardPaymentId",
            "name": "CardPaymentId",
            "create": true,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "OrderId",
            "name": "OrderId",
            "create": true,
            "edit": false,
            "list": false,
            "type": "select",
            "option": {
                "field": "OrderId",
                "mergename": [
                    1
                ],
                "objAjax": {
                    "AjaxObj": {
                        "a": "fGetgcGobal_LITERAL_DANHMUC_THU",
                        "c": {},
                        "_f": "Id,Name,Code",
                        "ModelDb": "CanteenDb"
                    },
                    "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
                }
            }
        },
        {
            "field": "ClassId",
            "name": "ClassId",
            "create": true,
            "edit": true,
            "list": true,
            "type": "select",
            "option": {
                "field": "ClassId",
                "mergename": [
                    1
                ],
                "objAjax": {
                    "AjaxObj": {
                        "a": "fGetgcGobal_TRAINNING_COURSE_CLASS",
                        "c": {},
                        "_f": "Id,Name,Code",
                        "ModelDb": "CanteenDb"
                    },
                    "APIkey": "kUcHUoWsxLPrIJy$rTcbeG5k"
                }
            }
        },
        {
            "field": "Keep01",
            "name": "Keep01",
            "create": true,
            "edit": false,
            "list": false
        },
        {
            "field": "Keep02",
            "name": "Keep02",
            "create": true,
            "edit": false,
            "list": false
        },
        {
            "field": "Keep03",
            "name": "Keep03",
            "create": true,
            "edit": false,
            "list": false
        },
        {
            "field": "Keep04",
            "name": "Keep04",
            "create": true,
            "edit": false,
            "list": false
        },
        {
            "field": "Space01",
            "name": "Space01",
            "create": true,
            "edit": false,
            "list": false,
            "type": "money",
            "precition": 2
        },
        {
            "field": "Space02",
            "name": "Space02",
            "create": true,
            "edit": false,
            "list": false
        },
        {
            "field": "Space03",
            "name": "Space03",
            "create": true,
            "edit": false,
            "list": false,
            "type": "datetime"
        },
        {
            "field": "SpaceId",
            "name": "SpaceId",
            "create": true,
            "edit": true,
            "list": true,
            "type": "money"
        },
        {
            "field": "isPrgAccountId",
            "name": "isPrgAccountId",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgInUse",
            "name": "isPrgInUse",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgCreateDate",
            "name": "isPrgCreateDate",
            "create": false,
            "edit": false,
            "list": false,
            "type": "datetime"
        },
        {
            "field": "isPrgWaitingConfirmStatus",
            "name": "isPrgWaitingConfirmStatus",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgbAdminDeleted",
            "name": "isPrgbAdminDeleted",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgbUserDeleted",
            "name": "isPrgbUserDeleted",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgbShow",
            "name": "isPrgbShow",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgOrdered",
            "name": "isPrgOrdered",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgVNKoDau",
            "name": "isPrgVNKoDau",
            "create": false,
            "edit": false,
            "list": false
        },
        {
            "field": "isPrgSmField",
            "name": "isPrgSmField",
            "create": false,
            "edit": false,
            "list": false
        },
        {
            "field": "isPrgPartComp",
            "name": "isPrgPartComp",
            "create": false,
            "edit": false,
            "list": false
        },
        {
            "field": "isPrgEncriptData",
            "name": "isPrgEncriptData",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgDescriptData",
            "name": "isPrgDescriptData",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        },
        {
            "field": "isPrgAccountUpdateId",
            "name": "isPrgAccountUpdateId",
            "create": false,
            "edit": false,
            "list": false,
            "type": "money"
        }
    ],
    _editform: [
        {
            "row": [
                0,
                1
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                2,
                3
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                4,
                5
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                6,
                7
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                8,
                9
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                10,
                11
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                12,
                13
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                14,
                15
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                16,
                17
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                18,
                19
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                20,
                21
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                22,
                23
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                24,
                25
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                26,
                27
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                28,
                29
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                30
            ],
            "style": [
                ".col-md-2",
                ".col-md-4"
            ]
        }
    ],
    _updateform: [
        {
            "row": [
                0,
                1
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                2,
                3
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                4,
                5
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                6,
                7
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                8,
                9
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                10,
                11
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                12,
                13
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                14,
                15
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                16,
                17
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                18,
                19
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                20,
                21
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                22,
                23
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                24,
                25
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                26,
                27
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                28,
                29
            ],
            "style": [
                ".col-md-2",
                ".col-md-4",
                ".col-md-2",
                ".col-md-4"
            ]
        },
        {
            "row": [
                30
            ],
            "style": [
                ".col-md-2",
                ".col-md-4"
            ]
        }
    ],
    _listReports: [
        {
            "name": "gcGobal_INCOM_Receipt",
            "cols": [
                {
                    "ColName": "MaCT",
                    "FormName": "MaCT",
                    "PositionData": 1,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "SoCT",
                    "FormName": "SoCT",
                    "PositionData": 2,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "MSHDId",
                    "FormName": "MSHDId",
                    "PositionData": 3,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "NgayLap",
                    "FormName": "NgayLap",
                    "PositionData": 4,
                    "IsShow": "isShow",
                    "ColType": "datetime",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "BranchId",
                    "FormName": "BranchId",
                    "PositionData": 5,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "LoaiKhachId",
                    "FormName": "LoaiKhachId",
                    "PositionData": 6,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "KHId",
                    "FormName": "KHId",
                    "PositionData": 7,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "TongTien",
                    "FormName": "TongTien",
                    "PositionData": 8,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "ThucThu",
                    "FormName": "ThucThu",
                    "PositionData": 9,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "NoLai",
                    "FormName": "NoLai",
                    "PositionData": 10,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "DienGiai",
                    "FormName": "DienGiai",
                    "PositionData": 11,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "VAT",
                    "FormName": "VAT",
                    "PositionData": 12,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "PhuThu",
                    "FormName": "PhuThu",
                    "PositionData": 13,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "NhanVienId",
                    "FormName": "NhanVienId",
                    "PositionData": 14,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "NgayHen",
                    "FormName": "NgayHen",
                    "PositionData": 15,
                    "IsShow": "isShow",
                    "ColType": "datetime",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "isFinished",
                    "FormName": "isFinished",
                    "PositionData": 16,
                    "IsShow": "isShow",
                    "ColType": "bit",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "DiscountCust",
                    "FormName": "DiscountCust",
                    "PositionData": 17,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "StatusId",
                    "FormName": "StatusId",
                    "PositionData": 18,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "isPrinted",
                    "FormName": "isPrinted",
                    "PositionData": 19,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "BankReceiptId",
                    "FormName": "BankReceiptId",
                    "PositionData": 20,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "CardPaymentId",
                    "FormName": "CardPaymentId",
                    "PositionData": 21,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "OrderId",
                    "FormName": "OrderId",
                    "PositionData": 22,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "ClassId",
                    "FormName": "ClassId",
                    "PositionData": 23,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Keep01",
                    "FormName": "Keep01",
                    "PositionData": 24,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Keep02",
                    "FormName": "Keep02",
                    "PositionData": 25,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Keep03",
                    "FormName": "Keep03",
                    "PositionData": 26,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Keep04",
                    "FormName": "Keep04",
                    "PositionData": 27,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Space01",
                    "FormName": "Space01",
                    "PositionData": 28,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Space02",
                    "FormName": "Space02",
                    "PositionData": 29,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Space03",
                    "FormName": "Space03",
                    "PositionData": 30,
                    "IsShow": "isShow",
                    "ColType": "datetime",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "SpaceId",
                    "FormName": "SpaceId",
                    "PositionData": 31,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                }
            ],
            "mPosDataSumTotal": [],
            "mMerCol": 0,
            "mPosHeader": 0,
            "mbAcceptCtrl": false,
            "bShowIndexRow": false,
            "mbStoreId": false,
            "jsonFormat": false,
            "bShowGroupBy": false,
            "bShowSTT": false
        },
        {
            "name": "gcGobal_INCOM_Receiptdetail",
            "cols": [
                {
                    "ColName": "MaCT",
                    "FormName": "MaCT",
                    "PositionData": 1,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "SoCT",
                    "FormName": "SoCT",
                    "PositionData": 2,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "MSHDId",
                    "FormName": "MSHDId",
                    "PositionData": 3,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "NgayLap",
                    "FormName": "NgayLap",
                    "PositionData": 4,
                    "IsShow": "isShow",
                    "ColType": "datetime",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "BranchId",
                    "FormName": "BranchId",
                    "PositionData": 5,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "LoaiKhachId",
                    "FormName": "LoaiKhachId",
                    "PositionData": 6,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "KHId",
                    "FormName": "KHId",
                    "PositionData": 7,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "TongTien",
                    "FormName": "TongTien",
                    "PositionData": 8,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "ThucThu",
                    "FormName": "ThucThu",
                    "PositionData": 9,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "NoLai",
                    "FormName": "NoLai",
                    "PositionData": 10,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "DienGiai",
                    "FormName": "DienGiai",
                    "PositionData": 11,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "VAT",
                    "FormName": "VAT",
                    "PositionData": 12,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "PhuThu",
                    "FormName": "PhuThu",
                    "PositionData": 13,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "NhanVienId",
                    "FormName": "NhanVienId",
                    "PositionData": 14,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "NgayHen",
                    "FormName": "NgayHen",
                    "PositionData": 15,
                    "IsShow": "isShow",
                    "ColType": "datetime",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "isFinished",
                    "FormName": "isFinished",
                    "PositionData": 16,
                    "IsShow": "isShow",
                    "ColType": "bit",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "DiscountCust",
                    "FormName": "DiscountCust",
                    "PositionData": 17,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "StatusId",
                    "FormName": "StatusId",
                    "PositionData": 18,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "isPrinted",
                    "FormName": "isPrinted",
                    "PositionData": 19,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "BankReceiptId",
                    "FormName": "BankReceiptId",
                    "PositionData": 20,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "CardPaymentId",
                    "FormName": "CardPaymentId",
                    "PositionData": 21,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "OrderId",
                    "FormName": "OrderId",
                    "PositionData": 22,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "ClassId",
                    "FormName": "ClassId",
                    "PositionData": 23,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Keep01",
                    "FormName": "Keep01",
                    "PositionData": 24,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Keep02",
                    "FormName": "Keep02",
                    "PositionData": 25,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Keep03",
                    "FormName": "Keep03",
                    "PositionData": 26,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Keep04",
                    "FormName": "Keep04",
                    "PositionData": 27,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Space01",
                    "FormName": "Space01",
                    "PositionData": 28,
                    "IsShow": "isShow",
                    "ColType": "float",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Space02",
                    "FormName": "Space02",
                    "PositionData": 29,
                    "IsShow": "isShow",
                    "ColType": "nvarchar",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "Space03",
                    "FormName": "Space03",
                    "PositionData": 30,
                    "IsShow": "isShow",
                    "ColType": "datetime",
                    "Parent": "isParent",
                    "iNotFillData": 0
                },
                {
                    "ColName": "SpaceId",
                    "FormName": "SpaceId",
                    "PositionData": 31,
                    "IsShow": "isShow",
                    "ColType": "int",
                    "Parent": "isParent",
                    "iNotFillData": 0
                }
            ],
            "mPosDataSumTotal": [],
            "mMerCol": 0,
            "mPosHeader": 0,
            "mbAcceptCtrl": false,
            "bShowIndexRow": false,
            "mbStoreId": false,
            "jsonFormat": false,
            "bShowGroupBy": false,
            "bShowSTT": false
        }
    ]
}