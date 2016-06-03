"use strict";module.exports=function(e,t,i){var p={ssh:{logfile:"ssh.log",logpath:"logs",privateKeyPath:void 0,remote:{host:void 0,password:void 0,path:void 0,port:22,username:void 0},src:["dist/**/*","!dist/**/*.zip"],zip:!0}};return{ssh:function(s){s=i.merge({},s.ssh,p);var r=function(){return t.ssh({ignoreErrors:!1,sshConfig:i.merge({},s.remote,{privateKey:s.privateKeyPath?i.string(s.privateKeyPath):void 0})})};e.task("deploy:ssh",["deploy:ssh:send"],function(){var t=r();if(s.zip){var p=i["package"].name+".zip";t=t.exec(i.expand("unzip {{path}}/{{zipname}} {{path}}",{path:s.remote.path,zipname:p}),{filePath:s.logfile})}return t.pipe(e.dest(s.logfile))}),e.task("deploy:ssh:clean",function(){return r().exec("rm -rf "+s.remote.path,{filePath:s.logfile}).pipe(e.dest(s.logpath))}),e.task("deploy:ssh:send",["deploy:ssh:clean"],function(){var p=e.src(s.src).pipe(t.plumber());if(s.zip){var a=i["package"].name+".zip";p=p.pipe(t.zip(a)).pipe(t.filter(a))}return p.pipe(r().dest(s.remote.path))})}}};