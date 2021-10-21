using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;

namespace zgc0LibAdmin
{
    public class zgc0XhtmlPage : Page
    {
        private Regex typeMatcher;

        public zgc0XhtmlPage()
        {
            typeMatcher = new Regex(@"type=(""|')text/javascript(""|')", RegexOptions.IgnoreCase | RegexOptions.Compiled);
        }

        protected override void RenderChildren(HtmlTextWriter output)
        {
            //if (Environment.Version.Major < 2)
            //{
            StringWriter tempOutput = new StringWriter();
            base.RenderChildren(new HtmlTextWriter(tempOutput));

            string result = tempOutput.GetStringBuilder().ToString();
            result = FixEmptyTitleTag(result);
            //result = FixAutoPostbackElements(result);
            //result = RemoveScriptLanguageAttribute(result);
            result = FixFormNameAttribute(result);
            result = FixDoPostback(result);
            //result = FixViewState(result);
            output.Write(result);
            //}
            //else
            //{
            //base.RenderChildren(output);
            //}

        }

        private string FixEmptyTitleTag(string input)
        {
            string firstPass = Regex.Replace(input, @"<title>(.|\n)*?Untitled(.|\n)*?</title>", "", RegexOptions.Multiline);
            return Regex.Replace(firstPass, @"<title>\s*?</title>", "", RegexOptions.Multiline);
        }

        private string FixFormNameAttribute(string input)
        {
            return Regex.Replace(input, @"(?<beforeName><form.*?)(name="".*?"")(?<afterName>.*?>)",
                 new MatchEvaluator(NameStateMatchEvaluator));
        }
        private string FixDoPostback(string input)
        {
            Control form = FindForm();

            return Regex.Replace(input, @"theform\s+=\s+document\..*?;",
                string.Format("theform = document.getElementById(\"{0}\");",
                form.ClientID)
                );
        }

        private Control FindForm()
        {
            ControlCollection targetCollection = Controls;

            /*   if (this.Controls[0].GetType().BaseType.BaseType.ToString().IndexOf("MasterPage") >= 0)
               {
                   targetCollection = this.Controls[0].Controls;
               }
            */
            foreach (Control current in targetCollection)
            {
                if (current.GetType() == typeof(HtmlForm))
                    return current;
            }

            return null;
        }

        private string NameStateMatchEvaluator(Match match)
        {
            return match.Groups["beforeName"].Value + match.Groups["afterName"].Value;
        }

        private string FixAutoPostbackElements(string input)
        {
            return Regex.Replace(input, @"<(?<beforeLanguage>(input.*?type=""submit"".*?)?(input.*?type=""text"".*?)?(input.*?type=""radio"".*?)?(input.*?type=""checkbox"".*?)?(select.*?)?)(language="".*?"")(?<afterLanguage>.*?>)",
                new MatchEvaluator(LanguageInAutoPostBackEvaluator));
        }

        private string LanguageInAutoPostBackEvaluator(Match match)
        {
            return "<" + match.Groups["beforeLanguage"].Value + match.Groups["afterLanguage"].Value;
        }

        private string RemoveScriptLanguageAttribute(string input)
        {
            Regex scriptMatcher = new Regex(@"(?<beforeLanguage><script[^<>]*?)(?<language>language=(""|')javascript(""|'))(?<afterLanguage>[^<>]*?>)", RegexOptions.IgnoreCase);
            return scriptMatcher.Replace(input, new MatchEvaluator(ScriptLanguageEvaluator));
        }

        private string ScriptLanguageEvaluator(Match match)
        {
            string before = match.Groups["beforeLanguage"].Value;
            string after = match.Groups["afterLanguage"].Value;

            bool typeBefore = this.typeMatcher.IsMatch(before);
            bool typeAfter = this.typeMatcher.IsMatch(after);

            if (typeBefore || typeAfter)
            {
                return before + after;
            }
            else
            {
                return before + " type=\"text/javascript\" " + after;
            }
        }

        private string FixViewState(string input)
        {
            string result = Regex.Replace(input,
                @"(?<viewstate><input\stype=""hidden""\sname=""__EVENTTARGET"".*?/>)",
                new MatchEvaluator(ViewStateMatchEvaluator));
            result = Regex.Replace(result,
                @"(?<viewstate><input\stype=""hidden""\sname=""__EVENTARGUMENT"".*?/>)",
                new MatchEvaluator(ViewStateMatchEvaluator));
            result = Regex.Replace(result,
                @"(?<viewstate><input\stype=""hidden""\sname=""__VIEWSTATE"".*?/>)",
                new MatchEvaluator(ViewStateMatchEvaluator));
            result = Regex.Replace(result,
                @"(?<viewstate><input\stype=""hidden""\sname=""__LASTFOCUS"".*?/>)",
                new MatchEvaluator(ViewStateMatchEvaluator));

            result = Regex.Replace(result,
                @"(?<viewstate><input\stype=""hidden""\sname=""__EVENTVALIDATION"".*?/>)",
                new MatchEvaluator(ViewStateMatchEvaluator));

            return result;
        }

        private string ViewStateMatchEvaluator(Match match)
        {
            string viewState = match.Groups["viewstate"].Value;
            return "<div>" + viewState + "</div>";
        }
    }
}
