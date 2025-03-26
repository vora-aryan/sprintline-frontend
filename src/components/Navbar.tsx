const Navbar = () => {
  return (
    <>
      <nav className="h-10 flex items-center justify-center bg-gray-950 gap-4 text-2xl py-8">
        <div className="bg-gray-100 px-4 rounded-2xl">
          <button>Home</button>
        </div>
        <div className="bg-gray-100 px-4 rounded-2xl">
          <button>About</button>
        </div>
        <div className="bg-gray-100 px-4 rounded-2xl">
          <button>Contact</button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
