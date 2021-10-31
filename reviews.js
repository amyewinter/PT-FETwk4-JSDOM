// focus and warning message on the date field after click, in all browsers, is distracting
// successfully set focus to the park element with the last 2 lines of code, but error/warning on the date field is still appearing
// Things I tried to fix this, to no avail - most of these resulted in the row not being added to the table
//setting focus on the park input element after resetting the value/placeholder text
//setting blur on the date input element after resetting the value/placeholder text
//not resetting the date value
//not resetting any of the values
//setting novalidate on the form tag in the HTML
//setting autofocus on the park input field in the HTML
//removing the required attribute from the date input field in the HTML
//removing the required attribute from all input fields in the HTML
//When it doesn't add the row due to some of these fixes it is doing this to the URL:  file:///C:/Users/amywinter/Documents/bootcamp/reviews.html?date=&comments= and the stuff after the ? sticks even when I refresh the page

let id = 0;

//setting placeholder text for select fields which can't have a placeholder attribute
document.getElementById("park").value = "Choose a park";
document.getElementById("poops").value = "Choose a rating";

//onclick for button; adds form field values to a new table row and inserts into table
document.getElementById("add").addEventListener("click", () => {
  let table = document.getElementById("reviews");
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById("park").value;
  row.insertCell(1).innerHTML = document.getElementById("date").value;
  row.insertCell(2).innerHTML = document.getElementById("poops").value;
  row.insertCell(3).innerHTML = document.getElementById("comments").value;

  //resetting value/placeholder text for input/select fields; row add does not work without this, bizarre
  document.getElementById("park").value = "Choose a park";
  document.getElementById("date").value = "";
  document.getElementById("poops").value = "Choose a rating";
  document.getElementById("comments").value = "";

  //document.activeElement.blur();
  //
});

//document.getElementById("add").addEventListener("blur", () => {
//document.getElementById("park").focus();
//});
