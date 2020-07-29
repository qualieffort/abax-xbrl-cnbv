ALTER TABLE [dbo].[DocumentoInstancia] ADD [FechaReporte] DATETIME NULL
GO

UPDATE [DocumentoInstancia] SET [FechaReporte] = CONCAT([Anio],'-',([Trimestre] * 3),'-', 30) WHERE [Trimestre] IN (2,3)
UPDATE [DocumentoInstancia] SET [FechaReporte] = CONCAT([Anio],'-',([Trimestre] * 3),'-', 31) WHERE [Trimestre] IN (1,4);
GO