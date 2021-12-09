# 6주차 미니 프로젝트 2조   
       
+ 팀명 : 항해톡 (hanghaelog)      
+ 주제 : 항해하는 동안의 기록을 위한 소셜 미디어   
       
       
       
## GitHub Repogitory      
      
- FrontEnd => [ FrontEndRepo 바로가기 ](https://github.com/undriedspring/mini_hanghaelog)

- BackEnd => [ BackEndRepo 바로가기 ]()    

      
      
## 프로젝트 타임 테이블      
      
- 09 : 00 체크인 / 공유 및 수정사항에 대한 회의
- 09 : 30 FrontEnd 작업현황과 오늘의 목표 공유, 전날 작업한 분량 Repo에 Push & Merge
- 12 : 00 점심 식사
- 13 : 00 FrontEnd 오전 진행상황 공유, Repo에 2차 Push & Merge
- 18 : 00 저녁 식사
- 19 : 00 FrontEnd 오후 진행상황 공유, Repo에 3차 Push & Merge
- 23 : 00 FrontEnd 저녁 진행상황 공유, Repo에 4차 Push & Merge
- 23 : 00 ~ 자유롭게 작업 및 휴식     

      
            
                  
## [API 설계](https://enormous-duck-a5d.notion.site/API-71e05797b9ef45858737aad98034e9f1)       
      
#### User API      

|기능|method|url|request|response|
|:--------:|:---:|:---:|:----------:|:-----------:|
|로그인|```POST```|/api/auth/login|```{ email: email, password:password }```|```{ token:token, user: { id:id, nickname:nickname }}```|
|회원가입|```POST```|/api/auth/register|```{ email:email, nickname:nickname, password:password, passwordCheck:passwordCheck }```|```{ ok:true, msg:회원가입에 성공하셨습니다. }```|
    
#### Post API       

|기능|method|url|request|response|
|:--------:|:---:|:---:|:----------:|:-----------:|
|게시글 작성|```POST```|/api/posts|```{ img: "", nickname: nickname, content: content }```|```status code : 201```|
|게시글 수정|```PUT```|/api/posts/:postId|```{ img: "", content: content }```|```status code : 204```|
|게시글 삭제|```DELETE```|/api/posts/:postId|```없음```|```status code : 204```|
|게시글 목록|```GET```|/api/posts|```없음```|```{posts: [{id: postId, userId: userId, nickname: nickname, createdAt: createdAt, content: content, imgUrl: "", numOfComments: numOfComment,},]}```|
        
#### Comment API       
         
|기능|method|url|request|response|
|:--------:|:---:|:---:|:----------:|:-----------:|
|댓글 작성|```POST```|/api/posts/:postId/comments|```{ comment: comment, nickname: nickname }```|```{ ok: true/false, msg: 작성완료 }```|
|댓글 수정|```PUT```|/api/posts/:postId/comments/:commentId|```{ img: "", content: content }```|```{ ok: true/false, msg: 수정완료 }```|
|댓글 삭제|```DELETE```|/api/posts/:postId/comments/:commentId|```없음```|```없음```|
|댓글 목록|```GET```|/api/posts/:postId/comments|```없음```|```{ "comments": [{ "id": id, "userId": id, "postId": id, "comment": comment, "nickname": nickname }, { "id": id2, "userId": id2, "postId": id2, "comment": comment2, "nickname": nickname2 },]}```|



