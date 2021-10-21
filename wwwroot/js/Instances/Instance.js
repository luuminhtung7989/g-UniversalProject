Users(ID, Domain, UserName, Password, Email, Phone)
Login(UserID, Online, TimeLogin, TimeLogout, TotalTimes, UpdatedTime)
LogActivity(UserID, task, todo, UpdatedTime)
Business(UserID, ID, Name, ShortName, Phone, Address, Email, City, District, Ward, ContryCode, StateCode, PostalCode, Logo, BannerLogo, OpenTime, Description, IndustryID)
BusinessTime(BusinessID, dayth, opentime, closetime, active)
BusinessServiceStaffSetting(BusinessID, Description, Active)
TicketSetting(BusinessID, FieldName, FormName, TableName, Ordered, Active)
CheckoutType(ID, Name, FormName, Active)
CheckoutSetting(BusinessID, CheckoutTypeID, PointBonus)
BusinessPolycies(BusinessID, Description, OrtherPolices, Active)

BusinessLanguages(BusinessID, LanguageID, Active)
Languages(ID, Name, FormName)

SMS(ID, NameTemplate, Description, FormName)

SMSGobalTemplate(ID, NameTemplate, Description, FormName)
BusinessSMS(BusinessID, SMSID, FormName, ContentName, Active)

GeneralDashBoard(BusinessID, TotalUsers, TotalSMS, TotalInCome, TotalReviewInSystem, TotalReviewGoogle, TotalReviewFaceBook, TotalReviewYelp)
GeneralDasBoardInDay(BusinessID, Date, UpdatedTime, TotalUsers, TotalSMS, TotalInCome, TotalReviewInSystem, TotalReviewGoogle, TotalReviewFaceBook, TotalReviewYelp)

TotalServicesDashBoard(BusinessID, ServiceID, InComeThisServive, Total, ReviewInSystem, ReviewInGoogle, ReviewInFB, ReviewInYelp)
ServicesDashBoardInDay(BusinessID, Date, UpdatedTime, ServiceID, InComeThisServive, Total, ReviewInSystem, ReviewInGoogle, ReviewInFB, ReviewInYelp)
TotalCustomersDashBoard(BusinessID, CustomerType, TotalCustomerThisType)
CustomersDashBoardInDay(BusinessID, Date, UpdatedTime, CustomerType, TotalCustomerThisType)
CustomersDashBoard(BusinessID, LastCheckIn, LastCheckOut, LastPayment, Points, LastCupon, Active, TotalDayNotReturn, TotalPayment)

Promotion(ID, BusinessID, NumOrderd, Expense, Income, Name, DateSent, DateStop, DeliverEmail, DeliverSMS, TotalUserUsePromotionSMS, TotalUserUsePromotionEmail)
PromotionDetail(PromotionID, WhatOfferName, Discount, MixCustomerType, EmailTitle, BusinessName, SaveNextTime, OtherDesctiption, ActiveSTOPfromUer, ExpireDate, FromDate, ToDate, PhoneTest, EmailTest, UseOneTimeThisPromotion, DateSendPromotion, SendNow, UpdatedTime)

PromotionDashBoard(BusinessID, PromotionID, TotalDelivered, Email, Phone, Income, Expense)
PromotionDetailDashBoard(BusinessID, PromotionID, CusomerName, CustomerPhone, NumVisit, TotalDelivered, Email, Phone, Income, Exprnse)

Staff(BusinessID, StaffID, Name, Avatar, Code, NickName, Cell, Email, Address, Color, DepartmentID, ortherContactCell)
StaffWorkingTime(StaffID, Day, InTime, OutTime, Active)
StaffServives(StaffID, ServerID, ServiceName, Active)
Category(BusinessID, CategoryID, Name, Color, Active)
Services(BusinessID, ServicesID, CategoryID, Name, Price, Duration, Active, NumStaffDoIt)
CustomerType(BusinessID, CustomerIDType, Name, Active)
Customer(BusinessID, CustID, Name, Phone, Email, Birtday, CustType, VisitCount, LastVisited, LifeTimePoint, CurrentPoint, SMSSent, EmailSend, Note, AnniversaryDay, AnniversaryDay2, AnniversaryDay3, RelationInfo, OcupationInfo)
Order(BusinessID, OrderID, OrderNumber, CustomerID, DateCheckIn, DateCheckOut, RoomInfo, DateDeliveryInfo, DaySendInfo, PersonReceiveInfo, StatusOrder)
OrderDetail(OrderID, ServicesID, Price, TIP, StaffID, NumServices, Discount, Coupon, Total, Note)

