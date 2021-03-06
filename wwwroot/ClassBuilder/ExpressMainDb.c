using System;
using System.Collections.Generic;
namespace ExpressMainDb
{
    
    public class sysdiagrams
    {
 		 public string name {get;set;}
		 public int principal_id {get;set;}
		 public int diagram_id {get;set;}
		 public int version {get;set;}
		 public string definition {get;set;}
 
    }
    public class bill_assign_detail_bill
    {
 		 public int bill_assign_detail_id {get;set;}
		 public int bill_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_request_sms
    {
 		 public int sms_id {get;set;}
		 public int bill_assign_id {get;set;}
		 public int bill_request_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class department_manage_account
    {
 		 public int department_id {get;set;}
		 public long account_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class receipt_bill_request
    {
 		 public long id {get;set;}
		 public int receipt_id {get;set;}
		 public long bill_assign_id {get;set;}
		 public long bill_request_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class supplier_profile
    {
 		 public int supplier_id {get;set;}
		 public int profile_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zone_group_country
    {
 		 public int zone_group_id {get;set;}
		 public int country_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zone_group_zone
    {
 		 public int zone_group_id {get;set;}
		 public int zone_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bag_confirm_detail
    {
 		 public long id {get;set;}
		 public int bag_confirm_id {get;set;}
		 public int bill_package_id {get;set;}
		 public long account_id {get;set;}
		 public DateTime time {get;set;}
		 public string barcode {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_assign_detail_package
    {
 		 public long id {get;set;}
		 public int bill_assign_id {get;set;}
		 public int bill_package_id {get;set;}
		 public long account_id {get;set;}
		 public long assign_account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public long confirm_account_id {get;set;}
		 public DateTime confirm_time {get;set;}
		 public int confirm_status {get;set;}
		 public string confirm_note {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class action
    {
 		 public long id {get;set;}
		 public string note {get;set;}
		 public string url {get;set;}
		 public string name {get;set;}
		 public string image {get;set;}
		 public int controller_id {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_assign_detail
    {
 		 public long id {get;set;}
		 public int bill_assign_id {get;set;}
		 public int bill_request_id {get;set;}
		 public int voucher_id {get;set;}
		 public long account_id {get;set;}
		 public long assign_account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public string status {get;set;}
		 public long confirm_account_id {get;set;}
		 public DateTime confirm_time {get;set;}
		 public string confirm_note {get;set;}
		 public int confirm_status {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_request
    {
 		 public long id {get;set;}
		 public long account_id {get;set;}
		 public int branch_id {get;set;}
		 public DateTime create_time {get;set;}
		 public int customer_id {get;set;}
		 public int from_branch_id {get;set;}
		 public int from_country_id {get;set;}
		 public int from_province_id {get;set;}
		 public int from_district_id {get;set;}
		 public string from_address {get;set;}
		 public string from_fullname {get;set;}
		 public string from_phone {get;set;}
		 public string from_identity {get;set;}
		 public DateTime from_time {get;set;}
		 public int to_branch_id {get;set;}
		 public int to_country_id {get;set;}
		 public int to_province_id {get;set;}
		 public int to_district_id {get;set;}
		 public string to_address {get;set;}
		 public string to_fullname {get;set;}
		 public string to_phone {get;set;}
		 public string to_identity {get;set;}
		 public DateTime to_time {get;set;}
		 public int service_type_id {get;set;}
		 public byte price_type {get;set;}
		 public string barcode {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int confirm_status {get;set;}
		 public string map_params {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_request_deleted
    {
 		 public long id {get;set;}
		 public int bill_request_id {get;set;}
		 public int branch_id {get;set;}
		 public long account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class constant
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public string content_ {get;set;}
		 public byte type {get;set;}
		 public string status {get;set;}
		 public int site_id {get;set;}
		 public int module_id {get;set;}
		 public int controller_id {get;set;}
		 public byte mode {get;set;}
		 public string value {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class group_
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public int parent_id {get;set;}
		 public string permission {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class login
    {
 		 public long id {get;set;}
		 public long account_id {get;set;}
		 public string site {get;set;}
		 public DateTime time {get;set;}
		 public string session_id {get;set;}
		 public string ip {get;set;}
		 public string server_ip {get;set;}
		 public string user_agent {get;set;}
		 public DateTime logout_time {get;set;}
		 public string status {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class reason_group
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class store
    {
 		 public long id {get;set;}
		 public int branch_id {get;set;}
		 public string code {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public DateTime account_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class store_zone
    {
 		 public long id {get;set;}
		 public int store_id {get;set;}
		 public string code {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public DateTime account_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class supplier
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public byte com_type {get;set;}
		 public string name {get;set;}
		 public DateTime esta_time {get;set;}
		 public string abbr_name {get;set;}
		 public string address {get;set;}
		 public string phone {get;set;}
		 public string fax {get;set;}
		 public string email {get;set;}
		 public string website {get;set;}
		 public string tax_code {get;set;}
		 public string note {get;set;}
		 public DateTime birthday_time {get;set;}
		 public string type {get;set;}
		 public byte rep_sign_type {get;set;}
		 public string rep_number {get;set;}
		 public int warning_after_out_bill {get;set;}
		 public int warning_max_debt {get;set;}
		 public int debt {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zone
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public int from_branch_id {get;set;}
		 public int to_branch_id {get;set;}
		 public double km {get;set;}
		 public string note {get;set;}
		 public byte type {get;set;}
		 public string status {get;set;}
		 public DateTime account_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zone_group
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public int crates_id {get;set;}
		 public byte type {get;set;}
		 public string status {get;set;}
		 public DateTime account_time {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class branch_group
    {
 		 public int id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public int type {get;set;}
		 public string status {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class branch_group_detail
    {
 		 public int id {get;set;}
		 public int branch_group_id {get;set;}
		 public int branch_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bag_confirm
    {
 		 public long id {get;set;}
		 public int bill_package_id {get;set;}
		 public int branch_id {get;set;}
		 public long account_id {get;set;}
		 public DateTime time {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_direction
    {
 		 public long id {get;set;}
		 public string Bill_id {get;set;}
		 public long account_id {get;set;}
		 public int customer_id {get;set;}
		 public string RealTime_Info {get;set;}
		 public int from_country_id {get;set;}
		 public int from_province_id {get;set;}
		 public int from_district_id {get;set;}
		 public int from_ward_id {get;set;}
		 public int from_branch_id {get;set;}
		 public string from_google_position {get;set;}
		 public double x1 {get;set;}
		 public double y1 {get;set;}
		 public int to_country_id {get;set;}
		 public int to_province_id {get;set;}
		 public int to_district_id {get;set;}
		 public int to_ward_id {get;set;}
		 public int to_branch_id {get;set;}
		 public string to_google_position {get;set;}
		 public double x2 {get;set;}
		 public double y2 {get;set;}
		 public double realkm {get;set;}
		 public double googlekm {get;set;}
		 public double timetransferbyprg {get;set;}
		 public double timetransferreal {get;set;}
		 public string findpathbygoogle {get;set;}
		 public string findpathbyadmin {get;set;}
		 public string findpathreal {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_assign
    {
 		 public long id {get;set;}
		 public byte type {get;set;}
		 public string barcode {get;set;}
		 public int branch_id {get;set;}
		 public long account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public int for_account_id {get;set;}
		 public DateTime for_account_time {get;set;}
		 public byte number {get;set;}
		 public byte number_confirm {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public bool record_enable {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class Resource
    {
 		 public int ID {get;set;}
		 public int IDParent {get;set;}
		 public string FormName {get;set;}
		 public string ActionName {get;set;}
		 public string Caption {get;set;}
		 public int SmallImageIndex {get;set;}
		 public int LagerImageIndex {get;set;}
		 public string IconName {get;set;}
		 public bool Active {get;set;}
		 public string AppName {get;set;}
		 public string Description {get;set;}
		 public int Priority {get;set;}
 
    }
    public class temp
    {
 		 public int Status {get;set;}
		 public string Compare {get;set;}
 
    }
    public class price_target_time
    {
 		 public long price_id {get;set;}
		 public int zone_group_id {get;set;}
		 public byte from_hour {get;set;}
		 public byte to_hour {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public string isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class price_policy_department_
    {
 		 public long id {get;set;}
		 public long deparment_id {get;set;}
		 public long price_policy_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class branch
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int district_id {get;set;}
		 public string address {get;set;}
		 public string phone {get;set;}
		 public string fax {get;set;}
		 public int status {get;set;}
		 public byte is_transport_center {get;set;}
		 public int company_id {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class company
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int district_id {get;set;}
		 public string address {get;set;}
		 public string phone {get;set;}
		 public string fax {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class price_policy
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public string file_ {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int approve_account_id {get;set;}
		 public DateTime approve_account_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zone_category
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class pay_type
    {
 		 public int ID {get;set;}
		 public string Name {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class customer_to_customer
    {
 		 public int id {get;set;}
		 public long from_cus_id {get;set;}
		 public long to_cus_id {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class product_unit
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class price
    {
 		 public long id {get;set;}
		 public long price_policy_id {get;set;}
		 public long price_base_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public byte type {get;set;}
		 public byte fkg {get;set;}
		 public int fkg_postage {get;set;}
		 public double fkg_weight {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class category_group
    {
 		 public long id {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class category
    {
 		 public long id {get;set;}
		 public long category_group_id {get;set;}
		 public int id_value {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class price_level
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public double level_number {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class price_base_detail
    {
 		 public long id {get;set;}
		 public long price_base_id {get;set;}
		 public long product_id {get;set;}
		 public byte product_unit {get;set;}
		 public byte cal_type {get;set;}
		 public double value {get;set;}
		 public double per_value {get;set;}
		 public int postage {get;set;}
		 public int postage_extra {get;set;}
		 public byte postage_type {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class price_customer
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public double zone_customer_number {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class vehicle_type
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class department_to_deparment
    {
 		 public long id {get;set;}
		 public long from_department_id {get;set;}
		 public long to_department_id {get;set;}
		 public long service_id {get;set;}
		 public long vehicle_type_id {get;set;}
		 public double fix_km {get;set;}
		 public double fix_Hour {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class add_service
    {
 		 public long id {get;set;}
		 public int service_type_id {get;set;}
		 public string name {get;set;}
		 public string code {get;set;}
		 public int type {get;set;}
		 public int count_type {get;set;}
		 public int object_type {get;set;}
		 public double value {get;set;}
		 public int status {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class customer_profile
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public long profile_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class department
    {
 		 public long id {get;set;}
		 public int branch_id {get;set;}
		 public int parent_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string address {get;set;}
		 public int district_id {get;set;}
		 public int province_id {get;set;}
		 public string phone {get;set;}
		 public string email {get;set;}
		 public string fax {get;set;}
		 public string mission {get;set;}
		 public string status {get;set;}
		 public int manage_account_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class binaryTest
    {
 		 public int id {get;set;}
		 public string Name {get;set;}
 
    }
    public class bill_add_service
    {
 		 public long id {get;set;}
		 public long bill_package_id {get;set;}
		 public long add_service_id {get;set;}
		 public string name {get;set;}
		 public string code {get;set;}
		 public byte type {get;set;}
		 public double value {get;set;}
		 public int cal_value {get;set;}
		 public byte count {get;set;}
		 public int postage {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_package_image
    {
 		 public long id {get;set;}
		 public long bill_package_id {get;set;}
		 public string url {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class profile
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public int type_id {get;set;}
		 public string name {get;set;}
		 public string email {get;set;}
		 public string phone {get;set;}
		 public string position {get;set;}
		 public DateTime birthday_time {get;set;}
		 public string note {get;set;}
		 public string address {get;set;}
		 public string id_number {get;set;}
		 public string yahoo {get;set;}
		 public string skype {get;set;}
		 public string facebook {get;set;}
		 public string gmail {get;set;}
		 public string department {get;set;}
		 public byte sign_type {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class sms
    {
 		 public long id {get;set;}
		 public long department_id {get;set;}
		 public string puid {get;set;}
		 public string fullname {get;set;}
		 public string phone {get;set;}
		 public string brandname {get;set;}
		 public string message {get;set;}
		 public DateTime send_time {get;set;}
		 public int send_account_id {get;set;}
		 public string note {get;set;}
		 public string message_id {get;set;}
		 public string error {get;set;}
		 public string error_description {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class receipt_bill_bill_backup
    {
 		 public long id {get;set;}
		 public long receipt_id {get;set;}
		 public long bill_id {get;set;}
		 public long bill_backup_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_f3_detail
    {
 		 public long id {get;set;}
		 public long bill_f3_id {get;set;}
		 public long bill_package_id {get;set;}
		 public string note {get;set;}
		 public DateTime go_time {get;set;}
		 public int go_user_id_check {get;set;}
		 public DateTime arrival_time {get;set;}
		 public int arrival_user_id_check {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class reason
    {
 		 public long id {get;set;}
		 public long group_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string descript {get;set;}
		 public int type {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class reason_add_service
    {
 		 public long id {get;set;}
		 public long reason_id {get;set;}
		 public long add_service_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class shelf
    {
 		 public long id {get;set;}
		 public int type {get;set;}
		 public long department_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class account
    {
 		 public int id {get;set;}
		 public string username {get;set;}
		 public string password {get;set;}
		 public string fullname {get;set;}
		 public long department_id {get;set;}
		 public string status {get;set;}
		 public DateTime login_time {get;set;}
		 public DateTime logout_time {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class receipt_add_service
    {
 		 public long id {get;set;}
		 public long receipt_id {get;set;}
		 public long add_service_id {get;set;}
		 public int type {get;set;}
		 public double value {get;set;}
		 public int cal_value {get;set;}
		 public int postage {get;set;}
		 public double count {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class price_department_to_department_zone
    {
 		 public long id {get;set;}
		 public long zone_category_id {get;set;}
		 public long department_to_department_id {get;set;}
		 public long price_id {get;set;}
		 public bool is_price_cal {get;set;}
		 public bool is_group_go {get;set;}
		 public bool is_group_receive {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class customer_contract
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public string contract_code {get;set;}
		 public DateTime from_date {get;set;}
		 public DateTime to_date {get;set;}
		 public string our_sign_name {get;set;}
		 public string customer_sign_name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class service_type
    {
 		 public int id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string formular_convert {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class price_base
    {
 		 public long id {get;set;}
		 public int service_type_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zone_category_service_type
    {
 		 public long id {get;set;}
		 public long zone_category_id {get;set;}
		 public int service_type_id {get;set;}
		 public double zone_number {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class receipt_bill_package
    {
 		 public long id {get;set;}
		 public long receipt_id {get;set;}
		 public long bill_assign_id {get;set;}
		 public long old_bill_package_id {get;set;}
		 public long new_bill_package_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class vehicle_shifting_order_detail
    {
 		 public long id {get;set;}
		 public long vehicle_shifting_order_id {get;set;}
		 public long bill_f3_id {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class vehicle_shifting_order
    {
 		 public long id {get;set;}
		 public long provider_id {get;set;}
		 public long vehicle_id {get;set;}
		 public long provider_shifting_order_id {get;set;}
		 public long way_id {get;set;}
		 public int route_id {get;set;}
		 public int driver1_id {get;set;}
		 public string driver1_name {get;set;}
		 public string driver1_phone {get;set;}
		 public int driver2_id {get;set;}
		 public string driver2_name {get;set;}
		 public string driver2_phone {get;set;}
		 public string guide_name {get;set;}
		 public string guide_phone {get;set;}
		 public string note {get;set;}
		 public DateTime shifting_date {get;set;}
		 public int start_time_id {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime finish_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_f3
    {
 		 public long id {get;set;}
		 public long from_department_id {get;set;}
		 public long to_department_id {get;set;}
		 public long final_department_id {get;set;}
		 public string message_code {get;set;}
		 public DateTime go_time {get;set;}
		 public long go_user_id {get;set;}
		 public DateTime arrival_time {get;set;}
		 public long arrival_user_id {get;set;}
		 public string code {get;set;}
		 public double weight {get;set;}
		 public string note {get;set;}
		 public int supplier_id {get;set;}
		 public string plate_number {get;set;}
		 public string driver_name {get;set;}
		 public string reciever_name {get;set;}
		 public string attendant {get;set;}
		 public string barcode {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class customer
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public int com_type {get;set;}
		 public string name {get;set;}
		 public DateTime esta_time {get;set;}
		 public string abbr_name {get;set;}
		 public string address {get;set;}
		 public string phone {get;set;}
		 public string fax {get;set;}
		 public string identity_id {get;set;}
		 public string ward {get;set;}
		 public int district_id {get;set;}
		 public int province_id {get;set;}
		 public string email {get;set;}
		 public string website {get;set;}
		 public string tax_code {get;set;}
		 public string note {get;set;}
		 public DateTime birthday_time {get;set;}
		 public int type {get;set;}
		 public int rep_sign_type {get;set;}
		 public string rep_number {get;set;}
		 public int warning_after_out_bill {get;set;}
		 public int warning_max_debt {get;set;}
		 public int debt {get;set;}
		 public int pay_type_id {get;set;}
		 public int status {get;set;}
		 public int owner_account_id {get;set;}
		 public long district {get;set;}
		 public long province {get;set;}
		 public int country {get;set;}
		 public int address_is_point {get;set;}
		 public string map_params {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class lyt_PT_Manager
    {
 		 public long Id {get;set;}
		 public int GroupId {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string UserName {get;set;}
		 public string Password {get;set;}
		 public string Name {get;set;}
		 public string FullName {get;set;}
		 public string PrimaryPhone {get;set;}
		 public string PrimaryEmail {get;set;}
		 public string Address {get;set;}
		 public int ProvinceId {get;set;}
		 public string AreaCode {get;set;}
		 public int VanPhongId {get;set;}
		 public int TeamId {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class PT_Group
    {
 		 public long Id {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Description {get;set;}
		 public string Color {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class PT_Group_Permission
    {
 		 public long Id {get;set;}
		 public int GroupId {get;set;}
		 public int PermissionId {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Description {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class PT_Permission
    {
 		 public long Id {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Module {get;set;}
		 public string Description {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class PT_User_Permission
    {
 		 public long Id {get;set;}
		 public int UserId {get;set;}
		 public int PermissionId {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Description {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class price_customer_extra
    {
 		 public long id {get;set;}
		 public long price_id {get;set;}
		 public long customer_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public long price_base_detail_id {get;set;}
		 public long price_customer_id {get;set;}
		 public double zone_customer_number_extra {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill_package
    {
 		 public long id {get;set;}
		 public long bill_id {get;set;}
		 public long department_current_id {get;set;}
		 public int no {get;set;}
		 public string barcode {get;set;}
		 public double quantity_total {get;set;}
		 public long store_zone_id {get;set;}
		 public DateTime go_time {get;set;}
		 public string arrival_note {get;set;}
		 public DateTime arrival_time {get;set;}
		 public long parent_id {get;set;}
		 public int product_id {get;set;}
		 public string package_description {get;set;}
		 public double product_l {get;set;}
		 public double product_w {get;set;}
		 public double product_h {get;set;}
		 public double product_weight {get;set;}
		 public double product_convert_weight {get;set;}
		 public double product_value {get;set;}
		 public int cost_main {get;set;}
		 public int cost_add {get;set;}
		 public string receive_fullname {get;set;}
		 public string receive_identity {get;set;}
		 public DateTime receive_identity_date {get;set;}
		 public string receive_identity_place {get;set;}
		 public string receive_phone {get;set;}
		 public string receive_note {get;set;}
		 public DateTime receive_time {get;set;}
		 public int receive_user_id {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class z_test_cal_data
    {
 		 public long id {get;set;}
		 public long dep_to_dep_id_in {get;set;}
		 public long service_type_id_in {get;set;}
		 public long from_dep_id {get;set;}
		 public long price_base_id {get;set;}
		 public string note {get;set;}
		 public DateTime isprg_created_date {get;set;}
 
    }
    public class z_test_cal_price
    {
 		 public long id {get;set;}
		 public long from_dep_id_in {get;set;}
		 public long to_dep_id_in {get;set;}
		 public long dep_to_dep_id_in {get;set;}
		 public long service_type_id_in {get;set;}
		 public double weight_cal_in {get;set;}
		 public long price_base_detail_id_in {get;set;}
		 public long zone_category_id_out {get;set;}
		 public long customer_id_in {get;set;}
		 public long price_id_out {get;set;}
		 public long price_base_id_out {get;set;}
		 public int postage_out {get;set;}
		 public string note {get;set;}
		 public DateTime isprg_created_date {get;set;}
 
    }
    public class receipt
    {
 		 public long id {get;set;}
		 public long bill_id {get;set;}
		 public long reason_id {get;set;}
		 public byte reason_group {get;set;}
		 public string reason_name {get;set;}
		 public byte reason_type {get;set;}
		 public string from_fullname {get;set;}
		 public string from_identity {get;set;}
		 public DateTime from_identity_date {get;set;}
		 public string from_identity_place {get;set;}
		 public string note {get;set;}
		 public long responsibility_account_id {get;set;}
		 public string resonsibility_name {get;set;}
		 public string witness_name {get;set;}
		 public string approve_name {get;set;}
		 public long approve_account_id {get;set;}
		 public DateTime approve_account_time {get;set;}
		 public double cost {get;set;}
		 public string original_document {get;set;}
		 public string original_document_file {get;set;}
		 public int create_department_id {get;set;}
		 public long resolved_account_id {get;set;}
		 public string resolved_note {get;set;}
		 public string resolved_comment {get;set;}
		 public int resolved_cost {get;set;}
		 public byte resolved_compensation {get;set;}
		 public DateTime resolved_account_time {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class product
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public byte type {get;set;}
		 public int order_ {get;set;}
		 public long unit {get;set;}
		 public long product_group_id {get;set;}
		 public bool Record_Enable {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class product_group
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int order_ {get;set;}
		 public bool Record_Enable {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class Area
    {
 		 public long ID {get;set;}
		 public long ParentID {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class bill
    {
 		 public long id {get;set;}
		 public long dept_to_dept_id {get;set;}
		 public long customer_id {get;set;}
		 public long from_department_id {get;set;}
		 public string from_address {get;set;}
		 public string from_ward {get;set;}
		 public long from_district_id {get;set;}
		 public long from_province_id {get;set;}
		 public string from_fullname {get;set;}
		 public string from_phone {get;set;}
		 public string from_identity {get;set;}
		 public long to_department_id {get;set;}
		 public string to_address {get;set;}
		 public string to_ward {get;set;}
		 public long to_district_id {get;set;}
		 public long to_province_id {get;set;}
		 public string to_fullname {get;set;}
		 public string to_phone {get;set;}
		 public string to_identity {get;set;}
		 public int to_postal_code_id {get;set;}
		 public string to_security_code {get;set;}
		 public double time_totransferfix {get;set;}
		 public double weight {get;set;}
		 public double totalcost {get;set;}
		 public double addcost {get;set;}
		 public int package_total {get;set;}
		 public int package_total_arrival {get;set;}
		 public double weight_c {get;set;}
		 public double realkm {get;set;}
		 public int service_type_id {get;set;}
		 public int vat {get;set;}
		 public int pay_type {get;set;}
		 public string barcode_prefix {get;set;}
		 public string barcode {get;set;}
		 public string qr_Code {get;set;}
		 public string unique_code {get;set;}
		 public string imageurl {get;set;}
		 public string rfid_info_descript {get;set;}
		 public string movinginfo_descript {get;set;}
		 public long parent_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class PT_KhieuNai
    {
 		 public long Id {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string TenKhachHang {get;set;}
		 public string SoDienThoai {get;set;}
		 public string Email {get;set;}
		 public DateTime NgayTiepNhan {get;set;}
		 public int NhanVienTiepNhan {get;set;}
		 public int BoPhanGiaiQuyet {get;set;}
		 public int TrangThaiGiaiQuyet {get;set;}
		 public string NoiDungKhieuNai {get;set;}
		 public string NoiDungGiaiQuyet {get;set;}
		 public DateTime NgayTraLoi {get;set;}
		 public int NhanVienTraLoi {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class PT_BoPhanGiaiQuyet
    {
 		 public long Id {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class zgcTempViewData
    {
 		 public long id {get;set;}
 
    }
    public class zgcl_bill_detail00
    {
 		 public long ID {get;set;}
		 public long Bill_Bill_ID {get;set;}
		 public string Name {get;set;}
		 public string Code {get;set;}
		 public int Product_id {get;set;}
		 public string rfid_info_descript {get;set;}
		 public double weight {get;set;}
		 public string weight_descript {get;set;}
		 public double main_weight {get;set;}
		 public double convert_weight_l {get;set;}
		 public double convert_weight_w {get;set;}
		 public double convert_weight_h {get;set;}
		 public double convert_weight {get;set;}
		 public int service_type_id {get;set;}
		 public double cost {get;set;}
		 public string cost_Encript {get;set;}
		 public double main_cost {get;set;}
		 public string main_cost_Encript {get;set;}
		 public double postage_cost {get;set;}
		 public double added_cost {get;set;}
		 public double receipt_cost {get;set;}
		 public double Discount {get;set;}
		 public double vat {get;set;}
 
    }
    public class zgcl_price_detail00
    {
 		 public long id {get;set;}
		 public long price_id {get;set;}
		 public long zone_group_id {get;set;}
		 public long product_id {get;set;}
		 public string product_code {get;set;}
		 public string product_name {get;set;}
		 public byte product_unit {get;set;}
		 public byte cal_type {get;set;}
		 public double value {get;set;}
		 public double per_value {get;set;}
		 public int postage {get;set;}
		 public int postage_extra {get;set;}
		 public byte postage_type {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string price_idname {get;set;}
 
    }
    public class v_BanGiaChiTiet
    {
 		 public long IDPriceBase {get;set;}
		 public double MucSoLuong {get;set;}
		 public int DonGia {get;set;}
		 public string ChinhSach {get;set;}
		 public DateTime TuNgay {get;set;}
		 public DateTime DenNgay {get;set;}
		 public long DichVuID {get;set;}
		 public long department_to_department_id {get;set;}
		 public long zone_category_id {get;set;}
		 public long price_id {get;set;}
		 public long zone_category_service_typeID {get;set;}
 
    }
    public class v_BangGiaCuoc
    {
 		 public long price_base_id {get;set;}
		 public double value {get;set;}
		 public int postage {get;set;}
		 public string price_policy_name {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public int service_type_id {get;set;}
		 public long department_to_department_id {get;set;}
		 public long zone_category_id {get;set;}
		 public long price_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public string product_unit_name {get;set;}
		 public byte product_unit_id {get;set;}
		 public byte cal_type {get;set;}
		 public long price_base_detail_id {get;set;}
		 public double zone_number {get;set;}
		 public int postage_extra {get;set;}
		 public double per_value {get;set;}
		 public long product_id {get;set;}
		 public int price_base_detail_status {get;set;}
		 public string zone_category_name {get;set;}
		 public int price_isprg_status {get;set;}
		 public int price_base_status {get;set;}
		 public int dtd_isprg_status {get;set;}
 
    }
    public class v_SearchBill
    {
 		 public long bill_id {get;set;}
		 public long id {get;set;}
		 public string value_search {get;set;}
		 public int isprg_status {get;set;}
		 public int bill_package_isprg_status {get;set;}
		 public string from_department {get;set;}
		 public string to_department {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public string from_phone {get;set;}
		 public string to_phone {get;set;}
		 public string from_fullname {get;set;}
		 public string to_fullname {get;set;}
		 public string barcode {get;set;}
		 public string bill_package_barcode {get;set;}
		 public int no {get;set;}
		 public string current_department_name {get;set;}
		 public string receive_fullname {get;set;}
		 public DateTime receive_time {get;set;}
		 public long parent_id {get;set;}
 
    }
    public class zgcl_bill_deleted00
    {
 		 public int bill_id {get;set;}
		 public int bill_backup_id {get;set;}
		 public int account_id {get;set;}
		 public int create_time {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_gcUserView00
    {
 		 public string name {get;set;}
		 public int length {get;set;}
		 public byte xprec {get;set;}
		 public byte xscale {get;set;}
		 public int colid {get;set;}
		 public byte status {get;set;}
		 public int isnullable {get;set;}
		 public int colorder {get;set;}
		 public string typename {get;set;}
		 public string tblname {get;set;}
		 public int id {get;set;}
		 public byte xtype {get;set;}
 
    }
    public class zgcl_receipt_ex_service00
    {
 		 public long id {get;set;}
		 public int receipt_id {get;set;}
		 public string name {get;set;}
		 public string code {get;set;}
		 public byte type {get;set;}
		 public double value {get;set;}
		 public int cal_value {get;set;}
		 public byte count {get;set;}
		 public int postage {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_bill_backup00
    {
 		 public long backup_id {get;set;}
		 public byte backup_type {get;set;}
		 public long account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public int customer_id {get;set;}
		 public byte sender_instruction {get;set;}
		 public int from_country_id {get;set;}
		 public int from_province_id {get;set;}
		 public int from_district_id {get;set;}
		 public string from_address {get;set;}
		 public string from_fullname {get;set;}
		 public string from_phone {get;set;}
		 public string from_phone2 {get;set;}
		 public string from_identity {get;set;}
		 public DateTime from_time {get;set;}
		 public int from_branch_id {get;set;}
		 public double product_quantity_total {get;set;}
		 public int product_sum_sub_total {get;set;}
		 public double weight {get;set;}
		 public double convert_weight_l {get;set;}
		 public double convert_weight_w {get;set;}
		 public double convert_weight_h {get;set;}
		 public double convert_weight {get;set;}
		 public double main_weight {get;set;}
		 public int to_branch_id {get;set;}
		 public int to_country_id {get;set;}
		 public int to_province_id {get;set;}
		 public int to_district_id {get;set;}
		 public string to_address {get;set;}
		 public string to_fullname {get;set;}
		 public string to_phone {get;set;}
		 public string to_phone2 {get;set;}
		 public string to_identity {get;set;}
		 public int to_postal_code_id {get;set;}
		 public DateTime to_time {get;set;}
		 public int service_type_id {get;set;}
		 public int product_group_id {get;set;}
		 public int customer_cost {get;set;}
		 public int main_cost {get;set;}
		 public string main_cost_json {get;set;}
		 public int postage_cost {get;set;}
		 public int added_cost {get;set;}
		 public int vat {get;set;}
		 public byte price_type {get;set;}
		 public string barcode {get;set;}
		 public string barcode_image {get;set;}
		 public string to_security_code {get;set;}
		 public string unique_code {get;set;}
		 public string note {get;set;}
		 public byte delivery_status {get;set;}
		 public string status {get;set;}
		 public byte flag_package {get;set;}
		 public int receipt_cost {get;set;}
		 public int sub_quantity {get;set;}
		 public byte reception_type {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class v_customer_search
    {
 		 public string phone {get;set;}
		 public string code {get;set;}
		 public long id {get;set;}
		 public string address {get;set;}
		 public int type {get;set;}
		 public string value_search {get;set;}
		 public string identity_id {get;set;}
		 public int district_id {get;set;}
		 public int province_id {get;set;}
		 public string name {get;set;}
		 public string ward {get;set;}
 
    }
    public class zgcl_transport_order00
    {
 		 public long id {get;set;}
		 public long way_id {get;set;}
		 public DateTime date_start {get;set;}
		 public DateTime date_finish {get;set;}
		 public string code {get;set;}
		 public int vehicle_id {get;set;}
		 public int driver1_id {get;set;}
		 public int driver2_id {get;set;}
		 public int guid_id {get;set;}
		 public long department_start_id {get;set;}
		 public long department_end_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_receipt_bill_package_bill_package_backup00
    {
 		 public long id {get;set;}
		 public int receipt_id {get;set;}
		 public long bill_package_id {get;set;}
		 public long bill_package_backup_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_price_policy_department00
    {
 		 public long id {get;set;}
		 public long deparment_id {get;set;}
		 public long price_policy_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class v_customer_price
    {
 		 public long customer_id {get;set;}
		 public long department_to_department_id {get;set;}
		 public int service_type_id {get;set;}
		 public long price_customer_id {get;set;}
		 public double zone_customer_number_extra {get;set;}
		 public double zone_customer_number {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public long product_id {get;set;}
		 public string name {get;set;}
		 public long price_policy_id {get;set;}
		 public long price_base_id {get;set;}
		 public string Expr1 {get;set;}
		 public long price_base_detail_id {get;set;}
		 public long Expr2 {get;set;}
		 public long price_id {get;set;}
		 public byte product_unit {get;set;}
		 public double value {get;set;}
		 public double per_value {get;set;}
		 public int postage {get;set;}
		 public int postage_extra {get;set;}
		 public byte postage_type {get;set;}
 
    }
    public class PT_User_Permission_View_001
    {
 		 public int UserId {get;set;}
		 public int PermissionId {get;set;}
		 public string Name {get;set;}
		 public string Description {get;set;}
 
    }
    public class v_BangGiaCuoc_2
    {
 		 public long price_base_id {get;set;}
		 public double value {get;set;}
		 public int postage {get;set;}
		 public string price_policy_name {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public int service_type_id {get;set;}
		 public long department_to_department_id {get;set;}
		 public long zone_category_id {get;set;}
		 public long price_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public string product_unit_name {get;set;}
		 public byte product_unit_id {get;set;}
		 public byte cal_type {get;set;}
		 public long price_base_detail_id {get;set;}
		 public double zone_number {get;set;}
		 public int postage_extra {get;set;}
		 public double per_value {get;set;}
		 public long product_id {get;set;}
		 public int price_base_detail_status {get;set;}
		 public string zone_category_name {get;set;}
		 public int price_isprg_status {get;set;}
		 public int price_base_status {get;set;}
		 public int dtd_isprg_status {get;set;}
		 public long customer_id {get;set;}
		 public long Expr1 {get;set;}
 
    }
    public class zgcl_bill_f300
    {
 		 public long id {get;set;}
		 public long from_department_id {get;set;}
		 public long to_department_id {get;set;}
		 public long final_department_id {get;set;}
		 public string message_code {get;set;}
		 public DateTime go_time {get;set;}
		 public long go_user_id {get;set;}
		 public DateTime arrival_time {get;set;}
		 public long arrival_user_id {get;set;}
		 public string code {get;set;}
		 public double weight {get;set;}
		 public string note {get;set;}
		 public int supplier_id {get;set;}
		 public string plate_number {get;set;}
		 public string driver_name {get;set;}
		 public string reciever_name {get;set;}
		 public string attendant {get;set;}
		 public string barcode {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_company00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int district_id {get;set;}
		 public string address {get;set;}
		 public string phone {get;set;}
		 public string fax {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_bill_request00
    {
 		 public long id {get;set;}
		 public long account_id {get;set;}
		 public int branch_id {get;set;}
		 public DateTime create_time {get;set;}
		 public int customer_id {get;set;}
		 public int from_branch_id {get;set;}
		 public int from_country_id {get;set;}
		 public int from_province_id {get;set;}
		 public int from_district_id {get;set;}
		 public string from_address {get;set;}
		 public string from_fullname {get;set;}
		 public string from_phone {get;set;}
		 public string from_identity {get;set;}
		 public DateTime from_time {get;set;}
		 public int to_branch_id {get;set;}
		 public int to_country_id {get;set;}
		 public int to_province_id {get;set;}
		 public int to_district_id {get;set;}
		 public string to_address {get;set;}
		 public string to_fullname {get;set;}
		 public string to_phone {get;set;}
		 public string to_identity {get;set;}
		 public DateTime to_time {get;set;}
		 public int service_type_id {get;set;}
		 public byte price_type {get;set;}
		 public string barcode {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int confirm_status {get;set;}
		 public string map_params {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_bill_request_deleted00
    {
 		 public long id {get;set;}
		 public int bill_request_id {get;set;}
		 public int branch_id {get;set;}
		 public long account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_Area00
    {
 		 public long ID {get;set;}
		 public long ParentID {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_login00
    {
 		 public long id {get;set;}
		 public long account_id {get;set;}
		 public string site {get;set;}
		 public DateTime time {get;set;}
		 public string session_id {get;set;}
		 public string ip {get;set;}
		 public string server_ip {get;set;}
		 public string user_agent {get;set;}
		 public DateTime logout_time {get;set;}
		 public string status {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_constant00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public string content_ {get;set;}
		 public byte type {get;set;}
		 public string status {get;set;}
		 public int site_id {get;set;}
		 public int module_id {get;set;}
		 public int controller_id {get;set;}
		 public byte mode {get;set;}
		 public string value {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_department00
    {
 		 public long id {get;set;}
		 public int branch_id {get;set;}
		 public int parent_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string address {get;set;}
		 public int district_id {get;set;}
		 public int province_id {get;set;}
		 public string phone {get;set;}
		 public string email {get;set;}
		 public string fax {get;set;}
		 public string mission {get;set;}
		 public string status {get;set;}
		 public int manage_account_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_customer00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public int com_type {get;set;}
		 public string name {get;set;}
		 public DateTime esta_time {get;set;}
		 public string abbr_name {get;set;}
		 public string address {get;set;}
		 public string phone {get;set;}
		 public string fax {get;set;}
		 public string identity_id {get;set;}
		 public string ward {get;set;}
		 public int district_id {get;set;}
		 public int province_id {get;set;}
		 public string email {get;set;}
		 public string website {get;set;}
		 public string tax_code {get;set;}
		 public string note {get;set;}
		 public DateTime birthday_time {get;set;}
		 public int type {get;set;}
		 public int rep_sign_type {get;set;}
		 public string rep_number {get;set;}
		 public int warning_after_out_bill {get;set;}
		 public int warning_max_debt {get;set;}
		 public int debt {get;set;}
		 public int pay_type_id {get;set;}
		 public int status {get;set;}
		 public int owner_account_id {get;set;}
		 public long district {get;set;}
		 public long province {get;set;}
		 public int country {get;set;}
		 public int address_is_point {get;set;}
		 public string map_params {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_bag_confirm00
    {
 		 public long id {get;set;}
		 public int bill_package_id {get;set;}
		 public int branch_id {get;set;}
		 public long account_id {get;set;}
		 public DateTime time {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_binaryTest00
    {
 		 public int id {get;set;}
		 public string Name {get;set;}
 
    }
    public class zgcl_bill00
    {
 		 public long id {get;set;}
		 public long dept_to_dept_id {get;set;}
		 public long customer_id {get;set;}
		 public long from_department_id {get;set;}
		 public string from_address {get;set;}
		 public string from_ward {get;set;}
		 public long from_district_id {get;set;}
		 public long from_province_id {get;set;}
		 public string from_fullname {get;set;}
		 public string from_phone {get;set;}
		 public string from_identity {get;set;}
		 public long to_department_id {get;set;}
		 public string to_address {get;set;}
		 public string to_ward {get;set;}
		 public long to_district_id {get;set;}
		 public long to_province_id {get;set;}
		 public string to_fullname {get;set;}
		 public string to_phone {get;set;}
		 public string to_identity {get;set;}
		 public int to_postal_code_id {get;set;}
		 public string to_security_code {get;set;}
		 public double time_totransferfix {get;set;}
		 public double weight {get;set;}
		 public double totalcost {get;set;}
		 public double addcost {get;set;}
		 public int package_total {get;set;}
		 public int package_total_arrival {get;set;}
		 public double weight_c {get;set;}
		 public double realkm {get;set;}
		 public int service_type_id {get;set;}
		 public int vat {get;set;}
		 public int pay_type {get;set;}
		 public string barcode_prefix {get;set;}
		 public string barcode {get;set;}
		 public string qr_Code {get;set;}
		 public string unique_code {get;set;}
		 public string imageurl {get;set;}
		 public string rfid_info_descript {get;set;}
		 public string movinginfo_descript {get;set;}
		 public long parent_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string from_department_idname {get;set;}
 
    }
    public class zgcl_bill01
    {
 		 public long id {get;set;}
		 public long dept_to_dept_id {get;set;}
		 public long customer_id {get;set;}
		 public long from_department_id {get;set;}
		 public string from_address {get;set;}
		 public string from_ward {get;set;}
		 public long from_district_id {get;set;}
		 public long from_province_id {get;set;}
		 public string from_fullname {get;set;}
		 public string from_phone {get;set;}
		 public string from_identity {get;set;}
		 public long to_department_id {get;set;}
		 public string to_address {get;set;}
		 public string to_ward {get;set;}
		 public long to_district_id {get;set;}
		 public long to_province_id {get;set;}
		 public string to_fullname {get;set;}
		 public string to_phone {get;set;}
		 public string to_identity {get;set;}
		 public int to_postal_code_id {get;set;}
		 public string to_security_code {get;set;}
		 public double time_totransferfix {get;set;}
		 public double weight {get;set;}
		 public double totalcost {get;set;}
		 public double addcost {get;set;}
		 public int package_total {get;set;}
		 public int package_total_arrival {get;set;}
		 public double weight_c {get;set;}
		 public double realkm {get;set;}
		 public int service_type_id {get;set;}
		 public int vat {get;set;}
		 public int pay_type {get;set;}
		 public string barcode_prefix {get;set;}
		 public string barcode {get;set;}
		 public string qr_Code {get;set;}
		 public string unique_code {get;set;}
		 public string imageurl {get;set;}
		 public string rfid_info_descript {get;set;}
		 public string movinginfo_descript {get;set;}
		 public long parent_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string from_department_idname {get;set;}
		 public string to_department_idname {get;set;}
 
    }
    public class zgcl_bill02
    {
 		 public long id {get;set;}
		 public long dept_to_dept_id {get;set;}
		 public long customer_id {get;set;}
		 public long from_department_id {get;set;}
		 public string from_address {get;set;}
		 public string from_ward {get;set;}
		 public long from_district_id {get;set;}
		 public long from_province_id {get;set;}
		 public string from_fullname {get;set;}
		 public string from_phone {get;set;}
		 public string from_identity {get;set;}
		 public long to_department_id {get;set;}
		 public string to_address {get;set;}
		 public string to_ward {get;set;}
		 public long to_district_id {get;set;}
		 public long to_province_id {get;set;}
		 public string to_fullname {get;set;}
		 public string to_phone {get;set;}
		 public string to_identity {get;set;}
		 public int to_postal_code_id {get;set;}
		 public string to_security_code {get;set;}
		 public double time_totransferfix {get;set;}
		 public double weight {get;set;}
		 public double totalcost {get;set;}
		 public double addcost {get;set;}
		 public int package_total {get;set;}
		 public int package_total_arrival {get;set;}
		 public double weight_c {get;set;}
		 public double realkm {get;set;}
		 public int service_type_id {get;set;}
		 public int vat {get;set;}
		 public int pay_type {get;set;}
		 public string barcode_prefix {get;set;}
		 public string barcode {get;set;}
		 public string qr_Code {get;set;}
		 public string unique_code {get;set;}
		 public string imageurl {get;set;}
		 public string rfid_info_descript {get;set;}
		 public string movinginfo_descript {get;set;}
		 public long parent_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string from_department_idname {get;set;}
		 public string to_department_idname {get;set;}
		 public string service_type_idname {get;set;}
 
    }
    public class zgcl_bill_add_service00
    {
 		 public long id {get;set;}
		 public long bill_package_id {get;set;}
		 public long add_service_id {get;set;}
		 public string name {get;set;}
		 public string code {get;set;}
		 public byte type {get;set;}
		 public double value {get;set;}
		 public int cal_value {get;set;}
		 public byte count {get;set;}
		 public int postage {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_reason00
    {
 		 public long id {get;set;}
		 public long group_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string descript {get;set;}
		 public int type {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_customer_contract00
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public string contract_code {get;set;}
		 public DateTime from_date {get;set;}
		 public DateTime to_date {get;set;}
		 public string our_sign_name {get;set;}
		 public string customer_sign_name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_receipt_bill_request00
    {
 		 public long id {get;set;}
		 public int receipt_id {get;set;}
		 public long bill_assign_id {get;set;}
		 public long bill_request_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_product_unit00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_PT_KhieuNai00
    {
 		 public long Id {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string TenKhachHang {get;set;}
		 public string SoDienThoai {get;set;}
		 public string Email {get;set;}
		 public DateTime NgayTiepNhan {get;set;}
		 public int NhanVienTiepNhan {get;set;}
		 public int BoPhanGiaiQuyet {get;set;}
		 public int TrangThaiGiaiQuyet {get;set;}
		 public string NoiDungKhieuNai {get;set;}
		 public string NoiDungGiaiQuyet {get;set;}
		 public DateTime NgayTraLoi {get;set;}
		 public int NhanVienTraLoi {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class zgcl_bill_package_image00
    {
 		 public long id {get;set;}
		 public long bill_package_id {get;set;}
		 public string url {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_service_type00
    {
 		 public int id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string formular_convert {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_PT_BoPhanGiaiQuyet00
    {
 		 public long Id {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class zgcl_price_base00
    {
 		 public long id {get;set;}
		 public int service_type_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string service_type_idname {get;set;}
 
    }
    public class zgcl_zone00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public int from_branch_id {get;set;}
		 public int to_branch_id {get;set;}
		 public double km {get;set;}
		 public string note {get;set;}
		 public byte type {get;set;}
		 public string status {get;set;}
		 public DateTime account_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_price_base_detail00
    {
 		 public long id {get;set;}
		 public long price_base_id {get;set;}
		 public long product_id {get;set;}
		 public byte product_unit {get;set;}
		 public byte cal_type {get;set;}
		 public double value {get;set;}
		 public double per_value {get;set;}
		 public int postage {get;set;}
		 public int postage_extra {get;set;}
		 public byte postage_type {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string price_base_idname {get;set;}
 
    }
    public class zgcl_zone_category_service_type00
    {
 		 public long id {get;set;}
		 public long zone_category_id {get;set;}
		 public int service_type_id {get;set;}
		 public double zone_number {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string zone_category_idname {get;set;}
 
    }
    public class zgcl_zone_category_service_type01
    {
 		 public long id {get;set;}
		 public long zone_category_id {get;set;}
		 public int service_type_id {get;set;}
		 public double zone_number {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string zone_category_idname {get;set;}
		 public string service_type_idname {get;set;}
 
    }
    public class zgcl_profile00
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public int type_id {get;set;}
		 public string name {get;set;}
		 public string email {get;set;}
		 public string phone {get;set;}
		 public string position {get;set;}
		 public DateTime birthday_time {get;set;}
		 public string note {get;set;}
		 public string address {get;set;}
		 public string id_number {get;set;}
		 public string yahoo {get;set;}
		 public string skype {get;set;}
		 public string facebook {get;set;}
		 public string gmail {get;set;}
		 public string department {get;set;}
		 public byte sign_type {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_price00
    {
 		 public long id {get;set;}
		 public long price_policy_id {get;set;}
		 public long price_base_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public byte type {get;set;}
		 public byte fkg {get;set;}
		 public int fkg_postage {get;set;}
		 public double fkg_weight {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string price_policy_idname {get;set;}
 
    }
    public class zgcl_price01
    {
 		 public long id {get;set;}
		 public long price_policy_id {get;set;}
		 public long price_base_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public byte type {get;set;}
		 public byte fkg {get;set;}
		 public int fkg_postage {get;set;}
		 public double fkg_weight {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string price_policy_idname {get;set;}
		 public string price_base_idname {get;set;}
 
    }
    public class zgcl_price_policy00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime end_time {get;set;}
		 public string file_ {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int approve_account_id {get;set;}
		 public DateTime approve_account_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_zone_category00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_supplier_profile00
    {
 		 public int supplier_id {get;set;}
		 public int profile_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_reason_add_service00
    {
 		 public long id {get;set;}
		 public long reason_id {get;set;}
		 public long add_service_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_lyt_PT_Manager00
    {
 		 public long Id {get;set;}
		 public int GroupId {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string UserName {get;set;}
		 public string Password {get;set;}
		 public string Name {get;set;}
		 public string FullName {get;set;}
		 public string PrimaryPhone {get;set;}
		 public string PrimaryEmail {get;set;}
		 public string Address {get;set;}
		 public int ProvinceId {get;set;}
		 public string AreaCode {get;set;}
		 public int VanPhongId {get;set;}
		 public int TeamId {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class zgcl_sysdiagrams00
    {
 		 public string name {get;set;}
		 public int principal_id {get;set;}
		 public int diagram_id {get;set;}
		 public int version {get;set;}
		 public string definition {get;set;}
 
    }
    public class zgcl_sms00
    {
 		 public long id {get;set;}
		 public long department_id {get;set;}
		 public string puid {get;set;}
		 public string fullname {get;set;}
		 public string phone {get;set;}
		 public string brandname {get;set;}
		 public string message {get;set;}
		 public DateTime send_time {get;set;}
		 public int send_account_id {get;set;}
		 public string note {get;set;}
		 public string message_id {get;set;}
		 public string error {get;set;}
		 public string error_description {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_PT_Group00
    {
 		 public long Id {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Description {get;set;}
		 public string Color {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class zgcl_product00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public byte type {get;set;}
		 public int order_ {get;set;}
		 public long unit {get;set;}
		 public long product_group_id {get;set;}
		 public bool Record_Enable {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_zone_group00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public int crates_id {get;set;}
		 public byte type {get;set;}
		 public string status {get;set;}
		 public DateTime account_time {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_product_group00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int order_ {get;set;}
		 public bool Record_Enable {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_price_customer00
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public double zone_customer_number {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string customer_idname {get;set;}
 
    }
    public class zgcl_price_customer01
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public double zone_customer_number {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string customer_idname {get;set;}
		 public long zone_category_service_type_idId {get;set;}
 
    }
    public class zgcl_PT_Group_Permission00
    {
 		 public long Id {get;set;}
		 public int GroupId {get;set;}
		 public int PermissionId {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Description {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class zgcl_receipt_bill_package00
    {
 		 public long id {get;set;}
		 public long receipt_id {get;set;}
		 public long bill_assign_id {get;set;}
		 public long old_bill_package_id {get;set;}
		 public long new_bill_package_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_PT_Permission00
    {
 		 public long Id {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Module {get;set;}
		 public string Description {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class zgcl_bill_direction00
    {
 		 public long id {get;set;}
		 public string Bill_id {get;set;}
		 public long account_id {get;set;}
		 public int customer_id {get;set;}
		 public string RealTime_Info {get;set;}
		 public int from_country_id {get;set;}
		 public int from_province_id {get;set;}
		 public int from_district_id {get;set;}
		 public int from_ward_id {get;set;}
		 public int from_branch_id {get;set;}
		 public string from_google_position {get;set;}
		 public double x1 {get;set;}
		 public double y1 {get;set;}
		 public int to_country_id {get;set;}
		 public int to_province_id {get;set;}
		 public int to_district_id {get;set;}
		 public int to_ward_id {get;set;}
		 public int to_branch_id {get;set;}
		 public string to_google_position {get;set;}
		 public double x2 {get;set;}
		 public double y2 {get;set;}
		 public double realkm {get;set;}
		 public double googlekm {get;set;}
		 public double timetransferbyprg {get;set;}
		 public double timetransferreal {get;set;}
		 public string findpathbygoogle {get;set;}
		 public string findpathbyadmin {get;set;}
		 public string findpathreal {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_zone_group_country00
    {
 		 public int zone_group_id {get;set;}
		 public int country_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_price_target_time00
    {
 		 public long price_id {get;set;}
		 public int zone_group_id {get;set;}
		 public byte from_hour {get;set;}
		 public byte to_hour {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public string isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string price_idname {get;set;}
 
    }
    public class zgcl_zone_group_zone00
    {
 		 public int zone_group_id {get;set;}
		 public int zone_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_PT_User_Permission00
    {
 		 public long Id {get;set;}
		 public int UserId {get;set;}
		 public int PermissionId {get;set;}
		 public int Type {get;set;}
		 public string Code {get;set;}
		 public string Name {get;set;}
		 public string Description {get;set;}
		 public int Status {get;set;}
		 public DateTime IsPrgCreatedDate {get;set;}
		 public DateTime IsPrgUpdatedDate {get;set;}
		 public int IsPrgCreatedUserId {get;set;}
		 public int IsPrgUpdatedUserId {get;set;}
 
    }
    public class zgcl_shelf00
    {
 		 public long id {get;set;}
		 public int type {get;set;}
		 public long department_id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_bill_assign_detail_package00
    {
 		 public long id {get;set;}
		 public int bill_assign_id {get;set;}
		 public int bill_package_id {get;set;}
		 public long account_id {get;set;}
		 public long assign_account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public long confirm_account_id {get;set;}
		 public DateTime confirm_time {get;set;}
		 public int confirm_status {get;set;}
		 public string confirm_note {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_store00
    {
 		 public long id {get;set;}
		 public int branch_id {get;set;}
		 public string code {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public DateTime account_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_account00
    {
 		 public int id {get;set;}
		 public string username {get;set;}
		 public string password {get;set;}
		 public string fullname {get;set;}
		 public long department_id {get;set;}
		 public string status {get;set;}
		 public DateTime login_time {get;set;}
		 public DateTime logout_time {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_receipt_bill_bill_backup00
    {
 		 public long id {get;set;}
		 public long receipt_id {get;set;}
		 public long bill_id {get;set;}
		 public long bill_backup_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_branch_group00
    {
 		 public int id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public int type {get;set;}
		 public string status {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_bag_confirm_detail00
    {
 		 public long id {get;set;}
		 public int bag_confirm_id {get;set;}
		 public int bill_package_id {get;set;}
		 public long account_id {get;set;}
		 public DateTime time {get;set;}
		 public string barcode {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_category_group00
    {
 		 public long id {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_bill_assign00
    {
 		 public long id {get;set;}
		 public byte type {get;set;}
		 public string barcode {get;set;}
		 public int branch_id {get;set;}
		 public long account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public int for_account_id {get;set;}
		 public DateTime for_account_time {get;set;}
		 public byte number {get;set;}
		 public byte number_confirm {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public bool record_enable {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_branch_group_detail00
    {
 		 public int id {get;set;}
		 public int branch_group_id {get;set;}
		 public int branch_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_category00
    {
 		 public long id {get;set;}
		 public long category_group_id {get;set;}
		 public int id_value {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_price_customer_extra00
    {
 		 public long id {get;set;}
		 public long price_id {get;set;}
		 public long customer_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public long price_base_detail_id {get;set;}
		 public long price_customer_id {get;set;}
		 public double zone_customer_number_extra {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string customer_idname {get;set;}
 
    }
    public class zgcl_price_customer_extra01
    {
 		 public long id {get;set;}
		 public long price_id {get;set;}
		 public long customer_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public long price_base_detail_id {get;set;}
		 public long price_customer_id {get;set;}
		 public double zone_customer_number_extra {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string customer_idname {get;set;}
		 public long zone_category_service_type_idId {get;set;}
 
    }
    public class zgcl_price_customer_extra02
    {
 		 public long id {get;set;}
		 public long price_id {get;set;}
		 public long customer_id {get;set;}
		 public long zone_category_service_type_id {get;set;}
		 public long price_base_detail_id {get;set;}
		 public long price_customer_id {get;set;}
		 public double zone_customer_number_extra {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string customer_idname {get;set;}
		 public long zone_category_service_type_idId {get;set;}
		 public long price_base_detail_idId {get;set;}
 
    }
    public class zgcl_vehicle_type00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_department_to_deparment00
    {
 		 public long id {get;set;}
		 public long from_department_id {get;set;}
		 public long to_department_id {get;set;}
		 public long service_id {get;set;}
		 public long vehicle_type_id {get;set;}
		 public double fix_km {get;set;}
		 public double fix_Hour {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string from_department_idname {get;set;}
 
    }
    public class zgcl_department_to_deparment01
    {
 		 public long id {get;set;}
		 public long from_department_id {get;set;}
		 public long to_department_id {get;set;}
		 public long service_id {get;set;}
		 public long vehicle_type_id {get;set;}
		 public double fix_km {get;set;}
		 public double fix_Hour {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string from_department_idname {get;set;}
		 public string to_department_idname {get;set;}
 
    }
    public class zgcl_bill_assign_detail_bill00
    {
 		 public int bill_assign_detail_id {get;set;}
		 public int bill_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_Resource00
    {
 		 public int ID {get;set;}
		 public int IDParent {get;set;}
		 public string FormName {get;set;}
		 public string ActionName {get;set;}
		 public string Caption {get;set;}
		 public int SmallImageIndex {get;set;}
		 public int LagerImageIndex {get;set;}
		 public string IconName {get;set;}
		 public bool Active {get;set;}
		 public string AppName {get;set;}
		 public string Description {get;set;}
		 public int Priority {get;set;}
 
    }
    public class zgcl_pay_type00
    {
 		 public int ID {get;set;}
		 public string Name {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_store_zone00
    {
 		 public long id {get;set;}
		 public int store_id {get;set;}
		 public string code {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public DateTime account_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_z_test_cal_data00
    {
 		 public long id {get;set;}
		 public long dep_to_dep_id_in {get;set;}
		 public long service_type_id_in {get;set;}
		 public long from_dep_id {get;set;}
		 public long price_base_id {get;set;}
		 public string note {get;set;}
		 public DateTime isprg_created_date {get;set;}
 
    }
    public class zgcl_bill_package00
    {
 		 public long id {get;set;}
		 public long bill_id {get;set;}
		 public long department_current_id {get;set;}
		 public int no {get;set;}
		 public string barcode {get;set;}
		 public double quantity_total {get;set;}
		 public long store_zone_id {get;set;}
		 public DateTime go_time {get;set;}
		 public string arrival_note {get;set;}
		 public DateTime arrival_time {get;set;}
		 public long parent_id {get;set;}
		 public int product_id {get;set;}
		 public string package_description {get;set;}
		 public double product_l {get;set;}
		 public double product_w {get;set;}
		 public double product_h {get;set;}
		 public double product_weight {get;set;}
		 public double product_convert_weight {get;set;}
		 public double product_value {get;set;}
		 public int cost_main {get;set;}
		 public int cost_add {get;set;}
		 public string receive_fullname {get;set;}
		 public string receive_identity {get;set;}
		 public DateTime receive_identity_date {get;set;}
		 public string receive_identity_place {get;set;}
		 public string receive_phone {get;set;}
		 public string receive_note {get;set;}
		 public DateTime receive_time {get;set;}
		 public int receive_user_id {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string department_current_idname {get;set;}
 
    }
    public class zgcl_price_policy_department_00
    {
 		 public long id {get;set;}
		 public long deparment_id {get;set;}
		 public long price_policy_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_vehicle_shifting_order_detail00
    {
 		 public long id {get;set;}
		 public long vehicle_shifting_order_id {get;set;}
		 public long bill_f3_id {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_bill_request_sms00
    {
 		 public int sms_id {get;set;}
		 public int bill_assign_id {get;set;}
		 public int bill_request_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_z_test_cal_price00
    {
 		 public long id {get;set;}
		 public long from_dep_id_in {get;set;}
		 public long to_dep_id_in {get;set;}
		 public long dep_to_dep_id_in {get;set;}
		 public long service_type_id_in {get;set;}
		 public double weight_cal_in {get;set;}
		 public long price_base_detail_id_in {get;set;}
		 public long zone_category_id_out {get;set;}
		 public long customer_id_in {get;set;}
		 public long price_id_out {get;set;}
		 public long price_base_id_out {get;set;}
		 public int postage_out {get;set;}
		 public string note {get;set;}
		 public DateTime isprg_created_date {get;set;}
 
    }
    public class zgcl_receipt00
    {
 		 public long id {get;set;}
		 public long bill_id {get;set;}
		 public long reason_id {get;set;}
		 public byte reason_group {get;set;}
		 public string reason_name {get;set;}
		 public byte reason_type {get;set;}
		 public string from_fullname {get;set;}
		 public string from_identity {get;set;}
		 public DateTime from_identity_date {get;set;}
		 public string from_identity_place {get;set;}
		 public string note {get;set;}
		 public long responsibility_account_id {get;set;}
		 public string resonsibility_name {get;set;}
		 public string witness_name {get;set;}
		 public string approve_name {get;set;}
		 public long approve_account_id {get;set;}
		 public DateTime approve_account_time {get;set;}
		 public double cost {get;set;}
		 public string original_document {get;set;}
		 public string original_document_file {get;set;}
		 public int create_department_id {get;set;}
		 public long resolved_account_id {get;set;}
		 public string resolved_note {get;set;}
		 public string resolved_comment {get;set;}
		 public int resolved_cost {get;set;}
		 public byte resolved_compensation {get;set;}
		 public DateTime resolved_account_time {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public string reason_idname {get;set;}
 
    }
    public class zgcl_price_level00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public double level_number {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_supplier00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public byte com_type {get;set;}
		 public string name {get;set;}
		 public DateTime esta_time {get;set;}
		 public string abbr_name {get;set;}
		 public string address {get;set;}
		 public string phone {get;set;}
		 public string fax {get;set;}
		 public string email {get;set;}
		 public string website {get;set;}
		 public string tax_code {get;set;}
		 public string note {get;set;}
		 public DateTime birthday_time {get;set;}
		 public string type {get;set;}
		 public byte rep_sign_type {get;set;}
		 public string rep_number {get;set;}
		 public int warning_after_out_bill {get;set;}
		 public int warning_max_debt {get;set;}
		 public int debt {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_temp00
    {
 		 public int Status {get;set;}
		 public string Compare {get;set;}
 
    }
    public class zgcl_branch00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int district_id {get;set;}
		 public string address {get;set;}
		 public string phone {get;set;}
		 public string fax {get;set;}
		 public int status {get;set;}
		 public byte is_transport_center {get;set;}
		 public int company_id {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
 
    }
    public class zgcl_add_service00
    {
 		 public long id {get;set;}
		 public int service_type_id {get;set;}
		 public string name {get;set;}
		 public string code {get;set;}
		 public int type {get;set;}
		 public int count_type {get;set;}
		 public int object_type {get;set;}
		 public double value {get;set;}
		 public int status {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_receipt_add_service00
    {
 		 public long id {get;set;}
		 public long receipt_id {get;set;}
		 public long add_service_id {get;set;}
		 public int type {get;set;}
		 public double value {get;set;}
		 public int cal_value {get;set;}
		 public int postage {get;set;}
		 public double count {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_department_manage_account00
    {
 		 public int department_id {get;set;}
		 public long account_id {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_group_00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public int parent_id {get;set;}
		 public string permission {get;set;}
		 public string note {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_price_department_to_department_zone00
    {
 		 public long id {get;set;}
		 public long zone_category_id {get;set;}
		 public long department_to_department_id {get;set;}
		 public long price_id {get;set;}
		 public bool is_price_cal {get;set;}
		 public bool is_group_go {get;set;}
		 public bool is_group_receive {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string zone_category_idname {get;set;}
 
    }
    public class zgcl_price_department_to_department_zone01
    {
 		 public long id {get;set;}
		 public long zone_category_id {get;set;}
		 public long department_to_department_id {get;set;}
		 public long price_id {get;set;}
		 public bool is_price_cal {get;set;}
		 public bool is_group_go {get;set;}
		 public bool is_group_receive {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string zone_category_idname {get;set;}
		 public long department_to_department_idId {get;set;}
 
    }
    public class zgcl_price_department_to_department_zone02
    {
 		 public long id {get;set;}
		 public long zone_category_id {get;set;}
		 public long department_to_department_id {get;set;}
		 public long price_id {get;set;}
		 public bool is_price_cal {get;set;}
		 public bool is_group_go {get;set;}
		 public bool is_group_receive {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public int isprg_created_userid {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public int isprg_updated_userid {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public string zone_category_idname {get;set;}
		 public long department_to_department_idId {get;set;}
		 public string price_idname {get;set;}
 
    }
    public class zgcl_reason_group00
    {
 		 public long id {get;set;}
		 public string code {get;set;}
		 public string name {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_vehicle_shifting_order00
    {
 		 public long id {get;set;}
		 public long provider_id {get;set;}
		 public long vehicle_id {get;set;}
		 public long provider_shifting_order_id {get;set;}
		 public long way_id {get;set;}
		 public int route_id {get;set;}
		 public int driver1_id {get;set;}
		 public string driver1_name {get;set;}
		 public string driver1_phone {get;set;}
		 public int driver2_id {get;set;}
		 public string driver2_name {get;set;}
		 public string driver2_phone {get;set;}
		 public string guide_name {get;set;}
		 public string guide_phone {get;set;}
		 public string note {get;set;}
		 public DateTime shifting_date {get;set;}
		 public int start_time_id {get;set;}
		 public DateTime start_time {get;set;}
		 public DateTime finish_time {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_action00
    {
 		 public long id {get;set;}
		 public string note {get;set;}
		 public string url {get;set;}
		 public string name {get;set;}
		 public string image {get;set;}
		 public int controller_id {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_customer_profile00
    {
 		 public long id {get;set;}
		 public long customer_id {get;set;}
		 public long profile_id {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_customer_to_customer00
    {
 		 public int id {get;set;}
		 public long from_cus_id {get;set;}
		 public long to_cus_id {get;set;}
		 public string note {get;set;}
		 public int status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_bill_assign_detail00
    {
 		 public long id {get;set;}
		 public int bill_assign_id {get;set;}
		 public int bill_request_id {get;set;}
		 public int voucher_id {get;set;}
		 public long account_id {get;set;}
		 public long assign_account_id {get;set;}
		 public DateTime create_time {get;set;}
		 public string status {get;set;}
		 public long confirm_account_id {get;set;}
		 public DateTime confirm_time {get;set;}
		 public string confirm_note {get;set;}
		 public int confirm_status {get;set;}
		 public string note {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
    public class zgcl_bill_f3_detail00
    {
 		 public long id {get;set;}
		 public long bill_f3_id {get;set;}
		 public long bill_package_id {get;set;}
		 public string note {get;set;}
		 public DateTime go_time {get;set;}
		 public int go_user_id_check {get;set;}
		 public DateTime arrival_time {get;set;}
		 public int arrival_user_id_check {get;set;}
		 public string status {get;set;}
		 public int isprg_status {get;set;}
		 public string isprg_userinfo_descript {get;set;}
		 public DateTime isprg_created_date {get;set;}
		 public DateTime isprg_updated_date {get;set;}
		 public int isprg_created_userid {get;set;}
		 public int isprg_updated_userid {get;set;}
 
    }
}
