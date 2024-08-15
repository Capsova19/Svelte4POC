import pool from '$lib/server/database';
import argon2 from 'argon2';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const username: string = (formData.get('username') ?? '') as string;
            const email: string = (formData.get('email') ?? '') as string;
            const password: string = (formData.get('password') ?? '') as string;

            if (!username) {
                throw new Error('Username is required');
            }
            if (!email) {
                throw new Error('Email is required');
            }
            if (!password) {
                throw new Error('Password is required');
            }

            const hashedPassword = await argon2.hash(password);

            await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);

            return { success: true };
        } catch (error) {
            return { error: true };
        }
    },
};
