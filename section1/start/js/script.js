var chatModule = (function () {

	var _leadself = "Me: ",
	_leadcomputer = "Mac: ",
	_aSaid = ["This is a Cyber Chat"],
	_msgYes = "Yes, that's a great idea.",
	_msgNo = "No, that must be a mistake.",
	_aSassyStuff = ["Like mold on books, grow myths on history.",
								"She moved like a poem and smiled like a sphinx.",
								"As long as we don’t die, this is gonna be one hell of a story.",
								"She laughed, and the desert sang.",
								"You’ve got about as much charm as a dead slug."];


	 function _echo (msg){
				_aSaid.push("<div>" + msg + "</div>");

				var aSaidlength = _aSaid.length,
				 		start = Math.max(_aSaid.length - 6, 0),
						out = "";

				for (var i = start ; i < _aSaidlength ; i++){
						out += _aSaid[i];
				}

				$('.advert').html(out);

				$('#talk span').text(msg);

			}

			/* reveal module pattern puts all functions within but uses naming convention
			with _name to declare public functions */

			function talk (msg){
				_echo ( _leadself + msg);
			}

			 function replyYesNo (){
				var msg = Math.random()>.5? this._msgYes : this._msgNo;
			_echo( _leadcomputer + msg)
			}

			function saySassyStuff (){
				var msg = _aSassyStuff[Math.floor(Math.random())*_aSassyStuff.length];
				echo( leadcomputer + msg );



			}

			//return public functions
	return {
		talk: talk,
		replyYesNo:replyYesNo,
		saySassyStuff:saySassyStuff
	};
})();

$(document).ready(function(){
	chatModule.talk("this is great");
	chatModule.replyYesNo();
	chatModule.saySassyStuff();
})

/*
var com = com || {};
com.o2geek = com.o2geek || {};
com.o2geek.packt = com.o2geek.packt || {};
com.o2geek.packt.JSDP = com.o2geek.packt.JSDP || {};
com.o2geek.packt.JSDP.sudoChat = com.o2geek.packt.JSDP.sudoChat || {};


com.o2geek.packt.JSDP.sudoChat = {
		leadself : "Me: ",
		leadcomputer : "Mac: ",
		aSaid : ["This is a Cyber Chat"],
		msgYes : "Yes, that's a great idea.",
		msgNo : "No, that must be a mistake.",
		aSassyStuff : ["Like mold on books, grow myths on history.",
									"She moved like a poem and smiled like a sphinx.",
									"As long as we don’t die, this is gonna be one hell of a story.",
									"She laughed, and the desert sang.",
									"You’ve got about as much charm as a dead slug."],
		echo: function(msg){
			this.aSaid.push("<div>" + msg + "</div>");

			var aSaidlength = this.aSaid.length,
			 		start = Math.max(this.aSaid.length - 6, 0),
					out = "";

			for (var i = start ; i < aSaidlength ; i++){
					out += this.aSaid[i];
			}

			$('.advert').html(out);

			$('#talk span').text(msg);

		}

};
*/
