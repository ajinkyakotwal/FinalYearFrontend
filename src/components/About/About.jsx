import React from "react";
import './About.css';
import blockchain from '../../assets/images/blockchain.jpg';
const About=()=>{
    return(
        <div className="container" style= {{backgroundImage: 
            "url('https://wallpaperaccess.com/full/8054303.jpg')", height:'1000px', width:'100%', backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>
        {/* <img src='https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?size=626&ext=jpg&ga=GA1.1.1467263659.1676706640&semt=ais' style={{'height':'500px'}}  ></img>     */}
        <p className="desp">
            <summary>About Our Project</summary>
            <br></br>
            Traditional IOT data security solutions involved TPA(Third Party Auditors) to ensure the security of their IOT Data, which made it susceptible to the attacks.
 
 However, with the introduction of the Blockchain, we tend to eliminate these auditors and propose a system which would also ensure data integrity at greater extend.
 
 The architecture of the Blockchain is tailor-made for our use case, as the data, once entered in the Blockchain cannot be tampered, thus providing a coveted solution to the security of the IOT Data.

    <br></br>
    <p> How we make it possible?</p>
    <ul>
        <li><strong style={{color:'red'}}>Polygon</strong></li>
        <p> The Polygon network allows you to do many of the same things the main Ethereum network allows, but with fees that are often a fraction of a cent.
        Polygon believes in Web3 for all. 
        Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.
        </p>
        <details> 
            <summary>What Polygon Offers</summary>
            <ul>
                <li>Polygon solves common blockchain pain points, offering low gas fees and high speeds without sacrificing security. 

<li>Higher performance with a transaction speed of up to 65,000 transactions per second.</li>

<li>Provides multi-chain architecture for better scalability.</li>

<li>More secure due to the results of the validation system.</li>
</li>
            </ul>
        </details>
        
        <br></br>
        <li><strong style={{color:'red'}}>Chainlink</strong></li>
        <p> Chainlink decentralized oracle networks provide tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain.
        It securely connect smart contracts with off-chain data and services. Like we're using IoT Data as off-chain data.
        </p>

            <details>
                <summary>Use Cases of Chainlink
            </summary>            
             <ul>
                <li>Decentralized Finance (DeFi)
                Many traditional financial products like loans, payments, derivatives, asset equity, and more are being built on the blockchain using smart contracts to increase their security and transparency and reduce barriers to entry.
                </li>
                <li>Money Laundering Protection and many more</li>
                
            </ul>
            </details>

    </ul>
 

<p>Uses Of BlockChain</p>
<ul>
<li>International Payments. Blockchain provides a way to securely and efficiently create a tamper-proof log of sensitive activity. ...
<li>Capital Markets. ...</li>
<li> Trade Finance. ...</li>
<li> Regulatory Compliance and Audit....</li>
<li> Money Laundering Protection....</li>
</li>
<li>Supply Chain Management.</li>
</ul>
{/* <img src={blockchain}></img> */}
<details>
            <summary >Why is blockchain important ?</summary>
            <br></br>
Traditional database technologies present several challenges for recording financial transactions. 
For instance, consider the sale of a property. Once the money is exchanged, ownership of the property is transferred to the buyer. 
Individually, both the buyer and the seller can record the monetary transactions, but neither source can be trusted.
 The seller can easily claim they have not received the money even though they have, and the buyer can equally argue that they have paid the money even if they haven’t.
To avoid potential legal issues, a trusted third party has to supervise and validate transactions. 
The presence of this central authority not only complicates the transaction but also creates a single point of vulnerability. 
If the central database was compromised, both parties could suffer.
Blockchain mitigates such issues by creating a decentralized, tamper-proof system to record transactions. 
In the property transaction scenario, blockchain creates one ledger each for the buyer and the seller. 
All transactions must be approved by both parties and are automatically updated in both of their ledgers in real time. 
Any corruption in historical transactions will corrupt the entire ledger. 
These properties of blockchain technology have led to its use in various sectors, including the creation of digital currency like Bitcoin.
        </details>
        <br></br> 
        </p>
        </div>

    )
}
export default About;

/* <p>
    <br.
    <details --> drop down>
    <summary> ---> title
    <li>  list item
    <ul> unordered list


*/