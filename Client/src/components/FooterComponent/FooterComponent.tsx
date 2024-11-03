function Footer() {
    return (
        <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px", textAlign: "center" }}>
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px" }}>
                <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>Sobre nosotros</a>
                <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contacto</a>
                <a href="/privacy" style={{ color: "#fff", textDecoration: "none" }}>Política de privacidad</a>
            </div>
        </footer>
    );
}

export default Footer;
