const query = require('./sql.model');

const getJobs = () => new Promise(async (resolve) => {
    const sql = `
        SELECT *
        FROM Jobs;`

    const results = await query(sql);
    resolve(results);
});

module.exports = { getJobs };