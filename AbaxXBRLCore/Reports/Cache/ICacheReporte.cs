using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Cache
{

    public interface ICacheReporte<K, T>
    {
        void agregar(K llave, T tipo);

        T obtener(K llave);

        bool existe(K llave);

        void eliminar(K llave);

        int longitud();

        void limpiar();
    }
}
