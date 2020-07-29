using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository.Implementation
{
    public class ObjectContextAdapter : IObjectContext
    {
        public AbaxDbEntities Context;

        public ObjectContextAdapter(AbaxDbEntities context)
        {
            Context = context;
        }

        public void Dispose()
        {
            Context.Dispose();
        }

        //public IObjectSet<T> CreateObjectSet<T>() where T : class
        //{
        //    return _context.CreateObjectSet<T>();
        //}

        public void SaveChanges()
        {
            Context.SaveChanges();
        }
    }
}
