document.querySelector("#send").addEventListener("click",send,false);
document.querySelector("#erase").addEventListener("click",erase,false);


function send()
{
    let fav = [document.getElementsByName("fav")].map(i=>{
        if(i.checked)
            {
                return i.value;
            }
        })
    let bad = [document.getElementsByName("bad")].map(i=>{
        if(i.checked)
            {
                return i.value;
            }
        })
    let other = document.querySelector("#other").checked?"Tak":"Nie";
    document.querySelector("#result").innerHTML = `Twoje preferencje:<br/>
                                                    Lubisz kolor: ${fav}<br/>
                                                    Nie lubisz koloru: ${bad}</br>
                                                    Lubisz inne kolory: ${other}</br>`
}
function erase()
{

}