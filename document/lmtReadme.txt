1./ Bạn thay đổi từ GetDataTable => Sang GetDataSet điều này dễ dàng và tránh các việc như sau:
	1.1 Bạn đưa câu lệnh vào nhiều lệnh cùng lúc và bạn kết nối với db 1 lần và flush dữ liệu 1 lần 
	1.2 Bạn ứng dụng chúng để viết các thủ tục hoặc các servives mà bạn muốn lấy về 1 lần tất cả dữ liệu rồi sau đó bạn tính toán chúng
	1.3 Bạn ứng dụng sau khi Tính toán xong bạn tiến hành Lưu trữ chúng vào nhiều bảng cùng lúc và đôi khi bạn cần trả về kết quà cho tiến trình này
	1.4 Bạn xem hàm CreateAbsents trong PE file
2./ Đổi tên zgcLibCore => zgcLibCore
3./ Đổi tên zgc0HelperSQLSecurity =>zgcHelper
4./ Đổi tên zgcSpaceAPI.Core
5./ Thêm bảng UserDevAuth trên gcDatabase không để bảng Table này bên Database Ứng dụng; Dùng để kiểm tra quyền

   Lưu Minh Tùng thằng này ok kkk

6./
Cài đặt:
Bạn cài NuGet:
ServiceStack
ServiceStack.Text
SqlClient
system.Configuration
Bạn hiện thực lại HttpContext

Để quá trình Biên dịch và thay đổi được thuận tiện và Bạn không tốn nhiều thời gian 
Mở ISS => Trỏ path đến thư mục Release của Webcore
Trước khi bạn publish 1 phiên bản mới bạn stop Web của ISS - WebCore sau đó bạn Publish và Bạn Start lại

7.
Để chạy được Project bạn phải tạo thủ tục trong SQL nhằm đọc hàng theo trang việc này bạn thực hiện bằng file gcz_GetRowNum;

8./ Bạn phải chú ý chuỗi truyển vào cho URL của si và mr là số nguyên nhé không phải là chuỗi

9./ QUAN trọng: Bạn phải thay chuỗi [FromBody] ở phương thức Post nếu không nó cứ báo lổi nếu bạn dùng ajax() call thông tin bất kỳ.
Mất 1 ngày để debug điều này. Tiếp theo là bạn làm sao lấy được thông tin từ Request PayLoad để chuyển đổi nội dung data truyền vào;
Vì hạn chế mặc định param trên URL 256 ký tự khi truyền sẽ lổi.

10./ Cấu trúc bạn cần truyền vào Request là :
var objRequest = {
            AjaxObj:
            {
                a: "fGetgcGobal_QA_Table", // Tên nội dung Đối tượng cần lấy thông tin
                c: { "Id": "$x>9 and $x<170"}, // Bạn thêm điều kiện lấy vào đây
                _f: "TOP 10 Id,Code,Name", // Bạn chỉ định các field cần lấy, không hệ thống sẽ trả về all field
                _gb: " order by Id desc", // Bạn có thể đặt mệnh đề group by tại đây
                d: " ", // Data tức là dữ liệu bạn cần truyền vào lúc Insert, Update, Delete, vv...
                type: "p",  // Loại thủ tục P: là thủ tục
                cl: "*", //cl: là 
                si: 1, // si là index bạn cần lấy dữ liệu trong toàn bộ dữ liệu
                mr: 25, // mr: là số dòng bạn cần lấy number of rows trong toàn bộ dữ liệu
                ModelDb: "CanteenDb", // ModelDb mà bạn cần kết nối
                jSonFormat: "1" // Bạn cần trả về kiểu Json, có 1 kiểu là truyền dữ liệu trực tiếp chúng không truyền Header của đối tượng.
            },
            APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
        };
