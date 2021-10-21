function postPageLoadP650()
{

    var tableView = $find(otP65.rg).get_masterTableView();
    tableView.hideColumn(0);
    var divRow91 = $get(otP66.RowP6691CID);
    divRow91.style.display = 'none';
    var tableView = $find(otP66.rg).get_masterTableView();

    tableView.hideColumn(12);
    tableView.hideColumn(11);
    tableView.hideColumn(10);
    tableView.hideColumn(9);
    tableView.hideColumn(0);
    
//    var divBtn  = $get(otP65.BtnHieuChinhP65CID);
//    divBtn.style.display ='none';
    
}


function preRgP670RowDblSelected()

{
    return 'false';
}
function preRgP660RowDblSelected()

{
    return 'false';
}
function preRgP65RowDblSelected()

{
    return 'false';
}
function postupdateGridP670()
{
    postupdateGridP660();
}

function postupdateGridP1230(curDataGridP123)
{
    var tmpValue;
	tmpValue = $get(otP17.tIdP17CID).value;
	
    var tableView1 = $find(otP17.rg).get_masterTableView();
    var source1 = tableView1.get_dataSource();
    
    var tableView2 = $find(otP123.rg).get_masterTableView();
    var source2 = tableView2.get_dataSource();
    
    var tongtien = 0.0;
    if(source2!=null)
    for(i=0;i<source2.length;i++)
    {
        tongtien+= source2[i].ThanhTien;
    }
    if(source1!=null)
    for(i=0;i<source1.length;i++)
    {
        if(tmpValue == source1[i].Id)
            {
            source1[i].TongTien =  tongtien;
            source1[i].NoLai =  tongtien - source1[i].ThucThu;
            }
    }
    
    //----------------------------------------------------------------------------------
    
    var divRowTT = $get(otP17.gcDivInfoPhieu30CID);
        divRowTT.innerHTML = gcRemoveZero(tongtien.format('N05'),'.');;
        
        
        
        var nolai = ($get(otP17.tNoLaiP17CID).value==null)?0.0:parseFloat(gcRev($get(otP17.tNoLaiP17CID).value, ','));
	    if(nolai<=0)
	    {
            $get(otP17.tTongTienP17CID).value = gcRemoveZero(tongtien.format('N05'),'.');
	        $get(otP17.tThucThuP17CID).value = gcRemoveZero(tongtien.format('N05'),'.');
	        $get(otP17.tNoLaiP17CID).value = gcRemoveZero(nolai.format('N05'),'.');
	        
	        var divRowTThu = $get(otP17.gcDivInfoPhieu40CID);
            divRowTThu.innerHTML = gcRemoveZero(tongtien.format('N05'),'.');;
            var divRowNoLai = $get(otP17.gcDivInfoPhieu50CID);
            divRowNoLai.innerHTML = gcRemoveZero(nolai.format('N05'),'.');;
	    }
	    else
	    {
	        var thucthu = ($get(otP17.tThucThuP17CID).value==null)?0.0:parseFloat(gcRev($get(otP17.tThucThuP17CID).value, ','));
	        nolai = tongtien - thucthu ;
	        $get(otP17.tTongTienP17CID).value = gcRemoveZero(tongtien.format('N05'),'.');
	        $get(otP17.tNoLaiP17CID).value = gcRemoveZero(nolai.format('N05'),'.');
	        
	        var divRowTThu = $get(otP17.gcDivInfoPhieu40CID);
            divRowTThu.innerHTML = gcRemoveZero(tongtien.format('N05'),'.');;
            var divRowNoLai = $get(otP17.gcDivInfoPhieu50CID);
            divRowNoLai.innerHTML = gcRemoveZero(nolai.format('N05'),'.');;
	    }
	//---------------------------------------------------------------------------------
   tableView1.set_dataSource(source1);
   
   tableView1.dataBind();
   
   var grid = $find(otP17.rg);
   grid.repaint();
}
function postupdateGridP6600()
{
}
function postupdateGridP66666()
{
    if(statusFormP66 == 'AddAndGoChild' || statusFormP67 == 'AddAndGoChild' || statusFormP66 == 'Update' || statusFormP67 == 'Update' )
    {
        var tableView1 = $find(otP66.rg).get_masterTableView();
        var source1 = tableView1.get_dataSource();
        
        var tableView2 = $find(otP67.rg).get_masterTableView();
        var source2 = tableView2.get_dataSource();
        
        var tongtien = 0.0;
        if(source1!=null)
        for(i=0;i<source1.length;i++)
        {
            tongtien+= source1[i].ThanhTien;
        }
        if(source2!=null)
        for(l=0;l<source2.length;l++)
        {
            tongtien+= source2[l].ThanhTien;
        }
        
        var divRowTT = $get(otP65.gcDivInfoPhieu30CID);
        divRowTT.innerHTML = gcRemoveZero(tongtien.format('N05'),'.');;
        
        var divRowTThu = $get(otP65.gcDivInfoPhieu40CID);
        divRowTThu.innerHTML = gcRemoveZero(tongtien.format('N05'),'.');;
        
        var nolai = ($get(otP65.tNoLaiP65CID).value==null)?0.0:parseFloat(gcRev($get(otP65.tNoLaiP65CID).value, ','));
	    if(nolai<=0)
	    {
            $get(otP65.tTongTienP65CID).value = gcRemoveZero(tongtien.format('N05'),'.');
	        $get(otP65.tThucThuP65CID).value = gcRemoveZero(tongtien.format('N05'),'.');
	        $get(otP65.tNoLaiP65CID).value = gcRemoveZero(nolai.format('N05'),'.');
	    }
	    else
	    {
	        var thucthu = ($get(otP65.tThucThuP65CID).value==null)?0.0:parseFloat(gcRev($get(otP65.tThucThuP65CID).value, ','));
	        nolai = tongtien - thucthu ;
	        $get(otP65.tTongTienP65CID).value = gcRemoveZero(tongtien.format('N05'),'.');
	        $get(otP65.tNoLaiP65CID).value = gcRemoveZero(nolai.format('N05'),'.');
	    }
	    
	    var btn = $get(otP65.BtnHieuChinhP65CID);  // run your own script to close the window 
        if(btn!=null)    btn.onclick();
	}
}