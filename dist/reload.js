"use strict";module.exports=function(e){var r=[];return e.reload=function(c,t){return e.task("watch:rebuild",function(){Object.keys(c).map(function(t){r.push(e.watch(t,c[t]))})}),e.task("watch:reload",["watch:rebuild"],function(){var c=void 0;e.watch("gulpfile.js",function(){for(var e=process.argv.slice(1,2).concat(t||[],["watch:rebuild"]),i=r?r.length-1:0,n=process.argv[0];i>0;)r[i].end().remove(),i--;r=[],c&&c.kill(),c=require("child_process").spawn(n,e,{cwd:process.cwd(),stdio:"inherit"})})})}};