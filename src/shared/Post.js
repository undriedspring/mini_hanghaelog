import React from 'react'
import Image from '../elements/Image'
import Input from '../elements/Input'

function Post(props) {
  return (
    <>
      <div>
        <Image shape="circle" src={props.src}></Image>
        <div>닉네임</div>
        <br></br>
        <br></br>
        <Image size="500" src="http://storage.enuri.info/pic_upload/knowbox2/202005/0836300692020050764813b0b-b934-4ddf-beea-fb1f1ac03b16.jpg"></Image>
        <br></br>
        <br></br>
        <Input width="50%" label="댓글" placeholder="이 사진에 대해 말하고 싶은 내용이 있나요?"></Input>
        <br></br>
        <br></br>
        <Input multiline></Input>
      </div>
    </>
  )
}

export default Post
