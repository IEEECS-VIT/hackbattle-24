import MemoryCard from "../components/MemoryCard";
import MemoryImg from "../components/MemoryImg";


export default function Memories() {
    const memoryCards = [
        {
            title: "BALDEV THE DESTROYERS",
            names: [
                "AYUSH SINGH",
                "DIVYANSHU MAHTO",
                "MALAY TIWARI",
                "ANUBHAV SAXENA",
                "AMAN SINGH",
                "RITIK GARG"
            ],
            prize: "1st PRIZE"
        },
        {
            title: "META MINDS",
            names: [
                "SOHAM GHUGARE",
                "RAHUL KHATRI",
                "SAIPRASAD PANIDILWAR",
                "GARVIT JOSHI",
                "VRISHANK PANDIT"
            ],
            prize: "2nd PRIZE"
            
        },
        {
            title: "CANDOR",
            names: [
                "ADITYA CHAUBEY",
                "NEEL LOKHANDWALA",
                "REYANSH ASHOK"
            ],
            prize: "3rd PRIZE"
        },
        {
            title: "Q&BIT",
            names: [
                "AGAM SRIVASTAVA",
                "K. GOURAV",
                "ADITYA PANIGRAHY",
                "PRATEEK KUMAR",
                "SAKSHI UPADHYAYA"
            ],
            prize: "BEST PRODUCT"
        }
    ];

    return (
        <div className="p-2 min-h-screen bg-memories-bg bg-cover bg-center flex flex-col">
            <h1 className="mt-16 mb-24 text-6xl text-center text-white">MEMORIES</h1>
            <div className="flex flex-wrap justify-between p-4 flex-grow">
                {memoryCards.map((card, index) => (
                    <div className="w-full sm:w-1/2 md:w-1/4" key={index}>
                        <MemoryCard
                            title={card.title}
                            names={card.names}
                            prize={card.prize}
                        />
                    </div>
                ))}
            </div>

            <div className="p-8">
            <MemoryImg></MemoryImg>
            </div>
            
        </div>
    );
}
