interface TextWithLineProps {
    text: string;
  }
  
  export default function TextWithLine({ text }: TextWithLineProps) {
    return (
      <div className="flex items-center">
        <span className="text-lg font-bold mr-4">{text}</span>
        <div className="flex-grow border-t-2 border-white" />
      </div>
    );
  }
  