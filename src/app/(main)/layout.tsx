import { Footer, Header } from "@/components";
import { Fragment } from "react/jsx-runtime";

export const metadata = {
  title: {
    template: "%s | Owl Brand",
    default: "Owl Brand",
  },
  description:
    "Official website of Owl Brand - Quality products for everyday use.",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      <main className="relative min-h-screen">
        <div className="relative min-h-screen">{children}</div>
      </main>
      <Footer />
    </Fragment>
  );
}
