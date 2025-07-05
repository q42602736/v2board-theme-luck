const generateAvatarColor = (email) => {
  const colors = [
    "#3b82f6",
    // 蓝色
    "#ef4444",
    // 红色
    "#10b981",
    // 绿色
    "#f59e0b",
    // 黄色
    "#8b5cf6",
    // 紫色
    "#06b6d4",
    // 青色
    "#84cc16",
    // 柠檬绿
    "#f97316",
    // 橙色
    "#ec4899",
    // 粉色
    "#6366f1",
    // 靛蓝
    "#14b8a6",
    // 蓝绿色
    "#f43f5e",
    // 玫瑰红
    "#a855f7",
    // 紫罗兰
    "#22c55e",
    // 翠绿色
    "#eab308"
    // 金黄色
  ];
  if (!email) return colors[0];
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = email.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
const getUserInitials = (email) => {
  if (!email) return "U";
  const chineseMatch = email.match(/[\u4e00-\u9fa5]+/);
  if (chineseMatch) {
    return chineseMatch[0].charAt(0);
  }
  return email.charAt(0).toUpperCase();
};
const generateAvatar = (email, size = 32) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  canvas.width = size;
  canvas.height = size;
  const initials = getUserInitials(email);
  const color = generateAvatarColor(email);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${size * 0.4}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(initials, size / 2, size / 2);
  return canvas.toDataURL();
};
export {
  generateAvatar as g
};
