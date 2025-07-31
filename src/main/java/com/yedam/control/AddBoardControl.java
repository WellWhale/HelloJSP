package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class AddBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
		// addBoard.do?title=???&writer=???&content=??? 이렇게 값이 넘어옴
		String title = req.getParameter("title");
		String writer = req.getParameter("writer");
		String content = req.getParameter("content");
		
		BoardVO param = new BoardVO();//등록하는기능
		param.setTitle(title);
		param.setWriter(writer);
		param.setContent(content);
		
		BoardService svc = new BoardServiceImpl();//등록하는기능
		if(svc.registerBoard(param)) {
			//목록이동
			resp.sendRedirect("boardList.do");
		} else {
			System.out.println("에러 발생");
		}
		
		
		
		
	}

}
