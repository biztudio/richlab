SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

IF OBJECT_ID('EM_Add_Manager_On_Fund') IS NOT NULL
BEGIN
	DROP PROC dbo.EM_Add_Manager_On_Fund
END
GO

-- =============================================
-- Author:		Yang SHEN
-- =============================================
CREATE PROCEDURE EM_Add_Manager_On_Fund 
	@fund_code varchar(20),
	@manager_code varchar(20), 
	@manager_name nvarchar(50),
	@growth_on_fund varchar(10),
	@begin_date_on_fund varchar(20),
	@end_date_on_fund varchar(20)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF NOT EXISTS (SELECT 1 FROM dbo.em_manager WHERE @manager_code = manager_code)
	BEGIN
		INSERT INTO em_manager (manager_code, manager_name) VALUES (@manager_code, @manager_name);
	END 
	IF NOT EXISTS (SELECT 1 FROM em_manager_on_fund ef WHERE ef.code = @fund_code AND ef.manager_code = @manager_code AND ef.begin_date = @begin_date_on_fund)
	BEGIN
		INSERT INTO dbo.em_manager_on_fund
		(
		    code,
		    manager_code,
		    growth_on_fund,
		    begin_date,
		    end_date
		)
		VALUES
		(
		    @fund_code, -- code - varchar
		    @manager_code, -- manager_code - varchar
		    @growth_on_fund, -- growth_on_fund - nchar
		    @begin_date_on_fund, -- begin_date - varchar
		    @end_date_on_fund -- end_date - varchar
		)
	END

END
GO
