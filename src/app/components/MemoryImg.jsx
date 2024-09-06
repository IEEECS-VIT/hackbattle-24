export default function MemoryImg(){
    return (
    <div className="m-4 box-border h-96 w-full border-custom border-black bg-[#FBD6EA] shadow-custom mx-auto mb-24">
    <div className="border-b border-black h-8 p-px flex items-center justify-between bg-[#8378f7]">
        <div className="p-2 flex">
            <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black mr-1.5"></div>
            <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black mr-1.5"></div>
            <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black"></div>
        </div>
    </div>

    <div className="flex items-center justify-center h-88">
            {/* <img src={img} alt='img' className="h-full w-full object-cover" /> */}
    </div>
</div>)
}