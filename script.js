p = document.querySelectorAll("p");

//https://github.com/spencermountain/compromise/blob/master/README.md
//"Use it on the client-side: ..."


// Match

var doc = nlp("How many times have I told you that I am the best of times?")
p[0].innerHTML = doc.match('have I #Verb').text()


// Verbs
var doc = nlp('I have been a good boy. She sells seashells by the seashore.')
doc.verbs().toPastTense()
p[1].innerHTML = doc.text()


// Numbers

document.querySelector("head").innerHTML += '<script src="https://unpkg.com/compromise-numbers"></script>'
// The above doesn't work.. You have to write it in head before running

nlp.extend(compromiseNumbers)

var doc = nlp('two bottles of beer')
doc.numbers().minus(1)
p[2].innerHTML = doc.text()


