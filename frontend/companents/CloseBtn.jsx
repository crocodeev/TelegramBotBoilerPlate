const CloseBtn = () => {

    const close = () => {
        window.Telegram.WebApp.close();
    }

    return(
        <button
        onClick={close}
        >CLOSE</button>
    );
}

export default CloseBtn