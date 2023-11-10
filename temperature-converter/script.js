function convert(unit) {
    let celsius = parseFloat(document.getElementById('celsius').value);
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
   

    if (unit === 'celsius') {
        fahrenheit = (celsius * 9/5) + 32;
       
    } else if (unit === 'fahrenheit') {
        celsius = (fahrenheit - 32) * 5/9;
      
    } 

    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('celsius').value = celsius.toFixed(2);
   
}
function cancel(){
    document.getElementById('fahrenheit').value = "";
    document.getElementById('celsius').value = "";
}