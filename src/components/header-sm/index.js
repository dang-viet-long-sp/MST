import React, { useState } from "react"
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { StaticImage } from "gatsby-plugin-image"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"
import { Link } from "gatsby"

export const HeaderSm = () => {
  const menuItems = [
    {
      displayName: 'Про кафедру',
      open: false,
      hide: false,
      subItems: [
        {displayName: 'Склад кафедри', link: '/teacher/teacher'},
        {displayName: 'Історія кафедри', link: '/history/history'},
        {displayName: 'Наші випускники', link: '/graduates/graduates'},
      ]
    },
    {displayName: 'Учбовий процес', open: false, hide: false, subItems: []},
    {displayName: 'Наука', open: false, hide: false, subItems: [
        {displayName: 'Лабараторія', link: '/teacher/teacher'},
        {displayName: 'Наукові напрями', link: '/directions/directions'},
        {displayName: 'Студентська наука', link: '/studentscience/studentscience'},
        {displayName: 'Роботи студентів', link: '/works/works'},
        {displayName: 'Гуртки кафедри', link: '/sections/sections'},
        {displayName: 'Запропонувати тему', link: '/offer/offer'}
      ]
    },
    {displayName: 'Абітурієнтам', open: false, hide: false, subItems: [
        {displayName: 'Правила вступу', link: '/rules/rules'},
        {displayName: 'Спеціальність', link: '/admissions/admissions'},
        {displayName: 'Наша реклама', link: '/advertising/advertising'}
      ]
    },
    {displayName: 'Студентам', open: false, hide: false, subItems: [
        {displayName: 'Розклад', link: 'http://cist.kture.kharkov.ua'},
        {displayName: 'Ресурси', link: '/resources/resources'},
        {displayName: 'Студентське життя', link: '/student-life/student-life'},
        {displayName: 'Анотації дисциплін', link: '/annotations/annotations'},
        {displayName: 'Науково-дослід. робота', link: '/science-work/science-work'},
        {displayName: 'Вибір студента', link: '/student-choise/student-choise'},
        {displayName: 'Дипломування', link: '/diploma/diploma'},
        {displayName: 'Обговорення ОП', link: '/discuss/discuss'}
      ]
    },
    {displayName: 'Партнери', open: false, hide: false, link: '#' },
    {displayName: 'Контакты', open: false, hide: false, link: '#'}
  ]

  const [burgerMenu, setBurgerMenu] = useState(false)
  const [menuItemsState, setMenuItemsState] = useState(menuItems);

  const toggleSubMenu = (key) => {
    setMenuItemsState(menuItemsState.map((item, index) => {
      if (index === key) {
        item.open = !item.open
      } else {
        item.hide = !item.hide
      }

      return item
    }))
  }

  return (
    <div className="header-sm">
      <div className="container">
        <div className="header-sm_menu">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color="#393982"
            onClick={() => setBurgerMenu(true)}
          />
          <span className="line">
            </span>

          <StaticImage className="header-sm_logo" src="../images/Logo1.png" alt="logo_MST" />
        </div>
        <div className="mod-languages">
          <ul className="lang-inline">
            <li className="lang-active">
              <a href="#">Ua</a>
            </li>
            <li className="lang-active">
              <a href="#">Ru</a>
            </li>
            <li className="lang-active">
              <a href="#">En</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={burgerMenu ? "header-open-sm" : "menu-none"}>
        <div className="header-menu-sm">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            color="#393982"
            onClick={() => setBurgerMenu(false)}
          />
          <span className="line">
            </span>
          <StaticImage className="header-sm_logo" src="../images/Logo1.png" alt="logo_MST" />
        </div>

        <ul className="link-list-sm">
          { menuItems
            .map((item, key) => (
              <li
                className={
                  menuItemsState[key].open ? 'list-item-sm' :
                    menuItemsState[key].hide ? 'list-item-sm_none' : 'list-item-sm'
                }
                key={item.displayName + key.toString()}
              >

                {
                  menuItemsState[key].open ? (
                    <ul className='list-sub-menu-sm'>
                      <li className="list-item-sm_active list-item-sm">
                        <span
                          onClick={() => toggleSubMenu(key)}
                          className="list-item_link"
                        >
                          {item.displayName}
                        </span>
                      </li>
                      {item.subItems.map((subItem, subItemIndex) => (
                        <li className="list-item-sm" key={subItem + subItemIndex.toString()}>
                          <Link className="list-item_link" to={subItem.link}>{subItem.displayName}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : item.link ?
                    <Link className="list-item_link" to={item.link}>{item.displayName}</Link>
                    :
                    <span
                      onClick={() => toggleSubMenu(key)}
                      className="list-item_link">
                      {item.displayName}
                    </span>
                }
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default HeaderSm