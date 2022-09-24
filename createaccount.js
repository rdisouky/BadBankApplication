

function CreateAccount(){

  const [show, setShow] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  const [nameMessage, setNameMessage] = React.useState('');
  const [emailMessage, setEmailMessage] = React.useState('');
  const [passwordMessage, setPasswordMessage] = React.useState('');


function validate(field, errorMessageSetter, isPassword=false){
  if(isPassword && field.length < 8){
    errorMessageSetter(`The password should be at least 8 characters`);
    return false;
  }
  if (field === '') {
    errorMessageSetter('This is a required field');
    return false;
   }
   return true;
}  

function handleCreate(){
const isNameValid = validate(name,setNameMessage);
const isEmailValid = validate(email,setEmailMessage);
const isPasswordValid =validate(password,setPasswordMessage,true);
if(isNameValid && isEmailValid && isPasswordValid){
ctx.user.name=name;
ctx.user.balance=100;
ctx.records=[]
ctx.records.push({
  transationType:'Deposit', 
  transactionMessage:`Initial account balance`,
  balance: ctx.user.balance
});
console.log(ctx.user.name);
console.log(ctx.user.balance);
setShow(false);
}

}

function clearForm(){
  setName('');
  setEmail('');
  setPassword('');
  setShow(true);
  setNameMessage('');
  setPasswordMessage('');
  setEmailMessage('')
}

const disabled = name === '' && password === '' && email === ''
  return(
    <Card
      bgcolor="info"
      header="Create Account"
      body={show ? (
        <>
        Name<br/>
        <input type="input" className="form-control" id="name"
        placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
        <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{nameMessage}</div>
        Email address<br/>
        <input type="input" className="form-control" id="email"
        placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
        <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{emailMessage}</div>
        Password<br/>
        <input type="input" className="form-control" id="password"
        placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
        <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{passwordMessage}</div>
        <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={disabled}>Create Account</button>
        </>
      ):(

        <>
        <h5>You have successfully created an account!</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
      
      />
  )
}