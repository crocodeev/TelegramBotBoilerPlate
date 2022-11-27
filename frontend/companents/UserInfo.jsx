const UserInfo = () => {

    //const wau = Object.keys(window.Telegram.WebApp.initData).map(item => <p>{item}</p>)
    const wau = window.Telegram.WebApp.initDataUnsafe.user || {
        id: null,
        first_name: null,
        last_name: null,
        username: null,
        language_code: null
    };

    const createRows = (wau) => {
        
        const rows = Object.keys(wau).map((item, index) => {
            return(<tr key={index}>
                <td>{item}</td>
                <td>{wau[item]}</td>
            </tr>)
        })

        return rows;
    }

    return(<table>
        <caption><h4>User Info</h4></caption>
        <thead>
            <tr>
                <td>key</td>
                <td>value</td>
            </tr>
        </thead>
        <tbody>
            {createRows(wau)}
        </tbody>
    </table>);

}

export default UserInfo;