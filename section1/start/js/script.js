//this is known as the name space desgin pattern, by making really long name
//we avoid using same variable more than once;
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
		talk: function(msg){
			this.echo ( this.leadself + msg);
		},
		replyYesNo: function(){
			var msg = Math.random()>.5? this.msgYes : this.msgNo;
			this.echo(this.leadcomputer + msg)
		},
		saySassyStuff: function(){
			var msg = this.aSassyStuff[Math.floor(Math.random())*aSassyStuff.length];
			this.echo(this.leadcomputer + msg);
		},
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
