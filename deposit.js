const TRANSACTION_TYPE = 'Deposit'
const TRANSACTION_MESSAGE = 'User deposited x amount '
function Deposit(){

const [show, setShow] = React.useState(true);
const [deposit, setDeposit] = React.useState('');
const [depositMessage, setDepositMessage] = React.useState('');
const ctx = React.useContext(UserContext);

function handleDeposit(){
  const money = parseInt(deposit)
  if(money && money > 0){
    if(!ctx.user.balance) {
      ctx.user.balance=money;
    }
    else {
      ctx.user.balance += money;
    }
    ctx.records.unshift({
      transationType:'Deposit', 
      transactionMessage:`${ctx.user.name} deposited ${money} amount`,
      balance: ctx.user.balance
    });
    setShow(false);
  }
  else if (money <= 0) {
    setDepositMessage('Deposit must be a positive dollar amount'); 
  }
  else {
    setDepositMessage('Deposit must be a dollar amount');
  }
}

function clearForm(){
setDeposit('');
setShow(true);
setDepositMessage('')
}


return(
  <Card
    bgcolor="dark"
    header={`Deposit, Current Balance ${ctx.user.balance || 0}`}
    body={show ? (
      <>
      Deposit<br/>
      <input type="input" className="form-control" id="deposit"
      placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
       <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{depositMessage}</div>
      <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={deposit === ''}>Deposit</button>
      </>
    ):(

      <>
      <h5>Thank you for your Deposit!</h5>
      <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit Again</button>
      </>
    )}
    
    />
)
}