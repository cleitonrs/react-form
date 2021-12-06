import React from "react";

const FormSignup = () => {
  return (
    <div className="form__content__right">
      <form className="form">
        <h1>
          Junte-se a nós hoje! Crie sua conta preenchendo as informações abaixo.
        </h1>
        <div className="input__forms">
          <label htmlFor="username" className="form__label">
            Nome de Usuário
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="input__form"
            placeholder="Seu nome"
          />
        </div>
        <div className="input__forms">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="input__form"
            placeholder="Seu e-mail"
          />
        </div>
        <div className="input__forms">
          <label htmlFor="email" className="form__label">
            Senha
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="input__form"
            placeholder="Sua senha"
          />
        </div>
        <div className="input__forms">
          <label htmlFor="email" className="form__label">
            Confirmar Senha
          </label>
          <input
            id="password2"
            type="password2"
            name="password2"
            className="input__form"
            placeholder="Repetir Senha"
          />
        </div>
        <button className="form__input__btn" type="submit">
          Inscrever-se
        </button>
        <span className="form__input__login">
          Já possui uma conta? Entrar <a href="#">aqui</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
