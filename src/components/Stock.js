import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Stock() {
    const [XY, setXY] = useState([]);
    const [name, setName] = useState("");
    const [xAxios, setXAxios] = useState([]);
    const [ratio , setRatio ] = useState([])


    useEffect(() => {
        const key = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=ElApiFWmD4VUYj5UACHt4o_E9h3rfOv6"
        const url = "https://api.polygon.io/v2/reference/splits/AMZN?&apiKey=ElApiFWmD4VUYj5UACHt4o_E9h3rfOv6"
        fetch(url)
            .then(result => result.json())
            .then(data => {
                console.log('this is actual data ', data.results)
                // setName(data?.results[0]?.ticker)
                data.results.forEach(item => {
                    console.log(item);
                    setXAxios(pre => ([
                        ...pre,
                        item.paymentDate
                    ]))


                    setRatio(pre => ([
                        ...pre,
                        item.ratio
                    ]))
                    // setXY(pre => ([
                    //     ...pre,
                    //     {
                    //         name: item.title
                    //     }
                    // ]))
                })
            }).catch(error => {
                console.log(error)
                alert('fetching data error')
            })

    }, []);
    // const options = {
    //     // chart: {
    //     //     type: 'spline'
    //     // },
    //     rangeSelector: {
    //         selected: 1
    //     },
    //     title: {
    //         text: 'My chart'
    //     },
    //     // colorAxis: {
    //     //     min: 0,
    //     //     stops: [[0.4, '#ffff00'], [0.65, '#bfff00'], [1, '	#40ff00']]
    //     // },
    //     // series: [
    //     //     {
    //     //         data: XY
    //     //     }
    //     // ],
    //     series: [{
    //         name: 'AAPL',
    //         data: XY,
    //         tooltip: {
    //             valueDecimals: 2
    //         }
    //     }]
    // };
    return (
        <div className="container">
            <HighchartsReact  highcharts={Highcharts} options={{
                title: {
                    text: name
                },
                xAxis: {
                    categories: xAxios
                },
                // xAxis: {
                //     categories: ['A', 'B', 'C'],
                // },
                series: [
                    { name: 'ratio', data: ratio },
                    // { name: 'ankit', data: [100, 1, 10, 100000] },
                    // { name: 'arun', data: [1, 100, 100, 1] },
                ],
            }} />
        </div>
    )
}

export default Stock
