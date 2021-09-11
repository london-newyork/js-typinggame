'use strict';

{
    function setWord() {
      word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
      target.textContent = word;//上を出力
      loc = 0;
    }

 //  --------------------------------ここから

  //１回のタイピングゲームにつき、必ず同じグループの中からのみ言葉が出力され、同じグループ内で完結するように
  //タイピングができるようにしたい。　例）Let it be
    const words = [
        // ['Adventure', 'is', 'worthwhile'],
        // ['Let', 'it', 'be'],
        // ['Always','be', 'honest'],
        'pink',
        'blue',
        'black',
    ];
    // const wordsConnect = words.join(' ');

// ----------------------------------ここまでカスタマイズしました

    let word;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');

    document.addEventListener('click', () => {
      if (isPlaying === true) {
        return;
      }
  
      isPlaying = true;
      startTime = Date.now();
      setWord();
    });
  
    document.addEventListener('keydown', e => {
      if (e.key !== word[loc]) {
        return;
      }
  
      loc++;
  
      // 1: _ed
      // 2: __d
      // 3: ___

      target.textContent = '☆'.repeat(loc) + word.substring(loc);
    //  --------------------------------ここから
    //   ランダムな記号でタイプした後を埋める操作
    //   const fillInObj = ['☆', '。', '*','+'];

    //   function lineUpFillInObj() {
    //     fillInObj[Math.floor(Math.random() * fillInObj.length)];
    //   }//　関数　間違っている？

    //   target.textContent = lineUpFillInObj().repeat(loc)+ word.substring(loc);
    // ----------------------------------ここまでカスタマイズしました
      if (loc === word.length) {
        if (words.length === 0) {
          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById('result');
          result.textContent = `${wordsConnect} ${elapsedTime} seconds!`;
          return;
        }
  
        setWord();
      }
    });
  }

// {
//     function setWord() {
//       word = words.splice(Math.floor(Math.random() * words.length), 1)[0];//まとまった配列群を１こ１こ操作する
//       target.textContent = word;//上を出力
//       loc = 0;
//     }
//  //  --------------------------------ここから

//     function setWordChildA() {
//         wordA = wordChildA.splice(Math.floor(Math.random() * wordChildA.length), 1)[0];
//         target.textContent = wordA;
//         // loc = 0;
//       }

//     // function setWordChildB() {
//     //     word = wordChildB.splice(Math.floor(Math.random() * wordChildB.length), 1)[0];
//     //     // target.textContent = word;
//     //     // loc = 0;
//     //   }

//     // function setWordChildC() {
//     //     word = wordChildC.splice(Math.floor(Math.random() * wordChildC.length), 1)[0];
//     //     // target.textContent = word;
//     //     // loc = 0;
//     //   }

//       const wordChildA = ['Adventure','is','worthwhile'];
//     //   const wordChildB = ['Let','it','be'];
//     //   const wordChildC = ['Always','be','honest'];


//   //１回のタイピングゲームにつき、必ず同じグループの中からのみ言葉が出力され、タイピングができるようにしたい。
//     const words = [
//         wordChildA,
//         // wordChildB,
//         // wordChildC,
//     ];
//     const wordsConnect = words.join(' ');
//     console.log(wordsConnect);

// // ----------------------------------ここまでカスタマイズしました

//     let word;
//     let loc = 0;
//     let startTime;
//     let isPlaying = false;
//     const target = document.getElementById('target');
  
//     document.addEventListener('click', () => {
//       if (isPlaying === true) {
//         return;
//       }
  
//       isPlaying = true;
//       startTime = Date.now();
//       setWord();
//     });
  
//     document.addEventListener('keydown', e => {
//       if (e.key !== word[loc]) {
//         return;
//       }
  
//       loc++;
  
//       // 1: _ed
//       // 2: __d
//       // 3: ___

//       target.textContent = '●'.repeat(loc) + word.substring(loc);
//     //  --------------------------------ここから
//     //   ランダムな記号でタイプした後を埋める操作
//     //   const fillInObj = ['☆', '。', '*','+'];

//     //   function lineUpFillInObj() {
//     //     fillInObj[Math.floor(Math.random() * fillInObj.length)];
//     //   }//　関数　間違っている？

//     //   target.textContent = lineUpFillInObj().repeat(loc)+ word.substring(loc);
//     // ----------------------------------ここまでカスタマイズしました
//       if (loc === word.length) {
//         if (words.length === 0) {
//           const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
//           const result = document.getElementById('result');
//           result.textContent = `${wordsConnect} ${elapsedTime} seconds!`;
//           return;
//         }
  
//         setWord();
//       }
//     });
//   }



// {
//     function setWord() {
//       word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
//       target.textContent = word;
//       loc = 0;
//     }
  
//     const words = [
//       'Adventure',
//       'is',
//       'worthwhile',
//     ];

//     const wordsConnect = words.join(' ');
//     console.log(wordsConnect);

//     let word;
//     let loc = 0;
//     let startTime;
//     let isPlaying = false;
//     const target = document.getElementById('target');
  
//     document.addEventListener('click', () => {
//       if (isPlaying === true) {
//         return;
//       }
  
//       isPlaying = true;
//       startTime = Date.now();
//       setWord();
//     });
  
//     document.addEventListener('keydown', e => {
//       if (e.key !== word[loc]) {
//         return;
//       }
  
//       loc++;
  
//       // 1: _ed
//       // 2: __d
//       // 3: ___
//       target.textContent = '●'.repeat(loc) + word.substring(loc);
  
//       if (loc === word.length) {
//         if (words.length === 0) {
//           const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
//           const result = document.getElementById('result');
//           result.textContent = `${wordsConnect} ${elapsedTime} seconds!`;
//           return;
//         }
  
//         setWord();
//       }
//     });
//   }

// {
//   function setWord() {
//     word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
//     target.textContent = word;
//     loc = 0;
//   }

//   const words = [
//     'red',
//     'blue',
//     'pink',
//   ];
//   let word;
//   let loc = 0;
//   let startTime;
//   let isPlaying = false;
//   const target = document.getElementById('target');

//   document.addEventListener('click', () => {
//     if (isPlaying === true) {
//       return;
//     }

//     isPlaying = true;
//     startTime = Date.now();
//     setWord();
//   });

//   document.addEventListener('keydown', e => {
//     if (e.key !== word[loc]) {
//       return;
//     }

//     loc++;

//     // 1: _ed
//     // 2: __d
//     // 3: ___
//     target.textContent = '_'.repeat(loc) + word.substring(loc);

//     if (loc === word.length) {
//       if (words.length === 0) {
//         const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
//         const result = document.getElementById('result');
//         result.textContent = `Finished! ${elapsedTime} seconds!`;
//         return;
//       }

//       setWord();
//     }
//   });
// }