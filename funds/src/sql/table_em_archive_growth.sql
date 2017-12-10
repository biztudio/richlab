USE [richlab]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_archive_time]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_four_division_grange]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_range_update]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_current_range]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_ref_HS300_growth]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_ref_avg_growth]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_growth]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_category]
GO

ALTER TABLE [dbo].[em_archive_growth] DROP CONSTRAINT [DF_archive_growth_code]
GO

/****** Object:  Table [dbo].[em_archive_growth]    Script Date: 2017/12/10 15:21:06 ******/
DROP TABLE [dbo].[em_archive_growth]
GO

/****** Object:  Table [dbo].[em_archive_growth]    Script Date: 2017/12/10 15:21:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[em_archive_growth](
	[code] [varchar](10) NOT NULL,
	[category] [nvarchar](20) NOT NULL,
	[growth] [varchar](50) NOT NULL,
	[ref_avg_growth] [varchar](50) NOT NULL,
	[ref_HS300_growth] [varchar](50) NOT NULL,
	[current_range] [varchar](50) NOT NULL,
	[range_update] [varchar](50) NOT NULL,
	[four_division_grange] [nvarchar](50) NOT NULL,
	[archive_time] [date] NOT NULL,
 CONSTRAINT [PK_archive_growth] PRIMARY KEY CLUSTERED 
(
	[code] ASC,
	[category] ASC,
	[archive_time] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_code]  DEFAULT ('0') FOR [code]
GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_category]  DEFAULT (N'---') FOR [category]
GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_growth]  DEFAULT ('---') FOR [growth]
GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_ref_avg_growth]  DEFAULT ('---') FOR [ref_avg_growth]
GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_ref_HS300_growth]  DEFAULT ('---') FOR [ref_HS300_growth]
GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_current_range]  DEFAULT ('---') FOR [current_range]
GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_range_update]  DEFAULT ('---') FOR [range_update]
GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_four_division_grange]  DEFAULT (N'---') FOR [four_division_grange]
GO

ALTER TABLE [dbo].[em_archive_growth] ADD  CONSTRAINT [DF_archive_growth_archive_time]  DEFAULT (getdate()) FOR [archive_time]
GO


