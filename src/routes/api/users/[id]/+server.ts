import { fail, json, type RequestHandler } from '@sveltejs/kit';
import pool from '$lib/server/database';


export const PUT: RequestHandler = async ({ request, params }) => {
    // Get the user ID from the URL parameters
    const { id } = params;

    // Get the new user data from the request body
    const { username, email } = await request.json();

    // SQL query to update the user
    const query = `
        UPDATE users
        SET username = $1, email = $2
        WHERE id = $3 RETURNING *
    `;

    try {
        // Execute the query
        const { rows } = await pool.query(query, [username, email, id]);
        // Check if the user was found and updated
        if (rows.length > 0) {
            return json({ user: rows[0] }, { status: 200 });
        } else {
            return json({ error: 'User not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Failed to update user:', error);
        throw fail(500, { error: true, details: error });
    }
}

export const DELETE: RequestHandler = async ({ params }) => {
    try {
        const { id } = params;

        if (!id) {
            throw new Error('No ID provided');
        }
        // Delete user from database
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return json({ success: true }, { status: 200 });
    } catch (error) {
        throw fail(500, { error: true, details: error });
    }
}

export const GET: RequestHandler = async ({ params }) => {
    try {
        const { id } = params;
        if (!id) {
            throw new Error('No ID provided');
        }

        const query = 'SELECT id,username,email FROM users WHERE id = $1';
        const result = await pool.query(query, [id]);
        if (result.rows.length > 0) {
            return json(result.rows[0], { status: 200 });
        } else {
            return json({ error: 'User not found' }, { status: 404 });
        }
    } catch (error) {
        throw fail(500, { error: true, details: error });
    }
}
