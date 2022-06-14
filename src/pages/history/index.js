import React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import "./history.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import FirstImg from "src/images/history/1944.png"
import SecondImg from "src/images/history/1977.png"
import ThirdImg from "src/images/history/1988.png"
import FourImg from "src/images/history/1989.png"
import FifthImg from "src/images/history/1997.png"
import SixthImg from "src/images/history/2004.png"
import SeventhImg from "src/images/history/2011.png"
import EightImg from "src/images/history/2015.png"
import NineImg from "src/images/history/2020.png"

const HistoryPage = () => {
  const histories = [
    {
      photo: FirstImg,
      year: "1944 р.",
      text: "У далекому 1944 році за Харківському гірничо-індустріальному інституті (реорганизованном пізніше в ХІГМАОТ, а потім в ХИРЕ, ХТУРЕ і, нарешті, в ХНУРЕ) була організована кафедра «Нарисної геометрії і креслення», яку очолив к.т.н. Куцин Т.І.",
    },
    {
      photo: SecondImg,
      year: "1977 р.",
      text: "У 1977 році кафедра інженерної графіки Харківського інституту радіоелектроніки, створеного в 1966 р на базі ХІГМАОТ, комісією Мінвузу України визнана кращою з організації навчальної роботи, методичного забезпечення та застосування технічних засобів навчання в навчальному процесі.",
    },
    {
      photo: ThirdImg,
      year: "1964 р. - 1988 р.",
      text: "У період з 1964 по 1988 кафедра під керівництвом професора Кузьміна В.І.,а потім професора Гавриша Н.П., вийшла на високий рівень викладання графічних дисциплін.",
    },
    {
      photo: FourImg,
      year: "1989 р.",
      text: "Від 1988 року до сьогодні кафедру очолює випускник ХІРЕ, професор Ткаченко В.П., який, продовжуючи кращі традиції кафедри, спрямував зусилля на удосконалення навчально-методичної роботи, а також на розвиток наукової роботи на кафедрі в нових напрямах таких, як «ГІС-технології», «Комп'ютерні графічні системи». 1989 р. до кафедри «Інженерна графіка» була приєднана кафедра «Конструювання механізмів радіоелектронної апаратури» («Механіки»), викладачі якої проф. Романій П.Г., доц. Трунов О.В., доц. Манаков В.П., доц. Сінотін А.М.",
    },
    {
      photo: FifthImg,
      year: "1997-2002 р.",
      text: "У 1997 р., завдяки ініціативі та зусиллям колективу кафедри,зав. кафедри проф. Ткаченка В.П., кафедра вийшла на новий рівень своєї роботи – відновила в Східній Україні підготовку фахівців для видавничо-поліграфічної галузі і стала однією з профілюючих кафедр університету. ",
    },
    {
      photo: SixthImg,
      year: "1998р.-2004 р.",
      text: "В 1998, 2000, 2004 й 2006 роках під керівництвом професора Михайленка Всеволода Євдокимовича, на базі кафедри інженерної й комп'ютерної графіки, були організовані й проведені міжнародні науково-практичні конференції 'Сучасні проблеми геометричного моделювання'. У роботі конференцій брали участь провідні вченігеометри України: Підгорний Олексій Леонтійович, Найдиш Володимир Михайлович, Сазонов Костянтин Олександрович, Куценко Леонід Миколайович та ін.",
    },
    {
      photo: SeventhImg,
      year: "2011 р.",
      text: "З 1 листопада 2011 року кафедру Інженерної та комп’ютерної графіки перейменовано на кафедру Медіасистем та технологій (МСТ). На кафедрі удосконалюються технічні засоби навчання і з       застосуванням обчислювальної техніки, розробляються друковані й електронні навчальні посібники, слайд-лекції, комп’ютерні       тести та інші методичні матеріали, які широко використовуються як у звичайній, так і в дистанційній формі навчання.",
    },
    {
      photo: EightImg,
      year: "2015 р.",
      text: "З 2016 року кафедра МСТ готує бакалаврів спеціальності 186 «Видавництво та поліграфія», та магістрів за спеціальністю 186 «Видавництво та поліграфія», за спеціалізаціями: «КТС ВПВ», «ТЕМВ», «ТДВ». Зараз на кафедрі працює 20 викладачів, з них 5 професорів, 8 доцентів, 16 кандидатів наук, 6 аспірантів, 11 працівників навчально-допоміжного складу.",
    },
    {
      photo: NineImg,
      year: "2020 р.",
      text: "Сьогодні колектив кафедри налаштований на подальшу роботу з освоєння сучасних технологій проектування та виготовлення WEB-систем, друкованих, електронних видань та мультимедійних інформаційних продуктів, ефективну співпрацю з провідними підприємствами галузі, українськими та зарубіжними профільними вишами в справі підготовки кваліфікованих фахівців.",
    },
  ]
  return (
    <div>
      <Header />
      <Title> Історія кафедри </Title>
      <div className="history">
        <div className="container">
          <div className="history__inner">
            <ul className="history__timeline">
              {histories.map((history, index) => (
                <li className="history__timeline__item" key={index.toString()}>
                  <img
                    className="history__image"
                    src={history.photo}
                    alt="History"
                  />
                  <div className="history__item__text">
                    <h1 className="history__item__title"> {history.year} </h1>
                    <p className="history__item__suptitle"> {history.text} </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default HistoryPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
