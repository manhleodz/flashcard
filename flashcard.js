

const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const previouskButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

words = {
    'やあ': 'Xin chào',
    おはようございます: 'Chào buổi sáng',
    お久しぶりです: 'Lâu quá không gặp',
    'お元 気ですか': 'Bạn khoẻ không?',
    お久しぶりです: 'Lâu không gặp',
    ドラえもん: 'Doraemon',
    愛してます : 'Tôi yêu bạn',    
    たすかります: 'May quá, cảm ơn nhiều',
    きれいですね : 'Đẹp quá!',
    '野比 のび太': 'Nobi Nobita',
    すみません: 'Xin lỗi',
    どなたですか: 'Ai thế ạ?',
    どうぞ: 'Xin mời',
    いくらですか: 'Giá bao nhiêu?',
    しずか: 'Minamoto Shizuka',
    'がんばって!' : 'Cố gắng lên!',
    いただきます : 'Mời dùng bữa',
    何時ですか    : 'Mấy giờ rồi',
    ジャイアン : 'Jaian',
    正しいです    :'Đúng rồi!',
    高かいですね : 'Đắt quá nhỉ',
    'ええの？' : 'Được không?',
    おもろい : 'Thú vị thật',
    びっくりした   :'Bất ngờ quá',
    助けて    : 'Giúp tôi với',
    'また 後で' : 'Hẹn gặp lại',
    きまってるね: 'Quyết định vậy nhé',
    急いでください : 'Xin hãy nhanh lên',
    'よくやった！' : 'Bạn làm tốt lắm!',
    きまってるね : 'Quyết định vậy nhé',
    お休みなさい: 'Chúc ngủ ngon!',
    さようなら : 'Tạm biệt',
}

data = Object.entries(words);
word = data[0]
for(i = 0; i < data.length;) { 
    term.innerHTML = `<h3>${word[0]}</h3`;
    definition.innerHTML = `<h2>${word[1]}</h2`;  
    if (i == data.length - 1){
        i = 0;
    }
    if (nextButton.addEventListener('click', function() {
        i++;
        word = data[i];
        term.innerHTML = `<h3>${word[0]}</h3`;
        definition.innerHTML = `<h2>${word[1]}</h2`;   
    }));
    console.log(i);
    if (previouskButton.addEventListener('click', function() {
        i--;
        word2 = data[i];
        term.innerHTML = `<h3>${word2[0]}</h3`;
        definition.innerHTML = `<h2>${word2[1]}</h2`;          
    }));
    break;
}


