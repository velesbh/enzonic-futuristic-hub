// Simulated in-memory database
let newsItems = [
  {
    id: 1,
    title: "Enzonic Launches New Cloud Services",
    date: "March 15, 2024",
    author: "John Doe",
    content: "Enzonic is proud to announce the launch of our new cloud services, offering unparalleled performance and reliability for businesses of all sizes."
  },
  {
    id: 2,
    title: "Upcoming Minecraft Server Event",
    date: "March 20, 2024",
    author: "Jane Smith",
    content: "Join us for an exciting Minecraft server event this weekend! Participate in challenges, win prizes, and explore new custom-built worlds."
  },
  {
    id: 3,
    title: "Enzonic VPN Now Available on Mobile",
    date: "March 25, 2024",
    author: "Mike Johnson",
    content: "We're excited to announce that Enzonic VPN is now available on iOS and Android devices. Protect your privacy on-the-go with our secure and fast VPN service."
  },
];

let customPlanRequests = [];

export const db = {
  // News operations
  getNews: () => Promise.resolve(newsItems),
  addNews: (news) => {
    const newNews = { ...news, id: Date.now() };
    newsItems.push(newNews);
    return Promise.resolve(newNews);
  },
  updateNews: (updatedNews) => {
    newsItems = newsItems.map(item => item.id === updatedNews.id ? updatedNews : item);
    return Promise.resolve(updatedNews);
  },
  deleteNews: (id) => {
    newsItems = newsItems.filter(item => item.id !== id);
    return Promise.resolve(id);
  },

  // Custom plan request operations
  getRequests: () => Promise.resolve(customPlanRequests),
  addRequest: (request) => {
    const newRequest = { ...request, id: Date.now(), status: 'Pending' };
    customPlanRequests.push(newRequest);
    return Promise.resolve(newRequest);
  },
  updateRequest: (updatedRequest) => {
    customPlanRequests = customPlanRequests.map(item => item.id === updatedRequest.id ? updatedRequest : item);
    return Promise.resolve(updatedRequest);
  },
  deleteRequest: (id) => {
    customPlanRequests = customPlanRequests.filter(item => item.id !== id);
    return Promise.resolve(id);
  },
};