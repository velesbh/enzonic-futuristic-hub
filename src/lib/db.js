// Mock data for frontend development
const mockNews = [
  { id: 1, title: "New Server Launch", author: "Admin", content: "We're excited to announce our new server launch!", date: "2024-03-15" },
  { id: 2, title: "Maintenance Update", author: "Tech Team", content: "Scheduled maintenance will occur this weekend.", date: "2024-03-14" },
];

const mockRequests = [
  { id: 1, serverType: "Minecraft", ram: "4GB", cpu: "2 cores", budget: "$20", usage: "Small SMP server", storage: "20GB", email: "user1@example.com", status: "Pending", created_at: "2024-03-13" },
  { id: 2, serverType: "Voice Server", ram: "2GB", cpu: "1 core", budget: "$10", usage: "Discord bot hosting", storage: "10GB", email: "user2@example.com", status: "Approved", created_at: "2024-03-12" },
];

export const db = {
  // News operations
  getNews: async () => {
    // In a real application, this would be an API call to the backend
    return Promise.resolve(mockNews);
  },
  addNews: async (news) => {
    // In a real application, this would be an API call to the backend
    const newNews = { id: mockNews.length + 1, ...news, date: new Date().toISOString().split('T')[0] };
    mockNews.push(newNews);
    return Promise.resolve(newNews);
  },
  updateNews: async (updatedNews) => {
    // In a real application, this would be an API call to the backend
    const index = mockNews.findIndex(news => news.id === updatedNews.id);
    if (index !== -1) {
      mockNews[index] = { ...mockNews[index], ...updatedNews };
    }
    return Promise.resolve(updatedNews);
  },
  deleteNews: async (id) => {
    // In a real application, this would be an API call to the backend
    const index = mockNews.findIndex(news => news.id === id);
    if (index !== -1) {
      mockNews.splice(index, 1);
    }
    return Promise.resolve(id);
  },

  // Custom plan request operations
  getRequests: async () => {
    // In a real application, this would be an API call to the backend
    return Promise.resolve(mockRequests);
  },
  addRequest: async (request) => {
    // In a real application, this would be an API call to the backend
    const newRequest = { id: mockRequests.length + 1, ...request, status: 'Pending', created_at: new Date().toISOString().split('T')[0] };
    mockRequests.push(newRequest);
    return Promise.resolve(newRequest);
  },
  updateRequest: async (updatedRequest) => {
    // In a real application, this would be an API call to the backend
    const index = mockRequests.findIndex(request => request.id === updatedRequest.id);
    if (index !== -1) {
      mockRequests[index] = { ...mockRequests[index], ...updatedRequest };
    }
    return Promise.resolve(updatedRequest);
  },
  deleteRequest: async (id) => {
    // In a real application, this would be an API call to the backend
    const index = mockRequests.findIndex(request => request.id === id);
    if (index !== -1) {
      mockRequests.splice(index, 1);
    }
    return Promise.resolve(id);
  },
};

// Note: In a real application, you would implement proper API endpoints on the server-side
// and make HTTP requests from the frontend to interact with the database.