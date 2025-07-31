package com.yedam;
// 서블릿의 실행순서

// 페이지:75

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

@WebServlet("/board")
public class BoardServlet extends HttpServlet {

	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init() 메소드 호출");
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		if (req.getMethod().equals("GET")) {
			resp.setContentType("text/html;charset=utf-8");

			System.out.println("service() 메소드 호출");
			// http://localhost:8080/HelloJSP/board?board_no=3&writer=user01
			String board_no = req.getParameter("board_no");
			int bno = Integer.parseInt(board_no);

			BoardService svc = new BoardServiceImpl();
			BoardVO board = svc.searchBoard(bno);

			// 글번호: ?번 제목: ???
			// 내용: ???
			// 작성자: ???
			// 작성일시: ????.??.??
			String html = "<table border='2'>";
			html += "<tr><th>글번호</th><td>" + board.getBoardNo() + "</th>제목<td>" + board.getTitle() + "</th></tr>";
			html += "<tr><th>내용</th><td colspan='3'>" + board.getContent() + "</td></tr>";
			html += "<tr><th>작성자</th><td colspan='3'>" + board.getWriter() + "</td></tr>";
			html += "<tr><th>작성일시</th><td colspan='3'>" + board.getCreationDate() + "</td></tr>";
			html += "</table>";

			html += "<div><a href='DeleteBoard?board_no=" + board.getBoardNo() + "'>글삭제</a></div>";
			html += "<div><a href='BoardListServlet'>이동</a></div>";

			resp.getWriter().print(html);
		} else if (req.getMethod().equals("POST")) {
			
			// POST방식은 요청정보의 인코딩을 지정해야한다
			req.setCharacterEncoding("utf-8");//한글처리
			
			String title = req.getParameter("title");
			String content = req.getParameter("content");
			String writer = req.getParameter("writer");

			BoardVO param = new BoardVO();
			param.setTitle(title);
			param.setContent(content);
			param.setWriter(writer);

			BoardService svc = new BoardServiceImpl();
			if (svc.registerBoard(param)) {
				resp.sendRedirect("BoardListServlet");
			} else {
				System.out.println("에러발생"); // 에러페이지(jsp)
			}
		}
	}
}// end
