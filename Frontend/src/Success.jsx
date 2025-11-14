function Success() {
  return (
    <>
      <div className="relative bg-black text-white min-h-screen p-4 space-y-4">
        <h1 className="text-red-600 font-bold text-3xl sm:text-4xl cursor-pointer">JOHN WICK</h1>
        <p className="text-red-500 text-lg sm:text-xl hover:underline cursor-pointer">Episode 1</p>
        <p className="text-sm sm:text-base text-slate-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus id pariatur,
          iure eligendi accusantium aliquam porro inventore dolores in quibusdam ratione
          quam fugiat veniam omnis. Tempora ea expedita alias sequi?
        </p>
        <button className="text-red-500 p-3 bg-gray-700 rounded-md hover:bg-gray-400">Play</button>

        
        <div className="w-full mt-4">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/422fde98670645.5ee1eef1b1ae1.jpg"
            alt="Episode Banner"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Success;