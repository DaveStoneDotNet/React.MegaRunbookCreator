
-- -----------------------------------------------------------------------------------------------------------------------
-- CONSTRAINTS
-- -----------------------------------------------------------------------------------------------------------------------

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[ApplicationLink]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='ApplicationLink_ApplicationGroup_FK')
    BEGIN
           ALTER TABLE [Links].[ApplicationLink]
       DROP CONSTRAINT [ApplicationLink_ApplicationGroup_FK]
                 PRINT 'OK: [ApplicationLink_ApplicationGroup_FK] CONSTRAINT DROPPED'
    END

GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='ApplicationLink_ApplicationType_FK')
    BEGIN
           ALTER TABLE [Links].[ApplicationLink]
       DROP CONSTRAINT [ApplicationLink_ApplicationType_FK]
                 PRINT 'OK: [ApplicationLink_ApplicationType_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[EnvironmentLink]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='EnvironmentLink_ServiceLink_FK')
    BEGIN
           ALTER TABLE [Links].[EnvironmentLink]
       DROP CONSTRAINT [EnvironmentLink_ServiceLink_FK]
                 PRINT 'OK: [EnvironmentLink_ServiceLink_FK] CONSTRAINT DROPPED'
    END

GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='EnvironmentLink_Server_FK')
    BEGIN
           ALTER TABLE [Links].[EnvironmentLink]
       DROP CONSTRAINT [EnvironmentLink_Server_FK]
                 PRINT 'OK: [EnvironmentLink_Server_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[Server]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='Server_Environment_FK')
    BEGIN
           ALTER TABLE [Links].[Server]
       DROP CONSTRAINT [Server_Environment_FK]
                 PRINT 'OK: [Server_Environment_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[ServiceLink]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='ServiceLink_ApplicationLink_FK')
    BEGIN
           ALTER TABLE [Links].[ServiceLink]
       DROP CONSTRAINT [ServiceLink_ApplicationLink_FK]
                 PRINT 'OK: [ServiceLink_ApplicationLink_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [People].[TeamMember]
-- -----------------------------------------------------------------------------------------------------------------------

-- NONE

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[Rfc]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='Rfc_Contact_FK')
    BEGIN
           ALTER TABLE [Runbook].[Rfc]
       DROP CONSTRAINT [Rfc_Contact_FK]
                 PRINT 'OK: [Rfc_Contact_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStep]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStep_Rfc_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStep]
       DROP CONSTRAINT [RunbookStep_Rfc_FK]
                 PRINT 'OK: [RunbookStep_Rfc_FK] CONSTRAINT DROPPED'
    END

GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStep_RunbookStepStatus_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStep]
       DROP CONSTRAINT [RunbookStep_RunbookStepStatus_FK]
                 PRINT 'OK: [RunbookStep_RunbookStepStatus_FK] CONSTRAINT DROPPED'
    END

GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStep_RunbookStepType_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStep]
       DROP CONSTRAINT [RunbookStep_RunbookStepType_FK]
                 PRINT 'OK: [RunbookStep_RunbookStepType_FK] CONSTRAINT DROPPED'
    END

GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStep_RunbookTemplate_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStep]
       DROP CONSTRAINT [RunbookStep_RunbookTemplate_FK]
                 PRINT 'OK: [RunbookStep_RunbookTemplate_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepDeveloper]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepDeveloper_Contact_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepDeveloper]
       DROP CONSTRAINT [RunbookStepDeveloper_Contact_FK]
                 PRINT 'OK: [RunbookStepDeveloper_Contact_FK] CONSTRAINT DROPPED'
    END

GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepDeveloper_RunbookStep_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepDeveloper]
       DROP CONSTRAINT [RunbookStepDeveloper_RunbookStep_FK]
                 PRINT 'OK: [RunbookStepDeveloper_RunbookStep_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepPbi]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepPbi_RunbookStep_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepPbi]
       DROP CONSTRAINT [RunbookStepPbi_RunbookStep_FK]
                 PRINT 'OK: [RunbookStepPbi_RunbookStep_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepResource]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepResource_RunbookStep_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepResource]
       DROP CONSTRAINT [RunbookStepResource_RunbookStep_FK]
                 PRINT 'OK: [RunbookStepResource_RunbookStep_FK] CONSTRAINT DROPPED'
    END

GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepResource_Contact_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepResource]
       DROP CONSTRAINT [RunbookStepResource_Contact_FK]
                 PRINT 'OK: [RunbookStepResource_Contact_FK] CONSTRAINT DROPPED'
    END

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepTeam]
-- -----------------------------------------------------------------------------------------------------------------------

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepTeam_Team_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepTeam]
       DROP CONSTRAINT [RunbookStepTeam_Team_FK]
                 PRINT 'OK: [RunbookStepTeam_Team_FK] CONSTRAINT DROPPED'
    END

GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepTeam_RunbookStep_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepTeam]
       DROP CONSTRAINT [RunbookStepTeam_RunbookStep_FK]
                 PRINT 'OK: [RunbookStepTeam_RunbookStep_FK] CONSTRAINT DROPPED'
    END

GO

-- =======================================================================================================================
-- [TRUNCATE] [TRUNCATE] [TRUNCATE] [TRUNCATE] [TRUNCATE] [TRUNCATE] [TRUNCATE] [TRUNCATE] [TRUNCATE] [TRUNCATE] 
-- =======================================================================================================================

TRUNCATE TABLE [Links].[ApplicationGroup]
TRUNCATE TABLE [Links].[ApplicationLink]
TRUNCATE TABLE [Links].[Environment]
TRUNCATE TABLE [Links].[EnvironmentLink]
TRUNCATE TABLE [Links].[Server]
TRUNCATE TABLE [Links].[ServiceLink]
TRUNCATE TABLE [Lookup].[ApplicationType]
TRUNCATE TABLE [Lookup].[RunbookStepStatus]
TRUNCATE TABLE [Lookup].[RunbookStepType]
TRUNCATE TABLE [People].[Contact]
TRUNCATE TABLE [People].[Team]
TRUNCATE TABLE [People].[TeamMember]
TRUNCATE TABLE [Runbook].[Rfc]
TRUNCATE TABLE [Runbook].[RunbookStep]
TRUNCATE TABLE [Runbook].[RunbookStepDeveloper]
TRUNCATE TABLE [Runbook].[RunbookStepPbi]
TRUNCATE TABLE [Runbook].[RunbookStepResource]
TRUNCATE TABLE [Runbook].[RunbookStepTeam]
TRUNCATE TABLE [Runbook].[RunbookTemplate]

DBCC CHECKIDENT ('[Links].[ApplicationGroup]',  RESEED, 1);
DBCC CHECKIDENT ('[Links].[ApplicationLink]',   RESEED, 1);
DBCC CHECKIDENT ('[Links].[Environment]',       RESEED, 1);
DBCC CHECKIDENT ('[Links].[EnvironmentLink]',   RESEED, 1);
DBCC CHECKIDENT ('[Links].[Server]',            RESEED, 1);
DBCC CHECKIDENT ('[Links].[ServiceLink]',       RESEED, 1);
DBCC CHECKIDENT ('[People].[Contact]',          RESEED, 1);
DBCC CHECKIDENT ('[People].[Team]',             RESEED, 1);
DBCC CHECKIDENT ('[Runbook].[Rfc]',             RESEED, 1);
DBCC CHECKIDENT ('[Runbook].[RunbookStep]',     RESEED, 1);
DBCC CHECKIDENT ('[Runbook].[RunbookTemplate]', RESEED, 1);

-- =======================================================================================================================
-- [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] [SEED] 
-- =======================================================================================================================

-- =======================================================================================================================
-- [Links]
-- =======================================================================================================================

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[ApplicationGroup]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [Links].[ApplicationGroup] ON 
GO

