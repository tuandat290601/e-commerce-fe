import HomePoster from "@/assets/images/static/home-poster.jpg";
import Image from "next/image";

const Main = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="relative flex min-h-screen w-full items-center justify-between bg-white dark:bg-black sm:items-start">
        <Image
          src={HomePoster}
          alt="home-poster.jpg"
          fill
          className="object-cover"
          priority
        />
      </main>
    </div>
  );
};

export default Main;
