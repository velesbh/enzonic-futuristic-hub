import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'mysql-1fb1d300-velesbh0-ea0a.i.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_J8qG-tFqR5U-MrCVkrC',
  database: 'defaultdb',
  port: 19755,
  ssl: {
    rejectUnauthorized: true
  }
});

export const db = {
  // News operations
  getNews: async () => {
    const [rows] = await pool.query('SELECT * FROM news ORDER BY date DESC');
    return rows;
  },
  addNews: async (news) => {
    const [result] = await pool.query(
      'INSERT INTO news (title, author, content, date) VALUES (?, ?, ?, ?)',
      [news.title, news.author, news.content, new Date()]
    );
    return { id: result.insertId, ...news };
  },
  updateNews: async (updatedNews) => {
    await pool.query(
      'UPDATE news SET title = ?, author = ?, content = ? WHERE id = ?',
      [updatedNews.title, updatedNews.author, updatedNews.content, updatedNews.id]
    );
    return updatedNews;
  },
  deleteNews: async (id) => {
    await pool.query('DELETE FROM news WHERE id = ?', [id]);
    return id;
  },

  // Custom plan request operations
  getRequests: async () => {
    const [rows] = await pool.query('SELECT * FROM custom_plan_requests ORDER BY created_at DESC');
    return rows;
  },
  addRequest: async (request) => {
    const [result] = await pool.query(
      'INSERT INTO custom_plan_requests (serverType, ram, cpu, budget, usage, storage, email, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [request.serverType, request.ram, request.cpu, request.budget, request.usage, request.storage, request.email, 'Pending', new Date()]
    );
    return { id: result.insertId, ...request, status: 'Pending' };
  },
  updateRequest: async (updatedRequest) => {
    await pool.query(
      'UPDATE custom_plan_requests SET status = ? WHERE id = ?',
      [updatedRequest.status, updatedRequest.id]
    );
    return updatedRequest;
  },
  deleteRequest: async (id) => {
    await pool.query('DELETE FROM custom_plan_requests WHERE id = ?', [id]);
    return id;
  },
};

// Create tables if they don't exist
(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS news (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(100) NOT NULL,
      content TEXT NOT NULL,
      date DATETIME NOT NULL
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS custom_plan_requests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      serverType VARCHAR(100) NOT NULL,
      ram VARCHAR(50) NOT NULL,
      cpu VARCHAR(50) NOT NULL,
      budget VARCHAR(50) NOT NULL,
      usage TEXT NOT NULL,
      storage VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      status VARCHAR(50) NOT NULL,
      created_at DATETIME NOT NULL
    )
  `);
})();