// /**
//  * 0  空き
//  * 1  玉
//  * 2  金
//  * 3  銀
//  * 4  桂
//  * 5  香
//  * 6  飛
//  * 7  角
//  * 8  歩
//  * 9  成銀
//  * 10 成桂
//  * 11 成香
//  * 12 龍
//  * 13 馬
//  * 14 と金
//  */



// const initialState = {
//   firstBoardPieces: [
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [8,8,8,8,8,8,8,8,8],
//     [0,7,0,0,0,0,0,6,0],
//     [5,4,3,2,1,2,3,4,5],
//   ],
//   firstCapturedPieces: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
//   lastBoardPieces: [
//     [5,4,3,2,1,2,3,4,5],
//     [0,6,0,0,0,0,0,7,0],
//     [8,8,8,8,8,8,8,8,8],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//   ],
//   secondCapturedPieces: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
// }

export default (state, action) => {
  let nextState = Object.assign({}, state);

  switch (action.type) {

    default:
      return nextState;
  }
};