import { Outlet } from "react-router-dom"
import "./layout.css"

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <a href="/" className="logo">🛒 Маркетплейс</a>

                    {/* <!-- Navigation for authenticated users --> */}
                    <ul className="nav-links" id="auth-nav">
                        <li><a href="/" className="active">Товары</a></li>
                        <li><a href="/my-bids">Мои ставки</a></li>
                        <li><a href="/create-item" className="btn-primary">+ Создать товар</a></li>
                        <li className="user-info">
                            <span className="username">username</span>
                            <button className="btn-logout">Выйти</button>
                        </li>
                    </ul>

                    {/* <!-- Navigation for guests --> */}
                    <ul className="nav-links" id="guest-nav">
                        <li><a href="/">Товары</a></li>
                        <li><a href="/login">Войти</a></li>
                        <li><a href="/register" className="btn-primary">Регистрация</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* <!-- Outlet - здесь будет рендериться содержимое дочерних маршрутов --> */}
                <div id="outlet">
                    {/* <!-- React Router Outlet заменит это содержимое --> */}
                    <Outlet />
                </div>
            </main>

            <footer>
                <p>&copy; 2025 Маркетплейс. Все права защищены.</p>
            </footer>
        </>
    )
}

export default Layout