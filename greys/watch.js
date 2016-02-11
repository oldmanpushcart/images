function before(o,a) {
   o.println("call from remote: "+a.clazz.name+"."+a.method.name+"()");    
}
