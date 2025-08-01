package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class BoardControl implements Control  {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//parameter(?bno=n)
		//board.do?bno=132&page=1 로 넘어오게 수정했음
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");//보던 페이지로 돌아오기 기능을 위해 추가
		
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.searchBoard(Integer.parseInt(bno));
		
		//board_info
		req.setAttribute("board_info", board);
		req.setAttribute("page", page);//보던 페이지로 돌아오기 기능을 위해 추가

		//요청재지정
		req.getRequestDispatcher("user/board.tiles").forward(req, resp);
		
	}

}
