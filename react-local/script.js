const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    /*
        3 ATURAN JSX
        - Selalu mengembalikan satu elemen: bisa pake tag <></> buat render jadi satu elemen
        - Selalu tutup semua tag: kayak <img />
        - Gunakan camelCase untuk atribut: misal class jadi className
    */
    <>
        <h1 className="heading">Belajar React Nih Senggol Dong 🤣</h1>
        <img src="img/react-logo.png" width="80" alt="React Logo" />
        <p onClick={e => {alert('oke')}}>Belajar React Itu Mudah Dan Menyenangkan Bukan ?!</p>
    </>
);