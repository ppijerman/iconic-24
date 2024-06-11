export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cover bg-top-right bg-fixed">
      {children}
    </div>
  );
}
