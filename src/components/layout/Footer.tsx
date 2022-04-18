import { HeartIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <div className="py-8 text-slate-400 flex text-center justify-center">
      <div>Made with</div>
      <HeartIcon className="mx-1 inline h-5 w-5 text-red-400" />
      <div>
        <span>by </span>
        <a href="https://github.com/yourblockchaindev" className="hover:underline">yourblockchaindev</a>
      </div>
    </div>
  );
}

export default Footer;
