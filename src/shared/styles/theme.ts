export const theme = {
  colors: {
    bg: "#F8FAFA",
    white: "#FFFFFF",
    black: "#141414",
    blue_pale:"#EAF7FC",
    blue_light:"#D4EEF8",
    blue_normal:"#75C7EA",
    blue_normal_active:"#3D8FB3",
    blue_dark:"#155B7E",
    blue_dark_active:"#124259",
    blu_darker:"#021C27",

    gray_100:"#EEF1F7",
    gray_200:"#BDCAD8",
    gray_300:"#8C9CAA",
    gray_400:"#636C73",
    gray_500:"#40474C",
    gray_600:"#1C1E1F",

    muted: "#6B7280",
    line: "#E5E7EB",
    primary: "#66B7E6",
    primarySoft: "#EAF6FD",
    danger: "#FF6B6B",
  },
  radius: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
  },
  shadow: {
    card: "0 8px 30px rgba(15, 23, 42, 0.06)",
  },
  font: {
    sm: "12px",
    md: "14px",
    base: "16px",
    lg: "20px",
  },
  spacing: (n: number) => `${n * 4}px`,
};
export type AppTheme = typeof theme;
