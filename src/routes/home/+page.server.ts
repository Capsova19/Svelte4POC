import { error, redirect } from '@sveltejs/kit';
import pool from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user?.role !== 'admin') {
		throw redirect(302, '/login'); // Weiterleitung zur Login-Seite, wenn nicht authentifiziert oder nicht Admin
	}
	try {
		const { rows } = await pool.query('SELECT id, username, email FROM users');
		console.log('home Users:', rows);
		return { users: rows };
	} catch (err) {
		throw error(500, 'Database error');
	}
};
