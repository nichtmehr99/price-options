import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const routes = [
    { name: "Home", path: "/", key: "home" },
    { name: "About", path: "/about", key: "about" },
    { name: "Services", path: "/services", key: "services" },
    { name: "Contact", path: "/contact", key: "contact" },
    { name: "Blog", path: "/blog", key: "blog" },
  ];

  return (
    <nav>
      <AiOutlineMenu className="text-2xl md:hidden"></AiOutlineMenu>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
