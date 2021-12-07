import React from 'react'
import './Comments.css'
import Response from '../shared/Response'
import styled from 'styled-components'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { Grid, Button, Image, Input, Text } from '../elements'

const Comments = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid maxWidth="800px" minWidth="300px">
          <Grid is_flex padding="30px" margin="100px 0 5px 0" width="auto" border=".5px solid #a496c7">
            <div className="profileImage">
              <Image shape="circle" size="70" />
            </div>
            <Grid margin="0px 0px 60px 5px">
              <Text color="black" size="30px" margin="15px 0 0 10px">
                213am
              </Text>
              <Grid min-width="300px" max-width="500px">
                <Text color="#333333" margin="15px 0 0 10px" size="20px">
                  &nbsp;Axios요..? 이럴거면 왜 firebase에 왜 그렇게 시달리게 하셨어요ㅠㅠ Axios요..? 이럴거면 왜 firebase에 왜 그렇게 시달리게 하셨어요ㅠㅠ Axios요..? 이럴거면 왜 firebase에 왜 그렇게
                  시달리게 하셨어요ㅠㅠ Axios요..? 이럴거면 왜 firebase에 왜 그렇게 시달리게 하셨어요ㅠㅠ 레이아웃 잡고 Axios 공부할게요
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid></Grid>
          <Grid width="100%" margin="0px 0px 20px 0px" is_flex>
            <input className="commentLine" type="text" placeholder="댓글을 남겨보세요" />
            <BorderColorIcon class="commentSubmit" onClick=""></BorderColorIcon>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
                  댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘
                  모르겠네요... 댓글 목록입니다. 최대 글자수는 200자 입니다. 얼마나 써야 200자가 될 지는 저도 잘 모르겠네요... 이정도는 써야 200자가 되네요 와우
                </Text>
              </Grid>
              <Grid is_flex width="auto" margin="30px">
                <Button width="40px" height="30px" margin="10px">
                  수정
                </Button>
                <Button width="40px" height="30px">
                  삭제
                </Button>
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
  margin: 120px auto 0 auto;
  display: flex;
  justify-content: center;
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
