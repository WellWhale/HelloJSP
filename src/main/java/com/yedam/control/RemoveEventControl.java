package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;

public class RemoveEventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String title = req.getParameter("title");
		
		EventService svc = new EventServiceImpl();

		if(svc.deleteEvent(title)) {
			// {"retCode":"OK"} 잘 되면
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			// {"retCode":"NG"} 안 되면
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
	}
}
