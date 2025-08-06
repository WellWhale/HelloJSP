package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;

public class RemoveReplyControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 댓글번호 -> DB삭제 -> 처리결과 반환
		String rno = req.getParameter("rno");// 댓글 번호를 받아와서 rno로 저장
		
		// 서비스 호출
		ReplyService svc = new ReplyServiceImpl();// 삭제가 잘 됐는지 확인하려고 호출
		
		if(svc.removeReply(Integer.parseInt(rno))) {
			// {"retCode":"OK"} 잘 되면
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			// {"retCode":"NG"} 안 되면
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}

	}

}
