import { Component, OnInit } from '@angular/core';
import { OfferHelpService } from '../../service';

@Component({
  selector: 'nh-offer-help',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss'],
})
export class SearchTaskComponent implements OnInit {
  constructor(private offerHelpService: OfferHelpService) {}

  ngOnInit() {}

  getOfferHelp() {
    return this.offerHelpService.getOfferData();
  }
}
