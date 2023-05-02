import Header from "../../components/NavigationBar";
import Hero, { HeroTitle, HeroSubtitle } from "../../components/Hero";
import "../../styles/highlight.css";
import "../../styles/globals.css";
import Head from "../head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body className="relative flex h-full w-screen overscroll-none flex-col items-center justify-center overflow-y-scroll bg-gradient-to-br from-zinc-900 to-zinc-950 text-zinc-200">
        <div className="fixed top-0 -z-50 h-screen w-full">
          <div className="absolute  -top-[700px] left-72 right-10 h-[800px] w-full overflow-hidden max-w-[800px] self-center rounded-full bg-zinc-300/10 blur-3xl filter" />
          <div className="absolute  -top-16 right-1/2 h-[800px] w-full max-w-[800px] rounded-full bg-zinc-700/10 blur-3xl filter" />
          <div className=" absolute -bottom-16 -right-16  h-[500px] w-full max-w-[500px] rounded-full bg-zinc-400/10 blur-3xl filter" />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
