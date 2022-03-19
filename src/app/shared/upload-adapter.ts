export class UploadAdapter {
    
    constructor(private loader?: any ) {
        this.loader = loader;
    }  
    
    upload() {
        return this.loader.file
            .then((file: any) => new Promise( ( resolve, reject ) => {
                var myReader = new FileReader();
                myReader.onloadend = (e) => {
                    resolve({ default: myReader.result });
                }  
                myReader.readAsDataURL(file);
            }));
    };  

}