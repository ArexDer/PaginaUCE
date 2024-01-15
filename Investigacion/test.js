document.getElementById("miBoton").addEventListener("click", function(){
    var miPanel = document.getElementById("miPanel");
    if (miPanel.style.display === "none") {
        miPanel.style.display = "block";
    } else {
        miPanel.style.display = "none";
    }
 });

 document.getElementById('cerrarPanel').addEventListener('click', function() {
    var panel = document.getElementById('miPanel');
    panel.style.display = 'none';
  });
  

 