export default function MemoryCard({ title, names, img, prize}) {
    return (
        <div className="box-border h-80 w-full max-w-xs border-custom border-black bg-container-bg shadow-custom mx-auto mb-24">
            <div className="border-b border-black h-8 p-px flex items-center justify-between bg-top-bg">
                <div className="p-2 flex">
                    <div className="w-3 h-3 bg-circle-bg rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-circle-bg rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-circle-bg rounded-full border border-black"></div>
                </div>
            </div>

            <div className="flex items-center justify-center h-72">
                {img ? (
                    <img src={img} alt={title} className="h-full w-full object-cover" />
                ) : (
                    <div className="text-center font-pixeboy">
                        <h1 className="text-2xl mb-2">{title}</h1>
                        {names && names.length > 0 && (
                            <div className="space-y-2">
                                {names.map((name, index) => (
                                    <h2 key={index} className="text-md">{name}</h2>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <h1 class="mt-8 text-xl text-center">{prize}</h1>
        </div>
    );
}
