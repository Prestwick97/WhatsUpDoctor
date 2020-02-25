// User Interface Logic
import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DocService } from './API-call';

$(document).ready(function() {
  $('#doctorFind').submit(function(event) {
    event.preventDefault();
    $('#docProfile').empty();
    const name = $('#docSearch').val();

    (async () => {
      let docService = new DocService();
      const response = await docService.getDocByName(name);
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      if(response == false){
        $('#docProfile').text("There is an error regarding the BetterDoctor API");
      }
      if(response.data.length > 0) {
        for(let i = 0; i < 10; i++) {
          let docFirstName = `${response.data[i].profile.first_name}`;
          let docLastName = `${response.data[i].profile.last_name}`;
          let docPatients = `${response.data[i].practices[0].accepts_new_patients}`;
          let docWeb = `${response.data[i].practices[0].website}`;
          let docNum = `${response.data[i].practices[0].phones[0].number}`;
          let docProfile ="<br>" + "First name: " + docFirstName + "<br>" + "Last name: " + docLastName + "<br>" + "Accepting new patients: " + docPatients + "<br>" + "Website: " + docWeb + "<br>" +"Phone: " + docNum + "<br>";
          if(docProfile.includes("undefined")){
            docProfile = docProfile.replace("undefined", "No results available");
          }
          $('#docProfile').append(docProfile);
        } 
      } else {
         $('#docProfile').text("No results available, please input a condition, name of a doctor, or medical proffession.");
        }
    }
  });
});