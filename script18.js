 
    /*****************Variables***********************/
    let lucasMass = 78;
    let lucasHeight = 1.69;
    let johnMass = 92;
    let johnHeight = 1.95;

    /*****************BMI******************* */

    let lucasBMI = lucasMass / lucasHeight ** 2
    let johnBMI = johnMass / johnHeight ** 2

    /***************Create Boolean Variable******************* */

    let lucasHigherBMI
    if(johnBMI > lucasBMI)
      lucasHigherBMI = false;
    else
      lucasHigherBMI = true;

    /**********Template Literal Data 1*************************/ 

    let result = `Lucas and john are friends, Lucas is ${lucasHeight} m tall and john is ${johnHeight} m tall. So john has higher BMI than Lucas, that is ${lucasHigherBMI}.`
    console.log(result);

   // Second version
   /*****************Variables***********************/
   lucasMass = 95;
   lucasHeight = 1.88;
   johnMass = 85;
   johnHeight = 1.76;

   /*****************BMI******************* */
    letlucasBMI = lucasMass / lucasHeight ** 2
    johnBMI = johnMass / johnHeight ** 2
   /***************Create Boolean Variable******************* */
   if(johnBMI > lucasBMI)
     lucasHigherBMI = false;
   else
     lucasHigherBMI = true;
   /**********Template Literal Data 1*************************/ 

    result = `Lucas and john are friends, Lucas is ${lucasHeight} m tall and john is ${johnHeight} m tall. So john has higher BMI than Lucas, that is ${lucasHigherBMI}.`
    
    console.log(result);

    
    

    
