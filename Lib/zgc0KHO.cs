using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Collections;
using System.Data.OleDb;
using System.Web;
using System.Collections.Generic;
using System.Reflection;

using zgc0LibAdmin;
namespace zgc0LibAdmin
{
	/// <summary>
	/// Summary description for zgc0Helper.
	/// </summary>
	public class zgc0KHO
	{
        public zgc0KHO()
		{
			//
			// TODO: Add constructor logic here
			//
		}
        //Nơi gọi sẽ gọi như thế này
        //Giới hạn tham số trên URL không được có những tham số đặc biệt để nhận dạng
        //------------------------------------------------------------------------

        public static void Process(int objId, int type)
        {
            ProcessInter(objId, type);
        }

        public static void ProcessInter(int objId, int type)
        {
            //SqlConnection myCon = zgc0HelperSecurity.getCon();
            {
                //myCon.Open();
                SqlCommand myCmd = new SqlCommand();
                //SqlTransaction transaction;
                //transaction = myCon.BeginTransaction(IsolationLevel.ReadCommitted, "SampleTransaction");
                //myCmd.Connection = myCon;
                //myCmd.Transaction = transaction;
                try
                {
                    if (type == 1) 
                         myCmd.CommandText = "Update_BoSP_To_Vatu_One";
                    else if (type == 2)
                         myCmd.CommandText = "Update_BSP_To_Stock_One";
                    else if (type == 3)
                         myCmd.CommandText = "Update_Dichvu_Chitiet_To_Stock_One";
                    else if (type == 4)
                         myCmd.CommandText = "Update_Dichvu_Gachthe_To_Stock_One";
                    else if (type == 5)
                         myCmd.CommandText = "Update_Nhapkho_To_Stock_One";
                    else if (type == 6)
                         myCmd.CommandText = "Update_XuatKho_Phache_To_Stock_One";
                    else if (type == 7)
                         myCmd.CommandText = "Update_XuatKho_To_Stock_One";
                    myCmd.CommandType = System.Data.CommandType.StoredProcedure;
                    myCmd.Parameters.Add("@ObjectId", System.Data.SqlDbType.Int);
                    myCmd.Parameters["@ObjectId"].Value = objId;

                    zgc0HelperSecurity.ExecuteProcedure(myCmd, zgc0GlobalStr.getSqlStr());
                }
                catch
                {
                    try
                    {
                        //transaction.Rollback();
                    }
                    catch
                    {

                    }
                }
            }//end using
        }//end proc

        //---------------------------------------------------------------------
 	}
}
