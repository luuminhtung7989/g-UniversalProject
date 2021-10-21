using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Data.SqlClient;
using System.Data.OleDb;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using zgc0LibAdmin;


namespace gcLibAdmin
{
    public class gcError
    {
        public gcError()
        {
        }
        public static string Error(int value)
        {
            switch(value)
            {
                case 401: return "Error 401: Parameter is null.";
                case 501:return "Error 501: File not found.";
                default:
                    return "Error unknown";
            }
        }
    }
    public class gcSuccess
    {
        gcSuccess()
        {
        }
    }
    public class gcUtility
    {
        public gcUtility()
        {
        }

        public static string GetVNStringDate(DateTime date)
        {
            return date.ToString("dd/MM/yyyy hh:mm:ss");
        }
        public static string GetEStringDate(DateTime date)
        {
            return date.ToString("MM/dd/yyyy hh:mm:ss");
        }

        public static string VNToEStringDate(string strDateVN)
        {
            string[] arrString = strDateVN.Split(' ');
            if (arrString.Length > 0)
            {
                string[] arrStrDate = arrString[0].Split('/');
                if (arrStrDate.Length > 2)
                {
                    if(arrString.Length>1)
                        return arrStrDate[1]+"/"+arrStrDate[0]+"/"+arrStrDate[2]+" "+arrString[1];
                    else
                        return arrStrDate[1] + "/" + arrStrDate[0] + "/" + arrStrDate[2];
                }
                else
                    return strDateVN;
            }
            return "";
        }

        public static string EToVNStringDate(string strDateVN)
        {
            string[] arrString = strDateVN.Split(' ');
            if (arrString.Length > 0)
            {
                string[] arrStrDate = arrString[0].Split('/');
                if (arrStrDate.Length > 2)
                {
                    if (arrString.Length > 1)
                        return arrStrDate[0] + "/" + arrStrDate[1] + "/" + arrStrDate[2] + " " + arrString[1];
                    else
                        return arrStrDate[0] + "/" + arrStrDate[1] + "/" + arrStrDate[2];
                }
                else
                    return strDateVN;
            }
            return "";
        }

        //-------------------------------------------------------------------------
        //For ngon ngu
        public static int GetNullInt(object obj)
        {
            if (obj == null)
                return int.MinValue;
            return (int)obj;
        }
        public static int GetNullInt(object obj, int defaultvalue)
        {
            if (obj == null)
                return defaultvalue;
            return (int)obj;
        }
        public static long GetNullLong(object obj)
        {
            if (obj == null)
                return long.MinValue;
            return (int)obj;
        }
        public static long GetNullLong(object obj, long defaultvalue)
        {
            if (obj == null)
                return defaultvalue;
            return (long)obj;
        }
        public static double GetNullDouble(object obj)
        {
            if (obj == null)
                return long.MinValue;
            return (double)obj;
        }
        public static double GetNullDouble(object obj, double defaultvalue)
        {
            if (obj == null)
                return defaultvalue;
            return (double)obj;
        }
        public static DateTime GetNullDate(object obj)
        {
            if (obj == null)
                return DateTime.MinValue;
            return (DateTime)obj;
        }
        public static DateTime GetNullDate(object obj, DateTime defaultvalue)
        {
            if (obj == null)
                return defaultvalue;
            return (DateTime)obj;
        }

        public static string GetNullString(object obj)
        {
            if (obj == null)
                return "";
            return obj+"";
        }
        //truyen vao GetNullString(obj,"");
        public static string GetNullString(object obj, string defaultvalue)
        {
            if (obj == null)
                return defaultvalue;
            return obj+"";
        }


        //-----------------------------------------------------------------------
        //For database
        public static string GetNullStringDB(DataRow row, string columnname)
        {
            if (row.IsNull(columnname))
                return "";
            return row[columnname].ToString();
        }
        public static string GetNullStringDB(DataRow row, string columnname, string defaultvalue)
        {
            if (row.IsNull(columnname))
                return defaultvalue;
            return row[columnname].ToString();
        }
        public static int GetNullIntDB(DataRow row, string columnname)
        {
            if (row.IsNull(columnname))
                return 0;
            return Convert.ToInt32(row[columnname]);
        }
        public static int GetNullIntDB(DataRow row, string columnname, int defaultvalue)
        {
            if (row.IsNull(columnname))
                return defaultvalue;
            return Convert.ToInt32(row[columnname]);
        }
        public static double GetNullDoubleDB(DataRow row, string columnname)
        {
            if (row.IsNull(columnname))
                return 0;
            return Convert.ToDouble(row[columnname]);
        }
        public static double GetNullDoubleDB(DataRow row, string columnname, double defaultvalue)
        {
            if (row.IsNull(columnname))
                return defaultvalue;
            return Convert.ToDouble(row[columnname]);
        }
        public static long GetNullLongDB(DataRow row, string columnname)
        {
            if (row.IsNull(columnname))
                return 0;
            return Convert.ToInt64(row[columnname]);
        }
        public static long GetNullLongDB(DataRow row, string columnname, long defaultvalue)
        {
            if (row.IsNull(columnname))
                return defaultvalue;
            return Convert.ToInt64(row[columnname]);
        }
        public static DateTime GetNullDateDB(DataRow row, string columnname)
        {
            if (row.IsNull(columnname))
                return (DateTime.MinValue);
            return Convert.ToDateTime(row[columnname]);
        }
        public static DateTime GetNullDateDB(DataRow row, string columnname, DateTime defaultvalue)
        {
            if (row.IsNull(columnname))
                return defaultvalue;
            return Convert.ToDateTime(row[columnname]);
        }
        
        

    }

}