/**
 * == compared to ===
 * 
 * == uses type coersion but === does not and so === between two variables of different types will be unequal
 * 
 * typically will conv numbers to strings for comparison if possible
 * '7' == '5' + '2' evaluates to false
 * '7' != '52'
 * 
 * will conv and attempt comparison if operators dont make sense
 * '5' == '10' - '5' evaluates to true
 */

 /**
  * use === by default since it is more explicit, use == if you need type coersion
  * 
  */

  

