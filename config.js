var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiamhhcHB5MjAiLCJhIjoiY2tzZmZuM3FlMWEwMjJwbzBuMGpoN21vcCJ9.UwGvApL_o7Xm_x5gBePS6A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '인터랙티브 지도 포맷 테스트',
    subtitle: '코로나19 국내 첫번째 환자',
    byline: 'By 뉴스이노베이션팀',
    footer: '출처: 보건복지부 등',
    chapters: [
        {
            id: 'wuhan1',
            alignment: 'left',
            hidden: false,
            title: '2020년 1월 18일',
            /* image: './path/to/image/source.png', */
            description: '중국 후베이성 우한에 사는 <b>A 씨(35)</b>는 출국을 하루 앞두고 발열 오한 등 감기 증상이 나타났다. 시내 병원에서 진료를 받고 감기약을 처방받았다.',
            location: {
                center: [114.27288, 30.61353],
                zoom: 5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 1000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'wuhan2',
            alignment: 'left',
            hidden: false,
            title: '1월 19일 오전',
            /* image: './path/to/image/source.png', */
            description: 'A 씨는 우한 공항에서 한국 인천으로 가는 비행기를 탔다. 가족 2명, 친구 가족 3명 등 5명이 동행했다. 일본 여행을 가기 위해 인천에서 환승하는 일정이었다.',
            location: {
                center: [114.21625, 30.77692],
                zoom: 13.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'wuhan3',
            alignment: 'left',
            hidden: false,
            title: '1월 19일 오후 12시 25분',
            /* image: './path/to/image/source.png', */
            description: '비행기에서 내린 A 씨가 인천공항 탑승동 게이트로 향했다. 체온을 쟀는데 38.0도가 나왔다. 여기에 발열, 오한, 근육통, 콧물 증상이 있었다. 검역당국의 판단에 따라 A 씨는 임시격리실로 이동했다.',
            location: {
                center: [126.44756, 37.46711],
                zoom: 11.82,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'wuhan4',
            alignment: 'left',
            hidden: false,
            title: '1월 19일 오후 3시경',
            /* image: './path/to/image/source.png', */
            description: 'A 씨는 검역관과 임시격리실을 나와 공항 1층으로 나갔다. 건물 앞에 대기 중이던 구급차로 인천의료원에 이송됐다.',
            location: {
                center: [126.66841, 37.47825],
                zoom: 17,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'wuhan5',
            alignment: 'left',
            hidden: false,
            title: '1월 20일 오전 8시',
            /* image: './path/to/image/source.png', */
            description: 'A 씨는 코로나19 확진 판정을 받았다.',
            location: {
                center: [126.66841, 37.47825],
                zoom: 17,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
