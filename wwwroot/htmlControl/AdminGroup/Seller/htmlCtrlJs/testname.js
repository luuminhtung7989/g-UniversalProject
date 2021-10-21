IF OBJECT_ID(N'Users', N'U') IS NOT NULL DROP TABLE  Users; 
CREATE TABLE Users (
Id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
UserName nvarchar(50) NOT NULL,
Password nvarchar(50) NOT NULL,
Email nvarchar(50) NOT NULL,
PassCode nvarchar(50) NOT NULL,
Phone nvarchar(50) NOT NULL,
Domain nvarchar(50) NOT NULL,
BusinessID bigint,
isActive int NOT NULL DEFAULT 0,
isValid int NOT NULL DEFAULT 0,
isCreatedDate datetime NOT NULL DEFAULT GETDATE(),
isUpdatedDate datetime NOT NULL DEFAULT GETDATE(),
isPartFull nvarchar(50) NOT NULL DEFAULT ''
);
  
IF OBJECT_ID(N'Logins', N'U') IS NOT NULL DROP TABLE  Logins; 
CREATE TABLE Logins (
Id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
TimeLogin datetime NOT NULL DEFAULT GETDATE(),
TimeLogout datetime NOT NULL DEFAULT GETDATE(),
UpdatedTime datetime NOT NULL DEFAULT GETDATE(),
TotalTimes  float NOT NULL DEFAULT 0.00,
UserID bigint,
Online int NOT NULL DEFAULT 0,
isValid int NOT NULL DEFAULT 0,
isCreatedDate datetime NOT NULL DEFAULT GETDATE(),
isUpdatedDate datetime NOT NULL DEFAULT GETDATE(),
isPartFull nvarchar(50) NOT NULL DEFAULT ''
);
  
IF OBJECT_ID(N'LogActivity', N'U') IS NOT NULL DROP TABLE  LogActivity; 
CREATE TABLE LogActivity (
Id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
task nvarchar(50) NOT NULL DEFAULT '',
todo nvarchar(50) NOT NULL DEFAULT '',
UpdatedTime datetime NOT NULL DEFAULT GETDATE(),
UserID bigint,
isValid int NOT NULL DEFAULT 0,
isCreatedDate datetime NOT NULL DEFAULT GETDATE(),
isUpdatedDate datetime NOT NULL DEFAULT GETDATE(),
isPartFull nvarchar(50) NOT NULL DEFAULT ''
);
  
IF OBJECT_ID(N'Business', N'U') IS NOT NULL DROP TABLE  Business; 
CREATE TABLE Business (
Id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
Name nvarchar(50) NOT NULL,
ShortName nvarchar(50) NOT NULL,
Email nvarchar(50) NOT NULL,
Address nvarchar(50) NOT NULL,
Phone nvarchar(50) NOT NULL,
City nvarchar(50) NOT NULL,
District nvarchar(50) NOT NULL,
Ward nvarchar(50) NOT NULL,
CountryCode nvarchar(50) NOT NULL,
StateCode nvarchar(50) NOT NULL,
PostalCode nvarchar(50) NOT NULL,
Logo nvarchar(50) NOT NULL,
BannerLogo nvarchar(50) NOT NULL,
OpenTime nvarchar(50) NOT NULL,
Description nvarchar(50) NOT NULL,
IndustryID bigint,
UserID bigint,
isActive int NOT NULL DEFAULT 0,
isValid int NOT NULL DEFAULT 0,
isCreatedDate datetime NOT NULL DEFAULT GETDATE(),
isUpdatedDate datetime NOT NULL DEFAULT GETDATE(),
isPartFull nvarchar(50) NOT NULL DEFAULT ''
);
  
IF OBJECT_ID(N'BusinessTime', N'U') IS NOT NULL DROP TABLE  BusinessTime; 
CREATE TABLE BusinessTime (
Id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
dayth nvarchar(50) NOT NULL,
opentime datetime NOT NULL DEFAULT GETDATE(),
closetime datetime NOT NULL DEFAULT GETDATE(),
BusinessID bigint,
isActive int NOT NULL DEFAULT 0,
isValid int NOT NULL DEFAULT 0,
isCreatedDate datetime NOT NULL DEFAULT GETDATE(),
isUpdatedDate datetime NOT NULL DEFAULT GETDATE(),
isPartFull nvarchar(50) NOT NULL DEFAULT ''
);
  
IF OBJECT_ID(N'BusinessServiceStaffSetting', N'U') IS NOT NULL DROP TABLE  BusinessServiceStaffSetting; 
CREATE TABLE BusinessServiceStaffSetting (
Id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
Description nvarchar(50) NOT NULL,
BusinessID bigint,
isActive int NOT NULL DEFAULT 0,
isValid int NOT NULL DEFAULT 0,
isCreatedDate datetime NOT NULL DEFAULT GETDATE(),
isUpdatedDate datetime NOT NULL DEFAULT GETDATE(),
isPartFull nvarchar(50) NOT NULL DEFAULT ''
);
  
IF OBJECT_ID(N'TicketSetting', N'U') IS NOT NULL DROP TABLE  TicketSetting; 
CREATE TABLE TicketSetting (
Id bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
FieldName nvarchar(50) NOT NULL,
FormName nvarchar(50) NOT NULL,
TableName nvarchar(50) NOT NULL,
Ordered nvarchar(50) NOT NULL,
BusinessID bigint,
isActive int NOT NULL DEFAULT 0,
isValid int NOT NULL DEFAULT 0,
isCreatedDate datetime NOT NULL DEFAULT GETDATE(),
isUpdatedDate datetime NOT NULL DEFAULT GETDATE(),
isPartFull nvarchar(50) NOT NULL DEFAULT ''
);
  