INSERT [Links].[ApplicationGroup] ([Id], [Name]) VALUES (1, N'Encompass Web')
INSERT [Links].[ApplicationGroup] ([Id], [Name]) VALUES (2, N'Greenlight Web')
INSERT [Links].[ApplicationGroup] ([Id], [Name]) VALUES (3, N'Encompass Jobs')
INSERT [Links].[ApplicationGroup] ([Id], [Name]) VALUES (4, N'Scheduled Tasks')
INSERT [Links].[ApplicationGroup] ([Id], [Name]) VALUES (5, N'Originations')
INSERT [Links].[ApplicationGroup] ([Id], [Name]) VALUES (6, N'ServiceBus Messaging')
INSERT [Links].[ApplicationGroup] ([Id], [Name]) VALUES (7, N'WCF')
GO

SET IDENTITY_INSERT [Links].[ApplicationGroup] OFF
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[ApplicationLink]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [Links].[ApplicationLink] ON 
GO

INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (21, 1, N'GLS', N'WEB', N'GLS Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (22, 1, N'GLS Redirector', N'WEB', N'GLS Redirector Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (23, 1, N'Pricer', N'WEB', N'Pricer Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (24, 1, N'Pricer Redirector', N'WEB', N'Pricer Redirector Notes')
GO

INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (25, 2, N'DUFileToLnSpace', N'UNKNOWN', N'DUFileToLnSpace Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (26, 2, N'EscrowFPS', N'WEB', N'EscrowFPS Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (27, 2, N'GLAdmin', N'WEB', N'GLAdmin Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (28, 2, N'GLAdmin Redirector', N'WEB', N'GLAdmin Redirector Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (29, 2, N'GLReports', N'WEB', N'GLReports Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (30, 2, N'GLReports Redirector', N'WEB', N'GLReports Redirector Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (31, 2, N'JustLendAdmin', N'WEB', N'JustLendAdmin Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (32, 2, N'PricerUnlockAgent', N'WEB', N'PricerUnlockAgent Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (33, 2, N'sCal.NationstarMtg.net', N'WEB', N'sCal.NationstarMtg.net Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (34, 2, N'WX.NationstarMtg.net', N'WEB', N'WX.NationstarMtg.net Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (35, 2, N'WX2.NationstarMtg.net', N'WEB', N'WX2.NationstarMtg.net Notes')
GO

INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (36, 5, N'ClientServicesWiki', N'WEB', N'ClientServicesWiki Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (37, 5, N'CLT', N'WEB', N'CLT Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (38, 5, N'CMA', N'WEB', N'CMA Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (39, 5, N'CMP', N'WEB', N'CMP Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (40, 5, N'FAP', N'WEB', N'FAP Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (41, 5, N'LMS.Leads', N'WEB', N'LMS.Leads Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (42, 5, N'Pricer', N'WEB', N'Pricer Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (43, 5, N'RESPA', N'WEB', N'RESPA Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (44, 5, N'ROAM.SMP', N'WEB', N'ROAM.SMP Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (45, 5, N'STAR.Encompass.LoanMonitor.UI', N'WEB', N'STAR.Encompass.LoanMonitor.UI Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (46, 5, N'STAR.HCM.Admin.Web', N'WEB', N'STAR.HCM.Admin.Web Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (47, 5, N'STAR.HCM.Web', N'WEB', N'STAR.HCM.Web Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (48, 5, N'STAR.Originations.BlitzDocs.Web', N'WEB', N'STAR.Originations.BlitzDocs.Web Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (49, 5, N'STAR.Originations.Delivery.Review.Website', N'WEB', N'STAR.Originations.Delivery.Review.Website Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (50, 5, N'STAR.Originations.Galex.Website', N'WEB', N'STAR.Originations.Galex.Website Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (51, 5, N'STAR.Originations.Leads.Creator', N'WEB', N'STAR.Originations.Leads.Creator Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (52, 5, N'STAR.Originations.LoanDocuments.Web', N'WEB', N'STAR.Originations.LoanDocuments.Web Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (53, 5, N'STAR.Originations.MVC.VendorIntegrationPortal', N'WEB', N'STAR.Originations.MVC.VendorIntegrationPortal Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (54, 5, N'STAR.Originations.Rusty.Website', N'WEB', N'STAR.Originations.Rusty.Website Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (55, 5, N'Training.ReleaseManagement.Web', N'WEB', N'Training.ReleaseManagement.Web Notes')
GO

INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 1, 6, N'STAR.Encompass.Imaging.ServiceBus', N'SBUS', N'STAR.Encompass.Imaging.ServiceBus Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 2, 6, N'STAR.Encompass.Imaging.ServiceBus - dev backup', N'SBUS', N'STAR.Encompass.Imaging.ServiceBus - dev backup Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 3, 6, N'STAR.Encompass.Imaging.ServiceBus - prod configed', N'SBUS', N'STAR.Encompass.Imaging.ServiceBus - prod configed Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 4, 6, N'STAR.Encompass.LoanMonitor.ServiceBus', N'SBUS', N'STAR.Encompass.LoanMonitor.ServiceBus Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 5, 6, N'STAR.Enterprise.ServiceBus.Documents', N'SBUS', N'STAR.Enterprise.ServiceBus.Documents Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 6, 6, N'STAR.Origination.ConsentMonitor.ServiceBus', N'SBUS', N'STAR.Origination.ConsentMonitor.ServiceBus Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 7, 6, N'STAR.Originations.CCAM.ServiceBus', N'SBUS', N'STAR.Originations.CCAM.ServiceBus Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 8, 6, N'STAR.Originations.DisclosureMonitor.ServiceBus', N'SBUS', N'STAR.Originations.DisclosureMonitor.ServiceBus Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES ( 9, 6, N'STAR.Originations.Leads.ServiceBus', N'SBUS', N'STAR.Originations.Leads.ServiceBus Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (10, 6, N'STAR.Originations.ODS', N'SBUS', N'STAR.Originations.ODS Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (11, 6, N'STAR.Originations.ServiceBus', N'SBUS', N'STAR.Originations.ServiceBus Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (12, 6, N'STAR.Originations.ServiceBus.Credit', N'SBUS', N'STAR.Originations.ServiceBus.Credit Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (13, 6, N'STAR.Originations.ServiceBus.Delivery.Review', N'SBUS', N'STAR.Originations.ServiceBus.Delivery.Review Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (14, 6, N'STAR.Originations.ServiceBus.Documents', N'SBUS', N'STAR.Originations.ServiceBus.Documents Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (15, 6, N'STAR.Originations.ServiceBus.Encompass', N'SBUS', N'STAR.Originations.ServiceBus.Encompass Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (16, 6, N'STAR.Originations.ServiceBus.ERDB', N'SBUS', N'STAR.Originations.ServiceBus.ERDB Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (17, 6, N'STAR.Originations.ServiceBus.EReport', N'SBUS', N'STAR.Originations.ServiceBus.EReport Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (18, 6, N'STAR.Originations.ServiceBus.LendingSpace', N'SBUS', N'STAR.Originations.ServiceBus.LendingSpace Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (19, 6, N'STAR.Originations.ServiceBus.ODS.Leads', N'SBUS', N'STAR.Originations.ServiceBus.ODS.Leads Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (20, 6, N'STAR.Originations.VendorServices.ServiceBus', N'SBUS', N'STAR.Originations.VendorServices.ServiceBus Notes')
GO

INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (56, 7, N'EncompassMegaManipulator', N'UNKNOWN', N'EncompassMegaManipulator Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (57, 7, N'EncompassPricingDataFiles', N'UNKNOWN', N'EncompassPricingDataFiles Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (58, 7, N'Services.NationstarMtg.net', N'WCF', N'Services.NationstarMtg.net Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (59, 7, N'STAR.CapitalMarkets.Services', N'WCF', N'STAR.CapitalMarkets.Services Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (60, 7, N'STAR.DevOps.ServiceBus.Monitoring.Api', N'UNKNOWN', N'STAR.DevOps.ServiceBus.Monitoring.Api Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (61, 7, N'STAR.Encompass.Gateway', N'WCF', N'STAR.Encompass.Gateway Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (62, 7, N'STAR.Encompass.Servicing.WCF', N'WCF', N'STAR.Encompass.Servicing.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (63, 7, N'STAR.Encompass.Treasury.WCF', N'WCF', N'STAR.Encompass.Treasury.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (64, 7, N'STAR.Encompass.WCF', N'WCF', N'STAR.Encompass.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (65, 7, N'STAR.Enterprise.Data.DataServices', N'WCF', N'STAR.Enterprise.Data.DataServices Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (66, 7, N'STAR.Enterprise.WCF.DataStandardization', N'WCF', N'STAR.Enterprise.WCF.DataStandardization Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (67, 7, N'STAR.Enterprise.WCF.DocumentStamp', N'WCF', N'STAR.Enterprise.WCF.DocumentStamp Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (68, 7, N'STAR.Enterprise.WCF.Smtp', N'WCF', N'STAR.Enterprise.WCF.Smtp Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (69, 7, N'STAR.Enterprise.WCF.Templating', N'WCF', N'STAR.Enterprise.WCF.Templating Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (70, 7, N'Star.HCM.Admin.Web', N'WCF', N'Star.HCM.Admin.Web Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (71, 7, N'STAR.HCM.API', N'WCF', N'STAR.HCM.API Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (72, 7, N'STAR.HCM.Services', N'WCF', N'STAR.HCM.Services Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (73, 7, N'STAR.LMS.Leads.WCF', N'WCF', N'STAR.LMS.Leads.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (74, 7, N'STAR.Originations.Delivery.Review.WCF', N'WCF', N'STAR.Originations.Delivery.Review.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (75, 7, N'Star.Originations.DocMagic.WebAPI', N'WCF', N'Star.Originations.DocMagic.WebAPI Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (76, 7, N'STAR.Originations.Galex.WCF', N'WCF', N'STAR.Originations.Galex.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (77, 7, N'STAR.Originations.Leads.WCF', N'WCF', N'STAR.Originations.Leads.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (78, 7, N'STAR.Originations.LoanPartyAllocation.WCF', N'WCF', N'STAR.Originations.LoanPartyAllocation.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (79, 7, N'STAR.Originations.LoanServices.WCF', N'WCF', N'STAR.Originations.LoanServices.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (80, 7, N'STAR.Originations.ODS.WCF', N'WCF', N'STAR.Originations.ODS.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (81, 7, N'STAR.Originations.Pricing.WCF', N'WCF', N'STAR.Originations.Pricing.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (82, 7, N'STAR.Originations.Rusty.WCF', N'WCF', N'STAR.Originations.Rusty.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (83, 7, N'STAR.Originations.Seagull.WCF', N'WCF', N'STAR.Originations.Seagull.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (84, 7, N'STAR.Originations.UserManagement.WCF', N'WCF', N'STAR.Originations.UserManagement.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (85, 7, N'STAR.Originations.WCF', N'WCF', N'STAR.Originations.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (86, 7, N'STAR.Originations.WCF.Router', N'WCF', N'STAR.Originations.WCF.Router Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (87, 7, N'STAR.OriginationsODS.BusinessRules', N'WCF', N'STAR.OriginationsODS.BusinessRules Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (88, 7, N'STAR.Pricing', N'WCF', N'STAR.Pricing Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (89, 7, N'STAR.ROAM.SMP.WCF', N'WCF', N'STAR.ROAM.SMP.WCF Notes')
INSERT [Links].[ApplicationLink] ([Id], [ApplicationGroupId], [Name], [AppTypeCode], [Notes]) VALUES (90, 7, N'STAR.ScheduledTask.TaskControlManager', N'WCF', N'STAR.ScheduledTask.TaskControlManager Notes')
GO

SET IDENTITY_INSERT [Links].[ApplicationLink] OFF
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[Environment]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [Links].[Environment] ON 
GO

INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (1, N'DEV',   1)
INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (2, N'QA1',   2)
INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (3, N'QA2',   3)
INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (4, N'UAT1',  4)
INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (5, N'UAT2',  5)
INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (6, N'PROD1', 6)
INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (7, N'PROD2', 7)
INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (8, N'PROD3', 8)
INSERT [Links].[Environment] ([Id], [Name], [SortOrder]) VALUES (9, N'PROD4', 9)
GO

SET IDENTITY_INSERT [Links].[Environment] OFF
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[EnvironmentLink]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [Links].[EnvironmentLink] ON 
GO

INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (1, 1, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (2, 1, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (3, 1, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (4, 1, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (5, 1, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (6, 1, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (7, 1, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (8, 1, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (9, 1, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus/DocumentDetectionService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (10, 2, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (11, 2, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (12, 2, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (13, 2, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (14, 2, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (15, 2, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (16, 2, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (17, 2, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (18, 2, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus/EncompassDocumentRetrievalService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (19, 3, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (20, 3, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (21, 3, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (22, 3, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (23, 3, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (24, 3, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (25, 3, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (26, 3, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (27, 3, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus/FileNetDocumentStandardizationService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (28, 4, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (29, 4, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (30, 4, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (31, 4, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (32, 4, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (33, 4, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (34, 4, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (35, 4, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (36, 4, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/DocumentDetectionService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (37, 5, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (38, 5, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (39, 5, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (40, 5, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (41, 5, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (42, 5, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (43, 5, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (44, 5, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (45, 5, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/EncompassDocumentRetrievalService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (46, 6, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (47, 6, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (48, 6, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (49, 6, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (50, 6, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (51, 6, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (52, 6, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (53, 6, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (54, 6, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus - dev backup/FileNetDocumentStandardizationService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus - dev backup/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (55, 7, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (56, 7, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (57, 7, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (58, 7, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (59, 7, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (60, 7, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (61, 7, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (62, 7, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (63, 7, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/DocumentDetectionService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (64, 8, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (65, 8, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (66, 8, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (67, 8, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (68, 8, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (69, 8, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (70, 8, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (71, 8, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (72, 8, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/EncompassDocumentRetrievalService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (73, 9, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (74, 9, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (75, 9, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (76, 9, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (77, 9, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (78, 9, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (79, 9, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (80, 9, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (81, 9, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.Imaging.ServiceBus - prod configed/FileNetDocumentStandardizationService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.Imaging.ServiceBus - prod configed/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (82, 10, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (83, 10, 2, N'http://FAKEMSGTST01.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (84, 10, 3, N'http://FAKEMSGTST02.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (85, 10, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (86, 10, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (87, 10, 6, N'http://FAKESOA01.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKESOA01/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (88, 10, 7, N'http://FAKESOA02.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKESOA02/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (89, 10, 8, N'http://FAKESOA03.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKESOA03/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (90, 10, 9, N'http://FAKESOA04.chec.local/STAR.Encompass.LoanMonitor.ServiceBus/LoanEventSubmissionService.svc', N'file://FAKESOA04/Inetpub/STAR.Encompass.LoanMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (91, 11, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (92, 11, 2, N'http://FAKEMSGTST01.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (93, 11, 3, N'http://FAKEMSGTST02.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (94, 11, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (95, 11, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (96, 11, 6, N'http://FAKESOA01.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKESOA01/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (97, 11, 7, N'http://FAKESOA02.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKESOA02/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (98, 11, 8, N'http://FAKESOA03.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKESOA03/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (99, 11, 9, N'http://FAKESOA04.chec.local/STAR.Enterprise.ServiceBus.Documents/FileNetIndexService.svc', N'file://FAKESOA04/Inetpub/STAR.Enterprise.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (100, 12, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (101, 12, 2, N'http://FAKEMSGTST01.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (102, 12, 3, N'http://FAKEMSGTST02.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (103, 12, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (104, 12, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (105, 12, 6, N'http://FAKESOA01.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKESOA01/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (106, 12, 7, N'http://FAKESOA02.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKESOA02/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (107, 12, 8, N'http://FAKESOA03.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKESOA03/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (108, 12, 9, N'http://FAKESOA04.chec.local/STAR.Origination.ConsentMonitor.ServiceBus/ConsentMonitor.svc', N'file://FAKESOA04/Inetpub/STAR.Origination.ConsentMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (109, 13, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (110, 13, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (111, 13, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (112, 13, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (113, 13, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (114, 13, 6, N'http://FAKESOA01.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (115, 13, 7, N'http://FAKESOA02.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (116, 13, 8, N'http://FAKESOA03.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (117, 13, 9, N'http://FAKESOA04.chec.local/STAR.Originations.CCAM.ServiceBus/UpdateLoanService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.CCAM.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (118, 14, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (119, 14, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (120, 14, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (121, 14, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (122, 14, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (123, 14, 6, N'http://FAKESOA01.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (124, 14, 7, N'http://FAKESOA02.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (125, 14, 8, N'http://FAKESOA03.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (126, 14, 9, N'http://FAKESOA04.chec.local/STAR.Originations.DisclosureMonitor.ServiceBus/DisclosureMonitor.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.DisclosureMonitor.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (127, 15, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (128, 15, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (129, 15, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (130, 15, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (131, 15, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (132, 15, 6, N'http://FAKESOA01.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (133, 15, 7, N'http://FAKESOA02.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (134, 15, 8, N'http://FAKESOA03.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (135, 15, 9, N'http://FAKESOA04.chec.local/STAR.Originations.Leads.ServiceBus/ReassignMortageProfessionalService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.Leads.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (136, 16, 1, N'', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (137, 16, 2, N'', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (138, 16, 3, N'', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (139, 16, 4, N'', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (140, 16, 5, N'', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (141, 16, 6, N'', N'file://FAKESOA01/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (142, 16, 7, N'', N'file://FAKESOA02/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (143, 16, 8, N'', N'file://FAKESOA03/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (144, 16, 9, N'', N'file://FAKESOA04/Inetpub/STAR.Originations.ODS/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (145, 17, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (146, 17, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (147, 17, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (148, 17, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (149, 17, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (150, 17, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (151, 17, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (152, 17, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (153, 17, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus/ParticipantService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (154, 18, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (155, 18, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (156, 18, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (157, 18, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (158, 18, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (159, 18, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (160, 18, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (161, 18, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (162, 18, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus/LoanUpdateService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (163, 19, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (164, 19, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (165, 19, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (166, 19, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (167, 19, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (168, 19, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (169, 19, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (170, 19, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (171, 19, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus/TMOUpdateService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (172, 20, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (173, 20, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (174, 20, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (175, 20, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (176, 20, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (177, 20, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (178, 20, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (179, 20, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (180, 20, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Credit/CreditRepositoryService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (181, 21, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (182, 21, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (183, 21, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (184, 21, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (185, 21, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (186, 21, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (187, 21, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (188, 21, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (189, 21, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Credit/FNMAFailoverService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Credit/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (190, 22, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (191, 22, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (192, 22, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (193, 22, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (194, 22, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (195, 22, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (196, 22, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (197, 22, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (198, 22, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/TriggerProcessorService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (199, 23, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (200, 23, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (201, 23, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (202, 23, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (203, 23, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (204, 23, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (205, 23, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (206, 23, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (207, 23, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LoanDataSyncService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (208, 24, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (209, 24, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (210, 24, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (211, 24, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (212, 24, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (213, 24, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (214, 24, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (215, 24, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (216, 24, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ULDDBuilderService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (217, 25, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (218, 25, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (219, 25, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (220, 25, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (221, 25, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (222, 25, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (223, 25, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (224, 25, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (225, 25, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckSubmissionService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (226, 26, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (227, 26, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (228, 26, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (229, 26, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (230, 26, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (231, 26, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (232, 26, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (233, 26, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (234, 26, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/EarlyCheckCallbackService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (235, 27, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (236, 27, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (237, 27, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (238, 27, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (239, 27, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (240, 27, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (241, 27, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (242, 27, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (243, 27, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQASubmissionService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (244, 28, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (245, 28, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (246, 28, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (247, 28, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (248, 28, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (249, 28, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (250, 28, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (251, 28, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (252, 28, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/LQACallbackService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (253, 29, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (254, 29, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (255, 29, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (256, 29, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (257, 29, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (258, 29, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (259, 29, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (260, 29, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (261, 29, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/NationstarSubmissionService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (262, 30, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (263, 30, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (264, 30, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (265, 30, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (266, 30, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (267, 30, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (268, 30, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (269, 30, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (270, 30, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Delivery.Review/ReviewDataMartIngestionService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Delivery.Review/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (271, 31, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (272, 31, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (273, 31, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (274, 31, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (275, 31, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (276, 31, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (277, 31, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (278, 31, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (279, 31, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/CreatePdfDocumentService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (280, 32, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (281, 32, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (282, 32, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (283, 32, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (284, 32, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (285, 32, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (286, 32, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (287, 32, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (288, 32, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/CCEService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (289, 33, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (290, 33, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (291, 33, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (292, 33, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (293, 33, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (294, 33, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (295, 33, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (296, 33, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (297, 33, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/ImagingSystemService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (298, 34, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (299, 34, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (300, 34, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (301, 34, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (302, 34, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (303, 34, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (304, 34, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (305, 34, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (306, 34, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/RateLockNotificationService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (307, 35, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (308, 35, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (309, 35, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (310, 35, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (311, 35, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (312, 35, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (313, 35, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (314, 35, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (315, 35, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/VendorIntegrationService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (316, 36, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (317, 36, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (318, 36, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (319, 36, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (320, 36, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (321, 36, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (322, 36, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (323, 36, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (324, 36, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/StatedApplicationService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (325, 37, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (326, 37, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (327, 37, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (328, 37, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (329, 37, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (330, 37, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (331, 37, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (332, 37, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (333, 37, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/LoanStatusNotificationService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (334, 38, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (335, 38, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (336, 38, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (337, 38, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (338, 38, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (339, 38, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (340, 38, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (341, 38, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (342, 38, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/LoanDocumentDatesService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (343, 39, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (344, 39, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (345, 39, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (346, 39, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (347, 39, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (348, 39, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (349, 39, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (350, 39, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (351, 39, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/DocumentRoutingService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (352, 40, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (353, 40, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (354, 40, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (355, 40, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (356, 40, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (357, 40, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (358, 40, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (359, 40, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (360, 40, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Documents/LOSService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Documents/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (361, 41, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (362, 41, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (363, 41, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (364, 41, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (365, 41, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (366, 41, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (367, 41, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (368, 41, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (369, 41, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.Encompass/LoanDataService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.Encompass/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (370, 42, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (371, 42, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (372, 42, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (373, 42, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (374, 42, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (375, 42, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (376, 42, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (377, 42, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (378, 42, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.ERDB/ERDBUpdateService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.ERDB/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (379, 43, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (380, 43, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (381, 43, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (382, 43, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (383, 43, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (384, 43, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (385, 43, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (386, 43, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (387, 43, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.EReport/EReportUpdateService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.EReport/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (388, 44, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (389, 44, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (390, 44, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (391, 44, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (392, 44, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (393, 44, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (394, 44, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (395, 44, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (396, 44, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanUpdateDetectionService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (397, 45, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (398, 45, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (399, 45, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (400, 45, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (401, 45, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (402, 45, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (403, 45, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (404, 45, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (405, 45, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.LendingSpace/LoanDataService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.LendingSpace/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (406, 46, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (407, 46, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (408, 46, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (409, 46, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (410, 46, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (411, 46, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (412, 46, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (413, 46, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (414, 46, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.ODS.Leads/SynchronizeLeadsService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (415, 47, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (416, 47, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (417, 47, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (418, 47, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (419, 47, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (420, 47, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (421, 47, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (422, 47, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (423, 47, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.ODS.Leads/UpdateLeadService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (424, 48, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (425, 48, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (426, 48, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (427, 48, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (428, 48, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (429, 48, 6, N'http://FAKESOA01.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (430, 48, 7, N'http://FAKESOA02.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (431, 48, 8, N'http://FAKESOA03.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (432, 48, 9, N'http://FAKESOA04.chec.local/STAR.Originations.ServiceBus.ODS.Leads/LeadToDatawarehouseEtlService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.ServiceBus.ODS.Leads/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (433, 49, 1, N'http://FAKEMSGDEV01.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKEMSGDEV01/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (434, 49, 2, N'http://FAKEMSGTST01.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKEMSGTST01/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (435, 49, 3, N'http://FAKEMSGTST02.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKEMSGTST02/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (436, 49, 4, N'http://FAKEMSGUAT01.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKEMSGUAT01/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (437, 49, 5, N'http://FAKEMSGUAT02.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKEMSGUAT02/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (438, 49, 6, N'http://FAKESOA01.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKESOA01/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (439, 49, 7, N'http://FAKESOA02.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKESOA02/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (440, 49, 8, N'http://FAKESOA03.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKESOA03/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO
INSERT [Links].[EnvironmentLink] ([Id], [ServiceLinkId], [ServerId], [Url], [FolderPath]) VALUES (441, 49, 9, N'http://FAKESOA04.chec.local/STAR.Originations.VendorServices.ServiceBus/TitleVendorUpdateService.svc', N'file://FAKESOA04/Inetpub/STAR.Originations.VendorServices.ServiceBus/')
GO

SET IDENTITY_INSERT [Links].[EnvironmentLink] OFF
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[Server]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [Links].[Server] ON 
GO

INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (1, N'FAKEWEBDEV01', 1)
INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (2, N'FAKEWEBTST01', 2)
INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (3, N'FAKEWEBTST02', 3)
INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (4, N'FAKEWEBUAT01', 4)
INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (5, N'FAKEWEBUAT01', 5)
INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (6, N'FAKESOA01', 6)
INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (7, N'FAKESOA02', 7)
INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (8, N'FAKESOA03', 8)
INSERT [Links].[Server] ([Id], [Name], [EnvironmentId]) VALUES (9, N'FAKESOA04', 9)
GO

SET IDENTITY_INSERT [Links].[Server] OFF
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[ServiceLink]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [Links].[ServiceLink] ON 
GO

INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (1, 1, N'DocumentDetectionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (2, 1, N'EncompassDocumentRetrievalService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (3, 1, N'FileNetDocumentStandardizationService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (4, 2, N'DocumentDetectionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (5, 2, N'EncompassDocumentRetrievalService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (6, 2, N'FileNetDocumentStandardizationService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (7, 3, N'DocumentDetectionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (8, 3, N'EncompassDocumentRetrievalService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (9, 3, N'FileNetDocumentStandardizationService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (10, 4, N'LoanEventSubmissionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (11, 5, N'FileNetIndexService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (12, 6, N'ConsentMonitor')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (13, 7, N'UpdateLoanService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (14, 8, N'DisclosureMonitor')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (15, 9, N'ReassignMortageProfessionalService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (16, 10, N'?')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (17, 11, N'ParticipantService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (18, 11, N'LoanUpdateService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (19, 11, N'TMOUpdateService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (20, 12, N'CreditRepositoryService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (21, 12, N'FNMAFailoverService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (22, 13, N'TriggerProcessorService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (23, 13, N'LoanDataSyncService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (24, 13, N'ULDDBuilderService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (25, 13, N'EarlyCheckSubmissionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (26, 13, N'EarlyCheckCallbackService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (27, 13, N'LQASubmissionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (28, 13, N'LQACallbackService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (29, 13, N'NationstarSubmissionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (30, 13, N'ReviewDataMartIngestionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (31, 14, N'CreatePdfDocumentService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (32, 14, N'CCEService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (33, 14, N'ImagingSystemService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (34, 14, N'RateLockNotificationService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (35, 14, N'VendorIntegrationService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (36, 14, N'StatedApplicationService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (37, 14, N'LoanStatusNotificationService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (38, 14, N'LoanDocumentDatesService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (39, 14, N'DocumentRoutingService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (40, 14, N'LOSService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (41, 15, N'LoanDataService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (42, 16, N'ERDBUpdateService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (43, 17, N'EReportUpdateService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (44, 18, N'LoanUpdateDetectionService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (45, 18, N'LoanDataService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (46, 19, N'SynchronizeLeadsService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (47, 19, N'UpdateLeadService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (48, 19, N'LeadToDatawarehouseEtlService')
GO
INSERT [Links].[ServiceLink] ([Id], [ApplicationLinkId], [ServiceName]) VALUES (49, 20, N'TitleVendorUpdateService')
GO

SET IDENTITY_INSERT [Links].[ServiceLink] OFF
GO

-- =======================================================================================================================
-- [Lookup]
-- =======================================================================================================================

-- -----------------------------------------------------------------------------------------------------------------------
-- [Lookup].[ApplicationType]
-- -----------------------------------------------------------------------------------------------------------------------

INSERT [Lookup].[ApplicationType] ([Code], [Description], [SortOrder]) VALUES (N'SBUS', N'Service Bus', 1)
INSERT [Lookup].[ApplicationType] ([Code], [Description], [SortOrder]) VALUES (N'TASK', N'Scheduled Task', 2)
INSERT [Lookup].[ApplicationType] ([Code], [Description], [SortOrder]) VALUES (N'UNKNOWN', N'Unknown', 5)
INSERT [Lookup].[ApplicationType] ([Code], [Description], [SortOrder]) VALUES (N'WCF', N'WCF Service', 3)
INSERT [Lookup].[ApplicationType] ([Code], [Description], [SortOrder]) VALUES (N'WEB', N'Website', 4)

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Lookup].[RunbookStepStatus]
-- -----------------------------------------------------------------------------------------------------------------------

INSERT [Lookup].[RunbookStepStatus] ([Code], [Description], [SortOrder]) VALUES (N'DELAYED', N'Delayed', 2)
INSERT [Lookup].[RunbookStepStatus] ([Code], [Description], [SortOrder]) VALUES (N'FINISHED', N'Finished', 3)
INSERT [Lookup].[RunbookStepStatus] ([Code], [Description], [SortOrder]) VALUES (N'STARTED', N'Started', 1)

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Lookup].[RunbookStepType]
-- -----------------------------------------------------------------------------------------------------------------------

INSERT [Lookup].[RunbookStepType] ([Code], [Description], [SortOrder]) VALUES (N'PREDEPLOYMENT', N'Pre-Deployment', 1)

GO

-- =======================================================================================================================
-- [People]
-- =======================================================================================================================

-- -----------------------------------------------------------------------------------------------------------------------
-- [People].[Contact]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [People].[Contact] ON 

GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (1, 21981, N'Dave Stone')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (2, 64176, N'Jason Arnold')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (3, 32113, N'Chris Hostetter')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (4, 346, N'Kris Kinard')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (5, 1099, N'Larry Flynt')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (6, 3140, N'Sara Gorrell')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (7, 4846, N'Nicholas Grant')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (8, 23247, N'Theresa Griffin')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (9, 23297, N'Musheer Mohammed')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (10, 23563, N'Matthew Krajca')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (11, 23989, N'Jeremy Jones')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (12, 30040, N'Saritha Dusari')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (13, 34982, N'Madhavi Vellore')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (14, 35895, N'Venkateswara Vutharkar')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (15, 35897, N'Shailendra Chavva')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (16, 36515, N'Sunil Thomas')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (17, 39850, N'Thangaraj Krishnan')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (18, 41382, N'Demetrius Cameron')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (19, 42847, N'Michael Dowell')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (20, 42872, N'Michael Lew')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (21, 43141, N'David Breneman')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (22, 43368, N'Anand Kumar')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (23, 43457, N'David Lane')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (24, 45774, N'Stephen Ursino')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (25, 45937, N'Calvin Yang')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (26, 45938, N'Noor Rehman')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (27, 45943, N'Dustin Strong')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (28, 46290, N'Cindy Hackimer')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (29, 47496, N'Sanjeev Tandon')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (30, 48825, N'Manoj Jami')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (31, 48960, N'Gayatri Mishra')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (32, 50405, N'Sravan Seggyam')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (33, 51434, N'Anand Manyala')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (34, 51832, N'Vimalatha Sama')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (35, 51833, N'Sebastian Abraham')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (36, 52764, N'Anwesa Ghosh')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (37, 52766, N'Rekha Ramadoss')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (38, 52769, N'Sreenivasulu Arveti')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (39, 52789, N'Mayura Patil')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (40, 55366, N'Samit Saxena')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (41, 56969, N'Sangam Khandelwal')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (42, 56971, N'Anup Shirbande')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (43, 56988, N'Shiva Farkade')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (44, 56995, N'Dolly Sharma')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (45, 56998, N'Puja Bharati')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (46, 56999, N'Ruchi Jain')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (47, 57000, N'Vishal Sharma')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (48, 57003, N'Sandeep Bhattacharya')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (49, 57005, N'Sumalini Tyagi')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (50, 57018, N'Saumya Tripathi')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (51, 57186, N'Abhijan Mohanty')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (52, 57578, N'Vinay Juneja')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (53, 57579, N'Saurabh Chaubey')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (54, 57807, N'Tadd Tobkin')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (55, 57862, N'Mark Harada')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (56, 58130, N'Juven Ghosh')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (57, 58197, N'Austin Rajasekaran')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (58, 58373, N'Keyur Shah')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (59, 60001, N'Sandeep Peddi')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (60, 61066, N'Jay Clayton')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (61, 61100, N'Aaron Crothers')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (62, 61382, N'Kris Drouet')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (63, 61416, N'Anubhuti Saxena')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (64, 63121, N'Dmitri Guskoff')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (65, 63431, N'Steven Belcher')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (66, 63484, N'Narasimha Yanala')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (67, 63532, N'Arojit Dasgupta')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (68, 64170, N'Sreevalli Adivi')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (69, 64513, N'Thomas Meyer')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (70, 64855, N'Steve Straley')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (71, 65429, N'Raghavendra Bodduluri')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (72, 66146, N'Charletta Barksdale')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (73, 68047, N'Chris Svrcek')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (74, 68394, N'Anil Komat reddy')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (75, 68612, N'Matt Clark')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (76, 69345, N'Chris Palmer')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (77, 69346, N'Stephen Walton')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (78, 69507, N'Kavitha LatteriRamesh')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (79, 70453, N'Gary Kershman')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (80, 71231, N'Qamarali Khan')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (81, 71448, N'Leo Chibvongodze')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (82, 71479, N'Ahad Amdani')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (83, 73091, N'Jottyjoseph Anithottam')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (84, NULL, N'Abigail Ommert')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (85, NULL, N'Carol Farrow')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (86, NULL, N'Jack Navarro')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (87, NULL, N'Jason Whitley')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (88, NULL, N'John Conley')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (89, NULL, N'John Davis')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (90, NULL, N'Pedro Garces')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (91, NULL, N'Robert Schoenstein')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (92, NULL, N'Thendral Mahalingam')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (93, NULL, N'Zeeshan Saleem')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (94, NULL, N'Brahmaji Moallapu')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (95, NULL, N'Brian Schneemann')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (96, NULL, N'Dornala Srinivas')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (97, NULL, N'Prabhakar Cheedhara')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (98, NULL, N'Kampati Srinivas')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (99, NULL, N'Kari Ruvalcaba')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (100, NULL, N'Krishna Chunduri')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (101, NULL, N'Muralidhar Narapareddy')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (102, NULL, N'Nagaraju Devulapelly')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (103, NULL, N'Ria Mukherjee')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (104, NULL, N'Sambasiva Akepati')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (105, NULL, N'Sathish Chimmula')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (106, NULL, N'Seshu Merugu')
GO
INSERT [People].[Contact] ([Id], [UserId], [DisplayName]) VALUES (107, NULL, N'DBA')
GO
SET IDENTITY_INSERT [People].[Contact] OFF
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [People].[Team]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [People].[Team] ON 
GO

INSERT [People].[Team] ([Id], [Name]) VALUES (1, N'DBA')
GO
INSERT [People].[Team] ([Id], [Name]) VALUES (2, N'DevOps')
GO

SET IDENTITY_INSERT [People].[Team] OFF
GO

-- =======================================================================================================================
-- [Runbook]
-- =======================================================================================================================

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStep]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [Runbook].[RunbookStep] ON 

GO
INSERT [Runbook].[RunbookStep] ([Id], [TemplateId], [RfcId], [GroupNumber], [StepNumber], [Duration], [Name], [Description], [Notes], [Time], [IsHtml], [RunbookStepTypeCode], [RunbookStepStatusCode]) VALUES (1, 58, NULL, 1, 1, 5, N'Database Replication', N'Step 1  : a) Script out replication publication and subscribers.', NULL, NULL, NULL, NULL, NULL)
GO
INSERT [Runbook].[RunbookStep] ([Id], [TemplateId], [RfcId], [GroupNumber], [StepNumber], [Duration], [Name], [Description], [Notes], [Time], [IsHtml], [RunbookStepTypeCode], [RunbookStepStatusCode]) VALUES (2, 58, NULL, 2, 1, 5, N'Run Scripts', N'Execute the following script on [VRSQLORIGIN].[PoolTradeManagement] database.', NULL, NULL, NULL, NULL, NULL)
GO
INSERT [Runbook].[RunbookStep] ([Id], [TemplateId], [RfcId], [GroupNumber], [StepNumber], [Duration], [Name], [Description], [Notes], [Time], [IsHtml], [RunbookStepTypeCode], [RunbookStepStatusCode]) VALUES (3, 58, NULL, 3, 1, 5, N'Deploy Websites', N'Approve STAR.CapitalMarkets - RTM via Release Management client', NULL, NULL, NULL, NULL, NULL)
GO
INSERT [Runbook].[RunbookStep] ([Id], [TemplateId], [RfcId], [GroupNumber], [StepNumber], [Duration], [Name], [Description], [Notes], [Time], [IsHtml], [RunbookStepTypeCode], [RunbookStepStatusCode]) VALUES (4, 58, NULL, 3, 2, 5, N'Monitor Replication', N'Monitor web replication tasks to ensure full replication:', NULL, NULL, NULL, NULL, NULL)
GO
INSERT [Runbook].[RunbookStep] ([Id], [TemplateId], [RfcId], [GroupNumber], [StepNumber], [Duration], [Name], [Description], [Notes], [Time], [IsHtml], [RunbookStepTypeCode], [RunbookStepStatusCode]) VALUES (5, 58, NULL, 3, 3, 5, N'Verify', N'Verify CapitalMarkets UI''s deploy to...', NULL, NULL, NULL, NULL, NULL)
GO
SET IDENTITY_INSERT [Runbook].[RunbookStep] OFF
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepDeveloper]
-- -----------------------------------------------------------------------------------------------------------------------

INSERT [Runbook].[RunbookStepDeveloper] ([RunbookStepId], [ContactId]) VALUES (1, 1)
INSERT [Runbook].[RunbookStepDeveloper] ([RunbookStepId], [ContactId]) VALUES (2, 1)
INSERT [Runbook].[RunbookStepDeveloper] ([RunbookStepId], [ContactId]) VALUES (3, 1)
INSERT [Runbook].[RunbookStepDeveloper] ([RunbookStepId], [ContactId]) VALUES (4, 1)
INSERT [Runbook].[RunbookStepDeveloper] ([RunbookStepId], [ContactId]) VALUES (5, 1)
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepPbi]
-- -----------------------------------------------------------------------------------------------------------------------

INSERT [Runbook].[RunbookStepPbi] ([RunbookStepId], [PbiNumber]) VALUES (1, 96621)
INSERT [Runbook].[RunbookStepPbi] ([RunbookStepId], [PbiNumber]) VALUES (2, 96621)
INSERT [Runbook].[RunbookStepPbi] ([RunbookStepId], [PbiNumber]) VALUES (3, 96621)
INSERT [Runbook].[RunbookStepPbi] ([RunbookStepId], [PbiNumber]) VALUES (4, 96621)
INSERT [Runbook].[RunbookStepPbi] ([RunbookStepId], [PbiNumber]) VALUES (5, 96621)
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepResource]
-- -----------------------------------------------------------------------------------------------------------------------

INSERT [Runbook].[RunbookStepResource] ([RunbookStepId], [ContactId]) VALUES (1, 107)
INSERT [Runbook].[RunbookStepResource] ([RunbookStepId], [ContactId]) VALUES (2, 107)
INSERT [Runbook].[RunbookStepResource] ([RunbookStepId], [ContactId]) VALUES (3, 58)
INSERT [Runbook].[RunbookStepResource] ([RunbookStepId], [ContactId]) VALUES (4, 58)
INSERT [Runbook].[RunbookStepResource] ([RunbookStepId], [ContactId]) VALUES (5, 58)
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepTeam]
-- -----------------------------------------------------------------------------------------------------------------------

INSERT [Runbook].[RunbookStepTeam] ([RunbookStepId], [TeamId]) VALUES (1, 1)
INSERT [Runbook].[RunbookStepTeam] ([RunbookStepId], [TeamId]) VALUES (2, 1)
INSERT [Runbook].[RunbookStepTeam] ([RunbookStepId], [TeamId]) VALUES (3, 2)
INSERT [Runbook].[RunbookStepTeam] ([RunbookStepId], [TeamId]) VALUES (4, 2)
INSERT [Runbook].[RunbookStepTeam] ([RunbookStepId], [TeamId]) VALUES (5, 2)
GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookTemplate]
-- -----------------------------------------------------------------------------------------------------------------------

SET IDENTITY_INSERT [Runbook].[RunbookTemplate] ON 

GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (1, N'Encompass.CancelDecline.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (2, N'Encompass.DataExchange.Service')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (3, N'Encompass.DecisionHistory.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (4, N'Encompass.LoanSetupTracking.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (5, N'Encompass.SameServicerLoanData.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (6, N'Encompass.Servicing.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (7, N'Encompass.TitleCompanyOverride.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (8, N'Encompass.Treasury.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (9, N'Encompass.VendorMaster.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (10, N'Enterprise.ServiceBus.Documents')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (11, N'EscrowFPS')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (12, N'GLL.DataSyncExecuteAndMonitorService')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (13, N'GLL.dataSyncG')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (14, N'GLL.DisclosureCompliance')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (15, N'GLL.EmailIntegration')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (16, N'GLL.EmailUploader')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (17, N'GLL.EncompassToERDBSynch')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (18, N'GLL.EncompassUserMonitor')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (19, N'GLL.EncompassUserSync')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (20, N'GLL.ERDBUpdateService')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (21, N'GLL.folderUpload')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (22, N'GLL.GeneralPurpose.Assemblies')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (23, N'GLL.GLLBoardingFileBatch')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (24, N'GLL.GLLERDBLoanSnapshot')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (25, N'GLL.GLLGeneralPurposeQueueProcessServices')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (26, N'GLL.GLLMessageRoutingService')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (27, N'GLL.GLModel')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (28, N'GLL.GLMyLoanQueueProcessServices')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (29, N'GLL.GLTitleVendorMasterLog')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (30, N'GLL.NationstarDocumentTransferService')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (31, N'GLL.NeedToSubmit')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (32, N'GLL.NightlySweep')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (33, N'GLL.ODStoODSDataTransferService')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (34, N'GLL.ReadEncompassAndLoadDSLoanQueue')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (35, N'GLL.ReadVelocifyAndLoadLeadQueueServices')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (36, N'GLL.redisclosure')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (37, N'GLL.SystemMonitorCacheServices')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (38, N'GLL.Unlock1D')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (39, N'GLL.VelocifyEncompassQueuedServices')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (40, N'GLL.VelocifyToLeadsSync')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (41, N'GLL.VelocifyToLeadsUpdateServices')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (42, N'GLL.VendorMasterTableCacheService')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (43, N'GLLEnterpriseMessageQueuingAssemblies')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (44, N'ODS.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (45, N'Originations.EventPublisher.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (46, N'Originations.LicenseUploader')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (47, N'Originations.LoanPayoffRequest.Monitor')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (48, N'Originations.ScheduledTask.DTAReconciliation')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (49, N'Originations.ScheduledTasks.UWApprovalExtract')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (50, N'OriginationsODS')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (51, N'Pricing')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (52, N'QCAuditSelectServices')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (53, N'QCSampleRateMaintenance')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (54, N'ScheduledTask.WindowsService')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (55, N'ServiceBus.ODS.Encompass')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (56, N'ServiceBus.ODS.Leads')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (57, N'ServiceBus.ODS.LendingSpace')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (58, N'CapitalMarkets')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (59, N'STAR.Encompass.AdverseAction.ScheduledTask')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (60, N'STAR.Encompass.AppComplete.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (61, N'STAR.Encompass.AppDate.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (62, N'STAR.Encompass.CancelToAdverse.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (63, N'STAR.Encompass.CreditReport.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (64, N'STAR.Encompass.DataExchange.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (65, N'STAR.Encompass.DisclosureTracking.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (66, N'STAR.Encompass.DocMagic.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (67, N'STAR.Encompass.Gateway')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (68, N'STAR.Encompass.GMIValidation.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (69, N'STAR.Encompass.Imaging.ServiceBus')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (70, N'STAR.Encompass.LoanMonitor')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (71, N'STAR.Encompass.LoanMonitor.ServiceBus')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (72, N'STAR.Encompass.LoanMonitor.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (73, N'STAR.Encompass.LoanPartyAllocation.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (74, N'STAR.Encompass.LoanReconciliation')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (75, N'STAR.Encompass.LoanServices.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (76, N'STAR.Encompass.LoanServices.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (77, N'STAR.Encompass.ODS.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (78, N'STAR.Encompass.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (79, N'STAR.Encompass.PluginManager')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (80, N'STAR.Encompass.Signing.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (81, N'STAR.Encompass.TaskManager.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (82, N'STAR.Encompass.Treasury.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (83, N'STAR.Encompass.TtlCompChgd.Subscriber.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (84, N'STAR.Encompass.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (85, N'STAR.Encompass.UWApprovalAuthority.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (86, N'STAR.Encompass.UWAssignment.UI')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (87, N'STAR.Encompass.UWCondition.Plugin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (88, N'STAR.Encompass.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (89, N'STAR.EServ')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (90, N'STAR.EServ2')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (91, N'STAR.GLReports')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (92, N'STAR.GLS')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (93, N'STAR.GreenlightAdmin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (94, N'STAR.JustLendAdmin')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (95, N'STAR.Origin.SchdTask.DisclosureReportProcessor')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (96, N'STAR.Origination.ConsentMonitor')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (97, N'STAR.Originations.ChangePublisher.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (98, N'STAR.Originations.Credit.ServiceBus')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (99, N'STAR.Originations.Credit.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (100, N'STAR.Originations.Delivery.Review.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (101, N'STAR.Originations.Delivery.Review.Website')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (102, N'STAR.Originations.DisclosureMonitor')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (103, N'STAR.Originations.Fees.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (104, N'STAR.Originations.Leads.ServiceBus')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (105, N'STAR.Originations.Leads.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (106, N'STAR.Originations.LoanPartyAllocation.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (107, N'STAR.Originations.LoanServices.ServiceBus')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (108, N'STAR.Originations.LoanServices.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (109, N'STAR.Originations.Pricing.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (110, N'STAR.Originations.SchedTask.ConsentProcessor')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (111, N'STAR.Originations.SchedTask.DisclosureTracking')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (112, N'STAR.Originations.ScheduledTask.AporUpdate')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (113, N'STAR.Originations.ServiceBus.ERDB')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (114, N'STAR.Originations.ServiceBus.EReport')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (115, N'STAR.Originations.Servicing.ODS')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (116, N'STAR.Originations.UserManagement.WCF')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (117, N'STAR.Originations.VendorServices.ServiceBus')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (118, N'STAR.Originations.WCF.Router')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (119, N'STAR.OriginationsODS.BusinessRules')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (120, N'STAR.PricerUnlockAgent')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (121, N'STAR.Pricing')
GO
INSERT [Runbook].[RunbookTemplate] ([Id], [Name]) VALUES (122, N'STAR.sCal')
GO

SET IDENTITY_INSERT [Runbook].[RunbookTemplate] OFF
GO


-- -----------------------------------------------------------------------------------------------------------------------
-- CONSTRAINTS
-- -----------------------------------------------------------------------------------------------------------------------

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[ApplicationLink]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='ApplicationLink_ApplicationGroup_FK')
    BEGIN
           ALTER TABLE [Links].[ApplicationLink]
        ADD CONSTRAINT [ApplicationLink_ApplicationGroup_FK]
           FOREIGN KEY ([ApplicationGroupId])
            REFERENCES [Links].[ApplicationGroup] ([Id])
    END
         PRINT 'OK: [ApplicationLink_ApplicationGroup_FK] CONSTRAINT CREATED'

GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='ApplicationLink_ApplicationType_FK')
    BEGIN
           ALTER TABLE [Links].[ApplicationLink]
        ADD CONSTRAINT [ApplicationLink_ApplicationType_FK]
           FOREIGN KEY ([AppTypeCode])
            REFERENCES [Lookup].[ApplicationType] ([Code])
    END
         PRINT 'OK: [ApplicationLink_ApplicationType_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[EnvironmentLink]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='EnvironmentLink_ServiceLink_FK')
    BEGIN
           ALTER TABLE [Links].[EnvironmentLink]
        ADD CONSTRAINT [EnvironmentLink_ServiceLink_FK]
           FOREIGN KEY ([ServiceLinkId])
            REFERENCES [Links].[ServiceLink] ([Id])
    END
         PRINT 'OK: [EnvironmentLink_ServiceLink_FK] CONSTRAINT CREATED'

GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='EnvironmentLink_Server_FK')
    BEGIN
           ALTER TABLE [Links].[EnvironmentLink]
        ADD CONSTRAINT [EnvironmentLink_Server_FK]
           FOREIGN KEY ([ServerId])
            REFERENCES [Links].[Server] ([Id])
    END
         PRINT 'OK: [EnvironmentLink_Server_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[Server]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='Server_Environment_FK')
    BEGIN
           ALTER TABLE [Links].[Server]
        ADD CONSTRAINT [Server_Environment_FK]
           FOREIGN KEY ([EnvironmentId])
            REFERENCES [Links].[Environment] ([Id])
    END
         PRINT 'OK: [Server_Environment_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Links].[ServiceLink]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='ServiceLink_ApplicationLink_FK')
    BEGIN
           ALTER TABLE [Links].[ServiceLink]
        ADD CONSTRAINT [ServiceLink_ApplicationLink_FK]
           FOREIGN KEY ([ApplicationLinkId])
            REFERENCES [Links].[ApplicationLink] ([Id])
    END
         PRINT 'OK: [ServiceLink_ApplicationLink_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [People].[TeamMember]
-- -----------------------------------------------------------------------------------------------------------------------

-- NONE

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[Rfc]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='Rfc_Contact_FK')
    BEGIN
           ALTER TABLE [Runbook].[Rfc]
        ADD CONSTRAINT [Rfc_Contact_FK]
           FOREIGN KEY ([ContactId])
            REFERENCES [People].[Contact] ([Id])
    END
         PRINT 'OK: [Rfc_Contact_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStep]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStep_Rfc_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStep]
        ADD CONSTRAINT [RunbookStep_Rfc_FK]
           FOREIGN KEY ([RfcId])
            REFERENCES [Runbook].[Rfc] ([Id])
    END
         PRINT 'OK: [RunbookStep_Rfc_FK] CONSTRAINT CREATED'

GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStep_RunbookStepStatus_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStep]
        ADD CONSTRAINT [RunbookStep_RunbookStepStatus_FK]
           FOREIGN KEY ([RunbookStepStatusCode])
            REFERENCES [Lookup].[RunbookStepStatus] ([Code])
    END
         PRINT 'OK: [RunbookStep_RunbookStepStatus_FK] CONSTRAINT CREATED'

GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStep_RunbookStepType_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStep]
        ADD CONSTRAINT [RunbookStep_RunbookStepType_FK]
           FOREIGN KEY ([RunbookStepTypeCode])
            REFERENCES [Lookup].[RunbookStepType] ([Code])
    END
         PRINT 'OK: [RunbookStep_RunbookStepType_FK] CONSTRAINT CREATED'

GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStep_RunbookTemplate_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStep]
        ADD CONSTRAINT [RunbookStep_RunbookTemplate_FK]
           FOREIGN KEY ([TemplateId])
            REFERENCES [Runbook].[RunbookTemplate] ([Id])
    END
         PRINT 'OK: [RunbookStep_RunbookTemplate_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepDeveloper]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepDeveloper_Contact_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepDeveloper]
        ADD CONSTRAINT [RunbookStepDeveloper_Contact_FK]
           FOREIGN KEY ([ContactId])
            REFERENCES [People].[Contact] ([Id])
    END
         PRINT 'OK: [RunbookStepDeveloper_Contact_FK] CONSTRAINT CREATED'

GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepDeveloper_RunbookStep_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepDeveloper]
        ADD CONSTRAINT [RunbookStepDeveloper_RunbookStep_FK]
           FOREIGN KEY ([RunbookStepId])
            REFERENCES [Runbook].[RunbookStep] ([Id])
    END
         PRINT 'OK: [RunbookStepDeveloper_RunbookStep_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepPbi]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepPbi_RunbookStep_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepPbi]
        ADD CONSTRAINT [RunbookStepPbi_RunbookStep_FK]
           FOREIGN KEY ([RunbookStepId])
            REFERENCES [Runbook].[RunbookStep] ([Id])
    END
         PRINT 'OK: [RunbookStepPbi_RunbookStep_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepResource]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepResource_RunbookStep_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepResource]
        ADD CONSTRAINT [RunbookStepResource_RunbookStep_FK]
           FOREIGN KEY ([RunbookStepId])
            REFERENCES [Runbook].[RunbookStep] ([Id])
    END
         PRINT 'OK: [RunbookStepResource_RunbookStep_FK] CONSTRAINT CREATED'

GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepResource_Contact_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepResource]
        ADD CONSTRAINT [RunbookStepResource_Contact_FK]
           FOREIGN KEY ([ContactId])
            REFERENCES [People].[Contact] ([Id])
    END
         PRINT 'OK: [RunbookStepResource_Contact_FK] CONSTRAINT CREATED'

GO

-- -----------------------------------------------------------------------------------------------------------------------
-- [Runbook].[RunbookStepTeam]
-- -----------------------------------------------------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepTeam_Team_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepTeam]
        ADD CONSTRAINT [RunbookStepTeam_Team_FK]
           FOREIGN KEY ([TeamId])
            REFERENCES [People].[Team] ([Id])
    END
         PRINT 'OK: [RunbookStepTeam_Team_FK] CONSTRAINT CREATED'

GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME ='RunbookStepTeam_RunbookStep_FK')
    BEGIN
           ALTER TABLE [Runbook].[RunbookStepTeam]
        ADD CONSTRAINT [RunbookStepTeam_RunbookStep_FK]
           FOREIGN KEY ([RunbookStepId])
            REFERENCES [Runbook].[RunbookStep] ([Id])
    END
         PRINT 'OK: [RunbookStepTeam_RunbookStep_FK] CONSTRAINT CREATED'

GO

