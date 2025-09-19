import { navItems } from "@/app/utils/routes";
import { SocialIcons } from "./SocialMedia";
import { WhatsappButton } from "../utils/Buttons";

export default function Sidebar({ closeSidebar }: { closeSidebar: () => void }) {
  return (
    <aside>
      <nav className="absolute col w-full top-21 right-0 bg-white space-y-5 pt-6 px-6 z-50 *:w-full *:font-medium xl:hidden"
        style={{ height: 'calc(100vh - 84px - 84px)' }}
      >
        <ul className="space-y-5 text-lg">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="w-full font-medium"
              onClick={closeSidebar}
            >
              <a
                href={`#${item.id}`}
                className="py-2 hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="space-y-2.5">
          <p>Acompanhe nas redes</p>
          <SocialIcons />
        </div>
      </nav>

      <div className="absolute flex-center h-[84px] w-full bg-[#F2F2F2] bottom-0 left-0 text-xs xl:hidden">
        <WhatsappButton
          height="46"
          width="311"
          style={{ width: '80%' }}
        />
      </div>
    </aside>
  )
}
