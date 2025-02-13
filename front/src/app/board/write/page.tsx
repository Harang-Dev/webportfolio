import '../../styles/globals.css'

export default function Page() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <h1>자유 게시판</h1>
        <br />
        <div className='flex justify-between items-center'>
          <form className="w-full space-y-4">
            <div>
              <label htmlFor="title" className="block text-lg">제목</label>
              <input
                id="title"
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="제목을 입력하세요"
              />
            </div>
            <div>
              <label htmlFor="writer" className="block text-lg">작성자</label>
              <input
                id="writer"
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="작성자를 입력하세요"
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-lg">내용</label>
              <textarea
                id="content"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="내용을 입력하세요"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
            >
              글쓰기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
