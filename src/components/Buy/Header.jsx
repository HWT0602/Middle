import { Link } from 'react-router-dom';
import CartSummary from "../CartSummary";

export default function Header() {
    return (
        <header className="header">
            <div className="Logo">
                <Link to="/">
                <img className="header_logo" src="/img/logo.png" alt="logo" />
                </Link>
            </div>

            <nav className="nav-box">
                <input type="checkbox" id="menu" />
                <label for="menu" className="nav-line">
                    <div className="menu"></div>
                </label>

                <div className="menu-list" >
                    <ul>
                        <li className="menu-list-item">
                            <a className="menu-list-item-link" href="#">關於我們</a>
                        </li>
                        <li className="menu-list-item">
                            <a className="menu-list-item-link" href="#">最新消息</a>
                        </li>
                        <li className="menu-list-item">
                            <a className="menu-list-item-link" href="#">音樂教室</a>
                        </li>
                        <li className="menu-list-item">
                            <a className="menu-list-item-link" href="#">產品資訊</a>
                        </li>
                        <a className="user-logo" href="#">
                            <img src="/img/user.jpg" alt="" width="50" height="50" />
                        </a>
                        <CartSummary/>
                    </ul>
                </div>
            </nav>
        </header>
    );
}