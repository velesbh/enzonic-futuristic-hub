import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AdminPanel = ({ newsItems, createNews, updateNews, deleteNews, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editingNews, setEditingNews] = useState(null);
  const [newNews, setNewNews] = useState({ title: '', author: '', content: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleCreate = () => {
    createNews({ ...newNews, date: new Date().toLocaleDateString() });
    setNewNews({ title: '', author: '', content: '' });
  };

  const handleUpdate = () => {
    updateNews(editingNews);
    setEditingNews(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      deleteNews(id);
    }
  };

  if (!isAuthenticated) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <Button onClick={onClose}>Close Admin Panel</Button>
      <Card>
        <CardHeader>
          <CardTitle>Create News</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Title"
              value={newNews.title}
              onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
            />
            <Input
              placeholder="Author"
              value={newNews.author}
              onChange={(e) => setNewNews({ ...newNews, author: e.target.value })}
            />
            <Textarea
              placeholder="Content"
              value={newNews.content}
              onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
            />
            <Button onClick={handleCreate}>Create News</Button>
          </div>
        </CardContent>
      </Card>

      {newsItems.map((news) => (
        <Card key={news.id}>
          <CardHeader>
            <CardTitle>{news.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {editingNews && editingNews.id === news.id ? (
              <div className="space-y-4">
                <Input
                  value={editingNews.title}
                  onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                />
                <Input
                  value={editingNews.author}
                  onChange={(e) => setEditingNews({ ...editingNews, author: e.target.value })}
                />
                <Textarea
                  value={editingNews.content}
                  onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                />
                <Button onClick={handleUpdate}>Save</Button>
                <Button variant="outline" onClick={() => setEditingNews(null)}>Cancel</Button>
              </div>
            ) : (
              <div>
                <p>Author: {news.author}</p>
                <p>Date: {news.date}</p>
                <p>{news.content}</p>
                <div className="mt-4 space-x-2">
                  <Button onClick={() => setEditingNews(news)}>Edit</Button>
                  <Button variant="destructive" onClick={() => handleDelete(news.id)}>Delete</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminPanel;