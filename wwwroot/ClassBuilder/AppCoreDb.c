using System;
using System.Collections.Generic;
namespace AppCoreDb
{
    
    public class sysdiagrams
    {
 		 public string name {get;set;}
		 public int principal_id {get;set;}
		 public int diagram_id {get;set;}
		 public int version {get;set;}
		 public string definition {get;set;}
 
    }
    public class Users
    {
 		 public long Id {get;set;}
		 public string UserName {get;set;}
		 public string Password {get;set;}
		 public string Email {get;set;}
		 public string PassCode {get;set;}
		 public string Phone {get;set;}
		 public string Domain {get;set;}
		 public long BusinessID {get;set;}
		 public long StaffID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Logins
    {
 		 public long Id {get;set;}
		 public DateTime TimeLogin {get;set;}
		 public DateTime TimeLogout {get;set;}
		 public DateTime UpdatedTime {get;set;}
		 public double TotalTimes {get;set;}
		 public long UserID {get;set;}
		 public int Online {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class LogActivity
    {
 		 public long Id {get;set;}
		 public string task {get;set;}
		 public string todo {get;set;}
		 public DateTime UpdatedTime {get;set;}
		 public long UserID {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Business
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string ShortName {get;set;}
		 public string Email {get;set;}
		 public string Address {get;set;}
		 public string Phone {get;set;}
		 public string City {get;set;}
		 public string District {get;set;}
		 public string Ward {get;set;}
		 public string CountryCode {get;set;}
		 public string StateCode {get;set;}
		 public string PostalCode {get;set;}
		 public string Logo {get;set;}
		 public string BannerLogo {get;set;}
		 public string OpenTime {get;set;}
		 public string Description {get;set;}
		 public long IndustryID {get;set;}
		 public long UserID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class BusinessTime
    {
 		 public long Id {get;set;}
		 public string dayth {get;set;}
		 public DateTime opentime {get;set;}
		 public DateTime closetime {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class BusinessServiceStaffSetting
    {
 		 public long Id {get;set;}
		 public string Description {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class TicketSetting
    {
 		 public long Id {get;set;}
		 public string FieldName {get;set;}
		 public string FormName {get;set;}
		 public string TableName {get;set;}
		 public string Ordered {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class CheckoutType
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string FormName {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class CheckoutSetting
    {
 		 public long Id {get;set;}
		 public double PointBonus {get;set;}
		 public long CheckoutTypeID {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class BusinessPolycies
    {
 		 public long Id {get;set;}
		 public string Description {get;set;}
		 public string OrtherPolices {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class BusinessLanguages
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long LanguageID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Languages
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string FormName {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class SMS
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string FormName {get;set;}
		 public string NameTemplate {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class SMSGobalTemplate
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string FormName {get;set;}
		 public string NameTemplate {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class BusinessSMS
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long SMSID {get;set;}
		 public string ContentName {get;set;}
		 public string FormName {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class PromotionDetail
    {
 		 public long Id {get;set;}
		 public long PromotionID {get;set;}
		 public string WhatOfferName {get;set;}
		 public double Discount {get;set;}
		 public int MixCustomerType {get;set;}
		 public string EmailTitle {get;set;}
		 public string BusinessName {get;set;}
		 public string OtherDesctiption {get;set;}
		 public string PhoneTest {get;set;}
		 public string EmailTest {get;set;}
		 public long ActiveSTOPfromUer {get;set;}
		 public int UseOneTimeThisPromotion {get;set;}
		 public int SendNow {get;set;}
		 public double Income {get;set;}
		 public DateTime DateSendPromotion {get;set;}
		 public DateTime UpdatedTime {get;set;}
		 public DateTime SaveNextTime {get;set;}
		 public DateTime ExpireDate {get;set;}
		 public DateTime FromDate {get;set;}
		 public DateTime ToDate {get;set;}
		 public string DeliverEmail {get;set;}
		 public string DeliverSMS {get;set;}
		 public string Description {get;set;}
		 public long TotalUserUsePromotionSMS {get;set;}
		 public long TotalUserUsePromotionEmail {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class PromotionDashBoard
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long PromotionID {get;set;}
		 public double TotalDelivered {get;set;}
		 public double Income {get;set;}
		 public double Expense {get;set;}
		 public string Phone {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class PromotionDetailDashBoard
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long PromotionID {get;set;}
		 public string CusomerName {get;set;}
		 public string CustomerPhone {get;set;}
		 public int NumVisit {get;set;}
		 public double TotalDelivered {get;set;}
		 public double Income {get;set;}
		 public double Expense {get;set;}
		 public string Phone {get;set;}
		 public string Email {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Staff
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long DepartmentID {get;set;}
		 public string Name {get;set;}
		 public string Avatar {get;set;}
		 public string Code {get;set;}
		 public string Phone {get;set;}
		 public string ortherPhone {get;set;}
		 public string Email {get;set;}
		 public string Address {get;set;}
		 public string Color {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class StaffWorkingTime
    {
 		 public long Id {get;set;}
		 public long StaffID {get;set;}
		 public long Dayth {get;set;}
		 public DateTime InTime {get;set;}
		 public DateTime OutTime {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Department
    {
 		 public long Id {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class StaffServives
    {
 		 public long Id {get;set;}
		 public long StaffID {get;set;}
		 public long ServicesID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Categorys
    {
 		 public long Id {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Services
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long ServicesID {get;set;}
		 public long CategoryID {get;set;}
		 public string Name {get;set;}
		 public double Price {get;set;}
		 public string Duration {get;set;}
		 public int NumStaffDoIt {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class CustomerType
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public string Name {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Customers
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public string Name {get;set;}
		 public string Phone {get;set;}
		 public string Email {get;set;}
		 public string Birthday {get;set;}
		 public long CustTypeID {get;set;}
		 public int VisitCount {get;set;}
		 public string LifeTimePoint {get;set;}
		 public string CurrentPoint {get;set;}
		 public string SMSSent {get;set;}
		 public string EmailSent {get;set;}
		 public string Note {get;set;}
		 public string AnniversaryDay {get;set;}
		 public string RelationInfo {get;set;}
		 public string OcupationInfo {get;set;}
		 public DateTime LastVisited {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Orders
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long CustomerID {get;set;}
		 public DateTime DateCheckIn {get;set;}
		 public DateTime DateCheckOut {get;set;}
		 public DateTime DateDeliveryInfo {get;set;}
		 public DateTime DaySendInfo {get;set;}
		 public string RoomInfo {get;set;}
		 public string PersonReceiveInfo {get;set;}
		 public string StatusOrder {get;set;}
		 public string AnniversaryDay {get;set;}
		 public string RelationInfo {get;set;}
		 public string OcupationInfo {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class OrderDetail
    {
 		 public long Id {get;set;}
		 public long ServicesID {get;set;}
		 public long OrderID {get;set;}
		 public long StaffID {get;set;}
		 public double Price {get;set;}
		 public double TIP {get;set;}
		 public int NumServices {get;set;}
		 public double Discount {get;set;}
		 public double Total {get;set;}
		 public string Coupon {get;set;}
		 public string Note {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Promotions
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public string Name {get;set;}
		 public double Expense {get;set;}
		 public double Income {get;set;}
		 public int NumOrderd {get;set;}
		 public DateTime DateSent {get;set;}
		 public DateTime DateStop {get;set;}
		 public double DeliverEmail {get;set;}
		 public double DeliverSMS {get;set;}
		 public double TotalUserUsePromotionSMS {get;set;}
		 public double TotalUserUsePromotionEmail {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class GroupRights
    {
 		 public long Id {get;set;}
		 public long ParentGroupID {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Path {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class GroupRightDetail
    {
 		 public long Id {get;set;}
		 public long GroupID {get;set;}
		 public long ParentGroupID {get;set;}
		 public string subGroup {get;set;}
		 public string Name {get;set;}
		 public string Path {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class Roles
    {
 		 public long Id {get;set;}
		 public long UserID {get;set;}
		 public long GroupRightID {get;set;}
		 public string Permission {get;set;}
		 public string SubPermission {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Users00
    {
 		 public long Id {get;set;}
		 public string UserName {get;set;}
		 public string Password {get;set;}
		 public string Email {get;set;}
		 public string PassCode {get;set;}
		 public string Phone {get;set;}
		 public string Domain {get;set;}
		 public long BusinessID {get;set;}
		 public long StaffID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Logins00
    {
 		 public long Id {get;set;}
		 public DateTime TimeLogin {get;set;}
		 public DateTime TimeLogout {get;set;}
		 public DateTime UpdatedTime {get;set;}
		 public double TotalTimes {get;set;}
		 public long UserID {get;set;}
		 public int Online {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_LogActivity00
    {
 		 public long Id {get;set;}
		 public string task {get;set;}
		 public string todo {get;set;}
		 public DateTime UpdatedTime {get;set;}
		 public long UserID {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Business00
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string ShortName {get;set;}
		 public string Email {get;set;}
		 public string Address {get;set;}
		 public string Phone {get;set;}
		 public string City {get;set;}
		 public string District {get;set;}
		 public string Ward {get;set;}
		 public string CountryCode {get;set;}
		 public string StateCode {get;set;}
		 public string PostalCode {get;set;}
		 public string Logo {get;set;}
		 public string BannerLogo {get;set;}
		 public string OpenTime {get;set;}
		 public string Description {get;set;}
		 public long IndustryID {get;set;}
		 public long UserID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_BusinessTime00
    {
 		 public long Id {get;set;}
		 public string dayth {get;set;}
		 public DateTime opentime {get;set;}
		 public DateTime closetime {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_BusinessServiceStaffSetting00
    {
 		 public long Id {get;set;}
		 public string Description {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_TicketSetting00
    {
 		 public long Id {get;set;}
		 public string FieldName {get;set;}
		 public string FormName {get;set;}
		 public string TableName {get;set;}
		 public string Ordered {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_CheckoutType00
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string FormName {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_CheckoutSetting00
    {
 		 public long Id {get;set;}
		 public double PointBonus {get;set;}
		 public long CheckoutTypeID {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_BusinessPolycies00
    {
 		 public long Id {get;set;}
		 public string Description {get;set;}
		 public string OrtherPolices {get;set;}
		 public long BusinessID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_BusinessLanguages00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long LanguageID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Languages00
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string FormName {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_SMS00
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string FormName {get;set;}
		 public string NameTemplate {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_SMSGobalTemplate00
    {
 		 public long Id {get;set;}
		 public string Name {get;set;}
		 public string FormName {get;set;}
		 public string NameTemplate {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_BusinessSMS00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long SMSID {get;set;}
		 public string ContentName {get;set;}
		 public string FormName {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_PromotionDetail00
    {
 		 public long Id {get;set;}
		 public long PromotionID {get;set;}
		 public string WhatOfferName {get;set;}
		 public double Discount {get;set;}
		 public int MixCustomerType {get;set;}
		 public string EmailTitle {get;set;}
		 public string BusinessName {get;set;}
		 public string OtherDesctiption {get;set;}
		 public string PhoneTest {get;set;}
		 public string EmailTest {get;set;}
		 public long ActiveSTOPfromUer {get;set;}
		 public int UseOneTimeThisPromotion {get;set;}
		 public int SendNow {get;set;}
		 public double Income {get;set;}
		 public DateTime DateSendPromotion {get;set;}
		 public DateTime UpdatedTime {get;set;}
		 public DateTime SaveNextTime {get;set;}
		 public DateTime ExpireDate {get;set;}
		 public DateTime FromDate {get;set;}
		 public DateTime ToDate {get;set;}
		 public string DeliverEmail {get;set;}
		 public string DeliverSMS {get;set;}
		 public string Description {get;set;}
		 public long TotalUserUsePromotionSMS {get;set;}
		 public long TotalUserUsePromotionEmail {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_PromotionDashBoard00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long PromotionID {get;set;}
		 public double TotalDelivered {get;set;}
		 public double Income {get;set;}
		 public double Expense {get;set;}
		 public string Phone {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_PromotionDetailDashBoard00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long PromotionID {get;set;}
		 public string CusomerName {get;set;}
		 public string CustomerPhone {get;set;}
		 public int NumVisit {get;set;}
		 public double TotalDelivered {get;set;}
		 public double Income {get;set;}
		 public double Expense {get;set;}
		 public string Phone {get;set;}
		 public string Email {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Staff00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long DepartmentID {get;set;}
		 public string Name {get;set;}
		 public string Avatar {get;set;}
		 public string Code {get;set;}
		 public string Phone {get;set;}
		 public string ortherPhone {get;set;}
		 public string Email {get;set;}
		 public string Address {get;set;}
		 public string Color {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_StaffWorkingTime00
    {
 		 public long Id {get;set;}
		 public long StaffID {get;set;}
		 public long Dayth {get;set;}
		 public DateTime InTime {get;set;}
		 public DateTime OutTime {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Department00
    {
 		 public long Id {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_StaffServives00
    {
 		 public long Id {get;set;}
		 public long StaffID {get;set;}
		 public long ServicesID {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Categorys00
    {
 		 public long Id {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Services00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long ServicesID {get;set;}
		 public long CategoryID {get;set;}
		 public string Name {get;set;}
		 public double Price {get;set;}
		 public string Duration {get;set;}
		 public int NumStaffDoIt {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_CustomerType00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public string Name {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Customers00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public string Name {get;set;}
		 public string Phone {get;set;}
		 public string Email {get;set;}
		 public string Birthday {get;set;}
		 public long CustTypeID {get;set;}
		 public int VisitCount {get;set;}
		 public string LifeTimePoint {get;set;}
		 public string CurrentPoint {get;set;}
		 public string SMSSent {get;set;}
		 public string EmailSent {get;set;}
		 public string Note {get;set;}
		 public string AnniversaryDay {get;set;}
		 public string RelationInfo {get;set;}
		 public string OcupationInfo {get;set;}
		 public DateTime LastVisited {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Orders00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public long CustomerID {get;set;}
		 public DateTime DateCheckIn {get;set;}
		 public DateTime DateCheckOut {get;set;}
		 public DateTime DateDeliveryInfo {get;set;}
		 public DateTime DaySendInfo {get;set;}
		 public string RoomInfo {get;set;}
		 public string PersonReceiveInfo {get;set;}
		 public string StatusOrder {get;set;}
		 public string AnniversaryDay {get;set;}
		 public string RelationInfo {get;set;}
		 public string OcupationInfo {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_OrderDetail00
    {
 		 public long Id {get;set;}
		 public long ServicesID {get;set;}
		 public long OrderID {get;set;}
		 public long StaffID {get;set;}
		 public double Price {get;set;}
		 public double TIP {get;set;}
		 public int NumServices {get;set;}
		 public double Discount {get;set;}
		 public double Total {get;set;}
		 public string Coupon {get;set;}
		 public string Note {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Promotions00
    {
 		 public long Id {get;set;}
		 public long BusinessID {get;set;}
		 public string Name {get;set;}
		 public double Expense {get;set;}
		 public double Income {get;set;}
		 public int NumOrderd {get;set;}
		 public DateTime DateSent {get;set;}
		 public DateTime DateStop {get;set;}
		 public double DeliverEmail {get;set;}
		 public double DeliverSMS {get;set;}
		 public double TotalUserUsePromotionSMS {get;set;}
		 public double TotalUserUsePromotionEmail {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_GroupRights00
    {
 		 public long Id {get;set;}
		 public long ParentGroupID {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Path {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_GroupRightDetail00
    {
 		 public long Id {get;set;}
		 public long GroupID {get;set;}
		 public long ParentGroupID {get;set;}
		 public string subGroup {get;set;}
		 public string Name {get;set;}
		 public string Path {get;set;}
		 public string Description {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
    public class zgcl_Roles00
    {
 		 public long Id {get;set;}
		 public long UserID {get;set;}
		 public long GroupRightID {get;set;}
		 public string Permission {get;set;}
		 public string SubPermission {get;set;}
		 public int isActive {get;set;}
		 public int isValid {get;set;}
		 public DateTime isCreatedDate {get;set;}
		 public DateTime isUpdatedDate {get;set;}
		 public string isPartFull {get;set;}
 
    }
}
