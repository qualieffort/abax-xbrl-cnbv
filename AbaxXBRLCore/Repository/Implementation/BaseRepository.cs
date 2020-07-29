#region


using System.Data.Entity;
using AbaxXBRLCore.Entities;
using EntityFramework.BulkInsert.Extensions;
using AbaxXBRLCore.DbContext;
using System.Linq.Expressions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;


#endregion

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementacion de Repositorio Base
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        
        public AbaxDbEntities DbContext
        {
            get {
                 return ContextManager.GetDBContext(); 
            }
        }

        public IQueryable<T> GetAll()
        {
            return DbContext.Set<T>().AsNoTracking();
        }

        public T GetById(long id)
        {
            var entidad = DbContext.Set<T>().Find(id);
            if (entidad != null)
            {
               var entry = DbContext.Entry(entidad);
               entry.Reload();
            }

            return entidad;
        }

        public T GetById(int id)
        {
            var entidad = DbContext.Set<T>().Find(id);
            if (entidad != null)
            {
                var entry = DbContext.Entry(entidad);
                entry.Reload();
            }

            return entidad;
        }

        public void Add(T entity)
        {
            DbEntityEntry dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != EntityState.Detached)
            {
                dbEntityEntry.State = EntityState.Added;
            }
            else
            {
                DbContext.Set<T>().Add(entity);
            }
            DbContext.Database.CommandTimeout = 180;
            DbContext.SaveChanges();
        }
        

        public void DeleteByCondition(Expression<Func<T, bool>> filter = null)
        {
            foreach (var obj in DbContext.Set<T>().Where(filter))
            {
                Delete(obj);
            }
            DbContext.SaveChanges();
        }

      
        public void AddAll(IList<T> entities)
        {
            foreach (var entity in entities)
            {
                DbEntityEntry dbEntityEntry = DbContext.Entry(entity);
                if (dbEntityEntry.State != EntityState.Detached)
                {
                    dbEntityEntry.State = EntityState.Added;
                }
                else
                {
                    DbContext.Set<T>().Add(entity);
                }
            }
            DbContext.SaveChanges();
        }

        public void Update(T entity)
        {
            
            DbEntityEntry dbEntityEntry = DbContext.Entry(entity);
            
            if (dbEntityEntry.State == EntityState.Detached)
            {
                DbContext.Set<T>().Attach(entity);
            }
            dbEntityEntry.State = EntityState.Modified;
            DbContext.SaveChanges();
            dbEntityEntry.Reload();
        }

        public void AddOrUpdate(T entity)
        {
            DbContext.Set<T>().Attach(entity);
            DbContext.SaveChanges();
        }

   

        public void Delete(T entity)
        {
            DbEntityEntry dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != EntityState.Deleted)
            {
                dbEntityEntry.State = EntityState.Deleted;
            }
            else
            {
                DbContext.Set<T>().Attach(entity);
                DbContext.Set<T>().Remove(entity);
            }
            DbContext.SaveChanges();
        }

        public void DeleteCascade(T entity)
        {
            DbContext.Set<T>().Remove(entity);
            DbContext.SaveChanges();
        }

        public void DeleteAll(ICollection<T> entities)
        {
            foreach (var entity in entities)
            {
                DbEntityEntry dbEntityEntry = DbContext.Entry(entity);
                if (dbEntityEntry.State != EntityState.Deleted)
                {
                    dbEntityEntry.State = EntityState.Deleted;
                }
                else
                {
                    DbContext.Set<T>().Attach(entity);
                    DbContext.Set<T>().Remove(entity);
                }
            }
            DbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var entity = GetById(id);
            if (entity == null) return; // not found; assume already deleted.
            Delete(entity);
            DbContext.SaveChanges();
        }


        public virtual IEnumerable<T> Get(Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string includeProperties = "")
        {
            IQueryable<T> query = DbContext.Set<T>();
            

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split
                (new[] {','}, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if (orderBy != null)
            {
                return orderBy(query.AsNoTracking()).ToList();
            }
            return query.AsNoTracking().ToList();
        }


        public virtual IQueryable<T> GetQueryable(Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string includeProperties = "")
        {
            IQueryable<T> query = DbContext.Set<T>();

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split
                (new[] {','}, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if (orderBy != null)
            {
                return orderBy(query.AsNoTracking());
            }
            return query.AsNoTracking();
        }

        public void Delete(long id)
        {
            var entity = GetById(id);
            if (entity == null) return; // not found; assume already deleted.
            Delete(entity);
            DbContext.SaveChanges();
        }

        public IEnumerable<T> ExecuteQuery(String query)
        {
            return DbContext.Database.SqlQuery<T>(query);
        }

        public int ExecuteCommand(String query)
        {
            return DbContext.Database.ExecuteSqlCommand(query);
        }

        public List<T> ExecuteQueryToDbContext(string query)
        {
            
            var objectContext = new ObjectContext(DbContext.Database.Connection.ConnectionString);
            return objectContext.ExecuteStoreQuery<T>(query).ToList();
        }


        public IEnumerable<T> ExecuteQuery(String query, object[] param)
        {
            return DbContext.Database.SqlQuery<T>(query, param);
        }

        public int ExecuteCommand(String query, object[] param)
        {
            return DbContext.Database.ExecuteSqlCommand(query, param);
        }

        public List<T> ExecuteQueryToDbContext(string query, object[] param)
        {

            var objectContext = new ObjectContext(DbContext.Database.Connection.ConnectionString);
            return objectContext.ExecuteStoreQuery<T>(query).ToList();
        }

        public void BulkInsert(IEnumerable<T> entities)
        {
            DbContext.Database.CommandTimeout = 180;
            DbContext.BulkInsert(entities);
            DbContext.SaveChanges(); 
                                                        
        }

        public void AgregarTodos(IEnumerable<T> entities)
        {
            DbContext.Database.CommandTimeout = 180;
            DbContext.Set<T>().AddRange(entities);
            DbContext.SaveChanges();
        }

        public void Commit()
        {
            DbContext.SaveChanges();
        }


    }
}