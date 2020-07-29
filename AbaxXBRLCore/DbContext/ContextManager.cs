using System.Diagnostics;
using System.Runtime.CompilerServices;
using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.DbContext
{
    /// <summary>
    /// Clase manager para mantener una referencia a un contexto de entidades
    /// en el alcance del hilo de ejecución.
    /// </summary>
    public class ContextManager: IDisposable
    {
        [ThreadStatic]
        private static AbaxDbEntities DbContext;

        
        public static AbaxDbEntities GetDBContext()
        {
            if (DbContext == null)
            {
                DbContext = new AbaxDbEntities();
                DbContext.Configuration.AutoDetectChangesEnabled = false;
                DbContext.Configuration.ValidateOnSaveEnabled = false;
            }
            return DbContext;
        }

        
        public void Dispose()
        {
            if (DbContext == null) return;
            try
            {
                DbContext.Dispose();
                DbContext = null;
            }
            catch(Exception ex)
            {
                Debug.WriteLine(ex.StackTrace)
                ;
            }
        }
    }
}
