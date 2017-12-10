USE [richlab]
GO

ALTER TABLE [dbo].[fund] DROP CONSTRAINT [DF_fund_fee]
GO

ALTER TABLE [dbo].[fund] DROP CONSTRAINT [DF_fund_name]
GO

ALTER TABLE [dbo].[fund] DROP CONSTRAINT [DF_fund_code]
GO

/****** Object:  Table [dbo].[fund]    Script Date: 2017/12/10 23:02:23 ******/
DROP TABLE [dbo].[fund]
GO

/****** Object:  Table [dbo].[fund]    Script Date: 2017/12/10 23:02:23 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[fund](
	[code] [varchar](10) NOT NULL,
	[name] [nvarchar](150) NOT NULL,
	[fee] [varchar](10) NOT NULL,
 CONSTRAINT [PK_fund] PRIMARY KEY CLUSTERED 
(
	[code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[fund] ADD  CONSTRAINT [DF_fund_code]  DEFAULT ('') FOR [code]
GO

ALTER TABLE [dbo].[fund] ADD  CONSTRAINT [DF_fund_name]  DEFAULT ('') FOR [name]
GO

ALTER TABLE [dbo].[fund] ADD  CONSTRAINT [DF_fund_fee]  DEFAULT ('') FOR [fee]
GO


