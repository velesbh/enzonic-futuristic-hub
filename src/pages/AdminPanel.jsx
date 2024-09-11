import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsManager from '../components/NewsManager';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const AdminPanel = () => {
  const queryClient = useQueryClient();

  // Simulated API calls
  const fetchNews = async () => {
    // Replace with actual API call
    return [
      { id: 1, title: "News 1", content: "Content 1", author: "Author 1", date: "2024-03-15" },
      { id: 2, title: "News 2", content: "Content 2", author: "Author 2", date: "2024-03-16" },
    ];
  };

  const fetchRequests = async () => {
    // Replace with actual API call
    return [
      { id: 1, serverType: "Minecraft", ram: "8GB", cpu: "Normal", budget: "$50", usage: "SMP server", storage: "50GB", email: "user1@example.com", status: "Pending" },
      { id: 2, serverType: "Voice", ram: "4GB", cpu: "Budget", budget: "$20", usage: "Discord bot", storage: "20GB", email: "user2@example.com", status: "Claimed" },
    ];
  };

  const { data: newsItems, isLoading: isNewsLoading } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  const { data: requests, isLoading: isRequestsLoading } = useQuery({
    queryKey: ['requests'],
    queryFn: fetchRequests,
  });

  const createNewsMutation = useMutation({
    mutationFn: async (newNews) => {
      // Simulated API call
      console.log('Creating news:', newNews);
      return { ...newNews, id: Date.now() };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['news'], (oldData) => [...oldData, data]);
    },
  });

  const updateNewsMutation = useMutation({
    mutationFn: async (updatedNews) => {
      // Simulated API call
      console.log('Updating news:', updatedNews);
      return updatedNews;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['news'], (oldData) =>
        oldData.map((item) => (item.id === data.id ? data : item))
      );
    },
  });

  const deleteNewsMutation = useMutation({
    mutationFn: async (id) => {
      // Simulated API call
      console.log('Deleting news:', id);
      return id;
    },
    onSuccess: (deletedId) => {
      queryClient.setQueryData(['news'], (oldData) =>
        oldData.filter((item) => item.id !== deletedId)
      );
    },
  });

  const claimRequestMutation = useMutation({
    mutationFn: async (id) => {
      // Simulated API call
      console.log('Claiming request:', id);
      return id;
    },
    onSuccess: (claimedId) => {
      queryClient.setQueryData(['requests'], (oldData) =>
        oldData.map((item) => item.id === claimedId ? { ...item, status: 'Claimed' } : item)
      );
    },
  });

  const deleteRequestMutation = useMutation({
    mutationFn: async (id) => {
      // Simulated API call
      console.log('Deleting request:', id);
      return id;
    },
    onSuccess: (deletedId) => {
      queryClient.setQueryData(['requests'], (oldData) =>
        oldData.filter((item) => item.id !== deletedId)
      );
    },
  });

  return (
    <div className="min-h-screen bg-black text-green-400">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Admin Panel
        </motion.h1>

        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Management Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="news">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="news">News Management</TabsTrigger>
                <TabsTrigger value="requests">Custom Plan Requests</TabsTrigger>
              </TabsList>
              <TabsContent value="news">
                {isNewsLoading ? (
                  <p>Loading news...</p>
                ) : (
                  <NewsManager
                    newsItems={newsItems}
                    createNews={createNewsMutation.mutate}
                    updateNews={updateNewsMutation.mutate}
                    deleteNews={deleteNewsMutation.mutate}
                  />
                )}
              </TabsContent>
              <TabsContent value="requests">
                {isRequestsLoading ? (
                  <p>Loading requests...</p>
                ) : (
                  <div className="space-y-4">
                    {requests.map((request) => (
                      <Card key={request.id} className="bg-gray-700">
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-bold mb-2">{request.serverType} Server Request</h3>
                          <p>RAM: {request.ram}</p>
                          <p>CPU: {request.cpu}</p>
                          <p>Budget: {request.budget}</p>
                          <p>Usage: {request.usage}</p>
                          <p>Storage: {request.storage}</p>
                          <p>Email: {request.email}</p>
                          <p>Status: {request.status}</p>
                          <div className="mt-4 space-x-2">
                            {request.status === 'Pending' && (
                              <GlowingButton onClick={() => claimRequestMutation.mutate(request.id)}>
                                Claim
                              </GlowingButton>
                            )}
                            <GlowingButton variant="destructive" onClick={() => deleteRequestMutation.mutate(request.id)}>
                              Delete
                            </GlowingButton>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;