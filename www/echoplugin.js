var EchoPlugin = {
    // the echo function calls successCallback with the provided text in strInput
    // if strInput is empty, it will call the errorCallback
    echo:function(successCallback, errorCallback, strInput) {
        cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
    }
}

window.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
};