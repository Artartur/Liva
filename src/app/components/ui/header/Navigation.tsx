import { navItems } from "@/app/utils/routes";

export default function Navigation({ navClassName, ulClassName }: { navClassName: string; ulClassName: string }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={navClassName}>
      <ul className={ulClassName}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="hover:text-primary cursor-pointer text-sm font-medium"
              type="button"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