Và Quan trọng là bạn có thể truyền vào nhiều đối tượng request như thế này bằng cú pháp:
var AjaxObj1 =   {
                a: "InsertgcGobal_QA_Table",
                d: { "Code": "NEW", "Name": "_TUNG", "FloorId": 3 },
                type: "p",
                ModelDb: "CanteenDb",
                jSonFormat: "1"
        };
        var AjaxObj2 = {
                a: "fGetgcGobal_QA_Table",
                c: { "Id": "$x>9 and $x<170" },
                _f: "TOP 10 Id,Code,Name",
                _gb: " order by Id desc",
                d: " ",
                type: "p",
                cl: "*",
                si: 1,
                mr: 25,
                ModelDb: "CanteenDb",
                jSonFormat: "1"
            };
        var objTmp = [AjaxObj1, AjaxObj2]
        var objcallmultiRequest = { APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k", AjaxObj: objTmp };
        ====> Như bạn thấy việc gọi này chỉ phục vụ trên 1 db duy nhất cái mà Chúng ta cần làm hơn là chúng đọc nhiều database và nhiều không 
        gian dữ liệu hơn từ nhiều server hơn.
        ====> Việc lưu trữ các bảng dữ liệu sử dụng thấp có thể được lưu vào Redis để tăng tốc dữ liệu đọc hơn. (Chưa hiện thực hóa chúng)
        ====> Các hàm System hoặc các API khác phục vụ cho công việc cụ thể vẫn chưa sẳn sàng.
11./ Yeap bây giờ chúng ta xây dựng tập lệnh cho gọi nhiều db và nhiều không gian khác
    11.1 Chúng ta thêm tham số CrossData: true
    11.2 Các Request được đóng vào 1 danh sách có API cho từng request và ModelDb riêng

    var Request1 = {
        AjaxObj:
        {
            a: "fGetgcGobal_QA_Table",
            c: { "Id": "$x>9 and $x<170" },
            _f: "TOP 10 Id,Code,Name",
            _gb: " order by Id desc",
            d: " ",
            type: "p",
            cl: "*",
            si: 1,
            mr: 25,
            ModelDb: "CanteenDb",
            jSonFormat: "1"
        },
        APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
    };
    var Request2 = {
        AjaxObj:
        {
            a: "pGetgcGobal_STOCK_gcProductList",
            c: { "Id": "$x>9 and $x<170" },
            _gb: " order by Id desc",
            d: "",
            type: "p",
            cl: "*",
            si: 1,
            mr: 25,
            ModelDb: "CanteenDb",
            jSonFormat: "1"
        },
        APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
    };
    var objTmp = [Request1, Request2]
    var objcallmultiRequest = { CrossData: true, MultiRequest: objTmp };

12./ NHƯ BẠN THẤY ĐẤY CUỐI CÙNG THÌ CŨNG PHẢI GỌI VÀ THỰC THI 1 CÂU SQL ĐỂ CẬP NHẬT DỮ LIỆU HOẶC BẰNG 1 TẬP HÀM NÀO ĐÓ;
Bạn build sẳn mọi thứ để rồi chúng tại bị bó buộc vào đó;
Các chính là bạn phải mở đến mức tối đa có thể: 
    12.1/ Bạn thực thi 1 câu lệnh SQL để lấy dữ liệu và trả vể chúng là 1 đối tượng JSON
    12.2/ Các câu lệnh tường minh đâu có gì đáng sợ
    12.3/ Bạn có phiên đăng nhập hoặc xác thực ban đầu để bạn có quyền làm điều đó
    12.4/ Những cái bạn cần xử lý là: INSERT xong => get dữ liệu vừa insert về
    12.5/ Bạn cập Dữ liệu UPDATE nếu chúng đã tồn tại => Nếu chúng chưa tồn tại bạn thêm mới chúng
    12.6/ Bạn lấy dữ liệu theo số lượng  ( theo trang và phân trang page index)
    12.7/ Bạn truyền  tường minh SQL hoặc bạn truyền dữ liệu để xử lý theo 12.5 ví dụ bạn khai báo d:{Id:1,Name:"test"} bây giờ bạn muốn 
    xử lý và không truyền tường minh như sau: 
        1. case 1: {AjaxObj:{a:"SQLInsert", d:{Id:1,Name:"test"},table:"gcGobal_STOCK_gcProductList", ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Insert INTO gcGobal_STOCK_gcProductList ('Id','Name') VALUES (1,'test')
        ===> Nếu INSERT thấy bại bạn có cập nhật lại Id này?
        ===> Kết quả trả vể là OK và Identify tự tăng nếu có.
        2. case 2: {AjaxObj:{a:"SQLInsert", d:{Id:1,Name:"test"},c:{sefl:true, Code:"HUK"},table:"gcGobal_STOCK_gcProductList", ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Insert INTO gcGobal_STOCK_gcProductList ('Id','Name') VALUES (1,'test')
        ===> Nếu INSERT thấy bại bạn có cập nhật lại Id này?
        ===> Kết quả trả vể là OK và Identify tự tăng nếu có.
        ===> Câu này là Insert với điều kiện  c: biến self chỉ ra chúng cùng trên table, 
        3. case 2: {AjaxObj:{a:"SQLInsert", d:{Id:1,Name:"test"},c:{sefl:false, table:"gcGobal_STOCK_gcProduct", c:{ProductId:"$x>9 and $x<170"}},table:"gcGobal_STOCK_gcProductList", ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Insert INTO gcGobal_STOCK_gcProductList ('Id','Name') VALUES (1,'test') 
                                  WHERE ProductId in (Select ProductId from gcGobal_STOCK_gcProduct where ProductId:"$x>9 and $x<170")
        ===> Nếu INSERT thấy bại bạn có cập nhật lại Id này?
        ===> Kết quả trả vể là OK và Identify tự tăng nếu có.
        ===> Câu này là Insert với điều kiện  c: biến self fase, chỉ ra chúng khác table

        Tương tự cho DELETE, UPDATE
        4./ Câu thuần SQL: {AjaxObj:{a:"SQL", sql:"Select * from gcGobal_STOCK_gcProductList", ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Thực thi câu Select * from gcGobal_STOCK_gcProductList;

        5./ Câu thuần SQL: {AjaxObj:{a:"SQL", sql:"select * from gcGobal_STOCK_gcProductList",c:{ProductId:"$x>9 and $x<170"}, ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Thực thi câu Select * from gcGobal_STOCK_gcProductList where ProductId>9 and ProductId<170;

        6./Câu thuần SQL: {AjaxObj:{a:"SQL", table:"gcGobal_STOCK_gcProductList",c:{ProductId:"$x>9 and $x<170"}, ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Thực thi câu Select * from gcGobal_STOCK_gcProductList where ProductId>9 and ProductId<170;

        7./Câu thuần SQL: {AjaxObj:{a:"SQL", table:"gcGobal_STOCK_gcProductList",_f:{TOP Id,Code,Name},c:{ProductId:"$x>9 and $x<170"}, ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Thực thi câu Select TOP Id,Code,Name from gcGobal_STOCK_gcProductList where ProductId>9 and ProductId<170;

        8./Câu thuần SQL: {AjaxObj:{a:"SQL", table:"gcGobal_STOCK_gcProductList",_f:"TOP Id,Code,Name",_gb:" Id by Desc",c:{ProductId:"$x>9 and $x<170"}, ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Thực thi câu Select TOP Id,Code,Name from gcGobal_STOCK_gcProductList where ProductId>9 and ProductId<170;

        9./Câu thuần SQL: {AjaxObj:{a:"SQL",si:1,mr:25 table:"gcGobal_STOCK_gcProductList",_f:"TOP Id,Code,Name",_gb:" Id by Desc",c:{ProductId:"$x>9 and $x<170"}, ModelDb:"CanteenDb"}, APIKey:""}
        ===> câu này được hiểu là Thực thi câu Select TOP Id,Code,Name from gcGobal_STOCK_gcProductList where ProductId>9 and ProductId<170;
        ====> Đọc 1 trang 25 dòng
        ===> Trả về tổng số dòng, số trang tối đa trên 25 dòng và 25 dòng dữ liệu.

        10./ Trong trường hợp bạn muốn lấy dữ liệu từ các view để phong phú hơn bạn khai báo thêm "exV":"View_STOCK_List" lúc này bảng dữ liệu 
        sẽ được thay bằng view này.

Bạn cũng cần load tất cả không gian view và bạn build tự động các view chuẩn: Chỉ buid cho các đối tượng Table có khóa ngoại còn không
có khóa ngoại ko build làm gì chúng làm bạn thêm rối.
như vậy bạn cũng không cần load không gian cột làm gì; Bạn chỉ cần load không gian Bảng dữ liệu
Các bảng dữ liệu nào được lưu trên Redis bạn chỉ định và không gọi về SQL mà lấy chúng từ Redis

Biến kiểm tra dữ liệu lưu lại thành 1 biến cho gọn bAlive kiểu int, nếu bAlive==0 dữ liệu còn sống active bAlive>0
dữ liệu đã bị xóa bạn có thể xử lý như sau: bUserDeleted = 1, bUserAdmin = 2, bUserDev = 4 cộng dồn để biết union của biến này
tức bAlive = bAlive + ...

Phân biệt Rõ như sau:

1. SQL
2. SYS là các câu lệnh thực thi 1 hàm nào đó bạn gọi từ Server bạn có thể query Hàm đó có hay không? bạn truyền tham số vào cho chúng
    Bạn có thê gọi cùng lúc nhiều hàm hoặc nhiều thủ tục cùng lúc.
    Bạn suy nghĩ thêm kết quả đầu ra của hàm này làm đầu vào của hàm khác Bạn có định nghĩa không?
    Nếu có bạn truyền kết quả đó như thế nào

    {AjaxObj:{a:"SYS", p:"_loadSys",c:{Id:1,Name:"test"},Transfer:1, jSonFormat:1, ModelDb:"CanteenDb"}, APIKey:""}
    ===> Lệnh này thực thi thủ tục p: _loadSys với tham số truyển  vào là c;
    ===> Lệnh này có transfer dữ liệu nhưng chưa biết xử lý sao

Quy định rõ như sau:
KERNEL gồm 3 thành tố này:
1. Tất cả Phân thành 2 API 1 callback phục vụ cho các SQL, api phục vụ cho các SYS: lưu chúng vào file SQL
2. Các SYS được phân thành 2 dạng Utility viết nhiều năm nhiều tháng + vào: lưu chúng vào file Sys
3. Các p: là các function xử lý theo dự án lưu chúng vào file P

Bạn thấy được chúng thiếu trong miền không gian SQL các lệnh khác như: Create, Drop, Alter
Bây giờ sẽ bổ sung chúng vào nhé


9999999./
Mở rộng hơn : Đi từ đối tượng Type Text JSON sau khi bạn Type => Bạn sinh ra chúng, bạn sinh ra code theo bạn muốn bạn đặt ngược lại vấn đề:
JSON Object: Khai báo ( declare ) => Sinh Database () ==> Sinh Object cho backend, Function cho Backend, ==> Sinh Object cho UI
==> Sinh Object cho Mobile ===> Sinh Object 
====> Tất cả điều này bạn Sinh vào các Không gian các nhau như : C#, Java, Golang, Flutter, Reactnative, html, jquery
====> Vấn đề chính khi bạn sinh ra Đối tượng Chúng phải có sự liên hệ và Có mối tương quan với nhau: Bạn phải truyền thông tin giữa chúng
Chúng mang năng lượng như thế nào? Bạn control chúng như thế nào?

var sqlRequest = {
        AjaxObj:
        {
            action: "SYS",
            produce: [{lang:"NET"},{lang:"Flutter"},{lang:"Golang"},{lang:"ReactNative"}]
            name: {self: "StockProduct", en:"Stock Product", vn: "Sản phẩm (KHO)"}
            column: [{self:"Id", en:"Identify", vn: "Mã ID", type:{self:int,len:32},required:true, identify:true, auto:true},
                    {self:"Code", en:"Product Code", vn: "Mã sản phẩm", type:{self:string,len:256}, allownull:false},
                    {self:"Name", en:"Product Name", vn: "Tên sản phẩm", type:{self:string,len:1024}, allownull:false},
                    {self:"Price", en:"Product Price", vn: "Giá sản phẩm", type:{self:double}, allownull:false},
                    {self:"FactoryID", en:"Product Factory", vn: "Nhà sản xuất", type:{self:int}, allownull:true},
                    {self:"NationalID", en:"Product National", vn: "Quốc gia sản xuất", type:{self:int}, allownull:true},
                    {self:"Description", en:"Description", vn: "Mô tả", type:{self:string,len:2048}, allownull:true},
                    {self:"isAlive", en:"isAlive", vn: "Vòng đời", type:{self:int,len:32}, allownull:false, defaultvalue:0},
                    {self:"isCreateDated", en:"isCreateDated", vn: "Ngày tạo", type:{self:datetime}, allownull:false, defaultvalue:"currenttime"},
                    {self:"isUpdateDated", en:"isUpdateDated", vn: "Ngày cập nhật cuối", type:{self:datetime}, allownull:false, defaultvalue:"currenttime"},
                    ]
            refObject: [{colum:"FactoryID", refObject:"Factory", refColum:"Id"},{colum:"NationalID", refObject:"National", refColum:"Id"}],
            connection: [{connectOBj:"Stock"},{connectOBj:"Company"}],
            UI:[{form:true,grid:true}, {form:true,list:true}, {form:false,list:true}, {form:false,grid:true}, {form:true}]
            UILanguage: {javascript:true, android: true, netform:true, IOS:true, flutter:true, reactnative:true, telerik:true, xmarin:true, ruby:true}
            APIFile: "StockProduct.txt"
            ModelDb: "CanteenDb",
            jSonFormat: "1"
        },
        APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
    };
    ====> Chỉ sinh các đối tượng có mối tương quan vào cùng 1 file js, cs không sinh toàn bộ vào 1 file dễ tăng dung lượng và khó xử lý.
    ====> Tạo luôn database nếu chúng chưa tồn tại;
    ====> Các API sẽ tạo và sinh lại; Khi bạn phân tán ra làm cho nhiều người bạn thu được nhiều file và copy file thực tế chạy vào 
    file "StockProduct.txt" Khi build lại project chúng sẽ tạo các hàm này vào Lớp bạn cần gọi. Ban đầu lớp API là rỗng => Các hàm sẽ đưa chúng vào!
13./ Trên máy chủ hay máy Khách bạn phải cài:
https://dotnet.microsoft.com/download/dotnet/thank-you/runtime-aspnetcore-5.0.7-windows-hosting-bundle-installer
không chúng sẽ không nhận diện. Nếu bạn dùng 3.1 thì phải cài 3.1
Nhớ khởi động máy tính nhé, máy chủ nhé:

14./ Quan trọng : Đặt nghi tình : :Trước đó họ làm việc đó như thế nào? Việc đó làm thế nào là hợp lý? 
Trước khi hình hài này chúng là cái gì?

15./ *@
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/flatpickr"></script>


16.. Đọc kỹ về CORS

https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-5.0

17. Tai sao la phai co: defer xem ky nhe:
<script type="text/javascript" src="~/js/DataTables/datatables.js" defer></script>

18. Class và Instance là RỖng không => Chúng nhận thể hiên và dữ liệu thì Chúng là chúng: [0-1];
Nguồn phát server là vô cùng tận khi EMPTY
Nguồn nhận cũng trốn rỗng: 

24/06
18. Như bạn thấy đấy Chúng hết sức tào tao Phiên bản này nói lên Client UI đã lấy thông tin như sau: 
1./Load hết data f="*" => TOP 15 *
2./ Tất cả các control cho form chúng lấy y vậy và lấy đến tận 6 lần cho chúng hỏi sau callback hoài ko xong
====> Làm sao để nén chúng vào và gọi 1 lần duy nhất đây???=> dễ thôi cấu hình UI

==> Điều quan trọng là đối với các FORM nhập liệu chuyên nghiệp và liên tục bạn có thể load 1 lần dữ liệu các Ref Tables để tăng tốc và
hạn chế tối đa load lại chúng => Cho dù bạn refesh lại dữ liệu => Để làm điều này bạn phải lưu chúng khi còn đăng nhập ==> OPEN SPACE
===> Khởi động khi chương trình mới bắt đầu để các trang trong có bị reload cũng không load lại chúng.
Như các bản Sản Phẩm/ Bảng Đơn vị tính/ Dịch vụ/ Nhân viên/ Nhà cung cấp/ Kho hàng/ Chi nhánh
===> Để hạn chế bị Cache và tránh đăng nhập bạn có thể Reload lại thông tin này Bên trong: RELOAD Space


19/./

Thêm 1 đối tượng __AppSetting

//cấu hình form và menu, khung search dữ liệu và thanh NavBar, Setting của ứng dụng, 
        //Phần cấu hình cho phép FORM nhập liệu có hoặc không? Quyền truy cập dữ liệu: xem, xóa, sửa
        _selfBuildSetting:{form: true, grid:true, update: true, new: true, detailMultiTab:true, detailOnlyMainHidden:true },
        //Bạn muốn tự build form nhập theo ý mình từ file javascript định nghĩa hàm BuildSelfForm rồi truyền thông số vào tự render
        _selfRender: {self:true,fucBuild:"BuildSelfForm"},
        //Phần menu là Tổng menu cho 1 account là 1 nhóm quyền được định nghĩa trước.
        _selfMenu: { self: true, refAppMenu: {divHookId:"divHook", appMenu:true, selfMenu:[{item:"", text:'', url:''},{item:"", text:'', url:''}] } },
        //Cho phép hook Nav bar vào phần top của Trang
        _selfNavBar: { self: true, refAppNavBar: { divHookId: "divHook", appNavBar: true, selfNavBar: [{ item: "", text: '', url: '' }, { item: "", text: '', url: '' }] } },
        //Cho phép cấu hình như: Màu sắc cột dữ liệu trên lưới, tùy chỉnh màu của form và các cái => cho phép lưu về server và bạn save lại
        //Có 1 nút Setting cho form để bạn add danh sách chức năng vào đó, cho phép chọn form tìm kiếm tùy định dạng
        //Phần này cho phép định nghĩa ngôn ngữ sử dụng luôn cho phép cài đặt
        _selfSetting: { self: true, language:'vn', refAppSetting: { divHookId: "divHook", appSetting: true, selfSetting: [{ item: "", text: '', url: '' }, { item: "", text: '', url: '' }] } },
        //MỖi form có 1 hoặc nhiều form tìm kiếm tùy theo bạn cấu hình và chọn từ Setting: form đơn giản và form phức tạp, form chuyên dụn
        _selfSearchForm: { self: true, refAppSearch: { divHookId: "divHook", appSearch: true, selfSearchForm: [{ item: "", text: '', url: '' }, { item: "", text: '', url: '' }] } },
        //end config

20./DataTable
chú ý: , css:'cssBoldColum', color:'blue' : dùng để style đơn giản

21./ Mỗi form Main có 1 lối tắt tìm kiếm và tạo tắt như: Form HỢp đồng => Tạo Khách hàng => đưa nó vào Ô search
Form PHiếu Thu => Khách hàng ; Phiếu Chi nhập Nhân viên/ Nhà cung cấp / 1 người bất kỳ
Phiếu thu tiền mặt: NCC, Nhân viên, 
Phiếu Order => Khách hàng
=> Có 1 dạng khác là Nhập Khách hàng và Khách hàng Anomynos:Tức bạn không cần lưu thông tin khách hàng như Siêu thị
=> Tạo Phiếu Thu tự động và Chỉ có nhập chi tiết cho Phiếu này: Bạn hiển thị thông tin Cơ bản của Phiếu thu như sau:

//Tạo biến 
shortcurtObjetShow:{show:true,formLoadingName:{text:"Đang nhập phiếu:{0} Khách hàng:{Name} - Phone:{}",name1:"Name",name1:"Phone"}, table:"gcGobal_Customer", column:{Code:"", Name:"", Phone:"", Adress:"", Email:""}},
//===> Bạn add chúng vào Phần đầu của Chi tiết phiếu Nhập để người dùng dễ dàng nhận ra như:

//Đang nhập phiếu: PT000001827 : Khách hàng: Nguyễn Văn A - Phone: 0918212127
//
shortcurtForm: {table:"gcGobal_Customer", column:{Code:"", Name:"", Phone:"", Adress:"", Email:""}},

22./ Giờ bạn lưu về server thông tin bạn sẽ cấu hình nào:
Bạn nên nhớ sau này bạn thêm 1 field dữ liệu quá đơn giản là bạn chỉ cần vào Database thêm field
==> Sau đó bạn mở config lên bạn copy thêm 1 dòng giống vậy và bạn thêm chúng vào bằng dấu cách là dấu ",{}"
==> Sau đó trình parser sẽ thay đổi và bạn phải insert chúng vào _listfield nếu bạn parser được 2 phần tử.
==> dau đó bạn save lại
==> Bạn muốn hiển thị  chúng thì config vào _editform vị trí bạn mong muốn
===> Bạn suy nghĩ thêm là để thêm hẳn 1 thực thể thì làm sao? nhé rất dễ ==> Add chúng vào và gọi lưu còn db thì bạn cứ tạo chúng
sau đó add vào list menu là xong. Tự động hơn thế nữa là Khai báo đối tượng như trên sau đó gọi về server tạo luôn db và các cái
==> ;thế là hoàn tất

22./ Bạn thấy đó mỗi Đối tượng: Table bạn phải tạo rạ nhiều thể hiện
cho nhiều loại người khác nhau: như: Admin, Accounting, Operation, Nhóm hàng, Seller, Security, Stocker
Và nữa ứng với 1 loại người họ muốn xem trên 1 đối tượng này có nhiều thể hiện khác nhau nữa
===> Bạn giải quyết được điều này coi như là xong việc vì nó là chương trình đó
Qua các Góc nhìn khác nhau thì đối tượng thấy khác nhau thể hiện khác nhau
Mổi liên  kết với các object khác về dữ liệu cũng khác nhau
Bạn cần định nghim nhóm Quyền
Admin: {
    obj: "gcGobal_INCOM_Receipt", instanceName:"Trả công nợ", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "gcGobal_INCOM_Receipt", instanceName:"Nhập phiếu", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "gcGobal_INCOM_Receipt", instanceName:"Tra soát phiếu", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "gcGobal_INCOM_Receipt", instanceName:"Quản Công nợ", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "gcGobal_INCOM_Receipt", instanceName:"Nhắc nợ", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "gcGobal_INCOM_Receipt", instanceName:"Phân tích dữ liệu (1 chi nhánh)", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "gcGobal_INCOM_Receipt", instanceName:"Phân tích dữ liệu (công ty)", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    
    //Bộ phận thu hồi nợ
    obj: "gcGobal_INCOM_Receipt", instanceName:"Công nợ", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    
    //Bạn thấy đó 1 đối tượng nhưng chúng phải biến đổi được
    obj: "Order", instanceName:"Đơn hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    
    //Trong trường hợp các đối tác không thanh khoản ngay mà trả nợ theo định kỳ
    obj: "Order", instanceName:"Công nợ đơn hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Sản xuất Đơn hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Nhóm hàng đi", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Nhận hàng đến", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Phát hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Giao hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Phát đơn hàng Lổi", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Phân tích đơn hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Socker Nhận hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Socker Phát hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Chăm sóc Khách hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Đơn hàng quá hạn", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Hủy đơn hàng vô thừa nhận", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Bồi thường đơn hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Xử lý khiếu nại đơn hàng", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    
    

    //
    obj: "Order", instanceName:"Đơn hàng Nhà vận chuyển Trung gian", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Đơn hàng Phát hàng Trung gian", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Công nợ Nhà vận chuyển Trung gian", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Công nợ Đơn vị Phát hàng Trung gian", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Customer View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Seller View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Shipper View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Supplier View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Operator View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Customer Service View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Driver View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Employer View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
    obj: "Order", instanceName:"Acount View", instanceOjectJS:"ojbExent", instanceFormEdit:{}, instanceGrid:{}, instanceTables:{}, instanceTableref:{}
}


23./ Fixed select2
.select2-container--krajee .select2-dropdown--below {
            /*width: 230px !important;*/
            min-width: 113px !important;
            max-width: 336px !important;
            margin-left: -70px !important;
        }
        .smalldrop {
            min-width: 113px !important;
            max-width: 336px !important;
        }
        .select2({ dropdownCssClass: "smalldrop", width: "auto" });'

 24./ fix format combo merge style
 "mergeCss":[{"index":2,"type":"money","css":"mergeCss"}]

 25./ Về mặt Right chỉ nên để Link và name,/path js ==> Chúng ta sẽ đưa các instance vào các Path này để thể hiện.
     25.1./ Add tự động vào head import file js vào 
     25.2./ Mỗi instance bổ sung cấu hình MultiTab và các taB phụ có thể hữu ích để nhập 1 số dữ liệu cho chính xác
     25.3./ Các report đơn giản có thể xài jtable không class
     25.4./ Các report phức tạp Build chúng bằng JS với tập data đã cho. Ở đây phần Thân sẽ giữ nguyên. Các hiệu đính tính toán như
     Thêm các cột Sum, Cộng trừ nhân chia, merge Row, MerCol, SumGroup, SumBuBGroup chúng ta viết script cho Report và đọc file cấu hình để
     show ra các cái cần thiết loại bỏ luôn server. Các report dữ liệu Lớn thì tách thành nhiều lần lấy giới hạn lấy dữ liệu 1 lần.
     25.5./ Trong trường hợp muốn lấy hết chỉ có Ở server tính toán xong rồi => Save file.
     25.6./ Các cái như tính bảng lương, Tính toán có thể quăng dữ liệu về cho Client để js tính giảm tải cho server=> Tương tự mấy anh khác
     và thể hiện Loading chính xác hơn nhiều.<=== Cái cần là chúng ta lấy chính xác và vừa đủ data cho nó. Tránh overload.
     ==> hoàn tất tính toán xong tiến hành save data => cache ở cục bộ và sync về server. Nếu để toàn bộ quá trình này trên server
     thì chúng sẽ áp chế tải lên rất lớn cho server nếu nhiều chi nhánh nhiều công ty tính lương cùng lúc.
26./Hiệu chỉnh lại Model name vươt qua giới hạn phải khai báo trước ModelDb; Thêm vào tạo table==>OK


27./ Sao không tạo file js, html từ client rồi đẩy lên server thông qua API để save file ???
ok it good to mô tả đối tượng ở client thế là chúng sinh động vào server 
API chỉ việc saveFile(path, filename, content);

28./ Bạn định nghĩa thêm 1 phương thức để truyền dữ liệu về server để lấy thông tin từ 1 hàm tự động của hệ thống như:
các giá trị default: curtime, ; giá trị Mã CT, Số CT theo 1 quy luật hoặc cá mã này lấy từ stock code;
định nghĩa như sau Code: {self:"functionCode", d:{Id:"value Id", Date: "value date"}} tức Code = API.funcionCode(Id,Date);


29/ Biến PartComp , Part là 1 chuỗi liên tục lưu trữ theo dạng json:
[{self:"partcreate"},{self:"partupdate",change:{Id:"1=>3", Name:"TUNG=>NAM",Date:"21/7/2021=>23/7/2021"}}]


30/ sau khi sinh xong file js => tiến hành sinh form và grid cho từng loại như sau
=> add vao 1 script với idDynamicBuilder
=> load Dictionary khai báo cho đối tượng này
==> Set chúng vào _Appp
==> Parser chúng
==> get FormHTML ()
===> get GridHTML () 
==> Save chúng về server

31./ Chúng ta có 2 thể thoại 1: thể loại tự động sinh FORM bằng Parser / 2 thể loại tự build form bất kỳ thì Nhân bản cái file html có sẳn
==> Trong đối tượng builder =>> gán biến để trình Parser không dùng parser mà Loading html mới vào
===> Tất cả Id chuẩn vẫn giử nguyên
===> các control và các cái khác tự viết script trong html lúc load mà xử lý chúng


32./ Giải thuật sinh data tự động:
1./ Tất cả các bảng không có ref => tạo trước data : mỗi bảng cho độ dài nhất định như: MaxDataTestRows: 10 rows, 100 rows, 1000 row,
2./ Tất cả các bảng có ref => Tiến hành kiểm tra xem bảng này có tạo dữ liệu chưa ?=> Tiến hành tạo ref :::: Đệ quy vì có thể ko tạo dc 
3./ để tạo ref cho chính xác ta lấy hàm random(0, MaxDataTestRows);
4./ Dữ liệu string normal => get Random theo template cho field này
5./ Name => Bussiness. Name => Person => Email: phone=> username=> password=>
6./ Kiểu datetime: currentdate, range
7./ Kiểu int => range (0,maxRange)
8./ kiểu double => range(0, maxRange)
9./ kiểu isActive (range(0,1))
10./ Bạn có stackdata bạn điều khiển mọi thứ
11./ Bạn cần làm chuẩn hơn load 1 file json bên ngoài vào để import dữ liệu
12./ còn nợ sinh ra vn tự động

33./ 5/7 sinh ra form va luuoi tự động
1./ Load js vào => Builform => save html
2./ Load js vào => BuildGrid => save html
3./ 1 Object với thuộc tính tự builder => Load html và grid và js vào form
4./ Sinh report template vào js => build report simple => html
5./ Sinh report theo chuẩn report dll đã viết. ==> có thể viết lại report luôn trên js.

34./ Transfer kết quả thành điều kiện và hoặc thành data để truyền vào
cách transfer như sau: ===> 
Transfer:{self:true, toData:[{indexCmd:2,data:true fields:["UserID", "Name"]}], 
toCondition:[{indexCmd:3,data:true fields:["StaffID", "Name"]}] "}
Ở server làm như sau: dữ liệu như sau:

1 thực thi câu lệnh 1: kết quả trả về có json là thuộc tính UserID, Name
for(array: index): toData
item = array[i]
==> lấy reqi = RequestList[item.indexCmd] 
for(array: index): item.fields
propi = item.fields[i];
reqi.d[propi] = Result[propi];

//gán váo điều kiện
for(array: index): toCondition
item = array[i]
==> lấy reqi = RequestList[item.indexCmd] 
for(array: index): item.fields
propi = item.fields[i];
reqi.c[propi] = Result[propi];

truyen vao bieu thuc dieu kien nhu sau: example lay so PHONE neu ton tai moi insert hoac 1 dieu kien nao do
vi du: command 1: get Status: Status ==1 hoac 0<= Status<=9 hoac Status In (0,1,2,3) hoac Status !== 3 hoac
va ket hop voi 1 dieu kien khac nhu sau: (Roles == A Or Roles ==B)
lenh: EQ, NEQ, BETW, IN, LESS, GREAT, LESS_EQ, GREAT_EQ
cau lenh bieu dien nhu sau: condition_data: [{self: Status, seq: "EQ", v1:1}, {self: Role, seq: "EQ", v1:"A", op:"AND"}]
Ket qua cau lenh tra ve la Records>=0 OR Records=4
condition_result:[{self: "Records" , seq: GREAT_EQ, v1: 0},{self: "Records" , seq: GREAT_EQ, v1: 4, op:"OR"}]
==> Làm sao suy nghĩ thêm kiểm tra được danh sách data hoặc truyền danh sách data để vào command kế tiếp.

35./ Khi mở 1 file html hoặc js 1 dòng click phải chọn Un minify để giải nén nhé!!!

36./ Bạn thấy rồi đó rồi đó:
1. BẠN Cchuẩn bị 1 stack data for nhiều công việc, Stack này là 1 instance
Chúng như sau: như bạn đựa dữ liệu Text vào
ObjName: "Table"
StackData:{
    self:"ColumnName", type: "DataType", formatDB:"FormatDatabase", formatView: "Định dạng view", 
    Valid:"Dùng chéck form", 
    RegFormat:"Biểu thức biểu diễn",// định dạng Email, DateTime, Day, Moth,...
    StyleForm:"Dùng để hướng người dùng" // màu sắc, bold, if condition hightlight
    functionFormat:"Dùng để check khi người dùng type tự chuyển định dạng"
    prediction:"Độ chính xác dành cho dấu phẩy"
    nullble: true//biểu diễn cho giá trị NULL
}
2./ Ứng với mỗi column là 1 stack gồm nhiều phần tử để xử lý: Ta có hàm chuyển đổi sau:
Transfer1Item(item)
return StackData;
3./Chuyển 1 danh sách data sang StackData
for(record.length)
push(Transfer1Item) 
==> Process
4./ Xuất danh sách name theo dấu: , ==> return (Name,Code,Stack,...)// kiểm tra biểu diễn của chúng
//phục vụ cho sinh câu INSERT
5./ Xuất danh sách dữ liệu định dạng theo Database =>>(18,N'data testing',...)
6./ Xuất dữ liệu dành cho câu UPDATE: ==> Update ObjName SET a= a.formatDB, ...
7. Xuất dữ liệu là Header of 1 Table => trả về <head><th></td></td></th>
8./ Xuất dữ liệu là tbody => Quét qua ListData => Put it to 1 <td>
9./ Return 1 table bất kỳ => có thể append to parent detailOnlyMainHidden
10./ Set data to Form bất kỳ:
11./ Get Data from Form bất kỳ:
12./ => Sinh ra câu AjaxObject để Update, Insert, Delete, 
13./ Đối với các gía trị Reference có 2 thành tố 1: Key và Data View Phải lưu key và data View khác nhau
14./ Add các cột mở rộng không có trong dữ liệu gốc => transfer dữ liệu gốc sang dữ liệu mở rộng: đễ thấy nhất là => thêm cột del,add,edit, 
và các chức năng khác, checkbox, checkall, simple edit, .... detail <= view detail và update detail , ...
15./ Thêm thành phần cho phép sort theo dữ liệu ==> Cho phép hiển thị dòng sort: dòng này gồm Name: Information: special value
16. Hiển thị dạng sort merge row như đã làm report
17./ Tính tổng cho các cột và tính tổng từng group => hỗ trợ 1,2,3 subgroup.
18./ show 2 dòng summery : bottom, top, and both
19./ show dữ liệu dạng ul và li không phải là table ==> Lựa chọn cột để hiển thị => sort chúng theo cách mong muốn và style
20./ Xuất dữ liệu dạng Main: detail 1, detail 2 detail 3 tuỳ mỗi loại mà detail có thể là list hoặc table hoặc Information, có 
group và show name cho từng group <== dễ thấy nhất là report cho Receipt, Service
21./ Xuất dữ liệu scipt cho FORM để dành cho loạd tự động form.
22./ Định nghĩa 1 số function để load cho các Status and Type đơn giản để show lên lưới.
23./ save tổng số dòng dữ liệu để làm paging và lấy theo trang <= cache và loading data from server
24./ Che dữ liệu trà về như Password ở server là che luôn ==> password *********, phone number *****2233, email: ***@gmail.com
25./ Đối dữ liệu Insert lấy 1 số data sinh tự động như mã bill => ta gọi multipro => getIDBill()==. transfer chúng sang Code,
isPartFull<= có thể làm ở client nếu get đủ thông tin hoặc tạo ở server;  stockCODE()<=== gét code from fixed system code <== load to dictionary
26./ Biểu diễn các Icon thêm cho các cột : ví dụ time insert icon clock, đối với ref key có icon addnew => open dialog modal for add new
==> Đối các list phải check nếu chúng trùng tên, các icon người chọn 1 list đễ xem, icon for email, icon for money, icon for ...
27./ Danh sách các action AddNew, Insert, Update, Delete, Back, Next, Detail, Print, Search, View, Export, Import
28./ Định nghĩa tên cho Report cho từng Object, cùng 1 Object có thể có nhiều detail cho nên có nhiều tên khác nhau.
29./

37./ Bạn định nghĩa lại Langguage như sau:
1./ field: vn, en, khmer, ...
2./ Bạn định nghĩa thêm như sau:
field: 
validnull :{vn: "Vui lòng nhập Username", en: "Please input Username", khmer: ""}
validformat: {vn: "Vui lòng nhập đúng định dạng Email: example@gmail.com", en: "Please input correct format Email: example@gmail.com", khmer: ""}
validlen: {Email: quá chiều dài quy định,} 
validwrong: {Nhập sai Email,... Các câu này là câu chung}
}
3./ Bạn định nghĩa thêm Menu và Print cho object này luôn 

38./ Không thể thiếu cột isUserCreated <== dùng cho nhiều chi nhánh nhiều người dùng để tính toán tiền và các cái.

39./ Đối với các tác vụ cho Khách hàng chúng ta lưu thêm thông tin => lên dictionary như sau;
phone=> customer Information
bill ID => Bill Information

Nên mã hoá chúng thành key là md5(phone), billId=> khi phục vụ scan QR hoặc kiểm tra thì truyền md5(id) trên url hoặc các cái khác cho an toàn 
và ẩn thông tin đi. ==> database có thể lưu luôn md5(Id,phone,code)
==> For search và chúng không truy cập và database 
phần information lưu json => get về và parser information

40./ MỖi đối tượng có chu kỳ sống khác nhau và thay đổi theo thời gian nên cách chuẩn hoá tốt nhất bạn có thể làm là gi?
1./ Đối tượng tồn tại là các thực thể chính: Company, Staff, User, Customer
Chúng tham gia vào quá trình đến khi kết thúc vòng đời của Company rồi chúng lại mọc lên tiếp...
2./ Các đối tượng khác sinh ra trong mối quan hệ theo thời gian và chu kỳ sống khác nhau... như: mekong hết làm vé rồi làm hàng hoá rồi gì khác nữa?
rồi gì nữa, system gì nữa??
3. Đặt các bảng quan hệ cũng phải chú ý nguyên tắc 5W thì không thể đầy đủ nhất là bạn phải biết:
who ai làm việc này?
when khi nào
what cái gì
where ở đâu?
w nữa đâu
how họ làm như thế nào?
===> làm lại database và chu kỳ sống khai báo như vậy như vậy...

41./ Thêm đối tượng search form là 1 listfield với các isntance của 1 field được trùng nhau đê bạn làm điều kiện dễ dàng:
như datatime => from date, to date nhưng chúng cùng 1 field bạn thêm define instance:from | to
thêm định nghĩa fkey:{obj:"Order", fcol:"ID"} vào column để tiện cho việc lập trình và form trong hôm ngay
==> Phần search bạn sẽ khai báo như form chúng có 1 danh sách các instance cho các form từ basic đến expert:
formSearch: form [[1,2], [3,4], [5,6]]
/*13*/{ field: "isCreatedDate", instance:from, name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
/*13*/{ field: "isCreatedDate", instance:to, name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },

==> Điều này dẫn bạn đến bạn định nghĩa từ orginal 1 kịch bản cho field này như sau để sinh tự động : search:value,range,group,
đối với value: tức 1 thể hiện duy nhất so sánh bằng
đối với range => bạn sinh ra cùng 1 field 2 instance from:to
đối với group => bạn sử dụng thường cho các đối tượng refkey => Group bạn muốn chọn chúng cùng 2,3 nhóm key
làm sao bạn biểu diễn được biểu thức điều kiện AND, OR giữa các field???

Phần header cũng dê dàng bạn định nghĩa header printer là 1 form có các field và thêm thuộc tính merger trên mỗi row để bạn trình bày.
Bạn có thể sử dụng table cho đơn giản

!!! important
Thay vì bạn khai báo tường minh bạn có thể get listfield từ căn bản sau đó thay đổi và gán lại biến để sử dung gọi cho print và view
vấn đề là tạo ra cho đủ cột kể cả cột ref






