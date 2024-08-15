import pool from '$lib/server/database';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { env } from '$env/dynamic/private';

const JWT_SECRET = env.SECRET_JWTKEY;

export const load = async ({ cookies }) => {
	// Lösche das Session-Cookie, wenn die Login-Seite aufgerufen wird
	cookies.delete('session', { path: '/' });

	return {}; // Lade die Login-Seite
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		try {
			const formData = await request.formData();
			const username: string = (formData.get('username') ?? '') as string;
			const password: string = (formData.get('password') ?? '') as string;

			if (!username) {
				throw new Error('Username is required');
			}
			if (!password) {
				throw new Error('Password is required');
			}

			// Perform login check against the database
			const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

			if (result.rows.length === 0) {
				return fail(401, { invalid: true, details: 'User not found' });
			}

			const user = result.rows[0];
			const passwordMatch = await argon2.verify(user.password, password);

			if (!passwordMatch) {
				return fail(401, { invalid: true });
			}

			// Erstelle JWT-Token
			const token = jwt.sign({ userId: user.id, username: user.username, role: user.role }, JWT_SECRET, {
				expiresIn: '1w'
			});

			// Setze JWT-Token in Cookie
			cookies.set('session', token, {
				path: '/',
				httpOnly: true, // more secure
				secure: process.env.NODE_ENV === 'production', // use secure cookie in production
				maxAge: 60 * 60 * 24 * 2 // 2 Tage
			});

			return { success: true };
		} catch (error) {
			return fail(500, { error: true, details: error });
		}
	}
};
