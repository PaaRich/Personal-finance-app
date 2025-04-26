import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Pagination = ({ totalPages, limit,paginate }: { totalPages: number,limit:number,paginate:(n:number)=>void}) => {
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(totalPages / limit); i++) {
    pageNum.push(i);
  };
  console.log("pages", pageNum,"totalpages",totalPages,"limit", limit)
  
  
  // const prev = pageNum[page-1]
  // console.log("prev", prev, page,"page")

  return (
    <div className="flex items-center justify-between mt-5 w-full">

          <div className="py-2 px-3 border-2 bg-transparent rounded-[10px] flex items-center justify-around w-auto  hover:bg-[#93674f] hover:text-white duration-200 cursor-pointer " onClick={()=>console.log('next')}><IoMdArrowDropleft size={25}/>
            <p className="max-md:hidden">Prev</p>
          </div>

      <div className=" flex items-center justify-between lg:gap-x-2">
        {pageNum.map((item)=>(
          <span className="rounded-[10px] cursor-pointer py-2 px-3 text-lg hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]" key={item} onClick={()=>paginate(item)}>{item}</span>
        ))}
            {/* <span className="rounded-[10px] cursor-pointer py-2 px-3 text-lg hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#312a26]" onClick={()=>{console.log("hello")}}>1</span>
            <span className="rounded-[10px] cursor-pointer py-2 px-3 text-lg hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]" onClick={()=>{console.log("hello")}}>2</span>
            <span className="rounded-[10px] cursor-pointer py-2 px-3 text-lg hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]" onClick={()=>{console.log("hello")}}>3</span>
            <span className="rounded-[10px] cursor-pointer py-2 px-3 text-lg hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]" onClick={()=>{console.log("hello")}}>4</span>
            <span className="rounded-[10px] cursor-pointer py-2 px-3 text-lg hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]  " onClick={()=>{console.log("hello")}}>5</span> */}
          </div>

          <div className="py-2 px-3 border-2 bg-transparent rounded-[10px] flex items-center justify-around w-auto hover:bg-[#93674f] hover:text-white duration-200 cursor-pointer" onClick={()=>console.log("hello")}>
            <p className="max-md:hidden">Next</p>
            <IoMdArrowDropright size={25} />
          </div>

        </div>
  )
}

export default Pagination