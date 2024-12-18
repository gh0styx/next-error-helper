'use client';
import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import { Send } from 'lucide-react';
import { Post } from './Post';
import { posts as initialPosts, Post as PostType } from '../../data/posts';
import CreatePost from './createPost';

export function Feed() {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post: PostType = {
        id: posts.length + 1,
        author: 'Current User',
        avatar: '/placeholder.svg?height=40&width=40',
        content: newPost,
        likes: 0,
        comments: 0,
        createdAt: new Date().toISOString(),
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="w-full justify-end p-2">
        <CreatePost />
      </div>

      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
