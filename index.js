function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  
  BoardMember.prototype.approve = function() {
    return "You can do that!";
  };
  
  BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
  };
  
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  BoardMember.prototype.sayHi = function() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ", and I was trained in " + this.training + ".";
  };
const boardMember1 = new BoardMember("John", "California", "Marketing");
console.log(boardMember1.sayHi()); // Output: Hi, my name is John. I am from California, and I was trained in Marketing.
console.log(boardMember1.veto()); // Output: No, I must disagree

const boardMember2 = new BoardMember("Sarah", "New York", "Finance");
console.log(boardMember2.sayHi()); // Output: Hi, my name is Sarah. I am from New York, and I was trained in Finance.
console.log(boardMember2.approve()); // Output: You can do that!