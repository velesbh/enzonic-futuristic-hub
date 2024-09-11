import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsManager from '../components/NewsManager';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { db } from '../lib/db';

const AdminPanel = () => {
  const queryClient = useQueryClient();

  const { data: newsItems, isLoading: isNewsLoading } = useQuery({
    queryKey: ['news'],
    queryFn: db.getNews,
  });

  const { data: requests, isLoading: isRequestsLoading } = useQuery({
    queryKey: ['requests'],
    queryFn: db.getRequests,
  });

  const createNewsMutation = useMutation({
    mutationFn: db.addNews,
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  const updateNewsMutation = useMutation({
    mutationFn: db.updateNews,
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  const deleteNewsMutation = useMutation({
    mutationFn: db.deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  const claimRequestMutation = useMutation({
    mutationFn: (id) => db.updateRequest({ id, status: 'Claimed' }),
    onSuccess: () => {
      queryClient.invalidateQueries(['requests']);
    },
  });

  const deleteRequestMutation = useMutation({
    mutationFn: db.deleteRequest,
    onSuccess: () => {
      queryClient.invalidateQueries(['requests']);
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