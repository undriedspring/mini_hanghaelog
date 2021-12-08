import React from 'react'
import './Comments.css'
import Response from '../shared/Response'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import { Grid, Button, Image, Input, Text } from '../elements'

const Comments = (props) => {
  // const resp = RESP.COMMENTLIST
  // for (let i = 0; i < resp.length; i++) {}
  return (
    <React.Fragment>
      <Container>
        <Grid maxWidth="800px" minWidth="300px">
          <Grid is_flex padding="30px" margin="100px 0 5px 0" width="auto" border="2px solid #a496c7">
            <div className="profileImage">
              <Image shape="circle" size="70" />
            </div>
            <Grid margin="0px 0px 60px 5px">
              <Text color="black" size="30px" margin="15px 0 0 10px">
                213am
              </Text>
              <Grid margin="-6px 0 0 10px">
                <hr noshade width="140px" align="left"></hr>
              </Grid>
              <Grid min-width="300px" max-width="500px">
                <Text color="#333333" margin="15px 0 0 10px" size="20px">
                  &nbsp;오늘은 글자수 제한을 140자로 했을 때, 얼마나 많은 내용이 담기는 지 알아보겠습니다. 띄어쓰기를 포함해 140자인데 이게 생각보다는 많은 내용이 들어가네요? 이렇게 주저리주저리
                  말해도 고작 100자 정도라니 꽉 채워서 댓글다는 사람에게는 잘해주세요
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid width="100%" margin="0px 0px 20px 0px" is_flex>
            <input className="commentLine" type="text" placeholder="최대 140자까지 자유롭게 댓글을 남길 수 있습니다 : )" maxlength="140" />
            <SendIcon class="commentSubmit" onClick=""></SendIcon>
          </Grid>
          <Grid justify-content="center">
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  댓글 목록입니다. 최대 글자수는 140자 입니다. 왠지 대부분의 댓글은 한줄에 모두 다 담기게 될 것 같네요... 140자까지 작성하면 어떻게 보이는지만 한번 확인해보려고 하는데 이게 생각보다
                  길어서 할 말이 별로 없습니다만, 열심히 한번 떠들어볼게요
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 한 줄에 담기는 글자수는 몇 자 일까요? 정확하게 42자가 되네요 충분</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  세 줄이 되면, 125자가 담기는데 그건 어느정도 양이 될까요? 아마 그정도면 140자 가득채운거나 다를 바가 없을 거 같다는 생각은 드네요! 아무래도 그정도면 하고싶은 말은 대부분 적을 수
                  있을거라고 생각되는데, 어떠세요?
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 두 줄에는 42 곱하기 2 해서 84자가 담기겠죠? 사실 저는 SNS를 하면서 두 줄이나 되는 댓글을 달아본 기억이 없어서 이정도만 해도 충분해요</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  댓글 목록입니다. 최대 글자수는 140자 입니다. 왠지 대부분의 댓글은 한줄에 모두 다 담기게 될 것 같네요... 140자까지 작성하면 어떻게 보이는지만 한번 확인해보려고 하는데 이게 생각보다
                  길어서 할 말이 별로 없습니다만, 열심히 한번 떠들어볼게요
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 한 줄에 담기는 글자수는 몇 자 일까요? 정확하게 42자가 되네요 충분</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  세 줄이 되면, 125자가 담기는데 그건 어느정도 양이 될까요? 아마 그정도면 140자 가득채운거나 다를 바가 없을 거 같다는 생각은 드네요! 아무래도 그정도면 하고싶은 말은 대부분 적을 수
                  있을거라고 생각되는데, 어떠세요?
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 두 줄에는 42 곱하기 2 해서 84자가 담기겠죠? 사실 저는 SNS를 하면서 두 줄이나 되는 댓글을 달아본 기억이 없어서 이정도만 해도 충분해요</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  댓글 목록입니다. 최대 글자수는 140자 입니다. 왠지 대부분의 댓글은 한줄에 모두 다 담기게 될 것 같네요... 140자까지 작성하면 어떻게 보이는지만 한번 확인해보려고 하는데 이게 생각보다
                  길어서 할 말이 별로 없습니다만, 열심히 한번 떠들어볼게요
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 한 줄에 담기는 글자수는 몇 자 일까요? 정확하게 42자가 되네요 충분</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  세 줄이 되면, 125자가 담기는데 그건 어느정도 양이 될까요? 아마 그정도면 140자 가득채운거나 다를 바가 없을 거 같다는 생각은 드네요! 아무래도 그정도면 하고싶은 말은 대부분 적을 수
                  있을거라고 생각되는데, 어떠세요?
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 두 줄에는 42 곱하기 2 해서 84자가 담기겠죠? 사실 저는 SNS를 하면서 두 줄이나 되는 댓글을 달아본 기억이 없어서 이정도만 해도 충분해요</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  댓글 목록입니다. 최대 글자수는 140자 입니다. 왠지 대부분의 댓글은 한줄에 모두 다 담기게 될 것 같네요... 140자까지 작성하면 어떻게 보이는지만 한번 확인해보려고 하는데 이게 생각보다
                  길어서 할 말이 별로 없습니다만, 열심히 한번 떠들어볼게요
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 한 줄에 담기는 글자수는 몇 자 일까요? 정확하게 42자가 되네요 충분</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  세 줄이 되면, 125자가 담기는데 그건 어느정도 양이 될까요? 아마 그정도면 140자 가득채운거나 다를 바가 없을 거 같다는 생각은 드네요! 아무래도 그정도면 하고싶은 말은 대부분 적을 수
                  있을거라고 생각되는데, 어떠세요?
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 두 줄에는 42 곱하기 2 해서 84자가 담기겠죠? 사실 저는 SNS를 하면서 두 줄이나 되는 댓글을 달아본 기억이 없어서 이정도만 해도 충분해요</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  댓글 목록입니다. 최대 글자수는 140자 입니다. 왠지 대부분의 댓글은 한줄에 모두 다 담기게 될 것 같네요... 140자까지 작성하면 어떻게 보이는지만 한번 확인해보려고 하는데 이게 생각보다
                  길어서 할 말이 별로 없습니다만, 열심히 한번 떠들어볼게요
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 한 줄에 담기는 글자수는 몇 자 일까요? 정확하게 42자가 되네요 충분</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  세 줄이 되면, 125자가 담기는데 그건 어느정도 양이 될까요? 아마 그정도면 140자 가득채운거나 다를 바가 없을 거 같다는 생각은 드네요! 아무래도 그정도면 하고싶은 말은 대부분 적을 수
                  있을거라고 생각되는데, 어떠세요?
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 두 줄에는 42 곱하기 2 해서 84자가 담기겠죠? 사실 저는 SNS를 하면서 두 줄이나 되는 댓글을 달아본 기억이 없어서 이정도만 해도 충분해요</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  댓글 목록입니다. 최대 글자수는 140자 입니다. 왠지 대부분의 댓글은 한줄에 모두 다 담기게 될 것 같네요... 140자까지 작성하면 어떻게 보이는지만 한번 확인해보려고 하는데 이게 생각보다
                  길어서 할 말이 별로 없습니다만, 열심히 한번 떠들어볼게요
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 한 줄에 담기는 글자수는 몇 자 일까요? 정확하게 42자가 되네요 충분</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>
                  세 줄이 되면, 125자가 담기는데 그건 어느정도 양이 될까요? 아마 그정도면 140자 가득채운거나 다를 바가 없을 거 같다는 생각은 드네요! 아무래도 그정도면 하고싶은 말은 대부분 적을 수
                  있을거라고 생각되는데, 어떠세요?
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px" width="auto">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px" width="auto">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid margin="20px">
                {/* 공백포함 180자 */}
                <Text>그럼 두 줄에는 42 곱하기 2 해서 84자가 담기겠죠? 사실 저는 SNS를 하면서 두 줄이나 되는 댓글을 달아본 기억이 없어서 이정도만 해도 충분해요</Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <button className="CommentEditButton">수정</button>
                <button className="CommentDeleteButton">삭제</button>
              </Grid>
            </Grid>
            {/* 댓글 */}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  max-width: 1000px;
  min-width: 650px;
  margin: 0px auto 0px auto;
  display: flex;
  justify-content: space-around;
`

export default Comments

const CommentItem = (props) => {
  const { comment, commentsId, userId, postiId } = props
  return (
    <Grid is_flex border=".5px solid" margin="0 0 5px 0">
      <Grid is_flex padding="15px">
        <Image shape="circle" size="30"></Image>
        <Grid margin="0px 5px">
          <Text color="#333333" width="auto" bold>
            {userId}
          </Text>
        </Grid>
      </Grid>
      <Grid>
        <Text>{comment}</Text>
      </Grid>
    </Grid>
  )
}
