import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = (props: any) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
