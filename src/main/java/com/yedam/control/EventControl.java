package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.yedam.common.Control;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;
import com.yedam.vo.EventVO;

public class EventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("application/json; charset=UTF-8");
		
		EventService svc = new EventServiceImpl();
        List<EventVO> events = svc.eventList();

        // 바로 배열 형태로 JSON 직렬화
        String json = new Gson().toJson(events);
        resp.getWriter().print(json);

	}

}
