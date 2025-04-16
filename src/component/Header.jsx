
const Header = () => {
    return (
      <div className="w-full">
        <div className="grid grid-cols-12 shadow-2xl">
          {/* Cột bên trái */}
          <div className="col-span-3">
            <h1 className= "text-3xl font-bold text-pink-500 p-5">DashBoard</h1>
          </div>
          <div className="col-span-9 justify-items-end">
            <ul className="flex">
                <li className="p-5"><input type="text" placeholder="Search..." className="border-1 border-blue-500 rounded w-[250px] h-[40px] " /></li>
                <li className="p-2 pt-[27px]"><img src="./Bell 1.png" alt="" /></li>
                <li className="p-2 pt-[27px]"><img src="./Question 1.png" alt="" /></li>
                <li className="p-2 pt-[20px]"><img src="./Avatar 313.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  