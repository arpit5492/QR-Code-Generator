import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"
inquirer
  .prompt([
    {message:"Type your URL here: ",
     name:"URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_image = qr.image(url, {type: 'png'});
    qr_image.pipe(fs.createWriteStream('my_qr_image.png'));

    fs.writeFile("QR-code.txt", url, function(err){
        if(err) throw err;
        console.log("The file has been successfully saved!!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
      
    }
  });
