/**
 * client side common utility functions
 *
 * @author  Eric See Kian Seng
 * @version 1.1.0, 16/11/23
 */

var Core_Utils = {}

//write Countdown Modal
Core_Utils.writeCountDownModal = function(){
	console.log("Attaching CountDown Modal");
	var content = '<div class="modal fade" id="jitp-warn-display" data-backdrop="static" data-keyboard="false">'
		+'<div class="modal-dialog">'
		+'<div class="modal-content modal_timeout">'
		+'<div class="modal-header"><h4 class="modal-title" style="font-size:18pt;">Session Timeout</h4></div>'
		+'<div class="modal-body">'
		+'<p style="font-size:16pt;">Your session is about to expire!</p>'
		+'<p style="font-size:12pt;">Time remaining: <span class="jitp-countdown-holder" id="jitp-countdown-timeremaining"></span>&nbsp;s</p>'
		+'<div class="progress">'
		+'<div id="jitp-warn-bar" class="progress-bar progress-bar-striped active" role="progressbar" style="min-width: 15px; width: 100%;">'
		+'<span class="jitp-countdown-holder"></span>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="modal-footer">'
		+'<button id="jitp-warn-logout" type="button" class="btn btn-default" onClick="Core_Utils.logOut()">Logout</button>'
		+'<button id="jitp-warn-alive" type="button" class="btn btn-warning" onClick="Core_Utils.stayConnected()">Stay Connected</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>';
	$("html").append(content);
}

//write Wait Modal
Core_Utils.writeWaitModal = function(){
	console.log("Attaching Wait Modal");
	var content ='<div class="modal fade bs-example-modal-sm"  id="waitdialog" tabindex="-1"'
		+'role="dialog" aria-hidden="true" data-backdrop="static">'
		+'<div class="modal-dialog modal-md">'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title">'
		+'<span class="glyphicon glyphicon-time"></span>&nbsp;<span id="waitdialog_msg">Please Wait</span>'
		+'</h4>'
		+'</div>'
		+'<div class="modal-body">'
		+'<div class="progress">'
		+'<div class="progress-bar progress-bar-striped active" style="width: 100%"></div>'
		+'</div>'
		+'<div style="text-align:center;visibility:hidden" id="waitdialog_button_div">'
		+'<button class="btn btn-default" id="waitdialog_button_1">Stop</button>'
		+'</div>'

		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>';

	$("html").append(content);
}

//write Warning Modal
Core_Utils.writeWarningModal = function(){
	console.log("Attaching Warning Modal");
	var content ='<div class="modal fade" id="warningModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
  					'<div class="modal-dialog modal-warning" role="document">'+
    					'<div class="modal-content">'+
      						'<div class="modal-header">'+
        						'<h4 class="modal-title">Warning</h4>'+
        						'<button class="close" type="button" data-dismiss="modal" aria-label="Close">'+
          						'<span aria-hidden="true">×</span>'+
        						'</button>'+
      						'</div>'+
      						'<div class="modal-body text-center">'+
        						'<p id="warningmodal_msg">One fine body…</p>'+
      						'</div>'+
      						'<div class="modal-footer">'+
        						'<button class="btn btn-warning" type="button" onclick="Core_Utils.logOut()">Acknowledge</button>'+
     						'</div>'+
   						'</div>'+
  					'</div>'+
				'</div>';
	$("html").append(content);
}

//write Spinner Modal
Core_Utils.writeSpinnerModal = function(){
  console.log("Attaching Spinner Modal");
  var content = '<div class="modal fade" id="spinningModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
    '<div class="modal-dialog modal-primary" role="document">'+
      '<div class="modal-content" style="border: none;">'+
      //  '<div class="modal-header">'+
      //   '<h4 class="modal-title">Please wait a moment...</h4>'+
      //   '<button class="close" type="button" data-dismiss="modal" aria-label="Close">'+
      //      '<span aria-hidden="true">×</span>'+
      //    '</button>'+
       '</div>'+
        '<div class="modal-body" >'+
              '<div class="loader"></div>'+
            /*  '<div class="sk-three-bounce">'+
              '<div class="sk-child sk-bounce1"></div>'+
              '<div class="sk-child sk-bounce2"></div>'+
              '<div class="sk-child sk-bounce3"></div>'+*/
            '</div>'+
        '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
   '</div>'
  //content = '<div class="spinner-border text-primary" id="super_spinner"></div>';
	$("html").append(content);
}

