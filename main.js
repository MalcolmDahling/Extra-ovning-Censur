function censor(words){
    words = words.replace('a', '*');
    words = words.replace('e', '*');
    words = words.replace('i', '*');
    words = words.replace('o', '*');
    words = words.replace('u', '*');
    words = words.replace('y', '*');
    words = words.replace('å', '*');
    words = words.replace('ä', '*');
    words = words.replace('ö', '*');

    console.log(words);
}

censor('asdf');