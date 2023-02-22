import React from "react";
import './Home.css';
function Home() {
    var bHash = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
    var eHash = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
    return (<>
{/* 
            <div className="Circle" >
                <div className="Circle1">
                    <h3>B.Hash</h3>
                </div>
                <div className="Circle2">
                    <h3>E.Hash</h3>
                </div>
            </div>  */}
            {/* <div className="HashCode" style={{color:bHash === eHash ? 'green': 'red' }}> */}
                <div className="HashCodeBlockChain" style={{color:bHash === eHash ? 'green': 'red' }}>
                    <h3 style={{color:'white'}}>B.HASH</h3>
                    <span className="neon" > {bHash}</span>

                </div>
                <div className="HashCodeExcel" style={{color:bHash === eHash ? 'green': 'red' }}>
                <h3 style={{color:'white'}}>E.HASH</h3>
                    <span className="neon"
                    >{eHash}</span>
                </div>
           {/* </div> */}
            
</>
        

    );
}
export default Home;