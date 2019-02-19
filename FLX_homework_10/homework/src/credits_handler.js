function userCard(key) {
  let balance = 100, 
  transactionLimit = 100, 
  historyLogs = [], 	
  time = new Date().toLocaleString(`en-GB`);
  
  function cardOperation(operationType, credit, operationTime) {
    historyLogs.push({
      operationType: operationType,
      credits: credit,
      operationTime: operationTime
    }); 
  }

  return {
    getCardOptions() {
      return {
        'balance': balance,
        'transactionLimit': transactionLimit,
        'historyLogs': historyLogs,
        'key': key
      }  
    },
  
    putCredits(credit) {
      balance += credit;
      cardOperation(`Received credit`, credit, time)
    },
  
    takeCredits(credit) {
      if (credit > transactionLimit || credit > balance){
        console.error(`You can't take credits from the card because transaction limit and remaining balance
        are less then amount you want to take`)
      } else {
        balance -= credit;
        cardOperation(`Withdrawal of credits`, credit, time)
      }
    },
  
    setTransactionLimit(credit) {
      transactionLimit = credit;
      cardOperation(`Transaction limit change`, credit, time)
    },
  
    transferCredits(credit, card) {
      let tax = 0.5;
      let per = 100;
      let taxOfTransfer = credit * tax / per; 
      let transfer = credit + taxOfTransfer;
      if (transfer > transactionLimit || transfer > balance) {
        console.error(`You can't complete the transfer`)
      } else {
        this.takeCredits(transfer);
        card.putCredits(credit);
      }
    }		
  }
}
function UserAccount(userName) {
  this.name = userName;
  this.cards = [];
  this.maxAmauntCards = 3;

  this.addCard = function() {
    if(this.cards.length < this.maxAmauntCards){
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.error(`You can't have more then 3 cards`);
    }
  }

  this.getCardByKey = function(key) {
    return this.cards[key - 1];		
  }
}