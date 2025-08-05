interface MenuSection {
  title: string;
  redirect: string;
}

export const sections: MenuSection[] = [
  {
    title: "Home",
    redirect: "/",
  },
  {
    title: "Services",
    redirect: "/services",
  },
  {
    title: "Projects",
    redirect: "/projects",
  },
  {
    title: "Reviews",
    redirect: "/reviews",
  },
  {
    title: "Blog",
    redirect: "/blog",
  },
  {
    title: "Contact",
    redirect: "/contact",
  },
];
