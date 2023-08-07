import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, useParams } from 'react-router-dom';
import { ABOUT_ROUTE } from '../utils/consts';
import FunctionalAbout from '../components/about/functionalAbout';
import RemovalAbout from '../components/about/removalAbout';
import PrivatPolicy from '../components/about/privatpolicy';


export default function AboutPage() {
  const params = useParams()

  return (
    <div>
      <div className=' d-flex justify-content-center align-items-center'>
        <div className='div-support'>
            <p className='p-support'>
            <a target="_blank"  rel="noreferrer" className="a-support" href="https://t.me/imscreener">
            Telegram-канал</a> - здесь публикуются актуальные новости и будущие обновления для сайта, подписывайся!</p>
            <p className='p-support'>
            <a target="_blank"  rel="noreferrer" className="a-support" href="https://t.me/imscreenerchat">
            Telegram-чат</a> - общайтесь в нашем чате, обсуждайте инвест-идеи и делитесь мнением о работе сайте!</p>
            <p className='p-support'>
            <a target="_blank"  rel="noreferrer" className="a-support" href="https://t.me/imscreener_support">
            Telegram-чат</a> - техподдержка, по всем вопросам пишите сюда!</p>
        </div>
      </div>
      <div className='mb-4'>
          <Nav justify defaultActiveKey={0} variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey={0} as={Link} to={ABOUT_ROUTE + '/functional'}>Функционал</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={1} as={Link} to={ABOUT_ROUTE + '/removal'}>Отказ от ответственности</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={2} as={Link} to={ABOUT_ROUTE + '/privacy'}>Политика конфиденциальности</Nav.Link>
          </Nav.Item> 
          </Nav>
      </div>

      <div className='about-content'>
        {(params.id === 'functional') && 
        <FunctionalAbout />}
        {(params.id === 'removal') && 
        <RemovalAbout />}
        {(params.id === 'privacy') && 
        <PrivatPolicy />}
      </div>

    </div>
  )
}
