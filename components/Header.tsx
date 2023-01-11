import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src="https://cdn0.iconfinder.com/data/icons/black-cat-emoticon-filled/64/cute_cat_kitten_face_per_avatar-26-512.png"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link href="/" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full">Sign up to our mailing list</Link>
      </div>
    </header>
  );
}

export default Header;
