import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <button className="logout">تسجيل خروج</button>
      <nav className="nav">
        <a href="#" className="nav-link">الخطة</a>
        <a href="#" className="nav-link">كيفية العمرة</a>
      </nav>
        <div className="profile">الحساب</div>
    </header>
  );
};

export default Header;