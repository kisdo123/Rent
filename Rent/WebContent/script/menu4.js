var container = document.getElementById('map');
var options = {
	center : new daum.maps.LatLng(37.525215, 126.903400),
	level : 3
};

var map = new daum.maps.Map(container, options);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
	center: new daum.maps.LatLng(37.525215, 126.903400), map.setLevel(map
			.getLevel() - 1);
}

function zoomOut() {
	center: new daum.maps.LatLng(37.525215, 126.903400), map.setLevel(map
			.getLevel() + 1);
}

// 지도에 마커를 표시합니다
var marker = new daum.maps.Marker({
	map : map,
	position : new daum.maps.LatLng(37.525215, 126.903400)
});

var content = '<div class="wrap">'
		+ '    <div class="info">'
		+ '        <div class="title">'
		+ '           하자센터'
		+ '            <div class="close" onclick="closeOverlay()" title="닫기"></div>'
		+ '        </div>'
		+ '        <div class="body">'
		+ '            <div class="img">'
		+ '                <img src="http://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">'
		+ '           </div>'
		+ '            <div class="desc">'
		+ '                <div class="ellipsis">영등포구 영등포동7가 영신로 200</div>'
		+ '                <div class="jibun ellipsis">(우) 07244 (지번) 영등포동7가 57</div>'
		+ '                <div><a href="https://haja.net" target="_blank" class="link">홈페이지</a></div>'
		+ '            </div>' + '        </div>' + '    </div>' + '</div>';

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
var overlay = new daum.maps.CustomOverlay({
	content : content,
	map : map,
	position : marker.getPosition()
});

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
daum.maps.event.addListener(marker, 'click', function() {
	overlay.setMap(map);
});

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
function closeOverlay() {
	overlay.setMap(null);
}

// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
function setMapType(maptype) {
	var roadmapControl = document.getElementById('btnRoadmap');
	var skyviewControl = document.getElementById('btnSkyview');
	if (maptype === 'roadmap') {
		map.setMapTypeId(daum.maps.MapTypeId.ROADMAP);
		roadmapControl.className = 'selected_btn';
		skyviewControl.className = 'btn';
	} else {
		map.setMapTypeId(daum.maps.MapTypeId.HYBRID);
		skyviewControl.className = 'selected_btn';
		roadmapControl.className = 'btn';
	}
}