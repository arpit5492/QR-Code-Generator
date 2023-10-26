/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"
inquirer
  .prompt([
    //Use the inquirer npm package to get user input.
    {message:"Type your URL here: ",
     name:"URL"
    }
  ])
  .then((answers) => {
    //Use the qr-image npm package to turn the user entered URL into a QR code image.
    const url = answers.URL;
    let qr_image = qr.image(url, {type: 'png'});
    qr_image.pipe(fs.createWriteStream('my_qr_image.png'));

    //Create a txt file to save the user input using the native fs node module.
    fs.writeFile("QR-code.txt", url, function(err){
        if(err) throw err;
        console.log("The file has been successfully saved!!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
