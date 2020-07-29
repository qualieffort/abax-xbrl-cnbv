using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

namespace AbaxXBRLCore.Common.Util
{
    public static class ExtensionsMethods
    {

        public static IEnumerable<TSource> DistinctBy<TSource, TKey>
    (this IQueryable<TSource> source, Func<TSource, TKey> keySelector)
        {
            HashSet<TKey> seenKeys = new HashSet<TKey>();
            foreach (TSource element in source)
            {
                if (seenKeys.Add(keySelector(element)))
                {
                    yield return element;
                }
            }
        }



        public static string ToDescription(this Enum en) //ext method
        {

            Type type = en.GetType();

            MemberInfo[] memInfo = type.GetMember(en.ToString());

            if (memInfo != null && memInfo.Length > 0)
            {

                object[] attrs = memInfo[0].GetCustomAttributes(
                                              typeof(DescriptionAttribute),

                                              false);

                if (attrs != null && attrs.Length > 0)

                    return ((DescriptionAttribute)attrs[0]).Description;

            }

            return en.ToString();

        }

        public static CategoriasFacultad? ToCategory(this Enum en) //ext method
        {

            Type type = en.GetType();

            MemberInfo[] memInfo = type.GetMember(en.ToString());

            if (memInfo != null && memInfo.Length > 0)
            {

                object[] attrs = memInfo[0].GetCustomAttributes(
                                              typeof(CategoriaTypeAttribute),

                                              false);

                if (attrs != null && attrs.Length > 0)

                    return ((CategoriaTypeAttribute)attrs[0]).CaterogoriaFacultad;

            }

            return null;

        }

        public static String NombreCompleto(this Usuario usr)
        {
            var nom = "";
            if (usr != null)
            {
                nom = usr.Nombre + " " + usr.ApellidoPaterno + " " + usr.ApellidoMaterno;
            }
            return nom;
        }
        public static String NombreCompleto(this UsuarioDto usr)
        {
            var nom = "";
            if (usr != null)
            {
               nom = usr.Nombre + " " + usr.ApellidoPaterno + " " + usr.ApellidoMaterno;
            }
            return nom;
        }

    }
}
