import { Link, Links, Meta, Scripts, ScrollRestoration } from "react-router";
import styles from "./styles.module.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className={styles.container}>
          <header>
            <Link className={styles.logo} to="/">
              Contig
            </Link>
          </header>
          <main>{children}</main>
          <footer>
            <p className={styles.credit}>
              Built with ❤️ by{" "}
              <a href="https://www.iamtimsmith.com">Tim Smith</a>.
            </p>
          </footer>
          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
};
