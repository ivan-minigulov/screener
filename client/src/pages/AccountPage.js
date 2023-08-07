import { observer } from 'mobx-react-lite';
import React, {useContext, useState} from 'react';
import { Button } from 'react-bootstrap';
import {Context} from "../index";
import { submitSurvey, subsHalfYear, subsMonth, subsThreeMonth, subsYear, logout, accountInfoUpdate } from '../http/userAPI';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from "../utils/consts";


export default observer (function AccountPage() {
  const {user} = useContext(Context)
  // const [selectСurrency, setSelectCurrency] = useState()
  // const [selectTypesSubs, setSelectTypesSubs] = useState([])
  // const [selectAutoPay, setSelectAutoPay] = useState()
  // const [error, setError] = useState()
  // const [surveyCheck, setSurveyCheck] = useState(false)
  const navigate = useNavigate()

  // const clickMonth = async () => {
  //   try {
  //       const userData = await subsMonth()
  //       user.setUser({...userData})
  //   } catch(e) {
  //       console.log(e.response.data.message)
  //   }
  // }
  // const clickThreeMonth = async () => {
  //   try {
  //       const userData = await subsThreeMonth()
  //       user.setUser({...userData})
  //   } catch(e) {
  //       console.log(e.response.data.message)
  //   }
  // }
  // const clickHalfYear = async () => {
  //   try {
  //       const userData = await subsHalfYear()
  //       user.setUser({...userData})
  //   } catch(e) {
  //       console.log(e.response.data.message)
  //   }
  // }
  // const clickYear = async () => {
  //   try {
  //       const userData = await subsYear()
  //       user.setUser({...userData})
  //   } catch(e) {
  //       console.log(e.response.data.message)
  //   }
  // }
  
  // const onChangeCheckbox = (e) => {
  //   if (selectTypesSubs.includes(e.target.value)) {
  //     setSelectTypesSubs([...selectTypesSubs].filter(elem => elem !== e.target.value))
  //   } else {
  //     setSelectTypesSubs([...selectTypesSubs, e.target.value])
  //   }
  // }

  // const submitFun = async () => {
  //   try {
  //         const userData = await submitSurvey(selectСurrency)
  //         user.setUser({...userData})
  //         setError('')
  //         setSurveyCheck(true)
  //       } catch(e) {
  //         console.log(e.response.data.message)
  //       }
  // }
  
  // const submit = () => {
  //   (selectСurrency) 
  //   ? submitFun()
  //   : setError('Заполните пожалуйста все формы')
  // }

  const logOut = async () => {
    user.setUser({})
    user.setIsAuth(false)
    navigate(LOGIN_ROUTE)
    await logout()
  }

  // const clickAccountInfoUpdate = async () => {
  //   try {
  //     const userData = await accountInfoUpdate()
  //     user.setUser({...userData})
  //   } catch(e) {
  //     console.log(e.response.data.message)
  //   }
  // }
  
  return (
    <div className='account-page'>
      <div className='user-column'>
        <div className='user-info'>
          {/* <p className='user-p'>{user.user.role === 'USER' ? 'Пользователь: ' :
              user.user.role === 'ADMIN' ? 'Админ: ' : 
              user.user.role === 'PARTNER' ? 'Товарищ: ' : 'Пользователь: '} {user.user.email}</p> */}
          
          {/* {user.user.subs 
            ? <p className='user-p'>Подписка оформлена до {new Date(user.user.subsDate).toLocaleDateString()}</p>
            : user.user.role === 'ADMIN' || user.user.role === 'PARTNER' 
            ? <p className='user-p'>Подписка не требуется</p>
            : <p className='user-p'>Для пользования сервисом оформите пожалуйста подписку</p>
          } */}
        </div>
        
        {/* {!user.user.isActivated &&
          <div className='user-info mt-2'>
            <p className='user-p'>Ваша почта не подтверждена. Пожалуйста проверьте почту, с почтового адреса imscreener.ru@gmail.com 
            Вам отправлено письмо с ссылкой для активации аккаунта.
            Если Вы не нашли письмо в папке "Входящие" - проверьте папку "Спам".  
            Чтобы в дальнейшем письма от нас приходили в папку 
            "Входящие", а не в "Спам" - отметьте в свойстве письма "Это не спам".</p>
          </div>
        } */}
        {/* <div className='user-btn-logout'>
          <Button
            variant={"outline-dark"}
            onClick={() => clickAccountInfoUpdate()}
            >Обновить информацию аккаунта
          </Button>
        </div> */}
        <div className='user-btn-logout'>
          <Button
            variant={"outline-dark"}
            onClick={() => logOut()}
            >Выйти из аккаунта
          </Button>
        </div>   
      </div>
    
      <div className='survey-form'>
        <div className='survey-block'>
          {/* <p className='text-justify'>
              В данный момент оформить подписку на сайте нельзя пока не будет 
              набрано достаточное количество желающих пользоваться данным ресурсом.
              При наборе достаточного количества желающих, 
              Вам на почту придет письмо с приглашением оформить подписку. 
              Также информация будет дублироваться в нашем <a target="_blank"  
              rel="noreferrer" className="a-account" href="https://t.me/imscreener">
              Telegram-канале</a> - подписывайтесь, чтобы следить за новостями.
          </p> */}
          <ul className='ul'><p>Функционал сайта:</p>
                <li>Скринер акций (более 5900 ценных бумаг, торгующихся на биржах NYSE, NASDAQ, AMEX, компаний из более 40 стран; 
                39 параметров фильтрации, включая бизнес-цикл экономики и бизнес-цикл компаний)</li>
                <li>Макроанализ экономики США (Развернутая оценка показателей и бизнес-цикла экономики США: ВВП, рынок труда, 
                производство, кредит, корпоративные прибыли, регулирование, запасы и продажи)</li>
                <li>Микроанализ компаний (определение бизнес-цикла компаний по финансовым потокам, авторский рейтинг компаний: 
                Growth Rating, Profit Rating, Value Rating, Debt Rating, Dividend Rating, FCF Rating, 
                Momentum Rating, Total Rating)</li>
              </ul>
        </div>
        {/* {surveyCheck && (
          <div className='survey-block'>
            <h6>
                Спасибо за участие в опросе!
            </h6>
          </div>
        )} */}
        {/* {!user.user.survey && (
          <div>
            <div className='survey-block-title'>
              <h5>С целью организации удобной для Вас оплаты подписки прошу пройти опрос ниже</h5>
            </div>
            <div className='survey-block'>
              <form>
                <p>Выберите удобный для Вас вариант оплаты подписки:</p>
                <p><input onChange={e => setSelectCurrency(e.target.value)} id='RUB' type="radio" name="answer" value="RUB"></input>
                    <label htmlFor='RUB'>Рублями картой банка РФ</label></p>
                <p><input onChange={e => setSelectCurrency(e.target.value)} id='USD-EUR' type="radio" name="answer" value="USD-EUR"></input>
                    <label htmlFor='USD-EUR'>USD/EUR картой иностранного банка</label></p>
                <p><input onChange={e => setSelectCurrency(e.target.value)} id='RUB-USD-EUR' type="radio" name="answer" value="RUB-USD-EUR"></input>
                    <label htmlFor='RUB-USD-EUR'>Могу рублями картой банка РФ и USD/EUR картой иностранного банка</label></p>
              </form>
            </div> */}

            {/* <div className='survey-block'>
              <form>
                <p>Какие виды подписки Вы хотели бы видеть на сайте? (Можно выбрать несколько вариантов)</p>
                <p><input onChange={onChangeCheckbox} id='month' type="checkbox" name="answer" value="30"></input>
                    <label htmlFor='month'>Подписка на 30 дней (1990 руб.)</label></p>
                <p><input onChange={onChangeCheckbox} id='3-month' type="checkbox" name="answer" value="90"></input>
                    <label htmlFor='3-month'>Подписка на 90 дней (5350 руб.) - экономия 10%</label></p>
                <p><input onChange={onChangeCheckbox} id='6-month' type="checkbox" name="answer" value="180"></input>
                    <label htmlFor='6-month'>Подписка на 180 дней (10150 руб.) - экономия 15%</label></p>
                <p><input onChange={onChangeCheckbox} id='12-month' type="checkbox" name="answer" value="365"></input>
                    <label htmlFor='12-month'>Подписка на 365 дней (19350 руб.) - экономия 20%</label></p>
              </form>
            </div> */}

            {/* <div className='survey-block'>
              <form>
                <p>Нужно ли на сайте внедрить возможность автоматического продления подписки при ее завершении? 
                (По умолчанию данная функция не предусмотрена - Вы сами управляете своей подпиской 
                и в любой момент можете ее продлить на желаемый период)</p>
                <p><input onChange={e => setSelectAutoPay(e.target.value)} id='Yes' type="radio" name="answer" value="Yes"></input>
                    <label htmlFor='Yes'>Да</label></p>
                <p><input onChange={e => setSelectAutoPay(e.target.value)} id='No' type="radio" name="answer" value="No"></input>
                    <label htmlFor='No'>Нет</label></p>
              </form>
            </div> */}

            {/* <div className='button-submit'>
              <Button className='button-style' id='button-clear' onClick={submit}>Отправить</Button>
              <p className='text-error'>{error}</p>
            </div>
          </div>
        )} */}

        {/* <div>
        <div className='block-buy'>
            <div className='block-buy-subs'>
              <p>Подписка на 30 дней</p>
              <p>за 1990 руб.</p>
              <p><br></br></p>
              <Button variant='light' disabled>Оформить подписку</Button>
            </div>
            <div className='block-buy-subs'>
              <p>Подписка на 90 дней</p>
              <p>за 5350 руб.</p>
              <p>экономия 10%</p>
              <Button variant='light' disabled>Оформить подписку</Button>
            </div>
            <div className='block-buy-subs'>
              <p>Подписка на 180 дней</p>
              <p>за 10150 руб.</p>
              <p>экономия 15%</p>
              <Button variant='light' disabled>Оформить подписку</Button>
            </div>
            <div className='block-buy-subs'>
              <p>Подписка на 365 дней</p>
              <p>за 19350 руб.</p>
              <p>экономия 20%</p>
              <Button variant='light' disabled>Оформить подписку</Button>
            </div>
            </div>
        </div> */}
        {/* <div>
          <div className='survey-block'>
            <p>Оформление и продление подписки осуществляется вручную. Вы в любой момет можете оформить/продлить подписку 
            на любой предлагаемый срок.</p>
            <ul className='ul'><p>Вы получите доступ к функционалу сайта:</p>
              <li>Скринер акций (более 5900 ценных бумаг, торгующихся на биржах NYSE, NASDAQ, AMEX, компаний из более 40 стран; 
              39 параметров фильтрации, включая бизнес-цикл экономики и бизнес-цикл компаний)</li>
              <li>Макроанализ экономики США (Развернутая оценка показателей и бизнес-цикла экономики США: ВВП, рынок труда, 
              производство, кредит, корпоративные прибыли, регулирование, запасы и продажи)</li>
              <li>Микроанализ компаний (определение бизнес-цикла компаний по финансовым потокам, авторский рейтинг компаний: 
              Growth Rating, Profit Rating, Value Rating, Debt Rating, Dividend Rating, FCF Rating, 
              Momentum Rating, Total Rating)</li>
              </ul>
          </div>
          
          <div className='block-buy'>
            <div className='block-buy-subs'>
              <p>Подписка на 30 дней</p>
              <p>за 1990 руб.</p>
              <p><br></br></p>
              <Button onClick={clickMonth}>{user.user.subs ? 'Продлить' : 'Оформить'} подписку</Button>
            </div>
            <div className='block-buy-subs'>
              <p>Подписка на 90 дней</p>
              <p>за 5350 руб.</p>
              <p>экономия 10%</p>
              <Button onClick={clickThreeMonth} >{user.user.subs ? 'Продлить' : 'Оформить'} подписку</Button>
            </div>
            <div className='block-buy-subs'>
              <p>Подписка на 180 дней</p>
              <p>за 10150 руб.</p>
              <p>экономия 15%</p>
              <Button onClick={clickHalfYear}>{user.user.subs ? 'Продлить' : 'Оформить'} подписку</Button>
            </div>
            <div className='block-buy-subs'>
              <p>Подписка на 365 дней</p>
              <p>за 19350 руб.</p>
              <p>экономия 20%</p>
              <Button onClick={clickYear}>{user.user.subs ? 'Продлить' : 'Оформить'} подписку</Button>
            </div>
          </div>
             
        </div> */}
      </div>

    </div>
  )
})
