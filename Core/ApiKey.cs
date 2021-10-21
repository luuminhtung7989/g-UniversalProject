// Decompiled with JetBrains decompiler
// Type: zgcServives.ApiKey
// Assembly: zgcServives, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: E519A6C2-9558-451A-8580-B565FCB1E7D0
// Assembly location: C:\LuuMinhTung\KernelServices\bin\zgcServives.dll

using System;
using System.Collections.Generic;
using System.Data;
using System.Security.Cryptography;
using System.Text;
using zgcSpaceKernel.Core;
using zgcLibCore;

namespace zgcServives
{
    internal class ApiKey
    {
        public static Dictionary<string, Dictionary<string, string>> dictionary = (Dictionary<string, Dictionary<string, string>>)null;

        public ApiKey() => ApiKey.LoadDataFromDb("");

        public static bool CheckAuthorication(string strAPIkey, string ModelDb, string url = "", string weburl = "")
        {
            if (ApiKey.dictionary == null)
                ApiKey.LoadDataFromDb(ModelDb);
            bool flag = true;
            if (ApiKey.dictionary.ContainsKey(strAPIkey))
            {
                Dictionary<string, string> dictionary = ApiKey.dictionary[strAPIkey];
                if (dictionary.ContainsKey("lockedaccount") && dictionary["lockedaccount"] == "1" || url != "" && dictionary.ContainsKey("ulr") && dictionary["ulr"] != url)
                    return false;
                if (weburl != "" && dictionary.ContainsKey(nameof(weburl)) && dictionary[nameof(weburl)] != weburl)
                    return false;
            }
            else
                flag = false;
            return flag;
        }

        public static void LoadDataFromDb(string ModelDb)
        {
            ApiKey.dictionary = new Dictionary<string, Dictionary<string, string>>();
            int maxSize = 24;
            Random random = new Random();
            DataTable dataTableNew = zgcHelper.GetDataSet("SELECT * FROM [UserDevAuth] ", DGobal.SqlString("gbDatabaseDb")).Tables[0];
            if (dataTableNew != null)
            {
                for (int index = 0; index < dataTableNew.Rows.Count; ++index)
                {
                    string key = dataTableNew.Rows[index]["APIkey"].ToString();
                    ApiKey.dictionary.Add(key, new Dictionary<string, string>()
                    {
                        ["AuthoId"] = "AuthoId",
                        ["UserId"] = "UserId",
                        ["APIkey"] = dataTableNew.Rows[index]["APIkey"].ToString(),
                        ["username"] = dataTableNew.Rows[index]["UserName"].ToString(),
                        ["password"] = "password",
                        ["salt"] = "username",
                        ["hashpassword"] = "hashpassword",
                        ["phone"] = "phone",
                        ["email"] = "email",
                        ["firstname"] = "firstname",
                        ["lastname"] = "lastname",
                        ["companyname"] = "companyname",
                        ["ulr"] = "ulr",
                        ["weburl"] = "weburl",
                        ["adroidapp"] = "adroidapp",
                        ["iosapp"] = "iosapp",
                        ["createdate"] = "createdate",
                        ["lastsincedate"] = "lastsincedate",
                        ["lockedaccount"] = "lockedaccount",
                        ["role"] = "role",
                        ["updatedate"] = "updatedate",
                        ["refId"] = "refId",
                        ["refAgentId"] = "refAgentId"
                    });
                }
            }
            if (dataTableNew != null && dataTableNew.Rows.Count > 0)
                return;
            for (int index = 0; index < 10; ++index)
            {
                string uniqueKey = ApiKey.GetUniqueKey(maxSize);
                Dictionary<string, string> dictionary = new Dictionary<string, string>();
                dictionary["AuthoId"] = "AuthoId";
                dictionary["UserId"] = "UserId";
                dictionary["APIkey"] = uniqueKey;
                dictionary["username"] = "username" + random.Next(1000, 9000).ToString();
                dictionary["password"] = "password";
                dictionary["salt"] = "username";
                dictionary["hashpassword"] = "hashpassword";
                dictionary["phone"] = "phone";
                dictionary["email"] = "email";
                dictionary["firstname"] = "firstname";
                dictionary["lastname"] = "lastname";
                dictionary["companyname"] = "companyname";
                dictionary["ulr"] = "ulr";
                dictionary["weburl"] = "weburl";
                dictionary["adroidapp"] = "adroidapp";
                dictionary["iosapp"] = "iosapp";
                dictionary["createdate"] = "createdate";
                dictionary["lastsincedate"] = "lastsincedate";
                dictionary["lockedaccount"] = "lockedaccount";
                dictionary["role"] = "role";
                dictionary["updatedate"] = "updatedate";
                dictionary["refId"] = "refId";
                dictionary["refAgentId"] = "refAgentId";
                ApiKey.dictionary.Add(uniqueKey, dictionary);
                zgcHelper.ExecuteNonQuery(String.Format("INSERT INTO [UserDevAuth] (ModelDb,UserName,APIKey) values ('{0}','{1}','{2}')", ModelDb, (string)dictionary["username"], (string)uniqueKey), DGobal.SqlString("gbDatabaseDb"));
            }
        }

        public static string GetUniqueKey(int maxSize, bool bUpper = false)
        {
            char[] chArray = new char[69];
            char[] charArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+=-$%!@#*".ToCharArray();
            byte[] data1 = new byte[1];
            RNGCryptoServiceProvider cryptoServiceProvider = new RNGCryptoServiceProvider();
            cryptoServiceProvider.GetNonZeroBytes(data1);
            byte[] data2 = new byte[maxSize];
            cryptoServiceProvider.GetNonZeroBytes(data2);
            StringBuilder stringBuilder = new StringBuilder(maxSize);
            foreach (byte num in data2)
                stringBuilder.Append(charArray[(int)num % charArray.Length]);
            return bUpper ? stringBuilder.ToString().ToUpper() : stringBuilder.ToString();
        }
    }
}
