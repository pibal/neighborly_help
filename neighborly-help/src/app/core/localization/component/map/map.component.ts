import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nh-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() latitude = 0.0;
  @Input() longitude = 0.0;
  @Input() editable = false;

  @Output() location = new EventEmitter();

  onChoseLocation(event) {
    if (this.editable) {
      this.latitude = event.coords.lat;
      this.longitude = event.coords.lng;
    }
    this.location.emit({
      latitude: this.latitude,
      longitude: this.longitude,
    });
  }

  ngOnInit(): void {
    if (navigator.geolocation && this.editable) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }
}
