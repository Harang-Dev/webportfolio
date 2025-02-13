"use client";

import '../../styles/globals.css'

export default function Page() {
    const handleGoBack = ():void => {
        window.history.back();
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <h1>자유 게시판</h1>
                <br />
                <div className='flex flex-col min-h-[30vh] justify-between items-center bg-white p-6 border border-gray-300 rounded-lg p-10'>
                    <h2 className='text-2xl font-semibold text-black'>게시글 제목</h2>
                    <span className='text-lg text-gray-600'>작성자: 홍길동</span>
                    <div>
                        <p className='text-lg text-gray-800'>
                            여기에 게시글 내용이 들어갑니다. 게시글에 대한 상세한 설명이나 내용은 여기에 작성할 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
            <button 
                onClick={handleGoBack} 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
            >
                뒤로가기
            </button>
        </div>
    );
}
