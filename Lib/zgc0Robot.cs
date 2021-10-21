using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Collections;
using System.Data.OleDb;
using System.Web;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Data.Common;
using System.IO;
using System.Security.Cryptography;
using zgc0LibAdmin;

namespace zgc0Admin
{
    public enum Days : byte { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
    public enum Months : byte { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec };
    public enum MachineState
    { PowerOff = 0, Running = 5, Sleeping = 10, Hibernating = Sleeping + 5 };
    public enum Importance
    { None, Trivial, Regular, Important, Critical };
    public enum FormatFont
    { None, BoldTag, ItalicsTag, HyperlinkTag, };
    public enum VisibleType
    { None, Hidden = 2, Visible = 4 };
    public enum CarType
    { Saloon = 5, Coupe = 4, Estate = 6, Hatchback = 8, Ute = 1, };
    public enum RenderType
    {
        None = 0x0, DataUri = 0x1, GZip = 0x2, ContentPage = 0x4, ViewPage = 0x8, HomePage = 0x10
        // Next two values could be 0x20, 0x40   
    };
    public enum CarOptions
    { SunRoof = 0x01, Spoiler = 0x02, FogLights = 0x04, TintedWindows = 0x08, };
    public enum Ranks
    { Joker = 0, Ace = 1, Two = 2, Three = 3, Four = 4, Five = 5, Six = 6, Seven = 7, Eight = 8, Nine = 9, Ten = 10, Jack = 11, Queen = 12, King = 13 };
    public enum Direction
    { North = 0, East = 90, South = 180, West = 270 };
    public enum Volume
    { Low, Medium, High };
    public enum Age
    { Young = 50, Old = 70, TooOld = 90 };
    public enum Season
    { Fall, Winter, Spring, Summer, IceAge };
    public enum Suit
    { Spades, Hearts, Clubs, Diamonds };
    public enum Coolness // class indicates this is a C++/CLI enum
    { NotSoCool, Cool, SuperCool };
    public enum TempRange
    { Cool, Hot, VeryHot, };
    public enum GoodFurnishings
    { Table, Chair, Lamp };
    public enum Furniture
    {
        Desk, Chair, Lamp, Rug, LastValue   // The sentinel value.        
    };
    public enum AdminControl
    {
        InsertReceipt, UpdateReceipt, DeleteReceipt,
        InsertPayment, UpdatePayment, DeletePayment,
        InsertOrder, UpdateOrder, DelereOrder,
        InsertSubsidies, UpdateSubsidies, DeleteSubsidies,
        InsertInput, UpdateInput, DeleteInput,
        InsertOutput, UpdateOutput, DeleteOutput,
        InsertReceiptService, UpdateReceiptService, DeleteReceiptService,
        InsertReceiptProduct, UpdateReceiptProduct, DeleteReceiptProduct,
        InsertOrderService, UpdateOrderService, DeleteOrderService,
        InsertOrderProduct, UpdateOrderProduct, DelteOrderProduct,
        InsertProduction, UpdateProduction, DeleteProduction,
        InsertRefund, UpdateRefund, DeleteRefund,

        InsertPlanProduct, UpdatePlanProduct, DeletePlanProduct,

        InsertPlanService, UpdatePlanService, DeletePlanService,

        CalculateProfit, CalculateDebt, CalculateProfitFollowDay, CalculateProfitFollowMonth,
        CalculateViewForReport, CalculateFilterForReport,

        BuildOneNews, BuildAllNews, BuildOnePage, BuildAllPage

    }
    public class zgc0Robot
    {
        public AdminControl Action;
        public zgc0Robot()
        {
        }
        public string Build()
        {
            string strReport = "";
            return strReport;
        }
        public string Do()
        {
            string strReport = "";
            return strReport;
        }
        public string Run()
        {
            string strReport = "";
            return strReport;
        }
        public string Repair()
        {
            string strReport = "";
            return strReport;
        }
        public string Repair(object[] parammeter, string funcname)
        {
            string strReport = "";
            switch (Action)
            {
                case AdminControl.DeleteInput: Proccess(parammeter, funcname);
                    break;
                case AdminControl.InsertInput: Proccess(parammeter, funcname);
                    break;
                case AdminControl.UpdateInput: Proccess(parammeter, funcname);
                    break;
                default:
                    break;
            }
            return strReport;
        }
        public void Proccess(object[] parammeter, string funcname)
        {
            zgc0RobotInner tmpClass = new zgc0RobotInner();
            MethodInfo method = tmpClass.GetType().GetMethod(funcname);
            if (method != null)
            {
                method.Invoke(tmpClass, parammeter);// sử dụng gọi method
            }
        }
    };

    public class zgc0RobotInner
    {
        public AdminControl Action;
        public zgc0RobotInner()
        {
        }
    };
   
}
