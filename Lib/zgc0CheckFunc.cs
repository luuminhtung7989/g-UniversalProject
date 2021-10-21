using System;
using System.Data;
using System.Configuration;
using System.Web;

using System.Data.SqlClient;
using System.Collections.Generic;

using zgc0LibAdmin;
namespace zgc0LibAdmin
{
    /// <summary>
    /// Summary description for zgc0CheckFunc
    /// </summary>
    public class zgc0CheckFunc
    {
        public zgc0CheckFunc()
        {
            //
            // TODO: Add constructor logic here
            //
        }
       
        //---------------------------------------------------------------------------

        static public string getMsgLabel(string text , bool bRet)
        {
            string newvalue;
            //--------------------------------------------------
            if (text.Contains("(*)"))
            {
                if (text.Contains("(*)"))
                    text = text.Replace("(*)", "");
                if (bRet)
                {
                    newvalue = "" + text + "<span class='IndicatorNomal'> (*)</span>";
                }
                else
                {
                    newvalue = "" + text + "<span class='IndicatorError'> (*)</span";
                }
            }//end if
            else
            {
                if (text.Contains("[*]"))
                    text = text.Replace("[*]", "");
                if (bRet)
                {
                    newvalue = "" + text + "<span class='IndicatorNomal'></span>";
                }
                else
                {
                    newvalue = "" + text + "<span class='IndicatorError'> [*]</span>";
                }
            }
            //--------------------------------------------------
            return newvalue;
        }
        static public bool CheckNULL(object value)
        {
            bool bRet = false;
            if ((value == null) || (value == string.Empty))
                bRet = true;
            if (value != null)
                if (value.ToString().Trim().Length < 1)
                    return true;
            return bRet;
        }
        static public string getMsgNULL(string value)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn phải nhập vào [<span class='FieldName'>"+value+"</span>], hiện tại bạn chưa điền thông tin.</div>";
            return tmpValue;
        }
        static public bool CheckExsist(string value, string colname, string tablename)
        {
            int errCode = 0;
            return zgc0Helper.checkExist(value, colname, tablename, out errCode);
        }
        static public bool CheckExsist(int id, string value, string colname, string tablename )
        {
            int errCode = 0;
            return zgc0Helper.checkExist(id, value, colname, tablename, out errCode);
        }
        static public string getMsgCheckExsist(string field, string value)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn đã nhập trùng [<span class='FieldName'>" + field + "</span>], [<span class=\"FieldValue\">" + value + "</span>] hiện tại đã tồn tại trong cơ sở dữ liệu.</div>";
            return tmpValue;
        }
        static public bool CheckRange(string value, int v1, int v2)
        {
            if (value.Trim().Length < 1)
                return true;
            int v = int.Parse(value);
            if ((v1 <= v) && (v <= v2))
                return false;
            return true;
            
        }
        static public bool CheckRange(string value, double v1, double v2)
        {
            if (value.Trim().Length < 1)
                return true;
            double v = double.Parse(value);
            if ((v1 <= v) && (v <= v2))
                return false;
            return true;
        }
        
        static public string getMsgCheckRange(string field, string value)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn đã nhập [<span class='FieldName'>" + field + "</span>], [<span class=\"FieldValue\">" + value + "</span>] hiện tại không nằm trong khoảng [a:b].</div>";
            return tmpValue;
        }
        static public string getMsgCheckRange(string field, string value, string v1, string v2)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn đã nhập [<span class='FieldName'>" + field + "</span>], [<span class=\"FieldValue\">" + value + "</span>] hiện tại không nằm trong khoảng ["+v1.ToString()+"-"+v2.ToString()+"].</div>";
            return tmpValue;
        }
        static public string getMsgCheckRange(string field, string value, double v1, double v2)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn đã nhập [<span class='FieldName'>" + field + "</span>], [<span class=\"FieldValue\">" + value + "</span>] hiện tại không nằm trong khoảng [" + v1.ToString() + "-" + v2.ToString() + "].</div>";
            return tmpValue;
        }
        static public string getMsgCheckRange(string field, string value, int v1, int v2)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn đã nhập [<span class='FieldName'>" + field + "</span>], [<span class=\"FieldValue\">" + value + "</span>] hiện tại không nằm trong khoảng [" + v1.ToString() + "-" + v2.ToString() + "].</div>";
            return tmpValue;
        }
        static public string getMsgCheckRange(string field, string value, long v1, long v2)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn đã nhập [<span class='FieldName'>" + field + "</span>], [<span class=\"FieldValue\">" + value + "</span>] hiện tại không nằm trong khoảng [" + v1.ToString() + "-" + v2.ToString() + "].</div>";
            return tmpValue;
        }
        //---------------------------------------------------
        static public bool CheckLength(string value, int length)
        {
            if (value.Length < length)
                return false;
            return true;
        }
        static public string getMsgCheckLength(string field, string value, int length)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn phải nhập [<span class='FieldName'>" + field + "</span>] với chiều dài là " + length.ToString() + " ký tự, [<span class=\"FieldValue\">" + value + "</span>].</div>";
            return tmpValue;
        }
        //---------------------------------------------------
        static public bool CheckDate(DateTime from, DateTime to)
        {
            if (from.CompareTo(to) >0)
                return false;
            return true;
        }
        static public string getMsgCheckDate(string field, string field2, DateTime from, DateTime to)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn phải nhập [<span class='FieldName'>" + field2 + "</span>] lớn hơn ngày của " + field + " [<span class=\"FieldValue\">" + from.ToShortDateString() + " <= " + to.ToShortDateString() + "</span>].</div>";
            return tmpValue;
        }
        //---------------------------------------------------
        static public bool CheckContainFormat(string value, string contain)
        {
            if (!value.Contains(contain))
                return false;
            return true;
        }
        static public string getMsgCheckContainFormat(string field, string value, string contain)
        {
            string tmpValue = "";
            tmpValue += "<div class='ErrorMsgItem'> Bạn phải nhập [<span class='FieldName'>" + field + "</span>] chứa nội dung " + contain + " [<span class=\"FieldValue\">" + value + "</span>].</div>";
            return tmpValue;
        }

