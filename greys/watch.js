function before(o,a) {
   o.println("call from remote script: "+a.clazz.name+"."+a.method.name+"()");    
}
