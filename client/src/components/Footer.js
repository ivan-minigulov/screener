import React from 'react';
import { ABOUT_ROUTE } from '../utils/consts';

export default function Footer() {
  return (
    <div className='div-footer '>
        <div className="container">
            <footer className="footer">
              <p className="p1-footer"><a target="_blank"  rel="noreferrer" 
              href="https://t.me/imscreener">Наш телеграм-канал: подписывайся!</a></p>
              <p className="p3-footer">Сайт на стадии бета-тестирования - о всех технических проблемах прошу писать 
              в <a target="_blank"  rel="noreferrer" className="a-support" href="https://t.me/imscreener_support">
              телеграм-чат поддержки</a> или 
              в <a target="_blank"  rel="noreferrer" className="a-support" href="https://t.me/imscreenerchat">
              чат телеграм-канала
              </a></p>
              <p className="p3-footer">На сайте указана цена акций на момент закрытия предыдущего рабочего дня</p>
              <p className="p3-footer">Обновление данных макроанализа выполняется еженедельно</p>
              <p className="p3-footer">Информация на сайте не является индивидуальной инвестиционной рекомендацией - <a 
              target="_blank"  rel="noreferrer" href={ABOUT_ROUTE + '/removal'}>Отказ от ответственности</a></p>
              <p className="p4-footer">Сайт использует в работе файлы cookie, 
              продолжая пользоваться сайтом Вы соглашаетесь с нашей <a target="_blank"  rel="noreferrer" 
              href={ABOUT_ROUTE + '/privacy'}>Политикой конфиденциальности</a>
              </p>
              <p className="p2-footer">&copy; 2023 IM Screener</p>
            </footer>
        </div>
    </div>
  )
}
