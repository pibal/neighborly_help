import { Component, Input, OnInit } from '@angular/core';
import { ExampleComponent } from '../example/example.component';
import { NzModalService } from 'ng-zorro-antd';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'nh-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() nzContent: any;
  @Input() nzTitle: string;
  @Input() textButton: string;

  constructor(private modalService: NzModalService) {}

  ngOnInit() {}

  createComponentModal(): void {
    this.modalService.create({
      nzContent: this.nzContent,
      nzTitle: this.nzTitle,
    });
  }
}
