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
	public class zgc0Project
	{
        public zgc0Project()
		{
			//
			// TODO: Add constructor logic here
			//
		}
        //Nơi gọi sẽ gọi như thế này
        //MethodInfo pre = typeof(zgc0Project).GetMethod("GetValue2");
        //if (pre != null)
        //{
        //    zgc0Project tmpObj = new zgc0Project();

        //    object[] parammeter = new object[4];  parammeter[0] = filter;  parammeter[1] = (int)(1); parammeter[2] = (double)2.0;
        //    parammeter[3] = DateTime.Now;
        //    pre.Invoke(tmpObj, parammeter);// sử dụng gọi method
        //}

        public static void LogDatabaseOperation(string username, int canBoId, string operation, string tableName, 
                        string description, DateTime time, string remoteAdd, string remoteHost, string remotePort)
        {
            
            SqlCommand myCmd = new SqlCommand();

       
            myCmd.CommandType = CommandType.StoredProcedure;

            myCmd.CommandText = "gcGOBAL_PROC_LogDatabaseOperation";
            myCmd.Parameters.Add("@username", SqlDbType.NVarChar);
            myCmd.Parameters["@username"].Value = username;

            myCmd.Parameters.Add("@canBoId", SqlDbType.Int);
            myCmd.Parameters["@canBoId"].Value = canBoId;

            myCmd.Parameters.Add("@operation", SqlDbType.NVarChar);
            myCmd.Parameters["@operation"].Value = operation;

            myCmd.Parameters.Add("@tableName", SqlDbType.NVarChar);
            myCmd.Parameters["@tableName"].Value = tableName;


            myCmd.Parameters.Add("@description", SqlDbType.NVarChar);
            myCmd.Parameters["@description"].Value = description;

            myCmd.Parameters.Add("@time", SqlDbType.DateTime);
            myCmd.Parameters["@time"].Value = time;

            myCmd.Parameters.Add("@RemoteClientAdd", SqlDbType.NVarChar);
            myCmd.Parameters["@RemoteClientAdd"].Value = (remoteAdd==null)?"":remoteAdd;
            myCmd.Parameters.Add("@RemoteClientHost", SqlDbType.NVarChar);
            myCmd.Parameters["@RemoteClientHost"].Value = (remoteHost == null) ? "" : remoteHost; 
            myCmd.Parameters.Add("@RemoteClientPort", SqlDbType.NVarChar);
            myCmd.Parameters["@RemoteClientPort"].Value = (remotePort == null) ? "" : remotePort;
            zgc0HelperSecurity.ExecuteProcedure(myCmd, zgc0GlobalStr.getSqlStr());
        }

        public static void LogErrorOperation(string username, int canBoId, string operation, string tableName, string description, DateTime time)
        {

                SqlCommand myCmd = new SqlCommand();
                myCmd.CommandType = CommandType.StoredProcedure;

                myCmd.CommandText = "gcGOBAL_PROC_LogErrorOperation";
                myCmd.Parameters.Add("@username", SqlDbType.NVarChar);
                myCmd.Parameters["@username"].Value = username;

                myCmd.Parameters.Add("@canBoId", SqlDbType.Int);
                myCmd.Parameters["@canBoId"].Value = canBoId;

                myCmd.Parameters.Add("@operation", SqlDbType.NVarChar);
                myCmd.Parameters["@operation"].Value = operation;

                myCmd.Parameters.Add("@tableName", SqlDbType.NVarChar);
                myCmd.Parameters["@tableName"].Value = tableName;


                myCmd.Parameters.Add("@description", SqlDbType.NVarChar);
                myCmd.Parameters["@description"].Value = description;

                myCmd.Parameters.Add("@time", SqlDbType.DateTime);
                myCmd.Parameters["@time"].Value = time;

                zgc0HelperSecurity.ExecuteProcedure(myCmd, zgc0GlobalStr.getSqlStr());
        }

        
    }
}
