//closures
function x() {
  var a = 10;

  function y() {
    console.log(a);
  }
  y();
}
x();
//Even though y() is defined inside x(), it has access to x()'s local variable a. This is because of closure, a feature in JavaScript where an inner function has access to variables in its outer scope.

//Closure allows the function y() to "remember" and access the variable a from its outer function x() even after x() has completed execution. This is a fundamental concept in JavaScript, enabling powerful patterns like data hiding, factory functions, and more.
