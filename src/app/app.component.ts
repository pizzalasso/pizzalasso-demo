import { Component } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzalasso-demo';

  editorData = '';

  public Editor = ClassicEditor;  
  public model = {
    editorData: this.editorData
  };

  public Editor2 = ClassicEditor;  
  public model2 = {
    editorData: this.editorData
  };

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    console.log( data );
    this.model2.editorData = data;
  }
}
