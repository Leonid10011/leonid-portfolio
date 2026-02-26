import Container from "./Container";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="inner">
          <p>© {new Date().getFullYear()} Leonid Design. All rights reserved.</p>
        </div>  
      </Container>
    </footer>
  ) 
}