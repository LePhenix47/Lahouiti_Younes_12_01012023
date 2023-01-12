//React
import { useRouter } from "next/router";

export default function NavLink({ children, href }: any): any {
  const router = useRouter();

  const linkIsActive: boolean = router.asPath === href;

  function pushHref(event: any) {
    event.preventDefault();

    //Redirets the user to the page they want to be in
    router.push(href);
  }

  return (
    <a href={href} onClick={pushHref} className={linkIsActive ? "active" : ""}>
      {children}
    </a>
  );
}
