"use client"


interface ModalProps {
    project: {
      text: string;
      imageLink: string;
      description: string;
      developmentPeriod: string;
      teamMembers: string;
      deployUrl: string;
      githubUrl: string;
    };
    onClose: () => void;
  }
  
  const Modal = ({ project, onClose }: ModalProps) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
        <div className="bg-white p-8 rounded-lg relative w-[80%] sm:w-[60%] transform transition-transform duration-500 scale-95 sm:scale-100">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-xl text-gray-600"
          >
            &times;
          </button>
          <h2 className="text-2xl mb-4">{project.text}</h2>
          <img
            src={project.imageLink}
            alt={project.text}
            className="object-contain w-full h-64 mb-4"
          />
          <div className="mb-4">
            <h3 className="font-semibold">0 프로젝트 소개</h3>
            <p>{project.description}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">0 개발 기간</h3>
            <p>{project.developmentPeriod}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">0 개발 인원</h3>
            <p>{project.teamMembers}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">0 배포 URL</h3>
            <p>
              <a href={project.deployUrl} target="_blank" className="text-blue-500">
                {project.deployUrl}
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">0 Github</h3>
            <p>
              <a href={project.githubUrl} target="_blank" className="text-blue-500">
                {project.githubUrl}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  