 var fs = require('fs');

 var mkdirp = require('mkdirp');
 var path = require('path'), fs = require('fs'), unzip = require('unzip');

   
    function fromDir(startPath, filter, callback) {

        if (!fs.existsSync(startPath)) {
            console.log("no dir ", startPath);
            return;
        }

        var files = fs.readdirSync(startPath);
        for (var i = 0; i < files.length; i++) {
            var filename = path.join(startPath, files[i]);
            var stat = fs.lstatSync(filename);
            if (stat.isDirectory()) {
                fromDir(filename, filter, callback);
               
            }
            else if (filter.test(filename)) {
                callback(filename);
              
            }
        };

    };
    fromDir('F:/GIT_Folder/vsc_test_visualcode/attachments/', /\.*$/, function (filename) {
   
        var filenames=filename.substring(0, filename.lastIndexOf("."));
        var filenames1=filenames.substring(filenames.lastIndexOf("\\")+1,filenames.length );
       mkdirp('F:/GIT_Folder/vsc_test_visualcode/attachments/output/'+filenames1, function (err) {
                   if (err) console.error(err)
               });
               
    });

