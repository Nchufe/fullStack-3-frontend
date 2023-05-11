import { Container, TableContainer } from "@mui/material";
import Footer from "@/pages/components/footer";
import Header from "@/pages/components/header";
import Link from "next/link";

export default function Layout({children}){
    return (
        <>
          <Header title="John Doe">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </Header>
          <Container fixed>
            <main>{children}</main>
          </Container>
          <Footer />
        </>
      );
}