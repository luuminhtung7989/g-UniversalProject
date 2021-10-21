using System.Collections.Generic;

namespace WebApplication.Core
{
    public class DD
    {
        public static Dictionary<int, string> _ln = new Dictionary<int, string>        // Distionary last name
        {
            {1, "Thanh"},
            {2, "Thien"},
            {3, "Long"},
            {4, "Huong"},
        };
        public static Dictionary<int, string> _mn = new Dictionary<int, string>        // Distionary middle name
        {
            {1, "Thi"},
            {2, "Van"},
            {2, "Quoc"},
        };
        public static Dictionary<int, string> _fn = new Dictionary<int, string>        // Distionary first name
        {
            {1, "Nguyen"},
            {2, "Tran"},
            {3, "Dao"},
            {4, "Huynh"},
            {5, "Vuong"},
            {6, "Do"},
        };
    }
}
