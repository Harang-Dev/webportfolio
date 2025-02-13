import '../styles/globals.css';

export default function Footer() {
  return (
    <footer className="bg-[#373737] text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
