export const siteConfig = {
  name: "iPhone 17",
  shortName: "iPhone 17",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "vi_VN",
  language: "vi",
  title: "iPhone 17 | ProMotion 120Hz, camera 48MP, chip A19",
  description:
    "Khám phá iPhone 17 với màn hình Super Retina XDR 6,3 inch ProMotion 120Hz, camera 48MP Dual Fusion, chip A19 và pin dùng cả ngày.",
  keywords: [
    "iPhone 17",
    "Apple iPhone 17",
    "camera 48MP Dual Fusion",
    "ProMotion 120Hz",
    "chip A19",
    "iPhone 17 256GB",
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
