import React from "react";
import './Home.css';
function Home() {
    var bHash = '454545ahh hhshhhjjjjjjhhhh';
    var eHash = '42098hhhhjjjjjjdjjjjhdhdhd';
    return (<>

            <div className="Circle">
                <div className="Circle1">
                    <h3>B.Hash</h3>
                </div>
                <div className="Circle2">
                    <h3>E.Hash</h3>
                </div>
            </div>
            <div className="HashCode" style={{color:bHash === eHash ? 'green: "neon': 'red: :"neon' }}>
                <div className="HashCodeBlockChain" >
                    <span className="neon" > {bHash}</span>

                </div>
                <div className="HashCodeExcel" >
                    <span className="neon"
                    >{eHash}</span>
                </div>
            </div>
            
</>
        

    );
}
export default Home;