const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} A.S.P.I.R.E Club. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">
          Fostering Innovation in Artificial Intelligence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
