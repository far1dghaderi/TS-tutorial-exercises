import { Company } from "./Company";
import User from "./User";

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export default class Map {
  private googleMap: google.maps.Map;
  /**
   * @Hint = for prevent accessing developers to all google maps methods and fields, we create
   * this to limit theire access
   */

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.querySelector(divID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", (): void => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
