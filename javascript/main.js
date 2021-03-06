


var cmd = (function() {

	var this_id;

	var cmd = {

		// PRIVATE FUNCTION
		createFullMenu : function (local_data,id, flag) {

			var iflast, 
				doInList, 
				line = "", 
				span = "";

			if(flag) line="_";
			var fullDirList = '<ul id="main_'+id+line+'">';

			for(var ii = 0; ii < local_data.length; ii++) {

				iflast = '';
				if(ii == local_data.length-1)
					iflast = ' last';

				// IF local_data CURRENT ELEMENT (json.js) HAVE CHILDS ELEMENTS ->> CREATE TREE
				if( local_data[ii].childs.length > 0 && !flag ) {
					fullDirList += '<li id="'+id+ii+'" class="has-sub'+iflast+'"><a href="'+local_data[ii].url+'">'+
					local_data[ii].dirName+
					'</a>';
					var callbackToGetHtmlString = this.createFullMenu(local_data[ii].childs,id+ii+'_');
					fullDirList += callbackToGetHtmlString;	

				} else {
					if(!flag) {
						fullDirList += '<li id="'+id+ii+'" class="inList'+iflast+'"><a href="'+local_data[ii].url+'">'+
						local_data[ii].dirName+
						'</a>';
					} else {
						// createSecondMenu  :

						/*if(local_data[ii].childs.length > 0) 
							span = '<span class="submit"   onmouseover="cmd.preFilSelect(\''+id+ii+'_\')"></span>';	
						fullDirList += '<li id="'+id+ii+'_" onclick="console.log(\''+id+ii+'_\')" class="inList'+iflast+
						'">'+span+
						local_data[ii].dirName;
						console.log('cmd.preFilSelect(\''+id+ii+'_\')');*/
					}
				}

				fullDirList += '</li>';
			}

			fullDirList += '</ul>';
			return fullDirList;
		},
		
		createSecondMenu : function(local_data, id, flag, num){
			// num is counter of parent 
			/*	console.log(local_data);
				console.log(id+' == '+flag.toString());
			*/

			// put elements in select box
			num++;
			var select = '<select id="'+id+'_'+num+'" onchange="cmd.menuSelected(this.id, '+num+');">';
			for(var ii = 0; ii < local_data.length; ii++) {
				if( local_data[ii].childs.length > 0 ) {
					select += '<option value="'+ii+'">'+local_data[ii].dirName+'</option>';

				} else {
					select += '<option value="'+ii+'">'+local_data[ii].dirName+'</option>';
				}
			}
			select += '</select>';
			//<div id="putHere_'+num+'"></div>
			return select;
		},

		menuSelected : function(id, num) {
			 var index = document.getElementById(id).value;
			 var newItem = document.createElement("div")
			 newItem.id='putHere_'+num;
		    var textnode = document.createTextNode("Water")
		    newItem.appendChild(textnode)


		     var list = document.getElementById("createDirWindow")

		     list.insertBefore(newItem, list.childNodes[0]);

			 cmd.filSelect(data[index].childs, 'inListPosition_'+num, 'putHere_'+num, num);
			  console.log(id+' -- '+data[index].childs.length);
		},

		show : function() {

			var htmlString = cmd.createFullMenu(data,'inList');
			//console.log(htmlString);
			cmd.el('directory').innerHTML += htmlString;
			
		},

		filSelect : function (local_data, idBase, idElement, num) {
			
			cmd.el(idElement).innerHTML = 
				cmd.createSecondMenu(local_data, idBase, true, num);
		},

	/*	preFilSelect : function (id) {
			var index = id.charAt(id.length - 2);

			var deepness = (id.match(/_/g) || []).length;
			var thatData = [];
			console.log(deepness)
			// разложить див на координаты в массиве ..for 

			cmd.filSelect(data[index].childs, id);
		},*/

		el :  function(id) {
			// shortcut of getElementById
			return document.getElementById(id);		
		},
		onclick : function() {
			console.log('button click not in use');
		},
		focus : function(id) {
			cmd.el(id).focus();
		},
		save : function(id) {
			cmd.el(id).blur();
			// replace html tagsvxcv
			var val = cmd.el(id).value.replace(/(<[^>]*>)/g,'').trim();
			var index;
			// not allow html qoute
			if(val.indexOf("<") || val.indexOf(">")) {

				if(val.length > 0) {
					// add new object of new Directory to array
					data.push({
						id      : (data.length),
						dirName : val,
						childs  : []
					});
					index = data.length-1;
					// show added Directory
					cmd.el('main_inList').lastChild.className = 'inList';
					cmd.el('main_inList').innerHTML += '<li id="inList'+index+'" class="inList last">'+
					'<a href="#'+data[index].url+'">'+
					data[index].dirName+
					'</a>'+
					'</li>';
					cmd.el(id).value = "";

				}

			} else {
				alert("Please don't use not allowd symboles!");
			}

			///console.log(JSON.stringify(data))
 				
		},
		set_id : function(id) {
			this_id = id;
		}
	};




	return {
		preFilSelect : cmd.preFilSelect,
		filSelect    : cmd.filSelect,
		menuSelected : cmd.menuSelected,
		show         : cmd.show,
		el      	 : cmd.el,
		onclick 	 : cmd.onclick,
		focus   	 : cmd.focus,
		save    	 : cmd.save,
		set_id  	 : cmd.set_id,
		id 			 : this.this_id
	};

		
}());

window.onload = function(){ 

	cmd.show();
	// cmd.el('some-id') = document.getElementById('some-id')
	cmd.el('createDir').onclick = cmd.onclick; 

	cmd.set_id('createNew');

	cmd.el('createNew').onmouseover     = function(){ cmd.focus('createNew') };
	cmd.el('withURL').onmouseover       = function(){ cmd.focus('withURL') };

	cmd.el('positionInArrObjects').onmouseover     =  function(){ cmd.filSelect(data, 'inListPosition', 'putHere', 0)};


	//cmd.el('createDir').onmouseleave = function(){ cmd.save('createDir') };
};



// value = data[key]
function forEach(data, callback){
  for(var key in data){
    if(data.hasOwnProperty(key)){
      callback(key, data[key]);
    }
  }
}


// this function not in use in this code
function allForEach(data,tab){

	forEach(data, function(k, v){

		//console.log(tab+k + ': '+v);

		if(Object.prototype.toString.call( v ) === '[object Array]' ) {
			

			for(var yy = 0; yy < v.length; yy++) {
				allForEach(v[yy], tab+'\t');
			}	
		}
	});

}




