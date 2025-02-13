"use client"
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import PostItem from '../components/PostItem';
import { postDetail } from '../utlis/api';
import '../styles/globals.css';

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['게시글 정보'],
    queryFn: postDetail,
  });

  const router = useRouter();

  const handlePostClick = () => {
    router.push({
      pathname: '/board/detail',
      query: { data },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading posts.</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1>자유 게시판</h1>
        <br />
        <div className="flex justify-between items-center">
          <span>방문해주신 모든분들께 감사드립니다. 자유로운 의견을 남겨주세요.</span>
          <button className="bg-[#8861E4] text-white px-4 py-2 rounded-md">
            글쓰기
          </button>
        </div>
        <div>
          {data && data.map((post: any) => (
            <div key={post.id} onClick={() => handlePostClick()}>
              <PostItem
                title={post.title}
                writer={post.writer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
