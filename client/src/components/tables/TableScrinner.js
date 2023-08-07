import React, { useContext } from 'react'
import { Context } from '../../index';
// import {useNavigate} from 'react-router-dom';
import {STOCK_ROUTE} from "../../utils/consts";
import { observer } from 'mobx-react-lite';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default observer (function TableScrinner({ listScrinner, colNamesScrinner, colNamesDB }) {
  const { stock } = useContext(Context)
  // const navigate = useNavigate()

  const colorText = (index, el) => {
      if (index > 27) {
        if (el >= 7) {return 'text-green'}
        if (el < 7 && el >= 4) {return 'text-orange'}
        if (el < 4) {return 'text-red'}
      }
      if (index === 7 || index === 8 || index === 13 || index === 14) {
        if (el >= 1) {return 'text-green'}
        if (el < 1 && el > -1) {return 'text-orange'}
        if (el <= -1) {return 'text-red'}
      }
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <div className='wrap'>
          {listScrinner.length > 0 && (
            <table className='table'>
              <thead>
                <tr>
                  {colNamesScrinner.map(({headerItem, overlay}, index) => (
                    index > 1 ? (
                    <OverlayTrigger
                      key={headerItem}
                      placement="top"
                      delay={{ show: 100, hide: 100 }}
                      overlay={
                        <Tooltip id={`tooltip-${index}`}>
                          {overlay}
                        </Tooltip>
                    }
                    ><th key={headerItem}>
                      {headerItem}
                    </th>
                  </OverlayTrigger>)
                  : (<th key={headerItem}>
                      {headerItem}
                    </th>)
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.values(listScrinner).map((obj, index) => (
                  <tr key={index}>
                    <td>{(index + 1) + (stock.page * 20 - 20)}</td>
                    {colNamesDB.map((el, index2) => (
                      index2
                      ? <td
                          className={colorText(index2, obj[el])}
                          key={index2}>{obj[el]}</td>
                      : <td className='td-ticker' key={index2}>
                          <a className='td-ticker' href={STOCK_ROUTE + '/' + obj[el]}>{obj[el]}</a></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>
    </div>
  )
})
