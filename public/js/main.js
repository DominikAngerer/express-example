!function(a){a(function(){a(".meganav-strip .toggle-meganav-overlay").click(function(){a(this).fadeOut(300,function(){a(".meganav-overlay").addClass("open")})}),a(".meganav-overlay .toggle-meganav-overlay").click(function(){a(".meganav-overlay").removeClass("open"),a(".meganav-strip .toggle-meganav-overlay").fadeIn(300)});var o=a("body").data("page");a(".meganav-overlay div a."+o).addClass("active")})}(jQuery),storyblok.init(),storyblok.on("change",function(){window.location.reload(!0)}),storyblok.on("published",function(){$.ajax({url:"/clear_cache"}).done(function(){console.log("cache cleared!")}).fail(function(){console.log("error clearing cache")})});