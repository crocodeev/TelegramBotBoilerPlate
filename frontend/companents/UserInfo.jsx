const UserInfo = () => {

    //const wau = Object.keys(window.Telegram.WebApp.initData).map(item => <p>{item}</p>)
    const wau = window.Telegram.WebApp.initData;

    const createRows = (wau) => {
        
        const rows = Object.keys(wau).map(item => {
            return(<tr>
                <td>{item}</td>
                <td>{wau[item]}</td>
            </tr>)
        })
    }

    return(<div>{wau}</div>)

    /*return(<table>
        <caption><h4>WebAppUser</h4></caption>
        <thead>
            <tr>
                <td>property</td>
                <td>value</td>
            </tr>
        </thead>
        <tbody>
            <tr>{JSON.stringify(wau)}</tr>
            
        </tbody>
    </table>)*/
}

export default UserInfo;