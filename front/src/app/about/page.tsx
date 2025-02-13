import TextWithLine from '../components/TextWithLine';
import '../styles/globals.css';

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full gap-5 overflow-auto hide-scrollbar">
      <TextWithLine text="ABOUT ME" />
      <span>안녕하세요. 프론트엔드 개발자가 되고싶은 서현우입니다. 요즘은 Typscript 와 Next.js를 학습하고 있습니다.</span>
      <TextWithLine text="EDUCATION" />
      <ul style={{ listStyle: 'circle' }} className="list-inside ml-4">
        <li className="mb-4">2023.12 ~ 2024.04 멀티캠퍼스 개발자 취업캠프(6기) 수료</li>
        <li className="mb-4">2023.07 ~ 2023.07 SW Pioneer Program at USC 3기 수료</li>
        <li>2017.03 ~ 2024.02 동명대학교(디지털콘텐츠학과) 졸업</li>
      </ul>
      <TextWithLine text="CERTIFICATE" />
      <ul style={{ listStyle: 'circle' }} className="list-inside ml-4">
        <li className="mb-4">2018.06 자동차 운전면허(1종 보통)</li>
        <li className="mb-4">2009.12 컴퓨터 활용능력(2급)</li>
        <li>2009.02 워드프로세서(1급)</li>
      </ul>
      <TextWithLine text="SKILLS" />
      <ul style={{ listStyle: 'circle' }} className="list-inside ml-4 w-1/2">
        <li className="mb-4">Front-End</li>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <img src="/images/html.png" alt="HTML" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/css.png" alt="CSS" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/js.png" alt="JS" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <img src="/images/ts.png" alt="TS" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '60%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/sc.png" alt="Styled-Components" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '90%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/antd.png" alt="Antd" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <img src="/images/react.png" alt="REACT" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/next.jpeg" alt="NEXTJS" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '60%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>

        <li className="mb-4">Design</li>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <img src="/images/figma.png" alt="FIGMA" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>

        <li className="mb-4">Collaboration Tools</li>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <img src="/images/github.png" alt="GITHUB" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/notion.png" alt="NOTION" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '90%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/slack.png" alt="SLACK" className="w-16 h-16 mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '90%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
