using System;

using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Transactions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Repository.Implementation;
using AopAlliance.Intercept;
using Spring.Stereotype;

namespace AbaxXBRLCore.Services.Implementation
{
    public class TransaccionInterceptor : IMethodInterceptor
    {        
        public ObjectContextAdapter ObjectContextAdapter { get; set; }
        
        public object Invoke(IMethodInvocation invocation)
        {
            object resultadoMetodo = invocation.Proceed();
            /*using (var transactionScope = new TransactionScope())
            {
                var unitOfWork = new UnitOfWork(ObjectContextAdapter);            
                unitOfWork.Commit();     
                transactionScope.Complete();

            }
            var contextAdapter = new ObjectContextAdapter(context);
                                 */
            return resultadoMetodo;
        }
    }
}
