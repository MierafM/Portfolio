
function showtab(tabName, index){
    console.log('showing log', tabName)
    // hide all
    document.getElementById('twilio').style.display = "none"
    document.getElementById('reinforcements').style.display = "none"
    document.getElementById('photoApp').style.display = "none"
    document.getElementById('gwc').style.display = "none"
    document.getElementById('ibm').style.display = "none"
    document.getElementById('recommendify').style.display = "none"
    document.getElementById('communityCurrency').style.display = "none"
    document.getElementById('cssi').style.display = "none"
    var content = document.getElementById(tabName) 
    
   
    var tabs = document.getElementsByClassName('option')
    for(let i = 0; i < tabs.length; i++){
        // console.log('printing: ',tabs[i])
        if (i == index){
            tabs[i].style.backgroundColor = "#922D50"
        }
        else{
            tabs[i].style.backgroundColor = ""
        }
    }
    // show one thats been clicked on
    content.style.display = "block"
    console.log(document.getElementById(tabName))
    

}