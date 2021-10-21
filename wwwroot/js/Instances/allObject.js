var listObjectSpaces = [{
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //1 Users(ID, Domain,BusinessID, UserName, Password, Email, Phone, PassCode)
        objID: { self: "Users", en: "Users", vn: "Tài khoản" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "UserName", en: "UserName", vn: "UserName", type: { self: "string", len: 256 }, allownull: false },
            { self: "Password", en: "Password", vn: "Password", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Email", en: "Email", vn: "Email", type: { self: "string", len: 1024 }, allownull: false },
            { self: "PassCode", en: "PassCode", vn: "PassCode", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Phone", en: "Phone", vn: "Phone", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Domain", en: "Domain", vn: "Domain", type: { self: "string", len: 1024 }, allownull: false },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "StaffID", en: "StaffID", vn: "StaffID", type: { self: "bigint" }, allownull: true },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        //{ colum: "FactoryID", refObjects: "Factory", refColum: "Id", refObjectShow:[Code,Name,Price...] }
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "StaffID", refObjects: "Staff", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        isParsered: false,
        connectionObject: [{ connectOBj: "Department" }, { connectOBj: "Categorys" }],
        NumRowsTEST: { numRows: 100, isCreated: false, isScan: false},
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        //Copy như nhau
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
            { id: "divFormContent", show: false, css: "special", instanceName: "Show/Hide Form" },
            { id: "divSearchContent", show: false, css: "special", instanceName: "Show/Hide Search form" },
            { id: "tabDetail", show: false, css: "special", instanceName: "Chi tiết phiếu xuất" },

            //--------------------------
            //các chi tiết mở rộng cho instance này
            { id: "tabCompany", show: false, css: "special", instanceName: "Khách hàng Công ty " },
            { id: "tabUnit", show: false, css: "special", instanceName: "Đơn vị tính " },
            { id: "tabProduct", show: false, css: "special", instanceName: "Sản phẩm " },
            { id: "tabContract", show: false, css: "special", instanceName: "Hợp đồng " },

            //grid control
            { id: "btnGridAdd", show: false, css: "special", instanceName: "Thêm" },
            { id: "btnGridEdit", show: false, css: "special", instanceName: "Sửa" },
            { id: "btnGridCancel", show: false, css: "special", instanceName: "Hủy" },
            { id: "btnGriDelete", show: false, css: "special", instanceName: "Xóa" },
            { id: "btnGridDetail", show: false, css: "special", instanceName: "Chi tiết" },

            //các nút cho logic trên grid như
            { id: "btnGridTranfer", show: false, css: "special", instanceName: "Transfer" },
            { id: "btnGridTranferAll", show: false, css: "special", instanceName: "TransferAll" },
            { id: "btnGridReceive", show: false, css: "special", instanceName: "Receive" },
            { id: "btnGridReceiveAll", show: false, css: "special", instanceName: "ReceiveAll" },
            { id: "btnGridDelivery", show: false, css: "special", instanceName: "Delivery" },
            { id: "btnGridDeliveryAll", show: false, css: "special", instanceName: "DeliveryAll" },

            //vẫn show như disable có điều kiện mới enable
            { id: "btnGriDelete", show: true, disable: true, css: "special", instanceName: "Xóa" },
        ],
        //nhiều form khác nhau cho đối tượng này (Receipt)
        //Extern View for this instance
        allReffields: [{
            self: "this", fields: [
        //tab 1
        /*0*/{ field: "Id", name: "#", create: false, edit: true, list: true, type: "hidden" },
        /*1*/{ field: "Code", name: "Code", create: true, edit: true, list: true },
        /*2*/{ field: "Sender", name: "Sender", create: true, edit: true, list: true, type: "select", option: "/KhachHang/GetKhachHangOptions" },
        /*3*/{ field: "PhoneSender", name: "Phone Sender", create: false, edit: true, list: false },
        /*4*/{ field: "Receiver", name: "Receiver", create: true, edit: true, list: true, type: "select", option: "/KhachHang/GetKhachHangOptions" },
        /*5*/{ field: "PhoneReceiver", name: "Phon eReceiver", create: false, edit: true, list: false },
        /*6*/{ field: "VanPhongGuiId", name: "Send Office", create: true, edit: true, list: true, type: "select", option: "/List/GetVanPhongOptions" },
        /*7*/{ field: "VanPhongNhanId", name: "Receive Office", create: true, edit: true, list: true, type: "select", option: "/List/GetVanPhongOptions" },
        /*8*/{ field: "NoiDung", name: "Description", create: true, edit: true, list: false, type: "textarea" },
        /*9*/{ field: "CuocGui", name: "Price", create: true, edit: true, list: false, type: "money" },
        /*10*/{ field: "VAT", name: "VAT(%)", create: true, edit: true, list: false, type: "money" },
        /*11*/{ field: "TongTien", name: "Total price", create: true, edit: true, type: "money"/*, readonly: true*/ },
        /*12*/{ field: "LoaiTien", name: "Currency Type", create: true, edit: true, list: false, type: "select", option: "/List/GetListTienTeOptions" },
        /*13*/{ field: "Status_TT", name: "Payment status", create: true, edit: true, list: true, type: "select", option: "/List/GetListThanhToanOptions" },
        /*14*/{ field: "TienVietNam", name: "$Việt Nam", create: true, edit: false, list: false, type: "money" },
        /*15*/{ field: "QuyDoiVietNam", name: "Transfer Việt Nam", create: true, edit: false, list: false, type: "money" },
        /*16*/{ field: "USD", name: "USD", create: true, edit: false, list: false, type: "money" },
        /*17*/{ field: "QuyDoiUSD", name: "Transfer USD", create: true, edit: false, list: false, type: "money" },
        /*18*/{ field: "RIA", name: "$ RIA", create: true, edit: false, list: false, type: "money" },
        /*19*/{ field: "QuyDoiRIA", name: "Transfer RIA", create: true, edit: false, list: false, type: "money" },
        /*20*/{ field: "Thu", name: "Cash", create: true, edit: false, list: false, type: "money" },
        /*21*/{ field: "No", name: "Debt", create: true, edit: true, list: false, type: "money" },
        /*22*/{ field: "HTTT", name: "Payment type", create: true, edit: true, list: true, type: "select", option: "/List/GetListHHTTOptions" },
        /*23*/{ field: "Date_PhatHang", name: "Date Transfer", create: false, edit: false, list: false, type: "datetime" },
        /*24*/{ field: "Date_NhanHang", name: "Date Receive", create: false, edit: false, list: false, type: "datetime" },
        /*25*/{ field: "Note", name: "Note", create: true, edit: true, list: false, type: "textarea" },
        /*26*/{ field: "Status", name: "Status", create: false, edit: false, list: false, type: "change1" },
        /*27*/{ field: "IsPrgCreatedDate", name: "Create Date", create: false, edit: true, list: true, type: "datetime" },
            ]
        },
        {
            self: "detail", fields: [
        //create detail        
        //{ field: "BillId", name: "ID HĐ", create: false, edit: false, list: false },
        /*28*/{ field: "Id", name: "#", create: false, edit1: true, list1: true, type: "hidden" },
        /*29*/{ field: "Mota", name: "Description", create: true, edit1: true, list1: true },
        /*30*/{ field: "DonViId", name: "Unit", create: true, edit1: true, list1: true, type: 'select', option: '/List/GetDonViOptions' },
        /*31*/{ field: "SoLuong", name: "Amount", create: true, edit1: true, list1: true },
        /*32*/{ field: "SoLuongTra", name: "Transfer Amount", create: true, edit1: true, list1: true },
        /*33*/{ field: "SoLuongCon", name: "Save Amount", create: true, edit1: true, list1: true },
        /*34*/{ field: "DonGia", name: "Price", create: true, edit1: true, list1: true },
        /*35*/{ field: "GiaTri", name: "Total price", create: true, edit1: true, list1: true },
        /*36*/{ field: "Name", name: "Specifications", create: true, edit1: true, list1: true },
        /*37*/{ field: "Status", name: "Status", create: false, edit1: false, list1: false, type: 'change1' },
        /*38*/{ field: "IsPrgCreatedDate", name: "Create date", create: false, edit1: false, list1: true, type: 'datetime' },
            ]
        },
        {
            self: "transfer", fields: [
        //field
        /*39*/{ field: "Id", name: "#", create: false, edit1: true, list2: true, type: "hidden" },
        /*40*/{ field: "Mota", name: "Description", create: true, edit1: true, list2: true, readonly: true },
        /*41*/{ field: "DonViId", name: "Unit", create: true, edit1: true, list2: true, disabled: true, type: 'select', option: '/List/GetDonViOptions' },
        /*42*/{ field: "SoLuong", name: "Receive amuont", create: true, edit1: true, list2: false, readonly: true },
        /*43*/{ field: "SoLuongChuyen", name: "Transfer amount", create: true, edit1: true, list2: false },
        /*44*/{ field: "SoLuongCon", name: "Save amount", create: true, edit1: true, list2: true, readonly: true },
        /*45*/{ field: "DonGia", name: "Price", create: true, edit1: true, list2: false },
        /*46*/{ field: "GiaTri", name: "nubmer of", create: true, edit1: true, list2: false },
        /*47*/{ field: "Name", name: "Specifications", create: true, edit1: true, list2: true },
        /*48*/{ field: "Status", name: "Status", create: false, edit1: false, list2: false, type: 'change1' },
        /*49*/{ field: "IsPrgCreatedDate", name: "Create Date", create: false, edit1: false, list2: true, type: 'datetime' },
        /*50*/{ field: "BillId", name: "#", create: false, edit1: true, list2: false },
            ]
        },
        {
            self: "customer", fields: [
        //field Customer
        /*51*/{ field: "Ten", name: "Name", create: true, edit1: false, list2: false },
        /*52*/{ field: "SoDienThoai", name: "Phone", create: true, edit1: false, list2: false },
        /*53*/{ field: "DiaChi", name: "Address", create: true, edit1: false, list2: false },
            ]
        },
        {
            self: "customerSearch", fields: [
        //field Customer
        /*54*/{ field: "Name", name: "Unit name", create: true, edit1: false, list2: false },
            ]
        },
        {
            self: "inputTransfer", fields: [
        ///*55*/{ field: "GomNhom", name: "Gom nhóm", create: true, edit1: true, list1: true, disabled: true, type: 'select', option: '/List/GetListGomNhomOptions' },
        ///*55*/{ field: "DonViTinhId", name: "Unit tiền", create: true, edit1: true, list1: true, disabled: true, type: 'select', option: '/List/GetDonViOptions' },
        /*55*/{ field: "InputQuyCach", name: "INput specification", create: false, edit1: false, list1: false },
        /*56*/{ field: "QuyCachChuyen", name: "Transfer specification", create: false, edit1: false, list1: false },
        /*57*/{ field: "QuyCachCon", name: "Save specfication", create: false, edit1: true, list2: true, readonly: true },
        /*58*/{ field: "Name", name: " specification", create: false, edit1: false, list1: false, readonly: true },
            ]
        },
        {
            self: "customizeData", fields: [
        /*59*/{ field: "Name", name: "Receive specification", create: false, edit1: false, list1: false, readonly: true },

        /*60*/{ field: "LoaiTienTe", name: "Currency", create: true, edit1: true, list1: true, type: "select", option: "/List/GetListTienTeOptions" },
        /*61*/{ field: "LoaiThanhToan", name: "Payment type", create: true, edit1: true, list1: true, type: "select", option: "/List/GetListHHTTOptions" },
        /*62*/{ field: "DateThanhToan", name: "Payment date", create: true, edit1: true, list1: true, type: "datetime" },

                { field: "SenderId", name: "Sender", create: false, edit: false, list: false, type: "select", option: "/KhachHang/GetKhachHangOptions" },
                { field: "ReceiverId", name: "Receiver", create: false, edit: false, list: false, type: "select", option: "/KhachHang/GetKhachHangOptions" },
            ]
        },
        {
            self: "this", fields: [
                { field: "TienVietNam", name: "Currency Vietname", create: false, edit1: false, list3: true },
                { field: "QuyDoiVietNam", name: "Transfer VietName", create: false, edit1: false, list3: true },
                { field: "USD", name: "Currency USD", create: false, edit1: false, list3: true },
                { field: "QuyDoiUSD", name: "Transfer USD", create: false, edit1: false, list3: true },
                { field: "RIA", name: "Currency RIA", create: false, edit1: false, list3: true },
                { field: "QuyDoiRIA", name: "Transfer RIA", create: false, edit1: false, list3: true },
                { field: "IsPrgCreatedDate", name: "Create date", create: false, edit1: false, list3: true, type: 'datetime' },
            ]
        }],

        fieldss: [
            //tab 1
            { field: "Id", name: "#", create: false, edit: true, list: true, type: "hidden" },
            { field: "Code", name: "Code", create: true, edit: true, list: true },
            { field: "Sender", name: "Sender", create: true, edit: true, list: true },
            { field: "PhoneSender", name: "Sender phone", create: true, edit: true, list: true },
            { field: "Receiver", name: "Receiver", create: true, edit: true, list: true },
            { field: "PhoneReceiver", name: "Receiver Phone", create: true, edit: true, list: true },
            { field: "VanPhongGuiId", name: "Office send", create: true, edit: true, list: true, type: "select", option: "/List/GetVanPhongOptions" },
            { field: "VanPhongNhanId", name: "Office receive", create: true, edit: true, list: true, type: "select", option: "/List/GetVanPhongOptions" },
            //{ field: "NoiDung", name: "Content", create: true, edit: true, list: true, type: "textarea" },
            //{ field: "CuocGui", name: "Cước gửi", create: true, edit: true, list: false, type: "money" },
            //{ field: "VAT", name: "VAT(%)", create: true, edit: true, list: false, type: "money" },
            { field: "TongTien", name: "Total", create: true, edit: false, list: true, type: "money", readonly: true },
            { field: "Status_TT", name: "Payment status", create: false, edit: true, list: true, type: "select", option: "/List/GetListThanhToanOptions" },
            //{ field: "Date_PhatHang", name: "Ngày phát hàng", create: false, edit: false, list: true, type: "datetime" },
            //{ field: "Date_NhanHang", name: "Ngày nhận hàng", create: false, edit: false, list: false, type: "datetime" },
            //{ field: "Note", name: "Note", create: true, edit: true, list: true, type: "textarea" },
            { field: "Status", name: "Status", create: false, edit: false, list: true, type: "change2" },
            { field: "IsPrgCreatedDate", name: "Create date", create: false, edit: false, list: true, type: "datetime" },
        ],
        fieldsb: [
            //tab 1
            { field: "Id", name: "#", create: false, edit: false, list: true, type: "hidden" },
            { field: "Code", name: "Code", create: true, edit: true, list: true },
            { field: "SenderId", name: "Sender Id", create: true, edit: true, list: true, type: "select", option: "/KhachHang/GetKhachHangOptions" },
            { field: "ReceiverId", name: "Receiver ID", create: true, edit: true, list: true, type: "select", option: "/KhachHang/GetKhachHangOptions" },
            { field: "Sender", name: "Sender", create: true, edit: true, list: false },
            { field: "PhoneSender", name: "Sender Phone", create: true, edit: true, list: false },
            { field: "Receiver", name: "Receiver", create: true, edit: true, list: false },
            { field: "PhoneReceiver", name: "Receiver Phone", create: true, edit: true, list: false },
            { field: "VanPhongGuiId", name: "Office send", create: true, edit: true, list: true, type: "select", option: "/List/GetVanPhongOptions" },
            { field: "VanPhongNhanId", name: "Office receive", create: true, edit: true, list: true, type: "select", option: "/List/GetVanPhongOptions" },
            { field: "HTTT", name: "Payment type", create: true, edit: true, list: true, type: "select", option: "/List/GetListHHTTOptions" },
            { field: "Status_TT", name: "Payment status", create: true, edit: true, list: true, type: "select", option: "/List/GetListThanhToanOptions" },
            { field: "IsPrgCreatedDate", name: "Create date", create: false, edit: false, list: true, type: "datetime" },
        ],
        mainSearchForm: [
            //tab 1
            { field: "Id", name: "#", create: false, edit: false, list: true, type: "hidden" },
            { field: "Code", name: "Code", create: true, edit: true, list: true },
            { field: "Sender", name: "Sender", create: true, edit: true, list: true },
            { field: "PhoneSender", name: "Sender Phone", create: true, edit: true, list: true },
            { field: "Receiver", name: "Receiver", create: true, edit: true, list: true },
            { field: "PhoneReceiver", name: "Receiver Phone", create: true, edit: true, list: true },
            { field: "VanPhongGuiId", name: "Office send", create: true, edit: true, list: true, type: "select", option: "/List/GetVanPhongOptions" },
            { field: "VanPhongNhanId", name: "Office receive", create: true, edit: true, list: true, type: "select", option: "/List/GetVanPhongOptions" },
            //{ field: "TongTien", name: "Nội dung", create: true, edit: true, list: true, type: "textarea" },
            //{ field: "CuocGui", name: "Cước gửi", create: true, edit: true, list: false, type: "money" },
            //{ field: "VAT", name: "VAT(%)", create: true, edit: true, list: false, type: "money" },
            { field: "TongTien", name: "Total", create: true, edit: true, list: true, type: "money", readonly: true },
            { field: "Status_TT", name: "Payment status", create: true, edit: true, list: true, type: "select", option: "/List/GetListThanhToanOptions" },
            //{ field: "Date_PhatHang", name: "Ngày phát hàng", create: false, edit: false, list: false, type: "datetime" },
            //{ field: "Date_NhanHang", name: "Ngày nhận hàng", create: false, edit: false, list: true, type: "datetime" },
            //{ field: "Note", name: "Note", create: true, edit: true, list: true, type: "textarea" },
            { field: "Status", name: "Status", create: false, edit: false, list: true, type: "change1" },
            { field: "IsPrgCreatedDate", name: "Create date", create: false, edit: false, list: true, type: "datetime" },
        ],

        fieldprint: [
            //tab 1
            { field: "Id", name: "#", create: false, edit: false, list: true, type: "hidden" },
            { field: "Code", name: "Code", create: true, edit: true, list: true },
            { field: "Sender", name: "Sender", create: true, edit: true, list: true },
            { field: "PhoneSender", name: "Sender Phone", create: true, edit: true, list: true },
            { field: "Receiver", name: "Receiver", create: true, edit: true, list: true },
            { field: "PhoneReceiver", name: "Receiver Phone", create: true, edit: true, list: true },
            { field: "VanPhongGui", name: "Office Send", create: true, edit: true, list: true },
            { field: "VanPhongNhan", name: "Office Receive", create: true, edit: true, list: true },
            { field: "TongTien", name: "Total", create: true, edit: true, list: true },
            { field: "LoaiTien", name: "Currency", create: true, edit: true, list: true, type: "select", option: "/List/GetListTienTeOptions" },
            { field: "Status_TT", name: "Payment Type", create: true, edit: true, list: true, type: "select", option: "/List/GetListThanhToanOptions" },
            { field: "HTTT", name: "Payment Status", create: true, edit: true, list: true, type: "select", option: "/List/GetListHHTTOptions" },
            { field: "Status", name: "Status", create: false, edit: false, list: true },
            { field: "IsPrgCreatedDate", name: "Create date", create: false, edit: false, list: true, type: "datetime" },
            { field: "No", name: "Debt", create: true, edit: true, list: true },
        ],


        searchFields: [
            //tab 1
            { field: "Id", name: "#", create: false, edit: false, list: true, type: "hidden" },
            { field: "BillId", name: "Bill Id", create: true, edit: true, list: true },
            { field: "Mota", name: "Description", create: true, edit: true, list: true },
            { field: "DonVi", name: "Unit", create: true, edit: true, list: true },
            { field: "SoLuong", name: "Amount", create: true, edit: true, list: true },
            { field: "DonGia", name: "Price", create: true, edit: true, list: true },
            { field: "GiaTri", name: "Total", create: true, edit: true, list: true },
            { field: "Status", name: "Status", create: true, edit: true, list: true },
            { field: "IsPrgCreatedDate", name: "Create date", create: false, edit: false, list: true, type: "datetime" },
        ],
        form: [
            //obj.cForm = [[2, 6, 4, 7], [22, 11, 12, 20], [13, 14, 15, 16], [17, 18, 19, 8]];
            { type: "cForm", ordered: [[6], [7, 4], [13, 27], [8]] },
            { type: "fForm", ordered: [[6], [4, 7], [13, 27], [8]] },
            { type: "sForm", ordered: [[29], [30], [36, 31], [34, 60]] },
            { type: "eForm", ordered: [[[40], [58]], [[41], [57]], [[44], [55]], [[43], [56]]] },
            { type: "dForm", ordered: [[29], [30], [36, 31], [34, 60]] },
            { type: "smForm", ordered: [[51], [52], [53]] },
            { type: "pForm", ordered: [[54]] },
            { type: "hForm", ordered: [[11], [12], [14], [15], [16], [17], [18], [19], [20]] },
        ],
        //End copy paste to object

        APIFile: "StockProduct.js",//+instance name
        GroupApp: [
            { group: "AdminGroup", instanceof: ["grid", "report"] },
            { group: "SellerGroup", instanceof: ["grid", "form"] },
            { group: "EmployeeGroup", instanceof: ["grid", "form"] },
            { group: "ReportGroup", instanceof: ["report"] },
        ],
        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
},
{
    //2
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Logins(UserID, Online, TimeLogin, TimeLogout, TotalTimes, UpdatedTime)
        objID: { self: "Logins", en: "Logins", vn: "Logins" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "TimeLogin", en: "TimeLogin", vn: "TimeLogin", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "TimeLogout", en: "TimeLogout", vn: "TimeLogout", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "UpdatedTime", en: "UpdatedTime", vn: "UpdatedTime", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "TotalTimes", en: "TotalTimes", vn: "TotalTimes", type: { self: "double" }, allownull: false, defaultvalue: "DEFAULT 0.00" },

            { self: "UserID", en: "UserID", vn: "UserID", type: { self: "bigint" }, allownull: true },
            { self: "Online", en: "Online", vn: "Online", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isUser", en: "isUser", vn: "isUser", type: { self: "bigint", len: 128 }, allownull: false },
            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "UserID", refObjects: "Users", refColum: "Id", refObjectShow: ["Name"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false},
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
},
{
    //3
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //LogActivity(UserID, task, todo, UpdatedTime)
        objID: { self: "LogActivity", en: "LogActivity", vn: "LogActivity" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "task", en: "task", vn: "task", type: { self: "string", len: 4096 }, allownull: false, defaultvalue: "DEFAULT ''" },
            { self: "todo", en: "todo", vn: "TimeLogout", type: { self: "string", len: 4096 }, allownull: false, defaultvalue: "DEFAULT ''" },
            { self: "UpdatedTime", en: "UpdatedTime", vn: "UpdatedTime", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },

            { self: "UserID", en: "UserID", vn: "UserID", type: { self: "bigint" }, allownull: true },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "UserID", refObjects: "Users", refColum: "Id", refObjectShow: ["Name"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
},
{
    //4
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Business(UserID, ID, Name, ShortName, Phone, Address, Email, City, District, Ward, CountryCode, StateCode, PostalCode, 
        //Logo, BannerLogo, OpenTime, Description, IndustryID)
        objID: { self: "Business", en: "Business", vn: "Business" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },
            { self: "ShortName", en: "ShortName", vn: "ShortName", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Email", en: "Email", vn: "Email", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Address", en: "Address", vn: "Address", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Phone", en: "Phone", vn: "Phone", type: { self: "string", len: 1024 }, allownull: false },
            { self: "City", en: "City", vn: "City", type: { self: "string", len: 1024 }, allownull: false },
            { self: "District", en: "District", vn: "District", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Ward", en: "Ward", vn: "Ward", type: { self: "string", len: 1024 }, allownull: false },
            { self: "CountryCode", en: "CountryCode", vn: "CountryCode", type: { self: "string", len: 1024 }, allownull: false },
            { self: "StateCode", en: "StateCode", vn: "StateCode", type: { self: "string", len: 1024 }, allownull: false },
            { self: "PostalCode", en: "PostalCode", vn: "PostalCode", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Logo", en: "Logo", vn: "Logo", type: { self: "string", len: 1024 }, allownull: false },
            { self: "BannerLogo", en: "BannerLogo", vn: "BannerLogo", type: { self: "string", len: 1024 }, allownull: false },
            { self: "OpenTime", en: "OpenTime", vn: "OpenTime", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Description", en: "Description", vn: "Description", type: { self: "string", len: 1024 }, allownull: false },

            { self: "IndustryID", en: "IndustryID", vn: "IndustryID", type: { self: "bigint" }, allownull: true },
            { self: "UserID", en: "UserID", vn: "UserID", type: { self: "bigint" }, allownull: true },
            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "UserID", refObjects: "Users", refColum: "Id", refObjectShow: ["UserName"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //BusinessTime(BusinessID, dayth, opentime, closetime, active)
    ,
{
    //5
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //BusinessTime(BusinessID, dayth, opentime, closetime, active)
        objID: { self: "BusinessTime", en: "BusinessTime", vn: "BusinessTime" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "dayth", en: "dayth", vn: "dayth", type: { self: "string", len: 256 }, allownull: false },
            { self: "opentime", en: "opentime", vn: "opentime", type: { self: "datetime", len: 1024 }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "closetime", en: "closetime", vn: "closetime", type: { self: "datetime", len: 1024 }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //BusinessServiceStaffSetting(BusinessID, Description, Active)
    ,
{
    //6
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //BusinessServiceStaffSetting(BusinessID, Description, Active)
        objID: { self: "BusinessServiceStaffSetting", en: "BusinessServiceStaffSetting", vn: "BusinessServiceStaffSetting" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Description", en: "dayth", vn: "dayth", type: { self: "string", len: 4096 }, allownull: false },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //TicketSetting(BusinessID, FieldName, FormName, TableName, Ordered, Active)
    ,
{
    //7
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //TicketSetting(BusinessID, FieldName, FormName, TableName, Ordered, Active)
        objID: { self: "TicketSetting", en: "TicketSetting", vn: "TicketSetting" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "FieldName", en: "FieldName", vn: "FieldName", type: { self: "string", len: 4096 }, allownull: false },
            { self: "FormName", en: "FormName", vn: "FormName", type: { self: "string", len: 1024 }, allownull: false },
            { self: "TableName", en: "TableName", vn: "TableName", type: { self: "string", len: 1024 }, allownull: false },
            { self: "Ordered", en: "Ordered", vn: "Ordered", type: { self: "string", len: 1024 }, allownull: false },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //CheckoutType(ID, Name, FormName, Active)
    ,
{
    //8
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //CheckoutType(ID, Name, FormName, Active)
        objID: { self: "CheckoutType", en: "CheckoutType", vn: "CheckoutType" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 4096 }, allownull: false },
            { self: "FormName", en: "FormName", vn: "FormName", type: { self: "string", len: 1024 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //CheckoutSetting(BusinessID, CheckoutTypeID, PointBonus)
    ,
{
    //9
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //CheckoutSetting(BusinessID, CheckoutTypeID, PointBonus)
        objID: { self: "CheckoutSetting", en: "CheckoutSetting", vn: "CheckoutSetting" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "PointBonus", en: "PointBonus", vn: "PointBonus", type: { self: "double" }, allownull: false },

            { self: "CheckoutTypeID", en: "CheckoutTypeID", vn: "CheckoutTypeID", type: { self: "bigint" }, allownull: true },
            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [{ colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "CheckoutTypeID", refObjects: "CheckoutType", refColum: "Id", refObjectShow: ["Name"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //BusinessPolycies(BusinessID, Description, OrtherPolices, Active)
    ,
{
    //10
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //BusinessPolycies(BusinessID, Description, OrtherPolices, Active)
        objID: { self: "BusinessPolycies", en: "BusinessPolycies", vn: "BusinessPolycies" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Description", en: "Description", vn: "Description", type: { self: "string", len: 4096 }, allownull: false },
            { self: "OrtherPolices", en: "OrtherPolices", vn: "OrtherPolices", type: { self: "string", len: 4096 }, allownull: false },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //BusinessLanguages(BusinessID, LanguageID, Active)
    ,
{
    //11
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //BusinessLanguages(BusinessID, LanguageID, Active)
        objID: { self: "BusinessLanguages", en: "BusinessLanguages", vn: "BusinessLanguages" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },


            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "LanguageID", en: "LanguageID", vn: "LanguageID", type: { self: "bigint" }, allownull: true },
            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "LanguageID", refObjects: "Languages", refColum: "Id", refObjectShow: ["Name", "Code"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //Languages(ID, Name, FormName)
    ,
{
    //12
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Languages(ID, Name, FormName)
        objID: { self: "Languages", en: "Languages", vn: "Languages" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 4096 }, allownull: false },
            { self: "FormName", en: "FormName", vn: "FormName", type: { self: "string", len: 4096 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 100, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //SMS(ID, NameTemplate, Description, FormName)
    ,
{
    //13
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //SMS(ID, NameTemplate, Description, FormName)
        objID: { self: "SMS", en: "SMS", vn: "SMS" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 4096 }, allownull: false },
            { self: "FormName", en: "FormName", vn: "FormName", type: { self: "string", len: 4096 }, allownull: false },
            { self: "NameTemplate", en: "NameTemplate", vn: "NameTemplate", type: { self: "string", len: 4096 }, allownull: false },
            { self: "Description", en: "Description", vn: "Description", type: { self: "string", len: 4096 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //SMSGobalTemplate(ID, NameTemplate, Description, FormName)
    ,
{
    //14
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //SMSGobalTemplate(ID, NameTemplate, Description, FormName)
        objID: { self: "SMSGobalTemplate", en: "SMSGobalTemplate", vn: "SMSGobalTemplate" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 4096 }, allownull: false },
            { self: "FormName", en: "FormName", vn: "FormName", type: { self: "string", len: 4096 }, allownull: false },
            { self: "NameTemplate", en: "NameTemplate", vn: "NameTemplate", type: { self: "string", len: 4096 }, allownull: false },
            { self: "Description", en: "Description", vn: "Description", type: { self: "string", len: 4096 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //BusinessSMS(BusinessID, SMSID, FormName, ContentName, Active)
    ,
{
    //15
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //BusinessSMS(BusinessID, SMSID, FormName, ContentName, Active)
        objID: { self: "BusinessSMS", en: "BusinessSMS", vn: "BusinessSMS" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "SMSID", en: "SMSID", vn: "SMSID", type: { self: "bigint" }, allownull: true },

            { self: "ContentName", en: "ContentName", vn: "ContentName", type: { self: "string", len: 4096 }, allownull: false },
            { self: "FormName", en: "FormName", vn: "FormName", type: { self: "string", len: 4096 }, allownull: false },
            { self: "Description", en: "Description", vn: "Description", type: { self: "string", len: 4096 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "SMSID", refObjects: "SMS", refColum: "Id", refObjectShow: ["Id"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //PromotionDetail(PromotionID, WhatOfferName, Discount, MixCustomerType, EmailTitle, BusinessName, SaveNextTime, 
    //OtherDesctiption, ActiveSTOPfromUer, ExpireDate, FromDate, ToDate, PhoneTest, EmailTest, 
    //UseOneTimeThisPromotion, DateSendPromotion, SendNow, UpdatedTime)
    ,
{
    //16
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //PromotionDetail(PromotionID, WhatOfferName, Discount, MixCustomerType, EmailTitle, BusinessName, SaveNextTime, 
        //OtherDesctiption, ActiveSTOPfromUer, ExpireDate, FromDate, ToDate, PhoneTest, EmailTest, 
        //UseOneTimeThisPromotion, DateSendPromotion, SendNow, UpdatedTime)
        objID: { self: "PromotionDetail", en: "PromotionDetail", vn: "PromotionDetail" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "PromotionID", en: "PromotionID", vn: "PromotionID", type: { self: "bigint" }, allownull: true },
            { self: "WhatOfferName", en: "WhatOfferName", vn: "WhatOfferName", type: { self: "string", len: 4096 }, allownull: false },
            { self: "Discount", en: "Discount", vn: "Discount", type: { self: "double" , expandtype:"money", prediction:2 }, allownull: true,  },
            { self: "MixCustomerType", en: "MixCustomerType", vn: "MixCustomerType", type: { self: "int" }, allownull: true },

            { self: "EmailTitle", en: "EmailTitle", vn: "EmailTitle", type: { self: "string", len: 4096 }, allownull: false },
            { self: "BusinessName", en: "BusinessName", vn: "BusinessName", type: { self: "string", len: 4096 }, allownull: false },
            { self: "OtherDesctiption", en: "OtherDesctiption", vn: "OtherDesctiption", type: { self: "string", len: 4096 }, allownull: false },
            { self: "PhoneTest", en: "PhoneTest", vn: "PhoneTest", type: { self: "string", len: 4096 }, allownull: false },
            { self: "EmailTest", en: "EmailTest", vn: "EmailTest", type: { self: "string", len: 4096 }, allownull: false },

            { self: "ActiveSTOPfromUer", en: "ActiveSTOPfromUer", vn: "ActiveSTOPfromUer", type: { self: "bigint" }, allownull: true },
            { self: "UseOneTimeThisPromotion", en: "UseOneTimeThisPromotion", vn: "UseOneTimeThisPromotion", type: { self: "int" }, allownull: true },
            { self: "SendNow", en: "SendNow", vn: "SendNow", type: { self: "int" }, allownull: true },
            { self: "Income", en: "Income", vn: "Income", type: { self: "double" }, allownull: true },

            { self: "DateSendPromotion", en: "DateSendPromotion", vn: "DateSendPromotion", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "UpdatedTime", en: "UpdatedTime", vn: "UpdatedTime", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "SaveNextTime", en: "SaveNextTime", vn: "SaveNextTime", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "ExpireDate", en: "ExpireDate", vn: "ExpireDate", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "FromDate", en: "FromDate", vn: "FromDate", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "ToDate", en: "ToDate", vn: "ToDate", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },

            { self: "DeliverEmail", en: "DeliverEmail", vn: "DeliverEmail", type: { self: "string", len: 4096 }, allownull: false },
            { self: "DeliverSMS", en: "DeliverSMS", vn: "DeliverSMS", type: { self: "string", len: 4096 }, allownull: false },
            { self: "Description", en: "Description", vn: "Description", type: { self: "string", len: 4096 }, allownull: false },

            { self: "TotalUserUsePromotionSMS", en: "TotalUserUsePromotionSMS", vn: "TotalUserUsePromotionSMS", type: { self: "bigint" }, allownull: true },
            { self: "TotalUserUsePromotionEmail", en: "TotalUserUsePromotionEmail", vn: "TotalUserUsePromotionEmail", type: { self: "bigint" }, allownull: true },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        isParsered: false,
        refObjects: [
            { colum: "PromotionID", refObjects: "Promotions", refColum: "Id", refObjectShow: ["Id"] }
        ],
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //PromotionDashBoard(BusinessID, PromotionID, TotalDelivered, Email, Phone, Income, Expense)
    ,
{
    //17
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //PromotionDashBoard(BusinessID, PromotionID, TotalDelivered, Email, Phone, Income, Expense)
        objID: { self: "PromotionDashBoard", en: "PromotionDashBoard", vn: "PromotionDashBoard" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "PromotionID", en: "PromotionID", vn: "PromotionID", type: { self: "bigint" }, allownull: true },

            { self: "TotalDelivered", en: "TotalDelivered", vn: "TotalDelivered", type: { self: "double" }, allownull: false },
            { self: "Income", en: "Income", vn: "Income", type: { self: "double" }, allownull: false },
            { self: "Expense", en: "Expense", vn: "Expense", type: { self: "double" }, allownull: false },
            { self: "Phone", en: "Phone", vn: "Phone", type: { self: "string", len: 50 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        isParsered: false,
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "PromotionID", refObjects: "Promotions", refColum: "Id", refObjectShow: ["Id"] }
        ],
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}

    //PromotionDetailDashBoard(BusinessID, PromotionID, CusomerName, CustomerPhone, NumVisit, TotalDelivered, Email, Phone, Income, Expense)
    ,
{
    //18
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //PromotionDetailDashBoard(BusinessID, PromotionID, CusomerName, CustomerPhone, NumVisit, TotalDelivered, Email, Phone, Income, Exprnse)
        objID: { self: "PromotionDetailDashBoard", en: "PromotionDetailDashBoard", vn: "PromotionDetailDashBoard" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "PromotionID", en: "PromotionID", vn: "PromotionID", type: { self: "bigint" }, allownull: true },

            { self: "CusomerName", en: "CusomerName", vn: "CusomerName", type: { self: "string", len: 256 }, allownull: false },
            { self: "CustomerPhone", en: "CustomerPhone", vn: "CustomerPhone", type: { self: "string", len: 50 }, allownull: false },
            { self: "NumVisit", en: "NumVisit", vn: "NumVisit", type: { self: "int" }, allownull: false },
            { self: "TotalDelivered", en: "TotalDelivered", vn: "TotalDelivered", type: { self: "double" }, allownull: false },
            { self: "Income", en: "Income", vn: "Income", type: { self: "double" }, allownull: false },
            { self: "Expense", en: "Expense", vn: "Expense", type: { self: "double" }, allownull: false },
            { self: "Phone", en: "Phone", vn: "Phone", type: { self: "string", len: 50 }, allownull: false },
            { self: "Email", en: "Phone", vn: "Phone", type: { self: "string", len: 256 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "PromotionID", refObjects: "Promotions", refColum: "Id", refObjectShow: ["Id"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //Staff(BusinessID, StaffID, Name, Avatar, Code, NickName, Cell, Email, Address, Color, DepartmentID, ortherContactCell)
    ,
{
    //19
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Staff(BusinessID, StaffID, Name, Avatar, Code, NickName, Cell, Email, Address, Color, DepartmentID, ortherCell)
        objID: { self: "Staff", en: "Staff", vn: "Staff" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "DepartmentID", en: "DepartmentID", vn: "DepartmentID", type: { self: "bigint" }, allownull: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },
            { self: "Avatar", en: "Avatar", vn: "Avatar", type: { self: "string", len: 256 }, allownull: false },
            { self: "Code", en: "Code", vn: "Code", type: { self: "string", len: 50 }, allownull: false },
            { self: "Phone", en: "Phone", vn: "Phone", type: { self: "string", len: 50 }, allownull: false },
            { self: "ortherPhone", en: "ortherPhone", vn: "ortherPhone", type: { self: "string", len: 50 }, allownull: false },
            { self: "Email", en: "Email", vn: "Email", type: { self: "string", len: 50 }, allownull: false },
            { self: "Address", en: "Address", vn: "Address", type: { self: "string", len: 50 }, allownull: false },
            { self: "Color", en: "Color", vn: "Color", type: { self: "string", len: 256 }, allownull: false },


            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "DepartmentID", refObjects: "Department", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 50, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //StaffWorkingTime(StaffID, Day, InTime, OutTime, Active)
    ,
{
    //20
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //StaffWorkingTime(StaffID, Day, InTime, OutTime, Active)
        objID: { self: "StaffWorkingTime", en: "StaffWorkingTime", vn: "StaffWorkingTime" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "StaffID", en: "StaffID", vn: "StaffID", type: { self: "bigint" }, allownull: true },
            { self: "Dayth", en: "Dayth", vn: "Dayth", type: { self: "bigint" }, allownull: true },

            { self: "InTime", en: "InTime", vn: "InTime", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "OutTime", en: "OutTime", vn: "OutTime", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "StaffID", refObjects: "Staff", refColum: "Id", refObjectShow: ["Name", "Phone"] }
            
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },
        LanguageShow:"en",
        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //Department
    ,
{
    //21
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Department(ID, Code, Name, Active)
        objID: { self: "Department", en: "Department", vn: "Department" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Code", en: "Code", vn: "Code", type: { self: "string", len: 256 }, allownull: false },
            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}

    //StaffServives(StaffID, ServicesID, ServiceName, Active)
    ,
{
    //22
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //StaffServives(StaffID, ServicesID, Active)
        objID: { self: "StaffServives", en: "StaffServives", vn: "StaffServives" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "StaffID", en: "StaffID", vn: "StaffID", type: { self: "bigint" }, allownull: true },
            { self: "ServicesID", en: "ServicesID", vn: "ServicesID", type: { self: "bigint" }, allownull: true },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "StaffID", refObjects: "Staff", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "ServicesID", refObjects: "Services", refColum: "Id", refObjectShow: ["Name", "Code"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    ////Categorys(ID, Code, Name, Active)
    ,
{
    //23
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Category(ID, Code, Name, Active)
        objID: { self: "Categorys", en: "Categorys", vn: "Categorys" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "Code", en: "Code", vn: "Code", type: { self: "string", len: 256 }, allownull: false },
            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //Services(BusinessID, ServicesID, CategoryID, Name, Price, Duration, Active, NumStaffDoIt)
    ,
{
    //24
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Services(BusinessID, ServicesID, CategoryID, Name, Price, Duration, Active, NumStaffDoIt)
        objID: { self: "Services", en: "Services", vn: "Services" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            { self: "CategoryID", en: "CategoryID", vn: "CategoryID", type: { self: "bigint" }, allownull: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },
            { self: "Price", en: "Price", vn: "Price", type: { self: "double", len: 256 }, allownull: false },
            { self: "Duration", en: "Duration", vn: "Duration", type: { self: "string", len: 256 }, allownull: false },
            { self: "NumStaffDoIt", en: "NumStaffDoIt", vn: "NumStaffDoIt", type: { self: "int", len: 256 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "CategoryID", refObjects: "Categorys", refColum: "Id", refObjectShow: ["Name", "Code"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 100, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //CustomerType(BusinessID, CustomerIDType, Name, Active)
    ,
{
    //25
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //CustomerType(BusinessID, CustomerIDType, Name, Active))
        objID: { self: "CustomerType", en: "CustomerType", vn: "CustomerType" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 20, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //Customers(BusinessID, CustID, Name, Phone, Email, Birtday, CustType, VisitCount, LastVisited, LifeTimePoint, 
    //CurrentPoint, SMSSent, EmailSend, Note, AnniversaryDay, AnniversaryDay2, AnniversaryDay3, RelationInfo, OcupationInfo)
    ,
{

    //26
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Customers(BusinessID, CustID, Name, Phone, Email, Birthday, CustType, VisitCount, LastVisited, LifeTimePoint, 
        //CurrentPoint, SMSSent, EmailSent, Note, AnniversaryDay, AnniversaryDay2, AnniversaryDay3, RelationInfo, OcupationInfo)
        objID: { self: "Customers", en: "Customers", vn: "Customers" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },

            { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },
            { self: "Phone", en: "Phone", vn: "Phone", type: { self: "string", len: 256 }, allownull: false },
            { self: "Email", en: "Email", vn: "Email", type: { self: "string", len: 256 }, allownull: false },
            { self: "Birthday", en: "Birthday", vn: "Birthday", type: { self: "string", len: 256 }, allownull: false },

            { self: "CustTypeID", en: "CustTypeID", vn: "CustTypeID", type: { self: "bigint", len: 256 }, allownull: false },

            { self: "VisitCount", en: "VisitCount", vn: "VisitCount", type: { self: "int", len: 256 }, allownull: false },
            { self: "LifeTimePoint", en: "LifeTimePoint", vn: "LifeTimePoint", type: { self: "string", len: 256 }, allownull: false },
            { self: "CurrentPoint", en: "CurrentPoint", vn: "CurrentPoint", type: { self: "string", len: 256 }, allownull: false },
            { self: "SMSSent", en: "SMSSent", vn: "SMSSent", type: { self: "string", len: 256 }, allownull: false },
            { self: "EmailSent", en: "EmailSent", vn: "EmailSent", type: { self: "string", len: 256 }, allownull: false },
            { self: "Note", en: "Note", vn: "Note", type: { self: "string", len: 256 }, allownull: false },

            //json object for array
            { self: "AnniversaryDay", en: "AnniversaryDay", vn: "AnniversaryDay", type: { self: "string", len: 2560 }, allownull: false },
            { self: "RelationInfo", en: "RelationInfo", vn: "RelationInfo", type: { self: "string", len: 2560 }, allownull: false },
            { self: "OcupationInfo", en: "OcupationInfo", vn: "OcupationInfo", type: { self: "string", len: 2560 }, allownull: false },

            { self: "LastVisited", en: "LastVisited", vn: "LastVisited", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "CustTypeID", refObjects: "CustomerType", refColum: "Id", refObjectShow: ["Id"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 200, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}

    //Orders(BusinessID, OrderID, OrderNumber, CustomerID, DateCheckIn, DateCheckOut, RoomInfo, DateDeliveryInfo, 
    //DaySendInfo, PersonReceiveInfo, StatusOrder)
    ,
{
    //27
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //Orders(BusinessID, OrderID, OrderNumber, CustomerID, DateCheckIn, DateCheckOut, RoomInfo, DateDeliveryInfo, 
        //DaySendInfo, PersonReceiveInfo, StatusOrder)
        objID: { self: "Orders", en: "Orders", vn: "Orders" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },
            //{ self: "OrderID", en: "OrderID", vn: "OrderID", type: { self: "bigint" }, allownull: true },
            { self: "CustomerID", en: "CustomerID", vn: "CustomerID", type: { self: "bigint" }, allownull: true },

            { self: "DateCheckIn", en: "DateCheckIn", vn: "DateCheckIn", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "DateCheckOut", en: "DateCheckOut", vn: "DateCheckOut", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "DateDeliveryInfo", en: "DateDeliveryInfo", vn: "DateDeliveryInfo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "DaySendInfo", en: "DaySendInfo", vn: "DaySendInfo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },

            { self: "RoomInfo", en: "RoomInfo", vn: "RoomInfo", type: { self: "string", len: 256 }, allownull: false },
            { self: "PersonReceiveInfo", en: "PersonReceiveInfo", vn: "PersonReceiveInfo", type: { self: "string", len: 2560 }, allownull: false },
            { self: "StatusOrder", en: "StatusOrder", vn: "StatusOrder", type: { self: "string", len: 256 }, allownull: false },


            //json object for array
            { self: "AnniversaryDay", en: "AnniversaryDay", vn: "AnniversaryDay", type: { self: "string", len: 2560 }, allownull: false },
            { self: "RelationInfo", en: "RelationInfo", vn: "RelationInfo", type: { self: "string", len: 2560 }, allownull: false },
            { self: "OcupationInfo", en: "OcupationInfo", vn: "OcupationInfo", type: { self: "string", len: 2560 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] },
            { colum: "CustomerID", refObjects: "Customers", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        isParsered: false,
        connectionObject: [],
        NumRowsTEST: { numRows: 50, isCreated: false, isScan: false },
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
}
    //OrderDetail(OrderID, ServicesID, Price, TIP, StaffID, NumServices, Discount, Coupon, Total, Note)
    ,
{
    //28
    object:
    {
        a: "API",
        name: "allAPI",
        subAPI: "CreateSelfObject",
        produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
        SQLtype: "SQLServer",//MySQL, Oracle, Access, 
        //OrderDetail(OrderID, ServicesID, Price, TIP, StaffID, NumServices, Discount, Coupon, Total, Note)
        objID: { self: "OrderDetail", en: "OrderDetail", vn: "OrderDetail" },
        columns: [
            { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

            { self: "ServicesID", en: "ServicesID", vn: "ServicesID", type: { self: "bigint" }, allownull: true },
            { self: "OrderID", en: "OrderID", vn: "OrderID", type: { self: "bigint" }, allownull: true },
            { self: "StaffID", en: "StaffID", vn: "StaffID", type: { self: "bigint" }, allownull: true },

            { self: "Price", en: "Price", vn: "Price", type: { self: "double", len: 256 }, allownull: false },
            { self: "TIP", en: "TIP", vn: "TIP", type: { self: "double", len: 256 }, allownull: false },
            { self: "NumServices", en: "NumServices", vn: "NumServices", type: { self: "int", len: 256 }, allownull: false },
            { self: "Discount", en: "Discount", vn: "Discount", type: { self: "double", len: 256 }, allownull: false },
            { self: "Total", en: "Total", vn: "Total", type: { self: "double", len: 256 }, allownull: false },

            { self: "Coupon", en: "Coupon", vn: "Coupon", type: { self: "string", len: 256 }, allownull: false },
            { self: "Note", en: "Note", vn: "Note", type: { self: "string", len: 256 }, allownull: false },

            { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

            { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
            { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
            { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
        ],
        refObjects: [
            { colum: "ServicesID", refObjects: "Services", refColum: "Id", refObjectShow: ["Name", "Code"] },
            { colum: "OrderID", refObjects: "Orders", refColum: "Id", refObjectShow: ["Id"] },
            { colum: "StaffID", refObjects: "Staff", refColum: "Id", refObjectShow: ["Name", "Phone"] }
        ],
        connectionObject: [],
        isParsered: false,
        NumRowsTEST:{ numRows: 300, isCreated: false, isScan: false},
        UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
        UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

        ModelDb: "AppCoreDb",
        jSonFormat: "1"
    },
    APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
    }
    //Promotions(ID, BusinessID, NumOrderd, Expense, Income, Name, DateSent, DateStop, DeliverEmail, DeliverSMS, TotalUserUsePromotionSMS, TotalUserUsePromotionEmail)
    ,
    {
        //29
        object:
        {
            a: "API",
            name: "allAPI",
            subAPI: "CreateSelfObject",
            produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
            SQLtype: "SQLServer",//MySQL, Oracle, Access, 
            //Promotion(ID, BusinessID, NumOrderd, Expense, Income, Name, DateSent, DateStop, DeliverEmail, DeliverSMS, TotalUserUsePromotionSMS, TotalUserUsePromotionEmail)
            objID: { self: "Promotions", en: "Promotions", vn: "Promotions" },
            columns: [
                { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

                { self: "BusinessID", en: "BusinessID", vn: "BusinessID", type: { self: "bigint" }, allownull: true },

                { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },

                { self: "Expense", en: "Expense", vn: "Expense", type: { self: "double", len: 256 }, allownull: false },
                { self: "Income", en: "Income", vn: "Income", type: { self: "double", len: 256 }, allownull: false },
                { self: "NumOrderd", en: "NumOrderd", vn: "NumOrderd", type: { self: "int", len: 256 }, allownull: false },

                { self: "DateSent", en: "DateSent", vn: "DateSent", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "DateStop", en: "DateStop", vn: "DateStop", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },

                { self: "DeliverEmail", en: "DeliverEmail", vn: "DeliverEmail", type: { self: "double", len: 256 }, allownull: false },
                { self: "DeliverSMS", en: "DeliverSMS", vn: "DeliverSMS", type: { self: "double", len: 256 }, allownull: false },

                { self: "TotalUserUsePromotionSMS", en: "TotalUserUsePromotionSMS", vn: "TotalUserUsePromotionSMS", type: { self: "double", len: 256 }, allownull: false },
                { self: "TotalUserUsePromotionEmail", en: "TotalUserUsePromotionEmail", vn: "TotalUserUsePromotionEmail", type: { self: "double", len: 256 }, allownull: false },

                { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

                { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
                { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
            ],
            refObjects: [
                { colum: "BusinessID", refObjects: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }
            ],
            isParsered: false,
            connectionObject: [],
            NumRowsTEST: { numRows: 10, isCreated: false, isScan: false},
            UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
            UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

            ModelDb: "AppCoreDb",
            jSonFormat: "1"
        },
        APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
    }
    //GroupRights(ID, Code, Name, Path, ParentGroupID, Description)
    ,
    {
        //30
        object:
        {
            a: "API",
            name: "allAPI",
            subAPI: "CreateSelfObject",
            produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
            SQLtype: "SQLServer",//MySQL, Oracle, Access, 
            //GroupRights(ID, Code, Name, Path, ParentGroupID, Description)
            objID: { self: "GroupRights", en: "GroupRights", vn: "GroupRights" },
            columns: [
                { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

                { self: "ParentGroupID", en: "ParentGroupID", vn: "ParentGroupID", type: { self: "bigint" }, allownull: true },

                { self: "Code", en: "Code", vn: "Code", type: { self: "string", len: 256 }, allownull: false },
                { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },
                { self: "Path", en: "Path", vn: "Path", type: { self: "string", len: 256 }, allownull: false },
                { self: "Description", en: "Description", vn: "Description", type: { self: "string", len: 4096 }, allownull: false },


                { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

                { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
                { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
            ],
            refObjects: [],
            isParsered: false,
            connectionObject: [],
            NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
            UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
            UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

            ModelDb: "AppCoreDb",
            jSonFormat: "1"
        },
        APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
    }

    //GroupRightDetail(ID, GroupID, subGroup, Path, ParentGroupID, Description)
    ,
    {
        //31
        object:
        {
            a: "API",
            name: "allAPI",
            subAPI: "CreateSelfObject",
            produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
            SQLtype: "SQLServer",//MySQL, Oracle, Access, 
            //GroupRightDetail(ID, GroupID, subGroup, Path, ParentGroupID, Description)
            objID: { self: "GroupRightDetail", en: "GroupRightDetail", vn: "GroupRightDetail" },
            columns: [
                { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

                { self: "GroupID", en: "GroupID", vn: "GroupID", type: { self: "bigint" }, allownull: true },
                { self: "ParentGroupID", en: "ParentGroupID", vn: "ParentGroupID", type: { self: "bigint" }, allownull: true },

                { self: "subGroup", en: "subGroup", vn: "subGroup", type: { self: "string", len: 256 }, allownull: false },
                { self: "Name", en: "Name", vn: "Name", type: { self: "string", len: 256 }, allownull: false },
                { self: "Path", en: "Path", vn: "Path", type: { self: "string", len: 256 }, allownull: false },
                { self: "Description", en: "Description", vn: "Description", type: { self: "string", len: 4096 }, allownull: false },


                { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

                { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
                { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
            ],
            refObjects: [],
            isParsered: false,
            connectionObject: [],
            NumRowsTEST: { numRows: 10, isCreated: false, isScan: false },
            UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
            UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

            ModelDb: "AppCoreDb",
            jSonFormat: "1"
        },
        APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
    }
    //Roles(ID, UserID, GroupRightID, Permission)// lưu json vào Permisstion
    ,
    {
        //32
        object:
        {
            a: "API",
            name: "allAPI",
            subAPI: "CreateSelfObject",
            produce: [{ lang: "NET" }, { lang: "Flutter" }, { lang: "Golang" }, { lang: "ReactNative" }],
            SQLtype: "SQLServer",//MySQL, Oracle, Access, 
            //Roles(ID, UserID, GroupRightID, Permission)// lưu json vào Permisstion
            objID: { self: "Roles", en: "Roles", vn: "Roles" },
            columns: [
                { self: "Id", en: "Identify", vn: "Mã ID", type: { self: "bigint", len: 32 }, allownull: false, identify: true, auto: true, primarykey: true },

                { self: "UserID", en: "UserID", vn: "UserID", type: { self: "bigint" }, allownull: true },
                { self: "GroupRightID", en: "GroupRightID", vn: "GroupRightID", type: { self: "bigint" }, allownull: true },

                { self: "Permission", en: "Permission", vn: "Permission", type: { self: "string", len: 4096 }, allownull: false },
                { self: "SubPermission", en: "SubPermission", vn: "SubPermission", type: { self: "string", len: 4096 }, allownull: false },

                { self: "isActive", en: "isActive", vn: "isActive", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },

                { self: "isValid", en: "isValid", vn: "Vòng đời", type: { self: "int", len: 32 }, allownull: false, defaultvalue: "DEFAULT 0" },
                { self: "isCreatedDate", en: "isCreateDated", vn: "Ngày tạo", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "isUpdatedDate", en: "isUpdateDated", vn: "Ngày cập nhật cuối", type: { self: "datetime" }, allownull: false, defaultvalue: "DEFAULT GETDATE()" },
                { self: "isPartFull", en: "isPartFull", vn: "Thông tin", type: { self: "string", len: 1028 }, allownull: false, defaultvalue: "DEFAULT ''" },
            ],
            refObjects: [
                { colum: "UserID", refObjects: "Users", refColum: "Id", refObjectShow: ["Email", "Phone"] },
                { colum: "GroupRightID", refObjects: "GroupRights", refColum: "Id", refObjectShow: ["Name", "Code"] }
            ],
            connectionObject: [],
            isParsered: false,
            NumRowsTEST: { numRows: 100, isCreated: false, isScan: false},
            UI: [{ form: true, grid: true }, { form: true, list: true }, { form: false, list: true }, { form: false, grid: true }, { form: true }],
            UILanguage: { javascript: true, android: true, netform: true, IOS: true, flutter: true, reactnative: true, telerik: true, xmarin: true, ruby: true },

            ModelDb: "AppCoreDb",
            jSonFormat: "1"
        },
        APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
    }
];
