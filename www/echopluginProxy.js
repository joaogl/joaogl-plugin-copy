cordova.commandProxy.add("Echo",{
    echo:function(successCallback,errorCallback,strInput) {
        if(!strInput || !strInput.length) {
            errorCallback("Error, something was wrong with the input string. =>" + strInput);
        }
        else {
            successCallback(strInput + "echo");
			
			// Get the app's installation folder.
			var appFolder =
				Windows.ApplicationModel.Package.current.installedLocation;

			// Get the files in the current folder.
			var filesInFolderPromise = appFolder.getFilesAsync();
			filesInFolderPromise.done(function getFilesSuccess(filesInFolder) {

				// Iterate over the results and print the list of files
				// to the Visual Studio Output window.
				filesInFolder.forEach(function forEachFile(file) {
					console.log(file.name, file.dateCreated);
				});
			});
			
        }
    }
});