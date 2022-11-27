const ToggleMainBtn = () => {

  const action = () => {

    window.Telegram.WebApp.showPopup({
      title: "Pop Up",
      message: "Just popup example",
      buttons: [{
        id: 0,
        type: "close",
        text: "Close Me"
      }]
    });

  }

  const mainBtn = window.Telegram.WebApp.MainButton;

  mainBtn.text = "Click Me!";

  mainBtn.onClick(() => action());
  mainBtn.offClick(() => action());

    const toggleMainButton = () => {
        
        mainBtn.isVisible ? mainBtn.hide() : mainBtn.show();

    }

    return(<button
    onClick={toggleMainButton}
    >
      TOGGLE MAIN BUTTON  
    </button>)
}

export default ToggleMainBtn;