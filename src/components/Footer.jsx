export default function Footer() {
    return (
      <footer className="text-center mt-5 py-4" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p className="mb-1">© 2025 Fit Guide. Toate drepturile rezervate.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/" className="text-white text-decoration-none">Acasă</a>
            <a href="#about" className="text-white text-decoration-none">Despre noi</a>
          </div>
        </div>
      </footer>
    );
}