        static public string FormatDiv(string str, string msg)
        {
            string buildStr = "<div class=\"ErrorMsgServer\">";
            buildStr += "<div class=\"ErrorMsgServerCaption\">" + msg + " </div>";
            buildStr += str;
            buildStr += "</div>";
            return buildStr;
        }
        /* -------- Định dạng chuỗi của text   ----------*/
        
         /* -------- Chuyển định dạng  ----------*/
        static public string gcRev(string str,char t1)
        {
            int idx = str.IndexOf( t1 );
            while ( idx > -1 ) {
                str = str.Remove(idx);
                idx = str.IndexOf( t1 );
            }
            return str;
        }
        /*------------------------ change format ---------------------------------- */
        /* t1=[,] t2=[.] sử dụng theo số tiếng anh gcNum(str,",",".")*/
        static public string gcNum(string str,char t1, char t2 )
        {
            string tmpValue = str;
            string[] arrString = new string[tmpValue.Length / 3 + 2];

            
            /*-----------------------------------------*/

            int idxMinus = tmpValue.IndexOf("-");
            if(idxMinus==0)
                tmpValue = tmpValue.Substring(idxMinus + 1, tmpValue.Length); 
            else  if(idxMinus>0)
                tmpValue = tmpValue.Substring(0, idxMinus); 
            
            /*----------------------------------------*/
             int k = 0;
             int i = 0;
             int idx = tmpValue.IndexOf(t2);
            string strTail = "";
            if(idx>=0)
            {
                string strHead = tmpValue.Substring(0, idx); 
                
                int lH = strHead.Length;
                if(lH>3)
                {
                    for (k = lH - 3; k > 0; k = k - 3)
                    {
                        arrString[i] = strHead.Substring(k,3);
                        i++;
                    }
                    /* ------------------------------------ */
                    if(k<=0)
                    {
                        arrString[i] = strHead.Substring(0,3);
                        i++;
                       }
                }/* end lH */
                else
                    {
                        arrString[i] = strHead.Substring(0,strHead.Length);
                        i++;
                    }

                    strTail = tmpValue.Substring(idx + 1, tmpValue.Length - (idx + 1)); 
             }
             else
             {
                string strHead = tmpValue; 
                int lH = strHead.Length;
                if(lH>3)
                {
                    for (k = lH - 3; k > 0; k = k - 3)
                    {
                        arrString[i] = strHead.Substring(k,3);
                        i++;
                    }
                    /* ------------------------------------ */
                    if(k<=0)
                    {
                        arrString[i] = strHead.Substring(0,k+3);
                        i++;
                    }
                }/* end lH */
                else
                    {
                        arrString[i] = strHead.Substring(0,strHead.Length);
                        i++;
                    }
             }              

            int j=0; tmpValue = "";
            if(idxMinus>=0)
                tmpValue += "-";
                
            /* concat Head */
            for(j=i-1; j>0; j--)
            {
                tmpValue+= arrString[j];
                if(j>0)
                    tmpValue+= t1;
            }
            if(i>0)
                tmpValue+= arrString[0];

            /* concar Tail */
            if(idx>=0)
            {
                tmpValue+= t2;
                tmpValue+= strTail;
            }
            return tmpValue;
        }
        /*    Caret Functions     */
    }
   
}