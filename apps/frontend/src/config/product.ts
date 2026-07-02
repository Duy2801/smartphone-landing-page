export const product = {
  id: "iphone-17",
  name: "iPhone 17",
  eyebrow: "iPhone 17 · Mới",
  headline: "Rực rỡ hơn. Mượt mà hơn. Đáng yêu từ cái nhìn đầu tiên.",
  description:
    "iPhone 17 kết hợp màn hình Super Retina XDR 6,3 inch với ProMotion 120Hz, hệ thống camera 48MP Dual Fusion và chip A19 mạnh mẽ trong thiết kế nhôm thanh lịch.",
  priceLabel: "Dung lượng từ 256GB",
  primaryCta: { label: "Nhận tư vấn", href: "#newsletter" },
  secondaryCta: { label: "Khám phá iPhone 17", href: "#features" },
  badges: ["A19", "ProMotion 120Hz", "48MP Dual Fusion", "Apple Intelligence"],
  highlights: [
    { label: "6,3 inch", description: "Super Retina XDR" },
    { label: "30 giờ", description: "Xem video tối đa" },
    { label: "256GB", description: "Dung lượng khởi điểm" },
  ],
} as const;

export const chatbotFaq = [
  {
    keywords: ["giá", "bao nhiêu", "chi phí"],
    answer: "Giá iPhone 17 thay đổi theo dung lượng và chương trình ưu đãi. Hãy để lại email để nhận báo giá và tư vấn mới nhất.",
  },
  {
    keywords: ["pin", "sạc", "thời lượng"],
    answer: "iPhone 17 cho thời gian xem video lên đến 30 giờ và có thể sạc đến 50% trong khoảng 20 phút với bộ tiếp hợp 40W trở lên.",
  },
  {
    keywords: ["camera", "chụp ảnh", "video"],
    answer: "Máy có hệ thống camera 48MP Dual Fusion, camera trước 18MP Center Stage và quay video 4K Dolby Vision.",
  },
  {
    keywords: ["màn hình", "120hz", "promotion"],
    answer: "Màn hình Super Retina XDR 6,3 inch hỗ trợ ProMotion thích ứng lên đến 120Hz và độ sáng ngoài trời tối đa 3.000 nit.",
  },
] as const;

export const cameraStory = [
  {
    title: "Hai camera Fusion, nhiều góc nhìn sáng tạo.",
    description: "Camera chính 48MP ghi lại chi tiết sắc nét, đồng thời mang đến Telephoto 2x chất lượng quang học ngay trong một camera.",
    stat: "48MP",
    label: "Dual Fusion",
  },
  {
    title: "Rộng hơn cho phong cảnh và ảnh macro.",
    description: "Camera Ultra Wide 48MP mở rộng trường ảnh 120° và cho phép tiến gần chủ thể để lưu lại những chi tiết nhỏ.",
    stat: "120°",
    label: "Ultra Wide",
  },
  {
    title: "Selfie nhóm tự nhiên hơn với Center Stage.",
    description: "Camera trước 18MP tự động điều chỉnh khung hình, hỗ trợ selfie nhóm và Ghi Hình Kép tiện lợi.",
    stat: "18MP",
    label: "Center Stage",
  },
] as const;

export const performanceStats = [
  { label: "Chip", value: "A19", description: "CPU 6 lõi mạnh mẽ" },
  { label: "GPU", value: "5 lõi", description: "Có Neural Accelerators" },
  { label: "Pin", value: "30h", description: "Xem video tối đa" },
] as const;

export const designHighlights = [
  "Màn hình OLED Super Retina XDR 6,3 inch",
  "Mặt trước Ceramic Shield 2 chống trầy xước tốt hơn",
  "Thiết kế nhôm, mặt sau kính pha màu tinh tế",
  "Kháng nước và bụi chuẩn IP68",
  "Năm màu: Đen, Trắng, Xanh Lam Khói, Xanh Lá Xô Thơm và Tím Oải Hương",
] as const;
