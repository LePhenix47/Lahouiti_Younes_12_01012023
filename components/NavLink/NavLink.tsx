//React
import { useRouter } from "next/router";

export default function NavLink({
  children,
  href,
}: {
  children: any;
  href: string;
}): JSX.Element {
  const router = useRouter();

  const linkIsActive: boolean = router.asPath === href;

  /* 
  
  */
  function pushHref(event: any): void {
    //Prevents the page from reloading when switching page
    event.preventDefault();

    //Redirets the user to the page they want to be in
    router.push(href);
  }

  return (
    <a
      href={href}
      onClick={pushHref}
      className={linkIsActive ? "active" : "inactive"}
    >
      {children}
    </a>
  );
}
