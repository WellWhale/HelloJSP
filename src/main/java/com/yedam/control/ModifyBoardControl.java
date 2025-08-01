package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModifyBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");

		// bno, title, content 값이 넘어옴, 넘어온 값을 변수에 담음
		String bno = req.getParameter("bno");
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		String page = req.getParameter("page");//보던 페이지로 돌아오기 기능을 위해 추가

		BoardVO param = new BoardVO();// 위 변수들을 한번에 아래에 담기위해 선언
		param.setBoardNo(Integer.parseInt(bno));
		param.setTitle(title);
		param.setContent(content);

		BoardService svc = new BoardServiceImpl();// 수정 성공시 전페이지, 실패시 프린트
		if (svc.modifyBoard(param)) {
			// 목록이동
			resp.sendRedirect("boardList.do?page=" + page);//보던 페이지로 돌아오기 기능을 위해 수정
		} else {
			System.out.println("에러 발생");
		}

	}

}