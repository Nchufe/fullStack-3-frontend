import { Container } from "@mui/material";
import Footer from "@/pages/components/footer";
import Header from "@/pages/components/header";

export default function Layout({children}){
    return (
        <>
          <Header></Header>
          <Container fixed>
            <main>{children}</main>
          </Container>
          <Footer />
        </>
      );
}