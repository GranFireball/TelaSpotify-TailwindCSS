import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import imgPlaylist from './imgPlaylist.jpg';
export default function Main() {
    return (
        <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronRight />
                </button>
            </div>
            <h1 className="font-semibold text-2xl mt-9">
                Good Afternoon
            </h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <img src={imgPlaylist} alt="Imagem Álbum" width={96} height={96} />
                    <strong>Daily Mix</strong>
                    <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play/>
                    </button>
                </a>
                <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <img src={imgPlaylist} alt="Imagem Álbum" width={96} height={96} />
                    <strong>Daily Mix</strong>
                    <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play/>
                    </button>
                </a>
                <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <img src={imgPlaylist} alt="Imagem Álbum" width={96} height={96} />
                    <strong>Daily Mix</strong>
                    <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play/>
                    </button>
                </a>
                <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <img src={imgPlaylist} alt="Imagem Álbum" width={96} height={96} />
                    <strong>Daily Mix</strong>
                    <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play/>
                    </button>
                </a>
                <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <img src={imgPlaylist} alt="Imagem Álbum" width={96} height={96} />
                    <strong>Daily Mix</strong>
                    <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play/>
                    </button>
                </a>
                <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <img src={imgPlaylist} alt="Imagem Álbum" width={96} height={96} />
                    <strong>Daily Mix</strong>
                    <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play/>
                    </button>
                </a>
               
                </div>
                <h2 className="font-semibold text-xl mt-10">
                    Made For User
                </h2>
                <div className="grid grid-cols-8 gap-4 mt-4">
                    <a href="#" className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10">
                        <img src={imgPlaylist} alt="Imagem Álbum" width={120} height={120} className="w-full"/>
                        <strong className="font-semibold">Mix</strong>
                        <span className="text-sm text-zinc-400">Artista</span>
                    </a>
                    <a href="#" className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10">
                        <img src={imgPlaylist} alt="Imagem Álbum" width={120} height={120} className="w-full"/>
                        <strong className="font-semibold">Mix</strong>
                        <span className="text-sm text-zinc-400">Artista</span>
                    </a>
                    <a href="#" className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10">
                        <img src={imgPlaylist} alt="Imagem Álbum" width={120} height={120} className="w-full"/>
                        <strong className="font-semibold">Mix</strong>
                        <span className="text-sm text-zinc-400">Artista</span>
                    </a>
                    <a href="#" className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10">
                        <img src={imgPlaylist} alt="Imagem Álbum" width={120} height={120} className="w-full"/>
                        <strong className="font-semibold">Mix</strong>
                        <span className="text-sm text-zinc-400">Artista</span>
                    </a>
                    <a href="#" className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10">
                        <img src={imgPlaylist} alt="Imagem Álbum" width={120} height={120} className="w-full"/>
                        <strong className="font-semibold">Mix</strong>
                        <span className="text-sm text-zinc-400">Artista</span>
                    </a>
            </div>
        </main>
    );
}