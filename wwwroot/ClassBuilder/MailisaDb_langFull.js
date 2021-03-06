var _gbLanguageI18 = {
        _dictSelf: new Map(),
        init: function () {
      var obj0 = {
            _id: 'tbl_NS_BaoHiem',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaBH', vn: 'MaBH' }
				,/*2*/{ field: 'Loai', vn: 'Loai' }
				,/*3*/{ field: 'NgayBatDau', vn: 'NgayBatDau' }
				,/*4*/{ field: 'NgayKetThuc', vn: 'NgayKetThuc' }
				,/*5*/{ field: 'NoiBaoHiem', vn: 'NoiBaoHiem' }
				,/*6*/{ field: 'MaNV', vn: 'MaNV' }

            ],
        }
         this._dictSelf.set('tbl_NS_BaoHiem', obj0);
      var obj1 = {
            _id: 'tbl_NS_ChuyenMon',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_ChuyenMon', obj1);
      var obj2 = {
            _id: 'tbl_NS_NhanVien_ChuyenMon',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaCM', vn: 'MaCM' }
				,/*2*/{ field: 'MaNV', vn: 'MaNV' }
				,/*3*/{ field: 'MucDo', vn: 'MucDo' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_ChuyenMon', obj2);
      var obj3 = {
            _id: 'tbl_NS_GiayTroLai',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNV', vn: 'MaNV' }
				,/*2*/{ field: 'NgayTroLai', vn: 'NgayTroLai' }
				,/*3*/{ field: 'GhiChu', vn: 'GhiChu' }

            ],
        }
         this._dictSelf.set('tbl_NS_GiayTroLai', obj3);
      var obj4 = {
            _id: 'tbl_NS_NghiPhep',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNV', vn: 'MaNV' }
				,/*2*/{ field: 'NgayVietDon', vn: 'NgayVietDon' }
				,/*3*/{ field: 'NgayNghi', vn: 'NgayNghi' }
				,/*4*/{ field: 'NgayTroLai', vn: 'NgayTroLai' }
				,/*5*/{ field: 'LiDo', vn: 'LiDo' }

            ],
        }
         this._dictSelf.set('tbl_NS_NghiPhep', obj4);
      var obj5 = {
            _id: 'tbl_NS_ThoiViec',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNV', vn: 'MaNV' }
				,/*2*/{ field: 'NgayVietDon', vn: 'NgayVietDon' }
				,/*3*/{ field: 'NgayNghi', vn: 'NgayNghi' }
				,/*4*/{ field: 'Lido', vn: 'Lido' }
				,/*5*/{ field: 'TroCap', vn: 'TroCap' }

            ],
        }
         this._dictSelf.set('tbl_NS_ThoiViec', obj5);
      var obj6 = {
            _id: 'tbl_NS_ThuongPhat',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'Thuong', vn: 'Thuong' }
				,/*3*/{ field: 'SoTien', vn: 'SoTien' }

            ],
        }
         this._dictSelf.set('tbl_NS_ThuongPhat', obj6);
      var obj7 = {
            _id: 'tbl_NS_NoiCongTac',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNV', vn: 'MaNV' }
				,/*2*/{ field: 'MaBP', vn: 'MaBP' }
				,/*3*/{ field: 'Lan', vn: 'Lan' }
				,/*4*/{ field: 'ChucVu', vn: 'ChucVu' }
				,/*5*/{ field: 'NgayThuViec', vn: 'NgayThuViec' }
				,/*6*/{ field: 'NgayBatDau', vn: 'NgayBatDau' }
				,/*7*/{ field: 'NgayKetThuc', vn: 'NgayKetThuc' }

            ],
        }
         this._dictSelf.set('tbl_NS_NoiCongTac', obj7);
      var obj8 = {
            _id: 'tbl_Menu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Menu', vn: 'Menu' }
				,/*2*/{ field: 'Url', vn: 'Url' }
				,/*3*/{ field: 'MaQuyen', vn: 'MaQuyen' }
				,/*4*/{ field: 'MenuCha', vn: 'MenuCha' }
				,/*5*/{ field: 'Hinh', vn: 'Hinh' }

            ],
        }
         this._dictSelf.set('tbl_Menu', obj8);
      var obj9 = {
            _id: 'tbl_NS_BoPhan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'GhiChu', vn: 'GhiChu' }

            ],
        }
         this._dictSelf.set('tbl_NS_BoPhan', obj9);
      var obj10 = {
            _id: 'tbl_NS_ChucVu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'GhiChu', vn: 'GhiChu' }

            ],
        }
         this._dictSelf.set('tbl_NS_ChucVu', obj10);
      var obj11 = {
            _id: 'tbl_NS_NhanVien',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'HoTen', vn: 'HoTen' }
				,/*3*/{ field: 'BiDanh', vn: 'BiDanh' }
				,/*4*/{ field: 'NgaySinh', vn: 'NgaySinh' }
				,/*5*/{ field: 'NoiSinh', vn: 'NoiSinh' }
				,/*6*/{ field: 'TinhNS', vn: 'TinhNS' }
				,/*7*/{ field: 'HuyenNS', vn: 'HuyenNS' }
				,/*8*/{ field: 'QueQuan', vn: 'QueQuan' }
				,/*9*/{ field: 'TinhQQ', vn: 'TinhQQ' }
				,/*10*/{ field: 'HuyenQQ', vn: 'HuyenQQ' }
				,/*11*/{ field: 'DanToc', vn: 'DanToc' }
				,/*12*/{ field: 'TonGiao', vn: 'TonGiao' }
				,/*13*/{ field: 'ThuongTru', vn: 'ThuongTru' }
				,/*14*/{ field: 'TinhThT', vn: 'TinhThT' }
				,/*15*/{ field: 'HuyenThT', vn: 'HuyenThT' }
				,/*16*/{ field: 'TamTru', vn: 'TamTru' }
				,/*17*/{ field: 'TinhTT', vn: 'TinhTT' }
				,/*18*/{ field: 'HuyenTT', vn: 'HuyenTT' }
				,/*19*/{ field: 'CMND', vn: 'CMND' }
				,/*20*/{ field: 'NgayCap', vn: 'NgayCap' }
				,/*21*/{ field: 'NoiCap', vn: 'NoiCap' }
				,/*22*/{ field: 'TinhTrangSucKhoe', vn: 'TinhTrangSucKhoe' }
				,/*23*/{ field: 'NhomMau', vn: 'NhomMau' }
				,/*24*/{ field: 'ChieuCao', vn: 'ChieuCao' }
				,/*25*/{ field: 'CanNang', vn: 'CanNang' }
				,/*26*/{ field: 'TinhTrangHonNhan', vn: 'TinhTrangHonNhan' }
				,/*27*/{ field: 'SoConTrai', vn: 'SoConTrai' }
				,/*28*/{ field: 'SoConGai', vn: 'SoConGai' }
				,/*29*/{ field: 'SoCon', vn: 'SoCon' }
				,/*30*/{ field: 'KhenThuong', vn: 'KhenThuong' }
				,/*31*/{ field: 'KyLuat', vn: 'KyLuat' }
				,/*32*/{ field: 'NamNu', vn: 'NamNu' }
				,/*33*/{ field: 'TinhTrangLamViec', vn: 'TinhTrangLamViec' }
				,/*34*/{ field: 'HinhAnh', vn: 'HinhAnh' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien', obj11);
      var obj12 = {
            _id: 'tbl_QuocTich',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_QuocTich', obj12);
      var obj13 = {
            _id: 'tbl_Mailisa_DM_DanToc',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_DanToc', obj13);
      var obj14 = {
            _id: 'tbl_NhomQuyen',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'GhiChu', vn: 'GhiChu' }
				,/*3*/{ field: 'DefaultPage', vn: 'DefaultPage' }

            ],
        }
         this._dictSelf.set('tbl_NhomQuyen', obj14);
      var obj15 = {
            _id: 'tbl_Quyen_NhomQuyen',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNhomQuyen', vn: 'MaNhomQuyen' }
				,/*2*/{ field: 'MaQuyen', vn: 'MaQuyen' }

            ],
        }
         this._dictSelf.set('tbl_Quyen_NhomQuyen', obj15);
      var obj16 = {
            _id: 'tbl_TaiKhoan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Username', vn: 'Username' }
				,/*2*/{ field: 'Password', vn: 'Password' }
				,/*3*/{ field: 'MaQuyen', vn: 'MaQuyen' }
				,/*4*/{ field: 'MaCanBo', vn: 'MaCanBo' }

            ],
        }
         this._dictSelf.set('tbl_TaiKhoan', obj16);
      var obj17 = {
            _id: 'tbl_NS_TheCang',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'SoTC', vn: 'SoTC' }
				,/*2*/{ field: 'NgayCap', vn: 'NgayCap' }
				,/*3*/{ field: 'MaNV', vn: 'MaNV' }
				,/*4*/{ field: 'NgayHetHan', vn: 'NgayHetHan' }

            ],
        }
         this._dictSelf.set('tbl_NS_TheCang', obj17);
      var obj18 = {
            _id: 'tbl_NS_ToCongNhan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaBoPhan', vn: 'MaBoPhan' }
				,/*2*/{ field: 'MaQuanLy', vn: 'MaQuanLy' }
				,/*3*/{ field: 'Ten', vn: 'Ten' }
				,/*4*/{ field: 'GhiChu', vn: 'GhiChu' }
				,/*5*/{ field: 'ToTruong', vn: 'ToTruong' }

            ],
        }
         this._dictSelf.set('tbl_NS_ToCongNhan', obj18);
      var obj19 = {
            _id: 'tbl_NS_GioiTinh',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_GioiTinh', obj19);
      var obj20 = {
            _id: 'tbl_NS_TinhTrangHonNhan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_TinhTrangHonNhan', obj20);
      var obj21 = {
            _id: 'tbl_NS_CongDoan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNV', vn: 'MaNV' }
				,/*2*/{ field: 'HoKhau', vn: 'HoKhau' }
				,/*3*/{ field: 'NgayvaoCongdoan', vn: 'NgayvaoCongdoan' }
				,/*4*/{ field: 'NoiketnapCongdoan', vn: 'NoiketnapCongdoan' }
				,/*5*/{ field: 'NgayvaoDoanTNCSHCM', vn: 'NgayvaoDoanTNCSHCM' }
				,/*6*/{ field: 'SotheDoanvien', vn: 'SotheDoanvien' }
				,/*7*/{ field: 'NgayvaoDangdubi', vn: 'NgayvaoDangdubi' }
				,/*8*/{ field: 'NgayvaoDangchinhthuc', vn: 'NgayvaoDangchinhthuc' }
				,/*9*/{ field: 'NgaychuyendenCongdoanDaithanh', vn: 'NgaychuyendenCongdoanDaithanh' }
				,/*10*/{ field: 'Ngaychuyendi', vn: 'Ngaychuyendi' }

            ],
        }
         this._dictSelf.set('tbl_NS_CongDoan', obj21);
      var obj22 = {
            _id: 'tbl_NS_TrinhDoVanHoa',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_TrinhDoVanHoa', obj22);
      var obj23 = {
            _id: 'tbl_NS_NhanVien_QuaTrinhCongTac',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienID', vn: 'NhanVienID' }
				,/*2*/{ field: 'NgheNghiep', vn: 'NgheNghiep' }
				,/*3*/{ field: 'NgayTuyenDung', vn: 'NgayTuyenDung' }
				,/*4*/{ field: 'LoaiHopDong', vn: 'LoaiHopDong' }
				,/*5*/{ field: 'ChucVu', vn: 'ChucVu' }
				,/*6*/{ field: 'BoPhan', vn: 'BoPhan' }
				,/*7*/{ field: 'ToDoi', vn: 'ToDoi' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_QuaTrinhCongTac', obj23);
      var obj24 = {
            _id: 'tbl_NS_NhanVien_Doan_Dang',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanvienID', vn: 'NhanvienID' }
				,/*2*/{ field: 'NgayVaoDangDuBi', vn: 'NgayVaoDangDuBi' }
				,/*3*/{ field: 'NgayVaoDangChinhThuc', vn: 'NgayVaoDangChinhThuc' }
				,/*4*/{ field: 'NgayVaoCongDoan', vn: 'NgayVaoCongDoan' }
				,/*5*/{ field: 'SoThe', vn: 'SoThe' }
				,/*6*/{ field: 'NgayVaoDoan', vn: 'NgayVaoDoan' }
				,/*7*/{ field: 'NgayNhapNgu', vn: 'NgayNhapNgu' }
				,/*8*/{ field: 'NgayXuatNgu', vn: 'NgayXuatNgu' }
				,/*9*/{ field: 'QuanHamCaoNhat', vn: 'QuanHamCaoNhat' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_Doan_Dang', obj24);
      var obj25 = {
            _id: 'tbl_NS_NhanVien_TrinhDo',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNV', vn: 'MaNV' }
				,/*2*/{ field: 'TrinhDoGiaoDuc', vn: 'TrinhDoGiaoDuc' }
				,/*3*/{ field: 'TrinhDoChuyenMon', vn: 'TrinhDoChuyenMon' }
				,/*4*/{ field: 'LyLuanChinhTri', vn: 'LyLuanChinhTri' }
				,/*5*/{ field: 'TinHoc', vn: 'TinHoc' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_TrinhDo', obj25);
      var obj26 = {
            _id: 'tbl_NS_NhanVien_NgoaiNgu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'MaNgoaiNgu', vn: 'MaNgoaiNgu' }
				,/*3*/{ field: 'TrinhDo', vn: 'TrinhDo' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_NgoaiNgu', obj26);
      var obj27 = {
            _id: 'tbl_NS_NhanVien_QuaTrinhDaoTao',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienID', vn: 'NhanVienID' }
				,/*2*/{ field: 'TenTruong', vn: 'TenTruong' }
				,/*3*/{ field: 'ChuyenNganh', vn: 'ChuyenNganh' }
				,/*4*/{ field: 'TuThang', vn: 'TuThang' }
				,/*5*/{ field: 'TuNam', vn: 'TuNam' }
				,/*6*/{ field: 'DenThang', vn: 'DenThang' }
				,/*7*/{ field: 'DenNam', vn: 'DenNam' }
				,/*8*/{ field: 'HinhThucDaoTao', vn: 'HinhThucDaoTao' }
				,/*9*/{ field: 'VanBang', vn: 'VanBang' }
				,/*10*/{ field: 'ChungChi', vn: 'ChungChi' }
				,/*11*/{ field: 'TrinhDo', vn: 'TrinhDo' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_QuaTrinhDaoTao', obj27);
      var obj28 = {
            _id: 'tbl_NS_NhanVien_LichSuCongTac',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienID', vn: 'NhanVienID' }
				,/*2*/{ field: 'DonViCongTac', vn: 'DonViCongTac' }
				,/*3*/{ field: 'TuThang', vn: 'TuThang' }
				,/*4*/{ field: 'TuNam', vn: 'TuNam' }
				,/*5*/{ field: 'DenThang', vn: 'DenThang' }
				,/*6*/{ field: 'DenNam', vn: 'DenNam' }
				,/*7*/{ field: 'CongViecChinh', vn: 'CongViecChinh' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_LichSuCongTac', obj28);
      var obj29 = {
            _id: 'tbl_NS_NhanVien_LichSuBanThan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'BanThan', vn: 'BanThan' }
				,/*3*/{ field: 'QuanHeToChucNuocNgoai', vn: 'QuanHeToChucNuocNgoai' }
				,/*4*/{ field: 'ThanNhan', vn: 'ThanNhan' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_LichSuBanThan', obj29);
      var obj30 = {
            _id: 'tbl_NS_NhanVien_GiaDinhBanThan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'MaQuanHe', vn: 'MaQuanHe' }
				,/*3*/{ field: 'HoTen', vn: 'HoTen' }
				,/*4*/{ field: 'NamSinh', vn: 'NamSinh' }
				,/*5*/{ field: 'NgheNghiep', vn: 'NgheNghiep' }
				,/*6*/{ field: 'ChucDanh', vn: 'ChucDanh' }
				,/*7*/{ field: 'ChucVu', vn: 'ChucVu' }
				,/*8*/{ field: 'NoiO', vn: 'NoiO' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_GiaDinhBanThan', obj30);
      var obj31 = {
            _id: 'tbl_NS_NhanVien_QuanHe_Vo_Chong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienID', vn: 'NhanVienID' }
				,/*2*/{ field: 'MaQuanHe', vn: 'MaQuanHe' }
				,/*3*/{ field: 'HoTen', vn: 'HoTen' }
				,/*4*/{ field: 'NamSinh', vn: 'NamSinh' }
				,/*5*/{ field: 'NgheNghiep', vn: 'NgheNghiep' }
				,/*6*/{ field: 'ChucDanh', vn: 'ChucDanh' }
				,/*7*/{ field: 'ChucVu', vn: 'ChucVu' }
				,/*8*/{ field: 'NoiO', vn: 'NoiO' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_QuanHe_Vo_Chong', obj31);
      var obj32 = {
            _id: 'tbl_NS_Mailisa_DM_NhomMau',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_Mailisa_DM_NhomMau', obj32);
      var obj33 = {
            _id: 'tbl_Mailisa_DM_TinhTrangSucKhoe',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_TinhTrangSucKhoe', obj33);
      var obj34 = {
            _id: 'tbl_Mailisa_DM_TinhTrangHonNhan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_TinhTrangHonNhan', obj34);
      var obj35 = {
            _id: 'tbl_Mailisa_DM_TonGiao',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_TonGiao', obj35);
      var obj36 = {
            _id: 'tbl_NS_DM_Tinh',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_Tinh', obj36);
      var obj37 = {
            _id: 'tbl_NS_DM_TrinhDoChuyenMon',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_TrinhDoChuyenMon', obj37);
      var obj38 = {
            _id: 'tbl_NS_DM_TrinhDoGiaoDucPhoThong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_TrinhDoGiaoDucPhoThong', obj38);
      var obj39 = {
            _id: 'tbl_NS_DM_TrinhDoNgoaiNgu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_TrinhDoNgoaiNgu', obj39);
      var obj40 = {
            _id: 'tbl_NS_DM_NgoaiNgu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_NgoaiNgu', obj40);
      var obj41 = {
            _id: 'tbl_NS_DM_TrinhDoTinHoc',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_TrinhDoTinHoc', obj41);
      var obj42 = {
            _id: 'tbl_NS_DM_LyLuanChinhTri',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_LyLuanChinhTri', obj42);
      var obj43 = {
            _id: 'tbl_NS_DM_QuanHeGiaDinh',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_QuanHeGiaDinh', obj43);
      var obj44 = {
            _id: 'tbl_NS_DM_LoaiHopDong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_LoaiHopDong', obj44);
      var obj45 = {
            _id: 'tbl_NS_DM_NgheNghiep',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_NgheNghiep', obj45);
      var obj46 = {
            _id: 'tbl_NS_QuiDinhCa',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaQuanLy', vn: 'MaQuanLy' }
				,/*2*/{ field: 'TenCa', vn: 'TenCa' }
				,/*3*/{ field: 'GioBatDau', vn: 'GioBatDau' }
				,/*4*/{ field: 'GioKetThuc', vn: 'GioKetThuc' }
				,/*5*/{ field: 'GiaTien', vn: 'GiaTien' }

            ],
        }
         this._dictSelf.set('tbl_NS_QuiDinhCa', obj46);
      var obj47 = {
            _id: 'tbl_NS_ChamCongVanPhong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNV', vn: 'MaNV' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'TinhTrangId', vn: 'TinhTrangId' }
				,/*4*/{ field: 'GhiChu', vn: 'GhiChu' }

            ],
        }
         this._dictSelf.set('tbl_NS_ChamCongVanPhong', obj47);
      var obj48 = {
            _id: 'tbl_NS_TinhTrang',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'GioCoMat', vn: 'GioCoMat' }
				,/*3*/{ field: 'ThoiGianTre', vn: 'ThoiGianTre' }
				,/*4*/{ field: 'GhiChu', vn: 'GhiChu' }

            ],
        }
         this._dictSelf.set('tbl_NS_TinhTrang', obj48);
      var obj49 = {
            _id: 'tbl_NS_DM_ChuyenNganh',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_ChuyenNganh', obj49);
      var obj50 = {
            _id: 'tbl_Mailisa_DM_Bophan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'BranchId', vn: 'BranchId' }
				,/*4*/{ field: 'MaBoPhan', vn: 'MaBoPhan' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_Bophan', obj50);
      var obj51 = {
            _id: 'tbl_Mailisa_DM_Chungtu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NameE', vn: 'NameE' }
				,/*4*/{ field: 'TKNo', vn: 'TKNo' }
				,/*5*/{ field: 'TKCo', vn: 'TKCo' }
				,/*6*/{ field: 'ExterntCode', vn: 'ExterntCode' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_Chungtu', obj51);
      var obj52 = {
            _id: 'tbl_Mailisa_DM_ChungTuSuDung',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NameE', vn: 'NameE' }
				,/*4*/{ field: 'ChungtuId', vn: 'ChungtuId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_ChungTuSuDung', obj52);
      var obj53 = {
            _id: 'tbl_Mailisa_DM_Kho',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NameE', vn: 'NameE' }
				,/*4*/{ field: 'LoaiKhoId', vn: 'LoaiKhoId' }
				,/*5*/{ field: 'ExterntCode', vn: 'ExterntCode' }
				,/*6*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*7*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*8*/{ field: 'IsHasKhoTable', vn: 'IsHasKhoTable' }
				,/*9*/{ field: 'IsHasKhoNKTable', vn: 'IsHasKhoNKTable' }
				,/*10*/{ field: 'IsHasKhoXKTable', vn: 'IsHasKhoXKTable' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_Kho', obj53);
      var obj54 = {
            _id: 'tbl_Mailisa_DM_LoaiKho',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NameE', vn: 'NameE' }
				,/*4*/{ field: 'ExterntCode', vn: 'ExterntCode' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_LoaiKho', obj54);
      var obj55 = {
            _id: 'tbl_Mailisa_DM_LoaiTien',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NameE', vn: 'NameE' }
				,/*4*/{ field: 'ExterntCode', vn: 'ExterntCode' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_LoaiTien', obj55);
      var obj56 = {
            _id: 'tbl_Mailisa_DM_Mucdichsudung',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NameE', vn: 'NameE' }
				,/*4*/{ field: 'ExterntCode', vn: 'ExterntCode' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_Mucdichsudung', obj56);
      var obj57 = {
            _id: 'tbl_Mailisa_DM_NguonVon',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NameE', vn: 'NameE' }
				,/*4*/{ field: 'ExterntCode', vn: 'ExterntCode' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_NguonVon', obj57);
      var obj58 = {
            _id: 'tbl_Mailisa_DM_NhomDoiTuong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_NhomDoiTuong', obj58);
      var obj59 = {
            _id: 'tbl_Mailisa_DM_QuocGia',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'ExterntCode', vn: 'ExterntCode' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_QuocGia', obj59);
      var obj60 = {
            _id: 'tbl_Mailisa_DM_TaiKhoan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'ExterntCode', vn: 'ExterntCode' }
				,/*4*/{ field: 'TkNgoaiTe', vn: 'TkNgoaiTe' }
				,/*5*/{ field: 'TkCongNo', vn: 'TkCongNo' }
				,/*6*/{ field: 'TkGiaThanh', vn: 'TkGiaThanh' }
				,/*7*/{ field: 'Bac', vn: 'Bac' }
				,/*8*/{ field: 'TkCha', vn: 'TkCha' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_TaiKhoan', obj60);
      var obj61 = {
            _id: 'tbl_Mailisa_DM_VuViec',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_VuViec', obj61);
      var obj62 = {
            _id: 'tbl_Mailisa_DM_VuViec_DsPhieu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'VuviecId', vn: 'VuviecId' }
				,/*4*/{ field: 'ChungTuId', vn: 'ChungTuId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_VuViec_DsPhieu', obj62);
      var obj63 = {
            _id: 'tbl_Mailisa_NhomThietBi',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'ExterntCode', vn: 'ExterntCode' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_NhomThietBi', obj63);
      var obj64 = {
            _id: 'tbl_Mailisa_ThietBi',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NhomThietBiId', vn: 'NhomThietBiId' }
				,/*4*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*5*/{ field: 'NuocSx', vn: 'NuocSx' }
				,/*6*/{ field: 'NamSx', vn: 'NamSx' }
				,/*7*/{ field: 'GiaTri', vn: 'GiaTri' }
				,/*8*/{ field: 'MucDichSuDung', vn: 'MucDichSuDung' }
				,/*9*/{ field: 'GiaTriHaoMon', vn: 'GiaTriHaoMon' }
				,/*10*/{ field: 'GiaTriConLai', vn: 'GiaTriConLai' }
				,/*11*/{ field: 'GiaTriTinhKhauHao', vn: 'GiaTriTinhKhauHao' }
				,/*12*/{ field: 'LoaiTien', vn: 'LoaiTien' }
				,/*13*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*14*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_ThietBi', obj64);
      var obj65 = {
            _id: 'tbl_Mailisa_ThietBi_SuaChuaBaoTri',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ThietbiId', vn: 'ThietbiId' }
				,/*2*/{ field: 'Code', vn: 'Code' }
				,/*3*/{ field: 'Name', vn: 'Name' }
				,/*4*/{ field: 'NgayTangTaisan', vn: 'NgayTangTaisan' }
				,/*5*/{ field: 'NguonVonId', vn: 'NguonVonId' }
				,/*6*/{ field: 'NguyenGia', vn: 'NguyenGia' }
				,/*7*/{ field: 'HaoMon', vn: 'HaoMon' }
				,/*8*/{ field: 'ConLai', vn: 'ConLai' }
				,/*9*/{ field: 'NgayKhauHao', vn: 'NgayKhauHao' }
				,/*10*/{ field: 'GiaTriTinhKhauHao', vn: 'GiaTriTinhKhauHao' }
				,/*11*/{ field: 'SoThang', vn: 'SoThang' }
				,/*12*/{ field: 'GiaTriKhauHaoNam', vn: 'GiaTriKhauHaoNam' }
				,/*13*/{ field: 'GiaTriKhauHaoThang', vn: 'GiaTriKhauHaoThang' }
				,/*14*/{ field: 'GhiChu', vn: 'GhiChu' }
				,/*15*/{ field: 'NhanvienId', vn: 'NhanvienId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_ThietBi_SuaChuaBaoTri', obj65);
      var obj66 = {
            _id: 'tbl_NS_HopDong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*2*/{ field: 'SoHopDong', vn: 'SoHopDong' }
				,/*3*/{ field: 'NgayBatDau', vn: 'NgayBatDau' }
				,/*4*/{ field: 'NgayKetThuc', vn: 'NgayKetThuc' }
				,/*5*/{ field: 'NoiDung', vn: 'NoiDung' }
				,/*6*/{ field: 'LoaiHopDongId', vn: 'LoaiHopDongId' }

            ],
        }
         this._dictSelf.set('tbl_NS_HopDong', obj66);
      var obj67 = {
            _id: 'tbl_NS_NhanVien_Config_GOBALPAGETAB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Tab', vn: 'Tab' }
				,/*2*/{ field: 'TableName', vn: 'TableName' }
				,/*3*/{ field: 'FormName', vn: 'FormName' }
				,/*4*/{ field: 'ParentTab', vn: 'ParentTab' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_Config_GOBALPAGETAB', obj67);
      var obj68 = {
            _id: 'tbl_NS_NhanVien_Config_GOBALPAGETABTEST',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Tab', vn: 'Tab' }
				,/*2*/{ field: 'TableName', vn: 'TableName' }
				,/*3*/{ field: 'FormName', vn: 'FormName' }
				,/*4*/{ field: 'ParentTab', vn: 'ParentTab' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_Config_GOBALPAGETABTEST', obj68);
      var obj69 = {
            _id: 'tbl_Mailisa_KD_DM_CachChamSoc',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_DM_CachChamSoc', obj69);
      var obj70 = {
            _id: 'tbl_Mailisa_KD_DM_Huyen',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'MaTinh', vn: 'MaTinh' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_DM_Huyen', obj70);
      var obj71 = {
            _id: 'tbl_Mailisa_KD_DM_Tinh',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_DM_Tinh', obj71);
      var obj72 = {
            _id: 'tbl_Mailisa_KD_LoaiKhachHangKD',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_LoaiKhachHangKD', obj72);
      var obj73 = {
            _id: 'tbl_Mailisa_KD_PhanLoaiKhachHang',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }
				,/*3*/{ field: 'CacChinhSach', vn: 'CacChinhSach' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_PhanLoaiKhachHang', obj73);
      var obj74 = {
            _id: 'tbl_Mailisa_KD_LichHenKH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }
				,/*3*/{ field: 'NgayGio', vn: 'NgayGio' }
				,/*4*/{ field: 'DiaDiem', vn: 'DiaDiem' }
				,/*5*/{ field: 'ChiPhiDuTinh', vn: 'ChiPhiDuTinh' }
				,/*6*/{ field: 'ChiPhiThucTe', vn: 'ChiPhiThucTe' }
				,/*7*/{ field: 'NguoiTiepKHId', vn: 'NguoiTiepKHId' }
				,/*8*/{ field: 'KhachHangId', vn: 'KhachHangId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_LichHenKH', obj74);
      var obj75 = {
            _id: 'tbl_Mailisa_CONFIG_DETAIL',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Tab', vn: 'Tab' }
				,/*2*/{ field: 'TableName', vn: 'TableName' }
				,/*3*/{ field: 'FormName', vn: 'FormName' }
				,/*4*/{ field: 'ParentTab', vn: 'ParentTab' }
				,/*5*/{ field: 'Detail', vn: 'Detail' }
				,/*6*/{ field: 'MultiOrSingle', vn: 'MultiOrSingle' }
				,/*7*/{ field: 'DetailBtnName', vn: 'DetailBtnName' }
				,/*8*/{ field: 'ConfigId', vn: 'ConfigId' }
				,/*9*/{ field: 'mLevel', vn: 'mLevel' }
				,/*10*/{ field: 'mBaseRuleName', vn: 'mBaseRuleName' }
				,/*11*/{ field: 'bLinkToBaseDetail', vn: 'bLinkToBaseDetail' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_CONFIG_DETAIL', obj75);
      var obj76 = {
            _id: 'tbl_SY_HuongDanSuDung',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }
				,/*3*/{ field: 'Version', vn: 'Version' }
				,/*4*/{ field: 'NgayXuat', vn: 'NgayXuat' }
				,/*5*/{ field: 'ModuleId', vn: 'ModuleId' }
				,/*6*/{ field: 'FileDinhKem', vn: 'FileDinhKem' }

            ],
        }
         this._dictSelf.set('tbl_SY_HuongDanSuDung', obj76);
      var obj77 = {
            _id: 'tbl_SY_BanQuyen',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }
				,/*3*/{ field: 'Version', vn: 'Version' }
				,/*4*/{ field: 'NgayXuat', vn: 'NgayXuat' }
				,/*5*/{ field: 'data', vn: 'data' }

            ],
        }
         this._dictSelf.set('tbl_SY_BanQuyen', obj77);
      var obj78 = {
            _id: 'tbl_Mailisa_KD_KhachHangCongNo',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhachHangId', vn: 'KhachHangId' }
				,/*2*/{ field: 'SotienPhaiTra', vn: 'SotienPhaiTra' }
				,/*3*/{ field: 'Thoigianthanhtoan', vn: 'Thoigianthanhtoan' }
				,/*4*/{ field: 'Lichnhacnho', vn: 'Lichnhacnho' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_KhachHangCongNo', obj78);
      var obj79 = {
            _id: 'tbl_KD_QuanLyMailisa',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }

            ],
        }
         this._dictSelf.set('tbl_KD_QuanLyMailisa', obj79);
      var obj80 = {
            _id: 'tbl_GOBAL',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'Path', vn: 'Path' }
				,/*3*/{ field: 'bBuild', vn: 'bBuild' }
				,/*4*/{ field: 'ImagePath', vn: 'ImagePath' }
				,/*5*/{ field: 'CurParentName', vn: 'CurParentName' }
				,/*6*/{ field: 'FileChangeCode', vn: 'FileChangeCode' }

            ],
        }
         this._dictSelf.set('tbl_GOBAL', obj80);
      var obj81 = {
            _id: 'tbl_Mailisa_KD_LichChamSoc',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NgayChamSoc', vn: 'NgayChamSoc' }
				,/*2*/{ field: 'KhachHangId', vn: 'KhachHangId' }
				,/*3*/{ field: 'ChamSocId', vn: 'ChamSocId' }
				,/*4*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_LichChamSoc', obj81);
      var obj82 = {
            _id: 'tbl_NS_DM_Huyen',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaTinh', vn: 'MaTinh' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_NS_DM_Huyen', obj82);
      var obj83 = {
            _id: 'tbl_Mailisa_DM_Chucvu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_Chucvu', obj83);
      var obj84 = {
            _id: 'tbl_Mailisa_KD_ChamSocKhachHang',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NgayChamSoc', vn: 'NgayChamSoc' }
				,/*2*/{ field: 'KhachHangId', vn: 'KhachHangId' }
				,/*3*/{ field: 'NguoiNhan', vn: 'NguoiNhan' }
				,/*4*/{ field: 'NguoiChamSocId', vn: 'NguoiChamSocId' }
				,/*5*/{ field: 'ChamSocId', vn: 'ChamSocId' }
				,/*6*/{ field: 'NoiDung', vn: 'NoiDung' }
				,/*7*/{ field: 'SoTienChi', vn: 'SoTienChi' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_ChamSocKhachHang', obj84);
      var obj85 = {
            _id: 'tbl_Mailisa_AutoGenCode',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'Thoigian', vn: 'Thoigian' }
				,/*3*/{ field: 'CurCount', vn: 'CurCount' }
				,/*4*/{ field: 'CountRow', vn: 'CountRow' }
				,/*5*/{ field: 'Type', vn: 'Type' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_AutoGenCode', obj85);
      var obj86 = {
            _id: 'tbl_Mailisa_DM_LoaiChamCong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_LoaiChamCong', obj86);
      var obj87 = {
            _id: 'tbl_Test_MakeReport',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DVId', vn: 'DVId' }
				,/*2*/{ field: 'TOId', vn: 'TOId' }
				,/*3*/{ field: 'PId', vn: 'PId' }
				,/*4*/{ field: 'Ngaygio', vn: 'Ngaygio' }
				,/*5*/{ field: 'rValue', vn: 'rValue' }

            ],
        }
         this._dictSelf.set('tbl_Test_MakeReport', obj87);
      var obj88 = {
            _id: 'tbl_Test_MakeReportDV',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'IsUsually', vn: 'IsUsually' }

            ],
        }
         this._dictSelf.set('tbl_Test_MakeReportDV', obj88);
      var obj89 = {
            _id: 'tbl_Test_MakeReportNV',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }

            ],
        }
         this._dictSelf.set('tbl_Test_MakeReportNV', obj89);
      var obj90 = {
            _id: 'tbl_Test_MakeReportP',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'IsUsually', vn: 'IsUsually' }

            ],
        }
         this._dictSelf.set('tbl_Test_MakeReportP', obj90);
      var obj91 = {
            _id: 'tbl_Test_MakeReportTO',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'IsUsually', vn: 'IsUsually' }

            ],
        }
         this._dictSelf.set('tbl_Test_MakeReportTO', obj91);
      var obj92 = {
            _id: 'tbl_Mailisa_PhieuThuTienBanSanPham_Chitiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuThuTienMatId', vn: 'PhieuThuTienMatId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'KhoId', vn: 'KhoId' }
				,/*4*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*5*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*6*/{ field: 'DonViTinhId', vn: 'DonViTinhId' }
				,/*7*/{ field: 'DonGia', vn: 'DonGia' }
				,/*8*/{ field: 'ThanhTien', vn: 'ThanhTien' }
				,/*9*/{ field: 'NhanVienBanSPId', vn: 'NhanVienBanSPId' }
				,/*10*/{ field: 'ChietKhauNV', vn: 'ChietKhauNV' }
				,/*11*/{ field: 'NhanVienTuVanId', vn: 'NhanVienTuVanId' }
				,/*12*/{ field: 'ChietKhauNVTV', vn: 'ChietKhauNVTV' }
				,/*13*/{ field: 'KhuyenMaiBSP', vn: 'KhuyenMaiBSP' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuThuTienBanSanPham_Chitiet', obj92);
      var obj93 = {
            _id: 'tbl_Mailisa_DVTinhHH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DVTinhHH', obj93);
      var obj94 = {
            _id: 'tbl_CONFIG_REPORT_MULTI',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ReportName', vn: 'ReportName' }
				,/*2*/{ field: 'TableName', vn: 'TableName' }
				,/*3*/{ field: 'ShowName', vn: 'ShowName' }
				,/*4*/{ field: 'TypeReport', vn: 'TypeReport' }
				,/*5*/{ field: 'MainTable', vn: 'MainTable' }
				,/*6*/{ field: 'ParentId', vn: 'ParentId' }
				,/*7*/{ field: 'CssHeader', vn: 'CssHeader' }
				,/*8*/{ field: 'CssTD', vn: 'CssTD' }
				,/*9*/{ field: 'CssSumGobal', vn: 'CssSumGobal' }
				,/*10*/{ field: 'CssSumGroupBy', vn: 'CssSumGroupBy' }
				,/*11*/{ field: 'isBuild', vn: 'isBuild' }
				,/*12*/{ field: 'GroupBy', vn: 'GroupBy' }
				,/*13*/{ field: 'GroupByArr', vn: 'GroupByArr' }
				,/*14*/{ field: 'GroupByArrContent', vn: 'GroupByArrContent' }
				,/*15*/{ field: 'SumCol', vn: 'SumCol' }
				,/*16*/{ field: 'FileName', vn: 'FileName' }
				,/*17*/{ field: 'PathName', vn: 'PathName' }

            ],
        }
         this._dictSelf.set('tbl_CONFIG_REPORT_MULTI', obj94);
      var obj95 = {
            _id: 'tbl_CONFIG_REPORT_MULTI_DETAIL',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'TableName', vn: 'TableName' }
				,/*2*/{ field: 'ColName', vn: 'ColName' }
				,/*3*/{ field: 'FormName', vn: 'FormName' }
				,/*4*/{ field: 'IsShow', vn: 'IsShow' }
				,/*5*/{ field: 'ColType', vn: 'ColType' }
				,/*6*/{ field: 'OrderCol', vn: 'OrderCol' }
				,/*7*/{ field: 'Parent', vn: 'Parent' }
				,/*8*/{ field: 'ChildNode', vn: 'ChildNode' }
				,/*9*/{ field: 'ColTypeInt', vn: 'ColTypeInt' }
				,/*10*/{ field: 'iNotFillData', vn: 'iNotFillData' }

            ],
        }
         this._dictSelf.set('tbl_CONFIG_REPORT_MULTI_DETAIL', obj95);
      var obj96 = {
            _id: 'tbl_Mailisa_Hocvien_Thuphi_Chitiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuThuTienMatId', vn: 'PhieuThuTienMatId' }
				,/*2*/{ field: 'VuviecId', vn: 'VuviecId' }
				,/*3*/{ field: 'ThanhTien', vn: 'ThanhTien' }
				,/*4*/{ field: 'DienGian', vn: 'DienGian' }
				,/*5*/{ field: 'DichvuId', vn: 'DichvuId' }
				,/*6*/{ field: 'NhanvienTuvanId', vn: 'NhanvienTuvanId' }
				,/*7*/{ field: 'NhanvienTuvanId1', vn: 'NhanvienTuvanId1' }
				,/*8*/{ field: 'VAT', vn: 'VAT' }
				,/*9*/{ field: 'CKNVTV1', vn: 'CKNVTV1' }
				,/*10*/{ field: 'CKNVTV2', vn: 'CKNVTV2' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_Hocvien_Thuphi_Chitiet', obj96);
      var obj97 = {
            _id: 'tbl_Mailisa_DM_Dichvu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*4*/{ field: 'GiaTriHHNVL', vn: 'GiaTriHHNVL' }
				,/*5*/{ field: 'GiaTriHHNVTV', vn: 'GiaTriHHNVTV' }
				,/*6*/{ field: 'GiaVonUsing', vn: 'GiaVonUsing' }
				,/*7*/{ field: 'GiaDichVuUsing', vn: 'GiaDichVuUsing' }
				,/*8*/{ field: 'KhuyenMai', vn: 'KhuyenMai' }
				,/*9*/{ field: 'isProgram', vn: 'isProgram' }
				,/*10*/{ field: 'isProgramDel', vn: 'isProgramDel' }
				,/*11*/{ field: 'IsProgramBoSP', vn: 'IsProgramBoSP' }
				,/*12*/{ field: 'PhanTram_HaoHut', vn: 'PhanTram_HaoHut' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_Dichvu', obj97);
      var obj98 = {
            _id: 'tbl_Mailisa_SanPhamPhaChe',//table
            _fieldsList: [
                /*0*/{ field: 'd', vn: 'd' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_SanPhamPhaChe', obj98);
      var obj99 = {
            _id: 'tbl_Mailisa_LapGiaDichVu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DichVuId', vn: 'DichVuId' }
				,/*2*/{ field: 'NgayLapGia', vn: 'NgayLapGia' }
				,/*3*/{ field: 'GiaVon', vn: 'GiaVon' }
				,/*4*/{ field: 'GiaDichVu', vn: 'GiaDichVu' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LapGiaDichVu', obj99);
      var obj100 = {
            _id: 'tbl_Mailisa_DM_LopHoc',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'DichvuId', vn: 'DichvuId' }
				,/*4*/{ field: 'GiaTietHoc', vn: 'GiaTietHoc' }
				,/*5*/{ field: 'TongSoTiet', vn: 'TongSoTiet' }
				,/*6*/{ field: 'NgayBatDau', vn: 'NgayBatDau' }
				,/*7*/{ field: 'NgayKetThuc', vn: 'NgayKetThuc' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_LopHoc', obj100);
      var obj101 = {
            _id: 'tbl_Mailisa_PhieuXuatKCXuongKB_Chitiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuXuatKCXuongKBId', vn: 'PhieuXuatKCXuongKBId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*5*/{ field: 'DonGia', vn: 'DonGia' }
				,/*6*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuXuatKCXuongKB_Chitiet', obj101);
      var obj102 = {
            _id: 'tbl_Mailisa_LopHocHocVien',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'HocVienId', vn: 'HocVienId' }
				,/*3*/{ field: 'LopHocId', vn: 'LopHocId' }
				,/*4*/{ field: 'NgayBatDau', vn: 'NgayBatDau' }
				,/*5*/{ field: 'NgayKetThuc', vn: 'NgayKetThuc' }
				,/*6*/{ field: 'CapChungChi', vn: 'CapChungChi' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LopHocHocVien', obj102);
      var obj103 = {
            _id: 'tbl_Mailisa_PhieuXuatBoPhan_Chitiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuXuatBoPhanId', vn: 'PhieuXuatBoPhanId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*5*/{ field: 'DonGia', vn: 'DonGia' }
				,/*6*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuXuatBoPhan_Chitiet', obj103);
      var obj104 = {
            _id: 'tbl_Mailisa_DM_LuongCoBan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'LuongCoBan', vn: 'LuongCoBan' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_LuongCoBan', obj104);
      var obj105 = {
            _id: 'tbl_Mailisa_DM_LoaiLuong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_LoaiLuong', obj105);
      var obj106 = {
            _id: 'tbl_Mailisa_TinhLuong_Chitiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'LoaiLuongId', vn: 'LoaiLuongId' }
				,/*4*/{ field: 'SoTien', vn: 'SoTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_TinhLuong_Chitiet', obj106);
      var obj107 = {
            _id: 'tbl_Mailisa_NhanVienTamUng',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'NgayTamUng', vn: 'NgayTamUng' }
				,/*3*/{ field: 'SoTien', vn: 'SoTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_NhanVienTamUng', obj107);
      var obj108 = {
            _id: 'tbl_Mailisa_TinhLuong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'Nam', vn: 'Nam' }
				,/*3*/{ field: 'Thang', vn: 'Thang' }
				,/*4*/{ field: 'Luong', vn: 'Luong' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_TinhLuong', obj108);
      var obj109 = {
            _id: 'tbl_Mailisa_PhieuNhapKho_Chitiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuNhapKhoId', vn: 'PhieuNhapKhoId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*5*/{ field: 'DonGia', vn: 'DonGia' }
				,/*6*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuNhapKho_Chitiet', obj109);
      var obj110 = {
            _id: 'tbl_Mailisa_PhieuXuatSalon_ChiTiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuXuatSalonId', vn: 'PhieuXuatSalonId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*5*/{ field: 'DonGia', vn: 'DonGia' }
				,/*6*/{ field: 'ThanhTien', vn: 'ThanhTien' }
				,/*7*/{ field: 'DichvuId', vn: 'DichvuId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuXuatSalon_ChiTiet', obj110);
      var obj111 = {
            _id: 'tbl_Mailisa_DichVuGiaVon',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DichVuId', vn: 'DichVuId' }
				,/*2*/{ field: 'SanPhamId', vn: 'SanPhamId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*5*/{ field: 'DonGia', vn: 'DonGia' }
				,/*6*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DichVuGiaVon', obj111);
      var obj112 = {
            _id: 'tbl_Mailisa_QuangCao_SuKien',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NgayQuyetDinh', vn: 'NgayQuyetDinh' }
				,/*2*/{ field: 'NgayBatDau', vn: 'NgayBatDau' }
				,/*3*/{ field: 'NgayKetThuc', vn: 'NgayKetThuc' }
				,/*4*/{ field: 'NoiDung', vn: 'NoiDung' }
				,/*5*/{ field: 'PhuongThucId', vn: 'PhuongThucId' }
				,/*6*/{ field: 'SoTien', vn: 'SoTien' }
				,/*7*/{ field: 'DanhGia', vn: 'DanhGia' }
				,/*8*/{ field: 'PhanLoaiQCId', vn: 'PhanLoaiQCId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_QuangCao_SuKien', obj112);
      var obj113 = {
            _id: 'tbl_Mailisa_DM_PhanLoaiQuangCao',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_PhanLoaiQuangCao', obj113);
      var obj114 = {
            _id: 'tbl_Mailisa_DM_PhuongThucQuangCao',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_PhuongThucQuangCao', obj114);
      var obj115 = {
            _id: 'tbl_Mailisa_DM_Branch',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'Address', vn: 'Address' }
				,/*4*/{ field: 'Mobile', vn: 'Mobile' }
				,/*5*/{ field: 'OfficePhone', vn: 'OfficePhone' }
				,/*6*/{ field: 'Fax', vn: 'Fax' }
				,/*7*/{ field: 'Email', vn: 'Email' }
				,/*8*/{ field: 'Website', vn: 'Website' }
				,/*9*/{ field: 'SoTaiKhoan', vn: 'SoTaiKhoan' }
				,/*10*/{ field: 'NganHang', vn: 'NganHang' }
				,/*11*/{ field: 'MST', vn: 'MST' }
				,/*12*/{ field: 'NhanvienId', vn: 'NhanvienId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_Branch', obj115);
      var obj116 = {
            _id: 'tbl_Mailisa_PhieuThuTienMat',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'SoCT', vn: 'SoCT' }
				,/*3*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*4*/{ field: 'VuviecId', vn: 'VuviecId' }
				,/*5*/{ field: 'NhomDoiTuongId', vn: 'NhomDoiTuongId' }
				,/*6*/{ field: 'DoiTuongId', vn: 'DoiTuongId' }
				,/*7*/{ field: 'TongTien', vn: 'TongTien' }
				,/*8*/{ field: 'ThucThu', vn: 'ThucThu' }
				,/*9*/{ field: 'NoLai', vn: 'NoLai' }
				,/*10*/{ field: 'DienGiai', vn: 'DienGiai' }
				,/*11*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*12*/{ field: 'ThanhToan', vn: 'ThanhToan' }
				,/*13*/{ field: 'isDatCoc', vn: 'isDatCoc' }
				,/*14*/{ field: 'SoTienCoc', vn: 'SoTienCoc' }
				,/*15*/{ field: 'isTraNo', vn: 'isTraNo' }
				,/*16*/{ field: 'SoTienNo', vn: 'SoTienNo' }
				,/*17*/{ field: 'isFinished', vn: 'isFinished' }
				,/*18*/{ field: 'BranhId', vn: 'BranhId' }
				,/*19*/{ field: 'KhuyenMai', vn: 'KhuyenMai' }
				,/*20*/{ field: 'Status', vn: 'Status' }
				,/*21*/{ field: 'DichVuDatCocId', vn: 'DichVuDatCocId' }
				,/*22*/{ field: 'BoPhanDatCocId', vn: 'BoPhanDatCocId' }
				,/*23*/{ field: 'NgayHen', vn: 'NgayHen' }
				,/*24*/{ field: 'SoTienNoKhachTra', vn: 'SoTienNoKhachTra' }
				,/*25*/{ field: 'SoTienDaCoc', vn: 'SoTienDaCoc' }
				,/*26*/{ field: 'MaPTDaCoc', vn: 'MaPTDaCoc' }
				,/*27*/{ field: 'isPrinted', vn: 'isPrinted' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuThuTienMat', obj116);
      var obj117 = {
            _id: 'tbl_Mailisa_PhieuChiTienMat',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'SoCT', vn: 'SoCT' }
				,/*3*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*4*/{ field: 'NhomDoiTuongId', vn: 'NhomDoiTuongId' }
				,/*5*/{ field: 'TienThue', vn: 'TienThue' }
				,/*6*/{ field: 'TongTien', vn: 'TongTien' }
				,/*7*/{ field: 'VuviecId', vn: 'VuviecId' }
				,/*8*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*9*/{ field: 'DienGiai', vn: 'DienGiai' }
				,/*10*/{ field: 'BranchId', vn: 'BranchId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuChiTienMat', obj117);
      var obj118 = {
            _id: 'tbl_Mailisa_PhieuChiTienMat_ChiTiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuChiTienMatId', vn: 'PhieuChiTienMatId' }
				,/*2*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*3*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*4*/{ field: 'DonGia', vn: 'DonGia' }
				,/*5*/{ field: 'ThanhTien', vn: 'ThanhTien' }
				,/*6*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*7*/{ field: 'DichvuId', vn: 'DichvuId' }
				,/*8*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*9*/{ field: 'DoiTuongId', vn: 'DoiTuongId' }
				,/*10*/{ field: 'VAT', vn: 'VAT' }
				,/*11*/{ field: 'DienGiai', vn: 'DienGiai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuChiTienMat_ChiTiet', obj118);
      var obj119 = {
            _id: 'tbl_Mailisa_Hocvien',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhomDoiTuongId', vn: 'NhomDoiTuongId' }
				,/*2*/{ field: 'Code', vn: 'Code' }
				,/*3*/{ field: 'Name', vn: 'Name' }
				,/*4*/{ field: 'Address', vn: 'Address' }
				,/*5*/{ field: 'Mobile', vn: 'Mobile' }
				,/*6*/{ field: 'HomePhone', vn: 'HomePhone' }
				,/*7*/{ field: 'OfficePhone', vn: 'OfficePhone' }
				,/*8*/{ field: 'Fax', vn: 'Fax' }
				,/*9*/{ field: 'Email', vn: 'Email' }
				,/*10*/{ field: 'Website', vn: 'Website' }
				,/*11*/{ field: 'NhanBang', vn: 'NhanBang' }
				,/*12*/{ field: 'BatDau', vn: 'BatDau' }
				,/*13*/{ field: 'KetThuc', vn: 'KetThuc' }
				,/*14*/{ field: 'LopId', vn: 'LopId' }
				,/*15*/{ field: 'NgayNhanBang', vn: 'NgayNhanBang' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_Hocvien', obj119);
      var obj120 = {
            _id: 'tbl_Mailisa_PhieuNhapKho',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'SoCT', vn: 'SoCT' }
				,/*3*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*4*/{ field: 'DoiTuongId', vn: 'DoiTuongId' }
				,/*5*/{ field: 'TienThue', vn: 'TienThue' }
				,/*6*/{ field: 'TongTien', vn: 'TongTien' }
				,/*7*/{ field: 'VuviecId', vn: 'VuviecId' }
				,/*8*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*9*/{ field: 'DaTra', vn: 'DaTra' }
				,/*10*/{ field: 'NoLai', vn: 'NoLai' }
				,/*11*/{ field: 'KhoId', vn: 'KhoId' }
				,/*12*/{ field: 'DienGiai', vn: 'DienGiai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuNhapKho', obj120);
      var obj121 = {
            _id: 'tbl_Mailisa_PhieuXuatKCXuongKB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'SoCT', vn: 'SoCT' }
				,/*3*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*4*/{ field: 'NhomDoiTuongId', vn: 'NhomDoiTuongId' }
				,/*5*/{ field: 'TienThue', vn: 'TienThue' }
				,/*6*/{ field: 'TongTien', vn: 'TongTien' }
				,/*7*/{ field: 'VuviecId', vn: 'VuviecId' }
				,/*8*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*9*/{ field: 'KhoXuatId', vn: 'KhoXuatId' }
				,/*10*/{ field: 'KhoNhapId', vn: 'KhoNhapId' }
				,/*11*/{ field: 'DienGiai', vn: 'DienGiai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuXuatKCXuongKB', obj121);
      var obj122 = {
            _id: 'tbl_Mailisa_PhieuXuatSalon',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'SoCT', vn: 'SoCT' }
				,/*3*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*4*/{ field: 'DoiTuongId', vn: 'DoiTuongId' }
				,/*5*/{ field: 'TienThue', vn: 'TienThue' }
				,/*6*/{ field: 'TongTien', vn: 'TongTien' }
				,/*7*/{ field: 'VuviecId', vn: 'VuviecId' }
				,/*8*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*9*/{ field: 'KhoId', vn: 'KhoId' }
				,/*10*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*11*/{ field: 'DienGiai', vn: 'DienGiai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuXuatSalon', obj122);
      var obj123 = {
            _id: 'tbl_Mailisa_PhieuThuTienMat_Chitiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuThuTienMatId', vn: 'PhieuThuTienMatId' }
				,/*2*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*3*/{ field: 'DichvuId', vn: 'DichvuId' }
				,/*4*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*5*/{ field: 'ChietKhauNV', vn: 'ChietKhauNV' }
				,/*6*/{ field: 'NVTuVanId', vn: 'NVTuVanId' }
				,/*7*/{ field: 'ChietKhauNVTV', vn: 'ChietKhauNVTV' }
				,/*8*/{ field: 'VAT', vn: 'VAT' }
				,/*9*/{ field: 'DienGiai', vn: 'DienGiai' }
				,/*10*/{ field: 'TienDichVu', vn: 'TienDichVu' }
				,/*11*/{ field: 'KhuyenMaiDV', vn: 'KhuyenMaiDV' }
				,/*12*/{ field: 'NvLam2', vn: 'NvLam2' }
				,/*13*/{ field: 'NvLam3', vn: 'NvLam3' }
				,/*14*/{ field: 'NvLam4', vn: 'NvLam4' }
				,/*15*/{ field: 'NvTv2', vn: 'NvTv2' }
				,/*16*/{ field: 'NvTv3', vn: 'NvTv3' }
				,/*17*/{ field: 'NvTv4', vn: 'NvTv4' }
				,/*18*/{ field: 'DaChamSoc', vn: 'DaChamSoc' }
				,/*19*/{ field: 'GhiChuChamSoc', vn: 'GhiChuChamSoc' }
				,/*20*/{ field: 'NvGiamSatId', vn: 'NvGiamSatId' }
				,/*21*/{ field: 'GdChiNhanhId', vn: 'GdChiNhanhId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuThuTienMat_Chitiet', obj123);
      var obj124 = {
            _id: 'tbl_Mailisa_DM_PhanLoaiPhanHoi',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'SoTien', vn: 'SoTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_PhanLoaiPhanHoi', obj124);
      var obj125 = {
            _id: 'tbl_Mailisa_DM_GioiTinh',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_GioiTinh', obj125);
      var obj126 = {
            _id: 'tbl_Mailisa_DM_VattuHangHoa_ChiTiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*2*/{ field: 'ThanhPhanId', vn: 'ThanhPhanId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*5*/{ field: 'DonGia', vn: 'DonGia' }
				,/*6*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_VattuHangHoa_ChiTiet', obj126);
      var obj127 = {
            _id: 'tbl_CONFIG_REPORT_DETAIL',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'TableName', vn: 'TableName' }
				,/*2*/{ field: 'ColName', vn: 'ColName' }
				,/*3*/{ field: 'FormName', vn: 'FormName' }
				,/*4*/{ field: 'IsShow', vn: 'IsShow' }
				,/*5*/{ field: 'ColType', vn: 'ColType' }
				,/*6*/{ field: 'OrderCol', vn: 'OrderCol' }
				,/*7*/{ field: 'Parent', vn: 'Parent' }
				,/*8*/{ field: 'ChildNode', vn: 'ChildNode' }
				,/*9*/{ field: 'ColTypeInt', vn: 'ColTypeInt' }
				,/*10*/{ field: 'iNotFillData', vn: 'iNotFillData' }

            ],
        }
         this._dictSelf.set('tbl_CONFIG_REPORT_DETAIL', obj127);
      var obj128 = {
            _id: 'tbl_Mailisa_CONFIG',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Tab', vn: 'Tab' }
				,/*2*/{ field: 'TableName', vn: 'TableName' }
				,/*3*/{ field: 'FormName', vn: 'FormName' }
				,/*4*/{ field: 'ParentTab', vn: 'ParentTab' }
				,/*5*/{ field: 'TypeObject', vn: 'TypeObject' }
				,/*6*/{ field: 'Detail', vn: 'Detail' }
				,/*7*/{ field: 'MultiOrSingle', vn: 'MultiOrSingle' }
				,/*8*/{ field: 'DetailBtnName', vn: 'DetailBtnName' }
				,/*9*/{ field: 'ConfigId', vn: 'ConfigId' }
				,/*10*/{ field: 'mLevel', vn: 'mLevel' }
				,/*11*/{ field: 'mBaseRuleName', vn: 'mBaseRuleName' }
				,/*12*/{ field: 'bLinkToBaseDetail', vn: 'bLinkToBaseDetail' }
				,/*13*/{ field: 'UpdateFile', vn: 'UpdateFile' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_CONFIG', obj128);
      var obj129 = {
            _id: 'tbl_Mailisa_DVT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DVT', obj129);
      var obj130 = {
            _id: 'tbl_Mailisa_DM_LoaiVattuHangHoa',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_LoaiVattuHangHoa', obj130);
      var obj131 = {
            _id: 'tbl_CONFIG_REPORT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'TableName', vn: 'TableName' }
				,/*2*/{ field: 'ShowName', vn: 'ShowName' }
				,/*3*/{ field: 'TypeReport', vn: 'TypeReport' }
				,/*4*/{ field: 'MainTable', vn: 'MainTable' }
				,/*5*/{ field: 'ParentId', vn: 'ParentId' }
				,/*6*/{ field: 'CssHeader', vn: 'CssHeader' }
				,/*7*/{ field: 'CssTD', vn: 'CssTD' }
				,/*8*/{ field: 'CssSumGobal', vn: 'CssSumGobal' }
				,/*9*/{ field: 'CssSumGroupBy', vn: 'CssSumGroupBy' }
				,/*10*/{ field: 'isBuild', vn: 'isBuild' }
				,/*11*/{ field: 'GroupBy', vn: 'GroupBy' }
				,/*12*/{ field: 'GroupByArr', vn: 'GroupByArr' }
				,/*13*/{ field: 'GroupByArrContent', vn: 'GroupByArrContent' }
				,/*14*/{ field: 'SumCol', vn: 'SumCol' }
				,/*15*/{ field: 'FileName', vn: 'FileName' }
				,/*16*/{ field: 'PathName', vn: 'PathName' }
				,/*17*/{ field: 'isLoadField', vn: 'isLoadField' }

            ],
        }
         this._dictSelf.set('tbl_CONFIG_REPORT', obj131);
      var obj132 = {
            _id: 'tbl_KHO_CONFIG',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'TableName', vn: 'TableName' }
				,/*2*/{ field: 'TableType', vn: 'TableType' }
				,/*3*/{ field: 'Detail', vn: 'Detail' }

            ],
        }
         this._dictSelf.set('tbl_KHO_CONFIG', obj132);
      var obj133 = {
            _id: 'tbl_KHO_CONFIG_DETAIL',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'TableName', vn: 'TableName' }
				,/*2*/{ field: 'ColName', vn: 'ColName' }
				,/*3*/{ field: 'ViewName', vn: 'ViewName' }
				,/*4*/{ field: 'IsShow', vn: 'IsShow' }
				,/*5*/{ field: 'OrderCol', vn: 'OrderCol' }
				,/*6*/{ field: 'isCreateDate', vn: 'isCreateDate' }
				,/*7*/{ field: 'isSum', vn: 'isSum' }
				,/*8*/{ field: 'Description', vn: 'Description' }

            ],
        }
         this._dictSelf.set('tbl_KHO_CONFIG_DETAIL', obj133);
      var obj134 = {
            _id: 'tbl_KHO_NhatKyKiemKho',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'lastDate', vn: 'lastDate' }
				,/*3*/{ field: 'isDinhKy', vn: 'isDinhKy' }

            ],
        }
         this._dictSelf.set('tbl_KHO_NhatKyKiemKho', obj134);
      var obj135 = {
            _id: 'tbl_KHO_ChiTietTonKho',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhatKyId', vn: 'NhatKyId' }
				,/*2*/{ field: 'MatHangId', vn: 'MatHangId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'DonGia', vn: 'DonGia' }
				,/*5*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_KHO_ChiTietTonKho', obj135);
      var obj136 = {
            _id: 'tbl_KHO_ChiTietTonKho_Temp',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhatKyId', vn: 'NhatKyId' }
				,/*2*/{ field: 'MatHangId', vn: 'MatHangId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'DonGia', vn: 'DonGia' }
				,/*5*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_KHO_ChiTietTonKho_Temp', obj136);
      var obj137 = {
            _id: 'tbl_Mailisa_PhieuXuatBoPhan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'SoCT', vn: 'SoCT' }
				,/*3*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*4*/{ field: 'DoiTuongId', vn: 'DoiTuongId' }
				,/*5*/{ field: 'VuviecId', vn: 'VuviecId' }
				,/*6*/{ field: 'TongTien', vn: 'TongTien' }
				,/*7*/{ field: 'TienThue', vn: 'TienThue' }
				,/*8*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*9*/{ field: 'BophanId', vn: 'BophanId' }
				,/*10*/{ field: 'KhoXuatId', vn: 'KhoXuatId' }
				,/*11*/{ field: 'KhoNhapId', vn: 'KhoNhapId' }
				,/*12*/{ field: 'DienGiai', vn: 'DienGiai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuXuatBoPhan', obj137);
      var obj138 = {
            _id: 'tbl_GOBAL_LoaiChamCong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'MucLuong', vn: 'MucLuong' }

            ],
        }
         this._dictSelf.set('tbl_GOBAL_LoaiChamCong', obj138);
      var obj139 = {
            _id: 'tbl_GOBAL_NhanVien_ChamCong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*3*/{ field: 'Ngay', vn: 'Ngay' }
				,/*4*/{ field: 'Status', vn: 'Status' }
				,/*5*/{ field: 'BranchId', vn: 'BranchId' }

            ],
        }
         this._dictSelf.set('tbl_GOBAL_NhanVien_ChamCong', obj139);
      var obj140 = {
            _id: 'tbl_LUONG_BangLuong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*3*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*4*/{ field: 'NgayApDung', vn: 'NgayApDung' }
				,/*5*/{ field: 'NvLapId', vn: 'NvLapId' }

            ],
        }
         this._dictSelf.set('tbl_LUONG_BangLuong', obj140);
      var obj141 = {
            _id: 'tbl_LUONG_BangLuong_ChiTiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BangLuongId', vn: 'BangLuongId' }
				,/*2*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*3*/{ field: 'LuongCoBan', vn: 'LuongCoBan' }
				,/*4*/{ field: 'LuongChucVu', vn: 'LuongChucVu' }
				,/*5*/{ field: 'PhuCap', vn: 'PhuCap' }

            ],
        }
         this._dictSelf.set('tbl_LUONG_BangLuong_ChiTiet', obj141);
      var obj142 = {
            _id: 'tbl_NS_Luong_TamUng',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SoTienNhan', vn: 'SoTienNhan' }

            ],
        }
         this._dictSelf.set('tbl_NS_Luong_TamUng', obj142);
      var obj143 = {
            _id: 'tbl_CONFIG_DETAIL_CHANGECODE',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ConfigId', vn: 'ConfigId' }

            ],
        }
         this._dictSelf.set('tbl_CONFIG_DETAIL_CHANGECODE', obj143);
      var obj144 = {
            _id: 'sysuserGcDescriptionNew',//table
            _fieldsList: [
                /*0*/{ field: 'tablename', vn: 'tablename' }
				,/*1*/{ field: 'objname', vn: 'objname' }
				,/*2*/{ field: 'descript', vn: 'descript' }

            ],
        }
         this._dictSelf.set('sysuserGcDescriptionNew', obj144);
      var obj145 = {
            _id: 'gc_sysuserGcDescriptionNew',//table
            _fieldsList: [
                /*0*/{ field: 'name', vn: 'name' }
				,/*1*/{ field: 'length', vn: 'length' }
				,/*2*/{ field: 'xprec', vn: 'xprec' }
				,/*3*/{ field: 'xscale', vn: 'xscale' }
				,/*4*/{ field: 'colid', vn: 'colid' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isnullable', vn: 'isnullable' }
				,/*7*/{ field: 'colorder', vn: 'colorder' }
				,/*8*/{ field: 'typename', vn: 'typename' }
				,/*9*/{ field: 'xtype', vn: 'xtype' }
				,/*10*/{ field: 'tablename', vn: 'tablename' }
				,/*11*/{ field: 'tableid', vn: 'tableid' }
				,/*12*/{ field: 'fkeyid', vn: 'fkeyid' }
				,/*13*/{ field: 'ftable', vn: 'ftable' }
				,/*14*/{ field: 'fcolname', vn: 'fcolname' }
				,/*15*/{ field: 'PrimaryKey', vn: 'PrimaryKey' }
				,/*16*/{ field: 'descript', vn: 'descript' }

            ],
        }
         this._dictSelf.set('gc_sysuserGcDescriptionNew', obj145);
      var obj146 = {
            _id: 'tbl_Quyen',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'CODE', vn: 'CODE' }
				,/*3*/{ field: 'GhiChu', vn: 'GhiChu' }

            ],
        }
         this._dictSelf.set('tbl_Quyen', obj146);
      var obj147 = {
            _id: 'sysdiagrams',//table
            _fieldsList: [
                /*0*/{ field: 'name', vn: 'name' }
				,/*1*/{ field: 'principal_id', vn: 'principal_id' }
				,/*2*/{ field: 'diagram_id', vn: 'diagram_id' }
				,/*3*/{ field: 'version', vn: 'version' }
				,/*4*/{ field: 'definition', vn: 'definition' }

            ],
        }
         this._dictSelf.set('sysdiagrams', obj147);
      var obj148 = {
            _id: 'tbl_KHO_ChiTietTonKho_Dyn',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MatHangId', vn: 'MatHangId' }
				,/*2*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*3*/{ field: 'DonGia', vn: 'DonGia' }
				,/*4*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_KHO_ChiTietTonKho_Dyn', obj148);
      var obj149 = {
            _id: 'tbl_Mailisa_PhieuThu_GhiNhanPhanHoi',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NgayGhiNhanPhanHoi', vn: 'NgayGhiNhanPhanHoi' }
				,/*2*/{ field: 'KhachHangId', vn: 'KhachHangId' }
				,/*3*/{ field: 'PhieuThuId', vn: 'PhieuThuId' }
				,/*4*/{ field: 'NVLamDichVuId', vn: 'NVLamDichVuId' }
				,/*5*/{ field: 'PhanLoaiPhanHoiId', vn: 'PhanLoaiPhanHoiId' }
				,/*6*/{ field: 'NoiDung', vn: 'NoiDung' }
				,/*7*/{ field: 'NguoiContactId', vn: 'NguoiContactId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_PhieuThu_GhiNhanPhanHoi', obj149);
      var obj150 = {
            _id: 'tbl_KHO_TonKhoBanDau',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*3*/{ field: 'NhanVienId', vn: 'NhanVienId' }

            ],
        }
         this._dictSelf.set('tbl_KHO_TonKhoBanDau', obj150);
      var obj151 = {
            _id: 'tbl_KHO_TonKhoBanDau_ChiTiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhatKyId', vn: 'NhatKyId' }
				,/*2*/{ field: 'MatHangId', vn: 'MatHangId' }
				,/*3*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*4*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_KHO_TonKhoBanDau_ChiTiet', obj151);
      var obj152 = {
            _id: 'tbl_LUONG_LoaiThuongPhat',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }

            ],
        }
         this._dictSelf.set('tbl_LUONG_LoaiThuongPhat', obj152);
      var obj153 = {
            _id: 'tbl_NS_NhanVien_ThuongPhat',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'MaNv', vn: 'MaNv' }
				,/*2*/{ field: 'NgayXet', vn: 'NgayXet' }
				,/*3*/{ field: 'ThuongPhat', vn: 'ThuongPhat' }
				,/*4*/{ field: 'SoTien', vn: 'SoTien' }
				,/*5*/{ field: 'GhiChu', vn: 'GhiChu' }
				,/*6*/{ field: 'isProgramHideId', vn: 'isProgramHideId' }

            ],
        }
         this._dictSelf.set('tbl_NS_NhanVien_ThuongPhat', obj153);
      var obj154 = {
            _id: 'tbl_Mailisa_DM_ThuongPhat',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'Thuong', vn: 'Thuong' }
				,/*3*/{ field: 'SoTien', vn: 'SoTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_ThuongPhat', obj154);
      var obj155 = {
            _id: 'tbl_Maillisa_NhanVien_ThuongPhat',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'NgayXet', vn: 'NgayXet' }
				,/*3*/{ field: 'ThuongPhatId', vn: 'ThuongPhatId' }
				,/*4*/{ field: 'SoTien', vn: 'SoTien' }
				,/*5*/{ field: 'GhiChu', vn: 'GhiChu' }
				,/*6*/{ field: 'IsProgramHideId', vn: 'IsProgramHideId' }
				,/*7*/{ field: 'IsProgramPTChitietId', vn: 'IsProgramPTChitietId' }

            ],
        }
         this._dictSelf.set('tbl_Maillisa_NhanVien_ThuongPhat', obj155);
      var obj156 = {
            _id: 'new_KhachHang',//table
            _fieldsList: [
                /*0*/{ field: 'HoTen', vn: 'HoTen' }
				,/*1*/{ field: 'Lop', vn: 'Lop' }
				,/*2*/{ field: 'NhomDoiTuong', vn: 'NhomDoiTuong' }
				,/*3*/{ field: 'DiaChi', vn: 'DiaChi' }
				,/*4*/{ field: 'SDT', vn: 'SDT' }
				,/*5*/{ field: 'hh', vn: 'hh' }
				,/*6*/{ field: 'aa', vn: 'aa' }

            ],
        }
         this._dictSelf.set('new_KhachHang', obj156);
      var obj157 = {
            _id: 'tbl_Mailisa_KD_KhachHang',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }
				,/*3*/{ field: 'DiaChi', vn: 'DiaChi' }
				,/*4*/{ field: 'Mobile', vn: 'Mobile' }
				,/*5*/{ field: 'HomePhone', vn: 'HomePhone' }
				,/*6*/{ field: 'MaLoaiKHKDId', vn: 'MaLoaiKHKDId' }
				,/*7*/{ field: 'SinhNhat', vn: 'SinhNhat' }
				,/*8*/{ field: 'HuyenId', vn: 'HuyenId' }
				,/*9*/{ field: 'TinhId', vn: 'TinhId' }
				,/*10*/{ field: 'MaPhanLoaiKH', vn: 'MaPhanLoaiKH' }
				,/*11*/{ field: 'NhomDoiTuongId', vn: 'NhomDoiTuongId' }
				,/*12*/{ field: 'SinhNhatText', vn: 'SinhNhatText' }
				,/*13*/{ field: 'CreateDate', vn: 'CreateDate' }
				,/*14*/{ field: 'UserId', vn: 'UserId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_KhachHang', obj157);
      var obj158 = {
            _id: 'tbl_Mailisa_DM_DoiTuong',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'NhomDoiTuongId', vn: 'NhomDoiTuongId' }
				,/*4*/{ field: 'Address', vn: 'Address' }
				,/*5*/{ field: 'Mobile', vn: 'Mobile' }
				,/*6*/{ field: 'HomePhone', vn: 'HomePhone' }
				,/*7*/{ field: 'OfficePhone', vn: 'OfficePhone' }
				,/*8*/{ field: 'Fax', vn: 'Fax' }
				,/*9*/{ field: 'Email', vn: 'Email' }
				,/*10*/{ field: 'Website', vn: 'Website' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_DoiTuong', obj158);
      var obj159 = {
            _id: 'tbl_Mailisa_KD_NhanVien',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'HoTen', vn: 'HoTen' }
				,/*3*/{ field: 'BiDanh', vn: 'BiDanh' }
				,/*4*/{ field: 'NgaySinh', vn: 'NgaySinh' }
				,/*5*/{ field: 'NoiSinh', vn: 'NoiSinh' }
				,/*6*/{ field: 'TinhNS', vn: 'TinhNS' }
				,/*7*/{ field: 'HuyenNS', vn: 'HuyenNS' }
				,/*8*/{ field: 'QueQuan', vn: 'QueQuan' }
				,/*9*/{ field: 'TinhQQ', vn: 'TinhQQ' }
				,/*10*/{ field: 'HuyenQQ', vn: 'HuyenQQ' }
				,/*11*/{ field: 'DanToc', vn: 'DanToc' }
				,/*12*/{ field: 'TonGiao', vn: 'TonGiao' }
				,/*13*/{ field: 'ThuongTru', vn: 'ThuongTru' }
				,/*14*/{ field: 'TinhThT', vn: 'TinhThT' }
				,/*15*/{ field: 'HuyenThT', vn: 'HuyenThT' }
				,/*16*/{ field: 'TamTru', vn: 'TamTru' }
				,/*17*/{ field: 'TinhTT', vn: 'TinhTT' }
				,/*18*/{ field: 'HuyenTT', vn: 'HuyenTT' }
				,/*19*/{ field: 'CMND', vn: 'CMND' }
				,/*20*/{ field: 'NgayCap', vn: 'NgayCap' }
				,/*21*/{ field: 'NoiCap', vn: 'NoiCap' }
				,/*22*/{ field: 'TinhTrangSucKhoe', vn: 'TinhTrangSucKhoe' }
				,/*23*/{ field: 'NhomMau', vn: 'NhomMau' }
				,/*24*/{ field: 'ChieuCao', vn: 'ChieuCao' }
				,/*25*/{ field: 'CanNang', vn: 'CanNang' }
				,/*26*/{ field: 'TinhTrangHonNhan', vn: 'TinhTrangHonNhan' }
				,/*27*/{ field: 'SoConTrai', vn: 'SoConTrai' }
				,/*28*/{ field: 'SoConGai', vn: 'SoConGai' }
				,/*29*/{ field: 'SoCon', vn: 'SoCon' }
				,/*30*/{ field: 'KhenThuong', vn: 'KhenThuong' }
				,/*31*/{ field: 'KyLuat', vn: 'KyLuat' }
				,/*32*/{ field: 'NamNu', vn: 'NamNu' }
				,/*33*/{ field: 'TinhTrangLamViec', vn: 'TinhTrangLamViec' }
				,/*34*/{ field: 'QuoctichId', vn: 'QuoctichId' }
				,/*35*/{ field: 'HinhAnh', vn: 'HinhAnh' }
				,/*36*/{ field: 'ExternCode', vn: 'ExternCode' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_NhanVien', obj159);
      var obj160 = {
            _id: 'tbl_Mailisa_Nhanvien',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'HoTen', vn: 'HoTen' }
				,/*3*/{ field: 'BiDanh', vn: 'BiDanh' }
				,/*4*/{ field: 'NgaySinh', vn: 'NgaySinh' }
				,/*5*/{ field: 'CMND', vn: 'CMND' }
				,/*6*/{ field: 'NgayCap', vn: 'NgayCap' }
				,/*7*/{ field: 'NoiCap', vn: 'NoiCap' }
				,/*8*/{ field: 'BophanId', vn: 'BophanId' }
				,/*9*/{ field: 'ChucvuId', vn: 'ChucvuId' }
				,/*10*/{ field: 'Mobile', vn: 'Mobile' }
				,/*11*/{ field: 'HomeFone', vn: 'HomeFone' }
				,/*12*/{ field: 'Email', vn: 'Email' }
				,/*13*/{ field: 'DanToc', vn: 'DanToc' }
				,/*14*/{ field: 'TonGiao', vn: 'TonGiao' }
				,/*15*/{ field: 'NoiSinh', vn: 'NoiSinh' }
				,/*16*/{ field: 'HuyenNS', vn: 'HuyenNS' }
				,/*17*/{ field: 'TinhNS', vn: 'TinhNS' }
				,/*18*/{ field: 'QueQuan', vn: 'QueQuan' }
				,/*19*/{ field: 'HuyenQQ', vn: 'HuyenQQ' }
				,/*20*/{ field: 'TinhQQ', vn: 'TinhQQ' }
				,/*21*/{ field: 'ThuongTru', vn: 'ThuongTru' }
				,/*22*/{ field: 'HuyenThT', vn: 'HuyenThT' }
				,/*23*/{ field: 'TinhThT', vn: 'TinhThT' }
				,/*24*/{ field: 'TamTru', vn: 'TamTru' }
				,/*25*/{ field: 'HuyenTT', vn: 'HuyenTT' }
				,/*26*/{ field: 'TinhTT', vn: 'TinhTT' }
				,/*27*/{ field: 'TinhTrangSucKhoe', vn: 'TinhTrangSucKhoe' }
				,/*28*/{ field: 'NhomMau', vn: 'NhomMau' }
				,/*29*/{ field: 'ChieuCao', vn: 'ChieuCao' }
				,/*30*/{ field: 'CanNang', vn: 'CanNang' }
				,/*31*/{ field: 'NamNu', vn: 'NamNu' }
				,/*32*/{ field: 'TinhTrangHonNhan', vn: 'TinhTrangHonNhan' }
				,/*33*/{ field: 'HinhAnh', vn: 'HinhAnh' }
				,/*34*/{ field: 'NghiViec', vn: 'NghiViec' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_Nhanvien', obj160);
      var obj161 = {
            _id: 'tbl_Mailisa_LopHoc_GiaovienDay',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*2*/{ field: 'LopHocId', vn: 'LopHocId' }
				,/*3*/{ field: 'Ngayday', vn: 'Ngayday' }
				,/*4*/{ field: 'Gioday', vn: 'Gioday' }
				,/*5*/{ field: 'Sotietday', vn: 'Sotietday' }
				,/*6*/{ field: 'DGTietDay', vn: 'DGTietDay' }
				,/*7*/{ field: 'ThanhTien', vn: 'ThanhTien' }
				,/*8*/{ field: 'Ghichu', vn: 'Ghichu' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LopHoc_GiaovienDay', obj161);
      var obj162 = {
            _id: 'tbl_LUONG_NhanVien_SoNgayNghi',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NvId', vn: 'NvId' }
				,/*2*/{ field: 'SoNgayNghi', vn: 'SoNgayNghi' }

            ],
        }
         this._dictSelf.set('tbl_LUONG_NhanVien_SoNgayNghi', obj162);
      var obj163 = {
            _id: 'tbl_LUONG_LuongThangNhanVien_ChiTiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NvId', vn: 'NvId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'LuongCB', vn: 'LuongCB' }
				,/*4*/{ field: 'LuongCV', vn: 'LuongCV' }
				,/*5*/{ field: 'PhuCap', vn: 'PhuCap' }
				,/*6*/{ field: 'SoCong', vn: 'SoCong' }
				,/*7*/{ field: 'HeSo', vn: 'HeSo' }
				,/*8*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_LUONG_LuongThangNhanVien_ChiTiet', obj163);
      var obj164 = {
            _id: 'tbl_Mailisa_TheKhachHang_GachThe',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuThuTienMatId', vn: 'PhieuThuTienMatId' }
				,/*2*/{ field: 'TheKHId', vn: 'TheKHId' }
				,/*3*/{ field: 'NgayGachPhieu', vn: 'NgayGachPhieu' }
				,/*4*/{ field: 'DichVuId', vn: 'DichVuId' }
				,/*5*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*6*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*7*/{ field: 'CKNhanVien', vn: 'CKNhanVien' }
				,/*8*/{ field: 'TienDV', vn: 'TienDV' }
				,/*9*/{ field: 'SoLanGach', vn: 'SoLanGach' }
				,/*10*/{ field: 'ThanhTien', vn: 'ThanhTien' }
				,/*11*/{ field: 'PhuThu', vn: 'PhuThu' }
				,/*12*/{ field: 'KHQuenThe', vn: 'KHQuenThe' }
				,/*13*/{ field: 'NvLam2', vn: 'NvLam2' }
				,/*14*/{ field: 'NvLam3', vn: 'NvLam3' }
				,/*15*/{ field: 'NvLam4', vn: 'NvLam4' }
				,/*16*/{ field: 'DaChamSoc', vn: 'DaChamSoc' }
				,/*17*/{ field: 'GhiChuChamSoc', vn: 'GhiChuChamSoc' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_TheKhachHang_GachThe', obj164);
      var obj165 = {
            _id: 'tbl_Kho_KiemKho',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*2*/{ field: 'SLNhap', vn: 'SLNhap' }
				,/*3*/{ field: 'SLXuat', vn: 'SLXuat' }
				,/*4*/{ field: 'SLTon', vn: 'SLTon' }
				,/*5*/{ field: 'SLCanhBao', vn: 'SLCanhBao' }
				,/*6*/{ field: 'SLThucTe', vn: 'SLThucTe' }
				,/*7*/{ field: 'TenVatTu', vn: 'TenVatTu' }

            ],
        }
         this._dictSelf.set('tbl_Kho_KiemKho', obj165);
      var obj166 = {
            _id: 'tbl_KHO_TonKhoBanDau_New',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'NhatKyId', vn: 'NhatKyId' }
				,/*3*/{ field: 'MatHangId', vn: 'MatHangId' }
				,/*4*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*5*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_KHO_TonKhoBanDau_New', obj166);
      var obj167 = {
            _id: 'tbl_KHO_HienTrang_TonKhoDauKy_New',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*4*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*5*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_KHO_HienTrang_TonKhoDauKy_New', obj167);
      var obj168 = {
            _id: 'BIN_KHO_GiaTriNhapKho',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'GiaTri', vn: 'GiaTri' }

            ],
        }
         this._dictSelf.set('BIN_KHO_GiaTriNhapKho', obj168);
      var obj169 = {
            _id: 'tbl_KHO_KiemKhoTheoKy_New',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NgayKiem', vn: 'NgayKiem' }
				,/*2*/{ field: 'KhoId', vn: 'KhoId' }
				,/*3*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*4*/{ field: 'SLTonDauKy', vn: 'SLTonDauKy' }
				,/*5*/{ field: 'SLNhap', vn: 'SLNhap' }
				,/*6*/{ field: 'SLXuat', vn: 'SLXuat' }
				,/*7*/{ field: 'SLTonCuoiKy', vn: 'SLTonCuoiKy' }
				,/*8*/{ field: 'SLCanhBao', vn: 'SLCanhBao' }
				,/*9*/{ field: 'SLThucTe', vn: 'SLThucTe' }

            ],
        }
         this._dictSelf.set('tbl_KHO_KiemKhoTheoKy_New', obj169);
      var obj170 = {
            _id: 'BIN_KHO_GiaTriXuatKho',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'GiaTri', vn: 'GiaTri' }

            ],
        }
         this._dictSelf.set('BIN_KHO_GiaTriXuatKho', obj170);
      var obj171 = {
            _id: 'BIN_KHO_GiaTriBanSP_DichVu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'GiaTri', vn: 'GiaTri' }

            ],
        }
         this._dictSelf.set('BIN_KHO_GiaTriBanSP_DichVu', obj171);
      var obj172 = {
            _id: 'BIN_KHO_GiaTriBanSP_PhieuBanSP',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'GiaTri', vn: 'GiaTri' }

            ],
        }
         this._dictSelf.set('BIN_KHO_GiaTriBanSP_PhieuBanSP', obj172);
      var obj173 = {
            _id: 'BIN_KHO_GiaTriBanSP_GachThe',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'GiaTri', vn: 'GiaTri' }

            ],
        }
         this._dictSelf.set('BIN_KHO_GiaTriBanSP_GachThe', obj173);
      var obj174 = {
            _id: 'tbl_Mailisa_KD_KhaoSatYKienKH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KHId', vn: 'KHId' }
				,/*2*/{ field: 'BaoChi', vn: 'BaoChi' }
				,/*3*/{ field: 'GioiThieu', vn: 'GioiThieu' }
				,/*4*/{ field: 'Website', vn: 'Website' }
				,/*5*/{ field: 'LuaChonKhac', vn: 'LuaChonKhac' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_KhaoSatYKienKH', obj174);
      var obj175 = {
            _id: 'tbl_GOBAL_NhanVien_ChamCong1',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*3*/{ field: 'Ngay', vn: 'Ngay' }
				,/*4*/{ field: 'Status', vn: 'Status' }
				,/*5*/{ field: 'BranchId', vn: 'BranchId' }

            ],
        }
         this._dictSelf.set('tbl_GOBAL_NhanVien_ChamCong1', obj175);
      var obj176 = {
            _id: 'tbl_Mailisa_ChamCongGV_SLHocVien_DaDaoTao',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'Thang', vn: 'Thang' }
				,/*3*/{ field: 'LopId', vn: 'LopId' }
				,/*4*/{ field: 'SoHV', vn: 'SoHV' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_ChamCongGV_SLHocVien_DaDaoTao', obj176);
      var obj177 = {
            _id: 'tbl_Mailisa_ChamCongGV_BangGia',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'LopId', vn: 'LopId' }
				,/*2*/{ field: 'GiaThucHanh', vn: 'GiaThucHanh' }
				,/*3*/{ field: 'GiaLyThuyet', vn: 'GiaLyThuyet' }
				,/*4*/{ field: 'GiaMotTietHoc', vn: 'GiaMotTietHoc' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_ChamCongGV_BangGia', obj177);
      var obj178 = {
            _id: 'tbl_Mailisa_ChamCongGV_SoTietDay',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'LopHocId', vn: 'LopHocId' }
				,/*4*/{ field: 'SoTietLT', vn: 'SoTietLT' }
				,/*5*/{ field: 'SoTietThucHanh', vn: 'SoTietThucHanh' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_ChamCongGV_SoTietDay', obj178);
      var obj179 = {
            _id: 'tbl_ListTable',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }
				,/*3*/{ field: 'Column1', vn: 'Column1' }
				,/*4*/{ field: 'Column2', vn: 'Column2' }
				,/*5*/{ field: 'Column3', vn: 'Column3' }
				,/*6*/{ field: 'Column4', vn: 'Column4' }
				,/*7*/{ field: 'Column5', vn: 'Column5' }
				,/*8*/{ field: 'Column6', vn: 'Column6' }
				,/*9*/{ field: 'Column7', vn: 'Column7' }
				,/*10*/{ field: 'Column8', vn: 'Column8' }
				,/*11*/{ field: 'Column9', vn: 'Column9' }
				,/*12*/{ field: 'Column10', vn: 'Column10' }
				,/*13*/{ field: 'Column11', vn: 'Column11' }

            ],
        }
         this._dictSelf.set('tbl_ListTable', obj179);
      var obj180 = {
            _id: 'tbl_Stock_gcMax',//table
            _fieldsList: [
                /*0*/{ field: 'm', vn: 'm' }

            ],
        }
         this._dictSelf.set('tbl_Stock_gcMax', obj180);
      var obj181 = {
            _id: 'tbl_KHO_BaoCaoKhoTheoKy_01',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoId', vn: 'KhoId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*4*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*5*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_KHO_BaoCaoKhoTheoKy_01', obj181);
      var obj182 = {
            _id: 'tbl_KHO_BaoCaoKhoTheoKy_02',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NgayKiem', vn: 'NgayKiem' }
				,/*2*/{ field: 'KhoId', vn: 'KhoId' }
				,/*3*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*4*/{ field: 'SLTonDauKy', vn: 'SLTonDauKy' }
				,/*5*/{ field: 'SLNhap', vn: 'SLNhap' }
				,/*6*/{ field: 'SLXuat', vn: 'SLXuat' }
				,/*7*/{ field: 'SLTonCuoiKy', vn: 'SLTonCuoiKy' }
				,/*8*/{ field: 'SLCanhBao', vn: 'SLCanhBao' }
				,/*9*/{ field: 'SLThucTe', vn: 'SLThucTe' }

            ],
        }
         this._dictSelf.set('tbl_KHO_BaoCaoKhoTheoKy_02', obj182);
      var obj183 = {
            _id: 'tbl_Mailisa_XuatPhaChe_Chitiet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PhieuXuatPhaCheId', vn: 'PhieuXuatPhaCheId' }
				,/*2*/{ field: 'VatTuId', vn: 'VatTuId' }
				,/*3*/{ field: 'DonGia', vn: 'DonGia' }
				,/*4*/{ field: 'DVT', vn: 'DVT' }
				,/*5*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*6*/{ field: 'ThanhTien', vn: 'ThanhTien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_XuatPhaChe_Chitiet', obj183);
      var obj184 = {
            _id: 'tbl_Stock_KC_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KC_XK', obj184);
      var obj185 = {
            _id: 'tbl_Stock_KBCT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBCT', obj185);
      var obj186 = {
            _id: 'tbl_Stock_KBCT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBCT_NK', obj186);
      var obj187 = {
            _id: 'tbl_Stock_KC_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KC_NK', obj187);
      var obj188 = {
            _id: 'tbl_Stock_KBQT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBQT', obj188);
      var obj189 = {
            _id: 'tbl_Stock_KBCT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBCT_XK', obj189);
      var obj190 = {
            _id: 'tbl_Stock_KBQT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBQT_NK', obj190);
      var obj191 = {
            _id: 'tbl_Stock_KBQT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBQT_XK', obj191);
      var obj192 = {
            _id: 'tbl_Stock_KBHVB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBHVB', obj192);
      var obj193 = {
            _id: 'tbl_Stock_KBHVB_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBHVB_NK', obj193);
      var obj194 = {
            _id: 'tbl_Stock_KBHVB_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBHVB_XK', obj194);
      var obj195 = {
            _id: 'tbl_Stock_KPX',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPX', obj195);
      var obj196 = {
            _id: 'tbl_Stock_KPX_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPX_NK', obj196);
      var obj197 = {
            _id: 'tbl_Stock_KPX_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPX_XK', obj197);
      var obj198 = {
            _id: 'tbl_Stock_KPXCT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPXCT', obj198);
      var obj199 = {
            _id: 'tbl_Stock_KBDCT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDCT_NK', obj199);
      var obj200 = {
            _id: 'tbl_Stock_KBDCT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDCT', obj200);
      var obj201 = {
            _id: 'tbl_Stock_KPXCT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPXCT_NK', obj201);
      var obj202 = {
            _id: 'tbl_Stock_KPXCT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPXCT_XK', obj202);
      var obj203 = {
            _id: 'tbl_Stock_KBDCT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDCT_XK', obj203);
      var obj204 = {
            _id: 'tbl_Stock_KBDHVB_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDHVB_NK', obj204);
      var obj205 = {
            _id: 'tbl_Stock_KBDHVB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDHVB', obj205);
      var obj206 = {
            _id: 'tbl_Stock_KBDHVB_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDHVB_XK', obj206);
      var obj207 = {
            _id: 'tbl_Stock_KFCHVB_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCHVB_NK', obj207);
      var obj208 = {
            _id: 'tbl_Stock_KFCHVB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCHVB', obj208);
      var obj209 = {
            _id: 'tbl_Stock_KFCHVB_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCHVB_XK', obj209);
      var obj210 = {
            _id: 'tbl_Stock_KFCCT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCCT_XK', obj210);
      var obj211 = {
            _id: 'tbl_Stock_KFCCT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCCT_NK', obj211);
      var obj212 = {
            _id: 'tbl_Stock_KFCCT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCCT', obj212);
      var obj213 = {
            _id: 'tbl_Stock_KBHN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBHN_NK', obj213);
      var obj214 = {
            _id: 'tbl_Stock_KBHN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBHN', obj214);
      var obj215 = {
            _id: 'tbl_Stock_KFCHN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCHN', obj215);
      var obj216 = {
            _id: 'tbl_Stock_KBHN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBHN_XK', obj216);
      var obj217 = {
            _id: 'tbl_Stock_KBDHN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDHN_NK', obj217);
      var obj218 = {
            _id: 'tbl_Stock_KBDHN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDHN', obj218);
      var obj219 = {
            _id: 'tbl_Stock_KFCHN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCHN_XK', obj219);
      var obj220 = {
            _id: 'tbl_Stock_KFCHN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCHN_NK', obj220);
      var obj221 = {
            _id: 'tbl_Stock_KCHN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCHN', obj221);
      var obj222 = {
            _id: 'tbl_Stock_KCHN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCHN_NK', obj222);
      var obj223 = {
            _id: 'tbl_Stock_KFXHN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXHN_XK', obj223);
      var obj224 = {
            _id: 'tbl_Stock_KFXHN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXHN_NK', obj224);
      var obj225 = {
            _id: 'tbl_Stock_KFXHN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXHN', obj225);
      var obj226 = {
            _id: 'tbl_Stock_KBDHN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDHN_XK', obj226);
      var obj227 = {
            _id: 'tbl_Stock_KCHN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCHN_XK', obj227);
      var obj228 = {
            _id: 'tbl_Stock_KPC',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC', obj228);
      var obj229 = {
            _id: 'tbl_Stock_KPC_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC_XK', obj229);
      var obj230 = {
            _id: 'tbl_Stock_KPC_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC_NK', obj230);
      var obj231 = {
            _id: 'tbl_Stock_KPC_HN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC_HN_NK', obj231);
      var obj232 = {
            _id: 'tbl_Stock_KPC_HN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC_HN', obj232);
      var obj233 = {
            _id: 'tbl_Stock_KPC_HN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC_HN_XK', obj233);
      var obj234 = {
            _id: 'tbl_Stack_DN_VatTuHangHoa',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KhoCode', vn: 'KhoCode' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }

            ],
        }
         this._dictSelf.set('tbl_Stack_DN_VatTuHangHoa', obj234);
      var obj235 = {
            _id: 'tbl_Mailisa_XuatPhaChe',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Ten', vn: 'Ten' }
				,/*2*/{ field: 'SoCT', vn: 'SoCT' }
				,/*3*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*4*/{ field: 'NhanvienId', vn: 'NhanvienId' }
				,/*5*/{ field: 'TPPhaChe', vn: 'TPPhaChe' }
				,/*6*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*7*/{ field: 'DVT', vn: 'DVT' }
				,/*8*/{ field: 'DonGia', vn: 'DonGia' }
				,/*9*/{ field: 'ThanhTien', vn: 'ThanhTien' }
				,/*10*/{ field: 'KhoChuId', vn: 'KhoChuId' }
				,/*11*/{ field: 'KhoPC', vn: 'KhoPC' }
				,/*12*/{ field: 'DienGiai', vn: 'DienGiai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_XuatPhaChe', obj235);
      var obj236 = {
            _id: 'tbl_Mailisa_TaiKhoan',//table
            _fieldsList: [
                /*0*/{ field: 'Username', vn: 'Username' }
				,/*1*/{ field: 'Password', vn: 'Password' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_TaiKhoan', obj236);
      var obj237 = {
            _id: 'tbl_Stock_KTUPF',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'UserId', vn: 'UserId' }
				,/*2*/{ field: 'FileName', vn: 'FileName' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KTUPF', obj237);
      var obj238 = {
            _id: 'tbl_Stock_KTUP',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Username', vn: 'Username' }
				,/*2*/{ field: 'Password', vn: 'Password' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KTUP', obj238);
      var obj239 = {
            _id: 'tbl_Stock_KVPPH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPH', obj239);
      var obj240 = {
            _id: 'tbl_Stock_KVPPH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPH_NK', obj240);
      var obj241 = {
            _id: 'tbl_Stock_KVPPH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPH_XK', obj241);
      var obj242 = {
            _id: 'tbl_Stock_KVPPC',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPC', obj242);
      var obj243 = {
            _id: 'tbl_Stock_KVPPC_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPC_NK', obj243);
      var obj244 = {
            _id: 'tbl_Stock_KVPPC_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPC_XK', obj244);
      var obj245 = {
            _id: 'tbl_Stock_KVPPN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPN', obj245);
      var obj246 = {
            _id: 'tbl_Stock_KVPPN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPN_NK', obj246);
      var obj247 = {
            _id: 'tbl_Stock_KVPPQ_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPQ_NK', obj247);
      var obj248 = {
            _id: 'tbl_Stock_KVPPN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPN_XK', obj248);
      var obj249 = {
            _id: 'tbl_Stock_KVPPQ',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPQ', obj249);
      var obj250 = {
            _id: 'tbl_Stock_KVPPQ_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KVPPQ_XK', obj250);
      var obj251 = {
            _id: 'tbl_Stock_KGVH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KGVH', obj251);
      var obj252 = {
            _id: 'tbl_Stock_KGVHN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KGVHN', obj252);
      var obj253 = {
            _id: 'tbl_Stock_KGVH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KGVH_XK', obj253);
      var obj254 = {
            _id: 'tbl_Stock_KGVH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KGVH_NK', obj254);
      var obj255 = {
            _id: 'tbl_Stock_KGVHN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KGVHN_NK', obj255);
      var obj256 = {
            _id: 'tbl_Stock_KGVHN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KGVHN_XK', obj256);
      var obj257 = {
            _id: 'tbl_Stock_KFQT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFQT', obj257);
      var obj258 = {
            _id: 'tbl_Stock_KBDQT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDQT_XK', obj258);
      var obj259 = {
            _id: 'tbl_Stock_KBDQT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDQT', obj259);
      var obj260 = {
            _id: 'tbl_Stock_KBDQT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDQT_NK', obj260);
      var obj261 = {
            _id: 'tbl_Stock_KFQT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFQT_NK', obj261);
      var obj262 = {
            _id: 'tbl_Stock_KFQT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFQT_XK', obj262);
      var obj263 = {
            _id: 'tbl_Stock_KPXQT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPXQT', obj263);
      var obj264 = {
            _id: 'tbl_Stock_KPXQT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPXQT_NK', obj264);
      var obj265 = {
            _id: 'tbl_Stock_KPXQT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPXQT_XK', obj265);
      var obj266 = {
            _id: 'tbl_Stock_KC',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'DonviId', vn: 'DonviId' }
				,/*11*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*12*/{ field: 'TypeId', vn: 'TypeId' }
				,/*13*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'today', vn: 'today' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KC', obj266);
      var obj267 = {
            _id: 'tbl_Mailisa_ChiPhi_DoanhNghiep_ChiNhanh',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*2*/{ field: 'Nam', vn: 'Nam' }
				,/*3*/{ field: 'Thang', vn: 'Thang' }
				,/*4*/{ field: 'ChiPhiChungTheoThang', vn: 'ChiPhiChungTheoThang' }
				,/*5*/{ field: 'ChiPhiBaoChi', vn: 'ChiPhiBaoChi' }
				,/*6*/{ field: 'ChiPhiTruyenHinh', vn: 'ChiPhiTruyenHinh' }
				,/*7*/{ field: 'ChiPhiQuangCaoKhac', vn: 'ChiPhiQuangCaoKhac' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_ChiPhi_DoanhNghiep_ChiNhanh', obj267);
      var obj268 = {
            _id: 'tbl_Mailisa_ChiPhi_DoanhNghiep_BoPhan',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*2*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*3*/{ field: 'Nam', vn: 'Nam' }
				,/*4*/{ field: 'Thang', vn: 'Thang' }
				,/*5*/{ field: 'PhanTramChiPhi', vn: 'PhanTramChiPhi' }
				,/*6*/{ field: 'PhanTramCPBaoChi', vn: 'PhanTramCPBaoChi' }
				,/*7*/{ field: 'PhanTramCPTruyenHinh', vn: 'PhanTramCPTruyenHinh' }
				,/*8*/{ field: 'PhanTramCPKhac', vn: 'PhanTramCPKhac' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_ChiPhi_DoanhNghiep_BoPhan', obj268);
      var obj269 = {
            _id: 'sysuserGcDescription',//table
            _fieldsList: [
                /*0*/{ field: 'tablename', vn: 'tablename' }
				,/*1*/{ field: 'objname', vn: 'objname' }
				,/*2*/{ field: 'descript', vn: 'descript' }

            ],
        }
         this._dictSelf.set('sysuserGcDescription', obj269);
      var obj270 = {
            _id: 'gc_SysuserGcDescription',//table
            _fieldsList: [
                /*0*/{ field: 'name', vn: 'name' }
				,/*1*/{ field: 'length', vn: 'length' }
				,/*2*/{ field: 'xprec', vn: 'xprec' }
				,/*3*/{ field: 'xscale', vn: 'xscale' }
				,/*4*/{ field: 'colid', vn: 'colid' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isnullable', vn: 'isnullable' }
				,/*7*/{ field: 'colorder', vn: 'colorder' }
				,/*8*/{ field: 'typename', vn: 'typename' }
				,/*9*/{ field: 'xtype', vn: 'xtype' }
				,/*10*/{ field: 'tablename', vn: 'tablename' }
				,/*11*/{ field: 'tableid', vn: 'tableid' }
				,/*12*/{ field: 'fkeyid', vn: 'fkeyid' }
				,/*13*/{ field: 'ftable', vn: 'ftable' }
				,/*14*/{ field: 'fcolname', vn: 'fcolname' }
				,/*15*/{ field: 'PrimaryKey', vn: 'PrimaryKey' }
				,/*16*/{ field: 'descript', vn: 'descript' }

            ],
        }
         this._dictSelf.set('gc_SysuserGcDescription', obj270);
      var obj271 = {
            _id: 'tbl_Mailisa_HocVien_ChungChi',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'HocVienId', vn: 'HocVienId' }
				,/*2*/{ field: 'DichVuId', vn: 'DichVuId' }
				,/*3*/{ field: 'NhanBang', vn: 'NhanBang' }
				,/*4*/{ field: 'NgayNhan', vn: 'NgayNhan' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_HocVien_ChungChi', obj271);
      var obj272 = {
            _id: 'HUY_log_TinNhanSMS',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ThoiGianGui', vn: 'ThoiGianGui' }
				,/*2*/{ field: 'GuiDen', vn: 'GuiDen' }
				,/*3*/{ field: 'NoiDung', vn: 'NoiDung' }
				,/*4*/{ field: 'DaGuiDenKH', vn: 'DaGuiDenKH' }

            ],
        }
         this._dictSelf.set('HUY_log_TinNhanSMS', obj272);
      var obj273 = {
            _id: 'tbl_Stock_GVCT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DG', vn: 'DG' }
				,/*9*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*10*/{ field: 'TypeId', vn: 'TypeId' }
				,/*11*/{ field: 'ExpandCode', vn: 'ExpandCode' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GVCT', obj273);
      var obj274 = {
            _id: 'tbl_Stock_GVCT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*6*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*7*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GVCT_NK', obj274);
      var obj275 = {
            _id: 'tbl_Stock_GVCT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*6*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*7*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GVCT_XK', obj275);
      var obj276 = {
            _id: 'tbl_Stock_GVQT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DG', vn: 'DG' }
				,/*9*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*10*/{ field: 'TypeId', vn: 'TypeId' }
				,/*11*/{ field: 'ExpandCode', vn: 'ExpandCode' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GVQT', obj276);
      var obj277 = {
            _id: 'tbl_Stock_GVQT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*6*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*7*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GVQT_NK', obj277);
      var obj278 = {
            _id: 'tbl_Stock_GVQT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*6*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*7*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GVQT_XK', obj278);
      var obj279 = {
            _id: 'tbl_Mailisa_LAILO_GiaVonDichVu',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*2*/{ field: 'Yearth', vn: 'Yearth' }
				,/*3*/{ field: 'Month', vn: 'Month' }
				,/*4*/{ field: 'DichvuId', vn: 'DichvuId' }
				,/*5*/{ field: 'SoLanLamDichVu', vn: 'SoLanLamDichVu' }
				,/*6*/{ field: 'Giavon', vn: 'Giavon' }
				,/*7*/{ field: 'TyLeHaoHut', vn: 'TyLeHaoHut' }
				,/*8*/{ field: 'GiaVonHaoHut', vn: 'GiaVonHaoHut' }
				,/*9*/{ field: 'TongGiaVon', vn: 'TongGiaVon' }
				,/*10*/{ field: 'GiaVonTrungBinh', vn: 'GiaVonTrungBinh' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LAILO_GiaVonDichVu', obj279);
      var obj280 = {
            _id: 'tbl_Mailisa_LAILO_GiaVonDichVu_ALL',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Yearth', vn: 'Yearth' }
				,/*2*/{ field: 'Month', vn: 'Month' }
				,/*3*/{ field: 'DichvuId', vn: 'DichvuId' }
				,/*4*/{ field: 'Name', vn: 'Name' }
				,/*5*/{ field: 'SoLanLamDichVu', vn: 'SoLanLamDichVu' }
				,/*6*/{ field: 'Giavon', vn: 'Giavon' }
				,/*7*/{ field: 'TyLeHaoHut', vn: 'TyLeHaoHut' }
				,/*8*/{ field: 'GiaVonHaoHut', vn: 'GiaVonHaoHut' }
				,/*9*/{ field: 'TongGiaVon', vn: 'TongGiaVon' }
				,/*10*/{ field: 'GiaVonTrungBinh', vn: 'GiaVonTrungBinh' }
				,/*11*/{ field: 'KhuyenMai', vn: 'KhuyenMai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LAILO_GiaVonDichVu_ALL', obj280);
      var obj281 = {
            _id: 'tbl_Mailisa_LAILO_GiaVonDichVu_ALL_CN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*2*/{ field: 'CNName', vn: 'CNName' }
				,/*3*/{ field: 'Yearth', vn: 'Yearth' }
				,/*4*/{ field: 'Month', vn: 'Month' }
				,/*5*/{ field: 'DichvuId', vn: 'DichvuId' }
				,/*6*/{ field: 'Name', vn: 'Name' }
				,/*7*/{ field: 'SoLanLamDichVu', vn: 'SoLanLamDichVu' }
				,/*8*/{ field: 'Giavon', vn: 'Giavon' }
				,/*9*/{ field: 'TyLeHaoHut', vn: 'TyLeHaoHut' }
				,/*10*/{ field: 'GiaVonHaoHut', vn: 'GiaVonHaoHut' }
				,/*11*/{ field: 'TongGiaVon', vn: 'TongGiaVon' }
				,/*12*/{ field: 'GiaVonTrungBinh', vn: 'GiaVonTrungBinh' }
				,/*13*/{ field: 'KhuyenMai', vn: 'KhuyenMai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LAILO_GiaVonDichVu_ALL_CN', obj281);
      var obj282 = {
            _id: 'tbl_Mailisa_LAILO_GiaVonDichVu_ALL_BP',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*2*/{ field: 'CnName', vn: 'CnName' }
				,/*3*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*4*/{ field: 'BpName', vn: 'BpName' }
				,/*5*/{ field: 'Yearth', vn: 'Yearth' }
				,/*6*/{ field: 'Month', vn: 'Month' }
				,/*7*/{ field: 'DichvuId', vn: 'DichvuId' }
				,/*8*/{ field: 'Name', vn: 'Name' }
				,/*9*/{ field: 'SoLanLamDichVu', vn: 'SoLanLamDichVu' }
				,/*10*/{ field: 'Giavon', vn: 'Giavon' }
				,/*11*/{ field: 'TyLeHaoHut', vn: 'TyLeHaoHut' }
				,/*12*/{ field: 'GiaVonHaoHut', vn: 'GiaVonHaoHut' }
				,/*13*/{ field: 'TongGiaVon', vn: 'TongGiaVon' }
				,/*14*/{ field: 'GiaVonTrungBinh', vn: 'GiaVonTrungBinh' }
				,/*15*/{ field: 'KhuyenMai', vn: 'KhuyenMai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LAILO_GiaVonDichVu_ALL_BP', obj282);
      var obj283 = {
            _id: 'tbl_Mailisa_LAILO_GiaVonHangBan_ALL',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Yearth', vn: 'Yearth' }
				,/*2*/{ field: 'Month', vn: 'Month' }
				,/*3*/{ field: 'VattuId', vn: 'VattuId' }
				,/*4*/{ field: 'Name', vn: 'Name' }
				,/*5*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*6*/{ field: 'Giavon', vn: 'Giavon' }
				,/*7*/{ field: 'GiaHieuChinh', vn: 'GiaHieuChinh' }
				,/*8*/{ field: 'TyLeHaoHut', vn: 'TyLeHaoHut' }
				,/*9*/{ field: 'GiaVonHaoHut', vn: 'GiaVonHaoHut' }
				,/*10*/{ field: 'TongGiaVon', vn: 'TongGiaVon' }
				,/*11*/{ field: 'GiaVonTrungBinh', vn: 'GiaVonTrungBinh' }
				,/*12*/{ field: 'KhuyenMai', vn: 'KhuyenMai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LAILO_GiaVonHangBan_ALL', obj283);
      var obj284 = {
            _id: 'tbl_Mailisa_ChiPhi_Detail',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ChiPhiId', vn: 'ChiPhiId' }
				,/*2*/{ field: 'Thang', vn: 'Thang' }
				,/*3*/{ field: 'Nam', vn: 'Nam' }
				,/*4*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*5*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*6*/{ field: 'Tien', vn: 'Tien' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_ChiPhi_Detail', obj284);
      var obj285 = {
            _id: 'tbl_Mailisa_DM_ChiPhi',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'GhiChu', vn: 'GhiChu' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_ChiPhi', obj285);
      var obj286 = {
            _id: 'tbl_Mailisa_LAILO_GiaVonHangBan_ALL_CN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*2*/{ field: 'CNName', vn: 'CNName' }
				,/*3*/{ field: 'Yearth', vn: 'Yearth' }
				,/*4*/{ field: 'Month', vn: 'Month' }
				,/*5*/{ field: 'VattuId', vn: 'VattuId' }
				,/*6*/{ field: 'Name', vn: 'Name' }
				,/*7*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*8*/{ field: 'Giavon', vn: 'Giavon' }
				,/*9*/{ field: 'GiaHieuChinh', vn: 'GiaHieuChinh' }
				,/*10*/{ field: 'TyLeHaoHut', vn: 'TyLeHaoHut' }
				,/*11*/{ field: 'GiaVonHaoHut', vn: 'GiaVonHaoHut' }
				,/*12*/{ field: 'TongGiaVon', vn: 'TongGiaVon' }
				,/*13*/{ field: 'GiaVonTrungBinh', vn: 'GiaVonTrungBinh' }
				,/*14*/{ field: 'KhuyenMai', vn: 'KhuyenMai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LAILO_GiaVonHangBan_ALL_CN', obj286);
      var obj287 = {
            _id: 'tbl_Mailisa_LAILO_GiaVonHangBan_ALL_BP',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ChiNhanhId', vn: 'ChiNhanhId' }
				,/*2*/{ field: 'CNName', vn: 'CNName' }
				,/*3*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*4*/{ field: 'BoPhanName', vn: 'BoPhanName' }
				,/*5*/{ field: 'Yearth', vn: 'Yearth' }
				,/*6*/{ field: 'Month', vn: 'Month' }
				,/*7*/{ field: 'VattuId', vn: 'VattuId' }
				,/*8*/{ field: 'Name', vn: 'Name' }
				,/*9*/{ field: 'SoLuong', vn: 'SoLuong' }
				,/*10*/{ field: 'Giavon', vn: 'Giavon' }
				,/*11*/{ field: 'GiaHieuChinh', vn: 'GiaHieuChinh' }
				,/*12*/{ field: 'TyLeHaoHut', vn: 'TyLeHaoHut' }
				,/*13*/{ field: 'GiaVonHaoHut', vn: 'GiaVonHaoHut' }
				,/*14*/{ field: 'TongGiaVon', vn: 'TongGiaVon' }
				,/*15*/{ field: 'GiaVonTrungBinh', vn: 'GiaVonTrungBinh' }
				,/*16*/{ field: 'KhuyenMai', vn: 'KhuyenMai' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_LAILO_GiaVonHangBan_ALL_BP', obj287);
      var obj288 = {
            _id: 'tbl_Stock_KB127HVB_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KB127HVB_NK', obj288);
      var obj289 = {
            _id: 'tbl_Stock_KB127HVB_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KB127HVB_XK', obj289);
      var obj290 = {
            _id: 'tbl_Stock_TV127HVB_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TV127HVB_NK', obj290);
      var obj291 = {
            _id: 'tbl_Stock_TV127HVB_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TV127HVB_XK', obj291);
      var obj292 = {
            _id: 'tbl_Stock_GV127HVB_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GV127HVB_NK', obj292);
      var obj293 = {
            _id: 'tbl_Stock_GV127HVB_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GV127HVB_XK', obj293);
      var obj294 = {
            _id: 'tbl_Stock_KB127HVB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KB127HVB', obj294);
      var obj295 = {
            _id: 'tbl_Stock_TV127HVB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TV127HVB', obj295);
      var obj296 = {
            _id: 'tbl_Stock_GV127HVB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_GV127HVB', obj296);
      var obj297 = {
            _id: 'tbl_BaoHiem',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'BranchId', vn: 'BranchId' }
				,/*3*/{ field: 'PhanTram', vn: 'PhanTram' }
				,/*4*/{ field: 'Tien', vn: 'Tien' }

            ],
        }
         this._dictSelf.set('tbl_BaoHiem', obj297);
      var obj298 = {
            _id: 'tbl_NS_CC_GV_SoTietDayTheoNgay',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'LopHocId', vn: 'LopHocId' }
				,/*4*/{ field: 'SoTietLT', vn: 'SoTietLT' }
				,/*5*/{ field: 'SoTietThucHanh', vn: 'SoTietThucHanh' }
				,/*6*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_NS_CC_GV_SoTietDayTheoNgay', obj298);
      var obj299 = {
            _id: 'tbl_INOX_STORE_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_INOX_STORE_NK', obj299);
      var obj300 = {
            _id: 'tbl_Stock_TVUHVB_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUHVB_NK', obj300);
      var obj301 = {
            _id: 'tbl_Stock_TVUHVB_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUHVB_XK', obj301);
      var obj302 = {
            _id: 'tbl_Stock_TVUHVB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUHVB', obj302);
      var obj303 = {
            _id: 'tbl_Counter',//table
            _fieldsList: [
                /*0*/{ field: 'Counter', vn: 'Counter' }

            ],
        }
         this._dictSelf.set('tbl_Counter', obj303);
      var obj304 = {
            _id: 'tbl_CounterQT',//table
            _fieldsList: [
                /*0*/{ field: 'Counter', vn: 'Counter' }

            ],
        }
         this._dictSelf.set('tbl_CounterQT', obj304);
      var obj305 = {
            _id: 'tbl_Counter_AoCuoi',//table
            _fieldsList: [
                /*0*/{ field: 'Counter', vn: 'Counter' }

            ],
        }
         this._dictSelf.set('tbl_Counter_AoCuoi', obj305);
      var obj306 = {
            _id: 'SMS_Store',//table
            _fieldsList: [
                /*0*/{ field: 'Ii', vn: 'Ii' }
				,/*1*/{ field: 'mobile', vn: 'mobile' }

            ],
        }
         this._dictSelf.set('SMS_Store', obj306);
      var obj307 = {
            _id: 'tbl_Mailisa_DM_VattuHangHoa',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'LoaiVatTuId', vn: 'LoaiVatTuId' }
				,/*4*/{ field: 'DonViTinh', vn: 'DonViTinh' }
				,/*5*/{ field: 'NgayMua', vn: 'NgayMua' }
				,/*6*/{ field: 'GiaMua', vn: 'GiaMua' }
				,/*7*/{ field: 'GiaCu', vn: 'GiaCu' }
				,/*8*/{ field: 'NgayCapNhatGiaCu', vn: 'NgayCapNhatGiaCu' }
				,/*9*/{ field: 'GiaMoi', vn: 'GiaMoi' }
				,/*10*/{ field: 'NgayCapNhatGiaMoi', vn: 'NgayCapNhatGiaMoi' }
				,/*11*/{ field: 'MinValue', vn: 'MinValue' }
				,/*12*/{ field: 'HangBanRa', vn: 'HangBanRa' }
				,/*13*/{ field: 'ChietKhau', vn: 'ChietKhau' }
				,/*14*/{ field: 'IsProgramDel', vn: 'IsProgramDel' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_DM_VattuHangHoa', obj307);
      var obj308 = {
            _id: 'tbl_Stock_TVUHN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUHN_XK', obj308);
      var obj309 = {
            _id: 'tbl_Stock_TVUCT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUCT_XK', obj309);
      var obj310 = {
            _id: 'tbl_Stock_TVUHN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUHN_NK', obj310);
      var obj311 = {
            _id: 'tbl_Stock_TVUQT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUQT_NK', obj311);
      var obj312 = {
            _id: 'tbl_Stock_TVUQT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUQT_XK', obj312);
      var obj313 = {
            _id: 'tbl_Stock_TVUCT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUCT_NK', obj313);
      var obj314 = {
            _id: 'tbl_Stock_TVUCT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DG', vn: 'DG' }
				,/*9*/{ field: 'DGDK', vn: 'DGDK' }
				,/*10*/{ field: 'DGHT', vn: 'DGHT' }
				,/*11*/{ field: 'DonviId', vn: 'DonviId' }
				,/*12*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*13*/{ field: 'TypeId', vn: 'TypeId' }
				,/*14*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*15*/{ field: 'KHTS', vn: 'KHTS' }
				,/*16*/{ field: 'SoTh', vn: 'SoTh' }
				,/*17*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*18*/{ field: 'today', vn: 'today' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUCT', obj314);
      var obj315 = {
            _id: 'tbl_Stock_TVUQT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DG', vn: 'DG' }
				,/*9*/{ field: 'DGDK', vn: 'DGDK' }
				,/*10*/{ field: 'DGHT', vn: 'DGHT' }
				,/*11*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*12*/{ field: 'TypeId', vn: 'TypeId' }
				,/*13*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*14*/{ field: 'DonviId', vn: 'DonviId' }
				,/*15*/{ field: 'KHTS', vn: 'KHTS' }
				,/*16*/{ field: 'SoTh', vn: 'SoTh' }
				,/*17*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*18*/{ field: 'today', vn: 'today' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUQT', obj315);
      var obj316 = {
            _id: 'tbl_Stock_TVUHN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DG', vn: 'DG' }
				,/*9*/{ field: 'DGDK', vn: 'DGDK' }
				,/*10*/{ field: 'DGHT', vn: 'DGHT' }
				,/*11*/{ field: 'DonviId', vn: 'DonviId' }
				,/*12*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*13*/{ field: 'TypeId', vn: 'TypeId' }
				,/*14*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*15*/{ field: 'KHTS', vn: 'KHTS' }
				,/*16*/{ field: 'SoTh', vn: 'SoTh' }
				,/*17*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*18*/{ field: 'today', vn: 'today' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUHN', obj316);
      var obj317 = {
            _id: 'tbl_Stock_KBVINH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBVINH', obj317);
      var obj318 = {
            _id: 'tbl_Stock_KBVINH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBVINH_NK', obj318);
      var obj319 = {
            _id: 'tbl_Stock_KBVINH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBVINH_XK', obj319);
      var obj320 = {
            _id: 'tbl_Stock_KFCVINH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCVINH', obj320);
      var obj321 = {
            _id: 'tbl_Stock_KFCVINH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCVINH_NK', obj321);
      var obj322 = {
            _id: 'tbl_Stock_KFCVINH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCVINH_XK', obj322);
      var obj323 = {
            _id: 'tbl_Stock_KBDVINH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDVINH', obj323);
      var obj324 = {
            _id: 'tbl_Stock_KBDVINH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDVINH_NK', obj324);
      var obj325 = {
            _id: 'tbl_Stock_KBDVINH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDVINH_XK', obj325);
      var obj326 = {
            _id: 'tbl_Stock_KFXVINH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXVINH', obj326);
      var obj327 = {
            _id: 'tbl_Stock_KFXVINH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXVINH_NK', obj327);
      var obj328 = {
            _id: 'tbl_Stock_KFXVINH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXVINH_XK', obj328);
      var obj329 = {
            _id: 'tbl_Stock_KCVINH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCVINH', obj329);
      var obj330 = {
            _id: 'tbl_Stock_KCVINH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCVINH_NK', obj330);
      var obj331 = {
            _id: 'tbl_Stock_KCVINH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCVINH_XK', obj331);
      var obj332 = {
            _id: 'tbl_Stock_KPC_VINH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC_VINH', obj332);
      var obj333 = {
            _id: 'tbl_Stock_KPC_VINH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC_VINH_NK', obj333);
      var obj334 = {
            _id: 'tbl_Stock_KPC_VINH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KPC_VINH_XK', obj334);
      var obj335 = {
            _id: 'tbl_Stock_TVUVINH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUVINH', obj335);
      var obj336 = {
            _id: 'tbl_Stock_TVUVINH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUVINH_NK', obj336);
      var obj337 = {
            _id: 'tbl_Stock_TVUVINH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_TVUVINH_XK', obj337);
      var obj338 = {
            _id: 'tbl_Mailisa_KD_KhachHang_HinhAnh',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KHId', vn: 'KHId' }
				,/*2*/{ field: 'TieuDe', vn: 'TieuDe' }
				,/*3*/{ field: 'MoTa', vn: 'MoTa' }
				,/*4*/{ field: 'NgayLap', vn: 'NgayLap' }
				,/*5*/{ field: 'TenFile', vn: 'TenFile' }
				,/*6*/{ field: 'DungLuong', vn: 'DungLuong' }
				,/*7*/{ field: 'HinhAnh1', vn: 'HinhAnh1' }
				,/*8*/{ field: 'HinhAnh2', vn: 'HinhAnh2' }
				,/*9*/{ field: 'HinhAnh3', vn: 'HinhAnh3' }
				,/*10*/{ field: 'HinhAnh4', vn: 'HinhAnh4' }
				,/*11*/{ field: 'HinhAnh5', vn: 'HinhAnh5' }
				,/*12*/{ field: 'GhiChu', vn: 'GhiChu' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_KD_KhachHang_HinhAnh', obj338);
      var obj339 = {
            _id: 'tbl_Stock_KFXBMT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXBMT_NK', obj339);
      var obj340 = {
            _id: 'tbl_Stock_KFXBMT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXBMT_XK', obj340);
      var obj341 = {
            _id: 'tbl_Stock_KCBMT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCBMT', obj341);
      var obj342 = {
            _id: 'tbl_Stock_KCBMT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCBMT_NK', obj342);
      var obj343 = {
            _id: 'tbl_Stock_KCBMT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KCBMT_XK', obj343);
      var obj344 = {
            _id: 'tbl_Stock_KBDBMT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDBMT', obj344);
      var obj345 = {
            _id: 'tbl_Stock_KBDBMT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDBMT_NK', obj345);
      var obj346 = {
            _id: 'tbl_Stock_KBDBMT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBDBMT_XK', obj346);
      var obj347 = {
            _id: 'tbl_Stock_KFCBMT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCBMT', obj347);
      var obj348 = {
            _id: 'tbl_Stock_KFCBMT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCBMT_NK', obj348);
      var obj349 = {
            _id: 'tbl_Stock_KFCBMT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFCBMT_XK', obj349);
      var obj350 = {
            _id: 'tbl_Stock_KBBMT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBBMT', obj350);
      var obj351 = {
            _id: 'tbl_Stock_KBBMT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBBMT_NK', obj351);
      var obj352 = {
            _id: 'tbl_Stock_KBBMT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBBMT_XK', obj352);
      var obj353 = {
            _id: 'tbl_Stock_KFXBMT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KFXBMT', obj353);
      var obj354 = {
            _id: 'Working',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }

            ],
        }
         this._dictSelf.set('Working', obj354);
      var obj355 = {
            _id: 'tbl_Mailisa_TheKhachHang',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KHId', vn: 'KHId' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }
				,/*3*/{ field: 'SoThe', vn: 'SoThe' }
				,/*4*/{ field: 'LoaiTheKH', vn: 'LoaiTheKH' }
				,/*5*/{ field: 'DichVuId', vn: 'DichVuId' }
				,/*6*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*7*/{ field: 'SoLan', vn: 'SoLan' }
				,/*8*/{ field: 'ConLai', vn: 'ConLai' }
				,/*9*/{ field: 'DG_1_LanGach', vn: 'DG_1_LanGach' }
				,/*10*/{ field: 'TongTien', vn: 'TongTien' }
				,/*11*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*12*/{ field: 'PhieuThuTienMatId', vn: 'PhieuThuTienMatId' }

            ],
        }
         this._dictSelf.set('tbl_Mailisa_TheKhachHang', obj355);
      var obj356 = {
            _id: 'tmp_BACKUP',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'KHId', vn: 'KHId' }
				,/*2*/{ field: 'Ten', vn: 'Ten' }
				,/*3*/{ field: 'SoThe', vn: 'SoThe' }
				,/*4*/{ field: 'LoaiTheKH', vn: 'LoaiTheKH' }
				,/*5*/{ field: 'DichVuId', vn: 'DichVuId' }
				,/*6*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*7*/{ field: 'SoLan', vn: 'SoLan' }
				,/*8*/{ field: 'ConLai', vn: 'ConLai' }
				,/*9*/{ field: 'DG_1_LanGach', vn: 'DG_1_LanGach' }
				,/*10*/{ field: 'TongTien', vn: 'TongTien' }
				,/*11*/{ field: 'NhanVienId', vn: 'NhanVienId' }
				,/*12*/{ field: 'PhieuThuTienMatId', vn: 'PhieuThuTienMatId' }

            ],
        }
         this._dictSelf.set('tmp_BACKUP', obj356);
      var obj357 = {
            _id: 'EmptyTable',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'Thang', vn: 'Thang' }
				,/*3*/{ field: 'Nam', vn: 'Nam' }
				,/*4*/{ field: 'BoPhanId', vn: 'BoPhanId' }
				,/*5*/{ field: 'BranchId', vn: 'BranchId' }
				,/*6*/{ field: 'TienThangNay', vn: 'TienThangNay' }
				,/*7*/{ field: 'TienThangTruoc', vn: 'TienThangTruoc' }

            ],
        }
         this._dictSelf.set('EmptyTable', obj357);
      var obj358 = {
            _id: 'tbl_Stock_KBOLBMT',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLBMT', obj358);
      var obj359 = {
            _id: 'tbl_Stock_KBOLBMT_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLBMT_NK', obj359);
      var obj360 = {
            _id: 'tbl_Stock_KBOLBMT_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLBMT_XK', obj360);
      var obj361 = {
            _id: 'tbl_Stock_KBOLVINH',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLVINH', obj361);
      var obj362 = {
            _id: 'tbl_Stock_KBOLVINH_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLVINH_NK', obj362);
      var obj363 = {
            _id: 'tbl_Stock_KBOLVINH_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLVINH_XK', obj363);
      var obj364 = {
            _id: 'tbl_Stock_KBOLHN',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLHN', obj364);
      var obj365 = {
            _id: 'tbl_Stock_KBOLHN_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLHN_NK', obj365);
      var obj366 = {
            _id: 'tbl_Stock_KBOLHN_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLHN_XK', obj366);
      var obj367 = {
            _id: 'tbl_Stock_KBOLHVB',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLHVB', obj367);
      var obj368 = {
            _id: 'tbl_Stock_KBOLHVB_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLHVB_NK', obj368);
      var obj369 = {
            _id: 'tbl_Stock_KBOLHVB_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLHVB_XK', obj369);
      var obj370 = {
            _id: 'tbl_Stock_KBOLSG',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'DayCheck', vn: 'DayCheck' }
				,/*2*/{ field: 'VattuId', vn: 'VattuId' }
				,/*3*/{ field: 'SLDK', vn: 'SLDK' }
				,/*4*/{ field: 'SLXK', vn: 'SLXK' }
				,/*5*/{ field: 'SLNK', vn: 'SLNK' }
				,/*6*/{ field: 'SLHT', vn: 'SLHT' }
				,/*7*/{ field: 'SLTT', vn: 'SLTT' }
				,/*8*/{ field: 'DGDK', vn: 'DGDK' }
				,/*9*/{ field: 'DGHT', vn: 'DGHT' }
				,/*10*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*11*/{ field: 'TypeId', vn: 'TypeId' }
				,/*12*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*13*/{ field: 'DonviId', vn: 'DonviId' }
				,/*14*/{ field: 'KHTS', vn: 'KHTS' }
				,/*15*/{ field: 'SoTh', vn: 'SoTh' }
				,/*16*/{ field: 'IsTSCD', vn: 'IsTSCD' }
				,/*17*/{ field: 'CurDate', vn: 'CurDate' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLSG', obj370);
      var obj371 = {
            _id: 'tbl_Stock_KBOLSG_NK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLSG_NK', obj371);
      var obj372 = {
            _id: 'tbl_Stock_KBOLSG_XK',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'VattuId', vn: 'VattuId' }
				,/*2*/{ field: 'Ngay', vn: 'Ngay' }
				,/*3*/{ field: 'SL', vn: 'SL' }
				,/*4*/{ field: 'DG', vn: 'DG' }
				,/*5*/{ field: 'DonviId', vn: 'DonviId' }
				,/*6*/{ field: 'ExtentId', vn: 'ExtentId' }
				,/*7*/{ field: 'ExpandCode', vn: 'ExpandCode' }
				,/*8*/{ field: 'Note', vn: 'Note' }

            ],
        }
         this._dictSelf.set('tbl_Stock_KBOLSG_XK', obj372);

        }
};
