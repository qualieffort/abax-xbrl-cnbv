using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text;

namespace AbaxXBRLCore.Templates.Config
{
    public enum FormatoParrafo
    {
        [FontName("Arial")]
        [FontSize(7)]
        [Hidden(true)]
        [Bold(false)]
        [Color(0, 0, 0)]
        [Alignment(0)] // Left
        [LineSpacing(12)]
        VersionOculto = 0,

        [FontName("Arial")]
        [FontSize(12)]
        [Hidden(false)]
        [Bold(true)]
        [Color(0, 0, 0)]
        [Alignment(1)] // Center
        [LineSpacing(12)]
        CaratulaPlantilla = 1,

        [FontName("Cambria")]
        [FontSize(18)]
        [Hidden(false)]
        [Bold(true)]
        [Color(54, 95, 145)]
        [Alignment(0)] // Left
        [LineSpacing(13.8)]
        TituloInstruccion = 2,

        [FontName("Cambria")]
        [FontSize(18)]
        [Hidden(false)]
        [Bold(true)]
        [Color(54, 95, 145)]
        [Alignment(0)] // Left
        [LineSpacing(13.8)]
        TituloFormato = 3,

        [FontName("Cambria")]
        [FontSize(15)]
        [Hidden(false)]
        [Bold(true)]
        [Color(79, 129, 189)]
        [Alignment(0)] // Left
        [LineSpacing(13.8)]
        TituloContexto = 4,

        [FontName("Calibri")]
        [FontSize(9)]
        [Hidden(false)]
        [Bold(false)]
        [Color(0, 0, 0)]
        [Alignment(0)] // Left
        [LineSpacing(13.8)]
        TextoInstruccion = 5,

        [FontName("Consolas")]
        [FontSize(9)]
        [Hidden(false)]
        [Bold(false)]
        [Color(30, 30, 30)]
        [Alignment(0)] // Left
        [LineSpacing(12)]
        TextoConcepto = 6,

        [FontName("Cambria")]
        [FontSize(14)]
        [Hidden(false)]
        [Bold(true)]
        [Color(79, 129, 189)]
        [Alignment(0)] // Left
        [LineSpacing(12)]
        TextoContenido = 7,

        [FontName("Calibri")]
        [FontSize(11)]
        [Hidden(false)]
        [Bold(false)]
        [Color(0, 0, 0)]
        [Alignment(0)] // Left
        [LineSpacing(12)]
        TextoIndice = 8,

        [FontName("Consolas")]
        [FontSize(9)]
        [Hidden(false)]
        [Bold(false)]
        [Color(204, 0, 0)]
        [Alignment(0)] // Left
        [LineSpacing(12)]
        TextoConceptoObligatorio = 9,
    }

    public class FontNameAttribute : Attribute
    {
        private string FontName;
        public FontNameAttribute(string fontName) { FontName = fontName; }

        internal static string Get(FormatoParrafo formato)
        {
            if (formato != null)
            {
                MemberInfo[] mi = formato.GetType().GetMember(formato.ToString());
                if (mi != null && mi.Length > 0)
                {
                    FontNameAttribute attr = Attribute.GetCustomAttribute(mi[0],
                        typeof(FontNameAttribute)) as FontNameAttribute;
                    if (attr != null)
                    {
                        return attr.FontName;
                    }
                }
            }
            return null;
        }
    }

    public class FontSizeAttribute : Attribute
    {
        private double FontSize;
        public FontSizeAttribute(double fontSize) { FontSize = fontSize; }

        internal static double Get(FormatoParrafo formato)
        {
            if (formato != null)
            {
                MemberInfo[] mi = formato.GetType().GetMember(formato.ToString());
                if (mi != null && mi.Length > 0)
                {
                    FontSizeAttribute attr = Attribute.GetCustomAttribute(mi[0],
                        typeof(FontSizeAttribute)) as FontSizeAttribute;
                    if (attr != null)
                    {
                        return attr.FontSize;
                    }
                }
            }
            return 12;
        }
    }

    public class HiddenAttribute : Attribute
    {
        private bool Hidden;
        public HiddenAttribute(bool hidden) { Hidden = hidden; }

        internal static bool Get(FormatoParrafo formato)
        {
            if (formato != null)
            {
                MemberInfo[] mi = formato.GetType().GetMember(formato.ToString());
                if (mi != null && mi.Length > 0)
                {
                    HiddenAttribute attr = Attribute.GetCustomAttribute(mi[0],
                        typeof(HiddenAttribute)) as HiddenAttribute;
                    if (attr != null)
                    {
                        return attr.Hidden;
                    }
                }
            }
            return false;
        }
    }

    public class BoldAttribute : Attribute
    {
        private bool Bold;
        public BoldAttribute(bool bold) { Bold = bold; }

        internal static bool Get(FormatoParrafo formato)
        {
            if (formato != null)
            {
                MemberInfo[] mi = formato.GetType().GetMember(formato.ToString());
                if (mi != null && mi.Length > 0)
                {
                    BoldAttribute attr = Attribute.GetCustomAttribute(mi[0],
                        typeof(BoldAttribute)) as BoldAttribute;
                    if (attr != null)
                    {
                        return attr.Bold;
                    }
                }
            }
            return false;
        }
    }

    public class ColorAttribute : Attribute
    {
        private int Alpha;
        private int Red;
        private int Green;
        private int Blue;

        public ColorAttribute(int red, int green, int blue) : this(0, red, green, blue) {}

        public ColorAttribute(int alpha, int red, int green, int blue)
        {
            Alpha = alpha;
            Red = red;
            Green = green;
            Blue = blue;
        }

        internal static System.Drawing.Color Get(FormatoParrafo formato)
        {
            if (formato != null)
            {
                MemberInfo[] mi = formato.GetType().GetMember(formato.ToString());
                if (mi != null && mi.Length > 0)
                {
                    ColorAttribute attr = Attribute.GetCustomAttribute(mi[0],
                        typeof(ColorAttribute)) as ColorAttribute;
                    if (attr != null)
                    {
                        return System.Drawing.Color.FromArgb(attr.Alpha, attr.Red, attr.Green, attr.Blue);
                    }
                }
            }
            return System.Drawing.Color.Black;
        }
    }

    public class AlignmentAttribute : Attribute
    {
        private int Alignment;
        public AlignmentAttribute(int spacing) { Alignment = spacing; }

        internal static int Get(FormatoParrafo formato)
        {
            if (formato != null)
            {
                MemberInfo[] mi = formato.GetType().GetMember(formato.ToString());
                if (mi != null && mi.Length > 0)
                {
                    AlignmentAttribute attr = Attribute.GetCustomAttribute(mi[0],
                        typeof(AlignmentAttribute)) as AlignmentAttribute;
                    if (attr != null)
                    {
                        return attr.Alignment;
                    }
                }
            }
            return 0; // Default: Left
        }
    }

    public class LineSpacingAttribute : Attribute
    {
        private double LineSpacing;
        public LineSpacingAttribute(double lineSpacing) { LineSpacing = lineSpacing; }

        internal static double Get(FormatoParrafo formato)
        {
            if (formato != null)
            {
                MemberInfo[] mi = formato.GetType().GetMember(formato.ToString());
                if (mi != null && mi.Length > 0)
                {
                    LineSpacingAttribute attr = Attribute.GetCustomAttribute(mi[0],
                        typeof(LineSpacingAttribute)) as LineSpacingAttribute;
                    if (attr != null)
                    {
                        return attr.LineSpacing;
                    }
                }
            }
            return 12; // Default: 1.0 equals to 12 points
        }
    }
}
