import React, { useState } from "react"
import "./faq.css"
import Pagination from "src/components/pagination"

const Faq = () => {
  const faqs = [
    {
      question:
        "Чи необхідно вміти малювати для навчання за спеціальністю «186 Видавництво та поліграфія»?",
      answer:
        "Це не обов'язково, володіння художніми навичками може знадобитися при вивченні таких дисциплін як «Основи графічного дизайну», «Художні основи проектування видань», «Обробка графічної інформації».",
    },
    {
      question: "Який обсяг математичних дисциплін і фізики??",
      answer:
        "Обсяг викладання вищої математики та фізики (в навчальних годинах) відповідає обсягу, передбаченому Міністерством науки і освіти України для технічних вузів, однак він все-таки трохи нижчий, ніж на інших спеціальностях в ХНУРЕ. ",
    },

    {
      question:
        "Якщо я громадянин іншої держави, чи можу я вчитися в ХНУРЕ на бюджетній основі?",
      answer:
        "Ні. Громадяни інших держав можуть навчатися тільки на контрактній формі навчання, тобто за кошти фізичних або юридичних осіб.",
    },
    {
      question:
        "Якщо я не згоден з оцінкою екзаменаційної роботи, чи маю я право на апеляцію?",
      answer:
        "Так. Абітурієнт має право подати заяву на апеляцію в день оголошення результатів іспиту.",
    },

    {
      question: "Далеко знаходяться гуртожитки ХНУРЕ від університету?",
      answer:
        "Університет має кілька гуртожитків, дістатися до яких можна протягом 10-30 хвилин (міським транспортом), розташовані близько від станцій метро. Гуртожитки університету мають усі умови для навчання і відпочинку студентів. Студенти живуть по 2-3 людини в кімнаті.  ",
      link: "//www.google.com/search?sxsrf=APq-WBto1qlShUAUN632LJBnQRXVvIKIhA:1644323507415&q=%D0%9E%D0%B1%D1%89%D0%B5%D0%B6%D0%B8%D1%82%D0%B8%D0%B5%20%D0%A5%D0%BD%D1%83%D1%80%D0%B5&npsic=0&rflfq=1&rldoc=1&rllag=50019467,36220359,696&tbm=lcl&sa=X&ved=2ahUKEwiT97e0jvD1AhXFtqQKHeEwA9oQtgN6BAgCEEs&biw=1440&bih=730&dpr=2&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:;mv:[[50.062717199999994,36.232593],[50.0132195,36.1934514]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2",
      text: "Гуртожитки на карті",
    },
    {
      question: "Чи можливий перехід з контрактної форми навчання на бюджет?",
      answer:
        "Так, можливий. Якщо студент-контрактник показав добрі та відмінні результати у навчанні, а також є вільне бюджетне місце (що трапляється після сесії), може розглядатися питання про його перехід з контрактної форми навчання на бюджетну форму. ",
    },
    {
      question:
        "Які предмети ЗНО потрібно обрати під час вступу на навчання за спеціальністю «Видавництво та поліграфія»?",
      answer: "Всі предмети ЗНО та вагові коефіціенти перелічені за ",
      link: "",
      text: "цим посиланням",
    },
    {
      question: "Далеко знаходяться гуртожитки ХНУРЕ від університету?",
      answer:
        "Університет має кілька гуртожитків, дістатися до яких можна протягом 10-30 хвилин (міським транспортом), розташовані близько від станцій метро. Гуртожитки університету мають усі умови для навчання і відпочинку студентів. Студенти живуть по 2-3 людини в кімнаті.",
      link: "//www.google.com/search?sxsrf=APq-WBto1qlShUAUN632LJBnQRXVvIKIhA:1644323507415&q=%D0%9E%D0%B1%D1%89%D0%B5%D0%B6%D0%B8%D1%82%D0%B8%D0%B5%20%D0%A5%D0%BD%D1%83%D1%80%D0%B5&npsic=0&rflfq=1&rldoc=1&rllag=50019467,36220359,696&tbm=lcl&sa=X&ved=2ahUKEwiT97e0jvD1AhXFtqQKHeEwA9oQtgN6BAgCEEs&biw=1440&bih=730&dpr=2&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:;mv:[[50.062717199999994,36.232593],[50.0132195,36.1934514]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2",
      text: "Гуртожитки на карті",
    },
  ]

  const limit = 3
  const [displayItems, setDisplayItems] = useState(faqs.slice(0, limit))

  const handlePageChange = page => {
    const offset = limit * (page - 1)
    setDisplayItems(displayItems.slice(offset, offset + limit))
  }

  return (
    <div className="faq">
      <div className="container">
        <div className="faq__title"> Питання та відповіді </div>
        <div className="faq__inner">
          {faqs.map((faq, index) => (
            <div className="faq__item" key={index.toString()}>
              <div className="faq__question"> {faq.question} </div>
              <div className="faq__answer">
                {faq.answer}
                <a href={faq.link} className="faq__link">
                  {faq.text}
                </a>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          items={displayItems.length}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
export default Faq
