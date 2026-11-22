import "./Header.css";

function Header({ movieCount }) {
  return (
    <header className="header">
      <div className="header__inner container">
        <a className="header__logo" href="/">
          <span className="header__logo-mark" aria-hidden="true">▶</span>
          CinemaClub
        </a>
        <span className="header__count">{movieCount} סרטים</span>
        <nav className="header__nav">
          <a className="header__link header__link--active" href="/">סרטים</a>
          <a className="header__link" href="/">הרשימה שלי</a>
          <a className="header__link" href="/">אודות</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;