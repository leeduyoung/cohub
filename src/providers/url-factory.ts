export class UrlFactory {
	host: String;

    constructor() {
        // this.host = 'http://api.refreshclub.co.kr'; //real
        // this.host = ''; //test
        this.host = 'http://localhost:3000'; //test
    }

	getUrl() {
		let urls = {
            // API 엑세스 토큰
            getApiAccessToken: this.host + '/v2/o/token/',
            // 로그인
            accountsSignin: this.host + '/v2/accounts/signin',
            // 자동로그인 (디바이스 자동 인증)
            autoSignin: this.host + '/v2/accounts/authorization',
            // 홈
            clubs: this.host + '/v2/clubs',
            // 시설 상세
            club: this.host + '/v2/club',
            // 관심 시설 등록
            likeClub: this.host + '/v2/statuses/like-club',
            // 내 시설
            myClub: this.host + '/v2/clubs/mine',
            // 모든시설 조회
            allClubs: this.host + '/v2/clubs',
            // 시설 이미지 리스트
            clubImages: this.host + '/v2/club/images',
            // 지역/종목/이름 시설 검색하기
            searchClubs: this.host + '/v2/search/clubs',
            // 시설 검색
            getNearbyClubs: this.host + '/v2/search/clubs/filter',
            // 종목 태그 조회
            getTags: this.host + '/v2/tags',
            // 시설 간단 정보 조회 (체크인 예고) (썸네일 주소, 시설이름, 수업이름)
            simpleClub: this.host + '/v2/club/simple/information',
            // 시설 체크인
            clubCheckIn: this.host + '/v2/accounts/checkin',
            // 최초로그인 취소시 기기 등록 삭제 
            deleteDeviceAuth: this.host + '/v2/accounts/device-auth',

            // 회원가입
            emailCheck: this.host + '/v2/accounts/validation/mail',
            simpleEmailCheck: this.host + '/v2/accounts/validation/mail/simple',
            companyCheck: this.host + '/v2/search/companies',
            signup: this.host + '/v2/accounts/user',
            smsCheck: this.host + '/v2/authorizations/sms',
            emailAuth: this.host + '/v2/authorizations/mail',
            enrollCompany: this.host + '/v2/accounts/company',

            // 이용약관
            accessTerms: 'https://refreshclub.co.kr/help/terms?appmode=1',
            // 개인정보보호방침
            privacyPolicy: 'http://refreshclub.co.kr/help/privacy?appmode=1',
            // 1:1문의하기
            userFeedBack: this.host + '/v2/user/feedback',
            // 더보기 데이터 가져오기(push, 체크인 바로가기)
            optionMore: this.host + '/v2/informations/more',
            // 푸쉬알람 설정
            pushNotifyModeSetting: this.host + '/v2/statuses/push-alarm',
            // 최근 체크인 시설 바로가기 설정
            autoCheckinModeSetting: this.host + '/v2/statuses/reuse-recent-checkin',
            // 로그아웃
            signout: this.host + '/v2/accounts/logout',

            // 홈 - 이벤트 조회
            getEvents: this.host + '/v2/events',

            // 홈 - 프리미엄 시설 조회
            getPremiumSimpleClubs: this.host + '/v2/clubs/premium/featured',
            getPremiumClubs: this.host + '/v2/clubs/premium',
            getRecommandation: this.host + '/v2/clubs/recommendation/groups',
            getRecommandationClubs: this.host + '/v2/clubs/recommendation',

            // 모든 시설 데이터 조회 (지도로보기에서 사용)
            getAllClubs: this.host + '/v2/clubs/all',

            // 공지사항 조회
            getNotices: this.host + '/v2/notices',

            // FAQ 조회
            getFaq: this.host + '/v2/faq',

            // 내 정보 조회
            getAccount: this.host + '/v2/accounts/information',            
		}		
		return urls;
	}

    getUrl2() {
        let urls = {
            login: this.host + '/api/users/login'
        }
        return urls;
    }
}