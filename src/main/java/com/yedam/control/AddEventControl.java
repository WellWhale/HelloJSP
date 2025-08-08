package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;
import com.yedam.vo.EventVO;

public class AddEventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
        resp.setContentType("application/json;charset=utf-8");

        String title = req.getParameter("title");
        String start = req.getParameter("start");
        String end   = req.getParameter("end");

        EventVO vo = new EventVO();
        vo.setTitle(title);
        vo.setStart(start);
        vo.setEnd(end);

        EventService svc = new EventServiceImpl();
        
        try {
            boolean ok = svc.addEvent(vo);     // DB 실행 결과 기반
            resp.getWriter().print("{\"retCode\":\"" + (ok ? "OK" : "NG") + "\"}");
        } catch (Exception e) {
            // ORA-01400 같은 예외가 여기서 잡힘 → 500 대신 NG로 응답
            resp.getWriter().print("{\"retCode\":\"NG\"}");
        }
	}

}
