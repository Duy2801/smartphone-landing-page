export const siteConfig = {
  name: "Astra X1",
  shortName: "Astra X1",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "vi_VN",
  language: "vi",
  title: "Astra X1 | Smartphone AI thế hệ mới",
  description:
    "Khám phá Astra X1 với camera AI, màn hình 120Hz, hiệu năng mạnh mẽ và pin dùng trọn ngày.",
  keywords: [
    "Astra X1",
    "smartphone AI",
    "điện thoại thông minh",
    "camera AI",
    "màn hình 120Hz",
    "smartphone 5G",
  ],
  creator: "Healthy Living Corporation",
  publisher: "Healthy Living Corporation",
  themeColor: "#2563eb",
  backgroundColor: "#060914",
  ogImage: "/opengraph-image",
};

export const getSiteUrl = (path = "") => {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
};
