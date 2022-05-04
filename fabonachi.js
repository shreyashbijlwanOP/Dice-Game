var index = 0;
var  fabNumber  = 1;
var fabPre = 0;
var newfab = 0;
var fabColl =  [];
var num = prompt("Enter the Fabonnaci number You want : ");;



while ( index<num )
 {
   if (index===0 || index === 1)
   {
      fabColl.push(index);
   }

  else
   {
    newfab = fabNumber + fabPre;
   fabColl.push(newfab);
  fabPre = fabNumber;
  fabNumber = newfab;
   }
  index++;
 }

// alert(" list : \n " + fabColl);


alert("Your Fabonnaci number is : " + fabColl[num-1]);
