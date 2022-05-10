import React from "react"
import "./conferences.css"
import Pagination from "src/components/pagination/pagination"

const Conferences = () => {
  const conferences = [
    {
      title:
        "Міжнародний молодіжний форум «Радіоелектроніка та молодь у ХХІ столітті»",
      city: "М. Харків",
    },
    {
      title:
        "Міжнародна науково-технічна конференція студентів та аспірантів «Друкарство молоде»",
      city: "М. Київ",
    },
  ]
  return (
    <div className="conferences">
      <div className="container">
        <div className="conferences__menu">
          <div className="conferences__menu__inner">
            <div className="conferences__menu__item">
              <button className="conferences__button">Конференції</button>
            </div>
            <div className="conferences__menu__item">
              <button className="conferences__button">Конкурси</button>
            </div>
            <div className="conferences__menu__item">
              <button className="conferences__button">Олімпіади</button>
            </div>
            <div className="conferences__menu__item">
              <button className="conferences__button">Публікації</button>
            </div>
          </div>
        </div>
        <div className="conferences__switch"></div>
        <div className="conferences__inner">
          {conferences.map((conference, index) => (
            <div className="conferences__item" key={index.toString()}>
              <div className="conferences__item__title">{conference.title}</div>
              <div className="conferences__item__city">{conference.city}</div>
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default Conferences
