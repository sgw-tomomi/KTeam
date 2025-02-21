import { sql_query } from "../../../lib/db";


const handler = async (_, res) => {
    try {
        const results = await sql_query(`
        SELECT * FROM teacher_member
        LIMIT 5

        `);

        return res.json(results);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

};



export default handler;
