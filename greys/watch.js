require(['greys'], function (greys) {
   greys.watching({

       before: function (o, a) {
           o.println('call from remote script: '+a.clazz.name+"."+a.method.name+"()");
       },

   });
})
