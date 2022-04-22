import { AfterViewInit, Component, Input } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {

  @Input() latitud!: number;
  @Input() longitud!: number;
  @Input() nombre!: string;
    constructor() { }

  ngAfterViewInit(): void {

    const map = new Map('map').setView([11.5,43], 13);

    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      	maxZoom: 20,
      	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //Creando un marcador
    const markerItem = marker([this.latitud, this.longitud]).addTo(map).bindPopup(`Usted está en ${this.nombre}`);
    map.fitBounds([
        [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ]);

  }

}
