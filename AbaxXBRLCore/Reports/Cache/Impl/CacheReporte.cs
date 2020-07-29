using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Cache.Impl
{
    public class CacheReporte<K,T> : ICacheReporte<K, T>
    {
        private IDictionary<K, T> cacheMap;

        public CacheReporte()
        {
		    cacheMap = new Dictionary<K, T>();
	    }	

	    public void agregar(K llave, T tipo) {
		    cacheMap.Add(llave, tipo);
	    }

        public T obtener(K llave)
        {
            if (cacheMap.ContainsKey(llave))
            {
                return cacheMap[llave];
            }
            return default(T);
	    }
	
	    public bool existe(K llave) 
        {
		    return cacheMap.ContainsKey(llave);
	    }

	    public void eliminar(K llave) 
        {
		    cacheMap.Remove(llave);
	    }

	    public int longitud() 
        {
		    return cacheMap.Count();
	    }
	
	    public void limpiar() {
            cacheMap.Clear();
	    }

    }
}
