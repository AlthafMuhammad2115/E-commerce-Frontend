import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() content:any;
  @Input() btn:any;
  @Input() heading:any;
  @Input() width:any;
  @Input() height:any;
  @Input() img:any;

}
