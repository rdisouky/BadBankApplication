function Home(){
  return (
    <Card
      height="50rem"
      width="50em"
      bgcolor="info"
      txtcolor="black"
      header="The Financial Crimes Home Page"
      title="Welcome to the bank"
      text="  Welcome to the Bank that allows you to steal but also does not protect your savings.
      You can navigate through the website using the navigation bar. 
      Good Luck and do NOT get Caught!."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
