"use client"

import { useState } from 'react';
import TextWithLine from '../components/TextWithLine';
import Projects from '../components/Projects';
import Modal from '../components/Modal';
import '../styles/globals.css';

interface ProjectData {
  text: string;
  imageLink: string;
  description: string;
  developmentPeriod: string;
  teamMembers: string;
  deployUrl: string;
  githubUrl: string;
}

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projectData: ProjectData[] = [
    {
      text: 'PokeDict',
      imageLink: '/images/pokedict.png',
      description: '포켓몬 사전 웹 애플리케이션으로, 포켓몬의 다양한 정보를 제공합니다.',
      developmentPeriod: '2023.03 ~ 2023.06',
      teamMembers: '1명 (개인 프로젝트)',
      deployUrl: 'https://pokedict.example.com',
      githubUrl: 'https://github.com/username/pokedict',
    },
    {
      text: 'MZ 사전',
      imageLink: '/images/mzdict.png',
      description: 'MZ 세대의 용어를 쉽게 찾을 수 있는 사전입니다.',
      developmentPeriod: '2023.04 ~ 2023.07',
      teamMembers: '2명',
      deployUrl: 'https://mzdict.example.com',
      githubUrl: 'https://github.com/username/mzdict',
    },
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="flex flex-col w-full h-full">
      <TextWithLine text="PROJECT" />
      <div className="mb-10" />
      <div className="grid grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <Projects
            key={index}
            text={project.text}
            imageLink={project.imageLink}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
