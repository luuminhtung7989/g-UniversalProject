/************************************************************************
* JTABLE Multiple toolbar search extension                              *
*************************************************************************/
(function ($) {
	
    //Reference to base object members
	var base={
		_addRowToTableHead:$.hik.jtable.prototype._addRowToTableHead
	}
	
    //extension members
    $.extend(true, $.hik.jtable.prototype, {

        /************************************************************************
        * DEFAULT OPTIONS / EVENTS                                              *
        *************************************************************************/
		options: {
			toolbarsearch:false
		},
		
        /************************************************************************
        * OVERRIDED METHODS                                                     *
        *************************************************************************/

		/* Adds tr element to given thead element
        *************************************************************************/
        _addRowToTableHead: function ($thead) {
			base._addRowToTableHead.apply(this, arguments);    
			
			if (this.options.toolbarsearch) {
			    var $toolbarSearch = $('#ToolBarSearch').empty();
			    this._toolbarsearch_addColumnsToHeaderRow($toolbarSearch);
			}

		},

        /************************************************************************
        * PRIVATE METHODS                                                       *
        *************************************************************************/

		/* Adds column header cells to given tr element.
        *************************************************************************/
        _toolbarsearch_addColumnsToHeaderRow: function ($tr) {
			var self = this,
				leng = this._columnList.length,
				cols = $(".jtable-command-column-header").length;
			
			if (this.options.selecting && this.options.selectingCheckboxes) {
				var $th = $('<th></th>')
					.addClass('jtable-column-header')
	                .css('width', '1%');
                $tr.append($th);
				cols--;
            }
			if (cols==0) leng--;
	    	for (var i = 0; i < leng; i++) {
    	    	var fieldName = this._columnList[i];
        	    var $headerCell = this._toolbarsearch_createHeaderCellForField(fieldName, this.options.fields[fieldName]);
            	$headerCell.appendTo($tr);
            }
			
			$reset = $('<th></th>')
                .addClass('jtable-toolbarsearch-reset')
                .attr('colspan',cols);
			
			$resetbutton = $('<input type="button" value="Reset"/>')
				.addClass('jtable-toolbar-item')
				.appendTo($reset);
			$resetbutton.click(function(){
				$('.jtable-toolbarsearch').val('');
				self.load({});				
			});
			this._jqueryuiThemeAddClass($resetbutton, 'ui-widget ui-state-default ui-corner-all', 'ui-state-hover');
			
			$tr.append($reset);
        },

        /* Creates a header cell for given field.
        *  Returns th jQuery object.
        *************************************************************************/		
        _toolbarsearch_createHeaderCellForField: function (fieldName, field) {
			var self = this;
			if(typeof field.searchable === 'undefined'){
				field.searchable = true;
			};
            field.width = field.width || '10%'; //default column width: 10%.

			var $input = $('<input id="jtable-toolbarsearch-' + fieldName + '" type="text"/>')
				.addClass('jtable-toolbarsearch');
			
			$input.bind('change',function(){
				var $q=[];
				var $opt=[];
				var $postData={};
				var $i =0;
					$('.jtable-toolbarsearch').each(function(){
						var $id = $(this).attr('id');
						if($(this).val().length>=1){
							$opt.push($id.replace('jtable-toolbarsearch-',''));								 
							$q.push($(this).val());
							$i++;
						}
					});
				self.load({'q[]':$q,'opt[]':$opt});
			});
														
            var $headerContainerDiv = $('<div />')
                .addClass('jtable-column-header-container');
                
			if(field.searchable){	
				$headerContainerDiv.append($input);
			}
            var $th = $('<th></th>')
                .addClass('jtable-column-header')
                .css('width', field.width)
                .data('fieldName', fieldName)
                .append($headerContainerDiv);
			
			//Hide column if needed
            if (field.visibility == 'hidden') {
                $th.hide();
            }
			
            return $th;
        }
	});
	
})(jQuery);
