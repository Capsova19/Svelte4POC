// src/routes/profile/+page.server.ts
import pool from '$lib/server/database';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// Überprüfen, ob der Benutzer eingeloggt ist
    console.log("profile locals",locals)
	if (locals.isAuthenticated === false) {
		throw redirect(302, '/account/login');
	}

	// Benutzer aus der Datenbank abrufen
	const {rows} = await pool.query('SELECT id, username, email FROM users WHERE id = $1', [locals.user.userId]);

	// Überprüfen, ob ein Benutzer gefunden wurde
	if (rows.length === 0) {
		console.error(`No user found with ID ${locals.user.userId}`);
		throw redirect(302, '/login'); // Oder eine Fehlermeldung anzeigen
	}

	console.log(rows)
	return { users: rows };
};

export const actions: Actions = {
    default: async ({ cookies }) => {
        // Session-Cookie löschen
        cookies.delete('session', { path: '/' });

        // Benutzer auf die Login-Seite weiterleiten
        throw redirect(302, '/account/login');
    }
};
