using System.Collections.Generic;

namespace WebApplication.Core
{
    public class DI
    {
        public static Dictionary<string, string[]> _a = new Dictionary<string, string[]>        // Distionary first name
        {
            {"pGetgcGobal_STOCK_gcProduct_Input", new []{"createDataExtraOutInput", "271"}},
            {"pGetgcGobal_STOCK_gcProduct_Output", new []{"createDataExtraOutInput", "273"}},
            {"pGetgcGobal_INCOM_Receipt", new []{"createDataExtraReceipt", "171"}},
            {"pGetgcGobal_INCOM_Payment", new []{"createDataExtraPayment", "168"}},
            {"pGetgcGobal_TSCD_NhapTaiSan", new []{"createDataExtraNhapTaiSan", "395"}},
            {"pGetgcGobal_TSCD_THANHLY", new []{"createDataExtraTHANHLY", "401"}},
        }; 
    }
}