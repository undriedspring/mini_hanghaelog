// HotDeal.jsx
// const resp = await axios.get('EC2IP:8000/api/hotdeals')
// const resp = RESP.HOTDEALS
// for (let i = 0; i < resp.length; i++) {}

// response.js
export const RESP = {
  LOGIN: {
    ok: true,
    token: 'sdfjksngkjndk',
    msg: '로그인에 성공하셨습니다.',
  },

  REGISTER: {
    ok: true,
    msg: '회원가입에 성공하셨습니다.',
  },

  COMMENTWRITE: {
    ok: true,
    msg: '작성 완료',
  },

  COMMENTEDIT: {
    ok: true,
    msg: '수정 완료',
  },

  COMMENTLIST: {
    comments: [
      {
        commentsId: 'AAAA',
        userId: 'sdfggs',
        postId: 'fghdfhdgf',
        comment: '고양이 너무 귀여워요.',
      },
      {
        commentsId: 'BBBB',
        userId: 'ertryy',
        postId: 'sdghhfd',
        comment: '지금 너무 졸려요.',
      },
      {
        commentsId: 'CCCC',
        userId: 'hfdger',
        postId: 'sfdghdfg',
        comment: '오늘 너무 추워요.',
      },
      {
        commentsId: 'DDDD',
        userId: 'gczasd',
        postId: 'etgdfgdg',
        comment: '할 게 너무 많아요.',
      },
    ],
  },

  POSTLIST: {
    posts: [
      {
        userId: 'ertryy',
        postId: 'fghdfhdgf',
        nickname: '가나다라',
        createdAt: '2021-10-22 11:24:25',
        content: '고양이 진짜 귀엽죠??',
        imgUrl: 'http://image.dongascience.com/Photo/2020/10/8a5748b94df480da7df06adcdaa417c9.jpg',
        numOfComments: 7,
      },
      {
        userId: 'hfdger',
        postId: 'sdghhfd',
        nickname: '마바사',
        createdAt: '2021-02-13 15:47:23',
        content: '고양이 너무 귀엽죠??',
        imgUrl: 'https://cdn3.jjal.gg/image09/2020-09-12jedcyyym.webp',
        numOfComments: 10,
      },
      {
        userId: 'gczasd',
        postId: 'sfdghdfg',
        nickname: '아자차카',
        createdAt: '2021-06-25 06:53:12',
        content: '재롱이 너무 귀엽죠???',
        imgUrl: 'https://image-notepet.akamaized.net/resize/620x-/seimage/20200320%2Fc69c31e9dde661c286a3c17201c79d35.jpg',
        numOfComments: 3,
      },
      {
        userId: 'sdfggs',
        postId: 'etgdfgdg',
        nickname: '타파하',
        createdAt: '2021-12-04 23:33:22',
        content: '몽자 너무 귀엽죠??',
        imgUrl:
          'https://mblogthumb-phinf.pstatic.net/MjAxOTEyMTdfMTE3/MDAxNTc2NTkzMzEyNjU0.qUgY_fmhlnwaHVPROZeHy6IiX-1peh20J9y3i0-leBkg.YP8t06X0uEkGReClBBPVY_POJ_Ox-RGJBuv3FBdZgEkg.JPEG.prettysyjudy/IMG_7260.JPG?type=w800',
        numOfComments: 22,
      },
    ],
  },
}

export default Response
