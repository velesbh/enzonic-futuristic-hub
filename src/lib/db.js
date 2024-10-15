// Mock data for frontend development
const mockNews = [
  { id: 1, title: "We just entered beta!", author: "Veles BH", content: "We're excited to announce that enzonic is now in beta!", date: "2024-09-24" },
  { id: 2, title: "Hosting Updates", author: "Veles BH", content: "We have now opened more minecraft plans, and more server hosting types will be comming very soon.", date: "2024-09-24" },
  { id: 3, title: "Jellyfin Updates", author: "Veles BH", content: "Sadly jellyfin is delayed due to hosting issue on node 4.", date: "2024-09-26" },
   { id: 4, title: "We are delaying services", author: "Veles BH", content: "Sadly most resource intensive service like ai, vpn and translate are delayed due to low budget and low computing power", date: "2024-09-26" },
  { id: 4, title: "Enzonic MEET just came out!", author: "Veles BH", content: "Enzonic Meet is a meeting app wich is very simple, clean and FREE please go to the services page, find enzonic meet and click explore", date: "2024-10-16" },
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
