// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

const JWT_SECRET = env.SECRET_JWTKEY; // Verwende eine sichere Umgebungsvariable für den geheimen Schlüssel

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('session');

	if (token) {
		try {
			const decoded = jwt.verify(token, JWT_SECRET) as any; // Definiere den genauen Typ für decoded
			event.locals.user = decoded;
            event.locals.isAuthenticated = true;
		} catch (error) {
			event.locals.user = null;
            event.locals.isAuthenticated = false;
		}
	} else {
		event.locals.user = null;
        event.locals.isAuthenticated = false;
	}

	return resolve(event);
};
