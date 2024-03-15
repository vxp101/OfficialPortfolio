export default function Header(){
    return (
        <section id="Header">
            <header>
                <h2>Brendon Jennett</h2>
            </header>
            <div id="Button-header">
                <a href="#">
                    <button role="link" className="Button-header">Home</button>
                </a>
                <a href="#">
                    <button role="link" className="Button-header">About</button>
                </a>
                <a href="#">
                    <button role="link" className="Button-header">Projects</button>
                </a>
                <a href="#">
                    <button role="link" className="Button-header">Contact</button>
                </a>
            </div>
        </section>
    )
}