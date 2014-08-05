(function () {
    var Ken = function (params) {
        return new ken(params);
    };
     
    var ken = function (params) {
        var selector = document.querySelectorAll(params), i = 0;

        this.length = selector.length;
		
        this.version = '1.0.0';
         
        for (; i < this.length; i++) {
            this[i] = selector[i];
        }
         
        return this;        
    };
 
    Ken.fn = ken.prototype = {
        ken: function () {
			window.document.write('Ken.');
            return this;
        }
     };
 
    if (!window.Ken) {
        window.Ken = Ken;
    }
})();
 