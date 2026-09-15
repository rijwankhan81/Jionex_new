export type NavItem = {
  id: string;
  title: string;
  link?: string;
  dropdown?: boolean;
  dynamic?: "technologies" | "services";
  children?: NavItem[];
};

export const navTreeEN: NavItem[] = [
  {
    id: "company",
    title: "Company",
    dropdown: true,
    children: [
      { id: "about", title: "About Us", link: "/about" },
      { id: "team", title: "Behind the Vision", link: "/team" },
      { id: "hire", title: "Careers", link: "/hire" },
      { id: "contact", title: "Contact Us", link: "/contact" },
      { id: "partner", title: "Partner With Us", link: "/partner-with-us" },
    ],
  },
  { id: "industries", title: "Industries", link: "/industries" },
  {
    id: "technologies",
    title: "Technologies",
    dropdown: true,
    dynamic: "technologies",
    link: "/technologies",
  },
  { id: "products", title: "Products", link: "/products" },
  { id: "projects", title: "Projects", link: "/projects" },
  {
    id: "services",
    title: "Services",
    dropdown: true,
    dynamic: "services",
    link: "/services",
  },
  { id: "clients", title: "Clients", link: "/clients" },
  { id: "blog", title: "Blog", link: "/blog" },
];

export const navTreeBN: NavItem[] = [
  {
    id: "company",
    title: "প্রতিষ্ঠান",
    dropdown: true,
    children: [
      { id: "about", title: "আমাদের সম্পর্কে", link: "/about" },
      { id: "team", title: "দর্শনের নেপথ্যে", link: "/team" },
      { id: "hire", title: "ক্যারিয়ার", link: "/hire" },
      { id: "contact", title: "যোগাযোগ করুন", link: "/contact" },
      {
        id: "partner",
        title: "আমাদের সাথে অংশীদার হোন",
        link: "/partner-with-us",
      },
    ],
  },
  { id: "industries", title: "শিল্পখাত", link: "/industries" },
  {
    id: "technologies",
    title: "প্রযুক্তিসমূহ",
    dropdown: true,
    dynamic: "technologies",
    link: "/technologies",
  },
  { id: "products", title: "পণ্যসমূহ", link: "/products" },
  { id: "projects", title: "প্রকল্পসমূহ", link: "/projects" },
  {
    id: "services",
    title: "সেবাসমূহ",
    dropdown: true,
    dynamic: "services",
    link: "/services",
  },
  { id: "clients", title: "ক্লায়েন্টস", link: "/clients" },
  { id: "blog", title: "ব্লগ", link: "/blog" },
];
export const navTreeAR: NavItem[] = [
  {
    id: "company",
    title: "الشركة",
    dropdown: true,
    children: [
      { id: "about", title: "من نحن", link: "/about" },
      { id: "team", title: "فريق الرؤية", link: "/team" },
      { id: "hire", title: "الوظائف", link: "/hire" },
      { id: "contact", title: "اتصل بنا", link: "/contact" },
      { id: "partner", title: "كن شريكاً معنا", link: "/partner-with-us" },
    ],
  },
  { id: "industries", title: "القطاعات", link: "/industries" },
  {
    id: "technologies",
    title: "التقنيات",
    dropdown: true,
    dynamic: "technologies",
    link: "/technologies",
  },
  { id: "products", title: "المنتجات", link: "/products" },
  { id: "projects", title: "المشاريع", link: "/projects" },
  {
    id: "services",
    title: "الخدمات",
    dropdown: true,
    dynamic: "services",
    link: "/services",
  },
  { id: "clients", title: "العملاء", link: "/clients" },
  { id: "blog", title: "المدونة", link: "/blog" },
];

export const navTreeES: NavItem[] = [
  {
    id: "company",
    title: "Empresa",
    dropdown: true,
    children: [
      { id: "about", title: "Sobre Nosotros", link: "/about" },
      { id: "team", title: "Detrás de la Visión", link: "/team" },
      { id: "hire", title: "Carreras", link: "/hire" },
      { id: "contact", title: "Contáctanos", link: "/contact" },
      {
        id: "partner",
        title: "Asóciate con Nosotros",
        link: "/partner-with-us",
      },
    ],
  },
  { id: "industries", title: "Industrias", link: "/industries" },
  {
    id: "technologies",
    title: "Tecnologías",
    dropdown: true,
    dynamic: "technologies",
    link: "/technologies",
  },
  { id: "products", title: "Productos", link: "/products" },
  { id: "projects", title: "Proyectos", link: "/projects" },
  {
    id: "services",
    title: "Servicios",
    dropdown: true,
    dynamic: "services",
    link: "/services",
  },
  { id: "clients", title: "Clientes", link: "/clients" },
  { id: "blog", title: "Blog", link: "/blog" },
];
