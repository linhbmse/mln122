import { atom, useAtom } from "jotai";
import { useEffect } from "react";

// Auto-generate pages from image files: 1.png to 20.png
export const pageAtom = atom(0);

// Create page pairs: [1,2], [3,4], [5,6], etc.
export const pages = [
  { front: "1", back: "muc-luc" },
  {front: "member", back: "2"},
  { front: "3", back: "4" },
  { front: "5", back: "6" },
  { front: "7", back: "8" },
  { front: "9", back: "10" },
  { front: "11", back: "12" },
  { front: "13", back: "14" },
  { front: "15", back: "16" },
  { front: "17", back: "18" },
  { front: "19", back: "ai" },
  { front: "20", back: "thanks" },
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
          
        </a>
      </main>
    </>
  );
};
