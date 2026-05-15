interface MenuSection {
  title: string;
  redirect: string;
  children?: { title: string; redirect: string; subtitle?: string }[];
}

export const sections: MenuSection[] = [
  { title: "Home", redirect: "/" },
  {
    title: "Services",
    redirect: "/services",
    children: [
      { title: "Siding", redirect: "/services#siding", subtitle: "Replacement & Repair" },
      { title: "Roof", redirect: "/services#roof", subtitle: "Installation & Replacement" },
      { title: "Windows", redirect: "/services#windows", subtitle: "Energy-Efficient Install" },
      { title: "Kitchen", redirect: "/services#kitchen", subtitle: "Custom Design & Install" },
      { title: "Bathrooms", redirect: "/services#bathrooms", subtitle: "Elegant Renovations" },
    ],
  },
  {
    title: "Locations",
    redirect: "/locations",
    children: [
      { title: "Queens", redirect: "/locations#queens", subtitle: "Richmond Hill & more" },
      { title: "Brooklyn", redirect: "/locations#brooklyn", subtitle: "Williamsburg, Park Slope & more" },
      { title: "Bronx", redirect: "/locations#bronx", subtitle: "Riverdale, Throggs Neck" },
      { title: "Staten Island", redirect: "/locations#staten-island", subtitle: "New Dorp & surrounding" },
      { title: "Nassau County", redirect: "/locations#nassau", subtitle: "Garden City, Long Beach & more" },
      { title: "Westchester", redirect: "/locations#westchester", subtitle: "Yonkers & lower Westchester" },
    ],
  },
  { title: "Projects", redirect: "/projects" },
  { title: "Reviews", redirect: "/reviews" },
  { title: "Blog", redirect: "/blog" },
  { title: "Contact", redirect: "/contact" },
];
