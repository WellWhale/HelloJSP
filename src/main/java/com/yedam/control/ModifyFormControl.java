package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModifyFormControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 수정화면 입니다
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");//보던 페이지로 돌아오기 기능을 위해 추가

		// DB조회
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.searchBoard(Integer.parseInt(bno));

		// 권한 확인 (로그인시 로그인아이디와 작성자아이디를 비교)
		HttpSession session = req.getSession();
		String logId = (String) session.getAttribute("logId");
		if (logId != null && logId.equals(board.getWriter())) {//권한 확인이 된다면

			// view영역(jsp)로 값을 전달할 정보를 담음
			req.setAttribute("board_info", board);
			req.setAttribute("page", page);//보던 페이지로 돌아오기 기능을 위해 추가

			// 요청재지정, 이 페이지의 정보로 보여줌 (정보를 보여줌)
			req.getRequestDispatcher("WEB-INF/html/modify_board.jsp").forward(req, resp);
		} else {//아니라면
			//board_info
			req.setAttribute("board_info", board);
			req.setAttribute("msg", "권한이 없습니다");

			//보여줄것
			req.getRequestDispatcher("WEB-INF/html/board.jsp").forward(req, resp);
		}

	}

}
