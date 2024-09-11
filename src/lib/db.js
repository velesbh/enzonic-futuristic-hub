import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'mysql-1fb1d300-velesbh0-ea0a.i.aivencloud.com',
  port: 19755,
  user: 'avnadmin',
  password: 'AVNS_J8qG-tFqR5U-MrCVkrC',
  database: 'defaultdb',
  ssl: {
    rejectUnauthorized: true
  },
  connectionLimit: 10
});

export const db = {
  // News operations
  getNews: async () => {
    const [rows] = await pool.query('SELECT * FROM news ORDER BY date DESC');
    return rows;
  },
  addNews: async (news) => {
    const [result] = await pool.query(
      'INSERT INTO news (title, date, author, content) VALUES (?, ?, ?, ?)',
      [news.title, new Date(), news.author, news.content]
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
      'INSERT INTO custom_plan_requests (server_type, ram, cpu, budget, usage, storage, email, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [request.serverType, request.ram, request.cpu, request.budget, request.usage, request.storage, request.email, 'Pending']
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

// Initialize database tables
(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS news (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATETIME NOT NULL,
        author VARCHAR(100) NOT NULL,
        content TEXT NOT NULL
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS custom_plan_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        server_type VARCHAR(100) NOT NULL,
        ram INT NOT NULL,
        cpu VARCHAR(50) NOT NULL,
        budget DECIMAL(10, 2) NOT NULL,
        usage TEXT NOT NULL,
        storage INT NOT NULL,
        email VARCHAR(255) NOT NULL,
        status VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database tables:', error);
  }
})();