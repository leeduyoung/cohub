import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

@Injectable()
export class NetworkFactory {

	// constructor(private network: Network) {

	// }

	constructor(private network: Network) {
		// watch network for a disconnect
		let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
			console.log('network was disconnected :-(');
			console.log('this.network : ', this.network);
		});

		// stop disconnect watch
		// disconnectSubscription.unsubscribe();

		// watch network for a connection
		let connectSubscription = this.network.onConnect().subscribe(() => {
			console.log('network connected!');
			console.log('this.network : ', this.network);
			
			// We just got a connection but we need to wait briefly
			// before we determine the connection type. Might need to wait.
			// prior to doing any api requests as well.
			// setTimeout(() => {
			// 	if (this.network.type === 'wifi') {
			// 		console.log('we got a wifi connection, woohoo!');
			// 	}
			// }, 3000);
		});

		// stop connect watch
		// connectSubscription.unsubscribe();
	}

	isOnline() {
		return navigator.onLine;
	}

}