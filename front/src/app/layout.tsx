'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // 추가
import Footer from './components/Footer';
import Header from './components/Header';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        <title>My Website</title>
      </head>
      <body className="flex flex-col h-full">
        <Header />
        <main
          style={{ height: '80vh' }}
          className="flex-grow w-full px-48 sm:px-42 md:px-64 xl:px-48 bg-[#373737] flex"
        >
          <div className="flex">
            <section style={{ width: '43%' }} className="h-80vh mr-20">
              <img
                src="/images/sakura.jpeg"
                className="w-full h-full object-cover"
                alt="sakura"
              />
            </section>
            <section style={{ width: '57%' }} className="w-3/5 h-80vh">
              <div className="w-full h-full flex flex-col">
                {/* QueryClientProvider로 children을 감싸서 useQuery를 사용할 수 있도록 설정 */}
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
