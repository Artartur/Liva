import { navItems } from "@/app/utils/routes";

export default function Navigation() {
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
    <nav className="hidden xl:flex">
      <ul className="row space-x-8">
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
