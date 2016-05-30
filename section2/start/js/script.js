(function(win, $){

	var CircleGeneratorSingleton = (function(){
		var instance;
		//all properties and methods live within init
		function init(){

				//private methods have _
			var _aCircle = [],
					_stage = $('.advert');

				function _position(circle, left, top){
					circle.css('left', left);
					circle.css('top', top);
				}

				function create (left, top){
					var circle = $('<div class="circle"></div>');
					_position(circle,left,top);
					return circle;
				}

				function add(circle){
					_stage.append(circle);
					_aCircle.push(circle);
				}

				function index(){
					return _aCircle.length;
				}
				//reveal here
			return {
				create: create,
				index:index,
				add:add
			};

		}


		return {
			getInstance: function(){
				if(!instance){
					instance = init();
				}

				return instance;
			}
		}


	})();

	$(win.document).ready(function(){
		$('.advert').click(function(e){

			//insert logic when clicked
			var cg = CircleGeneratorSingleton.getInstance();
			var circle = cg.create(e.pageX-25, e.pageY-25);

			cg.add(circle);
		});

	});

})(window, jQuery);
