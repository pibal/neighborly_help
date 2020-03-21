import { Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

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
