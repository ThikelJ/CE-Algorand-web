
const  myAlgoWallet = new MyAlgoConnect();
let wallet = null;



	async function loginWallet(){
    const button = document.querySelector("#login-wallet");
    if (!button) return console.log("LOGED")
    let conectWallet = await connectToMyAlgo()
    if (!conectWallet) return
   
    button.textContent = wallet.slice(0,4)+"..."+wallet.slice(-4,wallet.length)
    const stringJson = JSON.stringify(conectWallet)
    console.log(conectWallet)
    window.location.href = `/login?json=${encodeURIComponent(stringJson)}`;
	}
  
async function connectToMyAlgo () {
  try {
    const accounts = await myAlgoWallet.connect();
    const addresses = accounts.map(account => account.address);
    wallet = addresses[0]
    return accounts[0]
  } catch (err) {
    console.error(err);
  }
}

