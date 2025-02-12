import { useRef } from "react";


const Detail = ({ editFn, delFn, name}: { editFn: () => void; delFn: () => void; name: string; setState: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const detailRef = useRef(null);

    // useEffect(() => {
    //     const handleOutsideClick = (event:React.MouseEvent) => {
    //         if (!detailRef.current.contains(event.target)) {
    //             setState(false)
    //         };
    //     }
    //     document.addEventListener('click', handleOutsideClick);
        
    //     return () => {
    //   document.removeEventListener("mousedown", handleOutsideClick);
    // }
    // },[])
  return (
      <div className="bg-white rounded-2xl p-5 absolute top-6 right-5 shadow-lg z-50" ref={detailRef}>
          <div className="cursor-pointer border-b-2 border-b-[var(--light-grey)] pb-3 hover:text-gray-500" onClick={editFn}>Edit { name }</div>
          <div className="pt-3 cursor-pointer text-red-300 hover:text-red-500" onClick={delFn}>Delete { name}</div>
    </div>
  )
}

export default Detail