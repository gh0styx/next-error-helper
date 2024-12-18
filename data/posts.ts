export interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export const posts: Post[] = [
  {
    id: 1,
    author: 'John Doe',
    avatar: '/placeholder.svg?height=40&width=40',
    content: 'Just finished a great workout! 💪 #fitness #motivation',
    image: '/placeholder.svg?height=300&width=400',
    likes: 15,
    comments: 3,
    createdAt: '2023-06-01T09:00:00Z',
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: '/placeholder.svg?height=40&width=40',
    content: 'Enjoying a beautiful sunset at the beach. 🌅 #nature #peace',
    likes: 32,
    comments: 7,
    createdAt: '2023-06-01T18:30:00Z',
  },
  {
    id: 3,
    author: 'Alex Johnson',
    avatar: '/placeholder.svg?height=40&width=40',
    content:
      'Just launched my new website! Check it out at www.example.com 🚀 #webdev #launch',
    image: '/placeholder.svg?height=300&width=400',
    likes: 45,
    comments: 12,
    createdAt: '2023-06-02T11:15:00Z',
  },
];
