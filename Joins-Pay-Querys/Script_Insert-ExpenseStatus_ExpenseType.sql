USE [JOINS_PAY_BACK_SERVICE]
GO
SET IDENTITY_INSERT [dbo].[Expense.Expense_Status] ON 

INSERT [dbo].[Expense.Expense_Status] ([id], [description], [deleted], [dateCreated]) VALUES (1, N'EM ABERTO', N'N', CAST(N'2022-02-05T22:28:48.7670000' AS DateTime2))
INSERT [dbo].[Expense.Expense_Status] ([id], [description], [deleted], [dateCreated]) VALUES (2, N'PAGO', N'N', CAST(N'2022-02-05T22:28:48.7670000' AS DateTime2))
INSERT [dbo].[Expense.Expense_Status] ([id], [description], [deleted], [dateCreated]) VALUES (3, N'VENCENDO HOJE', N'N', CAST(N'2022-02-05T22:28:48.7670000' AS DateTime2))
INSERT [dbo].[Expense.Expense_Status] ([id], [description], [deleted], [dateCreated]) VALUES (4, N'VENCIDA', N'N', CAST(N'2022-02-05T22:28:48.7670000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Expense.Expense_Status] OFF
GO
SET IDENTITY_INSERT [dbo].[Expense.Expense_Type] ON 

INSERT [dbo].[Expense.Expense_Type] ([id], [description], [deleted], [dateCreated]) VALUES (1, N'DESPESA FIXA', N'N', CAST(N'2022-02-05T22:28:48.7670000' AS DateTime2))
INSERT [dbo].[Expense.Expense_Type] ([id], [description], [deleted], [dateCreated]) VALUES (2, N'DESPESA VARIÁVEL', N'N', CAST(N'2022-02-05T22:28:48.7670000' AS DateTime2))
INSERT [dbo].[Expense.Expense_Type] ([id], [description], [deleted], [dateCreated]) VALUES (3, N'IMPOSTOS', N'N', CAST(N'2022-02-05T22:28:48.7670000' AS DateTime2))
INSERT [dbo].[Expense.Expense_Type] ([id], [description], [deleted], [dateCreated]) VALUES (4, N'TERCEIROS', N'N', CAST(N'2022-02-05T22:28:48.7670000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Expense.Expense_Type] OFF
GO
