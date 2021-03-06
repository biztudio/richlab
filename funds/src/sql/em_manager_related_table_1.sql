USE [richlab]
GO
/****** Object:  Table [dbo].[em_manager]    Script Date: 2017/12/15 0:34:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[em_manager]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[em_manager](
	[manager_code] [varchar](20) NOT NULL,
	[manager_name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_em_manager] PRIMARY KEY CLUSTERED 
(
	[manager_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[em_manager_on_fund]    Script Date: 2017/12/15 0:34:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[em_manager_on_fund]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[em_manager_on_fund](
	[code] [varchar](20) NOT NULL,
	[manager_code] [varchar](20) NOT NULL,
	[growth_on_fund] [varchar](10) NOT NULL,
	[begin_date] [varchar](50) NOT NULL,
	[end_date] [varchar](50) NOT NULL,
 CONSTRAINT [PK_em_manager_on_fund] PRIMARY KEY CLUSTERED 
(
	[code] ASC,
	[manager_code] ASC,
	[begin_date] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