//Set Busy
Core_Utils.setBusy = function(state){
	if (state){
		/*div = $("<div id='divbusy'>");
		$("body").prepend(div);
		var w = $("#divbusy").width(),
			h = $("#divbusy").height();


		svg = d3.select("#divbusy").insert("svg:svg", "form")
			.attr("width", w)
			.attr("height", h)
			.append("svg:g")
			.attr("transform", "translate(" + w / 2.5 + "," + h / 2.5 + ")scale(.45)")
			.append("svg:g")
			.data([{radius: Infinity}]);

		svg.append("svg:g")
		//.attr("class", "sun")
			.style("fill", "goldenrod")
			.style("stroke", "lightyellow")
			.attr("stroke-width", 2)
			.data([{teeth: 8, radius: r}])
			.append("svg:path")
			.attr("d", gear);

		svg.append("svg:g")
		//.attr("class", "planet")
			.attr("transform", "translate(" + r * 2.1 * x + "," + -r * 2.1 * y + ")")
			.data([{teeth: 8, radius: -r * 1.0}])
			.style("stroke", "silver")
			.style("fill", "dimgray")
			.attr("stroke-width", 2)
			.append("svg:path")
			.attr("d", gear);

		d3.selectAll("input[name=reference]")
			.data([r * 5, Infinity, -r])
			.on("change", function(d) { svg.data([{radius: d}]); });

		d3.selectAll("input[name=speed]")
			.on("change", function() { speed = +this.value; });*/
			$("#spinningModal").modal('show');
			//$("#super_spinner").show();
	}else {
			$("#spinningModal").modal('hide');
			//$("#super_spinner").hide();
		//$( "#divbusy" ).remove();
	}
}
/*
function gear(d) {
	var n = d.teeth,
		r2 = Math.abs(d.radius),
		teeth_depth =8
	//teeth height
	  r0 = r2 - teeth_depth,
		r1 = r2 + teeth_depth,

		r3 = d.radius/2, //middle circle
		da = Math.PI / n,
		a0 = -Math.PI / 3,
		i = -1,
		path = ["M", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)];

	while (++i < n) path.push(
		"A", r0, ",", r0, " 0 0,1 ", r0 * Math.cos(a0 += da), ",", r0 * Math.sin(a0),
		"L", r1 * Math.cos(a0), ",", r1 * Math.sin(a0),
		"A", r1, ",", r2, " 0 0,1 ", r1 * Math.cos(a0 += da), ",", r1 * Math.sin(a0),
		"L", r0 * Math.cos(a0), ",", r0 * Math.sin(a0));
	path.push("M0,", -r3, "A", r3, ",", r3, " 0 0,0 0,", r3, "A", r3, ",", r3, " 0 0,0 0,", -r3, "Z");
	return path.join("");
}

d3.timer(function() {
	if (svg) {
		var angle = (Date.now() - start) * speed,
			transform = function(d) { return "rotate(" + angle / d.radius + ")"; };
		svg.selectAll("path").attr("transform", transform);
		svg.attr("transform", transform); // frame of reference
	}

});*/


//set content of wait dialog
Core_Utils.updateWaitDialogMessage = function(message){
	 $("#waitdialog_msg").html(message);
}

//Inactivity
Core_Utils.inActivityClock = function (timeout, countdown){
    if (timeout<0) {
        console.log("Inactivity Clock disabled");
        return;
    } else {
        Core_Constants.INACTIVITY_TIMEOUT = timeout;
        //console.log(`Inactivity Timeout = ${Core_Constants.INACTIVITY_TIMEOUT}s`);
    }
    if (countdown){
        Core_Constants.COUNTDOWN_TIMEOUT = countdown;
      //  console.log(`Inactivity Countdown = ${Core_Constants.COUNTDOWN_TIMEOUT}s`);
    }
	  clearTimeout(Core_Utils.INACTIVITY_TIMER);
	  Core_Utils.INACTIVITY_TIMER = setTimeout(Core_Utils.invokeCountDownClock, timeout*1000);
}

//Restart
Core_Utils.restartInactivityClock = function(){
  	//console.log("Activity Detected")
  	//Kiosk_Utils.StayConnected();
  	Core_Utils.inActivityClock(Core_Constants.INACTIVITY_TIMEOUT);
}

//Invoke Countdown timer
Core_Utils.invokeCountDownClock = function(){
	Core_Utils.countDownClock(Core_Constants.COUNTDOWN_TIMEOUT);
}

//Count Down
Core_Utils.countDownClock = function(remain){
	$('#jitp-warn-display').modal('show');
	$("#jitp-countdown-timeremaining").html(remain);
	Core_Utils.COUNTDOWN_TIMER = setTimeout(Core_Utils.updateCountDownClock, 1000);
}

//Update Count
Core_Utils.updateCountDownClock = function(){
	remain = $("#jitp-countdown-timeremaining").html();
	var next = parseInt(remain) - 1;
	$("#jitp-countdown-timeremaining").html(next);
	if (next == 0)
		Core_Utils.logOut();
	else
		Core_Utils.COUNTDOWN_TIMER = setTimeout(Core_Utils.updateCountDownClock, 1000);
}

//Detect Activity
//Zero the idle timer on mouse movement.
Core_Utils.detectActivity = function(obj){
	//Zero the idle timer on mouse movement.
	obj.mousemove(function (e) {
		console.log("activiy::mouse move");
		Core_Utils.restartInactivityClock();
	});

	obj.keypress(function (e) {
		console.log("activiy::keypress");
		Core_Utils.restartInactivityClock();
	});

	obj.click(function (e) {
		console.log("activiy::click");
		Core_Utils.restartInactivityClock();
	});

	obj.scroll(function (e) {
		console.log("activiy::scroll");
		Core_Utils.restartInactivityClock();
	});
}

