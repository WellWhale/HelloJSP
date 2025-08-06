package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class ReplyListControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 댓글 목록을 json 문자열로 만드려고 함
		
		// 셋팅
		resp.setContentType("text/json;charset=utf-8");
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		
		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno), Integer.parseInt(page));
		
		// mvn repository 들어가서 gson 검색해서 라이브러리 가져왔음 무슨 기능인진 검색 활용
		// pom.xml 에 내용은 들어있어서 따로 다운받을건 없음
		// 편하게 json 문자열 객체를 만들기 위한 라이브러리 라고 함
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		// 출력스트림
		resp.getWriter().print(json);

	}

}
