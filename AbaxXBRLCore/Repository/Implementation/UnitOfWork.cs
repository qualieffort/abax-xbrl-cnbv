using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Transactions;

namespace AbaxXBRLCore.Repository.Implementation
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IObjectContext _objectContext;
 
        public UnitOfWork(IObjectContext objectContext)
        {
            _objectContext = objectContext;
        }
 
        public void Dispose()
        {
            if (_objectContext != null)
            {
                _objectContext.Dispose();
            }
            GC.SuppressFinalize(this);
        }
 
        public void Commit()
        {
           
                _objectContext.SaveChanges();
                
            
        }
    }
}
