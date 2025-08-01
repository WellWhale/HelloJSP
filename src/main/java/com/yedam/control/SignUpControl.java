package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class SignUpControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// id, pw, name 넘어옴
		// 회원가입 완료 -> 게시글목록 페이지

		req.setCharacterEncoding("utf-8");

		String id = req.getParameter("id");
		String psw = req.getParameter("psw");
		String name = req.getParameter("name");

		MemberVO param = new MemberVO();// 등록하는기능
		param.setMemberId(id);
		param.setMemberPw(psw);
		param.setMemberName(name);

		MemberService svc = new MemberServiceImpl();// 등록하는기능
		if (svc.addMember(param)) {
			// 목록이동
			resp.sendRedirect("boardList.do");
		} else {
			System.out.println("에러 발생");
		}

	}

}
