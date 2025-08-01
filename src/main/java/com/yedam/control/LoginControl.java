package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class LoginControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 넘어오는 param 처리 -> uname, psw 넘어옴 < 이름 주의
		String id = req.getParameter("uname");
		String psw = req.getParameter("psw");
		
		// DB처리
		MemberService svc = new MemberServiceImpl();
		MemberVO member = svc.userCheck(id, psw);
		
		// 세션(페이지 이동)
		if(member == null) {
			
		} else {
			//id와 pw를 입력했음
			//세션을 확용하여 해당 정보 저장
			HttpSession session = req.getSession();// 요청정보에 넘어온 값을 확인해서 세션객체를 만들어줌
			session.setAttribute("logId", id);// logId라는 속성에 값을 담음
			resp.sendRedirect("boardList.do");
		}

	}

}
