#region

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AbaxXBRLCore.Entities;

#endregion

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    ///     Interface del repositorio base para operaciones de BD.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IBaseRepository<T> where T : class
    {
        AbaxDbEntities DbContext { get; }

        /// <summary>
        ///     Obtiene toda la coleccion del tipo especificado
        /// </summary>
        /// <returns>Regresa una coleccion IQueryable</returns>
        IQueryable<T> GetAll();

        /// <summary>
        ///     Obtiene el objeto por su id
        /// </summary>
        /// <param name="id">Identificador del Objeto</param>
        /// <returns>Regresa el objeto espeificado por el identificador</returns>
        T GetById(long id);

        /// <summary>
        ///     Obtiene el objeto por su id
        /// </summary>
        /// <param name="id">Identificador del Objeto</param>
        /// <returns>Regresa el objeto espeificado por el identificador</returns>
        T GetById(int id);

        /// <summary>
        ///     Obtiene una coleccion filtrada por los criterios especificados
        /// </summary>
        /// <param name="filter">filtro por el cual se obtendra la coleccion</param>
        /// <param name="orderBy">orden el cual tendra la coleccion</param>
        /// <param name="includeProperties">Especifica las propiedades que se incluyen</param>
        /// <returns></returns>
        IEnumerable<T> Get(Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string includeProperties = "");

        /// <summary>
        ///     Agrega un objeto al contexto y la guarda en la BD
        /// </summary>
        /// <param name="entity"></param>
        void Add(T entity);

        /// <summary>
        /// Agrega un conjunto de objetos al contexto y los guarda en BD
        /// </summary>
        /// <param name="entities">Lista de entidades</param>
        void AddAll(IList<T> entities);

        /// <summary>
        ///     Actualiza el objeto en el contexto y la guarda en la BD
        /// </summary>
        /// <param name="entity"></param>
        void Update(T entity);

        void AddOrUpdate(T entity);

        /// <summary>
        ///     Borra el objeto del contexto y guarda el cambio en la BD
        /// </summary>
        /// <param name="entity"></param>
        void Delete(T entity);

        /// <summary>
        ///     Borra el objeto por su Identificador del contexto y guarda el cambio en la BD
        /// </summary>
        /// <param name="entity"></param>
        void Delete(int id);

        /// <summary>
        /// Eliminar todas las entidades de la lista
        /// </summary>
        /// <param name="entities"></param>
        void DeleteAll(ICollection<T> entities);

        /// <summary>
        ///     Obtiene un objeto IQueruable para realizar mas filtros si es necesario.
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IQueryable<T> GetQueryable(Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string includeProperties = "");

        /// <summary>
        /// Borrar entidades en cascada
        /// </summary>
        /// <param name="entity"></param>
        void DeleteCascade(T entity);

        
        /// <summary>
        /// Borra mediante una condicion
        /// </summary>
        /// <param name="filter"></param>
        void DeleteByCondition(Expression<Func<T, bool>> filter = null);

       
        /// <summary>
        /// BulkInsert Entities
        /// </summary>
        /// <param name="entities"></param>
        void BulkInsert(IEnumerable<T> entities);

        /// <summary>
        /// Realiza el commit de la transaccion para guardar los cambios en BD.
        /// </summary>
        void Commit();

        /// <summary>
        /// Agrega todos los elementos al set de la colección y al final realiza un salvar cambios
        /// </summary>
        /// <param name="entities"></param>
        void AgregarTodos(IEnumerable<T> entities);


    }
}