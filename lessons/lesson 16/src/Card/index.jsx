const Card = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-96 h-[500px] border border-blue-500 rounded-md  overflow-hidden">
        <img   className= " w-full"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYvs5arsp3PA8-XCi7bsP-Ms1eiikfBZzvQ&s" alt="" />
       <h1 className="text-[26] text-center font-[900]" >IMG Worlds of Adventure</h1>
       <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos illum expedita incidunt inventore labore quo facere temporibus repellendus autem?</p>
<button className="px-4 py-2 border border-red-500  rounded-md hover:cursor-pointer">Follow</button>
<button className="px-4 py-2 border border-gray-500  rounded-md hover:cursor-pointer" >UnFollow</button>
      </div>
    </div>
  );
};

export default Card;
