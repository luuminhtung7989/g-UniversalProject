using System.Collections.Generic;

namespace WebApplication.Core
{
    public static class DR
    {
        // 0:method, 1:table key, 2:view key, 3:table, 4:view, 5:main function 
        public static Dictionary<string, string[]> _a = new Dictionary<string, string[]>  { 
		    //Account
		    //{"pGetAccount"     , new[]{"P", "0", "0" ,"Account", "zgcl_Account02", "Account"}},
		    {"rp1"      , new[]{"P", "1" , "zgcl_gcGobal_TASK_Works01", "rp", "BÁO CÁO CHI TIẾT CÔNG VIỆC CỦA PHÒNG BAN"}},
            {"rp2"      , new[]{"P", "1" , "XIKE_Report", "rp", "BÁO CÁO CHI TIẾT NHÂN VIÊN THEO NGÀY"}},
            {"rp3"      , new[]{"P", "1" , "XIKE_Report", "rp", "BÁO CÁO CHI TIẾT PHÒNG BAN THEO NGÀY"}},
            {"rp4"      , new[]{"P", "1" , "XIKE_Report", "rp", "BÁO CÁO TÍNH ĐIỂM NHÂN VIÊN THEO NGÀY"}},
            {"rp5"      , new[]{"P", "1" , "XIKE_Report", "rp", "BÁO CÁO TỔNG HỢP NHÂN VIÊN THEO THÁNG"}},
            {"rp6"      , new[]{"P", "1" , "XIKE_Report", "rp", "BÁO CÁO TÔNG HỢP PHÒNG BAN THEO THÁNG"}},
            {"rp7"      , new[]{"P", "1" , "zgcl_gb_Training_Student11", "rp", "BÁO CÁO DANH SÁCH HỌC VIÊN CỦA LỚP"}},
            {"rp8"      , new[]{"P", "1" , "AMA_XIKE_REPORT_CLASS_DETAIL", "rp", "Student List Report"}},
            {"rp9"      , new[]{"P", "1" , "AMA_HIEN_REPORT_CLASS", "rp", "Class List Report"}},
            {"rp10"      , new[]{"P", "1" , "zgcl_GBL_TRAINNING_COURSE_CLASS_STUDENT04", "rp", "DANH SÁCH HỌC VIÊN CHƯA ĐÓNG HỌC PHÍ"}},
            {"rp12"      , new[]{"P", "1" , "zgcl_GBL_TRAINNING_COURSE_CLASS_STUDENT04", "rp", "DANH SÁCH HỌC VIÊN ĐÃ ĐÓNG HỌC PHÍ"}},
            {"rp13"      , new[]{"P", "1" , "zgcl_GBL_TRAINNING_COURSE_CLASS_STUDENT05", "rp", "DANH SÁCH TIỀN CÒN DƯ CỦA HỌC VIÊN"}},
            {"rp14"      , new[]{"P", "1" , "AMA_XIKE_REPORT_CLASS_FULL", "rp", "BÁO CÁO LỚP HỌC TỔNG HỢP"}},
            {"rp15"      , new[]{"P", "1" , "gbl_trainning_course_class_teacher_temphour", "rp", "BÁO CÁO SỐ GIỜ ĐÃ HỌC CỦA LỚP"}},
            {"rp16"      , new[]{"P", "1" , "gbl_trainning_course_class_teacher_temphour", "rp", "BÁO CÁO SỐ GIỜ GIÁO VIÊN TRONG THÁNG"}},
            {"rp17"      , new[]{"P", "1" , "zgcl_GBL_TRAINING_STUDENT_QUA03", "rp", "BÁO CÁO HỌC VIÊN NHẬN QUÀ"}},
            {"rp18"      , new[]{"P", "1" , "XIKE_NhanTien_Detail_Full", "rp", "DANH SÁCH PHIẾU NHẬN TIỀN"}},
            {"rp19"      , new[]{"P", "1" , "AMA_XIKE_REPORT_CLASS_DETAIL", "rp", "DANH SÁCH HỌC VIÊN THI GIỮA KỲ"}},
            {"rp20"      , new[]{"P", "1" , "AMA_XIKE_REPORT_CLASS_DETAIL", "rp", "DANH SÁCH HỌC VIÊN THI CUỐI KỲ"}},
            {"rp21"      , new[]{"P", "1" , "XIKE_Report", "rp", "DANH SÁCH ĐIỂM HỌC VIÊN THI CUỐI KỲ"}},
            {"rp22"      , new[]{"P", "1" , "XIKE_Report", "rp", "DANH SÁCH ĐIỂM HỌC VIÊN THI CUỐI KỲ"}},
            {"rp23"      , new[]{"P", "1" , "XIKE_Report", "rp", "BÁO CÁO ĐIỂM DANH CHI TIẾT"}},
            {"rp24"      , new[]{"P", "1" , "XIKE_Report", "rp", "BÁO CÁO ĐIỂM DANH TỔNG HỢP"}},
            {"rp25"      , new[]{"P", "1" , "XIKE_Report", "rp", "OVERALL REPORT"}},
            {"rp26"      , new[]{"P", "1" , "XIKE_Report_Receipt_TongHop", "rp", "BÁO CÁO THU TỔNG HỢP THEO NGÀY"}},
            {"rp27"      , new[]{"P", "1" , "XIKE_Report", "rp", "DOANH THU"}},
            {"rp28"      , new[]{"P", "1" , "gbl_trainning_course_class_teacher_temphour", "rp", "BÁO CÁO LỊCH DẠY"}},
            {"rp29"      , new[]{"P", "1" , "gbl_trainning_course_class_teacher_temphour", "Absent", "BÁO CÁO ĐIỂM DANH"}},
            {"rp30"      , new[]{"P", "1" , "zgcl_GBL_TRAINNING_COURSE_CLASS_STUDENT_FULL", "rp", "Active Learning Students\' Remaining Hours Report"}},
            {"rp31"      , new[]{"P", "1" , "zgcl_GBL_TRAINNING_THUQUY_PHIEUNHANTIEN_DETAILS02_FULL", "rp", "BÁO CÁO THU"}},
            {"rp32"      , new[]{"P", "1" , "zgcl_gcGobal_INCOM_Payment00", "rp", "BÁO CÁO CHI"}},
            {"rp33"      , new[]{"P", "1" , "zgcl_GBL_TRAINING_STUDENT_08FULL", "rp", "STUDENT LIST"}},
            {"rp34"      , new[]{"P", "1" , "zgcl_GBL_TRAINNING_COURSE_CLASS_STUDENT_FULL_GROUPBY", "rp", "STUDENT LIST REPORT"}},
            {"rp35"      , new[]{"P", "1" , "gbl_trainning_course_class_teacher_temphour", "rp", "BÁO CÁO SỐ GIỜ TRỢ GIẢNG TRONG THÁNG"}},
            {"rp36"      , new[]{"P", "1" , "gbl_trainning_course_class_teacher_temphour", "Report_CongNo_NCCChiTiet", "BÁO CÁO SỐ GIỜ TRỢ GIẢNG TRONG THÁNG"}},
            {"rp37"      , new[]{"P", "1" , "gbl_trainning_course_class_teacher_temphour", "Report_CongNo_NCCTongHop", "BÁO CÁO SỐ GIỜ TRỢ GIẢNG TRONG THÁNG"}},
            {"rp38"      , new[]{"P", "1" , "gbl_trainning_course_class_teacher_temphour", "Report_CongNo_KHChiTiet", "BÁO CÁO SỐ GIỜ TRỢ GIẢNG TRONG THÁNG"}},
            {"rp39"      , new[]{"P", "1", "gbl_trainning_course_class_teacher_temphour", "Report_CongNo_KHTongHop", "BÁO CÁO SỐ GIỜ TRỢ GIẢNG TRONG THÁNG"}},
            {"rp40"      , new[]{"P", "1", "XIKE_Report_KhoXuat_ThanhPham", "rp", "BÁO CÁO BÁN HÀNG"}},
            {"rp41"      , new[]{"P", "1", "XIKE_Report_KhoXuat_ThanhPham", "rp", "BÁO CÁO HỦY HÀNG"}},
            {"rp42"      , new[]{"P", "1", "XIKE_Report_KhoXuat", "rp", "BÁO CÁO LỜI LỖ"}},
            {"rp43"      , new[]{"P", "1", "XIKE_Report_ThuChi", "rp", "BÁO CÁO THU CHI"}},
            {"rp44"      , new[]{"P", "1", "zgcl_gcGobal_EMPLOY_Payoff00", "rp", "BẢNG LƯƠNG"}},
            {"rp45"      , new[]{"P", "1", "XIKE_Report_XuatNhap", "rp", "BÁO CÁO XUẤT NHẬP TỒN"}},
            {"rp46"      , new[]{"P", "1", "XIKE_Report_XuatNhap", "ReportInput", "BÁO CÁO XUẤT NHẬP TỒN"}},
            {"rp47"      , new[]{"P", "1", "XIKE_Report_XuatNhap", "ReportOutput", "BÁO CÁO XUẤT NHẬP TỒN"}},
            {"rp48"      , new[]{"P", "1", "XIKE_Report_XuatNhap", "ReportBanHangTapHoa", "BÁO CÁO XUẤT NHẬP TỒN"}},
            {"rp49"      , new[]{"P", "1", "XIKE_Report", "rp", "BÁO CÁO XUẤT NHẬP TỒN"}},
            {"rp50"      , new[]{"P", "1", "XIKE_Report_KhoXuat_ThanhPham", "rp", "BÁO CÁO XUẤT NHẬP TỒN"}},
            {"rp51"      , new[]{"P", "1", "XIKE_Report_KhoXuat_ThanhPham", "ReportThu", "BÁO CÁO THU"}},
            {"rp52"      , new[]{"P", "1", "zgcl_gcGobal_STOCK_gcProduct_Input04All", "rp", "BÁO CÁO THU"}},
            {"rp53"      , new[]{"P", "1", "zgcl_gcGobal_STOCK_gcProduct_Input04All", "Report_ThuAnUong", "BÁO CÁO ĂN UỐNG"}}
        };
        public static Dictionary<int, string> _h = new Dictionary<int, string>
        {
            {1,         "<div class='header-report'>{0}</div>"
                        +"<div>{1}</div>"},
            {2, "<table class=\"rptprintBodyTable\" width=\"100%\">"
                    + "<tr>"
                    + "<td colspan=\"2\" style='font-size:12px;'> &nbsp;</td>"
                    + "</tr>"
                    + "<tr>"
                    + "<tr>"
                    + "<td width=\"500px\"align=\"center\" ><span style='font-weight:bold;font-size:18px;'> {1} </span>  </br><span style='font-size:12px;'>Điện thoại: <strong>{2}</strong></span></br><span style='font-size:12px;'> &nbsp;Địa chỉ: {3}</br></span></td>"
                    + "</tr>"
                    + "<tr>"
                    + "<tr>"
                    + "<td align=\"center\" colspan=\"2\" width=\"400px\"><b><font size=\"4.0pt\" style='font-weight:bold;font-size:16px;'>{4}</font></b> </br>"
                    + "<span style='font-size:14px;'>{0}</span><br/>"
                    + "</td>"
                    + "</tr>"
                    + "<tr>"
                    + "</tr>"
                    + "<tr>"
                    + "<td colspan=\"2\" style='font-size:12px;'></td>"
                    + "</tr>"
                    + "</table>"}
        };
        public static Dictionary<int, string> _f = new Dictionary<int, string>
        {
            {1, "<table class=\"rptprintBodyTable\" width=\"100%\">"
                        + " <tr><td class=\"dhu_rpt_tpl_KTSS_Footer4\" style=\"width: 25%;\">"
                        + "<h4 style=\"color: inherit;font-family: inherit;font-weight: 500;line-height: 1.1;font-size: 18px;\">Người lập phiếu<br>"
                        + "<small style=\"font-size: 65%;color: #777;font-weight: normal;line-height: 1;\">(Ký, họ tên)</small></h4></td> "
                        + "<td class=\"dhu_rpt_tpl_KTSS_Footer4\" style=\"width: 25%;\">"
                        + "<h4 style=\"color: inherit;font-family: inherit;font-weight: 500;line-height: 1.1;font-size: 18px;\">Kế toán<br>"
                        + "<small style=\"font-size: 65%;color: #777;font-weight: normal;line-height: 1;\">(Ký, họ tên)</small></h4></td> "
                        + "<td class=\"dhu_rpt_tpl_KTSS_Footer4\" style=\"width: 25%;\">"
                        + "<h4 style=\"color: inherit;font-family: inherit;font-weight: 500;line-height: 1.1;font-size: 18px;\">Thủ quỹ<br>"
                        + "<small style=\"font-size: 65%;color: #777;font-weight: normal;line-height: 1;\">(Ký, họ tên)</small></h4></td> "
                        + "<td class=\"dhu_rpt_tpl_KTSS_Footer4\" style=\"width: 25%;\">"
                        + "<h4 style=\"color: inherit;font-family: inherit;font-weight: 500;line-height: 1.1;font-size: 18px;\">Quản lý<br>"
                        + "<small style=\"font-size: 65%;color: #777;font-weight: normal;line-height: 1;\">(Ký, họ tên)</small></h4></td> "
                        + "  </tr>"
                        + "</table>"},
            {2, ""}
        };
    }
}
