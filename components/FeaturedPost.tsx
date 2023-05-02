"use client";
import RecentPost from "./molecules/RecentPost";
import { useMouse } from "@mantine/hooks";
import Post from "./molecules/Post";
import { useEffect, useRef, useState } from "react";

interface FeaturedPostProps {
  post: { title: string };
}

function FeaturedPost(props: FeaturedPostProps) {
  const { ref, x, y } = useMouse();
  const [cards, setCards] = useState<Array<HTMLElement>>([]);

  const onMouseMove = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      cards.forEach((card) => {
        const cardX = -(card.getBoundingClientRect().left - rect.left) + x;
        const cardY = -(card.getBoundingClientRect().top - rect.top) + y;
        card.style.setProperty("--mouse-x", `${cardX}px`);
        card.style.setProperty("--mouse-y", `${cardY}px`);
      });
    }
  };

  useEffect(() => {
    ref.current &&
      setCards(Array.from(ref.current.children).map((el) => el as HTMLElement));
  }, []);

  useEffect(() => {
    onMouseMove();
  }, [x, y]);

  const gradientEffect =
    "relative bg-zinc-800 rounded-lg p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-indigo-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.zinc.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden";
  return (
    <div
      className="flex flex-col sm:grid md:grid-cols-5 md:grid-rows-20 w-full max-w-6xl gap-2 md:gap-3 "
      ref={ref}
    >
      <RecentPost
        title="Et enim qui consequat in aute nisi commodo ad sint."
        className={`card col-span-3 row-span-2 card ${gradientEffect}`}
        excerpt="Anim id nulla cupidatat aliquip eu adipisicing irure sint aliquip. Ipsum consectetur incididunt amet exercitation occaecat non quis anim nisi reprehenderit voluptate anim fugiat id tempor."
        tags={["TailwindCSS", "ReactJS"]}
      />
      <Post
        title="Pariatur occaecat et eiusmod voluptate amet tempor ex labore."
        className="col-span-2 row-span-1"
      />
      <Post title="Aliquip eu enim ex nulla et nostrud nulla est." />
      <Post title="Nostrud tempor esse tempor consectetur." />
      <Post title="Cillum non amet irure." className={`col-span-2`} />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." className={`row-span-2`} />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." className="row-span-2" />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." className="col-span-2" />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." />
      <Post title="Cillum non amet irure." />
    </div>
  );
}

export default FeaturedPost;
