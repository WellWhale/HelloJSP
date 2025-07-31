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

		// addBoard.do?title=???&writer=???&content=??? 이렇게 값이 넘어옴
		int bno = Integer.parseInt(req.getParameter("bno"));
		String title = req.getParameter("title");
		String content = req.getParameter("contnet");

		BoardVO board = new BoardVO();// 수정하는기능
		board.setBoardNo(bno);
		board.setTitle(title);
		board.setContent(content);

		BoardService svc = new BoardServiceImpl();// 수정하는기능
		int result = svc.updateBoard(board);
		
		if (result > 0) {
            // 수정 성공 → 상세 페이지로
            resp.sendRedirect("board.do?bno=" + bno);
        } else {
            // 수정 실패 → 에러 페이지 혹은 다시 폼
            resp.sendRedirect("modifyForm.do?bno=" + bno + "&error=fail");
        }

	}

}
