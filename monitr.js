/*!
  * Monitr.js - JavaScript Clíent Library for the Monitr.io App
  * https://github.com/phillipdornauer/monitr-js
  * MIT License | (c) Phillip Dornauer 2011
  */
var Monitr = (function( undefined ){
	
	var context = this,
		win = window,
		doc = document,
		monitr;
	
	
	monitr = {
		API_URL: "http://api.monitr.io/1/",
		
		VERSION: "0.0.1",
		
		ERROR_CODES: {
			error: 1,
			warning: 2,
			parse: 4,
			notice: 8,
			deprecated: 8192
		}
	};
	
	monitr.extend = function(){
		
		var source, target, 
			args = arguments,
			len = args.length;
		
		if( len === 1 ){
			target = this;
			source = arguments[ 0 ];
		}else{
			target = arguments[ 0 ];
			source = arguments[ 1 ];
		}
		
		for( var name in source ){
			
			target[ name ] = source[ name ];
			
		}
		
		return target;
		
	};
	
	
	monitr.extend({
				
		options: {
			errorLevel: monitr.ERROR_CODES.warning,
			defaultErrorCode: monitr.ERROR_CODES.warning
		},
		
		setup: function( options ){
			
			this.options = monitr.extend( this.options, options );
			
		},
		log: function(){
			
			var args = arguments,
				argLen = args.length,
				data,
				i = 0;
			
			if( argLen === 1 ){
				data = args[0];
			}else{
				data = {
					message: args[ i++ ],
					code: args[ i++ ] || this.options.defaultErrorCode,
					file: args[ i++ ] || "",
					line: args[ i++ ] || ""
				};
			}
			data = monitr.extend(data, {
				lang: "js",
				apiKey: this.options.apiKey,
				domain: this.options.domain
			});
			
			var hash = "iframe" + Math.round(Math.random() * 10000000000000000),
				frame,
				form,
				field;
			
			try{
				frame = document.createElement('<iframe name="' + h + '"></iframe>');
			}catch(e){
				frame = document.createElement('iframe');
				frame.name = hash;
			}
			
			frame.id = hash;
			frame.style.visibility = "hidden";
			frame.style.height = "1px";
			frame.style.width = "1px";
			
			form = document.createElement("form");
			
			form.action = monitr.API_URL + "log";
			form.method = "post";
			form.target = hash;
			
			form.id = "form" + hash;
			
			for( var key in data ){
				
				try {
					field = document.createElement('<input name="' + key + '"></input>');
				} catch (ex) {
					field = document.createElement("input");
					field.name = key;
				}
				
				field.type = "hidden";
				field.value = data[key];
				form.appendChild(field);
				
			}
			
			document.body.appendChild( frame );
			document.body.appendChild( form );
			
			document.getElementById( "form" + hash ).submit();
		},
		errorLevel: function( opt_level ){
			
			if( opt_level === undefined ){
				return this.options.errorLevel;
			}
			
			this.options.errorLevel = opt_level;
			
		}
		
	});
	
	return monitr;
	
})( );
