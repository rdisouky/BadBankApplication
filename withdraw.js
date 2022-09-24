function Withdraw(){

const [show, setShow] = React.useState(true);
const [withdraw, setWithdraw] = React.useState('');
const [withdrawMessage, setWithdrawtMessage] = React.useState('');
const ctx = React.useContext(UserContext);


function handleWithdraw(){
  const money = parseInt(withdraw)
  if(money && money > 0){
    if(!ctx.user.balance || ctx.user.balance-money < 0) {
      setWithdrawtMessage('Account cannot be in overdraft');
      return;
    }
    ctx.user.balance -= money;
    ctx.records.unshift({
      transationType:'Withdraw', 
      transactionMessage:`${ctx.user.name} withdrew ${money} amount`,
      balance: ctx.user.balance
    });
    setShow(false);
  }
  else if (money <= 0) {
    setWithdrawtMessage('Withdraw must be a positive dollar amount'); 
  }
  else {
    setWithdrawtMessage('Withdraw must be a dollar amount');
  }
}

function clearForm(){
setWithdraw('');
setShow(true);
setWithdrawtMessage('')
}

return(
  <Card
    bgcolor="warning"
    header={`Withdraw, Current Balance ${ctx.user.balance || 0}`}
    body={show ? (
      <>
      Withdraw<br/>
      <input type="input" className="form-control" id="withdraw"
      placeholder="Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
       <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{withdrawMessage}</div>
      <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={withdraw===''}>Withdraw</button>
      </>
    ):(

      <>
      <h5>Take your Money!</h5>
      <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw Again</button>
      </>
    )}
    
    />
)
}