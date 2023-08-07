import { observer } from "mobx-react-lite";

export default observer (function Support() {
    return (        
        <div>
            <div className=' d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 210}}>
                <div className='div-support'>
                    <p className='p-support'>
                    <a target="_blank"  rel="noreferrer" className="a-support" href="https://t.me/imscreener">
                    Telegram-канал</a> - здесь публикуются новости и будущие обновления для сайта, подписывайся!</p>
                    <p className='p-support'>
                    <a target="_blank"  rel="noreferrer" className="a-support" href="https://t.me/imscreener_support">
                    Telegram-чат</a> - по всем вопросам обращаться сюда!</p>
                </div>
            </div>
        </div>
        
    )
})