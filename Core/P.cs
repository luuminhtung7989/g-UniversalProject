// Decompiled with JetBrains decompiler
// Type: zgcServives.P
// Assembly: zgcServives, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: E519A6C2-9558-451A-8580-B565FCB1E7D0
// Assembly location: C:\LuuMinhTung\KernelServices\bin\zgcServives.dll

using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace zgcServives
{
  public class P
  {
    public static async Task<object> GetDataAsync(string dataInput)
    {
      StringBuilder result = new StringBuilder();
      using (HttpClient client = new HttpClient())
      {
        client.Timeout = TimeSpan.FromMinutes(60.0);
        //client.BaseAddress = new Uri(Microsoft.AspNetCore.Http.HttpContext.Request.Url.AbsoluteUri);
        byte[] Authorization = Encoding.ASCII.GetBytes("ticket@baolau.vn:123456");
        AuthenticationHeaderValue header = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Authorization));
        client.DefaultRequestHeaders.Authorization = header;
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Authorization));
        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        //ServicePointManager.CertificatePolicy = (ICertificatePolicy) new LmtPolicy();
        Random r = new Random();
        try
        {
           HttpResponseMessage response = client.GetAsync("http://kernel.axmsoft.com//api/CallBack?Param=" + dataInput + "&r=" + r.Next().ToString()).Result;
          if (response.IsSuccessStatusCode)
          {
            Task<string> data = response.Content.ReadAsStringAsync();
            return (object) data.Result;
          }
          result.Append(string.Format("Error Code:-{0}  Error Details: {1}", (object) (int) response.StatusCode, (object) response.ReasonPhrase));
          response = (HttpResponseMessage) null;
        }
        catch (Exception ex)
        {
          result.Append(ex.ToString());
        }
        Authorization = (byte[]) null;
        header = (AuthenticationHeaderValue) null;
        r = (Random) null;
      }
      return (object) result.ToString();
    }
  }
}
