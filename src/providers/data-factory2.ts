export class DataFactory2 {

	apiAccessToken: String;

	constructor() {
		this.apiAccessToken = null;
	}

	getApiAccessToken() {
		return this.apiAccessToken;
	}

	setApiAccessToken(apiAccessToken) {
		this.apiAccessToken = apiAccessToken;
	}
}