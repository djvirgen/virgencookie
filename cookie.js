(function() {
  var Cookie = {
    get: function(name) {
      if (!document.cookie.length) {
        return null;
      }
      
      start = document.cookie.indexOf(name + "=");
      
      if (-1 == start) {
        return null;
      }
      
      start = start + name.length + 1;
      end = document.cookie.indexOf(";", start);
      
      if (-1 == end) {
        end = document.cookie.length;
      }
      
      return unescape(document.cookie.substring(start, end));
    },
    
    set: function(name, value, ttl) {
      var expires = "";
      
      if (ttl) {
        var date = new Date();
        date.setTime(date.getTime() + (ttl * 1000));
        expires = ["; expires=", date.toGMTString()].join("");
      }
      
      document.cookie = [escape(name), "=", escape(value), expires, "; path=/", "; domain=.go.com"].join("");
    },
    
    erase: function(name) {
      Cookie.set(name, "", -1000);
    }
  };
  
  if (!window.Virgen) {
    window.Virgen = {};
  }
  
  window.Virgen.Cookie = Cookie;
})();