import { Feed } from '@/components/posts/Feed';

export default function FeedPage() {
  return (
    <div className="min-h-screen ">
      <header className=" shadow">
        {/* <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold ">New</h1>
        </div> */}
      </header>
      <main>
        <div className="w-full mx-auto py-6 sm:px-6 lg:px-8">
          <Feed />
        </div>
      </main>
    </div>
  );
}
