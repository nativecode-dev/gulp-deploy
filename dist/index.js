"use strict";module.exports=function(e){return require("gulp-help")(e),e.build=require("./build.js")(e),e.deploy=require("./deploy.js")(e),e["package"]=require("./package.js")(e),e.publish=require("./publish.js")(e),e.reload=require("./reload.js")(e),e.use=require("gulp-load-plugins")(e),e};