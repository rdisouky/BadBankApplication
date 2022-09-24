function AllData(){
  const ctx = React.useContext(UserContext);

  const title = () => {
    return (
      <>
      <div className="card-header">
      Account History
    </div>
      <div className="card-group">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Transation Type</h5>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Action</h5>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Balance</h5>
    </div>
  </div>
  </div>
  </>
    )
  }

  const card = (transationType, transactionMessage, balance) => {
    return (
      <div className="card-group">
  <div className="card">
    <div className="card-body">
    <h5 className="card-title">{transationType}</h5>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
    <h5 className="card-title">{transactionMessage}</h5>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
    <h5 className="card-title">${balance}</h5>
    </div>
  </div>
  </div>
    )}

  return (
    <>
    {title()}
   {ctx.records.map(record => card(record.transationType, record.transactionMessage,record.balance))}
   </>
  );
}
