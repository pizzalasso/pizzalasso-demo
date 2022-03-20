import { Component, OnInit } from '@angular/core';

import * as CustomEditor from '.ckeditor';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contentData = '';

  public content1 = CustomEditor;  
  public content1Model = {
    editorData: this.contentData
  };

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.demoService.getContent().subscribe(res => {
      this.content1Model.editorData = res.content;
    });
  }

}
