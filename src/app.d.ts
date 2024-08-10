// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: UserPayload;
			isAuthenticated?: boolean; // Füge das `isAuthenticated`-Flag hinzu
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
