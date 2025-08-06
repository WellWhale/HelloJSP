package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	List<ReplyVO> replyList(@Param("boardNo")int boardNo,@Param("page")int page);// 목록 가져오는 기능, page는 paging 기능, 둘다 int 반환이면 이렇게 param 써야됨
	int deleteReply(int replyNo);// 댓글삭제(삭제, 인서트는 int 반환)
	int insertReply(ReplyVO reply);// 댓글등록
	
}
