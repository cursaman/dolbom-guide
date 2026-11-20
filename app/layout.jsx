import "./globals.css";

export const metadata = {
  title: "돌봄 준비 안내서",
  description: "방문요양센터 개설 기준과 요양보호사 자격증 취득 절차를 확인하세요.",
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body>{children}</body></html>;
}
