"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map = /** @class */ (function () {
    /**
     * @Hint = for prevent accessing developers to all google maps methods and fields, we create
     * this to limit theire access
     */
    function Map(divID) {
        this.googleMap = new google.maps.Map(document.querySelector(divID), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    Map.prototype.addMarker = function (mappable) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
        marker.addListener("click", function () {
            var infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return Map;
}());
exports.default = Map;
