import { HeartIcon } from "@heroicons/react/solid";
import { FaGithub } from "react-icons/fa";

const hoverKlass = "hover:underline hover:text-slate-600"

function Footer() {
  return (
    <div className="py-8 text-slate-400 text-sm flex justify-between">
      <div className="flex justify-center">
        <div>Made with</div>
        <HeartIcon className="mx-1 inline h-5 w-5 text-red-400" />
        <div>
          <span>by </span>
          <a
            href="https://github.com/yourblockchaindev"
            className={hoverKlass}
          >
            yourblockchaindev
          </a>
        </div>
      </div>
      <div className="flex">
        <div>
          <a className={hoverKlass} href="https://github.com/yourblockchaindev/pokt-compare">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;