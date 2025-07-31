package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.BoardVO;

// 규칙만 정의(추상메소드)
public interface BoardMapper {
	public List<BoardVO> selectList(SearchDTO search);//목록조회, 타겟없이 전체 출력이니까 빈값
	public BoardVO selectBoard(int boardNo);//단건조회, 타겟 있으니까 값있음
	public int updateCount(int boardNo);//조회수 증가
	public int insertBoard(BoardVO board); // DB에 insert
	public int deleteBoard(int boardNo); // DB에 delete
	public int selectCount(SearchDTO search);//게시글 전체건수 파악
	public BoardVO updateBoard(BoardVO board);//수정기능
}