using System;

namespace TestAbaxXBRL.JBRL.Test
{
    /// <summary>
    /// Class with the detail of a process request.
    /// </summary>
    public class ResponseDto
    {
        /// <summary>
        /// Flagg that indicates if the porccess sucess.
        /// </summary>
        public bool isSuccess { get; set; }
        /// <summary>
        /// The result message.
        /// </summary>
        public string message { get; set; }
        /// <summary>
        /// The exception error.
        /// </summary>
        public Exception exception { get; set; }
        /// <summary>
        /// The result of the request.
        /// </summary>
        public object result { get; set; }
    }
}