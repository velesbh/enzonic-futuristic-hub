// This is a mock database for client-side use
// In a real application, these operations should be performed on the server

let newsItems = [];
let customPlanRequests = [];

export const db = {
  // News operations
  getNews: async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return newsItems;
  },
  addNews: async (news) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const newNews = { id: Date.now(), ...news, date: new Date().toISOString() };
    newsItems.push(newNews);
    return newNews;
  },
  updateNews: async (updatedNews) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = newsItems.findIndex(item => item.id === updatedNews.id);
    if (index !== -1) {
      newsItems[index] = { ...newsItems[index], ...updatedNews };
      return newsItems[index];
    }
    throw new Error('News item not found');
  },
  deleteNews: async (id) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = newsItems.findIndex(item => item.id === id);
    if (index !== -1) {
      newsItems.splice(index, 1);
      return id;
    }
    throw new Error('News item not found');
  },

  // Custom plan request operations
  getRequests: async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return customPlanRequests;
  },
  addRequest: async (request) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const newRequest = { id: Date.now(), ...request, status: 'Pending', created_at: new Date().toISOString() };
    customPlanRequests.push(newRequest);
    return newRequest;
  },
  updateRequest: async (updatedRequest) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = customPlanRequests.findIndex(item => item.id === updatedRequest.id);
    if (index !== -1) {
      customPlanRequests[index] = { ...customPlanRequests[index], ...updatedRequest };
      return customPlanRequests[index];
    }
    throw new Error('Request not found');
  },
  deleteRequest: async (id) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = customPlanRequests.findIndex(item => item.id === id);
    if (index !== -1) {
      customPlanRequests.splice(index, 1);
      return id;
    }
    throw new Error('Request not found');
  },
};

// Note: In a real application, you would implement server-side code here
// to connect to the MySQL database using the provided credentials:
//
// Database name: defaultdb
// Host: mysql-1fb1d300-velesbh0-ea0a.i.aivencloud.com
// Port: 19755
// User: avnadmin
// Password: AVNS_J8qG-tFqR5U-MrCVkrC
// SSL mode: REQUIRED
//
// The server-side implementation would handle database operations and
// expose these operations through an API that the client-side code can call.