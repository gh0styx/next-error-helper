import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Post as PostType } from '../../data/posts';

export function Post({ post }: { post: PostType }) {
  return (
    <Card className="mb-4">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar src={post.avatar} size="sm" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {post.author}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {new Date(post.createdAt).toLocaleString()}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt="Post image"
            className="w-full h-auto object-cover rounded-lg mt-3"
          />
        )}
      </CardBody>
      <CardFooter className="gap-3">
        <Button
          color="primary"
          radius="full"
          size="sm"
          variant="light"
          startContent={<Heart className="w-4 h-4" />}
        >
          {post.likes}
        </Button>
        <Button
          radius="full"
          size="sm"
          variant="light"
          startContent={<MessageCircle className="w-4 h-4" />}
        >
          {post.comments}
        </Button>
        <Button
          radius="full"
          size="sm"
          variant="light"
          startContent={<Share2 className="w-4 h-4" />}
        >
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
