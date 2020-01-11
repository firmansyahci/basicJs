function formatInput(str, args) {
    var args = Array.prototype.slice.call(arguments, 1);
    return str.replace(/{(\d+)}/g, function (m, i) {
      return args[i];
    });
  }
  
console.log(formatInput("Hello {0} {1}", "Arkademian", "Fighters!"));
console.log(formatInput("This is an {2}", "Halangan", "Rintangan", "Exercise"));