using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}
