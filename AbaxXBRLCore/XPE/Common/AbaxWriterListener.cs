using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using org.w3c.dom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ubmatrix.xbrl.common.src;

namespace AbaxXBRLCore.XPE.Common
{
    /// <summary>
    /// Clase Listener que recibe las notificación de escritura de un archivo XBRL a su representación XML
    /// Configura y agrega elementos extras requeridos en el documento, como los comentarios o la verificación de elementos requeridos
    /// </summary>
    public class AbaxWriterListener : IWriteListener
    {
        private DocumentoInstanciaXbrlDto internalInstance;
        private bool _httpsSustituido = false;
        public AbaxWriterListener(DocumentoInstanciaXbrlDto instance,bool httpsSustituido = false) {
            this.internalInstance = instance;
            _httpsSustituido = httpsSustituido;
        }
        /// <summary>
        /// Inserta o configura datos extras al documento XBRL que se está escribiendo
        /// </summary>
        /// <param name="locationHandle">Handle de la ubicación del archivo</param>
        /// <param name="objectDocument">Documento XML a escribir</param>
        /// <returns>Mismo documento que se escribe</returns>
        public object onWrite(ILocationHandle locationHandle, object objectDocument)
        {
            if (objectDocument is Document)
            {
                Document doc = (Document)objectDocument;

                Node fChild = doc.getFirstChild().getFirstChild();
                while (fChild != null)
                {
                    if (fChild.getLocalName().Equals("schemaRef"))
                    {
                        
                        NamedNodeMap attMap = fChild.getAttributes();
                        if (attMap != null)
                        {
                            for (int iAtt = 0; iAtt < attMap.getLength(); iAtt++)
                            {
                                Node attributeNode = attMap.item(iAtt);
                                if ("href".Equals(attributeNode.getLocalName()))
                                {
                                    if (_httpsSustituido)
                                    {
                                        attributeNode.setNodeValue(internalInstance.DtsDocumentoInstancia[0]
                                            .HRef.Replace("http://", "https://").Replace("HTTP://","HTTPS://"));
                                    }
                                    else
                                    {
                                        attributeNode.setNodeValue(internalInstance.DtsDocumentoInstancia[0].HRef);
                                    }
                                    break;
                                }
                            }
                        }
                        break;
                    }
                    fChild = fChild.getNextSibling();
                }
                
                doc.setXmlStandalone(true);
                doc.setXmlVersion("1.0");
                Node comment = doc.createComment("Documento XBRL generado por AbaxXBRL 2.1n - 2H Software");
                doc.insertBefore(comment, doc.getFirstChild());

                
            }
            return objectDocument;
        }
    }
}
