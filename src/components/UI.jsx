import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { PageNumber } from "./PageDesignSystem";

const pictures = [
  "muc-luc",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "15",
];

export const pageAtom = atom(0);
export const pages = [
  { front: "1", back: "2" },
  { front: "3", back: "4" },
  { front: "5", back: "6" },
  { front: "7", back: "8" },
  { front: "9", back: "10" },
  { front: "11", back: "12" },
  { front: "13", back: "15" },
];

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://lessons.wawasensei.dev/courses/react-three-fiber"
        >
          <img className="w-20" src="/images/wawasensei-white.png" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-red-900 text-amber-50 border-amber-400"
                    : "bg-red-900/50 text-amber-50 hover:bg-red-800"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-red-900 text-amber-50 border-amber-400"
                  : "bg-red-900/50 text-amber-50 hover:bg-red-800"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <PageNumber current={page + 1} total={pages.length + 1} />

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-amber-50 text-10xl font-black " style={{fontFamily: 'Georgia, serif'}}>
              KINH TẾ
            </h1>
            <h2 className="shrink-0 text-amber-50 text-8xl italic font-light" style={{fontFamily: 'Georgia, serif'}}>
              CHÍNH TRỊ
            </h2>
            <h2 className="shrink-0 text-amber-50 text-12xl font-bold" style={{fontFamily: 'Georgia, serif'}}>
              MARX
            </h2>
            <h2 className="shrink-0 text-amber-50 text-12xl font-bold italic" style={{fontFamily: 'Georgia, serif'}}>
              LENIN
            </h2>
            <h2 className="shrink-0 text-amber-50 text-9xl font-medium" style={{fontFamily: 'Georgia, serif'}}>
              Sách
            </h2>
            <h2 className="shrink-0 text-amber-50 text-9xl font-extralight italic" style={{fontFamily: 'Georgia, serif'}}>
              Học
            </h2>
            <h2 className="shrink-0 text-amber-50 text-13xl font-bold" style={{fontFamily: 'Georgia, serif'}}>
              Tập
            </h2>
            <h2 className="shrink-0 text-amber-50 text-13xl font-bold italic" style={{fontFamily: 'Georgia, serif'}}>
              Đọc
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-amber-50 text-10xl font-black " style={{fontFamily: 'Georgia, serif'}}>
              KINH TẾ
            </h1>
            <h2 className="shrink-0 text-amber-50 text-8xl italic font-light" style={{fontFamily: 'Georgia, serif'}}>
              CHÍNH TRỊ
            </h2>
            <h2 className="shrink-0 text-amber-50 text-12xl font-bold" style={{fontFamily: 'Georgia, serif'}}>
              MARX
            </h2>
            <h2 className="shrink-0 text-amber-50 text-12xl font-bold italic" style={{fontFamily: 'Georgia, serif'}}>
              LENIN
            </h2>
            <h2 className="shrink-0 text-amber-50 text-9xl font-medium" style={{fontFamily: 'Georgia, serif'}}>
              Sách
            </h2>
            <h2 className="shrink-0 text-amber-50 text-9xl font-extralight italic" style={{fontFamily: 'Georgia, serif'}}>
              Học
            </h2>
            <h2 className="shrink-0 text-amber-50 text-13xl font-bold" style={{fontFamily: 'Georgia, serif'}}>
              Tập
            </h2>
            <h2 className="shrink-0 text-amber-50 text-13xl font-bold italic" style={{fontFamily: 'Georgia, serif'}}>
              Đọc
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
