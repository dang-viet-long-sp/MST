import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./footer.css"

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <ul className="footer__item">
            <li className="footer__title">Наші контакти</li>
            <li className="footer__link">
              <StaticImage
                src="../images/footer/phone.svg"
                alt="phone"
                className="footer__image"
              />{" "}
              (057) 702-13-78
            </li>
            <li className="footer__link">
              <StaticImage
                src="../images/footer/phone.svg"
                alt="phone"
                className="footer__image"
              />{" "}
              (057) 702-13-78
            </li>
            <li className="footer__link">
              <StaticImage
                src="../images/footer/email.svg"
                alt="phone"
                className="footer__image"
              />{" "}
              d_mst@nure.ua
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">Про кафедру</li>
            <li className="footer__link">
              <Link
                language="ua"
                to="/teacher/teacher"
                className="footer__link"
              >
                Склад кафедри
              </Link>
            </li>
            <li className="footer__link">
              <Link
                language="ua"
                to="/history/history"
                className="footer__link"
              >
                Історія кафедри
              </Link>
            </li>
            <li className="footer__link">
              {" "}
              <Link
                language="ua"
                to="/graduates/graduates"
                className="footer__link"
              >
                Наші випускники 
              </Link>
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">Учбовий процес</li>
            <li className="footer__link">Постійна коміссія УМР</li>
            <li className="footer__link">Форми навчання</li>
            <li className="footer__link">Спеціальності</li>
            <li className="footer__link">Освітні програми</li>
            <li className="footer__link">Силабуси дисциплін</li>
            <li className="footer__link">Графіки навчального процесу</li>
            <li className="footer__link">Обрання дисциплін студентом</li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">Наука</li>
            <li className="footer__link">Лабараторія</li>
            <li className="footer__link">Навчальні направлення</li>
            <li className="footer__link">Студентська наука</li>
            <li className="footer__link">Роботи студентів</li>
            <li className="footer__link">Кружки кафедри</li>
            <li className="footer__link">Запропонувати тему</li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">Абітурієнтам</li>
            <li className="footer__link">Правила вступу</li>
            <li className="footer__link">Спеціальності</li>
            <li className="footer__link">Питання-відповідь</li>
            <li className="footer__link">Наша реклама</li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">Студентам</li>
            <li className="footer__link">Розклад</li>
            <li className="footer__link">Ресурси</li>
            <li className="footer__link">Науково дослідна робота</li>
            <li className="footer__link">Вибір студента</li>
            <li className="footer__link">Дипломування</li>
            <li className="footer__link">Практика</li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">Партнери</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="footer__copyright__inner">© 2021 Кафедра МСТ</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer