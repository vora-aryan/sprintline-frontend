const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-20 w-full flex items-center bg-gray-950 text-2xl py-8 px-8 justify-between my-navbar">
      <div className="text-amber-50 text-4xl px-4 rounded-2xl font-semibold">
        <button className="cursor-pointer">Sprintline</button>
      </div>
      <div className="flex gap-4">
        <div className="bg-gray-100 text-xl px-4 py-0.5 rounded-2xl">
          Sign Up
        </div>
        <div className="bg-gray-100 text-xl px-4 py-0.5 rounded-2xl">
          Contact Us
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
