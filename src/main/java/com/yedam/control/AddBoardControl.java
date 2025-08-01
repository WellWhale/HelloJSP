package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class AddBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
		// key=value , 파일 둘 다 처리해줘야됨
		// cos.jar <= 라이브러리 활용해서 Multipart 처리
		// 게시글을 DB에 insert
		
		// upload 폴더에 저장할거임
		String upload = req.getServletContext().getRealPath("upload");
		System.out.println(upload);
												//요청정보, 업로드경로, 업로드가능한최대용량, 인코딩방식, 같은이름으로 파일을 올릴때 리네임 해주기
		MultipartRequest mr = new MultipartRequest(req, upload, 1024 * 1024 * 5, "UTF-8", new DefaultFileRenamePolicy());
		
		
		// addBoard.do?title=???&writer=???&content=??? 이렇게 값이 넘어옴
		String title = mr.getParameter("title");
		String writer = mr.getParameter("writer");
		String content = mr.getParameter("content");
		String img = mr.getFilesystemName("images");//파일이름
		
		BoardVO param = new BoardVO();//등록하는기능
		param.setTitle(title);
		param.setWriter(writer);
		param.setContent(content);
		param.setImage(img);
		
		BoardService svc = new BoardServiceImpl();//등록하는기능
		if(svc.registerBoard(param)) {
			//목록이동
			resp.sendRedirect("boardList.do");
		} else {
			System.out.println("에러 발생");
		}

		
	}

}
