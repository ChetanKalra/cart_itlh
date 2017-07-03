function uploadFile() {

   var fileURL = document.getElementById('file-upload').files[0];

   // var fileURL = "///storage/emulated/0/DCIM/myFile"
   var uri = encodeURI("http://127.0.0.1:8000/storage/"+fileURL.name);
   var options = new FileUploadOptions();
   options.fileKey = "file";
   options.fileName = fileURL.substr(fileURL.lastIndexOf('/')+1);
   options.mimeType = "text/plain";
   
   var headers = {'headerParam':'headerValue'};
   options.headers = headers;
   var ft = new FileTransfer();
   ft.upload(fileURL, uri, onSuccess, onError, options);

   function onSuccess(r) {
      console.log("Code = " + r.responseCode);
      console.log("Response = " + r.response);
      console.log("Sent = " + r.bytesSent);
   }

   function onError(error) {
      alert("An error has occurred: Code = " + error.code);
      console.log("upload error source " + error.source);
      console.log("upload error target " + error.target);
   }
	
}