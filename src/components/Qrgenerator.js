import { useState} from "react";
import ThankYou from './ThankYou'

const Qrgenerator = () => {
    const [qr, setQr] = useState('');
    const[finalQr, setfinalQr] = useState('https://api.qrserver.com/v1/create-qr-code/?data=defaultQR&size=200x200');
    const [greetings, setGreetings] = useState(false);
    
    function requestQr(){   
        const res = `https://api.qrserver.com/v1/create-qr-code/?data=${qr}&size=200x200`
        setfinalQr(res);
    }

    return(
        <div className="bg-purple-600 h-screen ">
           
            <div className="pt-3 pl-4">
                <a href="https://github.com/Abhishek-Bohora/QrcodeGenerator"  >
                    <i class="fab fa-github fa-2x"></i>
                </a>
            </div>
           
            <div className="flex justify-center items-center pt-32">
                <div>
                    <img src={finalQr} alt="qr"/>
                    <form onSubmit={e=>{
                        e.preventDefault();
                        requestQr();
                    }}>
                    <input placeholder="Enter Text or Url" onChange={e=>{setQr(e.target.value)}} className="p-2 px-3 mt-4 outline-none rounded-md font-sans placeholder:text-slate-800 focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
                    <button className="bg-gray-800 hover:bg-gray-900 text-gray-100 font-sans font-semibold ml-3 p-2 px-4 rounded-md drop-shadow-xl" onClick={()=>{setGreetings(true)}}>Submit</button>              
                    </form>
                    {greetings && <ThankYou/>}  
                </div>                     
            </div>           
        </div>
  
    );
}

export default Qrgenerator