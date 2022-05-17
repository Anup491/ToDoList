
CREATE DATABASE ToDoDB
Go
USE ToDoDB;
Go
DROP TABLE IF EXISTS Tasks;
Go
CREATE TABLE [dbo].[Tasks](
	[TaskId] [int] IDENTITY(1,1) PRIMARY KEY,
	[Description] [varchar](256) NOT NULL,
	[Status] [bit] NULL,
	[DateUpdated] [date] NULL
)

Go

CREATE TABLE [dbo].[User](
	[UserId] [uniqueidentifier] NOT NULL,
	[UserName] [varchar](255) NOT NULL,
	[Password] [varchar](255) NOT NULL
) ON [PRIMARY]
GO
CREATE TABLE [dbo].[UserClaim](
	[ClaimId] [uniqueidentifier] NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[ClaimType] [varchar](100) NOT NULL,
	[ClaimValue] [varchar](50) NOT NULL
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [PK__User__1788CC4D72609948] PRIMARY KEY NONCLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserClaim] ADD  CONSTRAINT [PK__UserClai__EF2E139A0133A934] PRIMARY KEY NONCLUSTERED 
(
	[ClaimId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF__User__UserId__31B762FC]  DEFAULT (newid()) FOR [UserId]
GO
ALTER TABLE [dbo].[UserClaim] ADD  CONSTRAINT [DF__UserClaim__Claim__3493CFA7]  DEFAULT (newid()) FOR [ClaimId]
GO
ALTER TABLE [dbo].[UserClaim]  WITH CHECK ADD  CONSTRAINT [FK_UserClaim_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[UserClaim] CHECK CONSTRAINT [FK_UserClaim_User]
GO
INSERT [dbo].[User] ([UserId], [UserName], [Password]) VALUES (N'4a1947ec-099c-4532-8105-64cf8c8b4b94', N'Test', N'pwd123')
GO
INSERT [dbo].[User] ([UserId], [UserName], [Password]) VALUES (N'898c9784-e31f-4f37-927f-a157eb7ca215', N'Anup', N'1234')
GO
INSERT [dbo].[UserClaim] ([ClaimId], [UserId], [ClaimType], [ClaimValue]) VALUES (newid(), N'4a1947ec-099c-4532-8105-64cf8c8b4b94', N'CanAccessToDoList', N'true')
GO
INSERT [dbo].[UserClaim] ([ClaimId], [UserId], [ClaimType], [ClaimValue]) VALUES (newid(), N'4a1947ec-099c-4532-8105-64cf8c8b4b94', N'CanEditToDoList', N'true')
GO
INSERT [dbo].[UserClaim] ([ClaimId], [UserId], [ClaimType], [ClaimValue]) VALUES (newid(), N'4a1947ec-099c-4532-8105-64cf8c8b4b94', N'CanDeleteToDoList', N'true')
GO
INSERT [dbo].[UserClaim] ([ClaimId], [UserId], [ClaimType], [ClaimValue]) VALUES (newid(), N'4a1947ec-099c-4532-8105-64cf8c8b4b94', N'CanAddToDoList', N'true')
GO
INSERT [dbo].[UserClaim] ([ClaimId], [UserId], [ClaimType], [ClaimValue]) VALUES (newid(), N'898c9784-e31f-4f37-927f-a157eb7ca215', N'CanAccessToDoList', N'true')
GO
INSERT [dbo].[UserClaim] ([ClaimId], [UserId], [ClaimType], [ClaimValue]) VALUES (newid(), N'898c9784-e31f-4f37-927f-a157eb7ca215', N'CanEditToDoList', N'false')
GO
INSERT [dbo].[UserClaim] ([ClaimId], [UserId], [ClaimType], [ClaimValue]) VALUES (newid(), N'898c9784-e31f-4f37-927f-a157eb7ca215', N'CanDeleteToDoList', N'false')
GO
INSERT [dbo].[UserClaim] ([ClaimId], [UserId], [ClaimType], [ClaimValue]) VALUES (newid(), N'898c9784-e31f-4f37-927f-a157eb7ca215', N'CanAddToDoList', N'false')
