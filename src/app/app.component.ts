import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  // title = 'pizzalasso-demo';

  authenticated: Observable<any>;

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
    private router: Router,
    private demoService: DemoService
  ) { }

  ngOnInit(): void {
    this.authenticated = this.demoService.authObs
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
    this.demoService.logout();    
    this.router.navigateByUrl('/');
  }

}