//Stay Connected
Core_Utils.stayConnected = function(){
	console.log("Stay Connected");
	//alert('stay connected')
	clearTimeout(Core_Utils.COUNTDOWN_TIMER);
	$('#jitp-warn-display').modal('hide');
	Core_Utils.inActivityClock(Core_Constants.INACTIVITY_TIMEOUT);
}

//Utils
//Check whether string is JSON
Core_Utils.isJson = function(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

Core_Utils.convertJson = function(str) {
  try {
		return JSON.parse(str);
	} catch (e) {
		return false;
	}
	return "";
}

Core_Utils.isNumeric = function(value) {
    return !isNaN(value);
}

//Validate Email
/*Core_Utils.validateEmail = function(email){
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}*/

//validate Ip address
Core_Utils.validateIPaddress = function(ipaddress) {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
    return true;
  }
  return false;
}

//validate version
Core_Utils.validateVersion = function(version) {
  if (/^\d{1,2}\.\d{1,2}\.\d{1,2}$/.test(version)) {
    return true;
  } else {
    return false;
  }
}

Core_Utils.validate_none = function(_id) {
    var field = _id.replace("-input", "");
    Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
}

Core_Utils.validate_email = function(_id) {
    var field = _id.replace("-input", "");
    var obj = $("#"+_id);
    var val = obj.val();
    var valid = Core_Utils.validateEmail(val);
  //  var helper_msg = obj.attr('placeholder')? 'Please ' + Core_Utils.uncapitalizeFirstLetter(obj.attr('placeholder')) : "Please enter value";
    console.log(`check ${field}=${valid}`);

    if(valid)
      Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
    else
      Core_Utils.changeCSSClassCustom(field, false, Core_Constants.EMAIL_DEFAULT_HELPER_MSG);

    return valid;
}

Core_Utils.validate_version = function(_id) {
    var field = _id.replace("-input", "");
    var obj = $("#"+_id);
    var val = obj.val();
    var valid = Core_Utils.validateVersion(val);
  //  var helper_msg = obj.attr('placeholder')? 'Please ' + Core_Utils.uncapitalizeFirstLetter(obj.attr('placeholder')) : "Please enter value";
    console.log(`check ${field}=${valid}`);

    if(valid)
      Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
    else
      Core_Utils.changeCSSClassCustom(field, false, Core_Constants.VERSION_HELPER_MSG);

    return valid;
}

Core_Utils.validate_ipaddress = function(_id) {
    var field = _id.replace("-input", "");
    var obj = $("#"+_id);
    var val = obj.val();
    var valid = Core_Utils.validateIPaddress(val);
  //  var helper_msg = obj.attr('placeholder')? 'Please ' + Core_Utils.uncapitalizeFirstLetter(obj.attr('placeholder')) : "Please enter value";
    console.log(`check ${field}=${valid}`);

    if(valid)
      Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
    else
      Core_Utils.changeCSSClassCustom(field, false, Core_Constants.IP_DEFAULT_HELPER_MSG);

    return valid;
}

Core_Utils.validate_empty = function(_id) {
    var field = _id.replace("-input", "");
    var obj = $("#"+_id);
    var val = obj.val();
    var valid = val==""? false: true;
    var helper_msg = obj.attr('placeholder')? 'Please ' + Core_Utils.uncapitalizeFirstLetter(obj.attr('placeholder')) : "Please enter value";
    console.log(`check ${field}=${valid}`);

    if(valid)
      Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
    else
      Core_Utils.changeCSSClassCustom(field, false, helper_msg);

    return valid;
}

Core_Utils.validate_generic = function(_id) {
    var field = _id.replace("-input", "");
    var obj = $("#"+_id);
    var val = obj.val();
  //  alert(obj.attr('placeholder'))
    var valid = val? true: false;
    var helper_msg = obj.attr('placeholder')? 'Please ' + Core_Utils.uncapitalizeFirstLetter(obj.attr('placeholder')) : "Please enter value";
    console.log("check", field, "valid=", valid);

    if(valid) {
      valid = Core_Utils.isSanitized(val);
      console.log("sanitizePass="+valid);
      if(valid)
        Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
      else
        Core_Utils.changeCSSClassCustom(field, false, Core_Constants.NOT_SANITiZED_HELPER_MSG);
    } else
      Core_Utils.changeCSSClassCustom(field, false, helper_msg);

    return valid;
}

Core_Utils.validate_sanitized = function(_id) {
    var field = _id.replace("-input", "");
    var obj = $("#"+_id);
    var val = obj.val();
    var helper_msg = obj.attr('placeholder')? 'Please ' + Core_Utils.uncapitalizeFirstLetter(obj.attr('placeholder')) : "Please enter value";
    console.log("check "+field);

    valid = Core_Utils.isSanitized(val);
    //alert(valid)
    console.log("sanitizePass="+valid);
    if(valid)
      Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
    else
      Core_Utils.changeCSSClassCustom(field, false, Core_Constants.NOT_SANITiZED_HELPER_MSG);

    return valid;
}

