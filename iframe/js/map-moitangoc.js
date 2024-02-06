(function ($) {
    "use strict";
    function mainMap() {
        function locationData(locationURL, locationImg, locationTitle, locationAddress, locationCategory, locationStarRating, locationRevievsCounter, locationStatus) {
            return ('<div class="map-popup-wrap"><div class="map-popup"><div class="infoBox-close"><i class="fal fa-times"></i></div><a class="listing-img-content fl-wrap"><div class="infobox-status '+ locationStatus +'">' + locationStatus + '</div><img src="' + locationImg + '" alt="diet moi ba ria"><div class="card-popup-raining map-card-rainting" data-staRrating="' + locationStarRating + '"><span class="map-popup-reviews-count">( ' + locationRevievsCounter + ' reviews )</span></div></a> <div class="listing-content"><div class="listing-content-item fl-wrap"><div class="map-popup-location-category ' + locationCategory + '"></div><div class="listing-title fl-wrap"><h4><a>' + locationTitle + '</a></h4><div class="map-popup-location-info"><i class="fas fa-map-marker-alt"></i>' + locationAddress + '</div></div><div class="map-popup-footer"><a href=' + locationURL + ' class="main-link" title="Diệt mối Bà Rịa" target="_blank">Thông tin <i class="fal fa-long-arrow-right"></i></a><a href="tel:+84915550788" class="infowindow_wishlist-btn" title="Diệt mối Bà Rịa" target="_blank"><i class="fal fa-tablet"></i></a></div></div></div></div> ')
        }
	    //  Map Infoboxes ------------------
        var locations = [
// BARIA
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-biet-thu-anh-tinh-long-tam.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-tinh-long-tam.jpg', 'Biệt thự Bà Rịa', "Long Tâm Bà Rịa, VN", 'hotels-cat', "5", "5", "Bà Rịa"  ), 10.5052676, 107.1240385, 0, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-tinh-long-tam.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-nha-rieng-chi-nghia-phuoc-nguyen.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-chi-nghia-phuoc-nguyen.jpg', 'Nhà lầu Bà Rịa', "Phước Nguyên Bà Rịa, VN", 'hotels-cat', "5", "5", "Bà Rịa"  ), 10.5002576, 107.1462097, 1, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-chi-nghia-phuoc-nguyen.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-san-van-dong-scg-phuoc-hung.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-san-van-dong-phuoc-hung.jpg', 'Sân bóng Bà Rịa', "Phước Hưng Bà Rịa, VN", 'cafe-cat', "5", "5", "Bà Rịa"  ), 10.5140118, 107.1688587, 2, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-san-van-dong-phuoc-hung.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-nha-rieng-anh-thien-hoa-long.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-anh-thien-hoa-long.jpg', 'Nhà sàn Bà Rịa', "Hòa Long Bà Rịa, VN", 'hotels-cat', "5", "5", "Bà Rịa"  ), 10.52951, 107.1817989, 3, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-anh-thien-hoa-long.jpg'],
// LONGDIEN
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-nha-rieng-co-6-phuoc-hai.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-co-6-long-dien.jpg', 'Nhà ở Long Điền', "Phước Hải Long Điền, VN", 'hotels-cat', "5", "5", "Long Điền"  ), 10.4122184, 107.2389144, 4, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-co-6-long-dien.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/muoi-nha-hang-hai-dong-long-hai.html', 'https://wiki.thuongmai.blog/images/news/muoi-benh-sot-xuat-huyet.jpg', 'Nhà hàng Long Điền', "Long Hải Long Điền, VN", 'cafe-cat', "5", "5", "Long Điền"  ), 10.398395, 107.2121748, 5, 'https://wiki.thuongmai.blog/images/news/muoi-benh-sot-xuat-huyet.jpg'],
// TANTHANH
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-nha-rieng-anh-hoang-phu-my.html', 'https://www.thuongmai.blog/image/600-400/map-anh-hoang-phu-my.jpg', 'Nhà lầu Tân Thành', "Phú Mỹ Tân Thành, VN", 'hotels-cat', "5", "5", "Tân Thành"  ), 10.5813864, 107.0513789, 6, 'https://www.thuongmai.blog/image/600-400/map-anh-hoang-phu-my.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/con-trung-cty-thai-binh-duong-my-xuan.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-tbduong-my-xuan.jpg', 'Công ty Tân Thành', "Mỹ Xuân Tân Thành, VN", 'hotels-cat', "5", "5","Tân Thành"  ), 10.6312519, 107.0309758, 7, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-tbduong-my-xuan.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-nha-rieng-anh-tuan-phu-my.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-anh-tuan-phu-my.jpg', 'Nhà lầu Phú Mỹ ', "Phú Mỹ Tân Thành, VN", 'hotels-cat', "5", "5", "Tân Thành"  ), 10.5823864, 107.0523789, 8, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-anh-tuan-phu-my.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-nha-rieng-anh-hien-my-xuan.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/nha-san-go-anh-hien-my-xuan-quay-pha-che.jpg', 'Cà phê Tân Thành', "Mỹ Xuân Tân Thành, VN", 'cafe-cat', "5", "5", "Tân Thành"  ), 10.6322519, 107.0319758, 9, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/nha-san-go-anh-hien-my-xuan-quay-pha-che.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-biet-thu-anh-doan-my-xuan.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-anh-doan-my-xuan.jpg', 'Biệt thự Tân Thành', "Mỹ Xuân Tân Thành, VN", 'hotels-cat', "5", "5", "Tân Thành"  ), 10.6332519, 107.0329758, 10, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-anh-doan-my-xuan.jpg'],
// VUNGTAU
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/con-trung-nha-hang-maxim-p7.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-maxim-vung-tau.jpg', 'Nhà hàng Vũng Tàu', "Phường 7 Vũng Tàu, VN", 'cafe-cat', "5", "5", "Vũng Tàu"  ), 10.3642406, 107.0780898, 11, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-maxim-vung-tau.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-nha-rieng-chi-thuy-p8.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-chi-thuy-p8.jpg', 'Nhà lầu Vũng Tàu', "Phường 8 Vũng Tàu, VN", 'hotels-cat', "5", "5", "Vũng Tàu"  ), 10.3572905, 107.0946551, 12, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-chi-thuy-p8.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/moi-nha-rieng-anh-binh-p10.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-anh-binh-p10.jpg', 'Nhà lầu Vũng Tàu', "Phường 10 Vũng Tàu, VN", 'hotels-cat', "5", "5", "Vũng Tàu"  ), 10.3920637, 107.1120322, 13, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-anh-binh-p10.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/muoi-khach-san-rubi-p2.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-rubi-phuong-2.jpg', 'Khách sạn Vũng Tàu', "Phường 2 Vũng Tàu, VN", 'gym-cat', "5", "5", "Vũng Tàu"  ), 10.3331387, 107.0859051, 14, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-rubi-phuong-2.jpg'],
[locationData('https://www.kiemsoatmoiphuongnam.blog/2023/09/muoi-biet-thu-toan-hao-p5.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-biet-thu-toan-hao-phuong-5.jpg', 'Biệt thự Vũng Tàu', "Phường 5 Vũng Tàu, VN", 'gym-cat', "5", "5", "Vũng Tàu"  ), 10.3553121, 107.0634411, 15, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-biet-thu-toan-hao-phuong-5.jpg'],
// XUYENMOC
[locationData('https://www.kiemsoatmoiphuongnam.blog/2024/01/diet-moi-xuyen-moc-casino-ho-tram.html', 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-casino-xuyen-moc.jpg', 'Casino Xuyên Mộc', "Phước Thuận Xuyên Mộc, VN", 'gym-cat', "5", "5", "Xuyên Mộc"  ), 10.4855987, 107.4521313, 16, 'https://wiki.thuongmai.blog/images/dietmoi/600-400/map-casino-xuyen-moc.jpg'],
        ];
	    //   Map Infoboxes end ------------------
        var map = new google.maps.Map(document.getElementById('map-main'), {
            zoom: 6,
            scrollwheel: false,
            center: new google.maps.LatLng(15.7939252, 105.9102589),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            fullscreenControl: false,
            navigationControl: false,
            streetViewControl: false,
            animation: google.maps.Animation.BOUNCE,
            gestureHandling: 'cooperative',
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            }]
        });
        var boxText = document.createElement("div");
        boxText.className = 'map-box'
        var currentInfobox;
        var boxOptions = {
            content: boxText,
            disableAutoPan: true,
            alignBottom: true,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-150, -55),
            zIndex: null,
            boxStyle: {
                width: "300px"
            },
            closeBoxMargin: "0",
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false,
        };

      var markerCluster, overlay, i;
      var allMarkers = [];

      var clusterStyles = [
        {
          textColor: 'white',
          url: '',
          height: 50,
          width: 50
        }
      ];

      var ib = new InfoBox();
             google.maps.event.addListener(ib, "domready", function () {
                cardRaining();
 
            });
	  var markerImg;
	  var markerCount;
      for (i = 0; i < locations.length; i++) {
             var labels = 'phuongnam';
		markerImg = locations[i][4];
		markerCount = locations[i][3] + 1;
        var overlaypositions = new google.maps.LatLng(locations[i][1], locations[i][2]),

        overlay = new CustomMarker(
         overlaypositions, map,{ marker_id: i},  markerImg , markerCount
        );

        allMarkers.push(overlay);

        google.maps.event.addDomListener(overlay, 'click', (function(overlay, i) {

        return function() {
             ib.setOptions(boxOptions);
             boxText.innerHTML = locations[i][0];
             ib.close();
             ib.open(map, overlay);
             currentInfobox = locations[i][3];
 
                    var latLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
                    map.panTo(latLng);
                    map.panBy(0, -110);

            google.maps.event.addListener(ib,'domready',function(){
              $('.infoBox-close').click(function(e) {
                  e.preventDefault();
                  ib.close();
                  $('.map-marker-container').removeClass('clicked infoBox-opened');
              });

            });

          }
        })(overlay, i));

      }
        var options2 = {
            imagePath: '',
            styles: clusterStyles,
            minClusterSize: 2
        };
        markerCluster = new MarkerClusterer(map, allMarkers, options2);
        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
 
        $('.map-item').on("click", function (e) {
            e.preventDefault();
            map.setZoom(15);
            var index = currentInfobox;
            var marker_index = parseInt($(this).attr('href').split('#')[1], 10);
            google.maps.event.trigger(allMarkers[marker_index-1], "click");
            if ($(window).width() > 1064) {
                if ($(".map-container").hasClass("fw-map")) {
                    $('html, body').animate({
                        scrollTop: $(".map-container").offset().top + "-110px"
                    }, 1000)
                    return false;
                }
            }
        });
        $('.nextmap-nav').on("click", function (e) {
            e.preventDefault();
             map.setZoom(15);
            var index = currentInfobox;
            if (index + 1 < allMarkers.length) {
                google.maps.event.trigger(allMarkers[index+ 1], 'click');
            } else {
                google.maps.event.trigger(allMarkers[0], 'click');
            }
        });
        $('.prevmap-nav').on("click", function (e) {
            e.preventDefault();
            map.setZoom(15);
            if (typeof (currentInfobox) == "undefined") {
                google.maps.event.trigger(allMarkers[allMarkers.length - 1], 'click');
            } else {
                var index = currentInfobox;
                if (index - 1 < 0) {
                    google.maps.event.trigger(allMarkers[allMarkers.length - 1], 'click');
                } else {
                    google.maps.event.trigger(allMarkers[index - 1], 'click');
                }
            }
        });
      // Scroll enabling button
      var scrollEnabling = $('.scrollContorl');

      $(scrollEnabling).click(function(e){
          e.preventDefault();
          $(this).toggleClass("enabledsroll");

          if ( $(this).is(".enabledsroll") ) {
             map.setOptions({'scrollwheel': true});
          } else {
             map.setOptions({'scrollwheel': false});
          }
      });		
        var zoomControlDiv = document.createElement('div');
        var zoomControl = new ZoomControl(zoomControlDiv, map);
        function ZoomControl(controlDiv, map) {
            zoomControlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
            controlDiv.style.padding = '5px';
            var controlWrapper = document.createElement('div');
            controlDiv.appendChild(controlWrapper);
            var zoomInButton = document.createElement('div');
            zoomInButton.className = "mapzoom-in";
            controlWrapper.appendChild(zoomInButton);
            var zoomOutButton = document.createElement('div');
            zoomOutButton.className = "mapzoom-out";
            controlWrapper.appendChild(zoomOutButton);
            google.maps.event.addDomListener(zoomInButton, 'click', function () {
                map.setZoom(map.getZoom() + 1);
            });
            google.maps.event.addDomListener(zoomOutButton, 'click', function () {
                map.setZoom(map.getZoom() - 1);
            });
        }
		
		
      // Geo Location Button
      $(".geoLocation, .input-with-icon.location a").on("click", function (e) {
          e.preventDefault();
          geolocate();
      });

      function geolocate() {

          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                  var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                  map.setCenter(pos);
                  map.setZoom(12);
				  
		  var avrtimg = $(".avatar-img").attr("data-srcav");
         var markerIcon3 = {
            url: avrtimg,
        }		
        var marker3 = new google.maps.Marker({
            position: pos,
             map: map,
 
            icon: markerIcon3,
            title: 'vị trí hiện tại'
        });			  
	 var myoverlay = new google.maps.OverlayView();
       myoverlay.draw = function () {
           // add an id to the layer that includes all the markers so you can use it in CSS
           this.getPanes().markerLayer.id='markerLayer';
       };
       myoverlay.setMap(map);			  
				  
              });
          }
      }		
    }

    // Custom Map Marker
    // ----------------------------------------------- //

    function CustomMarker(latlng, map, args,   markerImg , markerCount) {
      this.latlng = latlng;
      this.args = args;
 
	  this.markerImg = markerImg;
	  this.markerCount = markerCount;
      this.setMap(map);
    }

    CustomMarker.prototype = new google.maps.OverlayView();

    CustomMarker.prototype.draw = function() {

      var self = this;

      var div = this.div;

      if (!div) {

        div = this.div = document.createElement('div');
        div.className = 'map-marker-container';

        div.innerHTML = '<div class="marker-container">'+
							'<span class="marker-count">'+self.markerCount+'</span>'+
                            '<div class="marker-card">'+
                               '<div class="marker-holder"><img src="'+self.markerImg+'" alt="diet moi ba ria"></div>'+
                            '</div>'+
                         '</div>'
 

        // Clicked marker highlight
        google.maps.event.addDomListener(div, "click", function(event) {
            $('.map-marker-container').removeClass('clicked infoBox-opened');
            google.maps.event.trigger(self, "click");
            $(this).addClass('clicked infoBox-opened');
        });


        if (typeof(self.args.marker_id) !== 'undefined') {
          div.dataset.marker_id = self.args.marker_id;
        }

        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
      }

      var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

      if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
      }
    };

    CustomMarker.prototype.remove = function() {
      if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null; $(this).removeClass('clicked');
      }
    };

    CustomMarker.prototype.getPosition = function() { return this.latlng; };

    // -------------- Custom Map Marker / End -------------- //	
	
	
var head = document.getElementsByTagName( 'head' )[0];

// Save the original method
var insertBefore = head.insertBefore;

// Replace it!
head.insertBefore = function( newElement, referenceElement ) {

    if ( newElement.href && newElement.href.indexOf( 'https://fonts.googleapis.com/css?family=Roboto' ) === 0 ) {
        return;
    }

    insertBefore.call( head, newElement, referenceElement );
};	
	
	    var map = document.getElementById('map-main');
    if (typeof (map) != 'undefined' && map != null) {
        google.maps.event.addDomListener(window, 'load', mainMap);
    }

})(this.jQuery);
