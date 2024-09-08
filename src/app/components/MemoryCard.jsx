export default function MemoryCard({ title, names, img, prize}) {
    return (
        <div className="box-border-black h-80 w-full max-w-xs border-custom border-black bg-[#FBD6EA] shadow-custom mx-auto mb-24">
            <div className="border-b border-black h-8 p-px flex items-center justify-between bg-[#8378f7]">
                <div className="p-2 flex">
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black"></div>
                </div>
            </div>

            <div className="flex items-center justify-center h-72">
                {img ? (
                    <img src={img} alt={title} className="h-full w-full object-cover" />
                ) : (
                    <div className="text-center font-pixeboy">
                        <h1 className="text-3xl mb-2">{title}</h1>
                        {names && names.length > 0 && (
                            <div className="space-y-2 text-xl">
                                {names.map((name, index) => (
                                    <h2 key={index} className="text-md">{name}</h2>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <h1 class="mt-8 text-3xl text-center font-pixeboy">{prize}</h1>
        </div>
    );
}
