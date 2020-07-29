using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLCore.CellStore.Services.Impl;
using System.IO;
using TestAbaxXBRL.Dtos.Mongo;
using AbaxXBRLCore.Common.Util;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestGeneraReportePersonasResponsablesMongo
    {
        private String ConectionString = "mongodb://localhost/consultas";
        private String DatabaseName = "consultas";
        private String JsonErrorDirectory = "../../TestOutput/ErrorJSON";
        private String PathArchivoPersonasResponsables = "../../TestOutput/ConsultasMongo/PersonasResponsables/PersonasResponsables.csv";

        [TestMethod]
        public void ConsultaPersonasResponsables()
        {
            var AbaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            AbaxXBRLCellStoreMongo.ConnectionString = ConectionString;
            AbaxXBRLCellStoreMongo.DataBaseName = DatabaseName;
            AbaxXBRLCellStoreMongo.JSONOutDirectory = JsonErrorDirectory;
            AbaxXBRLCellStoreMongo.Init();
            var listaElementos = AbaxXBRLCellStoreMongo.ConsultaElementos<MapaPersonasResponsables>("PersonasResponsablesReducido", "{}");
            var diccionarioElementosInstitucion = new Dictionary<String, IList<MapaPersonasResponsables>>();
            var diccionarioInstituciones = new Dictionary<String, MapaPersonasResponsables>();
            var diccionarioPorPersona = new Dictionary<String, PersonaResponsable>();
            foreach (var elemento in listaElementos)
            {
                elemento.HashInstitucion = CreaHashInstitucion(elemento);
                if (elemento.IdConcepto.Equals("ar_pros_ResponsiblePersonInstitution"))
                {
                    if (!diccionarioInstituciones.ContainsKey(elemento.HashInstitucion))
                    {

                        diccionarioInstituciones.Add(elemento.HashInstitucion, elemento);
                    }
                } else if (!String.IsNullOrEmpty(elemento.IdSecuenciaPersona))
                {
                    elemento.HashPersona = UtilAbax.CalcularHash(elemento.HashInstitucion + elemento.IdSecuenciaPersona);
                    IList<MapaPersonasResponsables> listaPersonasMap;
                    if (!diccionarioElementosInstitucion.TryGetValue(elemento.HashInstitucion, out listaPersonasMap))
                    {
                        listaPersonasMap = new List<MapaPersonasResponsables>();
                        diccionarioElementosInstitucion.Add(elemento.HashInstitucion, listaPersonasMap);
                    }
                    listaPersonasMap.Add(elemento);

                }
            }

            foreach (var hashInstitucion in diccionarioElementosInstitucion.Keys)
            {
                MapaPersonasResponsables elementoInstitucion;
                IList<MapaPersonasResponsables> listaElementosIterar;
                if (!diccionarioInstituciones.TryGetValue(hashInstitucion, out elementoInstitucion) || 
                    !diccionarioElementosInstitucion.TryGetValue(hashInstitucion, out listaElementosIterar))
                {
                    continue;
                }
                
                foreach (var elemento in listaElementosIterar)
                {
                    PersonaResponsable personaResponsable;
                    if (!diccionarioPorPersona.TryGetValue(elemento.HashPersona, out personaResponsable))
                    {
                        personaResponsable = new PersonaResponsable();
                        personaResponsable.Entidad = elementoInstitucion.Entidad;
                        personaResponsable.Fecha = elementoInstitucion.Fecha;
                        personaResponsable.TipoPersonaResponsable = elementoInstitucion.TipoPersonaResponsable;
                        personaResponsable.Institucion = elementoInstitucion.Valor;
                        personaResponsable.IdTipoPersonaResponsable = elementoInstitucion.IdTipoPersonaResponsable;
                        diccionarioPorPersona.Add(elemento.HashPersona, personaResponsable);
                        if (String.IsNullOrEmpty(personaResponsable.TipoPersonaResponsable))
                        {
                            personaResponsable.TipoPersonaResponsable = DeterminaEtiquetaTipoPersonaResponsable(elementoInstitucion.IdTipoPersonaResponsable);
                        }
                    }
                    if (elemento.IdConcepto.Equals("ar_pros_ResponsiblePersonPosition"))
                    {
                        personaResponsable.Cargo = elemento.Valor;
                    } else if (elemento.IdConcepto.Equals("ar_pros_ResponsiblePersonName"))
                    {
                        personaResponsable.Nombre = elemento.Valor;
                    }
                }
            }
            //if (File.Exists(PathArchivoPersonasResponsables))
            //{
            //    File.Delete(PathArchivoPersonasResponsables);
            //}
            //File.Create(PathArchivoPersonasResponsables);
            using (StreamWriter w = File.AppendText(PathArchivoPersonasResponsables))
            {
                foreach (var hashPersona in diccionarioPorPersona.Keys)
                {
                    var persona = diccionarioPorPersona[hashPersona];
                    var linea = CreaLineaPersonaResponsable(persona);
                    w.Write(linea);
                    //File.AppendAllText(PathArchivoPersonasResponsables, "text content" + Environment.NewLine);
                }
                w.Close();
            }
        }

        public String CreaLineaPersonaResponsable(PersonaResponsable persona)
        {
            var linea = new StringBuilder();
            linea.Append("\"");
            linea.Append(persona.Fecha.ToString("yyyy-MM-dd"));
            linea.Append("\",\"");
            linea.Append(persona.Entidad);
            linea.Append("\",\"");
            if (!String.IsNullOrEmpty(persona.TipoPersonaResponsable))
            {
                linea.Append(persona.TipoPersonaResponsable);
            }
            else
            {
                linea.Append(persona.IdTipoPersonaResponsable);
            }
            linea.Append("\",\"");
            linea.Append(DepuraCadena(persona.Institucion));
            linea.Append("\",\"");
            linea.Append(DepuraCadena(persona.Cargo));
            linea.Append("\",\"");
            linea.Append(DepuraCadena(persona.Nombre));
            linea.Append("\"\n");
            return linea.ToString();
        }

        public String DeterminaEtiquetaTipoPersonaResponsable(String idTipoPersonaResponsable)
        {

            if (idTipoPersonaResponsable.Equals("ar_pros_CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member"))
            {
                return "Director General, Director de Finanzas y Director Jurídico o sus equivalentes";
            }
            if (idTipoPersonaResponsable.Equals("ar_pros_ExternalAuditorRepresentativeAndAuditorA33N12Member"))
            {
                return "Auditor Externo (Representante y Auditor)";
            }
            if (idTipoPersonaResponsable.Equals("ar_pros_ExternalAuditorRepresentativeAndAuditorA33N12Member"))
            {
                return "Auditor Externo (Representante y Auditor)";
            }
            if (idTipoPersonaResponsable.Equals("ar_pros_LegalRepresentativeOfTheTrustA33N13Member"))
            {
                return "Representante Legal del Fiduciario";
            }
            if (idTipoPersonaResponsable.Equals("ar_pros_CeoCfoAndGeneralCounselOrTheirEquivalentsOfTheSettlorOrThirdPartialDependenceExistsA33N13Member"))
            {
                return "Director General, Director de Finanzas y Director Jurídico o sus equivalentes del fideicomitente o tercero del que exista dependencia parcial";
            }
            if (idTipoPersonaResponsable.Equals("ar_pros_LegalRepresentativeOfTheCommonRepresentativeA33N13Member"))
            {
                return "Representante Legal del Representante Común";
            }
            if (idTipoPersonaResponsable.Equals("ar_pros_LegalRepresentativeOfTheTrustA33N14Member"))
            {
                return "Representante Legal del Fiduciario";
            }
            if (idTipoPersonaResponsable.Equals("ar_pros_CeoCfoAndGeneralCounselOrEquivalentAdministratorOrOperatorOfTheTrustSecuritiesA33N14Member"))
            {
                return "Director General, Director de Finanzas y Director Jurídico o sus equivalentes del administrador u operador de los valores fideicomitidos";
            }
            if (idTipoPersonaResponsable.Equals("ar_pros_LegalRepresentativeOfTheCommonRepresentativeA33N14Member"))
            {
                return "Representante Legal del Representante Común";
            }
            



            return "";
        }

        public String DepuraCadena(String cadena)
        {
            return cadena.Replace("\"", "'");
        }

        public String CreaHashInstitucion(MapaPersonasResponsables elemento)
        {
            var builder = new StringBuilder();
            builder.Append(elemento.Fecha.ToString());
            builder.Append(elemento.Entidad);
            builder.Append(elemento.IdTipoPersonaResponsable);
            builder.Append(elemento.IdSecuenciaInstitucion);
            return UtilAbax.CalcularHash(builder.ToString());
        }
        

    }
}
