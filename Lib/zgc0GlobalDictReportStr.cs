using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web;

using gcLibAdmin;

using System.Collections.Generic;
/// <summary>
/// Summary description for dhuLogin
/// </summary>
/// 
namespace zgc0LibAdmin
{
    public class zgc0GlobalDictReportStr
    {

        public zgc0GlobalDictReportStr()
        {
           
        }
        public object[] listobj = new object[24];


        public static string headerStr = "<table class=\"rptTable\" width=\"100%px\" style=\"background:#FFFFFF\">"
                           + "<tr>"
                           + "<td colspan=\"6\" style=\"width: 100%;text-align: center\">"
                           + "<img ID=\"Image1\" src=\"{0}\" width=\"800px\" />"
                           + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td colspan=\"6\">"
                           + "<br/>"
                           + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td  colspan=\"6\" style=\"text-align: center\">"
                           + "<strong>"
                           + "<span style=\"font-size: 16pt\"> {1}</span><br/>"
                           + "<span style=\"font-size: 12pt\"></span></strong>{2}"
                           + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td colspan=\"6\">"
                           + "<br/>"
                           + "</td>"
                           + "</tr></table>";
        public static string footerStr = "<table class=\"rptTable\" style=\"background:#FFFFFF\" width=\"100%\">"
                         + "<tr>"
                         + "    <td style=\"width: 211px; text-align: center\">"
                         + "    </td>"
                         + "    <td colspan=\"4\" style=\"width: 175px\"></td>"
                         + "    <td style=\"text-align: center\">{0}"
                         + "       <span><br /><strong> Director <br />"
                         + "            </strong style=\"font-style:inherit\">(Sign, Stamp)<br /><br /><br /><br /><br /><br />"
                         + "            <strong>{1}</strong>"
                         + "            <br />"
                         + "       </span>"
                         + "</td></tr></table>";
    }
}