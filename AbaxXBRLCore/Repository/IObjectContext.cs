using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository
{
    public interface IObjectContext : IDisposable
    {
        //IObjectSet<T> CreateObjectSet<T>() where T : class;
        void SaveChanges();
    }
}
