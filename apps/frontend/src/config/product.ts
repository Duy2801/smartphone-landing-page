export const product = {
  name: "Astra X1",
  eyebrow: "Smartphone AI cao cấp",
  headline: "Mỏng nhẹ hơn. Thông minh hơn. Sẵn sàng cho mọi khoảnh khắc.",
  description:
    "Astra X1 kết hợp camera AI, màn hình AMOLED 120Hz, hiệu năng 5G và pin dùng trọn ngày trong một thiết kế flagship tinh gọn.",
  priceLabel: "Dự kiến từ 18.990.000đ",
  primaryCta: {
    label: "Đăng ký nhận tin",
    href: "#newsletter",
  },
  secondaryCta: {
    label: "Khám phá tính năng",
    href: "#features",
  },
  badges: ["AI Camera", "AMOLED 120Hz", "Pin 5000mAh", "5G"],
  highlights: [
    {
      label: "108MP",
      description: "Camera AI",
    },
    {
      label: "120Hz",
      description: "AMOLED Pro",
    },
    {
      label: "30 phút",
      description: "Sạc nhanh 70%",
    },
  ],
} as const;

export const cameraStory = [
  {
    title: "Đêm thành phố vẫn rõ từng lớp sáng.",
    description:
      "Thuật toán AI Night Fusion ghép nhiều khung hình để giữ vùng sáng, phục hồi vùng tối và giảm nhiễu mà không làm ảnh bệt màu.",
    stat: "2.4x",
    label: "Thu sáng tốt hơn",
  },
  {
    title: "Chân dung tự nhiên, tách nền mềm.",
    description:
      "Cảm biến chiều sâu kết hợp nhận diện khuôn mặt giúp chủ thể nổi bật, tóc và viền áo được xử lý mượt hơn.",
    stat: "108MP",
    label: "Chi tiết cao",
  },
  {
    title: "Video ổn định cho từng chuyển động.",
    description:
      "Chống rung lai giúp cảnh quay khi đi bộ, du lịch hoặc quay nhanh vẫn giữ được cảm giác điện ảnh.",
    stat: "4K",
    label: "AI Stabilize",
  },
] as const;

export const performanceStats = [
  {
    label: "CPU",
    value: "42%",
    description: "Nhanh hơn thế hệ trước",
  },
  {
    label: "GPU",
    value: "38%",
    description: "Mượt hơn khi chơi game",
  },
  {
    label: "NPU",
    value: "3.2x",
    description: "Tăng tốc tác vụ AI",
  },
] as const;

export const designHighlights = [
  "Khung hợp kim nhôm tái chế",
  "Mặt lưng kính nhám hạn chế bám vân tay",
  "Kháng nước, kháng bụi chuẩn IP68",
  "Ba màu: Graphite, Aurora Blue, Pearl White",
] as const;
