import type { RequestHandler } from '@sveltejs/kit';
// import bcrypt from 'bcryptjs';
// import { getPool } from '$lib/server/database';

// export const POST: RequestHandler = async ({ request }) => {
//   const { email, password } = await request.json();

//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const pool = await getPool();
//     const result = await pool.request()
//       .input('email', email)
//       .input('password', hashedPassword)
//       .query('INSERT INTO UserDatas (email, password) VALUES (@Email, @Password)');

//     if (result.rowsAffected[0] > 0) {
//       return new Response(JSON.stringify({ message: 'Registrierung erfolgreich' }), { status: 200 });
//     } else {
//       return new Response(JSON.stringify({ message: 'Registrierung fehlgeschlagen' }), { status: 400 });
//     }
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Fehler bei der Datenbankverbindung' }), { status: 500 });
//   }
// };


