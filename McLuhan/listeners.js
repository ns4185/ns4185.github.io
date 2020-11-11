let text = document.querySelector("#text");
let part1 = document.querySelector("#image1");
let part2 = document.querySelector("#image2");
let part3 = document.querySelector("#image3");
let part4 = document.querySelector("#image4");
let rightbackground = document.querySelector(".right");
let headerbackground = document.querySelector("header");

text.textContent="Click a box to get started!";
rightbackground.style.backgroundColor = "black";
headerbackground.style.backgroundColor = "black";


part1.addEventListener('click', paragraph1);
part2.addEventListener('click', paragraph2);
part3.addEventListener('click', paragraph3);
part4.addEventListener('click', paragraph4);

function paragraph1(){
    text.textContent = "McLuhan’s “The Medium is the Message”, as it’s name implies, is focused on the idea that the physical content of a message does not matter as much as the medium that it is conveyed on. McLuhan puts emphasis on the fact that mediums have changed human behavior - for example, phones and laptops have allowed widespread access to a large variety and amount of information.";
    rightbackground.style.backgroundColor = " rgba(255, 28, 28, 0.47)";
    headerbackground.style.backgroundColor = "rgba(255, 28, 28, 1)";

}

function paragraph2(){
    text.textContent = "McLuhan discusses how especially in the context of real world implications, mediums are especially powerful. Information is an incredibly powerful and valuable commodity, and McLuhan emphasizes this in the context of watching TV; news is super accessible, and  the media plays a huge part in the perception of any and all information seen by the audience.";
    rightbackground.style.backgroundColor = " rgba(42, 145, 4, 0.47)";
    headerbackground.style.backgroundColor = "rgba(42, 145, 4, 1)";
}

function paragraph3(){
    text.textContent = "It’s important to understand how McLuhan’s insight applies to present-day issues. One huge relevant example is liberal and conservative media in the United States. The news has almost become an information war - both sides push a ruthless propaganda (yes, even the left) and both sides focus on discrediting the opponents while promoting their own. This bias is something intriguing to think about in the context of the medium - while the information that any news station could receive could be the same, the bias could completely change the meaning of the information. In this sense, bias can almost be seen as PART of the medium. ";
    rightbackground.style.backgroundColor = " rgba(28, 96, 255, 0.47)";
    headerbackground.style.backgroundColor = "rgba(28, 96, 255, 1)";
}

function paragraph4(){
    text.textContent = "I think it’s especially interesting to think about how McLuhan was able to notice all of this stuff about technological mediums back when technology had not yet developed into what it is today. It’s kind of amazing that his foresight still applies to things today.";
    rightbackground.style.backgroundColor = "  rgba(210, 28, 255, 0.47)";
    headerbackground.style.backgroundColor = "rgba(210, 28, 255, 1)";
}