//Check if the drop-down list that can have only one selection is selected
Core_Utils.validate_generic_select = function(_id) {
    var field = _id;
    var obj = $("#"+_id);
    var valid = obj.val() ? true: false;
    var helper_msg = obj.attr('data-placeholder')? 'Please ' + Core_Utils.uncapitalizeFirstLetter(obj.attr('data-placeholder')) : "Please select value";;


    if(valid && obj !== undefined)
      Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
    else
      Core_Utils.changeCSSClassCustom(field, false, helper_msg);

    return valid;
}

//Check if the drop-down list that can have multiple selections is selected
Core_Utils.validate_generic_multiple_select = function(_id) {
    var field = _id;
    var obj = $("#"+_id);
    var valid = obj.val().length > 0 ? true: false;
    var helper_msg = obj.attr('data-placeholder')? 'Please ' + Core_Utils.uncapitalizeFirstLetter(obj.attr('data-placeholder')) : "Please select value";;


    if(valid && obj !== undefined)
      Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
    else
      Core_Utils.changeCSSClassCustom(field, false, helper_msg);

    return valid;
}

Core_Utils.uncapitalizeFirstLetter = function(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

Core_Utils.validate_json = function(_id) {
    var field = _id.replace("-input", "");
    var obj = $("#"+_id);
    var val = obj.val();
  //  console.log("val",val)
    if (val) {
        valid = Core_Utils.isJson(val);
        console.log("isJson="+valid);
        if(valid)
           Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
        else
           Core_Utils.changeCSSClassCustom(field, false, Core_Constants.NOT_JSON_HELPER_MSG);
        return valid;
    } else {
        Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
        return true;
    }
}

Core_Utils.validate_empty_json = function(_id) {
    var valid = Core_Utils.validate_empty(_id);
    if (valid) {
        valid = Core_Utils.validate_json(_id);
    }
    return valid;
}

Core_Utils.validate_delimiter = function(_id){
    var field = _id.replace("-input", "");
    var obj = $("#"+_id);
    var val = obj.val();

    if (val) {
        var re =  new RegExp(/^\w(\s*\-*,?\s*\-*\w)*$/g);
        var valid = re.test(val);
        if (valid) {
             Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
        } else {
             Core_Utils.changeCSSClassCustom(field, false, Core_Constants.DELIMITER_HELPER_MSG);
        }
        return valid;
    } else {
        Core_Utils.changeCSSClassCustom(field, true, Core_Constants.DEFAULT_PASS_HELPER_MSG);
        return true;
    }
}

//format date
Core_Utils.formatDisplayDate = function(dt){
	try {
		if (dt)
		{
			var date = new Date(dt);
			//	return moment(dt).format('DD/MM/YYYY HH:mm:ss');
			return moment(dt).format('YYYY-MM-DD HH:mm:ss');
			//return  date.getDate() + '/'+ (date.getMonth() + 1)  + '/'+ date.getFullYear() +' '+date.getHours() +':'+date.getMinutes() + ':'+ date.getSeconds() +':'+date.getMilliseconds();
		}
	}catch(e){
		console.log(e);
		return "";
	}
}

Core_Utils.formatShortDisplayDate = function(dt){
	try {
		if (dt)
		{
			var date = new Date(dt);
			return   date.getFullYear() + "-" +('0'+(date.getMonth() + 1)).slice(-2) + "-" +  ('0'+date.getDate()).slice(-2) ;
		}
	}catch(e){
		console.log(e);
		return "";
	}
}

Core_Utils.formatISOShortDisplayDate = function(dt){
	try {
		if (dt){
			var date = new Date(dt);
			return  date.getFullYear()+ '-'+('0'+(date.getMonth() + 1)).slice(-2) + '-'+ ('0'+date.getDate()).slice(-2) ;
		}
	}catch(e){
		console.log(e);
		return "";
	}
}

//convert isotime to local
//Core_Utils.convertISOTimeToLocalTime
Core_Utils.convertISOTimeToLocalTime = function(tm){
	//.tz("Asia/Singapore");
	return moment(tm).format(Core_Constants.DATE_FORMAT);
}

Core_Utils.convertUTCISOTimeToLocalTime = function(utc_time){
	//.tz("Asia/Singapore");
	return moment.utc(utc_time).local().format(Core_Constants.DATE_FORMAT);
	//return moment.utc(tm).format('DD/MM/YYYY hh:mm a')
}

Core_Utils.convertUnixTimeToShortFormat = function(unix_time){
  var date = new Date(unix_time * 1000);
	return moment.utc(date).local().format('DD/MM/YYYY');
}

Core_Utils.convertUTCISOTimeToLocalTimeInternationalStandard = function(utc_time){
	//.tz("Asia/Singapore");
	return moment.utc(utc_time).local().format("YYYY-MM-DD HH:mm:ss");
}

//Generate Password Email Content
Core_Utils.generatePasswordMessage = function (name, password){
	return "Dear " + name + "\n\n" + "Your new password is " + password +
		"\n\nFrom Certis Administrator";
}

//Extract FileName
Core_Utils.extractFileName = function(filepath){
	return filepath.replace(/^.*(\\|\/|\:)/, '')
}

//Handles Post Response Errors
Core_Utils.handlePostResponseErrors = function(err){
	console.log(err);
	if ( (err.includes(Core_Constants.RESPONSE_AUTHENTICATION_FAILED)) ||
		(err.includes(Core_Constants.RESPONSE_AUTHENTICATION_NOTOKEN)) ){
		$("#warningmodal_msg").html(err);
		$("#warningModal").modal();
	}
}

//Generate Password
Core_Utils.generatePassword = function(m){
	var m = m || Core_Constants.PASSWORD_MIN_LENGTH;
	s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
	return s;
}

//Validate Email
Core_Utils.validateEmail = function(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

//Validate Complex Password
//i) at least one upper case letter (A – Z).
//ii) at least one lower case letter(a-z).
//iii) At least one digit (0 – 9) .
//iv) at least one special Characters of !@#$%&*()
Core_Utils.isStrongPwd =function(password) {
	var regExp = Core_Constants.PASSWORD_REGEX;
 	return regExp.test(password);
}

Core_Utils.isCustomStrongPwd =function(pattern, password) {
//	var regExp = new RegExp(pattern);
  //var regExp = Core_Constants.PASSWORD_REGEX;
  var restoreRegex = new RegExp(pattern, "g");
 	return restoreRegex.test(password);
}

//Logout
Core_Utils.logOut = function(){
	$(location).attr('href', Core_Constants.PAGE_LOGOUT);
}

//Change CSS Custom
Core_Utils.changeCSSClassCustom = function(id, state, message){
	$("#" + id + "-input").removeClass("is-invalid");
	$("#" + id + "-helper").removeClass("invalid-field");
	$("#" + id + "-input").removeClass("is-valid");
	$("#" + id + "-helper").removeClass("valid-field");

	if (state){
		$("#" + id + "-input").addClass("is-valid");
		$("#" + id + "-helper").addClass("valid-field");
		$("#" + id + "-helper").addClass("valid-field");
		$("#" + id + "-helper").html(message);
	}
	else {
		$("#" + id + "-input").addClass("is-invalid");
		$("#" + id + "-helper").addClass("invalid-field");
		$("#" + id + "-helper").html(message);
	}
}

//Disect Url
Core_Utils.getAllUrlParams = function(url) {

	// get query string from url (optional) or window
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

	// we'll store the parameters here
	var obj = {};

	// if query string exists
	if (queryString) {

		// stuff after # is not part of query string, so get rid of it
		queryString = queryString.split('#')[0];

		// split our query string into its component parts
		var arr = queryString.split('&');

		for (var i=0; i<arr.length; i++) {
			// separate the keys and the values
			var a = arr[i].split('=');

			// in case params look like: list[]=thing1&list[]=thing2
			var paramNum = undefined;
			var paramName = a[0].replace(/\[\d*\]/, function(v) {
				paramNum = v.slice(1,-1);
				return '';
			});

			// set parameter value (use 'true' if empty)
			var paramValue = typeof(a[1])==='undefined' ? true : a[1];

			// (optional) keep case consistent
			paramName = String(paramName).toLowerCase();
			paramValue = String(paramValue).toLowerCase();

			// if parameter name already exists
			if (obj[paramName]) {
				// convert value to array (if still string)
				if (typeof obj[paramName] === 'string') {
					obj[paramName] = [obj[paramName]];
				}
				// if no array index number specified...
				if (typeof paramNum === 'undefined') {
					// put the value on the end of the array
					obj[paramName].push(paramValue);
				}
				// if array index number specified...
				else {
					// put the value at that index number
					obj[paramName][paramNum] = paramValue;
				}
			}else {
				obj[paramName] = paramValue;
			}
		}
	}
	return obj;
}

Core_Utils.randomString = function(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

Core_Utils.fileNameFromUrl = function(url) {
   var matches = url.match(/\/([^\/?#]+)[^\/]*$/);
   if (matches.length > 1) {
     return matches[1];
   }
   return null;
}

Core_Utils.copyToClipboard = function(id) {
  /* Get the text field */
   var copyText = document.getElementById(id);

   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /*For mobile devices*/

   /* Copy the text inside the text field */
   document.execCommand("copy");

   /* Alert the copied text */
   console.log("Copied the text: " + copyText.value);
}

Core_Utils.eraseCookieFromAllPaths = function(name) {
    // This function will attempt to remove a cookie from all paths.
    var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';

    // do a simple pathless delete first.
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

    for (var i = 0; i < pathBits.length; i++) {
        pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
    }
}

Core_Utils.findDiffFromToday = function(date, type) {
  var now = moment(new Date());
  var end = moment(date);
  var duration = moment.duration(now.diff(end));
  var diff = 0;
  if (type == "days") {
    diff = duration.asDays();
  } else if (type=="minutes"){
    diff = duration.asMinutes();
  }
  return diff;
}

Core_Utils.checkTokenExpire = async function() {
    try {
      //alert("Check Token")
        let result = await Api_Utils.checkLoginValid();
        console.log("Valid login");
        //toastr.info("Token is valid")
    } catch(e) {
        //toastr.error("Token is invalid. Exiting..");
        console.log("Invalid login. Exiting..");
        //alert("Token is invalid. Exiting..");
      //  alert(e);
        setTimeout(function(){ Core_Utils.logOut(); }, 1000);
    }
}

//Check whether content is safe
/*
< (open angle parenthesis)
> (close angle parenthesis)
• ' (single apostrophe)
• " (quotation mark)
• \' (backslash-escaped apostrophe)
• \" (backslash-escaped quotation mark)
• ( (opening parenthesis)
• ) (closing parenthesis)
• ; (semicolon)
• % (percentage)
*/
Core_Utils.isSanitized = function(content) {
    if (content!="") {
      var regex = /<|>|\'|\"|\(|\)|;|%/g;
      return !regex.test(content);
    }
    return true;
}


// Generate API Key
Core_Utils.generateUUID = function(){
	var d = new Date().getTime();
	if( window.performance && typeof window.performance.now === "function" )
	{
		d += performance.now();
	}

	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
	{
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});

	return uuid;
}

// Generate Api Key
Core_Utils.generateAPIKey = function(){
	return Core_Utils.randomString(64, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');;
}

//Confirm Delete
Core_Utils.ConfirmDeleteDialog = function(id, func)  {
    var r = confirm("Confirm Delete?");
    if (r == true) {
      func(id);
    }
}

//Confirm Delete 2 Paramaeter
Core_Utils.ConfirmDeleteDialogExt = function(id, para, func)  {
    var r = confirm("Confirm Delete?");
    if (r == true) {
      func(id, para);
    }
}

Core_Utils.popupWindow = function(url, windowName, win, w, h) {
    const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
    return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}

Core_Utils.massageContentCustom = function(str, n) {
	var t = str?str:'';
	if (t.length>n) {
		t = t.substring(0, n) + '...';
	}
	return t;
}

Core_Utils.escJSON = function(str) {
	var myEscapedJSONString = str.replace(/\"/g, "'");
    return  myEscapedJSONString;
}

//Postal
Core_Utils.getPostalContent = function(){
    var html =
    "<div style='margin-top:5pt;text-align:center'>"+
    "<input id='postal' type='text' class='postal form-control' placeholder='Enter Postal Code' value='12' autofocus/>"+
    "<textarea id='postal_result' style='width: 100%; height: 100px;'></textarea>"+
    "</div>";
    return html;
}

Core_Utils.setElementVal = function(src, v){
    $("#"+src).val(v);
}

Core_Utils.enterPostal = function(src) {

  $.confirm({
      title: 'Search Postal Code',
      content: '' +
      '<form action="" class="formName">' +
      '<div class="form-group">' +
      '<input type="text" id="postal" value="" placeholder="Enter Postal Code" class="name form-control" required />' +
      '</div>' +
      '<div class="form-group">' +
      "<textarea id='postal_result' style='width: 100%; height: 100px;'></textarea>"+
      '</div>' +
      '</form>',
      buttons: {
          searchbtn: {
              text: 'Search', // text for button
              btnClass: 'btn-green', // class for the button
              action: function(searchbtnButton){
                  var postal = $("#postal").val();
                  if (postal) {
                    //setElementVal(src, postal);
                    Core_Utils.searchPostal(postal, 'postal_result')
                  }

                  return false;
              }
          },
          formSubmit: {
              text: 'Confirm',
              btnClass: 'btn-blue',
              action: function () {
                var addr = $("#postal_result").val();
                if (addr!="No Record Found") {
                  Core_Utils.setElementVal(src, addr);
                }
              }
          },
          cancel: function () {
              //close
          },
      },
      onContentReady: function () {
          var jc = this;
          this.$content.find('form').on('submit', function (e) {
              // if the user submits the form by pressing enter in the field.
              e.preventDefault();
              jc.$$formSubmit.trigger('click'); // reference the button and click it
          });
      }
  });
   Core_Utils.focusElement('postal')
   return;
}

Core_Utils.focusElement = function(src) {
  setTimeout(() => { $("#"+src).focus();}, 500);
}

Core_Utils.searchPostal = function(address, result) {
  		$.ajax({
  			url:		'http://gothere.sg/maps/geo',
  			dataType:	'jsonp',
  			data:		{
  				'output'	: 'json',
  				'q'			: address,
  				'client'	: '',
  				'sensor'	: false
  			},
  			type:	'GET',
  			success: function(data) {
  				var field = $("#"+result);
  				var myString = "";

  				var status = data.Status;

  				if (status.code == 200) {
  					for (var i = 0; i < data.Placemark.length; i++) {
  						var placemark = data.Placemark[i];
              myString +=placemark.address;
  					}

  					field.val(myString);
  				} else if (status.code == 603) {
  					field.val("No Record Found");
  				}

  			},
  			statusCode: {
  				404: function() {
  					alert('Page not found');
  				}
  			},
  		});
}

Core_Utils.deepCopyFunction = (inObject) => {
  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = Core_Utils.deepCopyFunction(value)
  }

  return outObject
}

Core_Utils.generateUniqueId = function(input){
    input = input.toLowerCase();
    input = input.replace(" ","_");
    return input;
}

Core_Utils.writeAbout = function() {
    var content = `${Core_Constants.APPLICATION} v${Core_Constants.VERSION}<br/><small>@${Core_Constants.LAST_MODIFIED_DATE} Certis Cisco</small>`;
    $("#about").append(content);
    $("#footer_about_app").html(`${Core_Constants.APPLICATION} v${Core_Constants.VERSION}`);
    $('#footer_about_date').html(`@${Core_Constants.LAST_MODIFIED_DATE} Certis Cisco`);
    $('#footer_power_by').html('Bespoke')
}

Core_Utils.hasWhiteSpace = function(s) {
  return /\s/g.test(s);
}

Core_Utils.badge_class_lookup = function(v) {
    var badge_class = "badge-warning";
    if ((v=="active") || (v==true))
      badge_class = "badge-success";
    else if ((v=="inactive") || (v==false))
      badge_class = "badge-danger";
    return badge_class;
}

Core_Utils.delimiterized_str = function(list) {
    var str = "";
    if (list) {
       list.forEach((item, i) => {
           if (i>0) str +=",";
           str += item;
       });
    }
    return str;
}

Core_Utils.delimiterized_list = function(str) {
    var list=[];
    if (str) {
       list = str.split(",");
       list = list.map(el => el.trim());
    }
    return list;
}

//log action
Core_Utils.log_action = async function(action, data, collection, key, result) {
    var t = SSO_Utils.getSessionUser();
    if (!t) return;
    try {
        var user = JSON.parse(t);
        var d = {};
        d["username"] = user.username;
        d["name"] = user.name;
      //  d["role"] = user.role.name;
        d["action"] = action;
        d["data"] = data;
        if (collection) d["collection"] = collection;
        if (key) d["key"] = key;
        if (result) d["result"] = result;
        Api_Utils.insertLog(d);
     }catch(e) {
        console.error(e);
     }
}

Core_Utils.getOwner = function() {
		var t = SSO_Utils.getSessionUser();
		if (!t) return;
		var user = JSON.parse(t);
		return {"_id": user._id, "name": user.name, "username": user.username}
}

//Get object Type
Core_Utils.getType = function(p) {
    if (Array.isArray(p)) return 'array';
    else if (typeof p == 'string') return 'string';
    else if (p != null && typeof p == 'object') return 'object';
    else return 'other';
}

//Settings Sound
Core_Utils.settings_Sound = function(element){
		var on = element.prop('checked');
    console.log(`Setting sound key ${Core_Constants.LOCAL_STORAGE_PREFIX + SSO_Utils.getLoginUserName()}_Sound_Settings to ${on}.`);
		localStorage.setItem(Core_Constants.LOCAL_STORAGE_PREFIX + SSO_Utils.getLoginUserName() +"_Sound_Settings", on);
}

//Setting Receive Alerts
Core_Utils.settings_ReceiveNotifications = function(element){
		var on = element.prop('checked');
    console.log(`Setting receive notification ${Core_Constants.LOCAL_STORAGE_PREFIX + SSO_Utils.getLoginUserName()}_ReceiveAlerts_Settings to ${on}.`);
		localStorage.setItem(Core_Constants.LOCAL_STORAGE_PREFIX + SSO_Utils.getLoginUserName() + "_ReceiveAlerts_Settings", on);
}

Core_Utils.get_Settings_ReceiveNotifications= function(){
	  var local = localStorage.getItem(Core_Constants.LOCAL_STORAGE_PREFIX + SSO_Utils.getLoginUserName() +"_ReceiveAlerts_Settings");
		if (!local) {
			localStorage.setItem(Core_Constants.LOCAL_STORAGE_PREFIX + SSO_Utils.getLoginUserName()  + "_ReceiveAlerts_Settings", true);
			local = true;
		}
		return local == 'true' ? true : false;
}

Core_Utils.get_Settings_Sound = function(){
	  var local = localStorage.getItem(Core_Constants.LOCAL_STORAGE_PREFIX + SSO_Utils.getLoginUserName()  + "_Sound_Settings");
		if (!local) {
			localStorage.setItem(Core_Constants.LOCAL_STORAGE_PREFIX + SSO_Utils.getLoginUserName() +"_Sound_Settings", true);
			local = true;
		}
		return local == 'true' ? true : false;
}

Core_Utils.draw_menu_item = function(widget, item) {
    var menu="";
    if (!item.nested){
        menu = `<li class="nav-item sidebaritemstyle"><a class="nav-link" href="${Core_Constants.RP_PREFIX}/static/${item.filename}"><i class="${item.class}"></i>${item.title}</a></li>`;
    } else {
        var nav_id = `nav_${item.title}`;
        nav_id = nav_id.replace(" ", "_").toLowerCase();
        var child_menus = '';
        item.pages.forEach((item_1, i) => {
            var submenu = `<li class="nav-item sidebaritemstyle"><a class="nav-link" href="${Core_Constants.RP_PREFIX}/static/${item_1.filename}">
            <i class="${item_1.class}"></i>${item_1.title}</a></li>`;
            child_menus+=submenu;
        });
        menu = `<li class="nav-item"><a href="#${nav_id}" data-target="#${nav_id}" aria-controls="${nav_id}" data-toggle="collapse" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link sidebarmenustyle" style="display: inline-block;width:200px">
        <i class="${item.class}"></i>${item.title}</a><ul class="collapse list-unstyled" id="${nav_id}">${child_menus}</ul></li>`;
    }
    if (menu) {
        $(`#${widget}`).append(menu);
    }
}

//Generate sidebar Menu
Core_Utils.generate_sidemenu = function(widget, menus){
    menus.forEach((item, i) => {
        Core_Utils.draw_menu_item(widget, item);
    });
}

Core_Utils.init_socket = async function() {
     console.log("initialize websockets");
     var socket = io('', {path: `${Core_Constants.RP_PREFIX}/sockets/socket.io`});
     socket.emit('join', 'ping');
     socket.on('commands', function (data) {
        console.log("socket (command)::",data);
      });

     socket.on('heartbeats', function (data) {
          console.log("socket (heartbeat)::",data);
          data = Core_Utils.convertJson(data);
          if (data){
              Notification_Utils.insertNotification("Heartbeat from "+data.tag, "", true);
          }
      });

     socket.on('events', function (data) {
         console.log("socket (event)::",data);
         data = Core_Utils.convertJson(data);
         if (data){
              Notification_Utils.insertNotification("Event from "+data.tag, "", true);
         }
     });

     socket.on('feedbacks', function (data) {
          console.log("socket (feedback)::",data);
          data = Core_Utils.convertJson(data);
          if (data){
            Notification_Utils.insertNotification("Feedback from "+data.tag, "", true);
          }
    });

    socket.on('monitorings', function (data) {
      console.log("socket (monitorings)::",data);
      data = Core_Utils.convertJson(data);
      if (data){
        Notification_Utils.insertNotification("Monitoring from "+data.tag, "", true);
      }
    });

  /*  socket.on('ip_updates', function (data) {
          console.log("socket (ip_updates)::",data);
          data = Core_Utils.convertJson(data);
          if (data){
              Notification_Utils.insertNotification("IP Update from "+data.tag, "", true);
          }
    });*/
}

Core_Utils.minify_json = function(str) {
    if (str) {
        var jsonObject = Core_Utils.convertJson(str);
        if (jsonObject) {
          return JSON.stringify(jsonObject, null, 0);
        }
    }
    return "";
}

Core_Utils.beautify_json = function(str) {
    if (str) {
        var jsonObject = Core_Utils.convertJson(str);
        if (jsonObject) {
          return JSON.stringify(jsonObject, null, '\t');
        }
    }
    return "";
}

Core_Utils.replaceGlobally = function(original, searchTxt, replaceTxt) {
   const regex = new RegExp(searchTxt, 'g');
   return original.replace(regex, replaceTxt) ;
}

Core_Utils.setTab = function(widget, mode) {
    var subject = $(`#${widget}`);
    if (!subject) return;
    if (!mode) {
        subject.addClass("not-allowed");
    } else {
        subject.removeClass("not-allowed");
    }
    // var classList = subject.attr("class");
    // alert(classList)
    subject.click(function(e){
       if ($(this).hasClass("not-allowed")) {
           e.preventDefault();
           console.log("This tab is disabled");
           return false;
       }else{
           e.preventDefault();
           $(this).tab('show');
       }
    });
}

Core_Utils.chunkArray = function(arr,n){
     var chunkLength = Math.max(arr.length/n ,1);
     var chunks = [];
     for (var i = 0; i < n; i++) {
         if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
     }
     return chunks;
 }

 Core_Utils.generateId = function(type) {
    return `${Math.random().toString(36).substr(2, 14)}`;
 }

 Core_Utils.findUnique = function(arr, predicate) {
    var found = {};
    arr.forEach(d => {
      found[predicate(d)] = d;
    });
    return Object.keys(found).map(key => found[key]);
}

Core_Utils.getShortTag = function(str){
  if (str.length>4){
    return str.slice(-4);
  }
  return str;
}
