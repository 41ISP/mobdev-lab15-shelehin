import "./SignUp.css"

const SignUp = () => {
    return (
        <div className="auth-container">
            <div className="auth-header">
                <div className="auth-icon">👤</div>
                <h1 className="auth-title">Регистрация</h1>
                <p className="auth-subtitle">Создайте новый аккаунт</p>
            </div>

            <div className="alert alert-error" id="error-alert">
                Такое имя пользователя уже занято
            </div>

            <form id="register-form">
                <div className="form-group">
                    <label className="form-label">Имя пользователя</label>
                    <input
                        type="text"
                        className="form-input"
                        name="username"
                        placeholder="Введите имя пользователя"
                        minlength="3"
                        required
                        autocomplete="username"
                    />
                        <div className="form-hint">Минимум 3 символа</div>
                        <div className="form-error">Имя пользователя должно быть не менее 3 символов</div>
                </div>

                <div className="form-group">
                    <label className="form-label">Email <span className="optional">(необязательно)</span></label>
                    <input
                        type="email"
                        className="form-input"
                        name="email"
                        placeholder="example@email.com"
                        autocomplete="email"
                    />
                        <div className="form-error">Введите корректный email</div>
                </div>

                <div className="form-group">
                    <label className="form-label">Пароль</label>
                    <input
                        type="password"
                        className="form-input"
                        name="password"
                        placeholder="Введите пароль"
                        minlength="6"
                        required
                        autocomplete="new-password"
                    />
                        <div className="password-strength">
                            <div className="password-strength-bar" id="password-strength-bar"></div>
                        </div>
                        <div className="form-hint">Минимум 6 символов</div>
                        <div className="form-error">Пароль должен быть не менее 6 символов</div>
                </div>

                <div className="form-group">
                    <label className="form-label">Подтверждение пароля</label>
                    <input
                        type="password"
                        className="form-input"
                        name="confirmPassword"
                        placeholder="Повторите пароль"
                        required
                        autocomplete="new-password"
                    />
                        <div className="form-error">Пароли не совпадают</div>
                </div>

                <button type="submit" className="btn-submit">Зарегистрироваться</button>
            </form>

            <div className="auth-divider">или</div>

            <div className="auth-link">
                Уже есть аккаунт? <a href="/login">Войти</a>
            </div>
        </div>
    )
}

export default SignUp