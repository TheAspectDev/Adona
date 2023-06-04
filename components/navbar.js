export default function Navbar({ children }) {
  return (
    <nav className={`flex h-24 w-full  items-center`}>
      <div className={`m-5 mb-2 ml-[5%] mr-[5%] flex w-full justify-between`}>
        {children}
      </div>
    </nav>
  );
}
