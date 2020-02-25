# _What's Up Doc_ _February, 2020_

#### _An application that allows you to recieve a list of doctors based on criteria from the user's input._

#### By _**Patrick S. Delaney**_

## Description

_In this application, the user inputs specific information to reviece a list of doctors in the Portland area. Information such as: medical symptoms, doctor names, specializations, etc._
 
## Setup/Installation Requirements

* _Obntain your own unique API KEY._
  * Go to the BetterDoctor website using this link:( https://developer.betterdoctor.com/ ).
  * Create an account.
  * Obtain unique API key.
* _Open your command terminal_
* _Navigate to your desktop directory ``` $ cd desktop ```_
* _Use the "$ git clone" command to clone this repository onto your desktop: ```$ git clone https://github.com/Prestwick97/WhatsUpDoc.git``` _
* _Navigate to application directory using ```$ cd WhatsUpDoc```_
* _While in the root directory, create a file called: ".env". ``` $ touch .env ```._
* _Open directory in text editor of your choice. Many computers are configured to use the command ```$ code .``` in the terminal to open the folder in your default text editor._
* _While in the text editor, add your unique API key to the program by opening the .env folder and inputting the following " API_KEY = "your unique api key here"._
* _You may now install all of the neccessary node files by running the following command in the terminal of the program's root directory: ``` $ npm install ```_
* _After all the node/webpack files have been installed, simply enter ``` $ npm run start ``` to open the application interface within your browser._
* _Enjoy! And stay healthy._

## Specs: 

Program will enable the user to input the name of a doctor and recieve a list of doctors with that name.
* input: Dr. Delaney
* output: -list of doctors with the last name: Delaney-

Program will provide a list of medical doctors within the portland area based on on conditions the user inputs into the application.
* input: sore throat
* output: *Portland area* -list of doctors-

When program is asked to return a list of doctors, it will provide additional information about each doctor listed.
* input: sore throat
* output: Dr. Delaney {first name, last name, address, phone number, website, accepting new patients}

If program encounters an error with the API call, it will return a notification describing the specifics of the error.
* input: Dr. Delaneyyy
* output: *error* "invalid search query - status: 400"

If program cannot return any data based on the saerch criteria, user will be provided with a message stating the absense of results.
* input: broken muffler
* output: "There are no doctors in the Portland area related to this criteria"


## Known Bugs

_At the moment, there are no known bugs._

## Support and contact details

_If you have any questions, comments, concerns, or suggestions, please contact me (Patrick Delaney) at: prestwick97@gmail.com_

## Technologies Used

* _BetterDoctor API_
* _Node/npm
* Webpack_
* _HTML 5_
* _CSS_
  * Bootstrap
* _JavaScript_
  * JQuery

## Commit History

<img src="SC1.png"></img>
<img src="SC2.png"></img>
<img src="SC3.png"></img>

### License

Licensed under the MIT license.

Copyright (c) 2020 **_Patrick S. Delaney_**
