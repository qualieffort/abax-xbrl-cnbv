using Spring.Context;
using Spring.Context.Support;

namespace AbaxXBRLWeb.App_Code.Common.Service
{
    public class ServiceLocator
    {
        /// <summary>
        /// Variable estática con el contexto de spring a utilizar, esta variable se pede configurar para las pruebas unitarias del componente
        /// </summary>
        public static IApplicationContext ContextoSpring = null;

        /// <summary>
        /// Obtiene la fábrica de Spring.
        /// </summary>
        /// <returns>la fábrica de Spring.</returns>
        public static IApplicationContext ObtenerFabricaSpring()
        {
            return ContextoSpring ?? WebApplicationContext.Current;
            //return ContextoSpring ?? ContextRegistry.GetContext();
        }
    }
}