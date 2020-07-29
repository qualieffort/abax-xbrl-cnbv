
UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2016-08-22/annext_entrypoint' WHERE [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/2016-08-22/annext_entrypoint';

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22' WHERE [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22';

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2016-08-22' WHERE [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2016-08-22';



UPDATE [ArchivoTaxonomiaXbrl] SET [Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/anexot-2016-08-22/annext_entry_point_2016-08-22.xsd'     WHERE [Href] = 'http://emisnet.bmv.com.mx/taxonomy/anexot-2016-08-22/annext_entry_point_2016-08-22.xsd';

UPDATE [ArchivoTaxonomiaXbrl] SET [Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-fid-2018-08-20/ccd/full_ifrs_ccd_entry_point_2016-08-22.xsd'     WHERE [Href] = 'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22.xsd';

UPDATE [ArchivoTaxonomiaXbrl] SET [Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-2018-08-20/full_ifrs_mc_mx_fibras_entry_point_2016-08-22.xsd'     WHERE [Href] = 'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_fibras_entry_point_2016-08-22.xsd';

UPDATE [ArchivoTaxonomiaXbrl] SET [Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_trust_issuer_view_entry_point_2017-08-01.xsd'     WHERE [Href] = 'https://taxonomias.xbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_trust_issuer_view_entry_point_2017-08-01.xsd';

