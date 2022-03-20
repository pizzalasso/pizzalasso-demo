import { Component, OnInit } from '@angular/core';
import * as CustomEditor from '.ckeditor';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { UploadAdapter } from '../shared/upload-adapter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public config: any;

  editorData = '';

  public Editor = CustomEditor;  
  public model = {
    editorData: this.editorData
  };

  constructor() { }

  ngOnInit(): void {
  }  

  // public onChange( { editor }: ChangeEvent ) {
  //   const data = editor.getData();
  //   console.log( data );
  //   this.model2.editorData = data;
  // }

  onReady(eventData: any) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader: any) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }

}
