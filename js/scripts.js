function scrabbleScore(word) {
    if (word.search(' ') > -1) {
        return -1;
    }
    var score = 0;
    var points = {
        1: ['a', 'e', 'i', 'l', 'n', 'o', 'r', 's', 't', 'u'],
        2: ['d', 'g'],
        3: ['b', 'c', 'm', 'p'],
        4: ['f', 'h', 'v', 'w', 'y'],
        5: ['k'],
        8: ['j', 'x'],
        10: ['q', 'z']
    };

    word = word.toLowerCase().split('');
    for (var i = 0; i < word.length; i++) {
        $.each(points, function(key, value) {
            if (value.indexOf(word[i]) > -1) {
                score += parseInt(key);
            }
        });
    };

    return score;
};
