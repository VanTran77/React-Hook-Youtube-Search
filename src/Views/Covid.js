import React from 'react'
import '../Views/Covid.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'



export default function Covid() {

  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(async () => {
   try {
    setTimeout(async () => {
        let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-01-01T00:00:00Z&to=2022-01-31T00:00:00Z')
        console.log('check res', res);
        let data = (res && res.data) ? res.data : [];
        if(data && data.length > 0) {
            data.map(item => {
                item.Date = moment(item.Date).format('DD/MM/YYYY')
                return item;
            })
        }
        // console.log(data);
        setDataCovid(data.reverse())
        setIsLoading(false);
        setIsError(false);
         
    }, 3000)
    }
    catch(e){
        setIsError(true)
        setIsLoading(false);
    }
  }, [])

 
  return (
    <div>
        <h3>Covid 19 tracking in Vietnam:</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                    return(
                        <tr key={item.ID}>
                        <td>{item.Date}</td>
                        <td>{item.Confirmed}</td>
                        <td>{item.Active}</td>
                        <td>{item.Deaths}</td>
                        <td>{item.Recovered}</td>
                    </tr>
                    )}
                )}
                {isLoading === true
                    && <tr >
                        <td colSpan ='5'> Loading ...</td>
                    </tr>
                }
                {isError === true
                    && <tr >
                        <td colSpan ='5'> Something wrong...</td>
                    </tr>
                }
            </tbody>
        </table>
    </div>
  )
}
