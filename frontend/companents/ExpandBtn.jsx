const ExpandBtn = () => {

    const expand = () => {
        window.Telegram.WebApp.expand();
    }

    return(
        <button
        onClick={expand}
        >EXPAND</button>
    );
}

export default ExpandBtn