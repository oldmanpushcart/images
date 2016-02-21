require(['greys'], function (greys) {
   greys.watching({

       before: function (o, a) {
           o.println(a.clazz.name+"."+a.method.name+"()");
       },

   });
})
