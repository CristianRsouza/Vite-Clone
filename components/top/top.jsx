import './top.css'

const Top = () => {
    return(
        <div className='Top'>
            <div className='Left'>
                <div className='Left_content'>
                    <div className='Left_h1'>
                        <h1>Vite</h1>
                    </div>
                    <div className='Left_h1_Title'>
                      <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    </div>
                    <div className='Left_h1_About'>
                        <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime 
                        </h1>
                    </div>
                    <div className='Left_Buttons'>
                        <button>Lorem</button>
                        <button>Lorem</button>
                        <button>Lorem</button>
                    </div>
                </div>
            </div>
            <div className='Rigth'>
                <div className='Rigth_Image_Container'>
                    <div className='Rigth_Image'>
                       <img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite-Logo" />
                    </div>
                    <div className='Rigth_Image_Shadow'></div>
                </div>
            </div>
        </div>
    )
}

export default Top