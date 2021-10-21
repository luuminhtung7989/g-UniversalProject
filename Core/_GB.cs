namespace WebApplication.Core
{
    public class C
    {
        public string[] T { get; set; }
    }
    public class R
    {
        public int _s { get; set; }
        public object _d { get; set; }
        public int _t { get; set; }
        public bool _e { get { return _s.Equals(0); } }
    }
    public class Rs
    {
        public string Result { get; set; }
        public object Records { get; set; }
        public int TotalRecordCount { get; set; }
    }
}
