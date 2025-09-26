import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  // SNS 링크들
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/daeguhiphop",
    external: true,
  },
  {
    label: "YOUTUBE",
    href: "https://www.youtube.com/@daeguhiphop",
    external: true,
  },
  {
    label: "FACEBOOK",
    href: "https://www.facebook.com/daeguro/?locale=ko_KR",
    external: true,
  },
  {
    label: "STORE",
    href: "https://smartstore.naver.com/daeguhiphop",
    external: true,
  },

  // 내부 페이지들
  { label: "PROGRAM", href: "/program" },
  { label: "GALLERY", href: "/gallery" },
  { label: "INFORMATION", href: "/information" },

  // 특수 기능들
  { label: "TICKETS", href: "#tickets" },
];
