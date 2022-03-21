import { Component, OnInit } from '@angular/core';
import * as CustomEditor from '.ckeditor';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { UploadAdapter } from '../shared/upload-adapter';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public config: any;

  editorData = '';

  public editor = CustomEditor;  
  public model = {
    editorData: this.editorData
  };

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.demoService.getContent().subscribe(res => {
      this.model.editorData = res.content;
    });
  }  

  // public onChange( { editor }: ChangeEvent ) {
  //   const data = editor.getData();
  //   console.log( data );
  //   this.model2.editorData = data;
  // }

  onReady(eventData: any) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader: any) {
      return new UploadAdapter(loader);
    };
  }

  saveContent() {
    this.demoService.saveContent(this.model.editorData).subscribe();
    console.log(this.model.editorData);
  }
}
