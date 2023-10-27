function checkWords() {
    var input = document.getElementById('wordInput');
    var arr = input.value.split(' ');

    var natija = document.getElementById('natija');
    natija.innerHTML = '';

    arr.forEach((word) => {
        var oxirgisi = word[word.length - 1];
        var element = document.createElement('h1');

        if (oxirgisi === 'v') {
            text = document.createTextNode(word + ' - ogilbola');
        } else{
            text = document.createTextNode(word + ' - qizbola');
        }

        element.appendChild(text);
        natija.appendChild(element);
    });
}








function aniqlash() {
    var str = document.getElementById('inputText').value;
    var pattern = /\d+/g;
    var result = [];

    str.split(" ").forEach((word) => {
      var match = word.match(pattern);
      if (match) {
        result.push(...match);
      }
    });

    document.getElementById('son').innerText = result.join(', ');
  }