import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  // title = 'pizzalasso-demo';

  authenticated = localStorage.getItem('token_data');

  // public config: any;

  // editorData = '';

  // public Editor = CustomEditor;  
  // public model = {
  //   editorData: this.editorData
  // };

  // public Editor2 = CustomEditor;  
  // public model2 = {
  //   editorData: this.editorData
  // };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // public onChange( { editor }: ChangeEvent ) {
  //   const data = editor.getData();
  //   console.log( data );
  //   this.model2.editorData = data;
  // }

  // onReady(eventData: any) {
  //   eventData.plugins.get('FileRepository').createUploadAdapter = function (loader: any) {
  //     console.log(btoa(loader.file));
  //     return new UploadAdapter(loader);
  //   };
  // }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
