package com.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.mapper.ReplyMapper;
import com.yedam.vo.ReplyVO;

public class Main {

	public static void main(String[] args) {
		// 연습용이라 지울 예정이라고 함
		SqlSession sqlSession = DBUtil.getInstance().openSession();
		ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
		
		List<ReplyVO> list = mapper.replyList(137);
		for (ReplyVO reply : list) {
			System.out.println(reply);
		}

	}

}
