// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  return gifts;
}

wrapGifts(gifts);

function writeCards(key,type){
    let names = [];
  for(let i=0; i<key.length;i++){
      names[i]=`Thank you, ${key[i]}, for the wonderful ${type} gift!`
    }
    console.log(names);
    return names;
  }


function countDown(x){
    for(let age=x; age>=0; age--){
        console.log(age)
    }
}