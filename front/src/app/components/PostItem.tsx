import Link from 'next/link';

interface PostItems {
  title: string;
  writer: string;
}

export default function PostItem({ title, writer }: PostItems) {
  return (
      <div className="flex justify-between items-center bg-white text-black p-2 mb-5 cursor-pointer">
        <span>{title}</span>
        <span>{writer}</span>
      </div>
  );
}
