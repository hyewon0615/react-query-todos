import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getTodos } from "../../../api/todos";
import { StyledButton, StyledDiv, StyledTable, StyledTh } from "./styles";
/**
 * 컴포넌트 개요 : Todo 메인 컴포넌트에서 각 todo item의 [상세보기]를 선택했을 경우 보이는 컴포넌트 영역
 * 2022.12.16 : 최초 작성
 *
 * @returns DetailBox 컴포넌트
 */
function DetailBox() {
  // 다른 컴포넌트로 이동하기 위한 useNavigate
  const navigate = useNavigate();

  // 이전 컴포넌트에서 넘어온 parameter를 조회
  const params = useParams();

  // // 이 컴포넌트에서 아이템을 사용하기 위해, params로 전달받은 id를 이용-todo를 filtering

  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  const filteredTodos = data.find((item) => item.id === params.id);

  // 이전 페이지로 가기 버튼을 선택했을 때, 컴포넌트 이동하는 함수
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <StyledDiv>
      <h3>TODO 상세페이지</h3>
      <StyledTable>
        <tr>
          <StyledTh>KEY</StyledTh>
          <StyledTh>VALUE</StyledTh>
        </tr>
        <tr>
          <StyledTh>ID</StyledTh>
          <StyledTh>{filteredTodos?.id}</StyledTh>
        </tr>
        <tr>
          <StyledTh>TITLE</StyledTh>
          <StyledTh>{filteredTodos?.title}</StyledTh>
        </tr>
        <tr>
          <StyledTh>CONTENTS</StyledTh>
          <StyledTh></StyledTh>
        </tr>
        <tr>
          <StyledTh>완료여부</StyledTh>
          <StyledTh>{filteredTodos?.isDone ? "완료" : "미완료"}</StyledTh>
        </tr>
      </StyledTable>
      <StyledButton onClick={handleButtonClick}>
        이전 페이지로 가기
      </StyledButton>
    </StyledDiv>
  );
}

export default DetailBox;
